/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default, options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);


/***/ }),
/* 2 */
/***/ ((module) => {



var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),
/* 3 */
/***/ ((module) => {



/* istanbul ignore next  */
function apply(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute("media", media);
  } else {
    style.removeAttribute("media");
  }

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, style);
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


function domAPI(options) {
  var style = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(style, options, obj);
    },
    remove: function remove() {
      removeStyleElement(style);
    }
  };
}

module.exports = domAPI;

/***/ }),
/* 4 */
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),
/* 5 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(style) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    style.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),
/* 6 */
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var style = document.createElement("style");
  options.setAttributes(style, options.attributes);
  options.insert(style);
  return style;
}

module.exports = insertStyleElement;

/***/ }),
/* 7 */
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, style) {
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),
/* 8 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n    color: rgb(212, 212, 212);\r\n    font-family: 'Montserrat', sans-serif;\r\n    font-weight: 500;\r\n}\r\nbody {\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n.calc-wrapper {\r\n    width: 100%;\r\n    height: 100vh;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.calc-container {\r\n    width: 40em;\r\n    height: 20em;\r\n    background-color: #333;\r\n    display: flex;\r\n    flex-direction: column;\r\n    border-radius: 15px;\r\n}\r\n\r\n.buttons-container {\r\n    display: flex;\r\n    height: 100%;\r\n    column-gap: 1px;\r\n}\r\n\r\n.calc-button {\r\n    border: none;\r\n}\r\n.calc-button:active {\r\n    transform: scale(0.95, 0.95);\r\n    border-radius: 1px;\r\n    box-shadow: inset 0 0 3px 2px #333;\r\n    transition: box-shadow 0.1s;\r\n}\r\n\r\n.dark {\r\n    background-color: #444;\r\n}\r\n\r\n.yellow {\r\n    background-color: rgb(255, 153, 0);\r\n}\r\n\r\n.light {\r\n    background-color: #999;\r\n}\r\n\r\n.left-buttons {\r\n    height: 100%;\r\n    width: 60%;\r\n    display: grid;\r\n    grid-template-columns: repeat(6, 1fr);\r\n    grid-template-rows: repeat(4, 50px);\r\n    column-gap: 1px;\r\n    row-gap: 1px;\r\n}\r\n\r\n.right-buttons {\r\n    width: 40%;\r\n    display: grid;\r\n    grid-template-columns: repeat(4, 1fr);\r\n    grid-template-rows: repeat(5, 50px);\r\n    column-gap: 1px;\r\n    row-gap: 1px;\r\n}\r\n\r\n.result-display-container {\r\n    width: 100%;\r\n    height: 6em;\r\n    margin: 0;\r\n    padding: 0;\r\n    border: none;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.result-display {\r\n    width: 90%;\r\n    max-width: 90%;\r\n    height: 80%;\r\n    max-height: 53px;\r\n    font-size: 30px;\r\n    display: flex;\r\n    align-items: center;\r\n    overflow: hidden;\r\n}\r\n\r\n.wide-but {\r\n    grid-column-end: span 2;\r\n}\r\n\r\n.equals {\r\n    border-bottom-right-radius: 15px;\r\n}\r\n\r\n.equals:active {\r\n    border-bottom-right-radius: 15px;\r\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 9 */
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),
/* 10 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "leftButtons": () => (/* binding */ leftButtons),
/* harmony export */   "rightButtons": () => (/* binding */ rightButtons)
/* harmony export */ });
var leftButtons = [{
  value: 'AC',
  className: 'dark',
  dataKey: 'AC'
}, {
  value: '±',
  className: 'dark',
  dataKey: 'plusMinus'
}, {
  value: '%',
  className: 'dark',
  dataKey: '%'
}, {
  value: '/',
  className: 'yellow',
  dataKey: 'divide'
}, {
  value: '7',
  className: 'light',
  dataKey: '7'
}, {
  value: '8',
  className: 'light',
  dataKey: '8'
}, {
  value: '9',
  className: 'light',
  dataKey: '9'
}, {
  value: 'X',
  className: 'yellow',
  dataKey: 'multiply'
}, {
  value: '4',
  className: 'light',
  dataKey: '4'
}, {
  value: '5',
  className: 'light',
  dataKey: '5'
}, {
  value: '6',
  className: 'light',
  dataKey: '6'
}, {
  value: '-',
  className: 'yellow',
  dataKey: 'minus'
}, {
  value: '1',
  className: 'light',
  dataKey: '1'
}, {
  value: '2',
  className: 'light',
  dataKey: '2'
}, {
  value: '3',
  className: 'light',
  dataKey: '3'
}, {
  value: '+',
  className: 'yellow',
  dataKey: 'plus'
}, {
  value: '0',
  className: 'light wide-but',
  dataKey: '0'
}, {
  value: '.',
  className: 'light',
  dataKey: 'dot'
}, {
  value: '=',
  className: 'yellow equals',
  dataKey: 'equals'
}];
var rightButtons = [{
  value: '(',
  className: 'dark',
  dataKey: '('
}, {
  value: ')',
  className: 'dark',
  dataKey: ')'
}, {
  value: 'mc',
  className: 'dark',
  dataKey: 'mc'
}, {
  value: 'm+',
  className: 'dark',
  dataKey: 'm+'
}, {
  value: 'm-',
  className: 'dark',
  dataKey: 'm-'
}, {
  value: 'mr',
  className: 'dark',
  dataKey: 'mr'
}, {
  value: '10ˣ',
  className: 'dark',
  dataKey: '10x'
}, {
  value: 'x²',
  className: 'dark',
  dataKey: 'xpow2'
}, {
  value: 'x³',
  className: 'dark',
  dataKey: 'xpow3'
}, {
  value: 'xʸ',
  className: 'dark',
  dataKey: '^'
}, {
  value: 'eˣ',
  className: 'dark',
  dataKey: 'ex'
}, {
  value: '←',
  className: 'dark backspace',
  dataKey: 'undo'
}, {
  value: '1/x',
  className: 'dark',
  dataKey: '1/x'
}, {
  value: '²√x',
  className: 'dark',
  dataKey: 'sqrtx'
}, {
  value: '³√x',
  className: 'dark',
  dataKey: 'cubertx'
}, {
  value: 'ʸ√x',
  className: 'dark',
  dataKey: 'root'
}, {
  value: 'ln',
  className: 'dark',
  dataKey: 'ln'
}, {
  value: 'log₁₀',
  className: 'dark',
  dataKey: 'log10'
}];

