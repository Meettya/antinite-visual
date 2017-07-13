# Antinit visualisation tool

See [online](https://meettya.github.io/antinite-visual/index.html) example.

## Description:

This is browser visualisation tool for [antinit](https://github.com/Meettya/antinite)-powered project data.

## Dependencies:

Require [vis](http://visjs.org/).

## Usage:

### Pre-require:

At first, at server side, get system configuration data, for example create system url, where system graph extracted, or extract and save graph data to file and send it as static

```javascript
import {AntiniteToolkit} from 'antinit'

// ...some express logic here

app.get('/admin/system_graph', function (req, res) {
  let graph = AntiniteToolkit.getSystemGraph()

  res.json(graph)
})
```

And at client side resolve [vis](http://visjs.org/) require, then get data

```javascript
fetch('/admin/system_graph')
  .then(function (response){ return response.json();})
  .then(drawExample)
```

### Draw system graph

```javascript
var drawExample = function(dataIn) {
  new AntiniteVisualToolkit(container/*DOM element*/, dataIn/*json*/)
    .doDraw();
};
```

Just create object with container and data, then `doDraw()` it.

## Roadmap:

-  Add audit log player - `antinit` may turn on service interaction log (aka audit) by request. Its may be used to debug.

## General Notes:

This example created to show how extracted data may be used. Its not 'original trace and debug tool' or same thing. 

Visualisation and grapic design is my week point, I hope someone do this work better, untill I do the best this example.

Cheers!
