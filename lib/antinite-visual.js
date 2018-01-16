(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("AntiniteVisualToolkit", [], factory);
	else if(typeof exports === 'object')
		exports["AntiniteVisualToolkit"] = factory();
	else
		root["AntiniteVisualToolkit"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dev/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeDetect = __webpack_require__(8);

var _typeDetect2 = _interopRequireDefault(_typeDetect);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function getItType(val) {
  // for some reason 'type-detect' dont do it
  if (val === false || val === true) {
    return 'BOOLEAN';
  }
  switch ((0, _typeDetect2.default)(val)) {
    case 'Object':
      return 'HASH';
    case 'Array':
      return 'ARRAY';
    case 'string':
      return 'STRING';
    case 'number':
      return 'NUMBER';
    case 'null':
      return 'NULL';
    case 'undefined':
      return 'UNDEFINED';
    case 'function':
      return 'FUNCTION';
    case 'RegExp':
      return 'REGEXP';
    case 'Date':
      return 'DATE';
    case 'Arguments':
      return 'ARGUMENTS';
    default:
      return 'OTHER';
  }
} /*
   * This is type detector for any JS type.
   */
exports.default = getItType;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/*
 * options
 */

var OPTIONS = {
  interaction: {
    hover: true
  },
  groups: {
    layer: { shape: 'circle', font: { color: '#EEEEEE' }, color: { border: '#AD85E4', background: '#7C29F0', highlight: { border: '#D3BDF0', background: '#7C29F0' }, hover: { border: '#D3BDF0', background: '#7C29F0' } } },
    service: { shape: 'box', font: { color: '#EEEEEE' }, color: { border: '#97C2FC', background: '#2B7CE9', highlight: { border: '#D2E5FF', background: '#2B7CE9' }, hover: { border: '#D2E5FF', background: '#2B7CE9' } } },
    require: { shape: 'triangle', size: 16, color: { border: '#FF6000', background: '#FF6000', highlight: { border: '#FF6000', background: '#FF6000' }, hover: { border: '#FF6000', background: '#FF6000' } } },
    'export': { shape: 'triangleDown', size: 16, color: { border: '#4AD63A', background: '#C2FABC', highlight: { border: '#4AD63A', background: '#E6FFE3' }, hover: { border: '#4AD63A', background: '#E6FFE3' } } },
    action: { shape: 'dot', size: 12, color: { border: '#C37F00', background: '#FFA807', highlight: { border: '#C37F00', background: '#FFCA66' }, hover: { border: '#C37F00', background: '#FFCA66' } } },
    action_read: { shape: 'dot', size: 12, color: { border: '#41A906', background: '#7BE141', highlight: { border: '#41A906', background: '#A1EC76' }, hover: { border: '#41A906', background: '#A1EC76' } } },
    action_write: { shape: 'dot', size: 12, color: { border: '#FA0A10', background: '#FB7E81', highlight: { border: '#FA0A10', background: '#FFAFB1' }, hover: { border: '#FA0A10', background: '#FFAFB1' } } },
    action_execute: { shape: 'dot', size: 12, color: { border: '#FFA500', background: '#FFFF00', highlight: { border: '#FFA500', background: '#FFFFA3' }, hover: { border: '#FFA500', background: '#FFFFA3' } } },
    service_other: { shape: 'box', color: { border: '#2B7CE9', background: '#97C2FC', highlight: { border: '#2B7CE9', background: '#D2E5FF' }, hover: { border: '#2B7CE9', background: '#D2E5FF' } } },
    layer_other: { shape: 'circle', color: { border: '#FD5A77', background: '#FFC0CB', highlight: { border: '#FD5A77', background: '#FFD1D9' }, hover: { border: '#FD5A77', background: '#FFD1D9' } } }
  },
  nodes: {
    shadow: true
  },
  edges: {
    shadow: true
  }
};

exports.default = OPTIONS;
module.exports = exports['default'];

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
 * Base class for drawlers
 */

var BaseRender = function () {
  function BaseRender(props) {
    _classCallCheck(this, BaseRender);

    this.name = props;
    this.mountPoint = null;
    this.dataSet = null;
    this.network = null;
  }

  _createClass(BaseRender, [{
    key: 'setMountPoint',
    value: function setMountPoint(mountPoint) {
      this.mountPoint = mountPoint;
      return this;
    }
  }, {
    key: 'setData',
    value: function setData(dataSet) {
      this.dataSet = dataSet;
      return this;
    }
  }, {
    key: 'doDraw',
    value: function doDraw() {
      var data = this.getNetworkSet(this.dataSet);
      var options = this.getOptions();

      this.network = new vis.Network(this.mountPoint, data, options);
      this.doPostDraw();
      return this;
    }
  }, {
    key: 'getName',
    value: function getName() {
      return this.name;
    }

    /*
     * Return vis network set
     *
     * aka { nodes, edges }
     */

  }, {
    key: 'getNetworkSet',
    value: function getNetworkSet() {
      throw Error('must be realized at child');
    }

    /*
     * Return options for vis
     */

  }, {
    key: 'getOptions',
    value: function getOptions() {
      return {};
    }

    /*
     * Post-draw actions
     *
     * for example to set up listeners
     */

  }, {
    key: 'doPostDraw',
    value: function doPostDraw() {}

    /*
     * Proxy destroy
     */

  }, {
    key: 'destroy',
    value: function destroy() {
      if (this.network !== null) {
        this.network.destroy();
        this.network = null;
      }
    }
  }]);

  return BaseRender;
}();

exports.default = BaseRender;
module.exports = exports['default'];

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _slicedToArray = function () {
  function sliceIterator(arr, i) {
    var _arr = [];var _n = true;var _d = false;var _e = undefined;try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;_e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }return _arr;
  }return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if (Symbol.iterator in Object(arr)) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}(); /*
      * This is tiny data-mining engine
      *
      * work as mapReduce, but in some different way and use RegExp as path pointer
      */

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regexp_dot_forger = __webpack_require__(7);

var _regexp_dot_forger2 = _interopRequireDefault(_regexp_dot_forger);

var _stringificator = __webpack_require__(10);

var _stringificator2 = _interopRequireDefault(_stringificator);

var _finalizer = __webpack_require__(12);

var _finalizer2 = _interopRequireDefault(_finalizer);

var _log_state = __webpack_require__(13);

var _log_state2 = _interopRequireDefault(_log_state);

var _arg_parser = __webpack_require__(4);

var _arg_parser2 = _interopRequireDefault(_arg_parser);

var _collector = __webpack_require__(5);

var _collector2 = _interopRequireDefault(_collector);

var _object_extender = __webpack_require__(14);

var _object_extender2 = _interopRequireDefault(_object_extender);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

// internal delimiter, as "special symbol"
var dotInternal = "\uFE45";
var dotExternal = '.';

var TinyData = function () {
  function TinyData() {
    var originalObj = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    _classCallCheck(this, TinyData);

    this.originalObj = originalObj;
    this.options = options;
    // take user RegExp (as string or RegExp) and replace dots to dotInternal, not applied to function !!!!
    this.isConvertIncomePatterns = true;
    // this is logger status parser and keeper
    this.logger = new _log_state2.default(options);
    // to transform path delimiter
    this.dotForger = new _regexp_dot_forger2.default(dotInternal, { log: this.logger.mustDo('logging') });
    this.doTransormRegExp = this.doTransormRegExp.bind(this);
    this.stringificator = new _stringificator2.default(originalObj, dotInternal, this.doTransormRegExp, { log: this.logger.mustDo('logging') });
    this.finalizer = new _finalizer2.default(dotInternal, dotExternal);
  }

  /*
   * This method proceed 'seeking' through all stringifyed object and do some thing,
   * then may do some finalization code
   * Builded for common case of usage,
   * when rule is RegExp and we are want to map matched result in direct order:
   * first capture -> key
   * second capture -> value
   */

  _createClass(TinyData, [{
    key: 'search',
    value: function search(inRule, finalizeFunc, interpSequence) {
      var sequence = (0, _object_extender2.default)({ key: 1, value: 2 }, interpSequence);

      if (this.logger.mustDo('warning') && sequence.key >= sequence.value) {
        console.warn('for reverse interpretation direction it would be better to use #searchBack()\n|key_order| = |' + sequence.key + '|\n|value_order| = |' + sequence.value + '|');
      }
      return this.seekOutAny(inRule, finalizeFunc, sequence);
    }

    /*
     * This method proceed 'seeking' through all stringifyed object and do some thing,
     * then may do some finalization code
     * Builded for common case of usage,
     * when rule is RegExp and we are want to map matched result in reverse order:
     * first capture -> value
     * second capture -> key
     */

  }, {
    key: 'searchBack',
    value: function searchBack(inRule, finalizeFunc, interpSequence) {
      var sequence = (0, _object_extender2.default)({ key: 2, value: 1 }, interpSequence);

      if (this.logger.mustDo('warning') && sequence.value >= sequence.key) {
        console.warn('for direct interpretation direction it would be better to use #search()\n|key_order| = |' + sequence.key + '|\n|value_order| = |' + sequence.value + '|');
      }
      return this.seekOutAny(inRule, finalizeFunc, sequence);
    }

    /*
     * For backward compatibility
     */

  }, {
    key: 'seekOut',
    value: function seekOut(inRule, finalizeFunc, interpSequence) {
      return this.search(inRule, finalizeFunc, interpSequence);
    }
  }, {
    key: 'seekOutVerso',
    value: function seekOutVerso(inRule, finalizeFunc, interpSequence) {
      return this.searchBack(inRule, finalizeFunc, interpSequence);
    }

    /*
     * Timing counter
     */

  }, {
    key: 'timeOnDemand',
    value: function timeOnDemand(label, fn) {
      var res = void 0;
      var isTimed = this.logger.mustDo('timing');

      if (isTimed) {
        console.time(label);
      }
      res = fn();
      if (isTimed) {
        console.timeEnd(label);
      }
      return res;
    }

    /*
     * This method stringify our original object (materialize full path + add leaf )
     * may be used to speed up all by reduce stringification work
     */

  }, {
    key: 'rakeStringify',
    value: function rakeStringify(inStringifyFilter) {
      var _this = this;

      var inStubsList = arguments.length <= 1 || arguments[1] === undefined ? [] : arguments[1];

      return this.timeOnDemand('rakeStringify', function () {
        return _this.stringificator.stringifyObject(inStringifyFilter, inStubsList);
      });
    }

    /*
     * This method transform incoming RegExp changes \. (dot) to internal dot-substituter
     */

  }, {
    key: 'doTransormRegExp',
    value: function doTransormRegExp(originalRegexp) {
      if (originalRegexp.source.indexOf(dotInternal) !== -1) {
        if (this.logger.mustDo('logging')) {
          console.log('doTransormRegExp: skip converting for |' + originalRegexp + '|');
        }
        return originalRegexp;
      }
      return this.dotForger.doForgeDots(originalRegexp);
    }

    /*
     * This method may be used for user-defined function
     */

  }, {
    key: 'getInternalDelimiter',
    value: function getInternalDelimiter() {
      return this.getPathDelimiter('INTERNAL');
    }

    /*
     * This method return any delimiter
     */

  }, {
    key: 'getPathDelimiter',
    value: function getPathDelimiter(type) {
      var ucType = type.toUpperCase();

      switch (ucType) {
        case 'INTERNAL':
          return dotInternal;
        case 'EXTERNAL':
          return dotExternal;
        default:
          throw Error('dont know path delimiter, named |' + type + '|, mistype?');
      }
    }

    /*
     * This method return data by path
     *
     * It will auto-recognize delimiter, or use forced
     */

  }, {
    key: 'getDataByPath',
    value: function getDataByPath(path, obj, forceDelimiter) {
      var steps = void 0,
          res = void 0;

      if (!forceDelimiter) {
        if (path && path.indexOf(dotInternal) !== -1) {
          forceDelimiter = dotInternal;
        } else {
          forceDelimiter = dotExternal;
        }
      }
      if (!obj) {
        obj = this.originalObj;
      }
      steps = path.split(forceDelimiter);
      res = steps.reduce(function (obj, val) {
        return obj[val];
      }, obj);
      return res;
    }

    /*
     * This is realy search processor code, one for any directions
     */

  }, {
    key: 'seekOutAny',
    value: function seekOutAny(inRule, finalizeFunc, interpSequence) {
      var seekRuleType = void 0,
          seekRule = void 0,
          seekFunction = void 0,
          rakedObject = void 0;
      var stringifyedObject = this.rakeStringify(); // or next line glued

      var _argParser = (0, _arg_parser2.default)(inRule, 'seek_rule');

      var _argParser2 = _slicedToArray(_argParser, 2);

      seekRuleType = _argParser2[0];
      seekRule = _argParser2[1];

      seekFunction = this.buildSeekFunction(seekRuleType, seekRule, interpSequence);
      rakedObject = this.proceedSeekingOut(seekFunction, stringifyedObject);
      return this.proceedFinalization(finalizeFunc, rakedObject);
    }

    /*
     * Internal method for wrap timing
     */

  }, {
    key: 'proceedFinalization',
    value: function proceedFinalization(finalizeFunc, rakedObject) {
      var _this2 = this;

      return this.timeOnDemand('finalization', function () {
        return _this2.finalizer.finalizeResult(finalizeFunc, rakedObject);
      });
    }

    /*
     * Internal method for wrap timing
     */

  }, {
    key: 'proceedSeekingOut',
    value: function proceedSeekingOut(seekFunction, stringifyedObject) {
      return this.timeOnDemand('searching', function () {
        return seekFunction(stringifyedObject);
      });
    }

    /*
     * his method return rake function itself
     *
     * its different for RegExp or Function
     */

  }, {
    key: 'buildSeekFunction',
    value: function buildSeekFunction(seekRuleType, seekRule, interpSequence) {
      switch (seekRuleType) {
        case 'REGEXP':
          // if incoming RegExp needed to be transformed
          if (this.isConvertIncomePatterns) {
            seekRule = this.doTransormRegExp(seekRule);
          }
          // if user send RegExp - transform it into function
          return (0, _collector2.default)(function (item, emit) {
            var matchedObj = item.match(seekRule);

            if (matchedObj) {
              emit(matchedObj[interpSequence.key], matchedObj[interpSequence.value]);
            }
          });
        case 'FUNCTION':
          // nothing to do
          return (0, _collector2.default)(seekRule);
        default:
          throw Error('cant process type |' + seekRuleType + '|, halt!');
      }
    }
  }]);

  return TinyData;
}();

exports.default = TinyData;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _type_detector = __webpack_require__(0);

var _type_detector2 = _interopRequireDefault(_type_detector);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

/*
 * This method parse arg and may ensure its type
 */
function argParser(arg, argName, strictType) {
  var parsedArg = void 0;
  var argType = (0, _type_detector2.default)(arg);
  var errFormatter = function errFormatter(errString, argType) {
    return errString + '\n|argName| = |' + argName + '|\n|type| = |' + argType + '|\n|arg| = |#{arg}|';
  };

  switch (argType) {
    case 'STRING':
      try {
        parsedArg = ['REGEXP', RegExp(arg)];
      } catch (e) {
        throw SyntaxError(errFormatter('cant compile this String to RegExp', argType));
      }
      break;
    case 'REGEXP':
      parsedArg = ['REGEXP', arg];
      break;
    case 'FUNCTION':
      parsedArg = ['FUNCTION', arg];
      break;
    default:
      throw TypeError(errFormatter('argument must be String, RegExp or Function, but got', argType));
  }

  if (strictType && parsedArg[0] !== strictType.toUpperCase()) {
    throw TypeError(errFormatter('argument must be ' + strictType + ', but got', argType));
  }
  return parsedArg;
} /*
   * This is argument parser helper
   */
exports.default = argParser;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _type_detector = __webpack_require__(0);

var _type_detector2 = _interopRequireDefault(_type_detector);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function buildEmitCollector(resultObj) {
  return function (key, value) {
    var keyType = (0, _type_detector2.default)(key);
    var valueType = (0, _type_detector2.default)(value);

    if (!(keyType === 'NULL' || keyType === 'UNDEFINED' || valueType === 'NULL' || valueType === 'UNDEFINED')) {
      if (!resultObj[key]) {
        resultObj[key] = [];
      }
      resultObj[key].push(value);
    }
  };
} /*
   * This is Collector mixin - its create layout for object walker and result collection
   */

function buildCollectorLayout(workFn) {
  return function (inObj) {
    var result = {};
    var argType = (0, _type_detector2.default)(inObj);
    var emit = buildEmitCollector(result);

    switch (argType) {
      case 'ARRAY':
        inObj.forEach(function (item) {
          workFn(item, emit);
        });
        break;
      case 'HASH':
        Object.keys(inObj).forEach(function (key) {
          workFn(key, inObj[key], emit);
        });
        break;
      default:
        throw Error('cant work with object type |' + argType + '|');
    }
    return result;
  };
}

exports.default = buildCollectorLayout;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Main point of Antinit visualisator
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _tinyData = __webpack_require__(3);

var _tinyData2 = _interopRequireDefault(_tinyData);

var _global_diagram = __webpack_require__(15);

var _global_diagram2 = _interopRequireDefault(_global_diagram);

var _detail_layer_graph = __webpack_require__(16);

var _detail_layer_graph2 = _interopRequireDefault(_detail_layer_graph);

var _detail_service_graph = __webpack_require__(17);

var _detail_service_graph2 = _interopRequireDefault(_detail_service_graph);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AntinitVisualiser = function () {
  function AntinitVisualiser(mountPoint, dataIn) {
    _classCallCheck(this, AntinitVisualiser);

    this.mountPoint = mountPoint;
    this.dataIn = dataIn;
    this.tinyDataObj = new _tinyData2.default(dataIn, { debug: false }); // debug for develop
    this.globalDiagram = new _global_diagram2.default();
    this.detailPoint = null;
    this.detailGraph = null;
    this.globalClickHandler = this.globalClickHandler.bind(this);
  }

  _createClass(AntinitVisualiser, [{
    key: 'doDraw',
    value: function doDraw() {
      var _buildSubMointPoints = this.buildSubMointPoints();

      var globalPoint = _buildSubMointPoints.globalPoint;
      var detailPoint = _buildSubMointPoints.detailPoint;


      this.detailPoint = detailPoint;
      this.doDrawGlobal(globalPoint);
    }
  }, {
    key: 'doDrawGlobal',
    value: function doDrawGlobal(mountPoint) {
      this.globalDiagram.setMountPoint(mountPoint).setData(this.dataIn).setClickHandler(this.globalClickHandler).doDraw();
    }
  }, {
    key: 'buildSubMointPoints',
    value: function buildSubMointPoints() {
      var globalPoint = document.createElement('div');
      var detailPoint = document.createElement('div');

      globalPoint.setAttribute('style', 'width:69%; border: 1px solid #FF7F50; float: left; min-height: 100%;');
      detailPoint.setAttribute('style', 'width:29%; border: 1px solid #FF7F50; float: left; min-height: 100%;');

      this.mountPoint.appendChild(globalPoint);
      this.mountPoint.appendChild(detailPoint);

      return { globalPoint: globalPoint, detailPoint: detailPoint };
    }
  }, {
    key: 'globalClickHandler',
    value: function globalClickHandler(node) {
      var layerIdx = void 0,
          serviceIdx = void 0;

      if (!node) {
        this.doClearDetail();
      } else {
        var _getServicePath = this.getServicePath(node);

        var _getServicePath2 = _slicedToArray(_getServicePath, 2);

        layerIdx = _getServicePath2[0];
        serviceIdx = _getServicePath2[1];

        if (serviceIdx) {
          this.doShowDetailService(layerIdx, serviceIdx);
        } else {
          this.doShowDetailLayer(layerIdx);
        }
      }
    }

    /*
     * Detect - is it service
     *
     * not formaly - by 'dot' in name, but compared to data
     */

  }, {
    key: 'getServicePath',
    value: function getServicePath(node) {
      var layerPath = void 0,
          servicePath = void 0,
          layerName = void 0,
          serviceName = void 0,
          layerRes = void 0,
          serviceRes = void 0,
          layerIdx = void 0,
          serviceIdx = void 0;

      // just protection
      if (!node) {
        return [];
      }

      var _node$split = node.split('.', 2);

      var _node$split2 = _slicedToArray(_node$split, 2);

      layerName = _node$split2[0];
      serviceName = _node$split2[1];


      layerPath = '^(\\d+)\\.name\\.(' + layerName + ')';
      servicePath = '^(\\d+)\\.services\\.(\\d+)\\.name\\.' + serviceName;

      layerRes = this.tinyDataObj.seekOutVerso(layerPath);
      serviceRes = this.tinyDataObj.seekOut(servicePath);

      layerIdx = layerRes[layerName];
      serviceIdx = serviceRes[layerIdx];

      // HACK - transform two Arrays in one Array
      return layerIdx.concat(serviceIdx);
    }
  }, {
    key: 'doClearDetail',
    value: function doClearDetail() {
      if (this.detailGraph !== null) {
        this.detailGraph.destroy();
        this.detailGraph = null;
      }
    }
  }, {
    key: 'doShowDetailLayer',
    value: function doShowDetailLayer(layerIdx) {
      // do not rewrite on some data
      if (this.getCurrentDetail() === layerIdx) {
        return;
      }

      this.doClearDetail();

      this.detailGraph = new _detail_layer_graph2.default(layerIdx);

      this.detailGraph.setMountPoint(this.detailPoint).setData(this.dataIn).doDraw();
    }
  }, {
    key: 'doShowDetailService',
    value: function doShowDetailService(layerIdx, serviceIdx) {
      // do not rewrite on some data
      if (this.getCurrentDetail() === layerIdx + '.' + serviceIdx) {
        return;
      }
      this.doClearDetail();

      this.detailGraph = new _detail_service_graph2.default(layerIdx + '.' + serviceIdx);

      this.detailGraph.setMountPoint(this.detailPoint).setData(this.dataIn).doDraw();
    }
  }, {
    key: 'getCurrentDetail',
    value: function getCurrentDetail() {
      if (this.detailGraph !== null) {
        return this.detailGraph.getName();
      }
    }
  }]);

  return AntinitVisualiser;
}();

exports.default = AntinitVisualiser;
module.exports = exports['default'];

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}(); /*
      * This is RegExp helper for TinyData
      *
      * Its convert users RegExp with escaped dot \.
      *  or dot as a part of character set [.] - like this,
      *  by replace all of that to something else
     
      * Raison d'être - inside TinyData for entity devision used dot_replacer,
      *  but for the simplicity we are MAY (and I believe MUST) cloak this fact.
      */

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _type_detector = __webpack_require__(0);

