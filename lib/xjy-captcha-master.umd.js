(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["xjy-captcha-master"] = factory(require("vue"));
	else
		root["xjy-captcha-master"] = factory(root["Vue"]);
})((typeof self !== 'undefined' ? self : this), function(__WEBPACK_EXTERNAL_MODULE__8bbf__) {
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "24fb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
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

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "499e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ addStylesClient; });

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/addStylesClient.js
/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/



var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

function addStylesClient (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ "803c":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_captcha_vue_vue_type_style_index_0_id_8a4de254_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("8f33");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_captcha_vue_vue_type_style_index_0_id_8a4de254_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_captcha_vue_vue_type_style_index_0_id_8a4de254_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "8268":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@font-face{font-family:iconfont;src:url(?#iefix) format(\"embedded-opentype\"),url(//at.alicdn.com/t/font_3309235_m2oh6r8f8s.woff2) format(\"woff2\"),url(//at.alicdn.com/t/font_3309235_m2oh6r8f8s.woff) format(\"woff\"),url(//at.alicdn.com/t/font_3309235_m2oh6r8f8s.ttf) format(\"truetype\"),url(#iconfont) format(\"svg\")}[class^=icon-]{font-family:iconfont!important;font-style:normal;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.icon-close:before{content:\"\\e646\"}.icon-refresh:before{content:\"\\e6a4\"}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "8875":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// addapted from the document.currentScript polyfill by Adam Miller
// MIT license
// source: https://github.com/amiller-gh/currentScript-polyfill

// added support for Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1620505

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(typeof self !== 'undefined' ? self : this, function () {
  function getCurrentScript () {
    var descriptor = Object.getOwnPropertyDescriptor(document, 'currentScript')
    // for chrome
    if (!descriptor && 'currentScript' in document && document.currentScript) {
      return document.currentScript
    }

    // for other browsers with native support for currentScript
    if (descriptor && descriptor.get !== getCurrentScript && document.currentScript) {
      return document.currentScript
    }
  
    // IE 8-10 support script readyState
    // IE 11+ & Firefox support stack trace
    try {
      throw new Error();
    }
    catch (err) {
      // Find the second match for the "at" string to get file src url from stack.
      var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/ig,
        ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/ig,
        stackDetails = ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack),
        scriptLocation = (stackDetails && stackDetails[1]) || false,
        line = (stackDetails && stackDetails[2]) || false,
        currentLocation = document.location.href.replace(document.location.hash, ''),
        pageSource,
        inlineScriptSourceRegExp,
        inlineScriptSource,
        scripts = document.getElementsByTagName('script'); // Live NodeList collection
  
      if (scriptLocation === currentLocation) {
        pageSource = document.documentElement.outerHTML;
        inlineScriptSourceRegExp = new RegExp('(?:[^\\n]+?\\n){0,' + (line - 2) + '}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*', 'i');
        inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, '$1').trim();
      }
  
      for (var i = 0; i < scripts.length; i++) {
        // If ready state is interactive, return the script tag
        if (scripts[i].readyState === 'interactive') {
          return scripts[i];
        }
  
        // If src matches, return the script tag
        if (scripts[i].src === scriptLocation) {
          return scripts[i];
        }
  
        // If inline source matches, return the script tag
        if (
          scriptLocation === currentLocation &&
          scripts[i].innerHTML &&
          scripts[i].innerHTML.trim() === inlineScriptSource
        ) {
          return scripts[i];
        }
      }
  
      // If no match, return null
      return null;
    }
  };

  return getCurrentScript
}));


/***/ }),

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__8bbf__;

/***/ }),

