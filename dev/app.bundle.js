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
    this.month = objDate.month
    this.date = objDate.date
    this.year = objDate.year
    
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

  function createCalendarBody (month, date, year, daysPerMonth, contents) {
    const TOTALDATEBOXS = 42

    let boxCounter = 0
    let dateCounter = 1
    let firstDayOfTheWeek = getFristDayOfTheWeek(month, year)
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

      if (dateCounter <= daysPerMonth[month]) { 
        if (dateCounter === date) {
          calendarContent += `
            <td class="cac-date-today cac-date">
              <div class="cac-date-box">
                <div class="cac-date-text">${dateCounter}</div>
                <div class="cac-date-content">`

          for (let index in contents) {
            if (new Date(year, month, date).getTime() == new Date(contents[index].date).getTime()) {
              if (contents[index].items) {
                calendarContent += `<ul class="cac-list">`
                contents[index].items.forEach(item => {
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

          for (let index in contents) {
            if (new Date(year, month, dateCounter).getTime() == new Date(contents[index].date).getTime()) {
              if (contents[index].items) {
                calendarContent += `<ul class="cac-list">`
                contents[index].items.forEach(item => {
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
    this.elements.calendarBody.innerHTML = createCalendarBody(this.month, this.date, this.year, this.daysPerMonth, this.contents)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Njc3MvY2EtY2FsZW5kYXIuc2NzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL3VybHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NhLWNhbGVuZGFyLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2Nzcy9jYS1jYWxlbmRhci5zY3NzPzVkYTQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ25FQTtBQUNBOzs7QUFHQTtBQUNBLGtOQUFtTiwwQkFBMEIsRUFBRSxtQkFBbUIsOEJBQThCLGdCQUFnQixvQkFBb0IscUJBQXFCLHVDQUF1QyxFQUFFLHNCQUFzQixnQ0FBZ0MsRUFBRSxnREFBZ0QscUJBQXFCLHNCQUFzQixvQkFBb0IsRUFBRSxpRUFBaUUseUJBQXlCLEVBQUUscUVBQXFFLGtDQUFrQyxvRUFBb0UsdURBQXVELDhDQUE4QyxtREFBbUQsNEJBQTRCLEVBQUUscUVBQXFFLGtDQUFrQyxvRUFBb0UsdURBQXVELDhDQUE4QyxtREFBbUQsMkJBQTJCLEVBQUUscUNBQXFDLG1CQUFtQixxQkFBcUIsb0JBQW9CLHlCQUF5QixFQUFFLCtCQUErQix3QkFBd0IsbUJBQW1CLEVBQUUsK0NBQStDLHlCQUF5QixFQUFFLGdFQUFnRSx5QkFBeUIsNEJBQTRCLDBCQUEwQixFQUFFLG1FQUFtRSwyQkFBMkIsRUFBRSw0QkFBNEIsc0JBQXNCLDBCQUEwQixFQUFFLG1DQUFtQywwQkFBMEIsRUFBRSxtQ0FBbUMsMEJBQTBCLEVBQUUsNkJBQTZCLGdCQUFnQixtQkFBbUIsdUJBQXVCLEVBQUUsOENBQThDLHVCQUF1QixFQUFFLHFFQUFxRSxzQkFBc0IsRUFBRSxxRUFBcUUsdUJBQXVCLEVBQUUsb0RBQW9ELG9CQUFvQix1QkFBdUIsb0JBQW9CLEVBQUU7O0FBRXYrRTs7Ozs7Ozs7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxnQkFBZ0I7QUFDbkQsSUFBSTtBQUNKO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixpQkFBaUI7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLG9CQUFvQjtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvREFBb0QsY0FBYzs7QUFFbEU7QUFDQTs7Ozs7Ozs7Ozs7O0FDM0VBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEM7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLGlCQUFpQixtQkFBbUI7QUFDcEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCLHNCQUFzQjtBQUN2Qzs7QUFFQTtBQUNBLG1CQUFtQiwyQkFBMkI7O0FBRTlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnQkFBZ0IsbUJBQW1CO0FBQ25DO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpQkFBaUIsMkJBQTJCO0FBQzVDO0FBQ0E7O0FBRUEsUUFBUSx1QkFBdUI7QUFDL0I7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQSxpQkFBaUIsdUJBQXVCO0FBQ3hDO0FBQ0E7O0FBRUEsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsZ0JBQWdCLGlCQUFpQjtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYzs7QUFFZCxrREFBa0Qsc0JBQXNCO0FBQ3hFO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1REFBdUQ7QUFDdkQ7O0FBRUEsNkJBQTZCLG1CQUFtQjs7QUFFaEQ7O0FBRUE7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQzFYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsV0FBVyxFQUFFO0FBQ3JELHdDQUF3QyxXQUFXLEVBQUU7O0FBRXJEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0Esc0NBQXNDO0FBQ3RDLEdBQUc7QUFDSDtBQUNBLDhEQUE4RDtBQUM5RDs7QUFFQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN4RkE7QUFBQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLGlDQUFpQztBQUNqQztBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEc7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLCtDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMsWUFBWTtBQUN6RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RCxXQUFXO0FBQ3BFLHlEQUF5RCxXQUFXO0FBQ3BFO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxZQUFZO0FBQ3ZEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseURBQXlELFdBQVc7QUFDcEUseURBQXlELFdBQVc7QUFDcEU7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsK0JBQStCLFVBQVUsR0FBRywwQkFBMEIsR0FBRyxtQkFBbUI7QUFDNUYsZ0NBQWdDLDBCQUEwQixHQUFHLG1CQUFtQixHQUFHLFVBQVU7QUFDN0Y7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWEsVUFBVTtBQUN2QixhQUFhLHVCQUF1QjtBQUNwQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsMkU7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqY0E7QUFDQTs7QUFFQSwyRTs7Ozs7Ozs7Ozs7O0FDRkE7O0FBRUE7O0FBRUE7QUFDQTs7OztBQUlBLGVBQWU7O0FBRWY7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxZIiwiZmlsZSI6ImFwcC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5jYWMtY2FsZW5kYXIgdGhlYWQgdHIgLmNhYy1jYWxlbmRhci10aXRsZSAuY2FjLW1vbnRoWWVhciwgLmNhYy1jYWxlbmRhciB0aGVhZCB0ciAuY2FjLWNhbGVuZGFyLXRpdGxlIC5jYWMtYnRuLXByZXZNb250aCwgLmNhYy1jYWxlbmRhciB0aGVhZCB0ciAuY2FjLWNhbGVuZGFyLXRpdGxlIC5jYWMtYnRuLW5leHRNb250aCB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IH1cXG5cXG4uY2FjLWNhbGVuZGFyIHtcXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIG1pbi13aWR0aDogNjcwcHg7XFxuICBmb250LWZhbWlseTogSGVsdmV0aWNhLCBzYW5zLXNlcmlmOyB9XFxuICAuY2FjLWNhbGVuZGFyIHRkIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2U0ZTRlNDsgfVxcbiAgLmNhYy1jYWxlbmRhciB0aGVhZCB0ciAuY2FjLWNhbGVuZGFyLXRpdGxlIHtcXG4gICAgY29sb3I6ICM3ZDdkN2Q7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG4gICAgcGFkZGluZzogMjBweDsgfVxcbiAgICAuY2FjLWNhbGVuZGFyIHRoZWFkIHRyIC5jYWMtY2FsZW5kYXItdGl0bGUgLmNhYy1tb250aFllYXIge1xcbiAgICAgIG1pbi13aWR0aDogMjAwcHg7IH1cXG4gICAgLmNhYy1jYWxlbmRhciB0aGVhZCB0ciAuY2FjLWNhbGVuZGFyLXRpdGxlIC5jYWMtYnRuLXByZXZNb250aCB7XFxuICAgICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgICAvKiBDaHJvbWUgYWxsIC8gU2FmYXJpIGFsbCAqL1xcbiAgICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAgLyogRmlyZWZveCBhbGwgKi9cXG4gICAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAgLyogSUUgMTArICovXFxuICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAgLyogTGlrZWx5IGZ1dHVyZSAqL1xcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4OyB9XFxuICAgIC5jYWMtY2FsZW5kYXIgdGhlYWQgdHIgLmNhYy1jYWxlbmRhci10aXRsZSAuY2FjLWJ0bi1uZXh0TW9udGgge1xcbiAgICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAgLyogQ2hyb21lIGFsbCAvIFNhZmFyaSBhbGwgKi9cXG4gICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgIC8qIEZpcmVmb3ggYWxsICovXFxuICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgIC8qIElFIDEwKyAqL1xcbiAgICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgIC8qIExpa2VseSBmdXR1cmUgKi9cXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4OyB9XFxuICAuY2FjLWNhbGVuZGFyIC5jYWMtZGF5LW5hbWVzIHRoIHtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBjb2xvcjogIzdkN2Q3ZDtcXG4gICAgd2lkdGg6IDE0LjI4JTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyB9XFxuICAuY2FjLWNhbGVuZGFyIHRkLmNhYy1kYXRlIHtcXG4gICAgbWluLWhlaWdodDogMTAwcHg7XFxuICAgIHBhZGRpbmc6IDVweDsgfVxcbiAgICAuY2FjLWNhbGVuZGFyIHRkLmNhYy1kYXRlIC5jYWMtZGF0ZS1ib3gge1xcbiAgICAgIG1pbi1oZWlnaHQ6IDcwcHg7IH1cXG4gICAgICAuY2FjLWNhbGVuZGFyIHRkLmNhYy1kYXRlIC5jYWMtZGF0ZS1ib3ggLmNhYy1kYXRlLXRleHQge1xcbiAgICAgICAgY29sb3I6ICM4ODg4ODg7XFxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcXG4gICAgICAgIGZvbnQtc2l6ZTogMTdweDsgfVxcbiAgICAgIC5jYWMtY2FsZW5kYXIgdGQuY2FjLWRhdGUgLmNhYy1kYXRlLWJveCAuY2FjLWRhdGUtY29udGVudCB7XFxuICAgICAgICBtaW4taGVpZ2h0OiA0MHB4OyB9XFxuICAuY2FjLWNhbGVuZGFyIHRkOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBiYWNrZ3JvdW5kOiAjZWZlZmVmOyB9XFxuICAuY2FjLWNhbGVuZGFyIC5jYWMtZGF0ZS10b2RheSB7XFxuICAgIGJhY2tncm91bmQ6ICNjY2U5ZmY7IH1cXG4gIC5jYWMtY2FsZW5kYXIgLmNhYy1kYXRlLWVtcHR5IHtcXG4gICAgYmFja2dyb3VuZDogI2YzZjNmMzsgfVxcbiAgLmNhYy1jYWxlbmRhciAuY2FjLWxpc3Qge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDdweDtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTsgfVxcbiAgICAuY2FjLWNhbGVuZGFyIC5jYWMtbGlzdCAuY2FjLWxpc3QtaXRlbSB7XFxuICAgICAgcGFkZGluZzogNHB4IDA7IH1cXG4gICAgICAuY2FjLWNhbGVuZGFyIC5jYWMtbGlzdCAuY2FjLWxpc3QtaXRlbSAuY2FjLWxpc3QtaXRlbS1sYWJlbCB7XFxuICAgICAgICBmbG9hdDogbGVmdDsgfVxcbiAgICAgIC5jYWMtY2FsZW5kYXIgLmNhYy1saXN0IC5jYWMtbGlzdC1pdGVtIC5jYWMtbGlzdC1pdGVtLXZhbHVlIHtcXG4gICAgICAgIGZsb2F0OiByaWdodDsgfVxcbiAgICAuY2FjLWNhbGVuZGFyIC5jYWMtbGlzdCAuY2FjLWxpc3QtaXRlbTphZnRlciB7XFxuICAgICAgY29udGVudDogJyc7XFxuICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgY2xlYXI6IGJvdGg7IH1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG4iLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24odXNlU291cmNlTWFwKSB7XG5cdHZhciBsaXN0ID0gW107XG5cblx0Ly8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXHRsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG5cdFx0cmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG5cdFx0XHR2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblx0XHRcdGlmKGl0ZW1bMl0pIHtcblx0XHRcdFx0cmV0dXJuIFwiQG1lZGlhIFwiICsgaXRlbVsyXSArIFwie1wiICsgY29udGVudCArIFwifVwiO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIGNvbnRlbnQ7XG5cdFx0XHR9XG5cdFx0fSkuam9pbihcIlwiKTtcblx0fTtcblxuXHQvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXHRsaXN0LmkgPSBmdW5jdGlvbihtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XG5cdFx0aWYodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpXG5cdFx0XHRtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG5cdFx0dmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGlkID0gdGhpc1tpXVswXTtcblx0XHRcdGlmKHR5cGVvZiBpZCA9PT0gXCJudW1iZXJcIilcblx0XHRcdFx0YWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuXHRcdH1cblx0XHRmb3IoaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IG1vZHVsZXNbaV07XG5cdFx0XHQvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXG5cdFx0XHQvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xuXHRcdFx0Ly8gIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cblx0XHRcdC8vICBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXG5cdFx0XHRpZih0eXBlb2YgaXRlbVswXSAhPT0gXCJudW1iZXJcIiB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuXHRcdFx0XHRpZihtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XG5cdFx0XHRcdFx0aXRlbVsyXSA9IG1lZGlhUXVlcnk7XG5cdFx0XHRcdH0gZWxzZSBpZihtZWRpYVF1ZXJ5KSB7XG5cdFx0XHRcdFx0aXRlbVsyXSA9IFwiKFwiICsgaXRlbVsyXSArIFwiKSBhbmQgKFwiICsgbWVkaWFRdWVyeSArIFwiKVwiO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGxpc3QucHVzaChpdGVtKTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG5cdHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcblx0dmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnO1xuXHR2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cdGlmICghY3NzTWFwcGluZykge1xuXHRcdHJldHVybiBjb250ZW50O1xuXHR9XG5cblx0aWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuXHRcdHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG5cdFx0XHRyZXR1cm4gJy8qIyBzb3VyY2VVUkw9JyArIGNzc01hcHBpbmcuc291cmNlUm9vdCArIHNvdXJjZSArICcgKi8nXG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcblx0fVxuXG5cdHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59XG5cbi8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG5cdHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuXHR2YXIgZGF0YSA9ICdzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCwnICsgYmFzZTY0O1xuXG5cdHJldHVybiAnLyojICcgKyBkYXRhICsgJyAqLyc7XG59XG4iLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuXG52YXIgc3R5bGVzSW5Eb20gPSB7fTtcblxudmFyXHRtZW1vaXplID0gZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoKSB7XG5cdFx0aWYgKHR5cGVvZiBtZW1vID09PSBcInVuZGVmaW5lZFwiKSBtZW1vID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblx0XHRyZXR1cm4gbWVtbztcblx0fTtcbn07XG5cbnZhciBpc09sZElFID0gbWVtb2l6ZShmdW5jdGlvbiAoKSB7XG5cdC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG5cdC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcblx0Ly8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuXHQvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcblx0Ly8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG5cdHJldHVybiB3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYjtcbn0pO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gKHRhcmdldCkge1xuICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xufTtcblxudmFyIGdldEVsZW1lbnQgPSAoZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vID0ge307XG5cblx0cmV0dXJuIGZ1bmN0aW9uKHRhcmdldCkge1xuICAgICAgICAgICAgICAgIC8vIElmIHBhc3NpbmcgZnVuY3Rpb24gaW4gb3B0aW9ucywgdGhlbiB1c2UgaXQgZm9yIHJlc29sdmUgXCJoZWFkXCIgZWxlbWVudC5cbiAgICAgICAgICAgICAgICAvLyBVc2VmdWwgZm9yIFNoYWRvdyBSb290IHN0eWxlIGkuZVxuICAgICAgICAgICAgICAgIC8vIHtcbiAgICAgICAgICAgICAgICAvLyAgIGluc2VydEludG86IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9vXCIpLnNoYWRvd1Jvb3QgfVxuICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRhcmdldCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRhcmdldCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuXHRcdFx0dmFyIHN0eWxlVGFyZ2V0ID0gZ2V0VGFyZ2V0LmNhbGwodGhpcywgdGFyZ2V0KTtcblx0XHRcdC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cdFx0XHRpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0Ly8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcblx0XHRcdFx0XHQvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG5cdFx0XHRcdH0gY2F0Y2goZSkge1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gbnVsbDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0bWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG5cdFx0fVxuXHRcdHJldHVybiBtZW1vW3RhcmdldF1cblx0fTtcbn0pKCk7XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyXHRzaW5nbGV0b25Db3VudGVyID0gMDtcbnZhclx0c3R5bGVzSW5zZXJ0ZWRBdFRvcCA9IFtdO1xuXG52YXJcdGZpeFVybHMgPSByZXF1aXJlKFwiLi91cmxzXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGxpc3QsIG9wdGlvbnMpIHtcblx0aWYgKHR5cGVvZiBERUJVRyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBERUJVRykge1xuXHRcdGlmICh0eXBlb2YgZG9jdW1lbnQgIT09IFwib2JqZWN0XCIpIHRocm93IG5ldyBFcnJvcihcIlRoZSBzdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudFwiKTtcblx0fVxuXG5cdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG5cdG9wdGlvbnMuYXR0cnMgPSB0eXBlb2Ygb3B0aW9ucy5hdHRycyA9PT0gXCJvYmplY3RcIiA/IG9wdGlvbnMuYXR0cnMgOiB7fTtcblxuXHQvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cblx0Ly8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXHRpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gXCJib29sZWFuXCIpIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIDxoZWFkPiBlbGVtZW50XG4gICAgICAgIGlmICghb3B0aW9ucy5pbnNlcnRJbnRvKSBvcHRpb25zLmluc2VydEludG8gPSBcImhlYWRcIjtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSBib3R0b20gb2YgdGhlIHRhcmdldFxuXHRpZiAoIW9wdGlvbnMuaW5zZXJ0QXQpIG9wdGlvbnMuaW5zZXJ0QXQgPSBcImJvdHRvbVwiO1xuXG5cdHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMobGlzdCwgb3B0aW9ucyk7XG5cblx0YWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlIChuZXdMaXN0KSB7XG5cdFx0dmFyIG1heVJlbW92ZSA9IFtdO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRcdGRvbVN0eWxlLnJlZnMtLTtcblx0XHRcdG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKTtcblx0XHR9XG5cblx0XHRpZihuZXdMaXN0KSB7XG5cdFx0XHR2YXIgbmV3U3R5bGVzID0gbGlzdFRvU3R5bGVzKG5ld0xpc3QsIG9wdGlvbnMpO1xuXHRcdFx0YWRkU3R5bGVzVG9Eb20obmV3U3R5bGVzLCBvcHRpb25zKTtcblx0XHR9XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG1heVJlbW92ZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gbWF5UmVtb3ZlW2ldO1xuXG5cdFx0XHRpZihkb21TdHlsZS5yZWZzID09PSAwKSB7XG5cdFx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIGRvbVN0eWxlLnBhcnRzW2pdKCk7XG5cblx0XHRcdFx0ZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG59O1xuXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbSAoc3R5bGVzLCBvcHRpb25zKSB7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRpZihkb21TdHlsZSkge1xuXHRcdFx0ZG9tU3R5bGUucmVmcysrO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSk7XG5cdFx0XHR9XG5cblx0XHRcdGZvcig7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgcGFydHMgPSBbXTtcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0cGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cblx0XHRcdHN0eWxlc0luRG9tW2l0ZW0uaWRdID0ge2lkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHN9O1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBsaXN0VG9TdHlsZXMgKGxpc3QsIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlcyA9IFtdO1xuXHR2YXIgbmV3U3R5bGVzID0ge307XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBsaXN0W2ldO1xuXHRcdHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuXHRcdHZhciBjc3MgPSBpdGVtWzFdO1xuXHRcdHZhciBtZWRpYSA9IGl0ZW1bMl07XG5cdFx0dmFyIHNvdXJjZU1hcCA9IGl0ZW1bM107XG5cdFx0dmFyIHBhcnQgPSB7Y3NzOiBjc3MsIG1lZGlhOiBtZWRpYSwgc291cmNlTWFwOiBzb3VyY2VNYXB9O1xuXG5cdFx0aWYoIW5ld1N0eWxlc1tpZF0pIHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7aWQ6IGlkLCBwYXJ0czogW3BhcnRdfSk7XG5cdFx0ZWxzZSBuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydCk7XG5cdH1cblxuXHRyZXR1cm4gc3R5bGVzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQgKG9wdGlvbnMsIHN0eWxlKSB7XG5cdHZhciB0YXJnZXQgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0SW50bylcblxuXHRpZiAoIXRhcmdldCkge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0SW50bycgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuXHR9XG5cblx0dmFyIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcFtzdHlsZXNJbnNlcnRlZEF0VG9wLmxlbmd0aCAtIDFdO1xuXG5cdGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcInRvcFwiKSB7XG5cdFx0aWYgKCFsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCkge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgdGFyZ2V0LmZpcnN0Q2hpbGQpO1xuXHRcdH0gZWxzZSBpZiAobGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0XHR9XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5wdXNoKHN0eWxlKTtcblx0fSBlbHNlIGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcImJvdHRvbVwiKSB7XG5cdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0fSBlbHNlIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJvYmplY3RcIiAmJiBvcHRpb25zLmluc2VydEF0LmJlZm9yZSkge1xuXHRcdHZhciBuZXh0U2libGluZyA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRJbnRvICsgXCIgXCIgKyBvcHRpb25zLmluc2VydEF0LmJlZm9yZSk7XG5cdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbmV4dFNpYmxpbmcpO1xuXHR9IGVsc2Uge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIltTdHlsZSBMb2FkZXJdXFxuXFxuIEludmFsaWQgdmFsdWUgZm9yIHBhcmFtZXRlciAnaW5zZXJ0QXQnICgnb3B0aW9ucy5pbnNlcnRBdCcpIGZvdW5kLlxcbiBNdXN0IGJlICd0b3AnLCAnYm90dG9tJywgb3IgT2JqZWN0LlxcbiAoaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIjaW5zZXJ0YXQpXFxuXCIpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudCAoc3R5bGUpIHtcblx0aWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHJldHVybiBmYWxzZTtcblx0c3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG5cblx0dmFyIGlkeCA9IHN0eWxlc0luc2VydGVkQXRUb3AuaW5kZXhPZihzdHlsZSk7XG5cdGlmKGlkeCA+PSAwKSB7XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5zcGxpY2UoaWR4LCAxKTtcblx0fVxufVxuXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuXG5cdGlmKG9wdGlvbnMuYXR0cnMudHlwZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHR9XG5cblx0YWRkQXR0cnMoc3R5bGUsIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgc3R5bGUpO1xuXG5cdHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTGlua0VsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcblxuXHRpZihvcHRpb25zLmF0dHJzLnR5cGUgPT09IHVuZGVmaW5lZCkge1xuXHRcdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0fVxuXHRvcHRpb25zLmF0dHJzLnJlbCA9IFwic3R5bGVzaGVldFwiO1xuXG5cdGFkZEF0dHJzKGxpbmssIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgbGluayk7XG5cblx0cmV0dXJuIGxpbms7XG59XG5cbmZ1bmN0aW9uIGFkZEF0dHJzIChlbCwgYXR0cnMpIHtcblx0T2JqZWN0LmtleXMoYXR0cnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuXHRcdGVsLnNldEF0dHJpYnV0ZShrZXksIGF0dHJzW2tleV0pO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUgKG9iaiwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGUsIHVwZGF0ZSwgcmVtb3ZlLCByZXN1bHQ7XG5cblx0Ly8gSWYgYSB0cmFuc2Zvcm0gZnVuY3Rpb24gd2FzIGRlZmluZWQsIHJ1biBpdCBvbiB0aGUgY3NzXG5cdGlmIChvcHRpb25zLnRyYW5zZm9ybSAmJiBvYmouY3NzKSB7XG5cdCAgICByZXN1bHQgPSBvcHRpb25zLnRyYW5zZm9ybShvYmouY3NzKTtcblxuXHQgICAgaWYgKHJlc3VsdCkge1xuXHQgICAgXHQvLyBJZiB0cmFuc2Zvcm0gcmV0dXJucyBhIHZhbHVlLCB1c2UgdGhhdCBpbnN0ZWFkIG9mIHRoZSBvcmlnaW5hbCBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIHJ1bm5pbmcgcnVudGltZSB0cmFuc2Zvcm1hdGlvbnMgb24gdGhlIGNzcy5cblx0ICAgIFx0b2JqLmNzcyA9IHJlc3VsdDtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICBcdC8vIElmIHRoZSB0cmFuc2Zvcm0gZnVuY3Rpb24gcmV0dXJucyBhIGZhbHN5IHZhbHVlLCBkb24ndCBhZGQgdGhpcyBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIGNvbmRpdGlvbmFsIGxvYWRpbmcgb2YgY3NzXG5cdCAgICBcdHJldHVybiBmdW5jdGlvbigpIHtcblx0ICAgIFx0XHQvLyBub29wXG5cdCAgICBcdH07XG5cdCAgICB9XG5cdH1cblxuXHRpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcblx0XHR2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcblxuXHRcdHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuXG5cdFx0dXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG5cdFx0cmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcblxuXHR9IGVsc2UgaWYgKFxuXHRcdG9iai5zb3VyY2VNYXAgJiZcblx0XHR0eXBlb2YgVVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLmNyZWF0ZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5yZXZva2VPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBCbG9iID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiXG5cdCkge1xuXHRcdHN0eWxlID0gY3JlYXRlTGlua0VsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gdXBkYXRlTGluay5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXG5cdFx0XHRpZihzdHlsZS5ocmVmKSBVUkwucmV2b2tlT2JqZWN0VVJMKHN0eWxlLmhyZWYpO1xuXHRcdH07XG5cdH0gZWxzZSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXHRcdH07XG5cdH1cblxuXHR1cGRhdGUob2JqKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUgKG5ld09iaikge1xuXHRcdGlmIChuZXdPYmopIHtcblx0XHRcdGlmIChcblx0XHRcdFx0bmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJlxuXHRcdFx0XHRuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJlxuXHRcdFx0XHRuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwXG5cdFx0XHQpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHR1cGRhdGUob2JqID0gbmV3T2JqKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmVtb3ZlKCk7XG5cdFx0fVxuXHR9O1xufVxuXG52YXIgcmVwbGFjZVRleHQgPSAoZnVuY3Rpb24gKCkge1xuXHR2YXIgdGV4dFN0b3JlID0gW107XG5cblx0cmV0dXJuIGZ1bmN0aW9uIChpbmRleCwgcmVwbGFjZW1lbnQpIHtcblx0XHR0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG5cblx0XHRyZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcblx0fTtcbn0pKCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcgKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcblx0dmFyIGNzcyA9IHJlbW92ZSA/IFwiXCIgOiBvYmouY3NzO1xuXG5cdGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG5cdH0gZWxzZSB7XG5cdFx0dmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuXHRcdHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuXHRcdGlmIChjaGlsZE5vZGVzW2luZGV4XSkgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG5cdFx0XHRzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyAoc3R5bGUsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuXG5cdGlmKG1lZGlhKSB7XG5cdFx0c3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpXG5cdH1cblxuXHRpZihzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuXHR9IGVsc2Uge1xuXHRcdHdoaWxlKHN0eWxlLmZpcnN0Q2hpbGQpIHtcblx0XHRcdHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuXHRcdH1cblxuXHRcdHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUxpbmsgKGxpbmssIG9wdGlvbnMsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cblx0Lypcblx0XHRJZiBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgaXNuJ3QgZGVmaW5lZCwgYnV0IHNvdXJjZW1hcHMgYXJlIGVuYWJsZWRcblx0XHRhbmQgdGhlcmUgaXMgbm8gcHVibGljUGF0aCBkZWZpbmVkIHRoZW4gbGV0cyB0dXJuIGNvbnZlcnRUb0Fic29sdXRlVXJsc1xuXHRcdG9uIGJ5IGRlZmF1bHQuICBPdGhlcndpc2UgZGVmYXVsdCB0byB0aGUgY29udmVydFRvQWJzb2x1dGVVcmxzIG9wdGlvblxuXHRcdGRpcmVjdGx5XG5cdCovXG5cdHZhciBhdXRvRml4VXJscyA9IG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzID09PSB1bmRlZmluZWQgJiYgc291cmNlTWFwO1xuXG5cdGlmIChvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyB8fCBhdXRvRml4VXJscykge1xuXHRcdGNzcyA9IGZpeFVybHMoY3NzKTtcblx0fVxuXG5cdGlmIChzb3VyY2VNYXApIHtcblx0XHQvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNjYwMzg3NVxuXHRcdGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIgKyBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpICsgXCIgKi9cIjtcblx0fVxuXG5cdHZhciBibG9iID0gbmV3IEJsb2IoW2Nzc10sIHsgdHlwZTogXCJ0ZXh0L2Nzc1wiIH0pO1xuXG5cdHZhciBvbGRTcmMgPSBsaW5rLmhyZWY7XG5cblx0bGluay5ocmVmID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcblxuXHRpZihvbGRTcmMpIFVSTC5yZXZva2VPYmplY3RVUkwob2xkU3JjKTtcbn1cbiIsIlxuLyoqXG4gKiBXaGVuIHNvdXJjZSBtYXBzIGFyZSBlbmFibGVkLCBgc3R5bGUtbG9hZGVyYCB1c2VzIGEgbGluayBlbGVtZW50IHdpdGggYSBkYXRhLXVyaSB0b1xuICogZW1iZWQgdGhlIGNzcyBvbiB0aGUgcGFnZS4gVGhpcyBicmVha3MgYWxsIHJlbGF0aXZlIHVybHMgYmVjYXVzZSBub3cgdGhleSBhcmUgcmVsYXRpdmUgdG8gYVxuICogYnVuZGxlIGluc3RlYWQgb2YgdGhlIGN1cnJlbnQgcGFnZS5cbiAqXG4gKiBPbmUgc29sdXRpb24gaXMgdG8gb25seSB1c2UgZnVsbCB1cmxzLCBidXQgdGhhdCBtYXkgYmUgaW1wb3NzaWJsZS5cbiAqXG4gKiBJbnN0ZWFkLCB0aGlzIGZ1bmN0aW9uIFwiZml4ZXNcIiB0aGUgcmVsYXRpdmUgdXJscyB0byBiZSBhYnNvbHV0ZSBhY2NvcmRpbmcgdG8gdGhlIGN1cnJlbnQgcGFnZSBsb2NhdGlvbi5cbiAqXG4gKiBBIHJ1ZGltZW50YXJ5IHRlc3Qgc3VpdGUgaXMgbG9jYXRlZCBhdCBgdGVzdC9maXhVcmxzLmpzYCBhbmQgY2FuIGJlIHJ1biB2aWEgdGhlIGBucG0gdGVzdGAgY29tbWFuZC5cbiAqXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzKSB7XG4gIC8vIGdldCBjdXJyZW50IGxvY2F0aW9uXG4gIHZhciBsb2NhdGlvbiA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgd2luZG93LmxvY2F0aW9uO1xuXG4gIGlmICghbG9jYXRpb24pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJmaXhVcmxzIHJlcXVpcmVzIHdpbmRvdy5sb2NhdGlvblwiKTtcbiAgfVxuXG5cdC8vIGJsYW5rIG9yIG51bGw/XG5cdGlmICghY3NzIHx8IHR5cGVvZiBjc3MgIT09IFwic3RyaW5nXCIpIHtcblx0ICByZXR1cm4gY3NzO1xuICB9XG5cbiAgdmFyIGJhc2VVcmwgPSBsb2NhdGlvbi5wcm90b2NvbCArIFwiLy9cIiArIGxvY2F0aW9uLmhvc3Q7XG4gIHZhciBjdXJyZW50RGlyID0gYmFzZVVybCArIGxvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoL1xcL1teXFwvXSokLywgXCIvXCIpO1xuXG5cdC8vIGNvbnZlcnQgZWFjaCB1cmwoLi4uKVxuXHQvKlxuXHRUaGlzIHJlZ3VsYXIgZXhwcmVzc2lvbiBpcyBqdXN0IGEgd2F5IHRvIHJlY3Vyc2l2ZWx5IG1hdGNoIGJyYWNrZXRzIHdpdGhpblxuXHRhIHN0cmluZy5cblxuXHQgL3VybFxccypcXCggID0gTWF0Y2ggb24gdGhlIHdvcmQgXCJ1cmxcIiB3aXRoIGFueSB3aGl0ZXNwYWNlIGFmdGVyIGl0IGFuZCB0aGVuIGEgcGFyZW5zXG5cdCAgICggID0gU3RhcnQgYSBjYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAoPzogID0gU3RhcnQgYSBub24tY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgICAgIFteKShdICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAoPzogID0gU3RhcnQgYW5vdGhlciBub24tY2FwdHVyaW5nIGdyb3Vwc1xuXHQgICAgICAgICAgICAgICAgIFteKShdKyAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICAgICAgW14pKF0qICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIFxcKSAgPSBNYXRjaCBhIGVuZCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKSAgPSBFbmQgR3JvdXBcbiAgICAgICAgICAgICAgKlxcKSA9IE1hdGNoIGFueXRoaW5nIGFuZCB0aGVuIGEgY2xvc2UgcGFyZW5zXG4gICAgICAgICAgKSAgPSBDbG9zZSBub24tY2FwdHVyaW5nIGdyb3VwXG4gICAgICAgICAgKiAgPSBNYXRjaCBhbnl0aGluZ1xuICAgICAgICkgID0gQ2xvc2UgY2FwdHVyaW5nIGdyb3VwXG5cdCBcXCkgID0gTWF0Y2ggYSBjbG9zZSBwYXJlbnNcblxuXHQgL2dpICA9IEdldCBhbGwgbWF0Y2hlcywgbm90IHRoZSBmaXJzdC4gIEJlIGNhc2UgaW5zZW5zaXRpdmUuXG5cdCAqL1xuXHR2YXIgZml4ZWRDc3MgPSBjc3MucmVwbGFjZSgvdXJsXFxzKlxcKCgoPzpbXikoXXxcXCgoPzpbXikoXSt8XFwoW14pKF0qXFwpKSpcXCkpKilcXCkvZ2ksIGZ1bmN0aW9uKGZ1bGxNYXRjaCwgb3JpZ1VybCkge1xuXHRcdC8vIHN0cmlwIHF1b3RlcyAoaWYgdGhleSBleGlzdClcblx0XHR2YXIgdW5xdW90ZWRPcmlnVXJsID0gb3JpZ1VybFxuXHRcdFx0LnRyaW0oKVxuXHRcdFx0LnJlcGxhY2UoL15cIiguKilcIiQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSlcblx0XHRcdC5yZXBsYWNlKC9eJyguKiknJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KTtcblxuXHRcdC8vIGFscmVhZHkgYSBmdWxsIHVybD8gbm8gY2hhbmdlXG5cdFx0aWYgKC9eKCN8ZGF0YTp8aHR0cDpcXC9cXC98aHR0cHM6XFwvXFwvfGZpbGU6XFwvXFwvXFwvfFxccyokKS9pLnRlc3QodW5xdW90ZWRPcmlnVXJsKSkge1xuXHRcdCAgcmV0dXJuIGZ1bGxNYXRjaDtcblx0XHR9XG5cblx0XHQvLyBjb252ZXJ0IHRoZSB1cmwgdG8gYSBmdWxsIHVybFxuXHRcdHZhciBuZXdVcmw7XG5cblx0XHRpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvL1wiKSA9PT0gMCkge1xuXHRcdCAgXHQvL1RPRE86IHNob3VsZCB3ZSBhZGQgcHJvdG9jb2w/XG5cdFx0XHRuZXdVcmwgPSB1bnF1b3RlZE9yaWdVcmw7XG5cdFx0fSBlbHNlIGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi9cIikgPT09IDApIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIHRoZSBiYXNlIHVybFxuXHRcdFx0bmV3VXJsID0gYmFzZVVybCArIHVucXVvdGVkT3JpZ1VybDsgLy8gYWxyZWFkeSBzdGFydHMgd2l0aCAnLydcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gY3VycmVudCBkaXJlY3Rvcnlcblx0XHRcdG5ld1VybCA9IGN1cnJlbnREaXIgKyB1bnF1b3RlZE9yaWdVcmwucmVwbGFjZSgvXlxcLlxcLy8sIFwiXCIpOyAvLyBTdHJpcCBsZWFkaW5nICcuLydcblx0XHR9XG5cblx0XHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIHVybCguLi4pXG5cdFx0cmV0dXJuIFwidXJsKFwiICsgSlNPTi5zdHJpbmdpZnkobmV3VXJsKSArIFwiKVwiO1xuXHR9KTtcblxuXHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIGNzc1xuXHRyZXR1cm4gZml4ZWRDc3M7XG59O1xuIiwiICBjb25zdCBNT05USE5BTUVTID0gWyAnSmFudWFyeScsICdGZWJydWFyeScsICdNYXJjaCcsICdBcHJpbCcsICdNYXknLCAnSnVuZScsICdKdWx5JywgJ0F1Z3VzdCcsICdTZXB0ZW1iZXInLCAnT2N0b2JlcicsICdOb3ZlbWJlcicsICAnRGVjZW1iZXInXVxyXG4gIGNvbnN0IERBWU5BTUVTID0gWyAnU3VuZGF5JywgJ01vbmRheScsICdUdWVzZGF5JywgJ1dlZG5lc2RheScsICdUaHJ1c2RheScsICdGcmlkYXknLCAgJ1NhdHVyZGF5JyBdXHJcblxyXG4gIHZhciBDYUNhbGVuZGFyID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIGxldCBvcHRpb25zID0ge1xyXG4gICAgICBpZDogJ2NhbGVuZGFyJyxcclxuICAgICAgZGF0ZTogJydcclxuICAgIH1cclxuXHJcbiAgICBsZXQgeWVhciA9IDBcclxuICAgIGxldCBtb250aCA9IDBcclxuICAgIGxldCBkYXRlID0gMFxyXG5cclxuICAgIGxldCBEZWZhdWx0RGF0ZSA9IG51bGxcclxuICAgIGxldCBkYXlzUGVyTW9udGggPSBbXVxyXG5cclxuICAgIGxldCBjb250ZW50cyA9IFtdXHJcblxyXG4gICAgbGV0IGVsZW1lbnRzID0ge1xyXG4gICAgICBjYWxlbmRhcjogbnVsbCxcclxuICAgICAgY2FsZW5kYXJUaXRsZTogbnVsbCxcclxuICAgICAgY2FsZW5kYXJCb2R5OiBudWxsLFxyXG4gICAgICBtb250aFllYXI6IG51bGwsXHJcbiAgICAgIGJ0blByZXZNb250aDogbnVsbCxcclxuICAgICAgYnRuTmV4dE1vbnRoOiBudWxsXHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGV2ZW50cyA9IHtcclxuICAgICAgY2xpY2s6IG51bGxcclxuICAgIH1cclxuXHJcbiAgICBpZiAoYXJndW1lbnRzWzBdICYmIHR5cGVvZiBhcmd1bWVudHNbMF0gPT09ICdvYmplY3QnKSB7XHJcbiAgICAgIGV4dGVuZERlZmF1bHRTZXR0aW5ncyhvcHRpb25zLCBhcmd1bWVudHNbMF0pXHJcbiAgICB9XHJcblxyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywge1xyXG4gICAgICAnb3B0aW9ucyc6IHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zKVxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgJ3llYXInOiB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICByZXR1cm4geWVhclxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsKSB7XHJcbiAgICAgICAgICBkYXlzUGVyTW9udGggPSBzZXREYXlQZXJNb250aCh2YWwpXHJcbiAgICAgICAgICB5ZWFyID0gdmFsXHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICAnbW9udGgnOiB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICByZXR1cm4gbW9udGhcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbCkge1xyXG4gICAgICAgICAgbW9udGggPSB2YWxcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgICdkYXRlJzoge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgcmV0dXJuIGRhdGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbCkge1xyXG4gICAgICAgICAgZGF0ZSA9IHZhbFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgICdjb250ZW50cyc6IHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgIHJldHVybiBjb250ZW50c1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsKSB7XHJcbiAgICAgICAgICBjb250ZW50cyA9IHZhbFxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgJ2VsZW1lbnRzJzoge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIGVsZW1lbnRzKVxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgJ2RheXNQZXJNb250aCc6IHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgIHJldHVybiBkYXlzUGVyTW9udGguY29uY2F0KClcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgICdldmVudHMnOiB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICByZXR1cm4gZXZlbnRzXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgIGluaXQuY2FsbCh0aGlzLCBlbGVtZW50cylcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGluaXQgKGVsZW1lbnRzKSB7XHJcbiAgICBsZXQgb2JqRGF0ZSA9IHNldERlZmF1bHREYXRlKHRoaXMub3B0aW9ucylcclxuICAgIHRoaXMubW9udGggPSBvYmpEYXRlLm1vbnRoXHJcbiAgICB0aGlzLmRhdGUgPSBvYmpEYXRlLmRhdGVcclxuICAgIHRoaXMueWVhciA9IG9iakRhdGUueWVhclxyXG4gICAgXHJcbiAgICBsZXQgb2JqRWxlID0gY3JlYXRlQ2FsZW5kYXJMYXlvdXQoKVxyXG4gICAgZWxlbWVudHMuY2FsZW5kYXIgPSBvYmpFbGUuY2FsZW5kYXJcclxuICAgIGVsZW1lbnRzLmNhbGVuZGFyVGl0bGUgPSBvYmpFbGUuY2FsZW5kYXJUaXRsZVxyXG4gICAgZWxlbWVudHMuY2FsZW5kYXJCb2R5ID0gb2JqRWxlLmNhbGVuZGFyQm9keVxyXG4gICAgZWxlbWVudHMubW9udGhZZWFyID0gb2JqRWxlLm1vbnRoWWVhclxyXG4gICAgZWxlbWVudHMuYnRuUHJldk1vbnRoID0gb2JqRWxlLmJ0blByZXZNb250aFxyXG4gICAgZWxlbWVudHMuYnRuTmV4dE1vbnRoID0gb2JqRWxlLmJ0bk5leHRNb250aFxyXG5cclxuICAgIHNldERlZmF1bHRFdmVudHMuY2FsbCh0aGlzKVxyXG4gIH1cclxuXHJcblxyXG4gIGZ1bmN0aW9uIHNldERlZmF1bHREYXRlIChvcHRpb25zKSB7XHJcbiAgICBsZXQgRGVmYXVsdERhdGUsXHJcbiAgICAgICAgbW9udGgsXHJcbiAgICAgICAgZGF0ZSxcclxuICAgICAgICB5ZWFyLFxyXG4gICAgICAgIGRheXNQZXJNb250aFxyXG5cclxuICAgIERlZmF1bHREYXRlID0gZ2V0RGVmYXVsdERhdGUob3B0aW9ucy5kYXRlKVxyXG4gICAgbW9udGggPSBEZWZhdWx0RGF0ZS5nZXRNb250aCgpXHJcbiAgICBkYXRlID0gRGVmYXVsdERhdGUuZ2V0RGF0ZSgpXHJcbiAgICB5ZWFyID0gRGVmYXVsdERhdGUuZ2V0RnVsbFllYXIoKVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIG1vbnRoOiBtb250aCxcclxuICAgICAgZGF0ZTogZGF0ZSxcclxuICAgICAgeWVhcjogeWVhclxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gc2V0RGVmYXVsdEV2ZW50cyAoKSB7XHJcbiAgICB0aGlzLmVsZW1lbnRzLmJ0blByZXZNb250aC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgdGhpcy5wcmV2aW91c01vbnRoKClcclxuICAgIH0pXHJcblxyXG4gICAgdGhpcy5lbGVtZW50cy5idG5OZXh0TW9udGguYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIHRoaXMubmV4dE1vbnRoKClcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBleHRlbmREZWZhdWx0U2V0dGluZ3Moc291cmNlLCBwcm9wZXJ0aWVzKSB7XHJcbiAgICBmb3IgKHByb3BlcnR5IGluIHByb3BlcnRpZXMpIHtcclxuICAgICAgaWYgKHNvdXJjZS5oYXNPd25Qcm9wZXJ0eShwcm9wZXJ0eSkpIHtcclxuICAgICAgICBzb3VyY2VbcHJvcGVydHldID0gcHJvcGVydGllc1twcm9wZXJ0eV1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZ2V0RmViTnVtYmVyT2ZEYXlzICh5ZWFyKSB7XHJcbiAgICBpZiAoKHllYXIgJSAxMDAgIT0gMCkgJiYgKHllYXIgJSA0ID09IDApIHx8ICh5ZWFyICUgNDAwID09IDApKSB7XHJcbiAgICAgIHJldHVybiAyOVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIDI4XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBzZXREYXlQZXJNb250aCAoeWVhcikge1xyXG4gICAgcmV0dXJuIFsgMzEsIGdldEZlYk51bWJlck9mRGF5cyh5ZWFyKSwgMzEsIDMwLCAzMSwgMzAsIDMxLCAzMSwgMzAsIDMxLCAzMCwgMzEgXVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZ2V0RGVmYXVsdERhdGUgKGRlZmF1bHREYXRlKSB7XHJcbiAgICByZXR1cm4gZGVmYXVsdERhdGUgPyBuZXcgRGF0ZShkZWZhdWx0RGF0ZSkgOiBuZXcgRGF0ZSgpXHJcbiAgfSBcclxuXHJcbiAgZnVuY3Rpb24gZ2V0RnJpc3REYXlPZlRoZVdlZWsgKG1vbnRoLCB5ZWFyKSB7XHJcbiAgICBsZXQgZmlyc3REYXRlID0gbmV3IERhdGUoTU9OVEhOQU1FU1ttb250aF0gKyAnIDEsICcgKyB5ZWFyKVxyXG4gICAgbGV0IGZpcnN0RGF5T2ZUaGVXZWVrID0gZmlyc3REYXRlLmdldERheSgpXHJcbiAgICByZXR1cm4gZmlyc3REYXlPZlRoZVdlZWtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGNyZWF0ZUNhbGVuZGFyTGF5b3V0ICgpIHtcclxuICAgIGxldCBjYWxlbmRhcixcclxuICAgICAgICBjYWxlbmRhckJvZHksXHJcbiAgICAgICAgdGhlYWQsXHJcbiAgICAgICAgY2FsZW5kYXJUaXRsZSxcclxuICAgICAgICB0ckRheU5hbWVzLFxyXG4gICAgICAgIG1vbnRoWWVhcixcclxuICAgICAgICB0ckNhbGVuZGFyVGl0bGUsXHJcbiAgICAgICAgYnRuUHJldk1vbnRoLFxyXG4gICAgICAgIGJ0bk5leHRNb250aFxyXG5cclxuICAgIGNhbGVuZGFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGFibGUnKVxyXG4gICAgY2FsZW5kYXIuY2xhc3NOYW1lID0gJ2NhYy1jYWxlbmRhcidcclxuXHJcbiAgICB0aGVhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RoZWFkJylcclxuICAgIGNhbGVuZGFyQm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3Rib2R5JylcclxuXHJcbiAgICB0ckNhbGVuZGFyVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpXHJcbiAgICBjYWxlbmRhclRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGgnKVxyXG4gICAgY2FsZW5kYXJUaXRsZS5zZXRBdHRyaWJ1dGUoJ2NvbHNwYW4nLCAnNycpXHJcbiAgICBjYWxlbmRhclRpdGxlLmNsYXNzTmFtZSA9ICdjYWMtY2FsZW5kYXItdGl0bGUnXHJcblxyXG4gICAgdHJEYXlOYW1lcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJylcclxuICAgIHRyRGF5TmFtZXMuY2xhc3NOYW1lID0gJ2NhYy1kYXktbmFtZXMnXHJcblxyXG4gICAgZm9yIChsZXQgZGF5TmFtZSBvZiBEQVlOQU1FUykge1xyXG4gICAgICBsZXQgdGhEYXlOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGgnKVxyXG4gICAgICB0aERheU5hbWUuaW5uZXJIVE1MID0gZGF5TmFtZVxyXG4gICAgICB0ckRheU5hbWVzLmFwcGVuZENoaWxkKHRoRGF5TmFtZSlcclxuICAgIH1cclxuXHJcbiAgICBtb250aFllYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgbW9udGhZZWFyLmNsYXNzTmFtZSA9ICdjYWMtbW9udGhZZWFyJ1xyXG5cclxuICAgIGJ0blByZXZNb250aCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBidG5QcmV2TW9udGguYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJzwnKSlcclxuICAgIGJ0blByZXZNb250aC5jbGFzc05hbWUgPSAnY2FjLWJ0bi1wcmV2TW9udGgnXHJcblxyXG4gICAgYnRuTmV4dE1vbnRoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIGJ0bk5leHRNb250aC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnPicpKVxyXG4gICAgYnRuTmV4dE1vbnRoLmNsYXNzTmFtZSA9ICdjYWMtYnRuLW5leHRNb250aCdcclxuXHJcbiAgICBjYWxlbmRhclRpdGxlLmFwcGVuZENoaWxkKGJ0blByZXZNb250aClcclxuICAgIGNhbGVuZGFyVGl0bGUuYXBwZW5kQ2hpbGQobW9udGhZZWFyKVxyXG4gICAgY2FsZW5kYXJUaXRsZS5hcHBlbmRDaGlsZChidG5OZXh0TW9udGgpXHJcblxyXG4gICAgdHJDYWxlbmRhclRpdGxlLmFwcGVuZENoaWxkKGNhbGVuZGFyVGl0bGUpXHJcbiAgICB0aGVhZC5hcHBlbmRDaGlsZCh0ckNhbGVuZGFyVGl0bGUpXHJcbiAgICB0aGVhZC5hcHBlbmRDaGlsZCh0ckRheU5hbWVzKVxyXG4gICAgY2FsZW5kYXIuYXBwZW5kQ2hpbGQodGhlYWQpXHJcbiAgICBjYWxlbmRhci5hcHBlbmRDaGlsZChjYWxlbmRhckJvZHkpXHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgY2FsZW5kYXI6IGNhbGVuZGFyLFxyXG4gICAgICBjYWxlbmRhclRpdGxlOiBjYWxlbmRhclRpdGxlLFxyXG4gICAgICBjYWxlbmRhckJvZHk6IGNhbGVuZGFyQm9keSxcclxuICAgICAgbW9udGhZZWFyOiBtb250aFllYXIsXHJcbiAgICAgIGJ0blByZXZNb250aDogYnRuUHJldk1vbnRoLFxyXG4gICAgICBidG5OZXh0TW9udGg6IGJ0bk5leHRNb250aFxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gY3JlYXRlQ2FsZW5kYXJCb2R5IChtb250aCwgZGF0ZSwgeWVhciwgZGF5c1Blck1vbnRoLCBjb250ZW50cykge1xyXG4gICAgY29uc3QgVE9UQUxEQVRFQk9YUyA9IDQyXHJcblxyXG4gICAgbGV0IGJveENvdW50ZXIgPSAwXHJcbiAgICBsZXQgZGF0ZUNvdW50ZXIgPSAxXHJcbiAgICBsZXQgZmlyc3REYXlPZlRoZVdlZWsgPSBnZXRGcmlzdERheU9mVGhlV2Vlayhtb250aCwgeWVhcilcclxuICAgIGxldCBmaXJzdERheU9mVGhlV2VlazIgPSBmaXJzdERheU9mVGhlV2Vla1xyXG4gICAgbGV0IGNhbGVuZGFyQ29udGVudCA9IGBgXHJcblxyXG4gICAgY2FsZW5kYXJDb250ZW50ICs9IGBcclxuICAgICAgICA8dHI+XHJcbiAgICBgIFxyXG4gICAgd2hpbGUgKGZpcnN0RGF5T2ZUaGVXZWVrID4gMCl7ICBcclxuICAgICAgICBjYWxlbmRhckNvbnRlbnQgKz0gYFxyXG4gICAgICAgICAgPHRkIGNsYXNzPVwiY2FjLWRhdGUgY2FjLWRhdGUtZW1wdHlcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhYy1kYXRlLWJveFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYWMtZGF0ZS10ZXh0XCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhYy1kYXRlLWNvbnRlbnRcIj48L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L3RkPlxyXG4gICAgICAgIGBcclxuICAgICAgICBmaXJzdERheU9mVGhlV2Vlay0tXHJcbiAgICAgICAgYm94Q291bnRlcisrXHJcbiAgICB9XHJcblxyXG4gICAgd2hpbGUgKGRhdGVDb3VudGVyIDw9IChUT1RBTERBVEVCT1hTIC0gYm94Q291bnRlcikpe1xyXG4gICAgICBpZiAoZmlyc3REYXlPZlRoZVdlZWsyID4gNikge1xyXG4gICAgICAgIGZpcnN0RGF5T2ZUaGVXZWVrMiA9IDBcclxuICAgICAgICBjYWxlbmRhckNvbnRlbnQgKz0gYDwvdHI+PHRyPmBcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGRhdGVDb3VudGVyIDw9IGRheXNQZXJNb250aFttb250aF0pIHsgXHJcbiAgICAgICAgaWYgKGRhdGVDb3VudGVyID09PSBkYXRlKSB7XHJcbiAgICAgICAgICBjYWxlbmRhckNvbnRlbnQgKz0gYFxyXG4gICAgICAgICAgICA8dGQgY2xhc3M9XCJjYWMtZGF0ZS10b2RheSBjYWMtZGF0ZVwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYWMtZGF0ZS1ib3hcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYWMtZGF0ZS10ZXh0XCI+JHtkYXRlQ291bnRlcn08L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYWMtZGF0ZS1jb250ZW50XCI+YFxyXG5cclxuICAgICAgICAgIGZvciAobGV0IGluZGV4IGluIGNvbnRlbnRzKSB7XHJcbiAgICAgICAgICAgIGlmIChuZXcgRGF0ZSh5ZWFyLCBtb250aCwgZGF0ZSkuZ2V0VGltZSgpID09IG5ldyBEYXRlKGNvbnRlbnRzW2luZGV4XS5kYXRlKS5nZXRUaW1lKCkpIHtcclxuICAgICAgICAgICAgICBpZiAoY29udGVudHNbaW5kZXhdLml0ZW1zKSB7XHJcbiAgICAgICAgICAgICAgICBjYWxlbmRhckNvbnRlbnQgKz0gYDx1bCBjbGFzcz1cImNhYy1saXN0XCI+YFxyXG4gICAgICAgICAgICAgICAgY29udGVudHNbaW5kZXhdLml0ZW1zLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGNhbGVuZGFyQ29udGVudCArPSBgXHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwiY2FjLWxpc3QtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhYy1saXN0LWl0ZW0tbGFiZWxcIj4ke2l0ZW0ubGFiZWx9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FjLWxpc3QtaXRlbS12YWx1ZVwiPiR7aXRlbS52YWx1ZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICBgXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgY2FsZW5kYXJDb250ZW50ICs9IGA8L3VsPmBcclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgY2FsZW5kYXJDb250ZW50ICs9IGA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC90ZD5gXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGNhbGVuZGFyQ29udGVudCArPWBcclxuICAgICAgICAgIDx0ZCBjbGFzcz1cImNhYy1kYXRlXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYWMtZGF0ZS1ib3hcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FjLWRhdGUtdGV4dFwiPiR7ZGF0ZUNvdW50ZXJ9PC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhYy1kYXRlLWNvbnRlbnRcIj5gXHJcblxyXG4gICAgICAgICAgZm9yIChsZXQgaW5kZXggaW4gY29udGVudHMpIHtcclxuICAgICAgICAgICAgaWYgKG5ldyBEYXRlKHllYXIsIG1vbnRoLCBkYXRlQ291bnRlcikuZ2V0VGltZSgpID09IG5ldyBEYXRlKGNvbnRlbnRzW2luZGV4XS5kYXRlKS5nZXRUaW1lKCkpIHtcclxuICAgICAgICAgICAgICBpZiAoY29udGVudHNbaW5kZXhdLml0ZW1zKSB7XHJcbiAgICAgICAgICAgICAgICBjYWxlbmRhckNvbnRlbnQgKz0gYDx1bCBjbGFzcz1cImNhYy1saXN0XCI+YFxyXG4gICAgICAgICAgICAgICAgY29udGVudHNbaW5kZXhdLml0ZW1zLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGNhbGVuZGFyQ29udGVudCArPSBgXHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwiY2FjLWxpc3QtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhYy1saXN0LWl0ZW0tbGFiZWxcIj4ke2l0ZW0ubGFiZWx9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FjLWxpc3QtaXRlbS12YWx1ZVwiPiR7aXRlbS52YWx1ZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICBgXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgY2FsZW5kYXJDb250ZW50ICs9IGA8L3VsPmBcclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBjYWxlbmRhckNvbnRlbnQgKz0gYDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvdGQ+YFxyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGNhbGVuZGFyQ29udGVudCArPSBgXHJcbiAgICAgICAgICAgIDx0ZCBjbGFzcz1cImNhYy1kYXRlIGNhYy1kYXRlLWVtcHR5XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhYy1kYXRlLWJveFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhYy1kYXRlLXRleHRcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYWMtZGF0ZS1jb250ZW50XCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvdGQ+YFxyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICBmaXJzdERheU9mVGhlV2VlazIrK1xyXG4gICAgICBkYXRlQ291bnRlcisrXHJcbiAgICB9XHJcblxyXG4gICAgY2FsZW5kYXJDb250ZW50ICs9IGBcclxuICAgICAgICA8L3RyPlxyXG4gICAgYFxyXG4gICAgcmV0dXJuIGNhbGVuZGFyQ29udGVudFxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZXZlbnRTZXR0ZXIgKCkge1xyXG4gICAgaWYgKHRoaXMuZXZlbnRzLmNsaWNrKSB7XHJcbiAgICAgIGV2ZW50Q2xpY2suY2FsbCh0aGlzLCB0aGlzLmV2ZW50cy5jbGljaylcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGV2ZW50Q2xpY2sgKGhhbmRsZXIpIHtcclxuICAgIGxldCBkYXRlQm94cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYWMtZGF0ZScpXHJcblxyXG4gICAgZm9yIChsZXQgYm94IG9mIGRhdGVCb3hzKSB7XHJcbiAgICAgIGxldCBmdWxsRGF0ZSA9IHtcclxuICAgICAgICBzdGFuZGFyZDogJycsXHJcbiAgICAgICAgZm9ybWF0dGVkOiAnJ1xyXG4gICAgICB9XHJcblxyXG4gICAgICBsZXQgZGF0ZSA9IGJveC5xdWVyeVNlbGVjdG9yKCcuY2FjLWRhdGUtdGV4dCcpLmlubmVySFRNTFxyXG5cclxuICAgICAgaWYgKGRhdGUpIHtcclxuICAgICAgICBmdWxsRGF0ZS5zdGFuZGFyZCA9IGAke3RoaXMueWVhcn0tJHt0d29EaWdpdE1vbnRoKHRoaXMubW9udGgpfS0ke3R3b0RpZ2l0RGF0ZShkYXRlKX1gXHJcbiAgICAgICAgZnVsbERhdGUuZm9ybWF0dGVkID0gYCR7dHdvRGlnaXRNb250aCh0aGlzLm1vbnRoKX0vJHt0d29EaWdpdERhdGUoZGF0ZSl9LyR7dGhpcy55ZWFyfWBcclxuICAgICAgfVxyXG5cclxuICAgICAgYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBoYW5kbGVyKGUsIGZ1bGxEYXRlKVxyXG4gICAgICB9KSAgXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiB0d29EaWdpdERhdGUgKGRhdGUpIHtcclxuICAgIHJldHVybiAoJzAnICsgZGF0ZSkuc2xpY2UoLTIpXHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiB0d29EaWdpdE1vbnRoIChtb250aCkge1xyXG4gICAgcmV0dXJuICgnMCcgKyAobW9udGggKyAxKSkuc2xpY2UoLTIpXHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiByZW5kZXIgKCkge1xyXG4gICAgdGhpcy5lbGVtZW50cy5tb250aFllYXIuaW5uZXJIVE1MID0gYFxyXG4gICAgICA8ZGl2PiR7dGhpcy55ZWFyfTwvZGl2PlxyXG4gICAgICA8ZGl2PiR7TU9OVEhOQU1FU1t0aGlzLm1vbnRoXX08L2Rpdj5cclxuICAgIGBcclxuICAgIHRoaXMuZWxlbWVudHMuY2FsZW5kYXJCb2R5LmlubmVySFRNTCA9IGNyZWF0ZUNhbGVuZGFyQm9keSh0aGlzLm1vbnRoLCB0aGlzLmRhdGUsIHRoaXMueWVhciwgdGhpcy5kYXlzUGVyTW9udGgsIHRoaXMuY29udGVudHMpXHJcbiAgICBldmVudFNldHRlci5jYWxsKHRoaXMpXHJcbiAgfVxyXG5cclxuICBDYUNhbGVuZGFyLnByb3RvdHlwZS5wcmludCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHJlbmRlci5jYWxsKHRoaXMpXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLm9wdGlvbnMuaWQpLmFwcGVuZENoaWxkKHRoaXMuZWxlbWVudHMuY2FsZW5kYXIpXHJcbiAgfVxyXG5cclxuICBDYUNhbGVuZGFyLnByb3RvdHlwZS50b2RheSA9IGZ1bmN0aW9uICgpIHsgIFxyXG4gICAgbGV0IHRvZGF5ID0gbmV3IERhdGUoKVxyXG4gICAgdGhpcy5tb250aCA9IHRvZGF5LmdldE1vbnRoKClcclxuICAgIHRoaXMuZGF0ZSA9IHRvZGF5LmdldERhdGUoKVxyXG4gICAgdGhpcy55ZWFyID0gdG9kYXkuZ2V0RnVsbFllYXIoKVxyXG4gICAgcmVuZGVyLmNhbGwodGhpcylcclxuICB9XHJcblxyXG4gIENhQ2FsZW5kYXIucHJvdG90eXBlLmRlZmF1bHREYXRlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgbGV0IERhdGVWYWx1ZSA9IGdldERlZmF1bHREYXRlKHRoaXMub3B0aW9ucy5kYXRlKVxyXG4gICAgdGhpcy5tb250aCA9IERhdGVWYWx1ZS5nZXRNb250aCgpXHJcbiAgICB0aGlzLmRhdGUgPSBEYXRlVmFsdWUuZ2V0RGF0ZSgpXHJcbiAgICB0aGlzLnllYXIgPSBEYXRlVmFsdWUuZ2V0RnVsbFllYXIoKVxyXG4gICAgcmVuZGVyLmNhbGwodGhpcylcclxuICB9XHJcblxyXG4gIENhQ2FsZW5kYXIucHJvdG90eXBlLm5leHRZZWFyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdGhpcy55ZWFyID0gdGhpcy55ZWFyICsgMVxyXG4gICAgcmVuZGVyLmNhbGwodGhpcylcclxuICB9XHJcblxyXG4gIENhQ2FsZW5kYXIucHJvdG90eXBlLnByZXZpb3VzWWVhciA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHRoaXMueWVhciA9IHRoaXMueWVhciAtIDFcclxuICAgIHJlbmRlci5jYWxsKHRoaXMpXHJcbiAgfVxyXG5cclxuICBDYUNhbGVuZGFyLnByb3RvdHlwZS5uZXh0TW9udGggPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB0aGlzLm1vbnRoID0gdGhpcy5tb250aCArIDFcclxuICAgIGlmICh0aGlzLm1vbnRoID4gMTEpIHtcclxuICAgICAgdGhpcy55ZWFyID0gdGhpcy55ZWFyICsgMVxyXG4gICAgICB0aGlzLm1vbnRoID0gMFxyXG4gICAgfVxyXG4gICAgcmVuZGVyLmNhbGwodGhpcylcclxuICB9XHJcblxyXG4gIENhQ2FsZW5kYXIucHJvdG90eXBlLnByZXZpb3VzTW9udGggPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB0aGlzLm1vbnRoID0gdGhpcy5tb250aCAtIDFcclxuICAgIGlmICh0aGlzLm1vbnRoIDwgMCkge1xyXG4gICAgICB0aGlzLnllYXIgPSB0aGlzLnllYXIgLSAxXHJcbiAgICAgIHRoaXMubW9udGggPSAxMVxyXG4gICAgfVxyXG4gICAgcmVuZGVyLmNhbGwodGhpcylcclxuICB9XHJcblxyXG4gIENhQ2FsZW5kYXIucHJvdG90eXBlLnNldENvbnRlbnRzID0gZnVuY3Rpb24gKHZhbENvbnRlbnRzKSB7XHJcbiAgICB0aGlzLmNvbnRlbnRzID0gdmFsQ29udGVudHNcclxuICAgIHJlbmRlci5jYWxsKHRoaXMpXHJcbiAgfVxyXG5cclxuICBDYUNhbGVuZGFyLnByb3RvdHlwZS5jbGljayA9IGZ1bmN0aW9uIChoYW5kbGVyKSB7XHJcbiAgICB0aGlzLmV2ZW50cy5jbGljayA9IGhhbmRsZXJcclxuICAgIHJlbmRlci5jYWxsKHRoaXMpXHJcbiAgfVxyXG5cclxuICBleHBvcnQgZGVmYXVsdCBDYUNhbGVuZGFyIiwiaW1wb3J0IENhQ2FsZW5kYXIgZnJvbSAnLi9jYS1jYWxlbmRhci5qcydcclxuaW1wb3J0ICcuL3Njc3MvY2EtY2FsZW5kYXIuc2NzcydcclxuXHJcbndpbmRvdy5DYUNhbGVuZGFyID0gQ2FDYWxlbmRhciIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL2NhLWNhbGVuZGFyLnNjc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vY2EtY2FsZW5kYXIuc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vY2EtY2FsZW5kYXIuc2Nzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSJdLCJzb3VyY2VSb290IjoiIn0=