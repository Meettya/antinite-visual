/*
 * Detail Layer graph
 */
import options from './options'
import BaseRender from './base_render'

class DetailLayerGraph extends BaseRender {
  getSubSet (layerId, services) {
    let serviceId
    let nodes = []
    let edges = []

    services.forEach((service) => {
      serviceId = `${layerId}.${service.name}`
      nodes.push({
        id: serviceId,
        label: `${service.name} (${service.acl})`,
        group: 'service',
        level: 1
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
    let currentLayer = system[this.name]

    nodes.push({
      id: currentLayer.name,
      label: currentLayer.name,
      group: 'layer',
      level: 0
    })
    if (currentLayer.services.length !== 0) {
      childrenSet = this.getSubSet(currentLayer.name, currentLayer.services)
      nodes = nodes.concat(childrenSet.nodes)
      edges = edges.concat(childrenSet.edges)
    }

    return { nodes: new vis.DataSet(nodes), edges: new vis.DataSet(edges) }
  }

  getOptions () {
    let addonOptions = {
      layout: {
        hierarchical: {
          direction: 'LR'
        }
      }
    }

    return Object.assign({}, options, addonOptions)
  }
}

export default DetailLayerGraph