/***/ "8f33":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("e3c5");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("12550ccc", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "e3c5":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".xjy-captcha[data-v-8a4de254]{position:fixed;top:0;bottom:0;left:0;right:0;display:flex;background:rgba(0,0,0,.5294117647058824)}.xjy-captcha-box[data-v-8a4de254]{width:280px;height:360px;background:#fff;border-radius:3px;box-shadow:0 0 13px 0 #dcdcdc;margin:auto;transition:all .8s ease-in-out}.xjy-captcha-header[data-v-8a4de254]{height:40px;display:flex;flex-direction:row;justify-content:space-between;align-items:center;padding:0 10px}.xjy-captcha-main[data-v-8a4de254]{width:260px;height:270px;margin:0 10px;display:flex;cursor:pointer}.xjy-captcha-main .xjy-captcha-img[data-v-8a4de254]{width:100%;height:100%;-o-object-fit:cover;object-fit:cover}.xjy-captcha-footer[data-v-8a4de254]{height:50px;display:flex;flex-direction:row;justify-content:space-between;align-items:center;padding:0 10px}.xjy-button[data-v-8a4de254]{outline:none;border:none;padding:5px 15px;font-size:18px;color:#fff;background:#2ea0ff;border-radius:2px}.xjy-button[data-v-8a4de254]:active{opacity:.6}.xjy-captcha-icon[data-v-8a4de254]{font-size:22px;color:#105aa3;cursor:pointer}.xjy-captcha-icon[data-v-8a4de254]:active{opacity:.6}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "ef57":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("8268");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("f959b1e4", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (true) {
    var getCurrentScript = __webpack_require__("8875")
    currentScript = getCurrentScript()

    // for backward compatibility, because previously we directly included the polyfill
    if (!('currentScript' in document)) {
      Object.defineProperty(document, 'currentScript', { get: getCurrentScript })
    }
  }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"707a3bd4-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/captcha/src/captcha.vue?vue&type=template&id=8a4de254&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"xjy-captcha"},[_c('div',{staticClass:"xjy-captcha-box"},[_c('div',{staticClass:"xjy-captcha-header"},[_c('span',[_vm._v("请"),_c('span',{staticStyle:{"text-decoration":"underline","color":"rgb(15 158 201)"}},[_vm._v("依次")]),_vm._v("点击:"),(_vm.charactersList)?_c('span',{staticStyle:{"font-size":"20px","font-weight":"bolder"}},[_vm._v(_vm._s(_vm.charactersList?_vm.charactersList.join("、"):''))]):_vm._e()]),_c('i',{staticClass:"icon-close xjy-captcha-icon",attrs:{"alt":"关闭"},on:{"click":_vm.close}})]),(_vm.charactersList)?_c('div',{staticClass:"xjy-captcha-main",attrs:{"id":"xjy-captcha-main"}},[_c('img',{staticClass:"xjy-captcha-img",attrs:{"id":"xjy-captcha-img","src":_vm.imgUrl},on:{"click":_vm.addTag}}),_vm._l((_vm.charactersList?_vm.charactersList:[]),function(item,index){return _c('span',{style:('text-shadow: 0px 0px 10px red;' +
                  'color:white;' +
                  'position:fixed;' +
                  'font-size:35px;' +
                  'margin-top: '+_vm.positionInfo[index].y+'px;' +
                  'margin-left:'+_vm.positionInfo[index].x+'px;' +
                  'transform: rotateZ('+_vm.positionInfo[index].r+'deg);'),on:{"click":_vm.addTag}},[_c('span',[_vm._v(_vm._s(item))])])})],2):_vm._e(),_c('div',{staticClass:"xjy-captcha-footer"},[_c('i',{staticClass:"icon-refresh xjy-captcha-icon",on:{"click":_vm.refresh}}),(_vm.result.isVerified)?_c('span',[_vm._v("验证"+_vm._s(_vm.result.flag?"成功":"失败"))]):_vm._e(),_c('button',{staticClass:"xjy-button",on:{"click":_vm.verify}},[_vm._v("确定")])])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./packages/captcha/src/captcha.vue?vue&type=template&id=8a4de254&scoped=true&

// EXTERNAL MODULE: ./packages/captcha/src/css/iconfont.css
var iconfont = __webpack_require__("ef57");

