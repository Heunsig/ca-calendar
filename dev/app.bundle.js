/******/ (function(modules) { // webpackBootstrap
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
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./src/scss/ca-calendar.scss":
/*!******************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js!./src/scss/ca-calendar.scss ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".cac-calendar thead tr .cac-calendar-title .cac-monthYear, .cac-calendar thead tr .cac-calendar-title .cac-btn-prevMonth, .cac-calendar thead tr .cac-calendar-title .cac-btn-nextMonth {\n  display: inline-block; }\n\n.cac-calendar {\n  border-collapse: collapse;\n  width: 100%;\n  max-width: 100%;\n  min-width: 670px;\n  font-family: Helvetica, sans-serif; }\n  .cac-calendar td {\n    border: 1px solid #e4e4e4; }\n  .cac-calendar thead tr .cac-calendar-title {\n    color: #7d7d7d;\n    font-size: 30px;\n    padding: 20px; }\n    .cac-calendar thead tr .cac-calendar-title .cac-monthYear {\n      min-width: 200px; }\n    .cac-calendar thead tr .cac-calendar-title .cac-btn-prevMonth {\n      -webkit-user-select: none;\n      /* Chrome all / Safari all */\n      -moz-user-select: none;\n      /* Firefox all */\n      -ms-user-select: none;\n      /* IE 10+ */\n      user-select: none;\n      /* Likely future */\n      cursor: pointer;\n      padding-right: 20px; }\n    .cac-calendar thead tr .cac-calendar-title .cac-btn-nextMonth {\n      -webkit-user-select: none;\n      /* Chrome all / Safari all */\n      -moz-user-select: none;\n      /* Firefox all */\n      -ms-user-select: none;\n      /* IE 10+ */\n      user-select: none;\n      /* Likely future */\n      cursor: pointer;\n      padding-left: 20px; }\n  .cac-calendar .cac-day-names th {\n    padding: 5px;\n    color: #7d7d7d;\n    width: 14.28%;\n    text-align: center; }\n  .cac-calendar td.cac-date {\n    min-height: 100px;\n    padding: 5px; }\n    .cac-calendar td.cac-date .cac-date-box {\n      min-height: 70px; }\n      .cac-calendar td.cac-date .cac-date-box .cac-date-text {\n        color: #888888;\n        text-align: right;\n        font-size: 17px; }\n      .cac-calendar td.cac-date .cac-date-box .cac-date-content {\n        min-height: 40px; }\n  .cac-calendar td:hover {\n    cursor: pointer;\n    background: #efefef; }\n  .cac-calendar .cac-date-today {\n    background: #cce9ff; }\n  .cac-calendar .cac-date-empty {\n    background: #f3f3f3; }\n  .cac-calendar .cac-list {\n    margin: 0;\n    padding: 7px;\n    list-style: none; }\n    .cac-calendar .cac-list .cac-list-item {\n      padding: 4px 0; }\n      .cac-calendar .cac-list .cac-list-item .cac-list-item-label {\n        float: left; }\n      .cac-calendar .cac-list .cac-list-item .cac-list-item-value {\n        float: right; }\n    .cac-calendar .cac-list .cac-list-item:after {\n      content: '';\n      display: block;\n      clear: both; }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/ca-calendar.js":
/*!****************************!*\
  !*** ./src/ca-calendar.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
  const MONTHNAMES = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November',  'December']
  const DAYNAMES = [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thrusday', 'Friday',  'Saturday' ]

  var CaCalendar = function () {

    let options = {
      id: 'calendar',
      date: ''
    }

    let defaultYear = 0
    let defaultMonth = 0
    let defaultDate = 0

    let year = 0
    let month = 0
    let date = 0

    let DefaultDate = null
    let daysPerMonth = []

    let contents = []

    let elements = {
      calendar: null,
      calendarTitle: null,
      calendarBody: null,
      monthYear: null,
      btnPrevMonth: null,
      btnNextMonth: null
    }

    let events = {
      click: null
    }

    if (arguments[0] && typeof arguments[0] === 'object') {
      extendDefaultSettings(options, arguments[0])
    }

    Object.defineProperties(this, {
      'options': {
        get: function () {
          return Object.assign({}, options)
        }
      },
      'defaultYear': {
        get: function () {
          return defaultYear
        },
        set: function (val) {
          defaultYear = val
        }
      },
      'defaultMonth': {
        get: function () {
          return defaultMonth
        },
        set: function (val) {
          defaultMonth = val
        }
      },
      'defaultDate': {
        get: function () {
          return defaultDate
        },
        set: function (val) {
          defaultDate = val
        }
      },
      'year': {
        get: function () {
          return year
        },
        set: function (val) {
          daysPerMonth = setDayPerMonth(val)
          year = val
        }
      },
      'month': {
        get: function () {
          return month
        },
        set: function (val) {
          month = val
        }
      },
      'date': {
        get: function () {
          return date
        },
        set: function (val) {
          date = val
        },
      },
      'contents': {
        get: function () {
          return contents
        },
        set: function (val) {
          contents = val
        }
      },
      'elements': {
        get: function () {
          return Object.assign({}, elements)
        }
      },
      'daysPerMonth': {
        get: function () {
          return daysPerMonth.concat()
        }
      },
      'events': {
        get: function () {
          return events
        }
      }
    })

    init.call(this, elements)
  }

  function init (elements) {
    let objDate = setDefaultDate(this.options)
    this.year = objDate.year
    this.month = objDate.month
    this.date = objDate.date
    this.defaultYear = objDate.year
    this.defaultMonth = objDate.month
    this.defaultDate = objDate.date
    
    let objEle = createCalendarLayout()
    elements.calendar = objEle.calendar
    elements.calendarTitle = objEle.calendarTitle
    elements.calendarBody = objEle.calendarBody
    elements.monthYear = objEle.monthYear
    elements.btnPrevMonth = objEle.btnPrevMonth
    elements.btnNextMonth = objEle.btnNextMonth

    setDefaultEvents.call(this)
  }


  function setDefaultDate (options) {
    let DefaultDate,
        month,
        date,
        year,
        daysPerMonth

    DefaultDate = getDefaultDate(options.date)
    month = DefaultDate.getMonth()
    date = DefaultDate.getDate()
    year = DefaultDate.getFullYear()

    return {
      month: month,
      date: date,
      year: year
    }
  }

  function setDefaultEvents () {
    this.elements.btnPrevMonth.addEventListener('click', () => {
      this.previousMonth()
    })

    this.elements.btnNextMonth.addEventListener('click', () => {
      this.nextMonth()
    })
  }

  function extendDefaultSettings(source, properties) {
    for (property in properties) {
      if (source.hasOwnProperty(property)) {
        source[property] = properties[property]
      }
    }
  }

  function getFebNumberOfDays (year) {
    if ((year % 100 != 0) && (year % 4 == 0) || (year % 400 == 0)) {
      return 29
    } else {
      return 28
    }
  }

  function setDayPerMonth (year) {
    return [ 31, getFebNumberOfDays(year), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ]
  }

  function getDefaultDate (defaultDate) {
    return defaultDate ? new Date(defaultDate) : new Date()
  } 

  function getFristDayOfTheWeek (month, year) {
    let firstDate = new Date(MONTHNAMES[month] + ' 1, ' + year)
    let firstDayOfTheWeek = firstDate.getDay()
    return firstDayOfTheWeek
  }

  function createCalendarLayout () {
    let calendar,
        calendarBody,
        thead,
        calendarTitle,
        trDayNames,
        monthYear,
        trCalendarTitle,
        btnPrevMonth,
        btnNextMonth

    calendar = document.createElement('table')
    calendar.className = 'cac-calendar'

    thead = document.createElement('thead')
    calendarBody = document.createElement('tbody')

    trCalendarTitle = document.createElement('tr')
    calendarTitle = document.createElement('th')
    calendarTitle.setAttribute('colspan', '7')
    calendarTitle.className = 'cac-calendar-title'

    trDayNames = document.createElement('tr')
    trDayNames.className = 'cac-day-names'

    for (let dayName of DAYNAMES) {
      let thDayName = document.createElement('th')
      thDayName.innerHTML = dayName
      trDayNames.appendChild(thDayName)
    }

    monthYear = document.createElement('div')
    monthYear.className = 'cac-monthYear'

    btnPrevMonth = document.createElement('div')
    btnPrevMonth.appendChild(document.createTextNode('<'))
    btnPrevMonth.className = 'cac-btn-prevMonth'

    btnNextMonth = document.createElement('div')
    btnNextMonth.appendChild(document.createTextNode('>'))
    btnNextMonth.className = 'cac-btn-nextMonth'

    calendarTitle.appendChild(btnPrevMonth)
    calendarTitle.appendChild(monthYear)
    calendarTitle.appendChild(btnNextMonth)

    trCalendarTitle.appendChild(calendarTitle)
    thead.appendChild(trCalendarTitle)
    thead.appendChild(trDayNames)
    calendar.appendChild(thead)
    calendar.appendChild(calendarBody)

    return {
      calendar: calendar,
      calendarTitle: calendarTitle,
      calendarBody: calendarBody,
      monthYear: monthYear,
      btnPrevMonth: btnPrevMonth,
      btnNextMonth: btnNextMonth
    }
  }

  // function createCalendarBody (this.month, date, year, daysPerMonth, contents) {
  function createCalendarBody () {  
    const TOTALDATEBOXS = 42

    let boxCounter = 0
    let dateCounter = 1
    let firstDayOfTheWeek = getFristDayOfTheWeek(this.month, this.year)
    let firstDayOfTheWeek2 = firstDayOfTheWeek
    let calendarContent = ``

    calendarContent += `
        <tr>
    ` 
    while (firstDayOfTheWeek > 0){  
        calendarContent += `
          <td class="cac-date cac-date-empty">
            <div class="cac-date-box">
              <div class="cac-date-text"></div>
              <div class="cac-date-content"></div>
            </div>
          </td>
        `
        firstDayOfTheWeek--
        boxCounter++
    }

    while (dateCounter <= (TOTALDATEBOXS - boxCounter)){
      if (firstDayOfTheWeek2 > 6) {
        firstDayOfTheWeek2 = 0
        calendarContent += `</tr><tr>`
      }

      if (dateCounter <= this.daysPerMonth[this.month]) { 
        if (new Date(this.year, this.month, dateCounter).getTime() === new Date(this.defaultYear, this.defaultMonth, this.defaultDate).getTime()) {
          calendarContent += `
            <td class="cac-date-today cac-date">
              <div class="cac-date-box">
                <div class="cac-date-text">${dateCounter}</div>
                <div class="cac-date-content">`

          for (let index in this.contents) {
            if (new Date(this.year, this.month, this.date).getTime() == new Date(this.contents[index].date).getTime()) {
              if (this.contents[index].items) {
                calendarContent += `<ul class="cac-list">`
                this.contents[index].items.forEach(item => {
                  calendarContent += `
                    <li class="cac-list-item">
                      <div class="cac-list-item-label">${item.label}</div>
                      <div class="cac-list-item-value">${item.value}</div>
                    </li>
                  `
                })
                calendarContent += `</ul>`
              }

              break
            }
          }
          
          calendarContent += `</div>
              </div>
            </td>`
        } else {
          calendarContent +=`
          <td class="cac-date">
            <div class="cac-date-box">
              <div class="cac-date-text">${dateCounter}</div>
              <div class="cac-date-content">`

          for (let index in this.contents) {
            if (new Date(this.year, this.month, dateCounter).getTime() == new Date(this.contents[index].date).getTime()) {
              if (this.contents[index].items) {
                calendarContent += `<ul class="cac-list">`
                this.contents[index].items.forEach(item => {
                  calendarContent += `
                    <li class="cac-list-item">
                      <div class="cac-list-item-label">${item.label}</div>
                      <div class="cac-list-item-value">${item.value}</div>
                    </li>
                  `
                })
                calendarContent += `</ul>`
              }

              break
            }
          }

          calendarContent += `</div>
            </div>
          </td>`
        }
      } else {
          calendarContent += `
            <td class="cac-date cac-date-empty">
              <div class="cac-date-box">
                <div class="cac-date-text"></div>
                <div class="cac-date-content"></div>
              </div>
            </td>`
      }
      
      firstDayOfTheWeek2++
      dateCounter++
    }

    calendarContent += `
        </tr>
    `
    return calendarContent
  }

  function eventSetter () {
    if (this.events.click) {
      eventClick.call(this, this.events.click)
    }
  }

  function eventClick (handler) {
    let dateBoxs = document.querySelectorAll('.cac-date')

    for (let box of dateBoxs) {
      let fullDate = {
        standard: '',
        formatted: ''
      }

      let date = box.querySelector('.cac-date-text').innerHTML

      if (date) {
        fullDate.standard = `${this.year}-${twoDigitMonth(this.month)}-${twoDigitDate(date)}`
        fullDate.formatted = `${twoDigitMonth(this.month)}/${twoDigitDate(date)}/${this.year}`
      }

      box.addEventListener('click', function (e) {
        handler(e, fullDate)
      })  
    }
  }

  function twoDigitDate (date) {
    return ('0' + date).slice(-2)
  }

  function twoDigitMonth (month) {
    return ('0' + (month + 1)).slice(-2)
  }

  function render () {
    this.elements.monthYear.innerHTML = `
      <div>${this.year}</div>
      <div>${MONTHNAMES[this.month]}</div>
    `
    // this.elements.calendarBody.innerHTML = createCalendarBody(this.month, this.date, this.year, this.daysPerMonth, this.contents)
    this.elements.calendarBody.innerHTML = createCalendarBody.call(this)
    eventSetter.call(this)
  }

  CaCalendar.prototype.print = function () {
    render.call(this)
    document.getElementById(this.options.id).appendChild(this.elements.calendar)
  }

  CaCalendar.prototype.today = function () {  
    let today = new Date()
    this.month = today.getMonth()
    this.date = today.getDate()
    this.year = today.getFullYear()
    render.call(this)
  }

  CaCalendar.prototype.defaultDate = function () {
    let DateValue = getDefaultDate(this.options.date)
    this.month = DateValue.getMonth()
    this.date = DateValue.getDate()
    this.year = DateValue.getFullYear()
    render.call(this)
  }

  CaCalendar.prototype.nextYear = function () {
    this.year = this.year + 1
    render.call(this)
  }

  CaCalendar.prototype.previousYear = function () {
    this.year = this.year - 1
    render.call(this)
  }

  CaCalendar.prototype.nextMonth = function () {
    this.month = this.month + 1
    if (this.month > 11) {
      this.year = this.year + 1
      this.month = 0
    }
    render.call(this)
  }

  CaCalendar.prototype.previousMonth = function () {
    this.month = this.month - 1
    if (this.month < 0) {
      this.year = this.year - 1
      this.month = 11
    }
    render.call(this)
  }

  CaCalendar.prototype.setContents = function (valContents) {
    this.contents = valContents
    render.call(this)
  }

  CaCalendar.prototype.click = function (handler) {
    this.events.click = handler
    render.call(this)
  }

  /* harmony default export */ __webpack_exports__["default"] = (CaCalendar);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ca_calendar_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ca-calendar.js */ "./src/ca-calendar.js");
/* harmony import */ var _scss_ca_calendar_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scss/ca-calendar.scss */ "./src/scss/ca-calendar.scss");
/* harmony import */ var _scss_ca_calendar_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_scss_ca_calendar_scss__WEBPACK_IMPORTED_MODULE_1__);