var _type_detector2 = _interopRequireDefault(_type_detector);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var CHARACTER_SET_RE = /((?:^|(?:(?:^|[^\\])\\(?:\\{2})*\\)|[^\\]+))(\[(?:]|(?:[^\\]+])|(?:.*?[^\\]+])|(?:.*?[^\\]+\\(?:\\{2})*\\])))/;
var ESCAPED_DOT_RE = /((?:^|[^\\])(?:\\{2})*)(\\\.)/;

var RegExpDotForger = function () {
  function RegExpDotForger(dotSubstitute) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    _classCallCheck(this, RegExpDotForger);

    this.dotSubstitute = dotSubstitute;
    this.isDoLogging = options.log;
    this.doValidateDotSubstitute(this.dotSubstitute);
  }

  /*
   * Ensure we are have valid substitute
   */

  _createClass(RegExpDotForger, [{
    key: 'doValidateDotSubstitute',
    value: function doValidateDotSubstitute(dotSubstitute) {
      if (!(dotSubstitute && (0, _type_detector2.default)(dotSubstitute) === 'STRING')) {
        throw TypeError('constructor must be called with string as dot substitute, but got:\n|dotSubstitute| = |' + dotSubstitute + '|');
      }
    }

    /*
     * This method return pattern RegExp by name or throw exception
     */

  }, {
    key: 'getPatternByName',
    value: function getPatternByName(patternName) {
      switch (patternName.toUpperCase()) {
        case 'CHARACTER_SET':
          return CHARACTER_SET_RE;
        case 'ESCAPED_DOT':
          return ESCAPED_DOT_RE;
        default:
          throw Error('so far dont know pattern, named |' + patternName + '|, mistype?');
      }
    }

    /*
     * This method forge dots in incoming regexp and return 'corrected' one
     */

  }, {
    key: 'doForgeDots',
    value: function doForgeDots(inRegexp) {
      if (!(inRegexp && (0, _type_detector2.default)(inRegexp) === 'REGEXP')) {
        throw TypeError('must be called with RegExp, but got:\n|inRegexp| = |' + inRegexp + '|');
      }
      // sequence is important!
      // character set, THAN escaped dots
      return new RegExp(this.forgeEscapedDots(this.forgeCharacterSet(inRegexp.source)));
    }

    /*
     * This method change dots to substitute in character sets
     */

  }, {
    key: 'forgeCharacterSet',
    value: function forgeCharacterSet(inRegexpAsString) {
      var _this = this;

      var globalCharSetPattern = new RegExp(this.getPatternByName('character_set').source, 'g');
      var dotReplacer = function dotReplacer(match, captured1, captured2) {
        // in this case we are change ONLY dot |.| and keep alive escape symbol
        // because escape symbol have now power on dot in character set
        var forgedSet = captured2.replace(/\./g, _this.dotSubstitute);
        return '' + captured1 + forgedSet;
      };

      return inRegexpAsString.replace(globalCharSetPattern, dotReplacer);
    }

    /*
     * This method change escaped dots to substitute
     */

  }, {
    key: 'forgeEscapedDots',
    value: function forgeEscapedDots(inRegexpAsString) {
      var _this2 = this;

      var globalEscapedDotPattern = new RegExp(this.getPatternByName('escaped_dot').source, 'g');
      var escapedDotReplacer = function escapedDotReplacer(match, captured1, captured2) {
        // in this case we are change BOTH dot |.| AND escape symbol
        // because its one escape symbol
        var forgedSet = captured2.replace(/\\\./, _this2.dotSubstitute);
        return '' + captured1 + forgedSet;
      };

      return inRegexpAsString.replace(globalEscapedDotPattern, escapedDotReplacer);
    }
  }]);

  return RegExpDotForger;
}();

