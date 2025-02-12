/*!
 * Vue Thailand Address v3.3.0
 * Created by Saran Tanpituckpong
 * Released under the MIT License.
 * 
 * Address database from jquery.Thailand.js by Thanarat Kuawattanaphan
 */
window["VueThailandAddress"] =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		1: 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonpVueThailandAddress"] = window["webpackJsonpVueThailandAddress"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([7,0]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

(function() { module.exports = window["Vue"]; }());

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

const array = [];
const charCodeCache = [];

const leven = (left, right) => {
	if (left === right) {
		return 0;
	}

	const swap = left;

	// Swapping the strings if `a` is longer than `b` so we know which one is the
	// shortest & which one is the longest
	if (left.length > right.length) {
		left = right;
		right = swap;
	}

	let leftLength = left.length;
	let rightLength = right.length;

	// Performing suffix trimming:
	// We can linearly drop suffix common to both strings since they
	// don't increase distance at all
	// Note: `~-` is the bitwise way to perform a `- 1` operation
	while (leftLength > 0 && (left.charCodeAt(~-leftLength) === right.charCodeAt(~-rightLength))) {
		leftLength--;
		rightLength--;
	}

	// Performing prefix trimming
	// We can linearly drop prefix common to both strings since they
	// don't increase distance at all
	let start = 0;

	while (start < leftLength && (left.charCodeAt(start) === right.charCodeAt(start))) {
		start++;
	}

	leftLength -= start;
	rightLength -= start;

	if (leftLength === 0) {
		return rightLength;
	}

	let bCharCode;
	let result;
	let temp;
	let temp2;
	let i = 0;
	let j = 0;

	while (i < leftLength) {
		charCodeCache[i] = left.charCodeAt(start + i);
		array[i] = ++i;
	}

	while (j < rightLength) {
		bCharCode = right.charCodeAt(start + j);
		temp = j++;
		result = j;

		for (i = 0; i < leftLength; i++) {
			temp2 = bCharCode === charCodeCache[i] ? temp : temp + 1;
			temp = array[i];
			// eslint-disable-next-line no-multi-assign
			result = array[i] = temp > result ? temp2 > result ? result + 1 : temp2 : temp2 > temp ? temp + 1 : temp2;
		}
	}

	return result;
};

module.exports = leven;
// TODO: Remove this for the next major release
module.exports.default = leven;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0,
    MAX_SAFE_INTEGER = 9007199254740991;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    symbolTag = '[object Symbol]';

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array ? array.length : 0,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Built-in value references. */
var Symbol = root.Symbol,
    propertyIsEnumerable = objectProto.propertyIsEnumerable,
    spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * The base implementation of `_.flatten` with support for restricting flattening.
 *
 * @private
 * @param {Array} array The array to flatten.
 * @param {number} depth The maximum recursion depth.
 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
 * @param {Array} [result=[]] The initial result value.
 * @returns {Array} Returns the new flattened array.
 */
function baseFlatten(array, depth, predicate, isStrict, result) {
  var index = -1,
      length = array.length;

  predicate || (predicate = isFlattenable);
  result || (result = []);

  while (++index < length) {
    var value = array[index];
    if (depth > 0 && predicate(value)) {
      if (depth > 1) {
        // Recursively flatten arrays (susceptible to call stack limits).
        baseFlatten(value, depth - 1, predicate, isStrict, result);
      } else {
        arrayPush(result, value);
      }
    } else if (!isStrict) {
      result[result.length] = value;
    }
  }
  return result;
}

/**
 * The base implementation of `_.pick` without support for individual
 * property identifiers.
 *
 * @private
 * @param {Object} object The source object.
 * @param {string[]} props The property identifiers to pick.
 * @returns {Object} Returns the new object.
 */
function basePick(object, props) {
  object = Object(object);
  return basePickBy(object, props, function(value, key) {
    return key in object;
  });
}

/**
 * The base implementation of  `_.pickBy` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The source object.
 * @param {string[]} props The property identifiers to pick from.
 * @param {Function} predicate The function invoked per property.
 * @returns {Object} Returns the new object.
 */
function basePickBy(object, props, predicate) {
  var index = -1,
      length = props.length,
      result = {};

  while (++index < length) {
    var key = props[index],
        value = object[key];

    if (predicate(value, key)) {
      result[key] = value;
    }
  }
  return result;
}

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = array;
    return apply(func, this, otherArgs);
  };
}

/**
 * Checks if `value` is a flattenable `arguments` object or array.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
 */
function isFlattenable(value) {
  return isArray(value) || isArguments(value) ||
    !!(spreadableSymbol && value && value[spreadableSymbol]);
}

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
function isArguments(value) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
}

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Creates an object composed of the picked `object` properties.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The source object.
 * @param {...(string|string[])} [props] The property identifiers to pick.
 * @returns {Object} Returns the new object.
 * @example
 *
 * var object = { 'a': 1, 'b': '2', 'c': 3 };
 *
 * _.pick(object, ['a', 'c']);
 * // => { 'a': 1, 'c': 3 }
 */
var pick = baseRest(function(object, props) {
  return object == null ? {} : basePick(object, arrayMap(baseFlatten(props, 1), toKey));
});

module.exports = pick;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(8)))

/***/ }),
/* 6 */,
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(12);


/***/ }),
/* 8 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_2_node_modules_sass_loader_dist_cjs_js_ref_3_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Autocomplete_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_2_node_modules_sass_loader_dist_cjs_js_ref_3_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Autocomplete_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_2_node_modules_sass_loader_dist_cjs_js_ref_3_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Autocomplete_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_2_node_modules_sass_loader_dist_cjs_js_ref_3_3_node_modules_vue_loader_lib_index_js_vue_loader_options_TypeaheadInput_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_2_node_modules_sass_loader_dist_cjs_js_ref_3_3_node_modules_vue_loader_lib_index_js_vue_loader_options_TypeaheadInput_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_2_node_modules_sass_loader_dist_cjs_js_ref_3_3_node_modules_vue_loader_lib_index_js_vue_loader_options_TypeaheadInput_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_2_node_modules_sass_loader_dist_cjs_js_ref_3_3_node_modules_vue_loader_lib_index_js_vue_loader_options_InputContainer_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_2_node_modules_sass_loader_dist_cjs_js_ref_3_3_node_modules_vue_loader_lib_index_js_vue_loader_options_InputContainer_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_2_node_modules_sass_loader_dist_cjs_js_ref_3_3_node_modules_vue_loader_lib_index_js_vue_loader_options_InputContainer_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "SubDistrictInput", function() { return /* binding */ SubDistrictInput; });
__webpack_require__.d(__webpack_exports__, "DistrictInput", function() { return /* binding */ DistrictInput; });
__webpack_require__.d(__webpack_exports__, "ProvinceInput", function() { return /* binding */ ProvinceInput; });
__webpack_require__.d(__webpack_exports__, "ZipCodeInput", function() { return /* binding */ ZipCodeInput; });
__webpack_require__.d(__webpack_exports__, "DataStore", function() { return /* reexport */ data_DataStore; });
__webpack_require__.d(__webpack_exports__, "defaultStore", function() { return /* reexport */ defaultStore; });

