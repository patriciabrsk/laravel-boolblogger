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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/front.js":
/*!*******************************!*\
  !*** ./resources/js/front.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /Users/patriciabrsk/Desktop/BOOLEAN/laravel-api/resources/js/front.js: Identifier 'App' has already been declared. (9:7)\n\n\u001b[0m \u001b[90m  7 |\u001b[39m \u001b[36mimport\u001b[39m \u001b[33mVueRouter\u001b[39m \u001b[36mfrom\u001b[39m \u001b[32m'vue-router'\u001b[39m\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m  8 |\u001b[39m \u001b[36mimport\u001b[39m \u001b[33mApp\u001b[39m \u001b[36mfrom\u001b[39m \u001b[32m'./pages/Home'\u001b[39m\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m  9 |\u001b[39m \u001b[36mimport\u001b[39m \u001b[33mApp\u001b[39m \u001b[36mfrom\u001b[39m \u001b[32m'./pages/About'\u001b[39m\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m    |\u001b[39m        \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 10 |\u001b[39m \u001b[36mimport\u001b[39m \u001b[33mApp\u001b[39m \u001b[36mfrom\u001b[39m \u001b[32m'./pages/Posts'\u001b[39m\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 11 |\u001b[39m \u001b[36mimport\u001b[39m \u001b[33mApp\u001b[39m \u001b[36mfrom\u001b[39m \u001b[32m'./pages/Contact'\u001b[39m\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 12 |\u001b[39m \u001b[36mimport\u001b[39m \u001b[33mApp\u001b[39m \u001b[36mfrom\u001b[39m \u001b[32m'./pages/NotFound'\u001b[39m\u001b[33m;\u001b[39m\u001b[0m\n    at instantiate (/Users/patriciabrsk/Desktop/BOOLEAN/laravel-api/node_modules/@babel/parser/lib/index.js:72:32)\n    at constructor (/Users/patriciabrsk/Desktop/BOOLEAN/laravel-api/node_modules/@babel/parser/lib/index.js:358:12)\n    at Parser.raise (/Users/patriciabrsk/Desktop/BOOLEAN/laravel-api/node_modules/@babel/parser/lib/index.js:3341:19)\n    at ScopeHandler.checkRedeclarationInScope (/Users/patriciabrsk/Desktop/BOOLEAN/laravel-api/node_modules/@babel/parser/lib/index.js:3525:19)\n    at ScopeHandler.declareName (/Users/patriciabrsk/Desktop/BOOLEAN/laravel-api/node_modules/@babel/parser/lib/index.js:3491:12)\n    at Parser.declareNameFromIdentifier (/Users/patriciabrsk/Desktop/BOOLEAN/laravel-api/node_modules/@babel/parser/lib/index.js:12154:16)\n    at Parser.checkIdentifier (/Users/patriciabrsk/Desktop/BOOLEAN/laravel-api/node_modules/@babel/parser/lib/index.js:12149:12)\n    at Parser.checkLVal (/Users/patriciabrsk/Desktop/BOOLEAN/laravel-api/node_modules/@babel/parser/lib/index.js:12075:12)\n    at Parser.finishImportSpecifier (/Users/patriciabrsk/Desktop/BOOLEAN/laravel-api/node_modules/@babel/parser/lib/index.js:16303:10)\n    at Parser.parseImportSpecifierLocal (/Users/patriciabrsk/Desktop/BOOLEAN/laravel-api/node_modules/@babel/parser/lib/index.js:16299:31)\n    at Parser.maybeParseDefaultImportSpecifier (/Users/patriciabrsk/Desktop/BOOLEAN/laravel-api/node_modules/@babel/parser/lib/index.js:16416:12)\n    at Parser.parseImport (/Users/patriciabrsk/Desktop/BOOLEAN/laravel-api/node_modules/@babel/parser/lib/index.js:16264:31)\n    at Parser.parseStatementContent (/Users/patriciabrsk/Desktop/BOOLEAN/laravel-api/node_modules/@babel/parser/lib/index.js:14755:27)\n    at Parser.parseStatement (/Users/patriciabrsk/Desktop/BOOLEAN/laravel-api/node_modules/@babel/parser/lib/index.js:14645:17)\n    at Parser.parseBlockOrModuleBlockBody (/Users/patriciabrsk/Desktop/BOOLEAN/laravel-api/node_modules/@babel/parser/lib/index.js:15288:25)\n    at Parser.parseBlockBody (/Users/patriciabrsk/Desktop/BOOLEAN/laravel-api/node_modules/@babel/parser/lib/index.js:15279:10)\n    at Parser.parseProgram (/Users/patriciabrsk/Desktop/BOOLEAN/laravel-api/node_modules/@babel/parser/lib/index.js:14563:10)\n    at Parser.parseTopLevel (/Users/patriciabrsk/Desktop/BOOLEAN/laravel-api/node_modules/@babel/parser/lib/index.js:14550:25)\n    at Parser.parse (/Users/patriciabrsk/Desktop/BOOLEAN/laravel-api/node_modules/@babel/parser/lib/index.js:16513:10)\n    at parse (/Users/patriciabrsk/Desktop/BOOLEAN/laravel-api/node_modules/@babel/parser/lib/index.js:16565:38)\n    at parser (/Users/patriciabrsk/Desktop/BOOLEAN/laravel-api/node_modules/@babel/core/lib/parser/index.js:52:34)\n    at parser.next (<anonymous>)\n    at normalizeFile (/Users/patriciabrsk/Desktop/BOOLEAN/laravel-api/node_modules/@babel/core/lib/transformation/normalize-file.js:87:38)\n    at normalizeFile.next (<anonymous>)\n    at run (/Users/patriciabrsk/Desktop/BOOLEAN/laravel-api/node_modules/@babel/core/lib/transformation/index.js:31:50)\n    at run.next (<anonymous>)\n    at Function.transform (/Users/patriciabrsk/Desktop/BOOLEAN/laravel-api/node_modules/@babel/core/lib/transform.js:25:41)\n    at transform.next (<anonymous>)\n    at step (/Users/patriciabrsk/Desktop/BOOLEAN/laravel-api/node_modules/gensync/index.js:261:32)\n    at /Users/patriciabrsk/Desktop/BOOLEAN/laravel-api/node_modules/gensync/index.js:273:13\n    at async.call.result.err.err (/Users/patriciabrsk/Desktop/BOOLEAN/laravel-api/node_modules/gensync/index.js:223:11)");

/***/ }),

/***/ 1:
/*!*************************************!*\
  !*** multi ./resources/js/front.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/patriciabrsk/Desktop/BOOLEAN/laravel-api/resources/js/front.js */"./resources/js/front.js");


/***/ })

/******/ });