exports.default = RegExpDotForger;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

/* !
 * type-detect
 * Copyright(c) 2013 jake luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
var promiseExists = typeof Promise === 'function';
var globalObject = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : self; // eslint-disable-line
var isDom = 'location' in globalObject && 'document' in globalObject;
var symbolExists = typeof Symbol !== 'undefined';
var mapExists = typeof Map !== 'undefined';
var setExists = typeof Set !== 'undefined';
var weakMapExists = typeof WeakMap !== 'undefined';
var weakSetExists = typeof WeakSet !== 'undefined';
var dataViewExists = typeof DataView !== 'undefined';
var symbolIteratorExists = symbolExists && typeof Symbol.iterator !== 'undefined';
var symbolToStringTagExists = symbolExists && typeof Symbol.toStringTag !== 'undefined';
var setEntriesExists = setExists && typeof Set.prototype.entries === 'function';
var mapEntriesExists = mapExists && typeof Map.prototype.entries === 'function';
var setIteratorPrototype = setEntriesExists && Object.getPrototypeOf(new Set().entries());
var mapIteratorPrototype = mapEntriesExists && Object.getPrototypeOf(new Map().entries());
var arrayIteratorExists = symbolIteratorExists && typeof Array.prototype[Symbol.iterator] === 'function';
var arrayIteratorPrototype = arrayIteratorExists && Object.getPrototypeOf([][Symbol.iterator]());
var stringIteratorExists = symbolIteratorExists && typeof String.prototype[Symbol.iterator] === 'function';
var stringIteratorPrototype = stringIteratorExists && Object.getPrototypeOf(''[Symbol.iterator]());
var toStringLeftSliceLength = 8;
var toStringRightSliceLength = -1;
/**
 * ### typeOf (obj)
 *
 * Uses `Object.prototype.toString` to determine the type of an object,
 * normalising behaviour across engine versions & well optimised.
 *
 * @param {Mixed} object
 * @return {String} object type
 * @api public
 */