// CONCATENATED MODULE: ./packages/captcha/src/js/Constance.js
const Constance  ={
    imgList:[
        "https://files.hyz.cool/files/photos/3298760b6d63211941cf6760539beb56.jpg",
        "https://files.hyz.cool/files/photos/8532a3ef9494c889097e0ed081cc4825.jpg",
        "https://files.hyz.cool/files/photos/491744fb813797fef2a40478d90272cb.jpg",
        "https://files.hyz.cool/files/photos/da9e60a5defa546b3932e641b7318c6a.jpg",
        "https://files.hyz.cool/files/photos/7b1c6f5ff019ea837809bd24d3c7e977.jpg",
        "https://files.hyz.cool/files/photos/a25f8c54315a10b6723e728aebfb9a89.jpg",
        "https://files.hyz.cool/files/photos/d6e32628c3aa38a71dad7d7e4531db58.jpg",
        "https://files.hyz.cool/files/photos/b91d37f385fc620a72268c5589537901.jpg",
        "https://files.hyz.cool/files/photos/7cc7194c413ebfec15f40aa3259468af.jpg",
        "https://files.hyz.cool/files/photos/ed3918c6c8886bd735c8704d3cfe66e6.jpg"
    ]
}

// CONCATENATED MODULE: ./packages/captcha/src/js/utils.js
const randomlyGeneratedChineseCharacters = (num) => {
    let arr = []
    for (let i = 0; i < num; i++) {
        let str
        //汉字对应的unicode编码为u4e00-u9fa5转为10进制为19968-40869，先取随机数，再转为16进制
        str = '\\u' + (Math.floor(Math.random() * (40869 - 19968)) + 19968).toString(16)
        //在用正则操作数据后进行解码。注意：unescape() 函数在 JavaScript 1.5 版中已弃用。请使用 decodeURI() 或 decodeURIComponent() 代替。
        str = unescape(str.replace(/\\u/g, "%u"));
        arr.push(str)
    }
    return arr
}
const img = {
    width: 260,
    height: 270
}

const font = {
    width: 47,
    height: 54
}
const randomlyPosition = (num) => {
    let arr = []
    for (let i = 0; i < num; i++) {
        var x = (parseInt((Math.random() * (img.width / num -  font.width)).toFixed(0)))+img.width* i / num
        var y = (parseInt((Math.random() * (img.height -  font.height)).toFixed(0)) )
        var r = 45 - parseInt((Math.random() * 90).toFixed(0))
        let position = {
            x, y, r,
            // range: {
            //     t: [
            //          x + Math.sin(r) * font.height - Math.cos(r) * font.width,
            //          y - Math.cos(r) * font.height - Math.sin(r) * font.width
            //     ],
            //     b: [
            //         x, y
            //     ],
            //     l: [
            //         x - Math.cos(r) * font.width,
            //         y - Math.sin(r) * font.width
            //     ],
            //     r: [
            //         x + Math.sin(r) * font.height ,
            //         y - Math.cos(r) * font.height
            //     ]
            // }
        }
        arr.push(position)
    }
    return arr.sort(function() {
        return .5 - Math.random();
    });
}