/***/ }),
/* 11 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Calculator": () => (/* binding */ Calculator),
/* harmony export */   "PlusMinus": () => (/* binding */ PlusMinus),
/* harmony export */   "AllClear": () => (/* binding */ AllClear),
/* harmony export */   "Memory": () => (/* binding */ Memory),
/* harmony export */   "MemoryPlus": () => (/* binding */ MemoryPlus),
/* harmony export */   "MemoryMinus": () => (/* binding */ MemoryMinus),
/* harmony export */   "MemoryRead": () => (/* binding */ MemoryRead),
/* harmony export */   "CalculateCommand": () => (/* binding */ CalculateCommand),
/* harmony export */   "Insert": () => (/* binding */ Insert)
/* harmony export */ });
/* harmony import */ var _evaluate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);
/* harmony import */ var _parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13);
/* harmony import */ var _bracketsHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14);
/* harmony import */ var _functionHandler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var Calculator = /*#__PURE__*/function () {
  function Calculator(initialValue, app) {
    _classCallCheck(this, Calculator);

    this.value = initialValue;
    this.currentValue = initialValue;
    this.memoryValue = initialValue;
    this.app = app;
    this.history = [];
  }

  _createClass(Calculator, [{
    key: "executeCommand",
    value: function executeCommand(command) {
      var commandName = command.__proto__.constructor.name;
      var arrFromValue = this.value.split(' ');

      switch (commandName) {
        case 'Insert':
        case 'CalculateCommand':
          this.value = command.execute(this.value);
          this.app.innerText = this.value;
          this.currentValue = this.getCurrentValue(this.value) ? this.getCurrentValue(this.value) : this.currentValue;
          break;

        case 'PlusMinus':
          var currentValueIndex = this.getIndexOfCurrentValue();
          this.currentValue = command.execute(this.currentValue);
          this.value = [].concat(_toConsumableArray(arrFromValue.slice(0, currentValueIndex)), [this.currentValue], _toConsumableArray(arrFromValue.slice(currentValueIndex + 1))).join(' ');
          break;

        case 'AllClear':
          this.value = '0';
          this.currentValue = '0';
          this.history = [];
          this.memoryValue = '0';
          break;

        case 'Memory':
          this.memoryValue = command.execute(this.currentValue);
          break;

        case 'MemoryPlus':
        case 'MemoryMinus':
          this.memoryValue = command.execute(this.memoryValue, this.currentValue);
          break;

        case 'MemoryRead':
          this.value = command.execute(this.memoryValue);
          break;
      }

      if (commandName.indexOf('Memory') === -1) {
        this.history.push({
          name: command,
          value: this.value,
          currentValue: this.currentValue,
          memoryValue: this.memoryValue
        });
      }
    }
  }, {
    key: "undo",
    value: function undo() {
      this.history.pop();

      if (this.history.length > 0) {
        this.value = this.history[this.history.length - 1].value;
        this.currentValue = this.history[this.history.length - 1].currentValue;
        console.log(this.history);
      } else {
        this.value = '0';
        console.log('Commands history is empty');
      }

      this.app.innerText = this.value;
    }
  }, {
    key: "getCurrentValue",
    value: function getCurrentValue(value) {
      var lastValue = value.split(' ')[value.split(' ').length - 1];
      return isNaN(+lastValue) ? false : lastValue;
    }
  }, {
    key: "getIndexOfCurrentValue",
    value: function getIndexOfCurrentValue() {
      var arrFromValue = this.value.split(' ');
      return arrFromValue.lastIndexOf(this.currentValue);
    }
  }]);

  return Calculator;
}();
var PlusMinus = /*#__PURE__*/function () {
  function PlusMinus() {
    _classCallCheck(this, PlusMinus);
  }

  _createClass(PlusMinus, [{
    key: "execute",
    value: function execute(value) {
      if (value > 0) {
        return -value;
      } else if (value < 0) {
        return Math.abs(value);
      } else {
        return value;
      }
    }
  }]);

  return PlusMinus;
}();
var AllClear = /*#__PURE__*/function () {
  function AllClear() {
    _classCallCheck(this, AllClear);
  }

  _createClass(AllClear, [{
    key: "execute",
    value: function execute() {
      return null;
    }
  }]);

  return AllClear;
}();
var Memory = /*#__PURE__*/function () {
  function Memory() {
    _classCallCheck(this, Memory);
  }

  _createClass(Memory, [{
    key: "execute",
    value: function execute(value) {
      return value;
    }
  }]);

  return Memory;
}();
var MemoryPlus = /*#__PURE__*/function () {
  function MemoryPlus() {
    _classCallCheck(this, MemoryPlus);
  }

  _createClass(MemoryPlus, [{
    key: "execute",
    value: function execute(value1, value2) {
      return "".concat(+value1 + +value2);
    }
  }]);

  return MemoryPlus;
}();
var MemoryMinus = /*#__PURE__*/function () {
  function MemoryMinus() {
    _classCallCheck(this, MemoryMinus);
  }

  _createClass(MemoryMinus, [{
    key: "execute",
    value: function execute(value1, value2) {
      return "".concat(+value1 - +value2);
    }
  }]);

  return MemoryMinus;
}();
var MemoryRead = /*#__PURE__*/function () {
  function MemoryRead() {
    _classCallCheck(this, MemoryRead);
  }

  _createClass(MemoryRead, [{
    key: "execute",
    value: function execute(value) {
      return value;
    }
  }]);

  return MemoryRead;
}();
var CalculateCommand = /*#__PURE__*/function () {
  function CalculateCommand() {
    _classCallCheck(this, CalculateCommand);
  }

  _createClass(CalculateCommand, [{
    key: "execute",
    value: function execute(value) {
      return "".concat((0,_evaluate__WEBPACK_IMPORTED_MODULE_0__.evaluate)((0,_parser__WEBPACK_IMPORTED_MODULE_1__.InfixToPostfix)((0,_functionHandler__WEBPACK_IMPORTED_MODULE_3__.functionHandler)((0,_bracketsHandler__WEBPACK_IMPORTED_MODULE_2__.handleBrackets)(value)))));
    }
  }]);

  return CalculateCommand;
}();
var Insert = /*#__PURE__*/function () {
  function Insert() {
    _classCallCheck(this, Insert);
  }

  _createClass(Insert, [{
    key: "execute",
    value: function execute(value) {
      return value;
    }
  }]);

  return Insert;
}();