module.exports = function typeDetect(obj) {
  /* ! Speed optimisation
   * Pre:
   *   string literal     x 3,039,035 ops/sec ±1.62% (78 runs sampled)
   *   boolean literal    x 1,424,138 ops/sec ±4.54% (75 runs sampled)
   *   number literal     x 1,653,153 ops/sec ±1.91% (82 runs sampled)
   *   undefined          x 9,978,660 ops/sec ±1.92% (75 runs sampled)
   *   function           x 2,556,769 ops/sec ±1.73% (77 runs sampled)
   * Post:
   *   string literal     x 38,564,796 ops/sec ±1.15% (79 runs sampled)
   *   boolean literal    x 31,148,940 ops/sec ±1.10% (79 runs sampled)
   *   number literal     x 32,679,330 ops/sec ±1.90% (78 runs sampled)
   *   undefined          x 32,363,368 ops/sec ±1.07% (82 runs sampled)
   *   function           x 31,296,870 ops/sec ±0.96% (83 runs sampled)
   */
  var typeofObj = typeof obj;
  if (typeofObj !== 'object') {
    return typeofObj;
  }

  /* ! Speed optimisation
   * Pre:
   *   null               x 28,645,765 ops/sec ±1.17% (82 runs sampled)
   * Post:
   *   null               x 36,428,962 ops/sec ±1.37% (84 runs sampled)
   */
  if (obj === null) {
    return 'null';
  }

  /* ! Spec Conformance
   * Test: `Object.prototype.toString.call(window)``
   *  - Node === "[object global]"
   *  - Chrome === "[object global]"
   *  - Firefox === "[object Window]"
   *  - PhantomJS === "[object Window]"
   *  - Safari === "[object Window]"
   *  - IE 11 === "[object Window]"
   *  - IE Edge === "[object Window]"
   * Test: `Object.prototype.toString.call(this)``
   *  - Chrome Worker === "[object global]"
   *  - Firefox Worker === "[object DedicatedWorkerGlobalScope]"
   *  - Safari Worker === "[object DedicatedWorkerGlobalScope]"
   *  - IE 11 Worker === "[object WorkerGlobalScope]"
   *  - IE Edge Worker === "[object WorkerGlobalScope]"
   */
  if (obj === globalObject) {
    return 'global';
  }

  /* ! Speed optimisation
   * Pre:
   *   array literal      x 2,888,352 ops/sec ±0.67% (82 runs sampled)
   * Post:
   *   array literal      x 22,479,650 ops/sec ±0.96% (81 runs sampled)
   */
  if (
    Array.isArray(obj) &&
    (symbolToStringTagExists === false || !(Symbol.toStringTag in obj))
  ) {
    return 'Array';
  }

  if (isDom) {
    /* ! Spec Conformance
     * (https://html.spec.whatwg.org/multipage/browsers.html#location)
     * WhatWG HTML$7.7.3 - The `Location` interface
     * Test: `Object.prototype.toString.call(window.location)``
     *  - IE <=11 === "[object Object]"
     *  - IE Edge <=13 === "[object Object]"
     */
    if (obj === globalObject.location) {
      return 'Location';
    }

    /* ! Spec Conformance
     * (https://html.spec.whatwg.org/#document)
     * WhatWG HTML$3.1.1 - The `Document` object
     * Note: Most browsers currently adher to the W3C DOM Level 2 spec
     *       (https://www.w3.org/TR/DOM-Level-2-HTML/html.html#ID-26809268)
     *       which suggests that browsers should use HTMLTableCellElement for
     *       both TD and TH elements. WhatWG separates these.
     *       WhatWG HTML states:
     *         > For historical reasons, Window objects must also have a
     *         > writable, configurable, non-enumerable property named
     *         > HTMLDocument whose value is the Document interface object.
     * Test: `Object.prototype.toString.call(document)``
     *  - Chrome === "[object HTMLDocument]"
     *  - Firefox === "[object HTMLDocument]"
     *  - Safari === "[object HTMLDocument]"
     *  - IE <=10 === "[object Document]"
     *  - IE 11 === "[object HTMLDocument]"
     *  - IE Edge <=13 === "[object HTMLDocument]"
     */
    if (obj === globalObject.document) {
      return 'Document';
    }

    /* ! Spec Conformance
     * (https://html.spec.whatwg.org/multipage/webappapis.html#mimetypearray)
     * WhatWG HTML$8.6.1.5 - Plugins - Interface MimeTypeArray
     * Test: `Object.prototype.toString.call(navigator.mimeTypes)``
     *  - IE <=10 === "[object MSMimeTypesCollection]"
     */
    if (obj === (globalObject.navigator || {}).mimeTypes) {
      return 'MimeTypeArray';
    }

    /* ! Spec Conformance
     * (https://html.spec.whatwg.org/multipage/webappapis.html#pluginarray)
     * WhatWG HTML$8.6.1.5 - Plugins - Interface PluginArray
     * Test: `Object.prototype.toString.call(navigator.plugins)``
     *  - IE <=10 === "[object MSPluginsCollection]"
     */
    if (obj === (globalObject.navigator || {}).plugins) {
      return 'PluginArray';
    }

    /* ! Spec Conformance
     * (https://html.spec.whatwg.org/multipage/webappapis.html#pluginarray)
     * WhatWG HTML$4.4.4 - The `blockquote` element - Interface `HTMLQuoteElement`
     * Test: `Object.prototype.toString.call(document.createElement('blockquote'))``
     *  - IE <=10 === "[object HTMLBlockElement]"
     */
    if (obj instanceof HTMLElement && obj.tagName === 'BLOCKQUOTE') {
      return 'HTMLQuoteElement';
    }

    /* ! Spec Conformance
     * (https://html.spec.whatwg.org/#htmltabledatacellelement)
     * WhatWG HTML$4.9.9 - The `td` element - Interface `HTMLTableDataCellElement`
     * Note: Most browsers currently adher to the W3C DOM Level 2 spec
     *       (https://www.w3.org/TR/DOM-Level-2-HTML/html.html#ID-82915075)
     *       which suggests that browsers should use HTMLTableCellElement for
     *       both TD and TH elements. WhatWG separates these.
     * Test: Object.prototype.toString.call(document.createElement('td'))
     *  - Chrome === "[object HTMLTableCellElement]"
     *  - Firefox === "[object HTMLTableCellElement]"
     *  - Safari === "[object HTMLTableCellElement]"
     */
    if (obj instanceof HTMLElement && obj.tagName === 'TD') {
      return 'HTMLTableDataCellElement';
    }

    /* ! Spec Conformance
     * (https://html.spec.whatwg.org/#htmltableheadercellelement)
     * WhatWG HTML$4.9.9 - The `td` element - Interface `HTMLTableHeaderCellElement`
     * Note: Most browsers currently adher to the W3C DOM Level 2 spec
     *       (https://www.w3.org/TR/DOM-Level-2-HTML/html.html#ID-82915075)
     *       which suggests that browsers should use HTMLTableCellElement for
     *       both TD and TH elements. WhatWG separates these.
     * Test: Object.prototype.toString.call(document.createElement('th'))
     *  - Chrome === "[object HTMLTableCellElement]"
     *  - Firefox === "[object HTMLTableCellElement]"
     *  - Safari === "[object HTMLTableCellElement]"
     */
    if (obj instanceof HTMLElement && obj.tagName === 'TH') {
      return 'HTMLTableHeaderCellElement';
    }
  }

  /* ! Speed optimisation
  * Pre:
  *   Float64Array       x 625,644 ops/sec ±1.58% (80 runs sampled)
  *   Float32Array       x 1,279,852 ops/sec ±2.91% (77 runs sampled)
  *   Uint32Array        x 1,178,185 ops/sec ±1.95% (83 runs sampled)
  *   Uint16Array        x 1,008,380 ops/sec ±2.25% (80 runs sampled)
  *   Uint8Array         x 1,128,040 ops/sec ±2.11% (81 runs sampled)
  *   Int32Array         x 1,170,119 ops/sec ±2.88% (80 runs sampled)
  *   Int16Array         x 1,176,348 ops/sec ±5.79% (86 runs sampled)
  *   Int8Array          x 1,058,707 ops/sec ±4.94% (77 runs sampled)
  *   Uint8ClampedArray  x 1,110,633 ops/sec ±4.20% (80 runs sampled)
  * Post:
  *   Float64Array       x 7,105,671 ops/sec ±13.47% (64 runs sampled)
  *   Float32Array       x 5,887,912 ops/sec ±1.46% (82 runs sampled)
  *   Uint32Array        x 6,491,661 ops/sec ±1.76% (79 runs sampled)
  *   Uint16Array        x 6,559,795 ops/sec ±1.67% (82 runs sampled)
  *   Uint8Array         x 6,463,966 ops/sec ±1.43% (85 runs sampled)
  *   Int32Array         x 5,641,841 ops/sec ±3.49% (81 runs sampled)
  *   Int16Array         x 6,583,511 ops/sec ±1.98% (80 runs sampled)
  *   Int8Array          x 6,606,078 ops/sec ±1.74% (81 runs sampled)
  *   Uint8ClampedArray  x 6,602,224 ops/sec ±1.77% (83 runs sampled)
  */
  var stringTag = (symbolToStringTagExists && obj[Symbol.toStringTag]);
  if (typeof stringTag === 'string') {
    return stringTag;
  }

  var objPrototype = Object.getPrototypeOf(obj);
  /* ! Speed optimisation
  * Pre:
  *   regex literal      x 1,772,385 ops/sec ±1.85% (77 runs sampled)
  *   regex constructor  x 2,143,634 ops/sec ±2.46% (78 runs sampled)
  * Post:
  *   regex literal      x 3,928,009 ops/sec ±0.65% (78 runs sampled)
  *   regex constructor  x 3,931,108 ops/sec ±0.58% (84 runs sampled)
  */
  if (objPrototype === RegExp.prototype) {
    return 'RegExp';
  }

  /* ! Speed optimisation
  * Pre:
  *   date               x 2,130,074 ops/sec ±4.42% (68 runs sampled)
  * Post:
  *   date               x 3,953,779 ops/sec ±1.35% (77 runs sampled)
  */
  if (objPrototype === Date.prototype) {
    return 'Date';
  }

  /* ! Spec Conformance
   * (http://www.ecma-international.org/ecma-262/6.0/index.html#sec-promise.prototype-@@tostringtag)
   * ES6$25.4.5.4 - Promise.prototype[@@toStringTag] should be "Promise":
   * Test: `Object.prototype.toString.call(Promise.resolve())``
   *  - Chrome <=47 === "[object Object]"
   *  - Edge <=20 === "[object Object]"
   *  - Firefox 29-Latest === "[object Promise]"
   *  - Safari 7.1-Latest === "[object Promise]"
   */
  if (promiseExists && objPrototype === Promise.prototype) {
    return 'Promise';
  }

  /* ! Speed optimisation
  * Pre:
  *   set                x 2,222,186 ops/sec ±1.31% (82 runs sampled)
  * Post:
  *   set                x 4,545,879 ops/sec ±1.13% (83 runs sampled)
  */
  if (setExists && objPrototype === Set.prototype) {
    return 'Set';
  }

  /* ! Speed optimisation
  * Pre:
  *   map                x 2,396,842 ops/sec ±1.59% (81 runs sampled)
  * Post:
  *   map                x 4,183,945 ops/sec ±6.59% (82 runs sampled)
  */
  if (mapExists && objPrototype === Map.prototype) {
    return 'Map';
  }

  /* ! Speed optimisation
  * Pre:
  *   weakset            x 1,323,220 ops/sec ±2.17% (76 runs sampled)
  * Post:
  *   weakset            x 4,237,510 ops/sec ±2.01% (77 runs sampled)
  */
  if (weakSetExists && objPrototype === WeakSet.prototype) {
    return 'WeakSet';
  }

  /* ! Speed optimisation
  * Pre:
  *   weakmap            x 1,500,260 ops/sec ±2.02% (78 runs sampled)
  * Post:
  *   weakmap            x 3,881,384 ops/sec ±1.45% (82 runs sampled)
  */
  if (weakMapExists && objPrototype === WeakMap.prototype) {
    return 'WeakMap';
  }

  /* ! Spec Conformance
   * (http://www.ecma-international.org/ecma-262/6.0/index.html#sec-dataview.prototype-@@tostringtag)
   * ES6$24.2.4.21 - DataView.prototype[@@toStringTag] should be "DataView":
   * Test: `Object.prototype.toString.call(new DataView(new ArrayBuffer(1)))``
   *  - Edge <=13 === "[object Object]"
   */
  if (dataViewExists && objPrototype === DataView.prototype) {
    return 'DataView';
  }

  /* ! Spec Conformance
   * (http://www.ecma-international.org/ecma-262/6.0/index.html#sec-%mapiteratorprototype%-@@tostringtag)
   * ES6$23.1.5.2.2 - %MapIteratorPrototype%[@@toStringTag] should be "Map Iterator":
   * Test: `Object.prototype.toString.call(new Map().entries())``
   *  - Edge <=13 === "[object Object]"
   */
  if (mapExists && objPrototype === mapIteratorPrototype) {
    return 'Map Iterator';
  }

  /* ! Spec Conformance
   * (http://www.ecma-international.org/ecma-262/6.0/index.html#sec-%setiteratorprototype%-@@tostringtag)
   * ES6$23.2.5.2.2 - %SetIteratorPrototype%[@@toStringTag] should be "Set Iterator":
   * Test: `Object.prototype.toString.call(new Set().entries())``
   *  - Edge <=13 === "[object Object]"
   */
  if (setExists && objPrototype === setIteratorPrototype) {
    return 'Set Iterator';
  }

  /* ! Spec Conformance
   * (http://www.ecma-international.org/ecma-262/6.0/index.html#sec-%arrayiteratorprototype%-@@tostringtag)
   * ES6$22.1.5.2.2 - %ArrayIteratorPrototype%[@@toStringTag] should be "Array Iterator":
   * Test: `Object.prototype.toString.call([][Symbol.iterator]())``
   *  - Edge <=13 === "[object Object]"
   */
  if (arrayIteratorExists && objPrototype === arrayIteratorPrototype) {
    return 'Array Iterator';
  }

  /* ! Spec Conformance
   * (http://www.ecma-international.org/ecma-262/6.0/index.html#sec-%stringiteratorprototype%-@@tostringtag)
   * ES6$21.1.5.2.2 - %StringIteratorPrototype%[@@toStringTag] should be "String Iterator":
   * Test: `Object.prototype.toString.call(''[Symbol.iterator]())``
   *  - Edge <=13 === "[object Object]"
   */
  if (stringIteratorExists && objPrototype === stringIteratorPrototype) {
    return 'String Iterator';
  }

  /* ! Speed optimisation
  * Pre:
  *   object from null   x 2,424,320 ops/sec ±1.67% (76 runs sampled)
  * Post:
  *   object from null   x 5,838,000 ops/sec ±0.99% (84 runs sampled)
  */
  if (objPrototype === null) {
    return 'Object';
  }

  return Object
    .prototype
    .toString
    .call(obj)
    .slice(toStringLeftSliceLength, toStringRightSliceLength);
};

