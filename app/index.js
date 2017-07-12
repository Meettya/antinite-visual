/*
 * test suite for visualisation
 */
import AntinitVisualiser from './visualiser'

const container = document.getElementById('mountPoint')

const drawExample = (dataIn) => {
  new AntinitVisualiser(container, dataIn)
    .doDraw()
}

fetch('/data/example1.json')
  .then(response => response.json())
  .then(drawExample)
