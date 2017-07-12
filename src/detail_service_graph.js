/*
 * Detail Layer graph
 */
import TinyData from 'tiny-data'
import options from './options'
import BaseRender from './base_render'

class DetailServiceGraph extends BaseRender {
  constructor (props) {
    super(props)
    this.tinyDataObj = null
  }

  setData (dataSet) {
    this.dataSet = dataSet
    this.tinyDataObj = new TinyData(dataSet, {debug: false}) // debug for develop
    return this
  }

  getNetworkSet (system) {
    let exportSet, requireSet, currentLayerIdx, currentServiceIdx, currentService, currentId, layerName
    let nodes = []
    let edges = []; // huck - babel glue two bracket

    [currentLayerIdx, currentServiceIdx] = this.getNamePair()
    currentService = system[currentLayerIdx].services[currentServiceIdx]
    currentId = `root.${currentService.name}`
    layerName = system[currentLayerIdx].name

    nodes.push({
      id: currentId,
      label: `${currentService.name} (${currentService.acl})`,
      group: 'service',
      level: 4
    })

    exportSet = this.getExportSet(layerName, currentId, currentService)
    requireSet = this.getRequireSet(currentId, currentService)
    nodes = nodes.concat(exportSet.nodes, requireSet.nodes)
    edges = edges.concat(exportSet.edges, requireSet.edges)

    return { nodes: new vis.DataSet(nodes), edges: new vis.DataSet(edges) }
  }

  getExportSet (layerName, parentId, currentService) {
    let type, actionId, consumers
    let serviceName = currentService.name
    let exportName = `${parentId}.export`
    let exportObj = currentService.export
    let nodes = []
    let edges = []

    nodes.push({
      id: exportName,
      label: 'export',
      group: 'export',
      level: 3
    })

    edges.push({
      from: parentId,
      to: exportName
    })

    Object.keys(exportObj).forEach((actionName) => {
      type = exportObj[actionName]
      actionId = `${exportName}.${actionName}`

      nodes.push({
        id: actionId,
        label: `${actionName}\n(${type})`,
        group: `action_${type}`, // execute, read, write
        level: 2
      })

      edges.push({
        from: exportName,
        to: actionId
      })

      consumers = this.getExportUpsideDownConsumer(layerName, serviceName, actionName)
      Object.keys(consumers).forEach((consumerLayer) => {
        let consumerLayerId = `export.${consumerLayer}`
        let layerServices = consumers[consumerLayer]

        nodes.push({
          id: consumerLayerId,
          label: consumerLayer,
          group: 'layer_other',
          level: 0
        })
        layerServices.forEach((service) => {
          let consumerServiceId = `${consumerLayerId}.${service}`

          nodes.push({
            id: consumerServiceId,
            label: service,
            group: 'service_other',
            level: 1
          })
          edges.push({
            from: consumerServiceId,
            to: consumerLayerId
          },
            {
              from: consumerServiceId,
              to: actionId
            })
        })
      })
    }, this)

    return {nodes, edges}
  }

  getExportUpsideDownConsumer (layerName, serviceName, actionName) {
    let dataSet = this.dataSet // to prevent context lost
    let resolvedPath = `^(\\d+)\\.services\\.(\\d+\\.require\\.\\d+)\\.actions\\.${actionName}\\.resolved\\.${layerName}` // find all services with require, resolved at target layer
    let resolvedFinalizer = (layerIdx, matchedRaws, emit) => {
      let matchedList, serviceIdx, requiredIdx
      let filtered = []

      matchedRaws.forEach((matchedRaw) => {
        matchedList = matchedRaw.split('.')
        serviceIdx = matchedList[0]
        requiredIdx = matchedList[2]

        // filter only requested from target service
        if (dataSet[layerIdx].services[serviceIdx].require[requiredIdx].name === serviceName) {
          filtered.push(dataSet[layerIdx].services[serviceIdx].name)
        }
      })
      emit(dataSet[layerIdx].name, filtered)
    }
    return this.tinyDataObj.seekOut(resolvedPath, resolvedFinalizer)
  }

  getRequireSet (parentName, currentService) {
    let requireUpsideDown, layerId, serviceId, actionId
    let requireName = `${parentName}.require`
    let requireList = currentService.require
    let nodes = []
    let edges = []

    // may not have 'require' block
    if (requireList.length === 0) {
      return {nodes, edges}
    }

    nodes.push({
      id: requireName,
      label: 'require',
      group: 'require',
      level: 5
    })

    edges.push({
      from: parentName,
      to: requireName
    })

    requireUpsideDown = this.getRequireUpsideDownDict(requireList)
    Object.keys(requireUpsideDown).forEach((layerName) => {
      layerId = `require.${layerName}`
      nodes.push({
        id: layerId,
        label: layerName,
        group: 'layer_other',
        level: 8
      })
      Object.keys(requireUpsideDown[layerName]).forEach((serviceName) => {
        serviceId = `${layerId}.${serviceName}`
        nodes.push({
          id: serviceId,
          label: serviceName,
          group: 'service_other',
          level: 7
        })
        edges.push({
          from: serviceId,
          to: layerId
        })
        Object.keys(requireUpsideDown[layerName][serviceName]).forEach((actionName) => {
          actionId = `${serviceId}.${actionName}`
          nodes.push({
            id: actionId,
            label: actionName,
            group: 'action',
            level: 6
          })
          edges.push({
            from: serviceId,
            to: actionId
          },
            {
              from: requireName,
              to: actionId
            })
        })
      })
    })

    return {nodes, edges}
  }

  /*
   * Build upside-down require tree
   *
   * to prevent double root elements
   */
  getRequireUpsideDownDict (requireList) {
    let action, resolved, serviceName
    let upsideStorage = {}

    requireList.forEach((service) => {
      serviceName = service.name
      Object.keys(service.actions).forEach((actionName) => {
        action = service.actions[actionName]
        resolved = action.resolved
        if (!upsideStorage[resolved]) {
          upsideStorage[resolved] = {}
        }
        if (!upsideStorage[resolved][serviceName]) {
          upsideStorage[resolved][serviceName] = {}
        }
        upsideStorage[resolved][serviceName][actionName] = action.isReady
      })
    })

    return upsideStorage
  }

  getNamePair () {
    return this.name.split('.', 2)
  }

  getOptions () {
    let addonOptions = {
      nodes: {
        fixed: true
      },
      layout: {
        hierarchical: {
          direction: 'UD',
          levelSeparation: 100,
          nodeSpacing: 100
        }
      }
    }

    return Object.assign({}, options, addonOptions)
  }
}

export default DetailServiceGraph