module.exports.typeDetect = module.exports;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)))

/***/ }),
/* 9 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}(); /*
      * This is Stringificator for TinyData
      *
      * Its get object and return materialized path, with some changes, like:
      * - filter some data
      * - cut long text values
      * change data values to stub (not realized)
      */

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _type_detector = __webpack_require__(0);

var _type_detector2 = _interopRequireDefault(_type_detector);

var _json_equal = __webpack_require__(11);

var _json_equal2 = _interopRequireDefault(_json_equal);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var Stringificator = function () {
  function Stringificator(originalObj, internalPathDelimiter, regexpTransformationFn) {
    var options = arguments.length <= 3 || arguments[3] === undefined ? {} : arguments[3];

    _classCallCheck(this, Stringificator);

    this.originalObj = originalObj;
    this.internalPathDelimiter = internalPathDelimiter;
    this.regexpTransformationFn = regexpTransformationFn;
    // stringification must to be cached
    this.cacheStringifyedObject = null;
    // settings object to validate cache
    this.stringificationRule = {
      stubsList: [], // nodes list, witch context will be replaced by __STUB__
      stringifyFilter: null // rule to add to stringificated object ONLY matched nodes

      // this is our seatbelt for long texts - do not put it into index
    };this.maxTextLong = 120;
    // take user RegExp (as string or RegExp) and replace dots to dotInternal, not applied to function !!!!
    this.isConvertIncomePatterns = true;
    this.isDoLogging = options.log;
  }

  /*
   * This is public method, wrapper for internal and realize a cache
   */

  _createClass(Stringificator, [{
    key: 'stringifyObject',
    value: function stringifyObject(inStringifyFilter, inStubsList) {
      var isCacheHit = false;
      var stringyFilter = this.stringificationRule.stringifyFilter;
      var stringifyStubList = this.stringificationRule.stubsList;

      // on void call use old values
      if (!inStringifyFilter) {
        inStringifyFilter = stringyFilter;
      }
      if (!inStubsList) {
        inStubsList = stringifyStubList;
      }
      isCacheHit = this.cacheStringifyedObject && (0, _json_equal2.default)(inStringifyFilter, stringyFilter) && (0, _json_equal2.default)(inStubsList, stringifyStubList);
      if (this.isDoLogging) {
        console.log('stringify cache ' + (isCacheHit ? 'hit' : 'miss'));
      }
      if (!isCacheHit) {
        this.cacheStringifyedObject = this.doStringification(inStringifyFilter, inStubsList);
      }
      return this.cacheStringifyedObject;
    }

    /*
     * This method stringify object
     */

  }, {
    key: 'doStringification',
    value: function doStringification(stringifyRule, stubsList) {
      var inObjType = void 0,
          objKeys = void 0;
      var result = [];
      // filter may be applied only in correct depth
      var filterBody = this.makeElementFilter(stringifyRule);
      // this is filter for string elements
      var stringLimiter = this.makeStringLimiter(this.maxTextLong);
      var dotSign = this.internalPathDelimiter;
      // its filter itself, assembled and ready to fire
      var isFilterPassed = stringifyRule ? filterBody : function () {
        return true;
      };
      var innnerLoop = function innnerLoop(inObj, prefix, depth) {
        inObjType = (0, _type_detector2.default)(inObj);
        switch (inObjType) {
          case 'HASH':
            objKeys = Object.keys(inObj);
            if (objKeys.length) {
              objKeys.forEach(function (key) {
                if (isFilterPassed(prefix, key, depth)) {
                  innnerLoop(inObj[key], '' + prefix + key + dotSign, depth + 1);
                }
              });
            } else {
              innnerLoop('__EMPTY__|HASH|', prefix, depth);
            }
            break;
          case 'ARRAY':
            if (inObj.length) {
              inObj.forEach(function (value, idx) {
                if (isFilterPassed(prefix, idx, depth)) {
                  innnerLoop(value, '' + prefix + idx + dotSign, depth + 1);
                }
              });
            } else {
              innnerLoop('__EMPTY__|ARRAY|', prefix, depth);
            }
            break;
          case 'NUMBER':
          case 'BOOLEAN':
          case 'NULL':
            result.push('' + prefix + inObj);
            break;
          case 'STRING':
            result.push(stringLimiter(prefix, inObj, depth));
            break;
          case 'DATE':
          case 'REGEXP':
            result.push(prefix + '__' + inObjType + '__|' + inObj + '|__');
            break;
          default:
            result.push(prefix + '__' + inObjType + '__');
        }
      };
      // TODO - check 0 on hashes, is it correct ?
      innnerLoop(this.originalObj, '', 0);
      return result;
    }

    /*
     * This method create limiter for long text
     */

  }, {
    key: 'makeStringLimiter',
    value: function makeStringLimiter(maxLength) {
      return function (fullElemPath, elemContent) {
        var elemLength = elemContent.length;
        if (elemLength >= maxLength) {
          return fullElemPath + '__LONG_TEXT__|' + elemLength + '|';
        } else {
          return '' + fullElemPath + elemContent;
        }
      };
    }

    /*
     * This method create stringify filter
     *
     * to reduce part of values to speed up stringification and seeking
     */

  }, {
    key: 'makeElementFilter',
    value: function makeElementFilter(stringifyRule) {
      var nameMatcher = void 0,
          stringifyPattern = void 0;

      if ((0, _type_detector2.default)(stringifyRule) === 'HASH' && stringifyRule.originPattern) {
        stringifyPattern = stringifyRule.originPattern;
        // if incoming RegExp needed to be transformed
        if (this.isConvertIncomePatterns) {
          stringifyPattern = this.regexpTransformationFn(stringifyPattern);
        }
        nameMatcher = function nameMatcher(matcherElemName, matcherElemOrigin) {
          return matcherElemName === stringifyRule.elementName && stringifyPattern.test(matcherElemOrigin);
        };
      } else {
        nameMatcher = function nameMatcher(matcherElemName) {
          return matcherElemName === stringifyRule.elementName;
        };
      }
      // filter may be applied only in correct depth
      return function (elemOrigin, elemName, elemDepth) {
        if (stringifyRule.applyOnDepth === elemDepth) {
          return nameMatcher(elemName, elemOrigin);
        } else {
          return true;
        }
      };
    }
  }]);

  return Stringificator;
}();

