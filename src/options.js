/*
 * options
 */

const OPTIONS = {
  interaction: {
    hover: true
  },
  groups: {
    layer: {shape: 'circle', font: {color: '#EEEEEE'}, color: {border: '#AD85E4', background: '#7C29F0', highlight: {border: '#D3BDF0', background: '#7C29F0'}, hover: {border: '#D3BDF0', background: '#7C29F0'}}},
    service: {shape: 'box', font: {color: '#EEEEEE'}, color: {border: '#97C2FC', background: '#2B7CE9', highlight: {border: '#D2E5FF', background: '#2B7CE9'}, hover: {border: '#D2E5FF', background: '#2B7CE9'}}},
    require: {shape: 'triangle', size: 16, color: {border: '#FF6000', background: '#FF6000', highlight: {border: '#FF6000', background: '#FF6000'}, hover: {border: '#FF6000', background: '#FF6000'}}},
    'export': {shape: 'triangleDown', size: 16, color: {border: '#4AD63A', background: '#C2FABC', highlight: {border: '#4AD63A', background: '#E6FFE3'}, hover: {border: '#4AD63A', background: '#E6FFE3'}}},
    action: {shape: 'dot', size: 12, color: {border: '#C37F00', background: '#FFA807', highlight: {border: '#C37F00', background: '#FFCA66'}, hover: {border: '#C37F00', background: '#FFCA66'}}},
    action_read: {shape: 'dot', size: 12, color: {border: '#41A906', background: '#7BE141', highlight: {border: '#41A906', background: '#A1EC76'}, hover: {border: '#41A906', background: '#A1EC76'}}},
    action_write: {shape: 'dot', size: 12, color: {border: '#FA0A10', background: '#FB7E81', highlight: {border: '#FA0A10', background: '#FFAFB1'}, hover: {border: '#FA0A10', background: '#FFAFB1'}}},
    action_execute: {shape: 'dot', size: 12, color: {border: '#FFA500', background: '#FFFF00', highlight: {border: '#FFA500', background: '#FFFFA3'}, hover: {border: '#FFA500', background: '#FFFFA3'}}},
    service_other: {shape: 'box', color: {border: '#2B7CE9', background: '#97C2FC', highlight: {border: '#2B7CE9', background: '#D2E5FF'}, hover: {border: '#2B7CE9', background: '#D2E5FF'}}},
    layer_other: {shape: 'circle', color: {border: '#FD5A77', background: '#FFC0CB', highlight: {border: '#FD5A77', background: '#FFD1D9'}, hover: {border: '#FD5A77', background: '#FFD1D9'}}}
  },
  nodes: {
    shadow: true
  },
  edges: {
    shadow: true
  }
}

export default OPTIONS