// EXTERNAL MODULE: external "Vue"
var external_Vue_ = __webpack_require__(0);
var external_Vue_default = /*#__PURE__*/__webpack_require__.n(external_Vue_);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader!./node_modules/vue-loader/lib??vue-loader-options!./src/components/TypeaheadInput.vue?vue&type=template&id=ede2a336&lang=pug&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"th-address-container",style:(_vm.containerStyle)},[_c('input',_vm._g(_vm._b({staticClass:"th-address-input",class:_vm.inputClassList,attrs:{"type":_vm.inputType,"autocomplete":"off"},domProps:{"value":_vm.value},on:{"input":function($event){return _vm.search($event.target.value)},"blur":_vm.closeAutocomplete,"keydown":[function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"esc",27,$event.key,["Esc","Escape"])){ return null; }return _vm.clearAutocomplete($event)},function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"up",38,$event.key,["Up","ArrowUp"])){ return null; }$event.preventDefault();return _vm.moveUp($event)},function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"down",40,$event.key,["Down","ArrowDown"])){ return null; }$event.preventDefault();return _vm.moveDown($event)},function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }$event.preventDefault();return _vm.pickCurrentItem($event)}]}},'input',_vm.filteredAttrs,false),_vm.$listeners)),_c('autocomplete',{attrs:{"query":_vm.value,"items":_vm.possibles,"target":_vm.target,"maxHeight":_vm.autocompleteMaxHeight,"itemCount":_vm.autocompleteItemCount,"selectedIndex":_vm.selectedIndex},on:{"update:selectedIndex":function($event){_vm.selectedIndex=$event},"update:selected-index":function($event){_vm.selectedIndex=$event},"itemclick":_vm.commitItem}})],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/TypeaheadInput.vue?vue&type=template&id=ede2a336&lang=pug&

// CONCATENATED MODULE: ./node_modules/vue-class-component/dist/vue-class-component.esm.js
/**
  * vue-class-component v7.2.6
  * (c) 2015-present Evan You
  * @license MIT
  */


function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

// The rational behind the verbose Reflect-feature check below is the fact that there are polyfills
// which add an implementation for Reflect.defineMetadata but not for Reflect.getOwnMetadataKeys.
// Without this check consumers will encounter hard to track down runtime errors.
function reflectionIsSupported() {
  return typeof Reflect !== 'undefined' && Reflect.defineMetadata && Reflect.getOwnMetadataKeys;
}
function copyReflectionMetadata(to, from) {
  forwardMetadata(to, from);
  Object.getOwnPropertyNames(from.prototype).forEach(function (key) {
    forwardMetadata(to.prototype, from.prototype, key);
  });
  Object.getOwnPropertyNames(from).forEach(function (key) {
    forwardMetadata(to, from, key);
  });
}

function forwardMetadata(to, from, propertyKey) {
  var metaKeys = propertyKey ? Reflect.getOwnMetadataKeys(from, propertyKey) : Reflect.getOwnMetadataKeys(from);
  metaKeys.forEach(function (metaKey) {
    var metadata = propertyKey ? Reflect.getOwnMetadata(metaKey, from, propertyKey) : Reflect.getOwnMetadata(metaKey, from);

    if (propertyKey) {
      Reflect.defineMetadata(metaKey, metadata, to, propertyKey);
    } else {
      Reflect.defineMetadata(metaKey, metadata, to);
    }
  });
}

var fakeArray = {
  __proto__: []
};
var hasProto = fakeArray instanceof Array;
function createDecorator(factory) {
  return function (target, key, index) {
    var Ctor = typeof target === 'function' ? target : target.constructor;

    if (!Ctor.__decorators__) {
      Ctor.__decorators__ = [];
    }

    if (typeof index !== 'number') {
      index = undefined;
    }

    Ctor.__decorators__.push(function (options) {
      return factory(options, key, index);
    });
  };
}
function mixins() {
  for (var _len = arguments.length, Ctors = new Array(_len), _key = 0; _key < _len; _key++) {
    Ctors[_key] = arguments[_key];
  }

  return external_Vue_default.a.extend({
    mixins: Ctors
  });
}
function isPrimitive(value) {
  var type = _typeof(value);

  return value == null || type !== 'object' && type !== 'function';
}
function warn(message) {
  if (typeof console !== 'undefined') {
    console.warn('[vue-class-component] ' + message);
  }
}

function collectDataFromConstructor(vm, Component) {
  // override _init to prevent to init as Vue instance
  var originalInit = Component.prototype._init;

  Component.prototype._init = function () {
    var _this = this;

    // proxy to actual vm
    var keys = Object.getOwnPropertyNames(vm); // 2.2.0 compat (props are no longer exposed as self properties)

    if (vm.$options.props) {
      for (var key in vm.$options.props) {
        if (!vm.hasOwnProperty(key)) {
          keys.push(key);
        }
      }
    }

    keys.forEach(function (key) {
      Object.defineProperty(_this, key, {
        get: function get() {
          return vm[key];
        },
        set: function set(value) {
          vm[key] = value;
        },
        configurable: true
      });
    });
  }; // should be acquired class property values


  var data = new Component(); // restore original _init to avoid memory leak (#209)

  Component.prototype._init = originalInit; // create plain data object

  var plainData = {};
  Object.keys(data).forEach(function (key) {
    if (data[key] !== undefined) {
      plainData[key] = data[key];
    }
  });

  if (false) {}

  return plainData;
}

