/*
 * Main point of Antinit visualisator
 */
import GlobalDiagram from './global_diagram'
import DetailLayerGraph from './detail_layer_graph'
import DetailServiceGraph from './detail_service_graph'

class AntinitVisualiser {
  constructor (mountPoint, dataIn) {
    this.mountPoint = mountPoint
    this.dataIn = dataIn
    this.tinyDataObj = new TinyData(dataIn, {debug: false}) // debug for develop
    this.globalDiagram = new GlobalDiagram()
    this.detailPoint = null
    this.detailGraph = null
    this.globalClickHandler = this.globalClickHandler.bind(this)
  }

  doDraw () {
    let { globalPoint, detailPoint } = this.buildSubMointPoints()

    this.detailPoint = detailPoint
    this.doDrawGlobal(globalPoint)
  }

  doDrawGlobal (mountPoint) {
    this.globalDiagram.setMountPoint(mountPoint)
      .setData(this.dataIn)
      .setClickHandler(this.globalClickHandler)
      .doDraw()
  }

  buildSubMointPoints () {
    let globalPoint = document.createElement('div')
    let detailPoint = document.createElement('div')

    globalPoint.setAttribute('style', 'width:69%; border: 1px solid #FF7F50; float: left; min-height: 100%;')
    detailPoint.setAttribute('style', 'width:29%; border: 1px solid #FF7F50; float: left; min-height: 100%;')

    this.mountPoint.appendChild(globalPoint)
    this.mountPoint.appendChild(detailPoint)

    return { globalPoint, detailPoint }
  }

  globalClickHandler (node) {
    let layerIdx, serviceIdx

    if (!node) {
      this.doClearDetail()
    } else {
      [layerIdx, serviceIdx] = this.getServicePath(node)
      if (serviceIdx) {
        this.doShowDetailService(layerIdx, serviceIdx)
      } else {
        this.doShowDetailLayer(layerIdx)
      }
    }
  }

  /*
   * Detect - is it service
   *
   * not formaly - by 'dot' in name, but compared to data
   */
  getServicePath (node) {
    let layerPath, servicePath, layerName, serviceName, layerRes, serviceRes, layerIdx, serviceIdx

    // just protection
    if (!node) {
      return []
    }

    [layerName, serviceName] = node.split('.', 2)

    layerPath = `^(\\d+)\\.name\\.(${layerName})`
    servicePath = `^(\\d+)\\.services\\.(\\d+)\\.name\\.${serviceName}`

    layerRes = this.tinyDataObj.seekOutVerso(layerPath)
    serviceRes = this.tinyDataObj.seekOut(servicePath)

    layerIdx = layerRes[layerName]
    serviceIdx = serviceRes[layerIdx]

    // HACK - transform two Arrays in one Array
    return layerIdx.concat(serviceIdx)
  }

  doClearDetail () {
    if (this.detailGraph !== null) {
      this.detailGraph.destroy()
      this.detailGraph = null
    }
  }

  doShowDetailLayer (layerIdx) {
    // do not rewrite on some data
    if (this.getCurrentDetail() === layerIdx) {
      return
    }

    this.doClearDetail()

    this.detailGraph = new DetailLayerGraph(layerIdx)

    this.detailGraph.setMountPoint(this.detailPoint)
      .setData(this.dataIn)
      .doDraw()
  }

  doShowDetailService (layerIdx, serviceIdx) {
    // do not rewrite on some data
    if (this.getCurrentDetail() === `${layerIdx}.${serviceIdx}`) {
      return
    }
    this.doClearDetail()

    this.detailGraph = new DetailServiceGraph(`${layerIdx}.${serviceIdx}`)

    this.detailGraph.setMountPoint(this.detailPoint)
      .setData(this.dataIn)
      .doDraw()
  }

  getCurrentDetail () {
    if (this.detailGraph !== null) {
      return this.detailGraph.getName()
    }
  }
}

export default AntinitVisualiser
