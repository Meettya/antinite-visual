/*
 * Global diagram
 */
import options from './options'
import BaseRender from './base_render'

class GlobalDiagram extends BaseRender {
  constructor (props) {
    super(props)
    this.clickHandler = this.clickHandler.bind(this)
    this.changeCursorBuilder = this.changeCursorBuilder.bind(this)
    this.onServiceHandler = () => {}
  }

  setClickHandler (fn) {
    this.onServiceHandler = fn
    return this
  }

  getSubSet (layerId, services) {
    let serviceId
    let nodes = []
    let edges = []

    services.forEach((service) => {
      serviceId = `${layerId}.${service.name}`
      nodes.push({
        id: serviceId,
        label: service.name,
        group: 'service'
      })
      edges.push({
        from: layerId,
        to: serviceId
      })
    })
    return { nodes, edges }
  }

  getNetworkSet (system) {
    let childrenSet
    let nodes = []
    let edges = []

    system.forEach((parent) => {
      nodes.push({
        id: parent.name,
        label: parent.name,
        group: 'layer'
      })
      if (parent.services.length !== 0) {
        childrenSet = this.getSubSet(parent.name, parent.services)
        nodes = nodes.concat(childrenSet.nodes)
        edges = edges.concat(childrenSet.edges)
      }
    }, this)

    return { nodes: new vis.DataSet(nodes), edges: new vis.DataSet(edges) }
  }

  getOptions () {
    return options
  }

  doPostDraw () {
    this.network.on('click', this.clickHandler)
    this.network.on('hoverNode', this.changeCursorBuilder('pointer'))
    this.network.on('blurNode', this.changeCursorBuilder('default'))
  }

  clickHandler (params) {
    if (params.nodes.length === 0) {
      this.onServiceHandler()
    } else {
      // HACK ? not sure about more than one node at handler, any way get first
      this.onServiceHandler(params.nodes.shift())
    }
  }

  changeCursorBuilder (newCursorStyle) {
    let networkCanvas = this.mountPoint.getElementsByTagName('canvas')[0]

    return () => {
      networkCanvas.style.cursor = newCursorStyle
    }
  }
}

export default GlobalDiagram