exports.default = Stringificator;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/*
 * Simply equality checker
 *
 * not fast, but dont get it
 */

function jsonEqual(a, b) {
  return JSON.stringify(a) === JSON.stringify(b);
}

exports.default = jsonEqual;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}(); /*
      * This is Finalizer for TinyData
      *
      * Its get object and filter (and may be convert) it to natural dot notation
      */

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _type_detector = __webpack_require__(0);

var _type_detector2 = _interopRequireDefault(_type_detector);

var _arg_parser = __webpack_require__(4);

var _arg_parser2 = _interopRequireDefault(_arg_parser);

var _collector = __webpack_require__(5);

var _collector2 = _interopRequireDefault(_collector);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var Finalizer = function () {
  function Finalizer(dotInternal, dotExternal) {
    _classCallCheck(this, Finalizer);

    this.dotInternal = dotInternal;
    this.dotExternal = dotExternal;
    this.convertBeforeFinalizeFunction = true; // finalizeFn get already converted data
    this.convertOutResult = true; // before data returning (obsolete if convert_before_finalize_function is 'true' )
  }

  _createClass(Finalizer, [{
    key: 'finalizeResult',
    value: function finalizeResult(finalizeFn, preResultObj) {
      var finalizer = void 0;
      var finalizationName = this.getFinalizationName(finalizeFn);

      if (finalizationName) {
        finalizer = this.prepareFinalization(finalizationName, finalizeFn);
        return finalizer(preResultObj);
      }
      return preResultObj;
    }
  }, {
    key: 'getFinalizationName',
    value: function getFinalizationName(finalizeFn) {
      var isWillBeFinalized = false;

      if (finalizeFn && (0, _arg_parser2.default)(finalizeFn, 'finalizeFn', 'Function')) {
        if (this.convertBeforeFinalizeFunction) {
          return 'DECORATE_THEN_FINALAZE';
        } else {
          isWillBeFinalized = true;
        }
      }
      if (this.convertOutResult) {
        if (isWillBeFinalized) {
          return 'FINALAZE_THEN_DECORATE';
        } else {
          return 'DECORATE';
        }
      }
    }

    /*
     * This method build all finalization stuff and return simple function
     */

  }, {
    key: 'prepareFinalization',
    value: function prepareFinalization(finalizationName, finalizeFn) {
      var resultConverter = this.buildResultConvertor();
      var userFinalizer = this.buildUserFinalizer(finalizeFn);

      switch (finalizationName) {
        case 'DECORATE':
          return function (inObj) {
            return resultConverter(inObj);
          };
        case 'FINALAZE_THEN_DECORATE':
          return function (inObj) {
            return resultConverter(userFinalizer(inObj));
          };
        case 'DECORATE_THEN_FINALAZE':
          return function (inObj) {
            return userFinalizer(resultConverter(inObj));
          };
        default:
          throw Error('unknown finalization style |' + finalizationName + '| used, halt!');
      }
    }

    /*
     * This method create function to wipe 'orchid' delimiter
     */

  }, {
    key: 'makeBuffingDelimiterWeel',
    value: function makeBuffingDelimiterWeel() {
      var dotSymbol = this.dotExternal;
      var delimiterSymbol = this.dotInternal;
      var delimiterPattern = new RegExp(delimiterSymbol, 'g');

      // if it string - trim orchid delimiter (from right end) than replace it
      return function (inData) {
        var fullString = void 0;

        if ((0, _type_detector2.default)(inData) !== 'STRING') {
          return inData;
        }
        if (delimiterSymbol === inData.charAt(inData.length - 1)) {
          fullString = inData.slice(0, -1);
        } else {
          fullString = inData;
        }
        return fullString.replace(delimiterPattern, dotSymbol);
      };
    }

    /*
     * This method trim orchid internal delimiters at the end of keys AND values,
     * than replace all internal dot to external (in values and keys too)
     */

  }, {
    key: 'buildResultConvertor',
    value: function buildResultConvertor() {
      var buffingDelimiter = this.makeBuffingDelimiterWeel();

      return function (inObj) {
        var resKey = void 0,
            value = void 0;
        var result = {};

        Object.keys(inObj).forEach(function (key) {
          value = inObj[key];
          resKey = buffingDelimiter(key);
          result[resKey] = new Array(value.length); // create same size array
          value.forEach(function (item, idx) {
            result[resKey][idx] = buffingDelimiter(item);
          });
        });
        return result;
      };
    }

    /*
     * To separate logic of finalizator actually just wrapper
     */

  }, {
    key: 'buildUserFinalizer',
    value: function buildUserFinalizer(userFn) {
      return (0, _collector2.default)(userFn);
    }
  }]);

  return Finalizer;
}();