/***/ }),
/* 12 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "evaluate": () => (/* binding */ evaluate),
/* harmony export */   "postfixEval": () => (/* binding */ postfixEval)
/* harmony export */ });
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var operators = {
  '+': function _(x, y) {
    return x + y;
  },
  '-': function _(x, y) {
    return x - y;
  },
  X: function X(x, y) {
    return x * y;
  },
  '/': function _(x, y) {
    return x / y;
  }
};
var evaluate = function evaluate(expr) {
  var stack = [];
  expr.split(' ').forEach(function (token) {
    if (token in operators) {
      var _ref = [stack.pop(), stack.pop()],
          y = _ref[0],
          x = _ref[1];
      stack.push(operators[token](x, y));
    } else {
      stack.push(parseFloat(token));
    }
  });
  return stack.pop();
};
function postfixEval(postfixArray) {
  var stack = [];

  var _iterator = _createForOfIteratorHelper(postfixArray),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _element = _step.value;

      if (isNaN(_element)) {
        var x = stack.pop();
        var y = stack.pop();

        if (_element == '+') {
          stack.push(y + x);
        } else if (_element == '-') {
          stack.push(y - x);
        } else if (_element == 'X') {
          stack.push(y * x);
        } else if (_element == '/') {
          stack.push(y / x);
        } else if (_element === '^') {
          stack.push(Math.pow(y, x));
        }
      } else {
        stack.push(parseFloat(_element));
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  var returnValue = null;

  while (stack.length > 0) {
    console.log(stack);
    var element = stack.pop();

    if (isNaN(element)) {
      continue;
    } else {
      returnValue = element;
    }
  }

  return returnValue;
}

/***/ }),
/* 13 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InfixToPostfix": () => (/* binding */ InfixToPostfix)
/* harmony export */ });
function push_stack(stackArr, ele) {
  stackArr[stackArr.length] = ele;
}