window.CaCalendar = _ca_calendar_js__WEBPACK_IMPORTED_MODULE_0__["default"]

/***/ }),

/***/ "./src/scss/ca-calendar.scss":
/*!***********************************!*\
  !*** ./src/scss/ca-calendar.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader!../../node_modules/sass-loader/lib/loader.js!./ca-calendar.scss */ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./src/scss/ca-calendar.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Njc3MvY2EtY2FsZW5kYXIuc2NzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL3VybHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NhLWNhbGVuZGFyLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2Nzcy9jYS1jYWxlbmRhci5zY3NzPzVkYTQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ25FQTtBQUNBOzs7QUFHQTtBQUNBLGtOQUFtTiwwQkFBMEIsRUFBRSxtQkFBbUIsOEJBQThCLGdCQUFnQixvQkFBb0IscUJBQXFCLHVDQUF1QyxFQUFFLHNCQUFzQixnQ0FBZ0MsRUFBRSxnREFBZ0QscUJBQXFCLHNCQUFzQixvQkFBb0IsRUFBRSxpRUFBaUUseUJBQXlCLEVBQUUscUVBQXFFLGtDQUFrQyxvRUFBb0UsdURBQXVELDhDQUE4QyxtREFBbUQsNEJBQTRCLEVBQUUscUVBQXFFLGtDQUFrQyxvRUFBb0UsdURBQXVELDhDQUE4QyxtREFBbUQsMkJBQTJCLEVBQUUscUNBQXFDLG1CQUFtQixxQkFBcUIsb0JBQW9CLHlCQUF5QixFQUFFLCtCQUErQix3QkFBd0IsbUJBQW1CLEVBQUUsK0NBQStDLHlCQUF5QixFQUFFLGdFQUFnRSx5QkFBeUIsNEJBQTRCLDBCQUEwQixFQUFFLG1FQUFtRSwyQkFBMkIsRUFBRSw0QkFBNEIsc0JBQXNCLDBCQUEwQixFQUFFLG1DQUFtQywwQkFBMEIsRUFBRSxtQ0FBbUMsMEJBQTBCLEVBQUUsNkJBQTZCLGdCQUFnQixtQkFBbUIsdUJBQXVCLEVBQUUsOENBQThDLHVCQUF1QixFQUFFLHFFQUFxRSxzQkFBc0IsRUFBRSxxRUFBcUUsdUJBQXVCLEVBQUUsb0RBQW9ELG9CQUFvQix1QkFBdUIsb0JBQW9CLEVBQUU7O0FBRXYrRTs7Ozs7Ozs7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxnQkFBZ0I7QUFDbkQsSUFBSTtBQUNKO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixpQkFBaUI7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLG9CQUFvQjtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvREFBb0QsY0FBYzs7QUFFbEU7QUFDQTs7Ozs7Ozs7Ozs7O0FDM0VBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEM7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLGlCQUFpQixtQkFBbUI7QUFDcEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCLHNCQUFzQjtBQUN2Qzs7QUFFQTtBQUNBLG1CQUFtQiwyQkFBMkI7O0FBRTlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnQkFBZ0IsbUJBQW1CO0FBQ25DO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpQkFBaUIsMkJBQTJCO0FBQzVDO0FBQ0E7O0FBRUEsUUFBUSx1QkFBdUI7QUFDL0I7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQSxpQkFBaUIsdUJBQXVCO0FBQ3hDO0FBQ0E7O0FBRUEsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsZ0JBQWdCLGlCQUFpQjtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYzs7QUFFZCxrREFBa0Qsc0JBQXNCO0FBQ3hFO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1REFBdUQ7QUFDdkQ7O0FBRUEsNkJBQTZCLG1CQUFtQjs7QUFFaEQ7O0FBRUE7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQzFYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsV0FBVyxFQUFFO0FBQ3JELHdDQUF3QyxXQUFXLEVBQUU7O0FBRXJEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0Esc0NBQXNDO0FBQ3RDLEdBQUc7QUFDSDtBQUNBLDhEQUE4RDtBQUM5RDs7QUFFQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN4RkE7QUFBQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0M7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMsWUFBWTtBQUN6RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RCxXQUFXO0FBQ3BFLHlEQUF5RCxXQUFXO0FBQ3BFO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxZQUFZO0FBQ3ZEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseURBQXlELFdBQVc7QUFDcEUseURBQXlELFdBQVc7QUFDcEU7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsK0JBQStCLFVBQVUsR0FBRywwQkFBMEIsR0FBRyxtQkFBbUI7QUFDNUYsZ0NBQWdDLDBCQUEwQixHQUFHLG1CQUFtQixHQUFHLFVBQVU7QUFDN0Y7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWEsVUFBVTtBQUN2QixhQUFhLHVCQUF1QjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDRDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwyRTs7Ozs7Ozs7Ozs7Ozs7OztBQ2xlQTtBQUNBOztBQUVBLDJFOzs7Ozs7Ozs7Ozs7QUNGQTs7QUFFQTs7QUFFQTtBQUNBOzs7O0FBSUEsZUFBZTs7QUFFZjtBQUNBOztBQUVBOztBQUVBOztBQUVBLFkiLCJmaWxlIjoiYXBwLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmNhYy1jYWxlbmRhciB0aGVhZCB0ciAuY2FjLWNhbGVuZGFyLXRpdGxlIC5jYWMtbW9udGhZZWFyLCAuY2FjLWNhbGVuZGFyIHRoZWFkIHRyIC5jYWMtY2FsZW5kYXItdGl0bGUgLmNhYy1idG4tcHJldk1vbnRoLCAuY2FjLWNhbGVuZGFyIHRoZWFkIHRyIC5jYWMtY2FsZW5kYXItdGl0bGUgLmNhYy1idG4tbmV4dE1vbnRoIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jazsgfVxcblxcbi5jYWMtY2FsZW5kYXIge1xcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgbWluLXdpZHRoOiA2NzBweDtcXG4gIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7IH1cXG4gIC5jYWMtY2FsZW5kYXIgdGQge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZTRlNGU0OyB9XFxuICAuY2FjLWNhbGVuZGFyIHRoZWFkIHRyIC5jYWMtY2FsZW5kYXItdGl0bGUge1xcbiAgICBjb2xvcjogIzdkN2Q3ZDtcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbiAgICBwYWRkaW5nOiAyMHB4OyB9XFxuICAgIC5jYWMtY2FsZW5kYXIgdGhlYWQgdHIgLmNhYy1jYWxlbmRhci10aXRsZSAuY2FjLW1vbnRoWWVhciB7XFxuICAgICAgbWluLXdpZHRoOiAyMDBweDsgfVxcbiAgICAuY2FjLWNhbGVuZGFyIHRoZWFkIHRyIC5jYWMtY2FsZW5kYXItdGl0bGUgLmNhYy1idG4tcHJldk1vbnRoIHtcXG4gICAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgIC8qIENocm9tZSBhbGwgLyBTYWZhcmkgYWxsICovXFxuICAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgICAvKiBGaXJlZm94IGFsbCAqL1xcbiAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgICAvKiBJRSAxMCsgKi9cXG4gICAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgICAvKiBMaWtlbHkgZnV0dXJlICovXFxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7IH1cXG4gICAgLmNhYy1jYWxlbmRhciB0aGVhZCB0ciAuY2FjLWNhbGVuZGFyLXRpdGxlIC5jYWMtYnRuLW5leHRNb250aCB7XFxuICAgICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgICAvKiBDaHJvbWUgYWxsIC8gU2FmYXJpIGFsbCAqL1xcbiAgICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAgLyogRmlyZWZveCBhbGwgKi9cXG4gICAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAgLyogSUUgMTArICovXFxuICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAgLyogTGlrZWx5IGZ1dHVyZSAqL1xcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7IH1cXG4gIC5jYWMtY2FsZW5kYXIgLmNhYy1kYXktbmFtZXMgdGgge1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGNvbG9yOiAjN2Q3ZDdkO1xcbiAgICB3aWR0aDogMTQuMjglO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cXG4gIC5jYWMtY2FsZW5kYXIgdGQuY2FjLWRhdGUge1xcbiAgICBtaW4taGVpZ2h0OiAxMDBweDtcXG4gICAgcGFkZGluZzogNXB4OyB9XFxuICAgIC5jYWMtY2FsZW5kYXIgdGQuY2FjLWRhdGUgLmNhYy1kYXRlLWJveCB7XFxuICAgICAgbWluLWhlaWdodDogNzBweDsgfVxcbiAgICAgIC5jYWMtY2FsZW5kYXIgdGQuY2FjLWRhdGUgLmNhYy1kYXRlLWJveCAuY2FjLWRhdGUtdGV4dCB7XFxuICAgICAgICBjb2xvcjogIzg4ODg4ODtcXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgICAgICAgZm9udC1zaXplOiAxN3B4OyB9XFxuICAgICAgLmNhYy1jYWxlbmRhciB0ZC5jYWMtZGF0ZSAuY2FjLWRhdGUtYm94IC5jYWMtZGF0ZS1jb250ZW50IHtcXG4gICAgICAgIG1pbi1oZWlnaHQ6IDQwcHg7IH1cXG4gIC5jYWMtY2FsZW5kYXIgdGQ6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQ6ICNlZmVmZWY7IH1cXG4gIC5jYWMtY2FsZW5kYXIgLmNhYy1kYXRlLXRvZGF5IHtcXG4gICAgYmFja2dyb3VuZDogI2NjZTlmZjsgfVxcbiAgLmNhYy1jYWxlbmRhciAuY2FjLWRhdGUtZW1wdHkge1xcbiAgICBiYWNrZ3JvdW5kOiAjZjNmM2YzOyB9XFxuICAuY2FjLWNhbGVuZGFyIC5jYWMtbGlzdCB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogN3B4O1xcbiAgICBsaXN0LXN0eWxlOiBub25lOyB9XFxuICAgIC5jYWMtY2FsZW5kYXIgLmNhYy1saXN0IC5jYWMtbGlzdC1pdGVtIHtcXG4gICAgICBwYWRkaW5nOiA0cHggMDsgfVxcbiAgICAgIC5jYWMtY2FsZW5kYXIgLmNhYy1saXN0IC5jYWMtbGlzdC1pdGVtIC5jYWMtbGlzdC1pdGVtLWxhYmVsIHtcXG4gICAgICAgIGZsb2F0OiBsZWZ0OyB9XFxuICAgICAgLmNhYy1jYWxlbmRhciAuY2FjLWxpc3QgLmNhYy1saXN0LWl0ZW0gLmNhYy1saXN0LWl0ZW0tdmFsdWUge1xcbiAgICAgICAgZmxvYXQ6IHJpZ2h0OyB9XFxuICAgIC5jYWMtY2FsZW5kYXIgLmNhYy1saXN0IC5jYWMtbGlzdC1pdGVtOmFmdGVyIHtcXG4gICAgICBjb250ZW50OiAnJztcXG4gICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICBjbGVhcjogYm90aDsgfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbiIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbih1c2VTb3VyY2VNYXApIHtcblx0dmFyIGxpc3QgPSBbXTtcblxuXHQvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cdGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcblx0XHRyZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcblx0XHRcdHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXHRcdFx0aWYoaXRlbVsyXSkge1xuXHRcdFx0XHRyZXR1cm4gXCJAbWVkaWEgXCIgKyBpdGVtWzJdICsgXCJ7XCIgKyBjb250ZW50ICsgXCJ9XCI7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gY29udGVudDtcblx0XHRcdH1cblx0XHR9KS5qb2luKFwiXCIpO1xuXHR9O1xuXG5cdC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cdGxpc3QuaSA9IGZ1bmN0aW9uKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcblx0XHRpZih0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIilcblx0XHRcdG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcblx0XHR2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXHRcdFx0aWYodHlwZW9mIGlkID09PSBcIm51bWJlclwiKVxuXHRcdFx0XHRhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG5cdFx0fVxuXHRcdGZvcihpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gbW9kdWxlc1tpXTtcblx0XHRcdC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcblx0XHRcdC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXG5cdFx0XHQvLyAgd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxuXHRcdFx0Ly8gIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcblx0XHRcdGlmKHR5cGVvZiBpdGVtWzBdICE9PSBcIm51bWJlclwiIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG5cdFx0XHRcdGlmKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcblx0XHRcdFx0XHRpdGVtWzJdID0gbWVkaWFRdWVyeTtcblx0XHRcdFx0fSBlbHNlIGlmKG1lZGlhUXVlcnkpIHtcblx0XHRcdFx0XHRpdGVtWzJdID0gXCIoXCIgKyBpdGVtWzJdICsgXCIpIGFuZCAoXCIgKyBtZWRpYVF1ZXJ5ICsgXCIpXCI7XG5cdFx0XHRcdH1cblx0XHRcdFx0bGlzdC5wdXNoKGl0ZW0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcblx0cmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuXHR2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7XG5cdHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblx0aWYgKCFjc3NNYXBwaW5nKSB7XG5cdFx0cmV0dXJuIGNvbnRlbnQ7XG5cdH1cblxuXHRpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0dmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG5cdFx0dmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcblx0XHRcdHJldHVybiAnLyojIHNvdXJjZVVSTD0nICsgY3NzTWFwcGluZy5zb3VyY2VSb290ICsgc291cmNlICsgJyAqLydcblx0XHR9KTtcblxuXHRcdHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuXHR9XG5cblx0cmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn1cblxuLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcblx0dmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG5cdHZhciBkYXRhID0gJ3NvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LCcgKyBiYXNlNjQ7XG5cblx0cmV0dXJuICcvKiMgJyArIGRhdGEgKyAnICovJztcbn1cbiIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5cbnZhciBzdHlsZXNJbkRvbSA9IHt9O1xuXG52YXJcdG1lbW9pemUgPSBmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW87XG5cblx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcblx0XHRpZiAodHlwZW9mIG1lbW8gPT09IFwidW5kZWZpbmVkXCIpIG1lbW8gPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXHRcdHJldHVybiBtZW1vO1xuXHR9O1xufTtcblxudmFyIGlzT2xkSUUgPSBtZW1vaXplKGZ1bmN0aW9uICgpIHtcblx0Ly8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3Ncblx0Ly8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuXHQvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG5cdC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuXHQvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcblx0cmV0dXJuIHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iO1xufSk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG59O1xuXG52YXIgZ2V0RWxlbWVudCA9IChmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW8gPSB7fTtcblxuXHRyZXR1cm4gZnVuY3Rpb24odGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgcGFzc2luZyBmdW5jdGlvbiBpbiBvcHRpb25zLCB0aGVuIHVzZSBpdCBmb3IgcmVzb2x2ZSBcImhlYWRcIiBlbGVtZW50LlxuICAgICAgICAgICAgICAgIC8vIFVzZWZ1bCBmb3IgU2hhZG93IFJvb3Qgc3R5bGUgaS5lXG4gICAgICAgICAgICAgICAgLy8ge1xuICAgICAgICAgICAgICAgIC8vICAgaW5zZXJ0SW50bzogZnVuY3Rpb24gKCkgeyByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb29cIikuc2hhZG93Um9vdCB9XG4gICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGFyZ2V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG5cdFx0XHR2YXIgc3R5bGVUYXJnZXQgPSBnZXRUYXJnZXQuY2FsbCh0aGlzLCB0YXJnZXQpO1xuXHRcdFx0Ly8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblx0XHRcdGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHQvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuXHRcdFx0XHRcdC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcblx0XHRcdFx0fSBjYXRjaChlKSB7XG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBudWxsO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcblx0XHR9XG5cdFx0cmV0dXJuIG1lbW9bdGFyZ2V0XVxuXHR9O1xufSkoKTtcblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXJcdHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xudmFyXHRzdHlsZXNJbnNlcnRlZEF0VG9wID0gW107XG5cbnZhclx0Zml4VXJscyA9IHJlcXVpcmUoXCIuL3VybHNcIik7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obGlzdCwgb3B0aW9ucykge1xuXHRpZiAodHlwZW9mIERFQlVHICE9PSBcInVuZGVmaW5lZFwiICYmIERFQlVHKSB7XG5cdFx0aWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJvYmplY3RcIikgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHN0eWxlLWxvYWRlciBjYW5ub3QgYmUgdXNlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50XCIpO1xuXHR9XG5cblx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cblx0b3B0aW9ucy5hdHRycyA9IHR5cGVvZiBvcHRpb25zLmF0dHJzID09PSBcIm9iamVjdFwiID8gb3B0aW9ucy5hdHRycyA6IHt9O1xuXG5cdC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuXHQvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cdGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSBcImJvb2xlYW5cIikgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgPGhlYWQ+IGVsZW1lbnRcbiAgICAgICAgaWYgKCFvcHRpb25zLmluc2VydEludG8pIG9wdGlvbnMuaW5zZXJ0SW50byA9IFwiaGVhZFwiO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIGJvdHRvbSBvZiB0aGUgdGFyZ2V0XG5cdGlmICghb3B0aW9ucy5pbnNlcnRBdCkgb3B0aW9ucy5pbnNlcnRBdCA9IFwiYm90dG9tXCI7XG5cblx0dmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhsaXN0LCBvcHRpb25zKTtcblxuXHRhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGUgKG5ld0xpc3QpIHtcblx0XHR2YXIgbWF5UmVtb3ZlID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdFx0ZG9tU3R5bGUucmVmcy0tO1xuXHRcdFx0bWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpO1xuXHRcdH1cblxuXHRcdGlmKG5ld0xpc3QpIHtcblx0XHRcdHZhciBuZXdTdHlsZXMgPSBsaXN0VG9TdHlsZXMobmV3TGlzdCwgb3B0aW9ucyk7XG5cdFx0XHRhZGRTdHlsZXNUb0RvbShuZXdTdHlsZXMsIG9wdGlvbnMpO1xuXHRcdH1cblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbWF5UmVtb3ZlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBtYXlSZW1vdmVbaV07XG5cblx0XHRcdGlmKGRvbVN0eWxlLnJlZnMgPT09IDApIHtcblx0XHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykgZG9tU3R5bGUucGFydHNbal0oKTtcblxuXHRcdFx0XHRkZWxldGUgc3R5bGVzSW5Eb21bZG9tU3R5bGUuaWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcbn07XG5cbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tIChzdHlsZXMsIG9wdGlvbnMpIHtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdGlmKGRvbVN0eWxlKSB7XG5cdFx0XHRkb21TdHlsZS5yZWZzKys7XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKTtcblx0XHRcdH1cblxuXHRcdFx0Zm9yKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciBwYXJ0cyA9IFtdO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblxuXHRcdFx0c3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7aWQ6IGl0ZW0uaWQsIHJlZnM6IDEsIHBhcnRzOiBwYXJ0c307XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGxpc3RUb1N0eWxlcyAobGlzdCwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGVzID0gW107XG5cdHZhciBuZXdTdHlsZXMgPSB7fTtcblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IGxpc3RbaV07XG5cdFx0dmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG5cdFx0dmFyIGNzcyA9IGl0ZW1bMV07XG5cdFx0dmFyIG1lZGlhID0gaXRlbVsyXTtcblx0XHR2YXIgc291cmNlTWFwID0gaXRlbVszXTtcblx0XHR2YXIgcGFydCA9IHtjc3M6IGNzcywgbWVkaWE6IG1lZGlhLCBzb3VyY2VNYXA6IHNvdXJjZU1hcH07XG5cblx0XHRpZighbmV3U3R5bGVzW2lkXSkgc3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHtpZDogaWQsIHBhcnRzOiBbcGFydF19KTtcblx0XHRlbHNlIG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KTtcblx0fVxuXG5cdHJldHVybiBzdHlsZXM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudCAob3B0aW9ucywgc3R5bGUpIHtcblx0dmFyIHRhcmdldCA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRJbnRvKVxuXG5cdGlmICghdGFyZ2V0KSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnRJbnRvJyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG5cdH1cblxuXHR2YXIgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AgPSBzdHlsZXNJbnNlcnRlZEF0VG9wW3N0eWxlc0luc2VydGVkQXRUb3AubGVuZ3RoIC0gMV07XG5cblx0aWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwidG9wXCIpIHtcblx0XHRpZiAoIWxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCB0YXJnZXQuZmlyc3RDaGlsZCk7XG5cdFx0fSBlbHNlIGlmIChsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZykge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHRcdH1cblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnB1c2goc3R5bGUpO1xuXHR9IGVsc2UgaWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwiYm90dG9tXCIpIHtcblx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydEF0ID09PSBcIm9iamVjdFwiICYmIG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlKSB7XG5cdFx0dmFyIG5leHRTaWJsaW5nID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEludG8gKyBcIiBcIiArIG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlKTtcblx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBuZXh0U2libGluZyk7XG5cdH0gZWxzZSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiW1N0eWxlIExvYWRlcl1cXG5cXG4gSW52YWxpZCB2YWx1ZSBmb3IgcGFyYW1ldGVyICdpbnNlcnRBdCcgKCdvcHRpb25zLmluc2VydEF0JykgZm91bmQuXFxuIE11c3QgYmUgJ3RvcCcsICdib3R0b20nLCBvciBPYmplY3QuXFxuIChodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlciNpbnNlcnRhdClcXG5cIik7XG5cdH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50IChzdHlsZSkge1xuXHRpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuXHRzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcblxuXHR2YXIgaWR4ID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcC5pbmRleE9mKHN0eWxlKTtcblx0aWYoaWR4ID49IDApIHtcblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnNwbGljZShpZHgsIDEpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG5cblx0aWYob3B0aW9ucy5hdHRycy50eXBlID09PSB1bmRlZmluZWQpIHtcblx0XHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdH1cblxuXHRhZGRBdHRycyhzdHlsZSwgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZSk7XG5cblx0cmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVMaW5rRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xuXG5cdGlmKG9wdGlvbnMuYXR0cnMudHlwZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHR9XG5cdG9wdGlvbnMuYXR0cnMucmVsID0gXCJzdHlsZXNoZWV0XCI7XG5cblx0YWRkQXR0cnMobGluaywgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBsaW5rKTtcblxuXHRyZXR1cm4gbGluaztcbn1cblxuZnVuY3Rpb24gYWRkQXR0cnMgKGVsLCBhdHRycykge1xuXHRPYmplY3Qua2V5cyhhdHRycykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG5cdFx0ZWwuc2V0QXR0cmlidXRlKGtleSwgYXR0cnNba2V5XSk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZSAob2JqLCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZSwgdXBkYXRlLCByZW1vdmUsIHJlc3VsdDtcblxuXHQvLyBJZiBhIHRyYW5zZm9ybSBmdW5jdGlvbiB3YXMgZGVmaW5lZCwgcnVuIGl0IG9uIHRoZSBjc3Ncblx0aWYgKG9wdGlvbnMudHJhbnNmb3JtICYmIG9iai5jc3MpIHtcblx0ICAgIHJlc3VsdCA9IG9wdGlvbnMudHJhbnNmb3JtKG9iai5jc3MpO1xuXG5cdCAgICBpZiAocmVzdWx0KSB7XG5cdCAgICBcdC8vIElmIHRyYW5zZm9ybSByZXR1cm5zIGEgdmFsdWUsIHVzZSB0aGF0IGluc3RlYWQgb2YgdGhlIG9yaWdpbmFsIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgcnVubmluZyBydW50aW1lIHRyYW5zZm9ybWF0aW9ucyBvbiB0aGUgY3NzLlxuXHQgICAgXHRvYmouY3NzID0gcmVzdWx0O1xuXHQgICAgfSBlbHNlIHtcblx0ICAgIFx0Ly8gSWYgdGhlIHRyYW5zZm9ybSBmdW5jdGlvbiByZXR1cm5zIGEgZmFsc3kgdmFsdWUsIGRvbid0IGFkZCB0aGlzIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgY29uZGl0aW9uYWwgbG9hZGluZyBvZiBjc3Ncblx0ICAgIFx0cmV0dXJuIGZ1bmN0aW9uKCkge1xuXHQgICAgXHRcdC8vIG5vb3Bcblx0ICAgIFx0fTtcblx0ICAgIH1cblx0fVxuXG5cdGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuXHRcdHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuXG5cdFx0c3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSk7XG5cblx0XHR1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcblx0XHRyZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuXG5cdH0gZWxzZSBpZiAoXG5cdFx0b2JqLnNvdXJjZU1hcCAmJlxuXHRcdHR5cGVvZiBVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwuY3JlYXRlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLnJldm9rZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIEJsb2IgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCJcblx0KSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVMaW5rRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSB1cGRhdGVMaW5rLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cblx0XHRcdGlmKHN0eWxlLmhyZWYpIFVSTC5yZXZva2VPYmplY3RVUkwoc3R5bGUuaHJlZik7XG5cdFx0fTtcblx0fSBlbHNlIHtcblx0XHRzdHlsZSA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cdFx0fTtcblx0fVxuXG5cdHVwZGF0ZShvYmopO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZSAobmV3T2JqKSB7XG5cdFx0aWYgKG5ld09iaikge1xuXHRcdFx0aWYgKFxuXHRcdFx0XHRuZXdPYmouY3NzID09PSBvYmouY3NzICYmXG5cdFx0XHRcdG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmXG5cdFx0XHRcdG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXBcblx0XHRcdCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHVwZGF0ZShvYmogPSBuZXdPYmopO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZW1vdmUoKTtcblx0XHR9XG5cdH07XG59XG5cbnZhciByZXBsYWNlVGV4dCA9IChmdW5jdGlvbiAoKSB7XG5cdHZhciB0ZXh0U3RvcmUgPSBbXTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gKGluZGV4LCByZXBsYWNlbWVudCkge1xuXHRcdHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcblxuXHRcdHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuXHR9O1xufSkoKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyAoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuXHR2YXIgY3NzID0gcmVtb3ZlID8gXCJcIiA6IG9iai5jc3M7XG5cblx0aWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcblx0fSBlbHNlIHtcblx0XHR2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG5cdFx0dmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXNbaW5kZXhdKSBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG5cblx0XHRpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcblx0XHRcdHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnIChzdHlsZSwgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG5cblx0aWYobWVkaWEpIHtcblx0XHRzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSlcblx0fVxuXG5cdGlmKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG5cdH0gZWxzZSB7XG5cdFx0d2hpbGUoc3R5bGUuZmlyc3RDaGlsZCkge1xuXHRcdFx0c3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG5cdFx0fVxuXG5cdFx0c3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlTGluayAobGluaywgb3B0aW9ucywgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuXHQvKlxuXHRcdElmIGNvbnZlcnRUb0Fic29sdXRlVXJscyBpc24ndCBkZWZpbmVkLCBidXQgc291cmNlbWFwcyBhcmUgZW5hYmxlZFxuXHRcdGFuZCB0aGVyZSBpcyBubyBwdWJsaWNQYXRoIGRlZmluZWQgdGhlbiBsZXRzIHR1cm4gY29udmVydFRvQWJzb2x1dGVVcmxzXG5cdFx0b24gYnkgZGVmYXVsdC4gIE90aGVyd2lzZSBkZWZhdWx0IHRvIHRoZSBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgb3B0aW9uXG5cdFx0ZGlyZWN0bHlcblx0Ki9cblx0dmFyIGF1dG9GaXhVcmxzID0gb3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgPT09IHVuZGVmaW5lZCAmJiBzb3VyY2VNYXA7XG5cblx0aWYgKG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzIHx8IGF1dG9GaXhVcmxzKSB7XG5cdFx0Y3NzID0gZml4VXJscyhjc3MpO1xuXHR9XG5cblx0aWYgKHNvdXJjZU1hcCkge1xuXHRcdC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI2NjAzODc1XG5cdFx0Y3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIiArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkgKyBcIiAqL1wiO1xuXHR9XG5cblx0dmFyIGJsb2IgPSBuZXcgQmxvYihbY3NzXSwgeyB0eXBlOiBcInRleHQvY3NzXCIgfSk7XG5cblx0dmFyIG9sZFNyYyA9IGxpbmsuaHJlZjtcblxuXHRsaW5rLmhyZWYgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuXG5cdGlmKG9sZFNyYykgVVJMLnJldm9rZU9iamVjdFVSTChvbGRTcmMpO1xufVxuIiwiXG4vKipcbiAqIFdoZW4gc291cmNlIG1hcHMgYXJlIGVuYWJsZWQsIGBzdHlsZS1sb2FkZXJgIHVzZXMgYSBsaW5rIGVsZW1lbnQgd2l0aCBhIGRhdGEtdXJpIHRvXG4gKiBlbWJlZCB0aGUgY3NzIG9uIHRoZSBwYWdlLiBUaGlzIGJyZWFrcyBhbGwgcmVsYXRpdmUgdXJscyBiZWNhdXNlIG5vdyB0aGV5IGFyZSByZWxhdGl2ZSB0byBhXG4gKiBidW5kbGUgaW5zdGVhZCBvZiB0aGUgY3VycmVudCBwYWdlLlxuICpcbiAqIE9uZSBzb2x1dGlvbiBpcyB0byBvbmx5IHVzZSBmdWxsIHVybHMsIGJ1dCB0aGF0IG1heSBiZSBpbXBvc3NpYmxlLlxuICpcbiAqIEluc3RlYWQsIHRoaXMgZnVuY3Rpb24gXCJmaXhlc1wiIHRoZSByZWxhdGl2ZSB1cmxzIHRvIGJlIGFic29sdXRlIGFjY29yZGluZyB0byB0aGUgY3VycmVudCBwYWdlIGxvY2F0aW9uLlxuICpcbiAqIEEgcnVkaW1lbnRhcnkgdGVzdCBzdWl0ZSBpcyBsb2NhdGVkIGF0IGB0ZXN0L2ZpeFVybHMuanNgIGFuZCBjYW4gYmUgcnVuIHZpYSB0aGUgYG5wbSB0ZXN0YCBjb21tYW5kLlxuICpcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3MpIHtcbiAgLy8gZ2V0IGN1cnJlbnQgbG9jYXRpb25cbiAgdmFyIGxvY2F0aW9uID0gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB3aW5kb3cubG9jYXRpb247XG5cbiAgaWYgKCFsb2NhdGlvbikge1xuICAgIHRocm93IG5ldyBFcnJvcihcImZpeFVybHMgcmVxdWlyZXMgd2luZG93LmxvY2F0aW9uXCIpO1xuICB9XG5cblx0Ly8gYmxhbmsgb3IgbnVsbD9cblx0aWYgKCFjc3MgfHwgdHlwZW9mIGNzcyAhPT0gXCJzdHJpbmdcIikge1xuXHQgIHJldHVybiBjc3M7XG4gIH1cblxuICB2YXIgYmFzZVVybCA9IGxvY2F0aW9uLnByb3RvY29sICsgXCIvL1wiICsgbG9jYXRpb24uaG9zdDtcbiAgdmFyIGN1cnJlbnREaXIgPSBiYXNlVXJsICsgbG9jYXRpb24ucGF0aG5hbWUucmVwbGFjZSgvXFwvW15cXC9dKiQvLCBcIi9cIik7XG5cblx0Ly8gY29udmVydCBlYWNoIHVybCguLi4pXG5cdC8qXG5cdFRoaXMgcmVndWxhciBleHByZXNzaW9uIGlzIGp1c3QgYSB3YXkgdG8gcmVjdXJzaXZlbHkgbWF0Y2ggYnJhY2tldHMgd2l0aGluXG5cdGEgc3RyaW5nLlxuXG5cdCAvdXJsXFxzKlxcKCAgPSBNYXRjaCBvbiB0aGUgd29yZCBcInVybFwiIHdpdGggYW55IHdoaXRlc3BhY2UgYWZ0ZXIgaXQgYW5kIHRoZW4gYSBwYXJlbnNcblx0ICAgKCAgPSBTdGFydCBhIGNhcHR1cmluZyBncm91cFxuXHQgICAgICg/OiAgPSBTdGFydCBhIG5vbi1jYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAgICAgW14pKF0gID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICg/OiAgPSBTdGFydCBhbm90aGVyIG5vbi1jYXB0dXJpbmcgZ3JvdXBzXG5cdCAgICAgICAgICAgICAgICAgW14pKF0rICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgICAgICBbXikoXSogID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgXFwpICA9IE1hdGNoIGEgZW5kIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICApICA9IEVuZCBHcm91cFxuICAgICAgICAgICAgICAqXFwpID0gTWF0Y2ggYW55dGhpbmcgYW5kIHRoZW4gYSBjbG9zZSBwYXJlbnNcbiAgICAgICAgICApICA9IENsb3NlIG5vbi1jYXB0dXJpbmcgZ3JvdXBcbiAgICAgICAgICAqICA9IE1hdGNoIGFueXRoaW5nXG4gICAgICAgKSAgPSBDbG9zZSBjYXB0dXJpbmcgZ3JvdXBcblx0IFxcKSAgPSBNYXRjaCBhIGNsb3NlIHBhcmVuc1xuXG5cdCAvZ2kgID0gR2V0IGFsbCBtYXRjaGVzLCBub3QgdGhlIGZpcnN0LiAgQmUgY2FzZSBpbnNlbnNpdGl2ZS5cblx0ICovXG5cdHZhciBmaXhlZENzcyA9IGNzcy5yZXBsYWNlKC91cmxcXHMqXFwoKCg/OlteKShdfFxcKCg/OlteKShdK3xcXChbXikoXSpcXCkpKlxcKSkqKVxcKS9naSwgZnVuY3Rpb24oZnVsbE1hdGNoLCBvcmlnVXJsKSB7XG5cdFx0Ly8gc3RyaXAgcXVvdGVzIChpZiB0aGV5IGV4aXN0KVxuXHRcdHZhciB1bnF1b3RlZE9yaWdVcmwgPSBvcmlnVXJsXG5cdFx0XHQudHJpbSgpXG5cdFx0XHQucmVwbGFjZSgvXlwiKC4qKVwiJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KVxuXHRcdFx0LnJlcGxhY2UoL14nKC4qKSckLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pO1xuXG5cdFx0Ly8gYWxyZWFkeSBhIGZ1bGwgdXJsPyBubyBjaGFuZ2Vcblx0XHRpZiAoL14oI3xkYXRhOnxodHRwOlxcL1xcL3xodHRwczpcXC9cXC98ZmlsZTpcXC9cXC9cXC98XFxzKiQpL2kudGVzdCh1bnF1b3RlZE9yaWdVcmwpKSB7XG5cdFx0ICByZXR1cm4gZnVsbE1hdGNoO1xuXHRcdH1cblxuXHRcdC8vIGNvbnZlcnQgdGhlIHVybCB0byBhIGZ1bGwgdXJsXG5cdFx0dmFyIG5ld1VybDtcblxuXHRcdGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi8vXCIpID09PSAwKSB7XG5cdFx0ICBcdC8vVE9ETzogc2hvdWxkIHdlIGFkZCBwcm90b2NvbD9cblx0XHRcdG5ld1VybCA9IHVucXVvdGVkT3JpZ1VybDtcblx0XHR9IGVsc2UgaWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiL1wiKSA9PT0gMCkge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gdGhlIGJhc2UgdXJsXG5cdFx0XHRuZXdVcmwgPSBiYXNlVXJsICsgdW5xdW90ZWRPcmlnVXJsOyAvLyBhbHJlYWR5IHN0YXJ0cyB3aXRoICcvJ1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byBjdXJyZW50IGRpcmVjdG9yeVxuXHRcdFx0bmV3VXJsID0gY3VycmVudERpciArIHVucXVvdGVkT3JpZ1VybC5yZXBsYWNlKC9eXFwuXFwvLywgXCJcIik7IC8vIFN0cmlwIGxlYWRpbmcgJy4vJ1xuXHRcdH1cblxuXHRcdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgdXJsKC4uLilcblx0XHRyZXR1cm4gXCJ1cmwoXCIgKyBKU09OLnN0cmluZ2lmeShuZXdVcmwpICsgXCIpXCI7XG5cdH0pO1xuXG5cdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgY3NzXG5cdHJldHVybiBmaXhlZENzcztcbn07XG4iLCIgIGNvbnN0IE1PTlRITkFNRVMgPSBbICdKYW51YXJ5JywgJ0ZlYnJ1YXJ5JywgJ01hcmNoJywgJ0FwcmlsJywgJ01heScsICdKdW5lJywgJ0p1bHknLCAnQXVndXN0JywgJ1NlcHRlbWJlcicsICdPY3RvYmVyJywgJ05vdmVtYmVyJywgICdEZWNlbWJlciddXHJcbiAgY29uc3QgREFZTkFNRVMgPSBbICdTdW5kYXknLCAnTW9uZGF5JywgJ1R1ZXNkYXknLCAnV2VkbmVzZGF5JywgJ1RocnVzZGF5JywgJ0ZyaWRheScsICAnU2F0dXJkYXknIF1cclxuXHJcbiAgdmFyIENhQ2FsZW5kYXIgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgbGV0IG9wdGlvbnMgPSB7XHJcbiAgICAgIGlkOiAnY2FsZW5kYXInLFxyXG4gICAgICBkYXRlOiAnJ1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBkZWZhdWx0WWVhciA9IDBcclxuICAgIGxldCBkZWZhdWx0TW9udGggPSAwXHJcbiAgICBsZXQgZGVmYXVsdERhdGUgPSAwXHJcblxyXG4gICAgbGV0IHllYXIgPSAwXHJcbiAgICBsZXQgbW9udGggPSAwXHJcbiAgICBsZXQgZGF0ZSA9IDBcclxuXHJcbiAgICBsZXQgRGVmYXVsdERhdGUgPSBudWxsXHJcbiAgICBsZXQgZGF5c1Blck1vbnRoID0gW11cclxuXHJcbiAgICBsZXQgY29udGVudHMgPSBbXVxyXG5cclxuICAgIGxldCBlbGVtZW50cyA9IHtcclxuICAgICAgY2FsZW5kYXI6IG51bGwsXHJcbiAgICAgIGNhbGVuZGFyVGl0bGU6IG51bGwsXHJcbiAgICAgIGNhbGVuZGFyQm9keTogbnVsbCxcclxuICAgICAgbW9udGhZZWFyOiBudWxsLFxyXG4gICAgICBidG5QcmV2TW9udGg6IG51bGwsXHJcbiAgICAgIGJ0bk5leHRNb250aDogbnVsbFxyXG4gICAgfVxyXG5cclxuICAgIGxldCBldmVudHMgPSB7XHJcbiAgICAgIGNsaWNrOiBudWxsXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGFyZ3VtZW50c1swXSAmJiB0eXBlb2YgYXJndW1lbnRzWzBdID09PSAnb2JqZWN0Jykge1xyXG4gICAgICBleHRlbmREZWZhdWx0U2V0dGluZ3Mob3B0aW9ucywgYXJndW1lbnRzWzBdKVxyXG4gICAgfVxyXG5cclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIHtcclxuICAgICAgJ29wdGlvbnMnOiB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucylcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgICdkZWZhdWx0WWVhcic6IHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgIHJldHVybiBkZWZhdWx0WWVhclxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsKSB7XHJcbiAgICAgICAgICBkZWZhdWx0WWVhciA9IHZhbFxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgJ2RlZmF1bHRNb250aCc6IHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgIHJldHVybiBkZWZhdWx0TW9udGhcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbCkge1xyXG4gICAgICAgICAgZGVmYXVsdE1vbnRoID0gdmFsXHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICAnZGVmYXVsdERhdGUnOiB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICByZXR1cm4gZGVmYXVsdERhdGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbCkge1xyXG4gICAgICAgICAgZGVmYXVsdERhdGUgPSB2YWxcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgICd5ZWFyJzoge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgcmV0dXJuIHllYXJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbCkge1xyXG4gICAgICAgICAgZGF5c1Blck1vbnRoID0gc2V0RGF5UGVyTW9udGgodmFsKVxyXG4gICAgICAgICAgeWVhciA9IHZhbFxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgJ21vbnRoJzoge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgcmV0dXJuIG1vbnRoXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWwpIHtcclxuICAgICAgICAgIG1vbnRoID0gdmFsXHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICAnZGF0ZSc6IHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgIHJldHVybiBkYXRlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWwpIHtcclxuICAgICAgICAgIGRhdGUgPSB2YWxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICAnY29udGVudHMnOiB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICByZXR1cm4gY29udGVudHNcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbCkge1xyXG4gICAgICAgICAgY29udGVudHMgPSB2YWxcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgICdlbGVtZW50cyc6IHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBlbGVtZW50cylcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgICdkYXlzUGVyTW9udGgnOiB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICByZXR1cm4gZGF5c1Blck1vbnRoLmNvbmNhdCgpXHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICAnZXZlbnRzJzoge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgcmV0dXJuIGV2ZW50c1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICBpbml0LmNhbGwodGhpcywgZWxlbWVudHMpXHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBpbml0IChlbGVtZW50cykge1xyXG4gICAgbGV0IG9iakRhdGUgPSBzZXREZWZhdWx0RGF0ZSh0aGlzLm9wdGlvbnMpXHJcbiAgICB0aGlzLnllYXIgPSBvYmpEYXRlLnllYXJcclxuICAgIHRoaXMubW9udGggPSBvYmpEYXRlLm1vbnRoXHJcbiAgICB0aGlzLmRhdGUgPSBvYmpEYXRlLmRhdGVcclxuICAgIHRoaXMuZGVmYXVsdFllYXIgPSBvYmpEYXRlLnllYXJcclxuICAgIHRoaXMuZGVmYXVsdE1vbnRoID0gb2JqRGF0ZS5tb250aFxyXG4gICAgdGhpcy5kZWZhdWx0RGF0ZSA9IG9iakRhdGUuZGF0ZVxyXG4gICAgXHJcbiAgICBsZXQgb2JqRWxlID0gY3JlYXRlQ2FsZW5kYXJMYXlvdXQoKVxyXG4gICAgZWxlbWVudHMuY2FsZW5kYXIgPSBvYmpFbGUuY2FsZW5kYXJcclxuICAgIGVsZW1lbnRzLmNhbGVuZGFyVGl0bGUgPSBvYmpFbGUuY2FsZW5kYXJUaXRsZVxyXG4gICAgZWxlbWVudHMuY2FsZW5kYXJCb2R5ID0gb2JqRWxlLmNhbGVuZGFyQm9keVxyXG4gICAgZWxlbWVudHMubW9udGhZZWFyID0gb2JqRWxlLm1vbnRoWWVhclxyXG4gICAgZWxlbWVudHMuYnRuUHJldk1vbnRoID0gb2JqRWxlLmJ0blByZXZNb250aFxyXG4gICAgZWxlbWVudHMuYnRuTmV4dE1vbnRoID0gb2JqRWxlLmJ0bk5leHRNb250aFxyXG5cclxuICAgIHNldERlZmF1bHRFdmVudHMuY2FsbCh0aGlzKVxyXG4gIH1cclxuXHJcblxyXG4gIGZ1bmN0aW9uIHNldERlZmF1bHREYXRlIChvcHRpb25zKSB7XHJcbiAgICBsZXQgRGVmYXVsdERhdGUsXHJcbiAgICAgICAgbW9udGgsXHJcbiAgICAgICAgZGF0ZSxcclxuICAgICAgICB5ZWFyLFxyXG4gICAgICAgIGRheXNQZXJNb250aFxyXG5cclxuICAgIERlZmF1bHREYXRlID0gZ2V0RGVmYXVsdERhdGUob3B0aW9ucy5kYXRlKVxyXG4gICAgbW9udGggPSBEZWZhdWx0RGF0ZS5nZXRNb250aCgpXHJcbiAgICBkYXRlID0gRGVmYXVsdERhdGUuZ2V0RGF0ZSgpXHJcbiAgICB5ZWFyID0gRGVmYXVsdERhdGUuZ2V0RnVsbFllYXIoKVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIG1vbnRoOiBtb250aCxcclxuICAgICAgZGF0ZTogZGF0ZSxcclxuICAgICAgeWVhcjogeWVhclxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gc2V0RGVmYXVsdEV2ZW50cyAoKSB7XHJcbiAgICB0aGlzLmVsZW1lbnRzLmJ0blByZXZNb250aC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgdGhpcy5wcmV2aW91c01vbnRoKClcclxuICAgIH0pXHJcblxyXG4gICAgdGhpcy5lbGVtZW50cy5idG5OZXh0TW9udGguYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIHRoaXMubmV4dE1vbnRoKClcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBleHRlbmREZWZhdWx0U2V0dGluZ3Moc291cmNlLCBwcm9wZXJ0aWVzKSB7XHJcbiAgICBmb3IgKHByb3BlcnR5IGluIHByb3BlcnRpZXMpIHtcclxuICAgICAgaWYgKHNvdXJjZS5oYXNPd25Qcm9wZXJ0eShwcm9wZXJ0eSkpIHtcclxuICAgICAgICBzb3VyY2VbcHJvcGVydHldID0gcHJvcGVydGllc1twcm9wZXJ0eV1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZ2V0RmViTnVtYmVyT2ZEYXlzICh5ZWFyKSB7XHJcbiAgICBpZiAoKHllYXIgJSAxMDAgIT0gMCkgJiYgKHllYXIgJSA0ID09IDApIHx8ICh5ZWFyICUgNDAwID09IDApKSB7XHJcbiAgICAgIHJldHVybiAyOVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIDI4XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBzZXREYXlQZXJNb250aCAoeWVhcikge1xyXG4gICAgcmV0dXJuIFsgMzEsIGdldEZlYk51bWJlck9mRGF5cyh5ZWFyKSwgMzEsIDMwLCAzMSwgMzAsIDMxLCAzMSwgMzAsIDMxLCAzMCwgMzEgXVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZ2V0RGVmYXVsdERhdGUgKGRlZmF1bHREYXRlKSB7XHJcbiAgICByZXR1cm4gZGVmYXVsdERhdGUgPyBuZXcgRGF0ZShkZWZhdWx0RGF0ZSkgOiBuZXcgRGF0ZSgpXHJcbiAgfSBcclxuXHJcbiAgZnVuY3Rpb24gZ2V0RnJpc3REYXlPZlRoZVdlZWsgKG1vbnRoLCB5ZWFyKSB7XHJcbiAgICBsZXQgZmlyc3REYXRlID0gbmV3IERhdGUoTU9OVEhOQU1FU1ttb250aF0gKyAnIDEsICcgKyB5ZWFyKVxyXG4gICAgbGV0IGZpcnN0RGF5T2ZUaGVXZWVrID0gZmlyc3REYXRlLmdldERheSgpXHJcbiAgICByZXR1cm4gZmlyc3REYXlPZlRoZVdlZWtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGNyZWF0ZUNhbGVuZGFyTGF5b3V0ICgpIHtcclxuICAgIGxldCBjYWxlbmRhcixcclxuICAgICAgICBjYWxlbmRhckJvZHksXHJcbiAgICAgICAgdGhlYWQsXHJcbiAgICAgICAgY2FsZW5kYXJUaXRsZSxcclxuICAgICAgICB0ckRheU5hbWVzLFxyXG4gICAgICAgIG1vbnRoWWVhcixcclxuICAgICAgICB0ckNhbGVuZGFyVGl0bGUsXHJcbiAgICAgICAgYnRuUHJldk1vbnRoLFxyXG4gICAgICAgIGJ0bk5leHRNb250aFxyXG5cclxuICAgIGNhbGVuZGFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGFibGUnKVxyXG4gICAgY2FsZW5kYXIuY2xhc3NOYW1lID0gJ2NhYy1jYWxlbmRhcidcclxuXHJcbiAgICB0aGVhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RoZWFkJylcclxuICAgIGNhbGVuZGFyQm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3Rib2R5JylcclxuXHJcbiAgICB0ckNhbGVuZGFyVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpXHJcbiAgICBjYWxlbmRhclRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGgnKVxyXG4gICAgY2FsZW5kYXJUaXRsZS5zZXRBdHRyaWJ1dGUoJ2NvbHNwYW4nLCAnNycpXHJcbiAgICBjYWxlbmRhclRpdGxlLmNsYXNzTmFtZSA9ICdjYWMtY2FsZW5kYXItdGl0bGUnXHJcblxyXG4gICAgdHJEYXlOYW1lcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJylcclxuICAgIHRyRGF5TmFtZXMuY2xhc3NOYW1lID0gJ2NhYy1kYXktbmFtZXMnXHJcblxyXG4gICAgZm9yIChsZXQgZGF5TmFtZSBvZiBEQVlOQU1FUykge1xyXG4gICAgICBsZXQgdGhEYXlOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGgnKVxyXG4gICAgICB0aERheU5hbWUuaW5uZXJIVE1MID0gZGF5TmFtZVxyXG4gICAgICB0ckRheU5hbWVzLmFwcGVuZENoaWxkKHRoRGF5TmFtZSlcclxuICAgIH1cclxuXHJcbiAgICBtb250aFllYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgbW9udGhZZWFyLmNsYXNzTmFtZSA9ICdjYWMtbW9udGhZZWFyJ1xyXG5cclxuICAgIGJ0blByZXZNb250aCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBidG5QcmV2TW9udGguYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJzwnKSlcclxuICAgIGJ0blByZXZNb250aC5jbGFzc05hbWUgPSAnY2FjLWJ0bi1wcmV2TW9udGgnXHJcblxyXG4gICAgYnRuTmV4dE1vbnRoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIGJ0bk5leHRNb250aC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnPicpKVxyXG4gICAgYnRuTmV4dE1vbnRoLmNsYXNzTmFtZSA9ICdjYWMtYnRuLW5leHRNb250aCdcclxuXHJcbiAgICBjYWxlbmRhclRpdGxlLmFwcGVuZENoaWxkKGJ0blByZXZNb250aClcclxuICAgIGNhbGVuZGFyVGl0bGUuYXBwZW5kQ2hpbGQobW9udGhZZWFyKVxyXG4gICAgY2FsZW5kYXJUaXRsZS5hcHBlbmRDaGlsZChidG5OZXh0TW9udGgpXHJcblxyXG4gICAgdHJDYWxlbmRhclRpdGxlLmFwcGVuZENoaWxkKGNhbGVuZGFyVGl0bGUpXHJcbiAgICB0aGVhZC5hcHBlbmRDaGlsZCh0ckNhbGVuZGFyVGl0bGUpXHJcbiAgICB0aGVhZC5hcHBlbmRDaGlsZCh0ckRheU5hbWVzKVxyXG4gICAgY2FsZW5kYXIuYXBwZW5kQ2hpbGQodGhlYWQpXHJcbiAgICBjYWxlbmRhci5hcHBlbmRDaGlsZChjYWxlbmRhckJvZHkpXHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgY2FsZW5kYXI6IGNhbGVuZGFyLFxyXG4gICAgICBjYWxlbmRhclRpdGxlOiBjYWxlbmRhclRpdGxlLFxyXG4gICAgICBjYWxlbmRhckJvZHk6IGNhbGVuZGFyQm9keSxcclxuICAgICAgbW9udGhZZWFyOiBtb250aFllYXIsXHJcbiAgICAgIGJ0blByZXZNb250aDogYnRuUHJldk1vbnRoLFxyXG4gICAgICBidG5OZXh0TW9udGg6IGJ0bk5leHRNb250aFxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gZnVuY3Rpb24gY3JlYXRlQ2FsZW5kYXJCb2R5ICh0aGlzLm1vbnRoLCBkYXRlLCB5ZWFyLCBkYXlzUGVyTW9udGgsIGNvbnRlbnRzKSB7XHJcbiAgZnVuY3Rpb24gY3JlYXRlQ2FsZW5kYXJCb2R5ICgpIHsgIFxyXG4gICAgY29uc3QgVE9UQUxEQVRFQk9YUyA9IDQyXHJcblxyXG4gICAgbGV0IGJveENvdW50ZXIgPSAwXHJcbiAgICBsZXQgZGF0ZUNvdW50ZXIgPSAxXHJcbiAgICBsZXQgZmlyc3REYXlPZlRoZVdlZWsgPSBnZXRGcmlzdERheU9mVGhlV2Vlayh0aGlzLm1vbnRoLCB0aGlzLnllYXIpXHJcbiAgICBsZXQgZmlyc3REYXlPZlRoZVdlZWsyID0gZmlyc3REYXlPZlRoZVdlZWtcclxuICAgIGxldCBjYWxlbmRhckNvbnRlbnQgPSBgYFxyXG5cclxuICAgIGNhbGVuZGFyQ29udGVudCArPSBgXHJcbiAgICAgICAgPHRyPlxyXG4gICAgYCBcclxuICAgIHdoaWxlIChmaXJzdERheU9mVGhlV2VlayA+IDApeyAgXHJcbiAgICAgICAgY2FsZW5kYXJDb250ZW50ICs9IGBcclxuICAgICAgICAgIDx0ZCBjbGFzcz1cImNhYy1kYXRlIGNhYy1kYXRlLWVtcHR5XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYWMtZGF0ZS1ib3hcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FjLWRhdGUtdGV4dFwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYWMtZGF0ZS1jb250ZW50XCI+PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC90ZD5cclxuICAgICAgICBgXHJcbiAgICAgICAgZmlyc3REYXlPZlRoZVdlZWstLVxyXG4gICAgICAgIGJveENvdW50ZXIrK1xyXG4gICAgfVxyXG5cclxuICAgIHdoaWxlIChkYXRlQ291bnRlciA8PSAoVE9UQUxEQVRFQk9YUyAtIGJveENvdW50ZXIpKXtcclxuICAgICAgaWYgKGZpcnN0RGF5T2ZUaGVXZWVrMiA+IDYpIHtcclxuICAgICAgICBmaXJzdERheU9mVGhlV2VlazIgPSAwXHJcbiAgICAgICAgY2FsZW5kYXJDb250ZW50ICs9IGA8L3RyPjx0cj5gXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChkYXRlQ291bnRlciA8PSB0aGlzLmRheXNQZXJNb250aFt0aGlzLm1vbnRoXSkgeyBcclxuICAgICAgICBpZiAobmV3IERhdGUodGhpcy55ZWFyLCB0aGlzLm1vbnRoLCBkYXRlQ291bnRlcikuZ2V0VGltZSgpID09PSBuZXcgRGF0ZSh0aGlzLmRlZmF1bHRZZWFyLCB0aGlzLmRlZmF1bHRNb250aCwgdGhpcy5kZWZhdWx0RGF0ZSkuZ2V0VGltZSgpKSB7XHJcbiAgICAgICAgICBjYWxlbmRhckNvbnRlbnQgKz0gYFxyXG4gICAgICAgICAgICA8dGQgY2xhc3M9XCJjYWMtZGF0ZS10b2RheSBjYWMtZGF0ZVwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYWMtZGF0ZS1ib3hcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYWMtZGF0ZS10ZXh0XCI+JHtkYXRlQ291bnRlcn08L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYWMtZGF0ZS1jb250ZW50XCI+YFxyXG5cclxuICAgICAgICAgIGZvciAobGV0IGluZGV4IGluIHRoaXMuY29udGVudHMpIHtcclxuICAgICAgICAgICAgaWYgKG5ldyBEYXRlKHRoaXMueWVhciwgdGhpcy5tb250aCwgdGhpcy5kYXRlKS5nZXRUaW1lKCkgPT0gbmV3IERhdGUodGhpcy5jb250ZW50c1tpbmRleF0uZGF0ZSkuZ2V0VGltZSgpKSB7XHJcbiAgICAgICAgICAgICAgaWYgKHRoaXMuY29udGVudHNbaW5kZXhdLml0ZW1zKSB7XHJcbiAgICAgICAgICAgICAgICBjYWxlbmRhckNvbnRlbnQgKz0gYDx1bCBjbGFzcz1cImNhYy1saXN0XCI+YFxyXG4gICAgICAgICAgICAgICAgdGhpcy5jb250ZW50c1tpbmRleF0uaXRlbXMuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICAgICAgICAgICAgY2FsZW5kYXJDb250ZW50ICs9IGBcclxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJjYWMtbGlzdC1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FjLWxpc3QtaXRlbS1sYWJlbFwiPiR7aXRlbS5sYWJlbH08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYWMtbGlzdC1pdGVtLXZhbHVlXCI+JHtpdGVtLnZhbHVlfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIGBcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICBjYWxlbmRhckNvbnRlbnQgKz0gYDwvdWw+YFxyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICBjYWxlbmRhckNvbnRlbnQgKz0gYDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L3RkPmBcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY2FsZW5kYXJDb250ZW50ICs9YFxyXG4gICAgICAgICAgPHRkIGNsYXNzPVwiY2FjLWRhdGVcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhYy1kYXRlLWJveFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYWMtZGF0ZS10ZXh0XCI+JHtkYXRlQ291bnRlcn08L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FjLWRhdGUtY29udGVudFwiPmBcclxuXHJcbiAgICAgICAgICBmb3IgKGxldCBpbmRleCBpbiB0aGlzLmNvbnRlbnRzKSB7XHJcbiAgICAgICAgICAgIGlmIChuZXcgRGF0ZSh0aGlzLnllYXIsIHRoaXMubW9udGgsIGRhdGVDb3VudGVyKS5nZXRUaW1lKCkgPT0gbmV3IERhdGUodGhpcy5jb250ZW50c1tpbmRleF0uZGF0ZSkuZ2V0VGltZSgpKSB7XHJcbiAgICAgICAgICAgICAgaWYgKHRoaXMuY29udGVudHNbaW5kZXhdLml0ZW1zKSB7XHJcbiAgICAgICAgICAgICAgICBjYWxlbmRhckNvbnRlbnQgKz0gYDx1bCBjbGFzcz1cImNhYy1saXN0XCI+YFxyXG4gICAgICAgICAgICAgICAgdGhpcy5jb250ZW50c1tpbmRleF0uaXRlbXMuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICAgICAgICAgICAgY2FsZW5kYXJDb250ZW50ICs9IGBcclxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJjYWMtbGlzdC1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FjLWxpc3QtaXRlbS1sYWJlbFwiPiR7aXRlbS5sYWJlbH08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYWMtbGlzdC1pdGVtLXZhbHVlXCI+JHtpdGVtLnZhbHVlfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIGBcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICBjYWxlbmRhckNvbnRlbnQgKz0gYDwvdWw+YFxyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGNhbGVuZGFyQ29udGVudCArPSBgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC90ZD5gXHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY2FsZW5kYXJDb250ZW50ICs9IGBcclxuICAgICAgICAgICAgPHRkIGNsYXNzPVwiY2FjLWRhdGUgY2FjLWRhdGUtZW1wdHlcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FjLWRhdGUtYm94XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FjLWRhdGUtdGV4dFwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhYy1kYXRlLWNvbnRlbnRcIj48L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC90ZD5gXHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIGZpcnN0RGF5T2ZUaGVXZWVrMisrXHJcbiAgICAgIGRhdGVDb3VudGVyKytcclxuICAgIH1cclxuXHJcbiAgICBjYWxlbmRhckNvbnRlbnQgKz0gYFxyXG4gICAgICAgIDwvdHI+XHJcbiAgICBgXHJcbiAgICByZXR1cm4gY2FsZW5kYXJDb250ZW50XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBldmVudFNldHRlciAoKSB7XHJcbiAgICBpZiAodGhpcy5ldmVudHMuY2xpY2spIHtcclxuICAgICAgZXZlbnRDbGljay5jYWxsKHRoaXMsIHRoaXMuZXZlbnRzLmNsaWNrKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZXZlbnRDbGljayAoaGFuZGxlcikge1xyXG4gICAgbGV0IGRhdGVCb3hzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhYy1kYXRlJylcclxuXHJcbiAgICBmb3IgKGxldCBib3ggb2YgZGF0ZUJveHMpIHtcclxuICAgICAgbGV0IGZ1bGxEYXRlID0ge1xyXG4gICAgICAgIHN0YW5kYXJkOiAnJyxcclxuICAgICAgICBmb3JtYXR0ZWQ6ICcnXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGxldCBkYXRlID0gYm94LnF1ZXJ5U2VsZWN0b3IoJy5jYWMtZGF0ZS10ZXh0JykuaW5uZXJIVE1MXHJcblxyXG4gICAgICBpZiAoZGF0ZSkge1xyXG4gICAgICAgIGZ1bGxEYXRlLnN0YW5kYXJkID0gYCR7dGhpcy55ZWFyfS0ke3R3b0RpZ2l0TW9udGgodGhpcy5tb250aCl9LSR7dHdvRGlnaXREYXRlKGRhdGUpfWBcclxuICAgICAgICBmdWxsRGF0ZS5mb3JtYXR0ZWQgPSBgJHt0d29EaWdpdE1vbnRoKHRoaXMubW9udGgpfS8ke3R3b0RpZ2l0RGF0ZShkYXRlKX0vJHt0aGlzLnllYXJ9YFxyXG4gICAgICB9XHJcblxyXG4gICAgICBib3guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGhhbmRsZXIoZSwgZnVsbERhdGUpXHJcbiAgICAgIH0pICBcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHR3b0RpZ2l0RGF0ZSAoZGF0ZSkge1xyXG4gICAgcmV0dXJuICgnMCcgKyBkYXRlKS5zbGljZSgtMilcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHR3b0RpZ2l0TW9udGggKG1vbnRoKSB7XHJcbiAgICByZXR1cm4gKCcwJyArIChtb250aCArIDEpKS5zbGljZSgtMilcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHJlbmRlciAoKSB7XHJcbiAgICB0aGlzLmVsZW1lbnRzLm1vbnRoWWVhci5pbm5lckhUTUwgPSBgXHJcbiAgICAgIDxkaXY+JHt0aGlzLnllYXJ9PC9kaXY+XHJcbiAgICAgIDxkaXY+JHtNT05USE5BTUVTW3RoaXMubW9udGhdfTwvZGl2PlxyXG4gICAgYFxyXG4gICAgLy8gdGhpcy5lbGVtZW50cy5jYWxlbmRhckJvZHkuaW5uZXJIVE1MID0gY3JlYXRlQ2FsZW5kYXJCb2R5KHRoaXMubW9udGgsIHRoaXMuZGF0ZSwgdGhpcy55ZWFyLCB0aGlzLmRheXNQZXJNb250aCwgdGhpcy5jb250ZW50cylcclxuICAgIHRoaXMuZWxlbWVudHMuY2FsZW5kYXJCb2R5LmlubmVySFRNTCA9IGNyZWF0ZUNhbGVuZGFyQm9keS5jYWxsKHRoaXMpXHJcbiAgICBldmVudFNldHRlci5jYWxsKHRoaXMpXHJcbiAgfVxyXG5cclxuICBDYUNhbGVuZGFyLnByb3RvdHlwZS5wcmludCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHJlbmRlci5jYWxsKHRoaXMpXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLm9wdGlvbnMuaWQpLmFwcGVuZENoaWxkKHRoaXMuZWxlbWVudHMuY2FsZW5kYXIpXHJcbiAgfVxyXG5cclxuICBDYUNhbGVuZGFyLnByb3RvdHlwZS50b2RheSA9IGZ1bmN0aW9uICgpIHsgIFxyXG4gICAgbGV0IHRvZGF5ID0gbmV3IERhdGUoKVxyXG4gICAgdGhpcy5tb250aCA9IHRvZGF5LmdldE1vbnRoKClcclxuICAgIHRoaXMuZGF0ZSA9IHRvZGF5LmdldERhdGUoKVxyXG4gICAgdGhpcy55ZWFyID0gdG9kYXkuZ2V0RnVsbFllYXIoKVxyXG4gICAgcmVuZGVyLmNhbGwodGhpcylcclxuICB9XHJcblxyXG4gIENhQ2FsZW5kYXIucHJvdG90eXBlLmRlZmF1bHREYXRlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgbGV0IERhdGVWYWx1ZSA9IGdldERlZmF1bHREYXRlKHRoaXMub3B0aW9ucy5kYXRlKVxyXG4gICAgdGhpcy5tb250aCA9IERhdGVWYWx1ZS5nZXRNb250aCgpXHJcbiAgICB0aGlzLmRhdGUgPSBEYXRlVmFsdWUuZ2V0RGF0ZSgpXHJcbiAgICB0aGlzLnllYXIgPSBEYXRlVmFsdWUuZ2V0RnVsbFllYXIoKVxyXG4gICAgcmVuZGVyLmNhbGwodGhpcylcclxuICB9XHJcblxyXG4gIENhQ2FsZW5kYXIucHJvdG90eXBlLm5leHRZZWFyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdGhpcy55ZWFyID0gdGhpcy55ZWFyICsgMVxyXG4gICAgcmVuZGVyLmNhbGwodGhpcylcclxuICB9XHJcblxyXG4gIENhQ2FsZW5kYXIucHJvdG90eXBlLnByZXZpb3VzWWVhciA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHRoaXMueWVhciA9IHRoaXMueWVhciAtIDFcclxuICAgIHJlbmRlci5jYWxsKHRoaXMpXHJcbiAgfVxyXG5cclxuICBDYUNhbGVuZGFyLnByb3RvdHlwZS5uZXh0TW9udGggPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB0aGlzLm1vbnRoID0gdGhpcy5tb250aCArIDFcclxuICAgIGlmICh0aGlzLm1vbnRoID4gMTEpIHtcclxuICAgICAgdGhpcy55ZWFyID0gdGhpcy55ZWFyICsgMVxyXG4gICAgICB0aGlzLm1vbnRoID0gMFxyXG4gICAgfVxyXG4gICAgcmVuZGVyLmNhbGwodGhpcylcclxuICB9XHJcblxyXG4gIENhQ2FsZW5kYXIucHJvdG90eXBlLnByZXZpb3VzTW9udGggPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB0aGlzLm1vbnRoID0gdGhpcy5tb250aCAtIDFcclxuICAgIGlmICh0aGlzLm1vbnRoIDwgMCkge1xyXG4gICAgICB0aGlzLnllYXIgPSB0aGlzLnllYXIgLSAxXHJcbiAgICAgIHRoaXMubW9udGggPSAxMVxyXG4gICAgfVxyXG4gICAgcmVuZGVyLmNhbGwodGhpcylcclxuICB9XHJcblxyXG4gIENhQ2FsZW5kYXIucHJvdG90eXBlLnNldENvbnRlbnRzID0gZnVuY3Rpb24gKHZhbENvbnRlbnRzKSB7XHJcbiAgICB0aGlzLmNvbnRlbnRzID0gdmFsQ29udGVudHNcclxuICAgIHJlbmRlci5jYWxsKHRoaXMpXHJcbiAgfVxyXG5cclxuICBDYUNhbGVuZGFyLnByb3RvdHlwZS5jbGljayA9IGZ1bmN0aW9uIChoYW5kbGVyKSB7XHJcbiAgICB0aGlzLmV2ZW50cy5jbGljayA9IGhhbmRsZXJcclxuICAgIHJlbmRlci5jYWxsKHRoaXMpXHJcbiAgfVxyXG5cclxuICBleHBvcnQgZGVmYXVsdCBDYUNhbGVuZGFyIiwiaW1wb3J0IENhQ2FsZW5kYXIgZnJvbSAnLi9jYS1jYWxlbmRhci5qcydcclxuaW1wb3J0ICcuL3Njc3MvY2EtY2FsZW5kYXIuc2NzcydcclxuXHJcbndpbmRvdy5DYUNhbGVuZGFyID0gQ2FDYWxlbmRhciIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL2NhLWNhbGVuZGFyLnNjc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vY2EtY2FsZW5kYXIuc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vY2EtY2FsZW5kYXIuc2Nzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSJdLCJzb3VyY2VSb290IjoiIn0=