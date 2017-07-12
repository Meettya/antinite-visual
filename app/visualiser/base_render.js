/*
 * Base class for drawlers
 */

class BaseRender {
  constructor (props) {
    this.name = props
    this.mountPoint = null
    this.dataSet = null
    this.network = null
  }

  setMountPoint (mountPoint) {
    this.mountPoint = mountPoint
    return this
  }

  setData (dataSet) {
    this.dataSet = dataSet
    return this
  }

  doDraw () {
    const data = this.getNetworkSet(this.dataSet)
    const options = this.getOptions()

    this.network = new vis.Network(this.mountPoint, data, options)
    this.doPostDraw()
    return this
  }

  getName () {
    return this.name
  }

  /*
   * Return vis network set
   *
   * aka { nodes, edges }
   */
  getNetworkSet () {
    throw Error('must be realized at child')
  }

  /*
   * Return options for vis
   */
  getOptions () {
    return {}
  }

  /*
   * Post-draw actions
   *
   * for example to set up listeners
   */
  doPostDraw () {}

  /*
   * Proxy destroy
   */
  destroy () {
    if (this.network !== null) {
      this.network.destroy()
      this.network = null
    }
  }
}

export default BaseRender