const isInside = (point, vs) => {

    var x = point[0], y = point[1];

    var inside = false;
    for (var i = 0, j = vs.length - 1; i < vs.length; j = i++) {
        var xi = vs[i][0], yi = vs[i][1];
        var xj = vs[j][0], yj = vs[j][1];

        var intersect = ((yi > y) != (yj > y))
            && (x < (xj - xi) * (y - yi) / (yj - yi) + xi);
        if (intersect) inside = !inside;
    }

    return inside;
};

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__("8bbf");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/captcha/src/captcha.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ var captchavue_type_script_lang_js_ = ({
    name: "captcha",
    props: {
        imgList: {
            type: Array,
            default: () => Constance.imgList
        }
    },
    data: function () {
        return {
            num: 3,
            imgUrl: "",
            charactersList: [],
            positionInfo: [],
            tagList: [],
            result: {}
        }
    },
    // setup(props, context) {
    //     var {emit} = context
    //     var imgUrl = ref(props.imgList[(Math.random() * (props.imgList.length - 1)).toFixed(0)])
    //     var num = ref(parseInt((Math.random() * 2).toFixed(0)) + 2)
    //     var charactersList = ref(randomlyGeneratedChineseCharacters(num.value))
    //     var positionInfo = ref(randomlyPosition(num.value))
    //     var tagList = ref([]), result = ref({})
    //     // var timer =ref(setTimeout(()=>{},30000))
    //
    //     function init() {
    //         imgUrl.value = props.imgList[(Math.random() * (props.imgList.length - 1)).toFixed(0)]
    //         num .value= parseInt((Math.random() * 2).toFixed(0)) + 2
    //         charactersList.value = randomlyGeneratedChineseCharacters(num.value)
    //         positionInfo .value= randomlyPosition(num.value)
    //     }
    //     console.log(imgUrl)
    //     console.log(num)
    //     console.log(charactersList)
    //     console.log(positionInfo)
    //     function close() {
    //         emit("close")
    //     }
    //
    //     function refresh() {
    //         init()
    //         onremove({target: {id: "xjy-tag-0"}})
    //         result.value = {}
    //     }
    //
    //     function addTag(e) {
    //         var main = document.getElementById("xjy-captcha-main")
    //
    //         var img = document.getElementById("xjy-captcha-img")
    //         var top = e.clientY - img.offsetTop - 12.5
    //         var left = e.clientX - img.offsetLeft - 12.5
    //         var id = "xjy-tag-" + (tagList.value.length)
    //         var span
    //         if (tagList.value.length < num.value) {
    //             tagList.value.push({id, e, value: e.target.innerText})
    //             span = document.createElement("span")
    //         } else {
    //             id = "xjy-tag-" + (tagList.value.length - 1)
    //             tagList.value[num.value - 1] = {id, e, value: e.target.innerText}
    //             span = document.getElementById(id)
    //         }
    //         span.style =
    //             'box-shadow: 0 0 1px 1px;' +
    //             'color:white;' +
    //             'background:#00AAAA;' +
    //             'position:fixed;font-size:20px;' +
    //             'margin-top: ' + top + 'px;' +
    //             'margin-left:' + left + 'px;' +
    //             'border-radius: 100%; ' +
    //             'width: 25px; ' +
    //             'height: 25px; ' +
    //             'line-height: 25px;'
    //         span.onclick = (e) => onremove(e)
    //         span.id = id
    //         span.innerText = tagList.value.length
    //         main.appendChild(span)
    //     }
    //
    //     function onremove(e) {
    //         if (tagList.value.length <= 0) return
    //         var id = parseInt(e.target.id.split("-")[2])
    //         var main = document.getElementById("xjy-captcha-main")
    //         var len = tagList.value.length
    //         if (len - 1 > id) {
    //             for (id; id < len; id++) {
    //                 var span = document.getElementById("xjy-tag-" + id)
    //                 main.removeChild(span)
    //                 tagList.value.pop()
    //             }
    //         } else {
    //             var span = document.getElementById("xjy-tag-" + id)
    //             main.removeChild(span)
    //             tagList.value.splice(id - 1, 1)
    //         }
    //     }
    //
    //     function verify() {
    //
    //         if (tagList.value.length !== charactersList.value.length) {
    //             return
    //         }
    //         result.value = doVerify()
    //         if (result.value.isVerified && result.value.flag) {
    //             emit("success")
    //         } else {
    //             emit("fail")
    //         }
    //
    //         function doVerify() {
    //             var flag = true
    //             charactersList.value.forEach((item, index) => {
    //                 if (tagList.value[index].value !== item) {
    //                     flag = false
    //                     return
    //                 }
    //             })
    //             return {
    //                 isVerified: true,
    //                 flag
    //             }
    //         }
    //     }
    //
    //     return {
    //         imgUrl,
    //         num,
    //         charactersList,
    //         positionInfo,
    //         result: {},
    //         tagList: [],
    //         init,
    //         close,
    //         refresh,
    //         addTag,
    //         onremove,
    //         verify
    //     }
    // },
    mounted() {
        // console.log(this)
        this.init()
    },
    methods: {

        init() {
            this.imgUrl = this.imgList[(Math.random() * (this.imgList.length - 1)).toFixed(0)]
            this.num = parseInt((Math.random() * 2).toFixed(0)) + 2
            this.charactersList = randomlyGeneratedChineseCharacters(this.num)
            this.positionInfo = randomlyPosition(this.num)
        },
        close() {
            this.$emit("close")
        },
        refresh() {
            this.init()
            this.onremove({target: {id: "xjy-tag-0"}})
            this.result = {}
        },
        addTag(e) {
            var main = document.getElementById("xjy-captcha-main")

            var img = document.getElementById("xjy-captcha-img")
            var top = e.clientY - img.offsetTop - 12.5
            var left = e.clientX - img.offsetLeft - 12.5
            var id = "xjy-tag-" + (this.tagList.length)
            var span
            if (this.tagList.length < this.num) {
                this.tagList.push({id, e, value: e.target.innerText})
                span = document.createElement("span")
            } else {
                id = "xjy-tag-" + (this.tagList.length - 1)
                this.tagList[this.num - 1] = {id, e, value: e.target.innerText}
                span = document.getElementById(id)
            }
            span.style =
                'box-shadow: 0 0 1px 1px;' +
                'color:white;' +
                'background:#00AAAA;' +
                'position:fixed;font-size:20px;' +
                'margin-top: ' + top + 'px;' +
                'margin-left:' + left + 'px;' +
                'border-radius: 100%; ' +
                'width: 25px; ' +
                'height: 25px; ' +
                'line-height: 25px;' +
                'text-align: center;'
            span.onclick = (e) => this.onremove(e)
            span.id = id
            span.innerText = this.tagList.length
            main.appendChild(span)
        },
        onremove(e) {
            if (this.tagList.length <= 0) return
            var id = parseInt(e.target.id.split("-")[2])
            var main = document.getElementById("xjy-captcha-main")
            var len = this.tagList.length
            if (len - 1 > id) {
                for (id; id < len; id++) {
                    var span = document.getElementById("xjy-tag-" + id)
                    main.removeChild(span)
                    this.tagList.pop()
                }
            } else {
                var span = document.getElementById("xjy-tag-" + id)
                main.removeChild(span)
                this.tagList.splice(id - 1, 1)
            }
        },
        verify() {
            var that = this

            if (that.tagList.length !== that.charactersList.length) {
                return
            }
            that.result = doVerify()
            if (that.result.isVerified && that.result.flag) {
                that.$emit("success")
            } else {
                that.$emit("fail")
            }

            function doVerify() {
                var flag = true
                that.charactersList.forEach((item, index) => {
                    if (that.tagList[index].value !== item) {
                        flag = false
                        return
                    }
                })
                return {
                    isVerified: true,
                    flag
                }
            }
        }

    }
});