exports.default = Finalizer;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}(); /*
      * This is log state object
      *
      * Its configured by incoming object and return turned on statuses
      */

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _type_detector = __webpack_require__(0);

var _type_detector2 = _interopRequireDefault(_type_detector);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var LogState = function () {
  function LogState(options) {
    _classCallCheck(this, LogState);

    // NB - options may have some another settings from main object - just ignore it
    this.options = options;
    this.state = {
      DEBUGGING: false,
      LOGGING: false,
      TIMING: false,
      WARNING: false
    };
    this.processOptions();
    this.initState();
  }

  /*
   * Complex options processor
   */

  _createClass(LogState, [{
    key: 'processOptions',
    value: function processOptions() {
      if (this.options && this.options.debug === true) {
        this.state.DEBUGGING = true;
        this.options.timing = true;
        this.options.logging = true;
        this.options.warning = true;
      } else {
        this.state.debug = false;
      }
    }

    /*
     * Set object state by options
     */

  }, {
    key: 'initState',
    value: function initState() {
      // for benchmarking
      if (this.options) {
        if (this.options.timing === true && (0, _type_detector2.default)(console.time) === 'FUNCTION') {
          this.state.TIMING = true;
        }
        if (this.options.logging === true && (0, _type_detector2.default)(console.log) === 'FUNCTION') {
          this.state.LOGGING = true;
        }
        if (this.options.warning === true && (0, _type_detector2.default)(console.warn) === 'FUNCTION') {
          this.state.WARNING = true;
        }
      }
    }

    /*
     * Return statement is logger must do some thing
     */

  }, {
    key: 'mustDo',
    value: function mustDo(stateName) {
      var upperStateName = stateName.toUpperCase();
      var res = this.state[upperStateName];

      if ((0, _type_detector2.default)(res) !== 'BOOLEAN') {
        throw Error('dont know |' + stateName + '| state');
      }
      return res;
    }
  }]);

  return LogState;
}();

exports.default = LogState;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _type_detector = __webpack_require__(0);

var _type_detector2 = _interopRequireDefault(_type_detector);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function doExtendObject(original, addon) {
  var addonType = void 0;
  var result = {};

  if ((0, _type_detector2.default)(original) !== 'HASH') {
    throw TypeError('must called with object, but get |' + original + '|');
  }
  if ((0, _type_detector2.default)(addon) !== 'HASH') {
    return original;
  }
  Object.keys(original).forEach(function (key) {
    addonType = (0, _type_detector2.default)(addon[key]);
    if (!(addonType === 'NULL' || addonType === 'UNDEFINED')) {
      result[key] = addon[key];
    } else {
      result[key] = original[key];
    }
  });
  return result;
} /*
   * Object Extender, sort of Object.assign
   */
exports.default = doExtendObject;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _options = __webpack_require__(1);

var _options2 = _interopRequireDefault(_options);

var _base_render = __webpack_require__(2);

var _base_render2 = _interopRequireDefault(_base_render);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Global diagram
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var GlobalDiagram = function (_BaseRender) {
  _inherits(GlobalDiagram, _BaseRender);

  function GlobalDiagram(props) {
    _classCallCheck(this, GlobalDiagram);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(GlobalDiagram).call(this, props));

    _this.clickHandler = _this.clickHandler.bind(_this);
    _this.changeCursorBuilder = _this.changeCursorBuilder.bind(_this);
    _this.onServiceHandler = function () {};
    return _this;
  }

  _createClass(GlobalDiagram, [{
    key: 'setClickHandler',
    value: function setClickHandler(fn) {
      this.onServiceHandler = fn;
      return this;
    }
  }, {
    key: 'getSubSet',
    value: function getSubSet(layerId, services) {
      var serviceId = void 0;
      var nodes = [];
      var edges = [];

      services.forEach(function (service) {
        serviceId = layerId + '.' + service.name;
        nodes.push({
          id: serviceId,
          label: service.name,
          group: 'service'
        });
        edges.push({
          from: layerId,
          to: serviceId
        });
      });
      return { nodes: nodes, edges: edges };
    }
  }, {
    key: 'getNetworkSet',
    value: function getNetworkSet(system) {
      var _this2 = this;

      var childrenSet = void 0;
      var nodes = [];
      var edges = [];

      system.forEach(function (parent) {
        nodes.push({
          id: parent.name,
          label: parent.name,
          group: 'layer'
        });
        if (parent.services.length !== 0) {
          childrenSet = _this2.getSubSet(parent.name, parent.services);
          nodes = nodes.concat(childrenSet.nodes);
          edges = edges.concat(childrenSet.edges);
        }
      }, this);

      return { nodes: new vis.DataSet(nodes), edges: new vis.DataSet(edges) };
    }
  }, {
    key: 'getOptions',
    value: function getOptions() {
      return _options2.default;
    }
  }, {
    key: 'doPostDraw',
    value: function doPostDraw() {
      this.network.on('click', this.clickHandler);
      this.network.on('hoverNode', this.changeCursorBuilder('pointer'));
      this.network.on('blurNode', this.changeCursorBuilder('default'));
    }
  }, {
    key: 'clickHandler',
    value: function clickHandler(params) {
      if (params.nodes.length === 0) {
        this.onServiceHandler();
      } else {
        // HACK ? not sure about more than one node at handler, any way get first
        this.onServiceHandler(params.nodes.shift());
      }
    }
  }, {
    key: 'changeCursorBuilder',
    value: function changeCursorBuilder(newCursorStyle) {
      var networkCanvas = this.mountPoint.getElementsByTagName('canvas')[0];

      return function () {
        networkCanvas.style.cursor = newCursorStyle;
      };
    }
  }]);

  return GlobalDiagram;
}(_base_render2.default);

exports.default = GlobalDiagram;
module.exports = exports['default'];

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _options = __webpack_require__(1);

var _options2 = _interopRequireDefault(_options);

var _base_render = __webpack_require__(2);

var _base_render2 = _interopRequireDefault(_base_render);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Detail Layer graph
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var DetailLayerGraph = function (_BaseRender) {
  _inherits(DetailLayerGraph, _BaseRender);

  function DetailLayerGraph() {
    _classCallCheck(this, DetailLayerGraph);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(DetailLayerGraph).apply(this, arguments));
  }

  _createClass(DetailLayerGraph, [{
    key: 'getSubSet',
    value: function getSubSet(layerId, services) {
      var serviceId = void 0;
      var nodes = [];
      var edges = [];

      services.forEach(function (service) {
        serviceId = layerId + '.' + service.name;
        nodes.push({
          id: serviceId,
          label: service.name + ' (' + service.acl + ')',
          group: 'service',
          level: 1
        });
        edges.push({
          from: layerId,
          to: serviceId
        });
      });
      return { nodes: nodes, edges: edges };
    }
  }, {
    key: 'getNetworkSet',
    value: function getNetworkSet(system) {
      var childrenSet = void 0;
      var nodes = [];
      var edges = [];
      var currentLayer = system[this.name];

      nodes.push({
        id: currentLayer.name,
        label: currentLayer.name,
        group: 'layer',
        level: 0
      });
      if (currentLayer.services.length !== 0) {
        childrenSet = this.getSubSet(currentLayer.name, currentLayer.services);
        nodes = nodes.concat(childrenSet.nodes);
        edges = edges.concat(childrenSet.edges);
      }

      return { nodes: new vis.DataSet(nodes), edges: new vis.DataSet(edges) };
    }
  }, {
    key: 'getOptions',
    value: function getOptions() {
      var addonOptions = {
        layout: {
          hierarchical: {
            direction: 'LR'
          }
        }
      };

      return Object.assign({}, _options2.default, addonOptions);
    }
  }]);

  return DetailLayerGraph;
}(_base_render2.default);

