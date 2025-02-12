/*!
 * Vue Thailand Address v3.3.0
 * Created by Saran Tanpituckpong
 * Released under the MIT License.
 * 
 * Address database from jquery.Thailand.js by Thanarat Kuawattanaphan
 */
module.exports =
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
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("vue-property-decorator");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("leven");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("vue");

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

// extracted by mini-css-extract-plugin

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("lodash.pick");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("./db.json");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(12);


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_2_node_modules_sass_loader_dist_cjs_js_ref_3_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Autocomplete_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_2_node_modules_sass_loader_dist_cjs_js_ref_3_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Autocomplete_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_2_node_modules_sass_loader_dist_cjs_js_ref_3_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Autocomplete_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_2_node_modules_sass_loader_dist_cjs_js_ref_3_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Autocomplete_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_2_node_modules_sass_loader_dist_cjs_js_ref_3_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Autocomplete_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_2_node_modules_sass_loader_dist_cjs_js_ref_3_3_node_modules_vue_loader_lib_index_js_vue_loader_options_TypeaheadInput_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_2_node_modules_sass_loader_dist_cjs_js_ref_3_3_node_modules_vue_loader_lib_index_js_vue_loader_options_TypeaheadInput_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_2_node_modules_sass_loader_dist_cjs_js_ref_3_3_node_modules_vue_loader_lib_index_js_vue_loader_options_TypeaheadInput_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_2_node_modules_sass_loader_dist_cjs_js_ref_3_3_node_modules_vue_loader_lib_index_js_vue_loader_options_TypeaheadInput_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_2_node_modules_sass_loader_dist_cjs_js_ref_3_3_node_modules_vue_loader_lib_index_js_vue_loader_options_TypeaheadInput_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_2_node_modules_sass_loader_dist_cjs_js_ref_3_3_node_modules_vue_loader_lib_index_js_vue_loader_options_InputContainer_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_2_node_modules_sass_loader_dist_cjs_js_ref_3_3_node_modules_vue_loader_lib_index_js_vue_loader_options_InputContainer_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_2_node_modules_sass_loader_dist_cjs_js_ref_3_3_node_modules_vue_loader_lib_index_js_vue_loader_options_InputContainer_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_2_node_modules_sass_loader_dist_cjs_js_ref_3_3_node_modules_vue_loader_lib_index_js_vue_loader_options_InputContainer_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_2_node_modules_sass_loader_dist_cjs_js_ref_3_3_node_modules_vue_loader_lib_index_js_vue_loader_options_InputContainer_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


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

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(2);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader!./node_modules/vue-loader/lib??vue-loader-options!./src/components/TypeaheadInput.vue?vue&type=template&id=ede2a336&lang=pug&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"th-address-container",style:(_vm.containerStyle)},[_vm._ssrNode("<input"+(_vm._ssrAttr("type",_vm.inputType))+" autocomplete=\"off\""+(_vm._ssrAttr("value",_vm.value))+(_vm._ssrAttrs(_vm.filteredAttrs))+(_vm._ssrClass("th-address-input",_vm.inputClassList))+">"),_c('autocomplete',{attrs:{"query":_vm.value,"items":_vm.possibles,"target":_vm.target,"maxHeight":_vm.autocompleteMaxHeight,"itemCount":_vm.autocompleteItemCount,"selectedIndex":_vm.selectedIndex},on:{"update:selectedIndex":function($event){_vm.selectedIndex=$event},"update:selected-index":function($event){_vm.selectedIndex=$event},"itemclick":_vm.commitItem}})],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/TypeaheadInput.vue?vue&type=template&id=ede2a336&lang=pug&

// EXTERNAL MODULE: external "vue-property-decorator"
var external_vue_property_decorator_ = __webpack_require__(0);

// EXTERNAL MODULE: external "lodash.pick"
var external_lodash_pick_ = __webpack_require__(6);
var external_lodash_pick_default = /*#__PURE__*/__webpack_require__.n(external_lodash_pick_);

// EXTERNAL MODULE: external "./db.json"
var external_db_json_ = __webpack_require__(7);
var external_db_json_default = /*#__PURE__*/__webpack_require__.n(external_db_json_);

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
    return preprocess(external_db_json_default.a);
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