function pop_stack(stackArr) {
  var _temp = stackArr[stackArr.length - 1];
  delete stackArr[stackArr.length - 1];
  stackArr.length--;
  return _temp;
}

function isOperand(who) {
  return !isOperator(who) ? true : false;
}

function isOperator(who) {
  return who === '+' || who === '-' || who === 'X' || who === '/' ? true : false;
}

function topStack(stackArr) {
  return stackArr[stackArr.length - 1];
}

function isEmpty(stackArr) {
  return stackArr.length == 0 ? true : false;
}

function prcd(char1, char2) {
  var char1_index = '';
  var char2_index = '';
  var _def_prcd = '-+X/';

  for (var i = 0; i < _def_prcd.length; i++) {
    if (char1 == _def_prcd.charAt(i)) char1_index = i;
    if (char2 == _def_prcd.charAt(i)) char2_index = i;
  }

  if ((char1_index == 0 || char1_index == 1) && char2_index > 1) return false;else return true;
}

function InfixToPostfix(infixStr) {
  var postfixStr = [];
  var stackArr = [];
  var postfixPtr = 0;
  infixStr = infixStr.split(' ');

  for (var _i = 0; _i < infixStr.length; _i++) {
    if (isOperand(infixStr[_i])) {
      postfixStr[postfixPtr] = infixStr[_i];
      postfixPtr++;
    } else {
      while (!isEmpty(stackArr) && prcd(topStack(stackArr), infixStr[_i])) {
        postfixStr[postfixPtr] = topStack(stackArr);
        pop_stack(stackArr);
        postfixPtr++;
      }

      push_stack(stackArr, infixStr[_i]);
    }
  }

  while (!isEmpty(stackArr)) {
    postfixStr[postfixStr.length] = topStack(stackArr);
    pop_stack(stackArr);
  }

  var returnVal = '';

  for (var i = 0; i < postfixStr.length; i++) {
    returnVal += " ".concat(postfixStr[i]);
  }

  return returnVal.trim();
}

/***/ }),
/* 14 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "handleBrackets": () => (/* binding */ handleBrackets)
/* harmony export */ });
/* harmony import */ var _evaluate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);
/* harmony import */ var _parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13);
/* harmony import */ var _functionHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }




var handleBrackets = function handleBrackets(string) {
  if (string.includes('(')) {
    var arrFromString = string.split(' ');
    var openIndex = arrFromString.lastIndexOf('(');
    var closeIndex = arrFromString.findIndex(function (item, index) {
      return item === ')' && index > openIndex;
    });
    var stringInBrackets = arrFromString.slice(openIndex + 1, closeIndex).join(' ');
    var bracketsResult = (0,_evaluate__WEBPACK_IMPORTED_MODULE_0__.evaluate)((0,_parser__WEBPACK_IMPORTED_MODULE_1__.InfixToPostfix)((0,_functionHandler__WEBPACK_IMPORTED_MODULE_2__.functionHandler)(stringInBrackets)));
    var newString = [].concat(_toConsumableArray(arrFromString.slice(0, openIndex)), ["".concat(bracketsResult)], _toConsumableArray(arrFromString.slice(closeIndex + 1))).join(' ');
    return handleBrackets(newString);
  } else {
    return string;
  }
};