exports.default = DetailLayerGraph;
module.exports = exports['default'];

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _tinyData = __webpack_require__(3);

var _tinyData2 = _interopRequireDefault(_tinyData);

var _options = __webpack_require__(1);

var _options2 = _interopRequireDefault(_options);

var _base_render = __webpack_require__(2);

var _base_render2 = _interopRequireDefault(_base_render);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Detail Layer graph
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var DetailServiceGraph = function (_BaseRender) {
  _inherits(DetailServiceGraph, _BaseRender);

  function DetailServiceGraph(props) {
    _classCallCheck(this, DetailServiceGraph);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(DetailServiceGraph).call(this, props));

    _this.tinyDataObj = null;
    return _this;
  }

  _createClass(DetailServiceGraph, [{
    key: 'setData',
    value: function setData(dataSet) {
      this.dataSet = dataSet;
      this.tinyDataObj = new _tinyData2.default(dataSet, { debug: false }); // debug for develop
      return this;
    }
  }, {
    key: 'getNetworkSet',
    value: function getNetworkSet(system) {
      var exportSet = void 0,
          requireSet = void 0,
          currentLayerIdx = void 0,
          currentServiceIdx = void 0,
          currentService = void 0,
          currentId = void 0,
          layerName = void 0;
      var nodes = [];
      var edges = []; // huck - babel glue two bracket

      var _getNamePair = this.getNamePair();

      var _getNamePair2 = _slicedToArray(_getNamePair, 2);

      currentLayerIdx = _getNamePair2[0];
      currentServiceIdx = _getNamePair2[1];

      currentService = system[currentLayerIdx].services[currentServiceIdx];
      currentId = 'root.' + currentService.name;
      layerName = system[currentLayerIdx].name;

      nodes.push({
        id: currentId,
        label: currentService.name + ' (' + currentService.acl + ')',
        group: 'service',
        level: 4
      });

      exportSet = this.getExportSet(layerName, currentId, currentService);
      requireSet = this.getRequireSet(currentId, currentService);
      nodes = nodes.concat(exportSet.nodes, requireSet.nodes);
      edges = edges.concat(exportSet.edges, requireSet.edges);

      return { nodes: new vis.DataSet(nodes), edges: new vis.DataSet(edges) };
    }
  }, {
    key: 'getExportSet',
    value: function getExportSet(layerName, parentId, currentService) {
      var _this2 = this;

      var type = void 0,
          actionId = void 0,
          consumers = void 0;
      var serviceName = currentService.name;
      var exportName = parentId + '.export';
      var exportObj = currentService.export;
      var nodes = [];
      var edges = [];
      var consumersDict = {};
      var consumersServiceDict = {};

      nodes.push({
        id: exportName,
        label: 'export',
        group: 'export',
        level: 3
      });

      edges.push({
        from: parentId,
        to: exportName
      });

      Object.keys(exportObj).forEach(function (actionName) {
        type = exportObj[actionName];
        actionId = exportName + '.' + actionName;

        nodes.push({
          id: actionId,
          label: actionName + '\n(' + type + ')',
          group: 'action_' + type, // execute, read, write
          level: 2
        });

        edges.push({
          from: exportName,
          to: actionId
        });

        consumers = _this2.getExportUpsideDownConsumer(layerName, serviceName, actionName);
        Object.keys(consumers).forEach(function (consumerLayer) {
          var consumerLayerId = 'export.' + consumerLayer;
          var layerServices = consumers[consumerLayer];

          if (!consumersDict[consumerLayerId]) {
            nodes.push({
              id: consumerLayerId,
              label: consumerLayer,
              group: 'layer_other',
              level: 0
            });
            consumersDict[consumerLayerId] = true;
          }

          layerServices.forEach(function (service) {
            var consumerServiceId = consumerLayerId + '.' + service;

            if (!consumersServiceDict[consumerServiceId]) {
              nodes.push({
                id: consumerServiceId,
                label: service,
                group: 'service_other',
                level: 1
              });
              edges.push({
                from: consumerServiceId,
                to: consumerLayerId
              });
              consumersServiceDict[consumerServiceId] = true;
            }
            edges.push({
              from: consumerServiceId,
              to: actionId
            });
          });
        });
      }, this);

      return { nodes: nodes, edges: edges };
    }
  }, {
    key: 'getExportUpsideDownConsumer',
    value: function getExportUpsideDownConsumer(layerName, serviceName, actionName) {
      var dataSet = this.dataSet; // to prevent context lost
      var resolvedPath = '^(\\d+)\\.services\\.(\\d+\\.require\\.\\d+)\\.actions\\.' + actionName + '\\.resolved\\.' + layerName; // find all services with require, resolved at target layer
      var resolvedFinalizer = function resolvedFinalizer(layerIdx, matchedRaws, emit) {
        var matchedList = void 0,
            serviceIdx = void 0,
            requiredIdx = void 0;
        var filtered = [];

        matchedRaws.forEach(function (matchedRaw) {
          matchedList = matchedRaw.split('.');
          serviceIdx = matchedList[0];
          requiredIdx = matchedList[2];

          // filter only requested from target service
          if (dataSet[layerIdx].services[serviceIdx].require[requiredIdx].name === serviceName) {
            filtered.push(dataSet[layerIdx].services[serviceIdx].name);
          }
        });
        emit(dataSet[layerIdx].name, filtered);
      };
      return this.tinyDataObj.seekOut(resolvedPath, resolvedFinalizer);
    }
  }, {
    key: 'getRequireSet',
    value: function getRequireSet(parentName, currentService) {
      var requireUpsideDown = void 0,
          layerId = void 0,
          serviceId = void 0,
          actionId = void 0;
      var requireName = parentName + '.require';
      var requireList = currentService.require;
      var nodes = [];
      var edges = [];

      // may not have 'require' block
      if (requireList.length === 0) {
        return { nodes: nodes, edges: edges };
      }

      nodes.push({
        id: requireName,
        label: 'require',
        group: 'require',
        level: 5
      });

      edges.push({
        from: parentName,
        to: requireName
      });

      requireUpsideDown = this.getRequireUpsideDownDict(requireList);
      Object.keys(requireUpsideDown).forEach(function (layerName) {
        layerId = 'require.' + layerName;
        nodes.push({
          id: layerId,
          label: layerName,
          group: 'layer_other',
          level: 8
        });
        Object.keys(requireUpsideDown[layerName]).forEach(function (serviceName) {
          serviceId = layerId + '.' + serviceName;
          nodes.push({
            id: serviceId,
            label: serviceName,
            group: 'service_other',
            level: 7
          });
          edges.push({
            from: serviceId,
            to: layerId
          });
          Object.keys(requireUpsideDown[layerName][serviceName]).forEach(function (actionName) {
            actionId = serviceId + '.' + actionName;
            nodes.push({
              id: actionId,
              label: actionName,
              group: 'action',
              level: 6
            });
            edges.push({
              from: serviceId,
              to: actionId
            }, {
              from: requireName,
              to: actionId
            });
          });
        });
      });

      return { nodes: nodes, edges: edges };
    }

    /*
     * Build upside-down require tree
     *
     * to prevent double root elements
     */

  }, {
    key: 'getRequireUpsideDownDict',
    value: function getRequireUpsideDownDict(requireList) {
      var action = void 0,
          resolved = void 0,
          serviceName = void 0;
      var upsideStorage = {};

      requireList.forEach(function (service) {
        serviceName = service.name;
        Object.keys(service.actions).forEach(function (actionName) {
          action = service.actions[actionName];
          resolved = action.resolved;
          if (!upsideStorage[resolved]) {
            upsideStorage[resolved] = {};
          }
          if (!upsideStorage[resolved][serviceName]) {
            upsideStorage[resolved][serviceName] = {};
          }
          upsideStorage[resolved][serviceName][actionName] = action.isReady;
        });
      });

      return upsideStorage;
    }
  }, {
    key: 'getNamePair',
    value: function getNamePair() {
      return this.name.split('.', 2);
    }
  }, {
    key: 'getOptions',
    value: function getOptions() {
      var addonOptions = {
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
      };

      return Object.assign({}, _options2.default, addonOptions);
    }
  }]);

  return DetailServiceGraph;
}(_base_render2.default);

exports.default = DetailServiceGraph;
module.exports = exports['default'];

/***/ })
/******/ ]);
});