var $internalHooks = ['data', 'beforeCreate', 'created', 'beforeMount', 'mounted', 'beforeDestroy', 'destroyed', 'beforeUpdate', 'updated', 'activated', 'deactivated', 'render', 'errorCaptured', 'serverPrefetch' // 2.6
];
function componentFactory(Component) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  options.name = options.name || Component._componentTag || Component.name; // prototype props.

  var proto = Component.prototype;
  Object.getOwnPropertyNames(proto).forEach(function (key) {
    if (key === 'constructor') {
      return;
    } // hooks


    if ($internalHooks.indexOf(key) > -1) {
      options[key] = proto[key];
      return;
    }

    var descriptor = Object.getOwnPropertyDescriptor(proto, key);

    if (descriptor.value !== void 0) {
      // methods
      if (typeof descriptor.value === 'function') {
        (options.methods || (options.methods = {}))[key] = descriptor.value;
      } else {
        // typescript decorated data
        (options.mixins || (options.mixins = [])).push({
          data: function data() {
            return _defineProperty({}, key, descriptor.value);
          }
        });
      }
    } else if (descriptor.get || descriptor.set) {
      // computed properties
      (options.computed || (options.computed = {}))[key] = {
        get: descriptor.get,
        set: descriptor.set
      };
    }
  });
  (options.mixins || (options.mixins = [])).push({
    data: function data() {
      return collectDataFromConstructor(this, Component);
    }
  }); // decorate options

  var decorators = Component.__decorators__;

  if (decorators) {
    decorators.forEach(function (fn) {
      return fn(options);
    });
    delete Component.__decorators__;
  } // find super


  var superProto = Object.getPrototypeOf(Component.prototype);
  var Super = superProto instanceof external_Vue_default.a ? superProto.constructor : external_Vue_default.a;
  var Extended = Super.extend(options);
  forwardStaticMembers(Extended, Component, Super);

  if (reflectionIsSupported()) {
    copyReflectionMetadata(Extended, Component);
  }

  return Extended;
}
var reservedPropertyNames = [// Unique id
'cid', // Super Vue constructor
'super', // Component options that will be used by the component
'options', 'superOptions', 'extendOptions', 'sealedOptions', // Private assets
'component', 'directive', 'filter'];
var shouldIgnore = {
  prototype: true,
  arguments: true,
  callee: true,
  caller: true
};

function forwardStaticMembers(Extended, Original, Super) {
  // We have to use getOwnPropertyNames since Babel registers methods as non-enumerable
  Object.getOwnPropertyNames(Original).forEach(function (key) {
    // Skip the properties that should not be overwritten
    if (shouldIgnore[key]) {
      return;
    } // Some browsers does not allow reconfigure built-in properties


    var extendedDescriptor = Object.getOwnPropertyDescriptor(Extended, key);

    if (extendedDescriptor && !extendedDescriptor.configurable) {
      return;
    }

    var descriptor = Object.getOwnPropertyDescriptor(Original, key); // If the user agent does not support `__proto__` or its family (IE <= 10),
    // the sub class properties may be inherited properties from the super class in TypeScript.
    // We need to exclude such properties to prevent to overwrite
    // the component options object which stored on the extended constructor (See #192).
    // If the value is a referenced value (object or function),
    // we can check equality of them and exclude it if they have the same reference.
    // If it is a primitive value, it will be forwarded for safety.

    if (!hasProto) {
      // Only `cid` is explicitly exluded from property forwarding
      // because we cannot detect whether it is a inherited property or not
      // on the no `__proto__` environment even though the property is reserved.
      if (key === 'cid') {
        return;
      }

      var superDescriptor = Object.getOwnPropertyDescriptor(Super, key);

      if (!isPrimitive(descriptor.value) && superDescriptor && superDescriptor.value === descriptor.value) {
        return;
      }
    } // Warn if the users manually declare reserved properties


    if (false) {}

    Object.defineProperty(Extended, key, descriptor);
  });
}

function vue_class_component_esm_Component(options) {
  if (typeof options === 'function') {
    return componentFactory(options);
  }

  return function (Component) {
    return componentFactory(Component, options);
  };
}

vue_class_component_esm_Component.registerHooks = function registerHooks(keys) {
  $internalHooks.push.apply($internalHooks, _toConsumableArray(keys));
};

/* harmony default export */ var vue_class_component_esm = (vue_class_component_esm_Component);