/***/ }),
/* 15 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "functionHandler": () => (/* binding */ functionHandler)
/* harmony export */ });
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var functionHandler = function functionHandler(string) {
  var arr = string.split(' ');
  var funcName = arr.find(function (item) {
    return item === '^' || item === 'root' || item === 'ex' || item === '10x' || item === 'ln' || item === 'log10' || item === '%' || item === '1/x';
  });

  if (funcName) {
    var symbolIndex = arr.findIndex(function (item) {
      return item === funcName;
    });
    var funcResult = '';
    var newString = '';

    switch (funcName) {
      case '^':
        funcResult = Math.pow(arr[symbolIndex - 1], arr[symbolIndex + 1]);
        newString = [].concat(_toConsumableArray(arr.slice(0, symbolIndex - 1)), ["".concat(funcResult)], _toConsumableArray(arr.slice(symbolIndex + 2))).join(' ');
        break;

      case 'root':
        funcResult = Math.pow(arr[symbolIndex - 1], 1 / arr[symbolIndex + 1]);
        newString = [].concat(_toConsumableArray(arr.slice(0, symbolIndex - 1)), ["".concat(funcResult)], _toConsumableArray(arr.slice(symbolIndex + 2))).join(' ');
        break;

      case 'ex':
        funcResult = Math.pow(2.71828, arr[symbolIndex - 1]);
        newString = [].concat(_toConsumableArray(arr.slice(0, symbolIndex - 1)), ["".concat(funcResult)], _toConsumableArray(arr.slice(symbolIndex + 1))).join(' ');
        break;

      case '10x':
        funcResult = Math.pow(10, arr[symbolIndex - 1]);
        newString = [].concat(_toConsumableArray(arr.slice(0, symbolIndex - 1)), ["".concat(funcResult)], _toConsumableArray(arr.slice(symbolIndex + 1))).join(' ');
        break;

      case 'ln':
        funcResult = Math.log(arr[symbolIndex - 1]);
        newString = [].concat(_toConsumableArray(arr.slice(0, symbolIndex - 1)), ["".concat(funcResult)], _toConsumableArray(arr.slice(symbolIndex + 1))).join(' ');
        break;

      case 'log10':
        funcResult = Math.log10(arr[symbolIndex - 1]);
        newString = [].concat(_toConsumableArray(arr.slice(0, symbolIndex - 1)), ["".concat(funcResult)], _toConsumableArray(arr.slice(symbolIndex + 1))).join(' ');
        break;

      case '%':
        funcResult = arr[symbolIndex - 1] / 100;
        newString = [].concat(_toConsumableArray(arr.slice(0, symbolIndex - 1)), ["".concat(funcResult)], _toConsumableArray(arr.slice(symbolIndex + 1))).join(' ');
        break;

      case '1/x':
        funcResult = 1 / arr[symbolIndex - 1];
        newString = [].concat(_toConsumableArray(arr.slice(0, symbolIndex - 1)), ["".concat(funcResult)], _toConsumableArray(arr.slice(symbolIndex + 1))).join(' ');
        break;

      default:
        break;
    }

    return functionHandler(newString);
  } else {
    return string;
  }
};

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _calcConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony import */ var _calculator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var operators = ['+', '-', '/', 'X'];

var fillButtons = function fillButtons(arr) {
  return arr.map(function (item) {
    return {
      type: 'input',
      properties: {
        type: 'button',
        value: item.value,
        className: "".concat(item.className, " calc-button")
      },
      dataAttributes: _defineProperty({}, "data-key", item.dataKey)
    };
  });
};

var createElem = function createElem(arr) {
  var elems = arr.map(function (item) {
    var element = document.createElement(item.type);

    if (operators.find(function (operator) {
      return operator === item.properties.value;
    })) {
      element.setAttribute('data-operator', 'true');
    }

    Object.entries(item.properties || {}).forEach(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
          key = _ref2[0],
          value = _ref2[1];

      element[key] = value;
    });
    Object.entries(item.dataAttributes || {}).forEach(function (_ref3) {
      var _ref4 = _slicedToArray(_ref3, 2),
          key = _ref4[0],
          value = _ref4[1];

      element.setAttribute(key, value);
    });
    return element;
  });
  return elems;
};