// EXTERNAL MODULE: external "leven"
var external_leven_ = __webpack_require__(1);
var external_leven_default = /*#__PURE__*/__webpack_require__.n(external_leven_);

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
        external_leven_default()(query, district),
        external_leven_default()(query, amphoe),
        external_leven_default()(query, province),
        external_leven_default()(query, "" + zipcode)
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
var Autocompletevue_type_template_id_c93a0ecc_lang_pug_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ul',{directives:[{name:"show",rawName:"v-show",value:(_vm.hasData),expression:"hasData"}],staticClass:"th-address-autocomplete",style:(_vm.autocompleteStyle)},[_vm._ssrNode((_vm._ssrList((_vm.itemList),function(item,index){return ("<li"+(_vm._ssrClass(null,{ active: _vm.selectedIndex === index }))+(_vm._ssrStyle(null,_vm.autocompleteListStyle, null))+">"+(_vm._s(item.text))+"</li>")})))])}
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
        Object(external_vue_property_decorator_["Prop"])(String)
    ], Autocomplete.prototype, "query", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Prop"])(Array)
    ], Autocomplete.prototype, "items", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Prop"])({ type: String, required: true })
    ], Autocomplete.prototype, "target", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Prop"])({ type: Number, required: true })
    ], Autocomplete.prototype, "maxHeight", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Prop"])({ type: Number, required: true })
    ], Autocomplete.prototype, "itemCount", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Prop"])({ type: Number, default: -1 })
    ], Autocomplete.prototype, "selectedIndex", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Watch"])('selectedIndex')
    ], Autocomplete.prototype, "onSelectedIndexChange", null);
    Autocomplete = __decorate([
        Object(external_vue_property_decorator_["Component"])({
            name: 'Autocomplete'
        })
    ], Autocomplete);
    return Autocomplete;
}(external_vue_property_decorator_["Vue"]));
/* harmony default export */ var Autocompletevue_type_script_lang_ts_ = (Autocompletevue_type_script_lang_ts_Autocomplete);

// CONCATENATED MODULE: ./src/components/Autocomplete.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_Autocompletevue_type_script_lang_ts_ = (Autocompletevue_type_script_lang_ts_); 
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



function injectStyles (context) {
  
  var style0 = __webpack_require__(9)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = normalizeComponent(
  components_Autocompletevue_type_script_lang_ts_,
  Autocompletevue_type_template_id_c93a0ecc_lang_pug_render,
  Autocompletevue_type_template_id_c93a0ecc_lang_pug_staticRenderFns,
  false,
  injectStyles,
  null,
  "348dc3a6"
  
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
            return external_lodash_pick_default()(this.$attrs, ALLOWED_ATTRS);
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
        Object(external_vue_property_decorator_["Model"])(MODEL_EVENT, { type: String, default: '' })
    ], TypeaheadInput.prototype, "value", void 0);
    TypeaheadInputvue_type_script_lang_ts_decorate([
        Object(external_vue_property_decorator_["Prop"])({ type: data_DataStore, default: function () { return defaultStore; } })
    ], TypeaheadInput.prototype, "store", void 0);
    TypeaheadInputvue_type_script_lang_ts_decorate([
        Object(external_vue_property_decorator_["Prop"])({ type: String, required: true })
    ], TypeaheadInput.prototype, "target", void 0);
    TypeaheadInputvue_type_script_lang_ts_decorate([
        Object(external_vue_property_decorator_["Prop"])({ type: Number, default: 200 })
    ], TypeaheadInput.prototype, "autocompleteMaxHeight", void 0);
    TypeaheadInputvue_type_script_lang_ts_decorate([
        Object(external_vue_property_decorator_["Prop"])({ type: Number, default: 5 })
    ], TypeaheadInput.prototype, "autocompleteItemCount", void 0);
    TypeaheadInputvue_type_script_lang_ts_decorate([
        Object(external_vue_property_decorator_["Prop"])({ type: String, default: '' })
    ], TypeaheadInput.prototype, "inputClass", void 0);
    TypeaheadInputvue_type_script_lang_ts_decorate([
        Object(external_vue_property_decorator_["Prop"])({ type: Boolean, default: false })
    ], TypeaheadInput.prototype, "numbered", void 0);
    TypeaheadInput = TypeaheadInputvue_type_script_lang_ts_decorate([
        Object(external_vue_property_decorator_["Component"])({
            name: 'TypeaheadInput',
            components: {
                Autocomplete: components_Autocomplete
            },
            inheritAttrs: false
        })
    ], TypeaheadInput);
    return TypeaheadInput;
}(external_vue_property_decorator_["Vue"]));
/* harmony default export */ var TypeaheadInputvue_type_script_lang_ts_ = (TypeaheadInputvue_type_script_lang_ts_TypeaheadInput);

// CONCATENATED MODULE: ./src/components/TypeaheadInput.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_TypeaheadInputvue_type_script_lang_ts_ = (TypeaheadInputvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./src/components/TypeaheadInput.vue



function TypeaheadInput_injectStyles (context) {
  
  var style0 = __webpack_require__(10)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var TypeaheadInput_component = normalizeComponent(
  components_TypeaheadInputvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  TypeaheadInput_injectStyles,
  null,
  "620942c8"
  
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


var InputContainer = external_vue_default.a.extend({
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
// CONCATENATED MODULE: ./src/components/InputContainer.vue
var InputContainer_render, InputContainer_staticRenderFns


function InputContainer_injectStyles (context) {
  
  var style0 = __webpack_require__(11)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var InputContainer_component = normalizeComponent(
  components_InputContainervue_type_script_lang_ts_,
  InputContainer_render,
  InputContainer_staticRenderFns,
  false,
  InputContainer_injectStyles,
  null,
  "48b0c148"
  
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
    return external_vue_default.a.extend({
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
/******/ ]);
//# sourceMappingURL=vue-thailand-address.ssr.js.map