// CONCATENATED MODULE: ./node_modules/vue-property-decorator/lib/decorators/Emit.js
var __spreadArrays = (undefined && undefined.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
// Code copied from Vue/src/shared/util.js
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = function (str) { return str.replace(hyphenateRE, '-$1').toLowerCase(); };
/**
 * decorator of an event-emitter function
 * @param  event The name of the event
 * @return MethodDecorator
 */
function Emit(event) {
    return function (_target, propertyKey, descriptor) {
        var key = hyphenate(propertyKey);
        var original = descriptor.value;
        descriptor.value = function emitter() {
            var _this = this;
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var emit = function (returnValue) {
                var emitName = event || key;
                if (returnValue === undefined) {
                    if (args.length === 0) {
                        _this.$emit(emitName);
                    }
                    else if (args.length === 1) {
                        _this.$emit(emitName, args[0]);
                    }
                    else {
                        _this.$emit.apply(_this, __spreadArrays([emitName], args));
                    }
                }
                else {
                    args.unshift(returnValue);
                    _this.$emit.apply(_this, __spreadArrays([emitName], args));
                }
            };
            var returnValue = original.apply(this, args);
            if (isPromise(returnValue)) {
                returnValue.then(emit);
            }
            else {
                emit(returnValue);
            }
            return returnValue;
        };
    };
}
function isPromise(obj) {
    return obj instanceof Promise || (obj && typeof obj.then === 'function');
}

// CONCATENATED MODULE: ./node_modules/vue-property-decorator/lib/decorators/Inject.js

/**
 * decorator of an inject
 * @param from key
 * @return PropertyDecorator
 */
function Inject(options) {
    return createDecorator(function (componentOptions, key) {
        if (typeof componentOptions.inject === 'undefined') {
            componentOptions.inject = {};
        }
        if (!Array.isArray(componentOptions.inject)) {
            componentOptions.inject[key] = options || key;
        }
    });
}

// CONCATENATED MODULE: ./node_modules/vue-property-decorator/lib/helpers/provideInject.js
function needToProduceProvide(original) {
    return (typeof original !== 'function' ||
        (!original.managed && !original.managedReactive));
}
function produceProvide(original) {
    var provide = function () {
        var _this = this;
        var rv = typeof original === 'function' ? original.call(this) : original;
        rv = Object.create(rv || null);
        // set reactive services (propagates previous services if necessary)
        rv[reactiveInjectKey] = Object.create(this[reactiveInjectKey] || {});
        for (var i in provide.managed) {
            rv[provide.managed[i]] = this[i];
        }
        var _loop_1 = function (i) {
            rv[provide.managedReactive[i]] = this_1[i]; // Duplicates the behavior of `@Provide`
            Object.defineProperty(rv[reactiveInjectKey], provide.managedReactive[i], {
                enumerable: true,
                configurable: true,
                get: function () { return _this[i]; },
            });
        };
        var this_1 = this;
        for (var i in provide.managedReactive) {
            _loop_1(i);
        }
        return rv;
    };
    provide.managed = {};
    provide.managedReactive = {};
    return provide;
}
/** Used for keying reactive provide/inject properties */
var reactiveInjectKey = '__reactiveInject__';
function inheritInjected(componentOptions) {
    // inject parent reactive services (if any)
    if (!Array.isArray(componentOptions.inject)) {
        componentOptions.inject = componentOptions.inject || {};
        componentOptions.inject[reactiveInjectKey] = {
            from: reactiveInjectKey,
            default: {},
        };
    }
}

// CONCATENATED MODULE: ./node_modules/vue-property-decorator/lib/decorators/InjectReactive.js


/**
 * decorator of a reactive inject
 * @param from key
 * @return PropertyDecorator
 */
function InjectReactive(options) {
    return createDecorator(function (componentOptions, key) {
        if (typeof componentOptions.inject === 'undefined') {
            componentOptions.inject = {};
        }
        if (!Array.isArray(componentOptions.inject)) {
            var fromKey_1 = !!options ? options.from || options : key;
            var defaultVal_1 = (!!options && options.default) || undefined;
            if (!componentOptions.computed)
                componentOptions.computed = {};
            componentOptions.computed[key] = function () {
                var obj = this[reactiveInjectKey];
                return obj ? obj[fromKey_1] : defaultVal_1;
            };
            componentOptions.inject[reactiveInjectKey] = reactiveInjectKey;
        }
    });
}

// CONCATENATED MODULE: ./node_modules/vue-property-decorator/lib/helpers/metadata.js
/** @see {@link https://github.com/vuejs/vue-class-component/blob/master/src/reflect.ts} */
var reflectMetadataIsSupported = typeof Reflect !== 'undefined' && typeof Reflect.getMetadata !== 'undefined';
function applyMetadata(options, target, key) {
    if (reflectMetadataIsSupported) {
        if (!Array.isArray(options) &&
            typeof options !== 'function' &&
            !options.hasOwnProperty('type') &&
            typeof options.type === 'undefined') {
            var type = Reflect.getMetadata('design:type', target, key);
            if (type !== Object) {
                options.type = type;
            }
        }
    }
}

// CONCATENATED MODULE: ./node_modules/vue-property-decorator/lib/decorators/Model.js


/**
 * decorator of model
 * @param  event event name
 * @param options options
 * @return PropertyDecorator
 */
function Model(event, options) {
    if (options === void 0) { options = {}; }
    return function (target, key) {
        applyMetadata(options, target, key);
        createDecorator(function (componentOptions, k) {
            ;
            (componentOptions.props || (componentOptions.props = {}))[k] = options;
            componentOptions.model = { prop: k, event: event || k };
        })(target, key);
    };
}

// CONCATENATED MODULE: ./node_modules/vue-property-decorator/lib/decorators/ModelSync.js


/**
 * decorator of synced model and prop
 * @param propName the name to interface with from outside, must be different from decorated property
 * @param  event event name
 * @param options options
 * @return PropertyDecorator
 */
function ModelSync(propName, event, options) {
    if (options === void 0) { options = {}; }
    return function (target, key) {
        applyMetadata(options, target, key);
        createDecorator(function (componentOptions, k) {
            ;
            (componentOptions.props || (componentOptions.props = {}))[propName] = options;
            componentOptions.model = { prop: propName, event: event || k };
            (componentOptions.computed || (componentOptions.computed = {}))[k] = {
                get: function () {
                    return this[propName];
                },
                set: function (value) {
                    // @ts-ignore
                    this.$emit(event, value);
                },
            };
        })(target, key);
    };
}

// CONCATENATED MODULE: ./node_modules/vue-property-decorator/lib/decorators/Prop.js


/**
 * decorator of a prop
 * @param  options the options for the prop
 * @return PropertyDecorator | void
 */
function Prop(options) {
    if (options === void 0) { options = {}; }
    return function (target, key) {
        applyMetadata(options, target, key);
        createDecorator(function (componentOptions, k) {
            ;
            (componentOptions.props || (componentOptions.props = {}))[k] = options;
        })(target, key);
    };
}

// CONCATENATED MODULE: ./node_modules/vue-property-decorator/lib/decorators/PropSync.js


/**
 * decorator of a synced prop
 * @param propName the name to interface with from outside, must be different from decorated property
 * @param options the options for the synced prop
 * @return PropertyDecorator | void
 */
function PropSync(propName, options) {
    if (options === void 0) { options = {}; }
    return function (target, key) {
        applyMetadata(options, target, key);
        createDecorator(function (componentOptions, k) {
            ;
            (componentOptions.props || (componentOptions.props = {}))[propName] = options;
            (componentOptions.computed || (componentOptions.computed = {}))[k] = {
                get: function () {
                    return this[propName];
                },
                set: function (value) {
                    this.$emit("update:" + propName, value);
                },
            };
        })(target, key);
    };
}

// CONCATENATED MODULE: ./node_modules/vue-property-decorator/lib/decorators/Provide.js


/**
 * decorator of a provide
 * @param key key
 * @return PropertyDecorator | void
 */
function Provide(key) {
    return createDecorator(function (componentOptions, k) {
        var provide = componentOptions.provide;
        inheritInjected(componentOptions);
        if (needToProduceProvide(provide)) {
            provide = componentOptions.provide = produceProvide(provide);
        }
        provide.managed[k] = key || k;
    });
}

// CONCATENATED MODULE: ./node_modules/vue-property-decorator/lib/decorators/ProvideReactive.js


/**
 * decorator of a reactive provide
 * @param key key
 * @return PropertyDecorator | void
 */
function ProvideReactive(key) {
    return createDecorator(function (componentOptions, k) {
        var provide = componentOptions.provide;
        inheritInjected(componentOptions);
        if (needToProduceProvide(provide)) {
            provide = componentOptions.provide = produceProvide(provide);
        }
        provide.managedReactive[k] = key || k;
    });
}

// CONCATENATED MODULE: ./node_modules/vue-property-decorator/lib/decorators/Ref.js

/**
 * decorator of a ref prop
 * @param refKey the ref key defined in template
 */
function Ref(refKey) {
    return createDecorator(function (options, key) {
        options.computed = options.computed || {};
        options.computed[key] = {
            cache: false,
            get: function () {
                return this.$refs[refKey || key];
            },
        };
    });
}

// CONCATENATED MODULE: ./node_modules/vue-property-decorator/lib/decorators/VModel.js

/**
 * decorator for capturings v-model binding to component
 * @param options the options for the prop
 */
function VModel(options) {
    if (options === void 0) { options = {}; }
    var valueKey = 'value';
    return createDecorator(function (componentOptions, key) {
        ;
        (componentOptions.props || (componentOptions.props = {}))[valueKey] = options;
        (componentOptions.computed || (componentOptions.computed = {}))[key] = {
            get: function () {
                return this[valueKey];
            },
            set: function (value) {
                this.$emit('input', value);
            },
        };
    });
}

// CONCATENATED MODULE: ./node_modules/vue-property-decorator/lib/decorators/Watch.js

/**
 * decorator of a watch function
 * @param  path the path or the expression to observe
 * @param  WatchOption
 * @return MethodDecorator
 */
function Watch(path, options) {
    if (options === void 0) { options = {}; }
    var _a = options.deep, deep = _a === void 0 ? false : _a, _b = options.immediate, immediate = _b === void 0 ? false : _b;
    return createDecorator(function (componentOptions, handler) {
        if (typeof componentOptions.watch !== 'object') {
            componentOptions.watch = Object.create(null);
        }
        var watch = componentOptions.watch;
        if (typeof watch[path] === 'object' && !Array.isArray(watch[path])) {
            watch[path] = [watch[path]];
        }
        else if (typeof watch[path] === 'undefined') {
            watch[path] = [];
        }
        watch[path].push({ handler: handler, deep: deep, immediate: immediate });
    });
}

// CONCATENATED MODULE: ./node_modules/vue-property-decorator/lib/index.js
/** vue-property-decorator verson 9.1.2 MIT LICENSE copyright 2020 kaorun343 */
/// <reference types='reflect-metadata'/>
















// EXTERNAL MODULE: ./node_modules/lodash.pick/index.js
var lodash_pick = __webpack_require__(5);
var lodash_pick_default = /*#__PURE__*/__webpack_require__.n(lodash_pick);

// EXTERNAL MODULE: ./src/data/db.json
var db = __webpack_require__(6);

// CONCATENATED MODULE: ./src/lib/db/preprocess.ts
/**
 * Preprocess data from JSON database.
 *
 * @author earthchie
 * @see https://github.com/earthchie/jquery.Thailand.js/blob/master/jquery.Thailand.js/src/jquery.Thailand.js
 * @exports
 * @param {any} data Data from JSON database.
 * @returns {AddressEntry[]} Processed data.
 */
function preprocess(data) {
    var lookup = [];
    var words = [];
    var expanded = [];
    var useLookup = false;
    var t = function (text) {
        function repl(m) {
            var ch = m.charCodeAt(0);
            return words[ch < 97 ? ch - 65 : 26 + ch - 97];
        }
        if (!useLookup) {
            return text;
        }
        if (typeof text === 'number') {
            text = lookup[text];
        }
        return text.replace(/[A-Z]/ig, repl);
    };
    if (data.lookup && data.words) {
        // compact with dictionary and lookup
        useLookup = true;
        lookup = data.lookup.split('|');
        words = data.words.split('|');
        data = data.data;
    }
    if (!data[0].length) {
        // non-compacted database
        return data;
    }
    // decompacted database in hierarchical form of:
    // [["province",[["amphur",[["district",["zip"...]]...]]...]]...]
    data.map(function (provinces) {
        var i = 1;
        if (provinces.length === 3) { // geographic database
            i = 2;
        }
        provinces[i].map(function (amphoes) {
            amphoes[i].map(function (districts) {
                districts[i] = districts[i] instanceof Array ? districts[i] : [districts[i]];
                districts[i].map(function (zipcode) {
                    var entry = {
                        district: t(districts[0]),
                        amphoe: t(amphoes[0]),
                        province: t(provinces[0]),
                        zipcode: zipcode
                    };
                    if (i === 2) { // geographic database
                        entry.district_code = districts[1] || false;
                        entry.amphoe_code = amphoes[1] || false;
                        entry.province_code = provinces[1] || false;
                    }
                    expanded.push(entry);
                });
            });
        });
    });
    return expanded;
}

// CONCATENATED MODULE: ./src/lib/db/loadDataSource.ts


/**
 * Load data source.
 *
 * @exports
 * @returns {AddressEntry[]} Processed data source.
 */
function loadDataSource() {
    return preprocess(db);
}

// CONCATENATED MODULE: ./src/data/DataStore.ts

var DataStore_dataSource = loadDataSource().map(Object.freeze);
/**
 * Vue Thailand Address data store.
 *
 * @export
 * @class DataStore
 */
var DataStore = /** @class */ (function () {
    /**
     * Creates an instance of `DataStore`.
     *
     * @constructs
     * @memberof DataStore
     */
    function DataStore() {
        this.resetValue();
        this._valueChangeHandlers = [];
    }
    /**
     * Validate address model value.
     *
     * @static
     * @param {AddressModel} value A value
     * @returns {boolean}
     * @memberof DataStore
     */
    DataStore.validateValue = function (value) {
        return ((typeof value === 'object')
            &&
                Object.prototype.hasOwnProperty.call(value, 'district')
            &&
                Object.prototype.hasOwnProperty.call(value, 'subdistrict')
            &&
                Object.prototype.hasOwnProperty.call(value, 'province')
            &&
                Object.prototype.hasOwnProperty.call(value, 'zipcode'));
    };
    Object.defineProperty(DataStore.prototype, "dataSource", {
        /**
         * Address data source.
         *
         * @readonly
         * @type {ReadonlyArray<AddressEntry>}
         * @memberof DataStore
         */
        get: function () {
            return DataStore_dataSource;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataStore.prototype, "value", {
        /**
         * Current address value.
         *
         * @type {AddressModel}
         * @memberof DataStore
         */
        get: function () {
            return this._currentValue;
        },
        set: function (newValue) {
            if (!DataStore.validateValue(newValue)) {
                throw new TypeError('Invalid address model.');
            }
            this._currentValue = newValue;
            this._valueChangeHandlers.forEach(function (handler) { return handler(newValue); });
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Reset current address value.
     *
     * @memberof DataStore
     */
    DataStore.prototype.resetValue = function () {
        this._currentValue = {
            district: '',
            subdistrict: '',
            province: '',
            zipcode: ''
        };
    };
    /**
     * Set a value into the target property of current address value.
     *
     * @param {Target} target Target property name
     * @param {string} propValue A value
     * @memberof DataStore
     */
    DataStore.prototype.setValueProp = function (target, propValue) {
        this._currentValue[target] = propValue;
    };
    /**
     * Register handler for listening address value change event.
     *
     * @param {OnChangeHandler} handler A handler
     * @memberof DataStore
     */
    DataStore.prototype.onValueChange = function (handler) {
        if (typeof handler === 'function') {
            this._valueChangeHandlers.push(handler);
        }
    };
    return DataStore;
}());
/* harmony default export */ var data_DataStore = (DataStore);
var defaultStore = new DataStore();

// CONCATENATED MODULE: ./src/lib/constants.ts
/**
 * Delay time before close autocomplete.
 *
 * (This prevent autocomplete DOM get detroyed before access data.)
 */
var AUTOCOMPLETE_CLOSE_DELAY = 250;
/**
 * Allowed attributes that can be passed to internal input.
 */
var ALLOWED_ATTRS = [
    'autofocus',
    'disabled',
    'form',
    'id',
    'inputmode',
    'list',
    'maxlength',
    'minlength',
    'name',
    'pattern',
    'placeholder',
    'readonly',
    'required',
    'required',
    'size',
    'spellcheck',
    'tabindex',
    'title'
];

// EXTERNAL MODULE: ./node_modules/leven/index.js
var leven = __webpack_require__(1);
var leven_default = /*#__PURE__*/__webpack_require__.n(leven);

// CONCATENATED MODULE: ./src/utils/calculateSimilarity.ts

/**
 * Calculate similarity between query and address data.
 *
 * @param {string} query An query.
 * @param {AddressEntry} addressData Address data.
 * @returns {number} Similarity ratio.
 */
function calculateSimilarity(query, addressData) {
    var district = addressData.district, amphoe = addressData.amphoe, province = addressData.province, zipcode = addressData.zipcode;
    var similarities = [
        leven_default()(query, district),
        leven_default()(query, amphoe),
        leven_default()(query, province),
        leven_default()(query, "" + zipcode)
    ];
    return Math.min.apply(Math, similarities);
}
/* harmony default export */ var utils_calculateSimilarity = (calculateSimilarity);

// CONCATENATED MODULE: ./src/utils/translateTarget.ts
/**
 * Translate target to `AddressEntry` property name.
 *
 * @export
 * @param {Target} target Target
 * @returns {AddressEntryKeys}
 */
function translateTarget(target) {
    if (target === 'subdistrict') {
        return 'district';
    }
    else if (target === 'district') {
        return 'amphoe';
    }
    else {
        return target;
    }
}

// CONCATENATED MODULE: ./src/lib/getPossibles.ts


/**
 * Get possibles that target property match search query.
 *
 * @param {ReadonlyArray<AddressEntry>} dataSource Data source.
 * @param {Target} target Target property.
 * @param {string} query Search query.
 * @returns {AddressEntry[]} Possibles.
 */
function getPossibles(dataSource, target, query) {
    var newDataSource = dataSource.slice(0); // Prevent mutate the original data source. Clone it!
    query = query.replace('[', '').replace(']', '');
    var key = translateTarget(target);
    var pattern = new RegExp("^" + query);
    var possibles = newDataSource.filter(function (item) {
        return item[key] ? pattern.test("" + item[key]) : false;
    });
    possibles.sort(function (a, b) {
        var aSimilarity = utils_calculateSimilarity(query, a);
        var bSimilarity = utils_calculateSimilarity(query, b);
        return bSimilarity - aSimilarity;
    });
    return possibles;
}
/* harmony default export */ var lib_getPossibles = (getPossibles);

// CONCATENATED MODULE: ./src/utils/addressEntryToModel.ts
/**
 * Convert `AddressEntry` to `AddressModel`.
 *
 * @export
 * @param {AddressEntry} entry Address entry
 * @returns {AddressModel} Address model
 */
function addressEntryToModel(entry) {
    var model = {
        district: entry.amphoe,
        subdistrict: entry.district,
        province: entry.province,
        zipcode: "" + entry.zipcode
    };
    return model;
}

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Autocomplete.vue?vue&type=template&id=c93a0ecc&lang=pug&
var Autocompletevue_type_template_id_c93a0ecc_lang_pug_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ul',{directives:[{name:"show",rawName:"v-show",value:(_vm.hasData),expression:"hasData"}],staticClass:"th-address-autocomplete",style:(_vm.autocompleteStyle)},_vm._l((_vm.itemList),function(item,index){return _c('li',{key:item.text,ref:"autocomplete-item",refInFor:true,class:{ active: _vm.selectedIndex === index },style:(_vm.autocompleteListStyle),domProps:{"innerHTML":_vm._s(item.text)},on:{"click":function($event){return _vm.onItemClick(item.data)},"mouseenter":function($event){return _vm.changeSelectedIndex(index)}}})}),0)}
var Autocompletevue_type_template_id_c93a0ecc_lang_pug_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Autocomplete.vue?vue&type=template&id=c93a0ecc&lang=pug&

// CONCATENATED MODULE: ./src/utils/highlightQuery.ts
/**
 * Highlight the word that match the query.
 *
 * @exports
 * @param {string} query A search query.
 * @param {string} text A text string.
 * @returns {string} Highlighted text.
 */
function highlightQuery(query, text) {
    if (text.length > 0) {
        return text.replace(new RegExp(query, 'ig'), function (match) { return "<b>" + match + "</b>"; });
    }
    else {
        return text;
    }
}

// CONCATENATED MODULE: ./src/utils/addressToString.ts


var SEPARATOR = '»';
/**
 * Convert address data to string.
 *
 * @exports
 * @param {AddressEntry} addressData Address data.
 * @param {Target} currentTarget Current input target.
 * @param {string} query A search query.
 * @returns {string} Address as string.
 */
function addressToString(addressData, currentTarget, query) {
    // Clone item to `addressComponents`. Do not mutate the original item.
    var addressComponents = Object.assign({}, addressData);
    var addressModel = {
        subdistrict: addressComponents.district,
        district: addressComponents.amphoe,
        province: addressComponents.province,
        zipcode: "" + addressComponents.zipcode
    };
    var key = translateTarget(currentTarget);
    if (addressComponents[key]) {
        addressModel[currentTarget] = highlightQuery(query, "" + addressComponents[key]);
    }
    return [
        addressModel.subdistrict,
        addressModel.district,
        addressModel.province,
        addressModel.zipcode
    ].join(" " + SEPARATOR + " ");
}

// CONCATENATED MODULE: ./node_modules/ts-loader??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Autocomplete.vue?vue&type=script&lang=ts&
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var Autocompletevue_type_script_lang_ts_Autocomplete = /** @class */ (function (_super) {
    __extends(Autocomplete, _super);
    function Autocomplete() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Watch
    Autocomplete.prototype.onSelectedIndexChange = function (newIndex) {
        if (newIndex === -1) {
            this.$el && (this.$el.scrollTop = 0); // Reset scroll position when close
            return;
        }
        /*
         * Scroll to the selected item when use keyboard.
         */
        if (this.$el && this.$refs['autocomplete-item'] && this.$refs['autocomplete-item'][newIndex]) {
            var listContainer = this.$el;
            var selectItem = this.$refs['autocomplete-item'][newIndex];
            var itemBottom = selectItem.offsetTop + selectItem.offsetHeight;
            if (selectItem.offsetTop < listContainer.scrollTop) {
                listContainer.scrollTop = selectItem.offsetTop;
            }
            else if ((itemBottom - listContainer.scrollTop) > listContainer.offsetHeight) {
                listContainer.scrollTop = selectItem.offsetTop - (listContainer.offsetHeight - selectItem.offsetHeight);
            }
        }
    };
    Object.defineProperty(Autocomplete.prototype, "autocompleteStyle", {
        // Computed
        get: function () {
            return {
                maxHeight: this.maxHeight + "px",
                listStyle: 'none',
                margin: 0,
                overflowY: 'auto',
                padding: 0,
                position: 'absolute',
                width: '100%',
                zIndex: 1
            };
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Autocomplete.prototype, "autocompleteListStyle", {
        get: function () {
            var _a = this, maxHeight = _a.maxHeight, itemCount = _a.itemCount;
            var itemHeight = maxHeight / itemCount;
            return {
                height: itemHeight + "px",
                cursor: 'pointer'
            };
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Autocomplete.prototype, "hasData", {
        get: function () {
            return this.items && (this.items.length > 0);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Autocomplete.prototype, "itemList", {
        get: function () {
            var _this = this;
            var autocomplete = this.items;
            return autocomplete.map(function (item) {
                return {
                    data: Object.assign({}, item),
                    text: addressToString(item, _this.target, _this.query)
                };
            });
        },
        enumerable: false,
        configurable: true
    });
    // Methods
    Autocomplete.prototype.onItemClick = function (item) {
        this.$emit('itemclick', item);
    };
    Autocomplete.prototype.changeSelectedIndex = function (index) {
        if ((index >= 0) && (index < this.itemList.length)) {
            this.$emit('update:selectedIndex', index);
        }
    };
    __decorate([
        Prop(String)
    ], Autocomplete.prototype, "query", void 0);
    __decorate([
        Prop(Array)
    ], Autocomplete.prototype, "items", void 0);
    __decorate([
        Prop({ type: String, required: true })
    ], Autocomplete.prototype, "target", void 0);
    __decorate([
        Prop({ type: Number, required: true })
    ], Autocomplete.prototype, "maxHeight", void 0);
    __decorate([
        Prop({ type: Number, required: true })
    ], Autocomplete.prototype, "itemCount", void 0);
    __decorate([
        Prop({ type: Number, default: -1 })
    ], Autocomplete.prototype, "selectedIndex", void 0);
    __decorate([
        Watch('selectedIndex')
    ], Autocomplete.prototype, "onSelectedIndexChange", null);
    Autocomplete = __decorate([
        vue_class_component_esm({
            name: 'Autocomplete'
        })
    ], Autocomplete);
    return Autocomplete;
}(external_Vue_default.a));
/* harmony default export */ var Autocompletevue_type_script_lang_ts_ = (Autocompletevue_type_script_lang_ts_Autocomplete);

// CONCATENATED MODULE: ./src/components/Autocomplete.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_Autocompletevue_type_script_lang_ts_ = (Autocompletevue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./src/components/Autocomplete.vue?vue&type=style&index=0&lang=scss&
var Autocompletevue_type_style_index_0_lang_scss_ = __webpack_require__(9);

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

// CONCATENATED MODULE: ./src/components/Autocomplete.vue






/* normalize component */

var component = normalizeComponent(
  components_Autocompletevue_type_script_lang_ts_,
  Autocompletevue_type_template_id_c93a0ecc_lang_pug_render,
  Autocompletevue_type_template_id_c93a0ecc_lang_pug_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var components_Autocomplete = (component.exports);
// CONCATENATED MODULE: ./node_modules/ts-loader??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/TypeaheadInput.vue?vue&type=script&lang=ts&
var TypeaheadInputvue_type_script_lang_ts_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var TypeaheadInputvue_type_script_lang_ts_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var MODEL_EVENT = 'addressinput';
var TypeaheadInputvue_type_script_lang_ts_TypeaheadInput = /** @class */ (function (_super) {
    TypeaheadInputvue_type_script_lang_ts_extends(TypeaheadInput, _super);
    function TypeaheadInput() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // Data
        _this.possibles = [];
        _this.selectedIndex = -1;
        return _this;
    }
    // Hooks
    TypeaheadInput.prototype.created = function () {
        var _this = this;
        this.store.setValueProp(this.target, this.value); // Pass initial value into store's value.
        this.store.onValueChange(function (newModelValue) {
            var newValue = newModelValue[_this.target];
            _this.$emit(MODEL_EVENT, newValue);
        });
    };
    Object.defineProperty(TypeaheadInput.prototype, "inputType", {
        // Computed
        get: function () {
            if (!this.numbered || this.target !== 'zipcode') {
                return 'text';
            }
            return 'number';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TypeaheadInput.prototype, "containerStyle", {
        get: function () {
            return {
                position: 'relative'
            };
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TypeaheadInput.prototype, "filteredAttrs", {
        get: function () {
            return lodash_pick_default()(this.$attrs, ALLOWED_ATTRS);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TypeaheadInput.prototype, "inputClassList", {
        get: function () {
            if (!this.inputClass || !this.inputClass.trim()) {
                return null;
            }
            var inputClasses = this.inputClass.split(/\s+/);
            return inputClasses;
        },
        enumerable: false,
        configurable: true
    });
    // Methods
    TypeaheadInput.prototype.search = function (query) {
        if (query && (query.length > 0)) {
            var dataSource = this.store.dataSource;
            this.possibles = lib_getPossibles(dataSource, this.target, query);
            // If autocomplete list contains items, set index to first item
            if (this.possibles.length > 0) {
                this.selectedIndex = 0;
            }
        }
        else {
            this.clearAutocomplete();
        }
        this.$emit(MODEL_EVENT, query);
    };
    TypeaheadInput.prototype.closeAutocomplete = function () {
        var _this = this;
        // Prevent DOM elements destroyed before process complete
        setTimeout(function () { return _this.clearAutocomplete(); }, AUTOCOMPLETE_CLOSE_DELAY);
    };
    TypeaheadInput.prototype.clearAutocomplete = function () {
        this.selectedIndex = -1;
        this.possibles = [];
    };
    TypeaheadInput.prototype.moveUp = function () {
        if (this.possibles.length === 0) {
            return;
        }
        if ((this.selectedIndex - 1) >= 0) {
            this.selectedIndex -= 1;
        }
        else {
            this.selectedIndex = this.possibles.length - 1; // Go to last item when at first item
        }
    };
    TypeaheadInput.prototype.moveDown = function () {
        if (this.possibles.length === 0) {
            this.search(this.value); // Start searching when no items
            return;
        }
        if ((this.selectedIndex + 1) < this.possibles.length) {
            this.selectedIndex += 1;
        }
        else {
            this.selectedIndex = 0; // Go to first item when last item
        }
    };
    TypeaheadInput.prototype.pickCurrentItem = function () {
        if (this.possibles[this.selectedIndex]) {
            var selectedItem = Object.assign({}, this.possibles[this.selectedIndex]); // Shallow Clone
            this.commitItem(selectedItem);
        }
        this.clearAutocomplete();
    };
    TypeaheadInput.prototype.commitItem = function (item) {
        var addressModel = addressEntryToModel(item);
        this.store.value = addressModel;
        this.$emit('itemselect', addressModel);
    };
    TypeaheadInputvue_type_script_lang_ts_decorate([
        Model(MODEL_EVENT, { type: String, default: '' })
    ], TypeaheadInput.prototype, "value", void 0);
    TypeaheadInputvue_type_script_lang_ts_decorate([
        Prop({ type: data_DataStore, default: function () { return defaultStore; } })
    ], TypeaheadInput.prototype, "store", void 0);
    TypeaheadInputvue_type_script_lang_ts_decorate([
        Prop({ type: String, required: true })
    ], TypeaheadInput.prototype, "target", void 0);
    TypeaheadInputvue_type_script_lang_ts_decorate([
        Prop({ type: Number, default: 200 })
    ], TypeaheadInput.prototype, "autocompleteMaxHeight", void 0);
    TypeaheadInputvue_type_script_lang_ts_decorate([
        Prop({ type: Number, default: 5 })
    ], TypeaheadInput.prototype, "autocompleteItemCount", void 0);
    TypeaheadInputvue_type_script_lang_ts_decorate([
        Prop({ type: String, default: '' })
    ], TypeaheadInput.prototype, "inputClass", void 0);
    TypeaheadInputvue_type_script_lang_ts_decorate([
        Prop({ type: Boolean, default: false })
    ], TypeaheadInput.prototype, "numbered", void 0);
    TypeaheadInput = TypeaheadInputvue_type_script_lang_ts_decorate([
        vue_class_component_esm({
            name: 'TypeaheadInput',
            components: {
                Autocomplete: components_Autocomplete
            },
            inheritAttrs: false
        })
    ], TypeaheadInput);
    return TypeaheadInput;
}(external_Vue_default.a));
/* harmony default export */ var TypeaheadInputvue_type_script_lang_ts_ = (TypeaheadInputvue_type_script_lang_ts_TypeaheadInput);

// CONCATENATED MODULE: ./src/components/TypeaheadInput.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_TypeaheadInputvue_type_script_lang_ts_ = (TypeaheadInputvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./src/components/TypeaheadInput.vue?vue&type=style&index=0&lang=scss&
var TypeaheadInputvue_type_style_index_0_lang_scss_ = __webpack_require__(10);

// CONCATENATED MODULE: ./src/components/TypeaheadInput.vue






/* normalize component */

var TypeaheadInput_component = normalizeComponent(
  components_TypeaheadInputvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var components_TypeaheadInput = (TypeaheadInput_component.exports);
// CONCATENATED MODULE: ./node_modules/ts-loader??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/InputContainer.vue?vue&type=script&lang=ts&
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};


var InputContainer = external_Vue_default.a.extend({
    name: 'InputContainer',
    functional: true,
    props: {
        label: String
    },
    render: function (createElement, context) {
        var props = context.props, data = context.data;
        var label = props.label;
        var hasLabel = (label != null) && (label.length > 0);
        var input = createElement(components_TypeaheadInput, __assign(__assign({}, data), { on: {
                // For v-model
                addressinput: function (value) {
                    if (data.on && (typeof data.on.input === 'function')) {
                        data.on.input(value);
                    }
                }
            } }));
        return createElement('div', { class: 'th-address' }, [
            hasLabel ?
                createElement('label', { class: 'th-address-label' }, [
                    createElement('div', { class: 'label-text' }, label),
                    input
                ]) :
                input
        ]);
    }
});
/* harmony default export */ var InputContainervue_type_script_lang_ts_ = (InputContainer);

// CONCATENATED MODULE: ./src/components/InputContainer.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_InputContainervue_type_script_lang_ts_ = (InputContainervue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./src/components/InputContainer.vue?vue&type=style&index=0&lang=scss&
var InputContainervue_type_style_index_0_lang_scss_ = __webpack_require__(11);

// CONCATENATED MODULE: ./src/components/InputContainer.vue
var InputContainer_render, InputContainer_staticRenderFns





/* normalize component */

var InputContainer_component = normalizeComponent(
  components_InputContainervue_type_script_lang_ts_,
  InputContainer_render,
  InputContainer_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var components_InputContainer = (InputContainer_component.exports);
// CONCATENATED MODULE: ./src/components/createAddressComponent.ts
var createAddressComponent_assign = (undefined && undefined.__assign) || function () {
    createAddressComponent_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return createAddressComponent_assign.apply(this, arguments);
};


/**
 * Create address input component for given `target`.
 *
 * @export
 * @param {Target} target Address property target
 * @param {string} defaultLabel Default input label
 */
function createAddressComponent(target, defaultLabel) {
    return external_Vue_default.a.extend({
        functional: true,
        props: {
            label: {
                type: String,
                default: defaultLabel
            }
        },
        render: function (createElement, context) {
            return createElement(components_InputContainer, createAddressComponent_assign(createAddressComponent_assign({}, context.data), { props: {
                    label: context.props.label,
                    target: target
                } }));
        }
    });
}

// CONCATENATED MODULE: ./src/index.ts


var DistrictInput = createAddressComponent('district', 'อำเภอ/เขต');
var ProvinceInput = createAddressComponent('province', 'จังหวัด');
var SubDistrictInput = createAddressComponent('subdistrict', 'ตำบล/แขวง');
var ZipCodeInput = createAddressComponent('zipcode', 'รหัสไปรษณีย์');
/**
 * Install Vue Thailand Address plugin.
 *
 * @param {typeof Vue} vue Vue class.
 */
var install = function (vue) {
    vue.component('addressinput-subdistrict', SubDistrictInput);
    vue.component('addressinput-district', DistrictInput);
    vue.component('addressinput-province', ProvinceInput);
    vue.component('addressinput-zipcode', ZipCodeInput);
};
if ((typeof window !== 'undefined') && window.Vue) {
    install(window.Vue);
}
/**
 * Vue Thailand Address plugin.
 */
var src_plugin = {
    install: install
};

/* harmony default export */ var src = __webpack_exports__["default"] = (src_plugin);


/***/ })
/******/ ])["default"];
//# sourceMappingURL=vue-thailand-address.web.js.map