// CONCATENATED MODULE: ./packages/captcha/src/captcha.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_captchavue_type_script_lang_js_ = (captchavue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/captcha/src/captcha.vue?vue&type=style&index=0&id=8a4de254&scoped=true&lang=css&
var captchavue_type_style_index_0_id_8a4de254_scoped_true_lang_css_ = __webpack_require__("803c");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./packages/captcha/src/captcha.vue






/* normalize component */

var component = normalizeComponent(
  src_captchavue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "8a4de254",
  null
  
)

/* harmony default export */ var captcha = (component.exports);
// CONCATENATED MODULE: ./packages/captcha/index.js


captcha.install = function (Vue) {
 Vue.component(captcha.name,captcha)
}
/* harmony default export */ var packages_captcha = (captcha);

// CONCATENATED MODULE: ./packages/index.js

const components =[
    packages_captcha
]


const install = function (Vue){
    if(install.installed) return
    install.installed =true
    components.map(component =>Vue.component(component.name,component))
}
if(typeof window !=='undefined' && window.Vue){
    install(window.Vue)
}
/* harmony default export */ var packages_0 = ({
    version:'0.1.0',
    install,
    captcha: packages_captcha
});

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (packages_0);



/***/ })

/******/ });
});
//# sourceMappingURL=xjy-captcha-master.umd.js.map