var init = function init(arr, place) {
  arr.forEach(function (item) {
    return document.querySelector(place).append(item);
  });
};

document.querySelector('.result-display').innerText = '0';
var calculator = new _calculator__WEBPACK_IMPORTED_MODULE_2__.Calculator(document.querySelector('.result-display').innerText, document.querySelector('.result-display'));
document.querySelector('.buttons-container').addEventListener('click', function (e) {
  var input = document.querySelector('.result-display').innerText;
  var isOperator = e.target.attributes['data-operator'] ? true : false;

  switch (e.target.attributes['data-key'].value) {
    case 'equals':
      calculator.executeCommand(new _calculator__WEBPACK_IMPORTED_MODULE_2__.CalculateCommand());
      break;

    case 'plusMinus':
      calculator.executeCommand(new _calculator__WEBPACK_IMPORTED_MODULE_2__.PlusMinus());
      break;

    case '(':
    case ')':
      input = calculator.value;
      input += " ".concat(e.target.value);
      calculator.executeCommand(new _calculator__WEBPACK_IMPORTED_MODULE_2__.Insert());
      calculator.value = input;
      break;

    case 'undo':
      calculator.undo();
      break;

    case 'xpow2':
      input = calculator.value;
      input += ' ^ 2';
      calculator.executeCommand(new _calculator__WEBPACK_IMPORTED_MODULE_2__.Insert());
      calculator.value = input;
      break;

    case 'xpow3':
      input = calculator.value;
      input += ' ^ 3';
      calculator.executeCommand(new _calculator__WEBPACK_IMPORTED_MODULE_2__.Insert());
      calculator.value = input;
      break;

    case 'sqrtx':
      input = calculator.value;
      input += ' root 2';
      calculator.executeCommand(new _calculator__WEBPACK_IMPORTED_MODULE_2__.Insert());
      calculator.value = input;
      break;

    case 'cubertx':
      input = calculator.value;
      input += ' root 3';
      calculator.executeCommand(new _calculator__WEBPACK_IMPORTED_MODULE_2__.Insert());
      calculator.value = input;
      break;

    case 'AC':
      calculator.executeCommand(new _calculator__WEBPACK_IMPORTED_MODULE_2__.AllClear());
      break;

    case 'mc':
      calculator.executeCommand(new _calculator__WEBPACK_IMPORTED_MODULE_2__.Memory());
      break;

    case 'm+':
      calculator.executeCommand(new _calculator__WEBPACK_IMPORTED_MODULE_2__.MemoryPlus());
      break;

    case 'm-':
      calculator.executeCommand(new _calculator__WEBPACK_IMPORTED_MODULE_2__.MemoryMinus());
      break;

    case 'mr':
      calculator.executeCommand(new _calculator__WEBPACK_IMPORTED_MODULE_2__.MemoryRead());
      break;

    case '^':
    case 'root':
    case 'ex':
    case '10x':
    case 'ln':
    case 'log10':
    case '%':
    case '1/x':
      input = calculator.value;
      input += " ".concat(e.target.attributes['data-key'].value);
      calculator.executeCommand(new _calculator__WEBPACK_IMPORTED_MODULE_2__.Insert());
      calculator.value = input;
      break;

    default:
      if (e.target.value) {
        input = calculator.value;

        if (isNaN(+input.split(' ')[input.split(' ').length - 2]) && input.split(' ')[input.split(' ').length - 2] !== ')' && input.slice(-1) === '-' && !isNaN(+e.target.value)) {
          input += e.target.value;
        } else if (isOperator || input.slice(-1) === '(' || input.slice(-1) === '^' || input.slice(-1) === 't' || operators.find(function (item) {
          return item === input.slice(-1);
        })) {
          input += " ".concat(e.target.value);
        } else {
          input += e.target.value;
        }
      } else {
        null;
      }

      calculator.value = input;
      calculator.executeCommand(new _calculator__WEBPACK_IMPORTED_MODULE_2__.Insert());
  }

  if (calculator.value === 'NaN' || calculator.value === 'Infinity' || calculator.value === '-Infinity') {
    document.querySelector('.result-display').innerText = 'Incorrect input';
  } else {
    document.querySelector('.result-display').innerText = calculator.value;
  }
});
init(createElem(fillButtons(_calcConfig__WEBPACK_IMPORTED_MODULE_1__.rightButtons)), '.left-buttons');
init(createElem(fillButtons(_calcConfig__WEBPACK_IMPORTED_MODULE_1__.leftButtons)), '.right-buttons');
})();

/******/ })()
;