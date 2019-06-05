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
/******/ 	__webpack_require__.p = "js/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app.js":
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _data = __webpack_require__(/*! ./components/data */ \"./components/data.js\");\n\nvar _data2 = _interopRequireDefault(_data);\n\nvar _menuMarkup = __webpack_require__(/*! ./components/menuMarkup */ \"./components/menuMarkup.js\");\n\nvar _menuMarkup2 = _interopRequireDefault(_menuMarkup);\n\nvar _setdata = __webpack_require__(/*! ./components/setdata */ \"./components/setdata.js\");\n\nvar _setdata2 = _interopRequireDefault(_setdata);\n\nvar _handleMenu = __webpack_require__(/*! ./components/handleMenu */ \"./components/handleMenu.js\");\n\nvar _handleMenu2 = _interopRequireDefault(_handleMenu);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar root = document.getElementById('root');\n\nvar hamburgerWrapper = document.createElement('div');\nhamburgerWrapper.classList.add('hamburger-wrapper');\nhamburgerWrapper.id = 'hamburger';\n\nroot.innerHTML = (0, _setdata2.default)(_data2.default[0]);\nroot.appendChild(_menuMarkup2.default);\nroot.appendChild(hamburgerWrapper);\n\nvar navigationItem = document.querySelectorAll('.navigation__item');\nnavigationItem[0].classList.add('navigation__item--isActive');\n\nroot.addEventListener('click', function (_ref) {\n  var target = _ref.target;\n\n  if (target && target.matches('li.navigation__item')) {\n    var checkedElement = function checkedElement(el) {\n      return target.textContent === el.name;\n    };\n    root.innerHTML = (0, _setdata2.default)(_data2.default.find(checkedElement));\n    root.appendChild(_menuMarkup2.default);\n    navigationItem.forEach(function (item) {\n      item.classList.remove('navigation__item--isActive');\n    });\n    target.classList.add('navigation__item--isActive');\n  } else if (target && target.matches('div.hamburger-wrapper') || target.matches('div.close')) {\n    (0, _handleMenu2.default)();\n  }\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2pzL2FwcC5qcz8wMzU0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBkYXRhIGZyb20gJy4vY29tcG9uZW50cy9kYXRhJztcbmltcG9ydCBuYXZpZ2F0aW9uIGZyb20gJy4vY29tcG9uZW50cy9tZW51TWFya3VwJztcbmltcG9ydCBzZXREYXRhIGZyb20gJy4vY29tcG9uZW50cy9zZXRkYXRhJztcbmltcG9ydCBoYW5kbGVNZW51IGZyb20gJy4vY29tcG9uZW50cy9oYW5kbGVNZW51JztcblxuY29uc3Qgcm9vdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290Jyk7XG5cbmNvbnN0IGhhbWJ1cmdlcldyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmhhbWJ1cmdlcldyYXBwZXIuY2xhc3NMaXN0LmFkZCgnaGFtYnVyZ2VyLXdyYXBwZXInKTtcbmhhbWJ1cmdlcldyYXBwZXIuaWQgPSAnaGFtYnVyZ2VyJztcblxucm9vdC5pbm5lckhUTUwgPSBzZXREYXRhKGRhdGFbMF0pO1xucm9vdC5hcHBlbmRDaGlsZChuYXZpZ2F0aW9uKTtcbnJvb3QuYXBwZW5kQ2hpbGQoaGFtYnVyZ2VyV3JhcHBlcik7XG5cbmNvbnN0IG5hdmlnYXRpb25JdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5hdmlnYXRpb25fX2l0ZW0nKTtcbm5hdmlnYXRpb25JdGVtWzBdLmNsYXNzTGlzdC5hZGQoJ25hdmlnYXRpb25fX2l0ZW0tLWlzQWN0aXZlJyk7XG5cbnJvb3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoe3RhcmdldH0pID0+IHtcbiAgaWYgKHRhcmdldCAmJiB0YXJnZXQubWF0Y2hlcygnbGkubmF2aWdhdGlvbl9faXRlbScpKSB7XG4gICAgY29uc3QgY2hlY2tlZEVsZW1lbnQgPSBlbCA9PiB0YXJnZXQudGV4dENvbnRlbnQgPT09IGVsLm5hbWU7XG4gICAgcm9vdC5pbm5lckhUTUwgPSBzZXREYXRhKGRhdGEuZmluZChjaGVja2VkRWxlbWVudCkpO1xuICAgIHJvb3QuYXBwZW5kQ2hpbGQobmF2aWdhdGlvbik7XG4gICAgbmF2aWdhdGlvbkl0ZW0uZm9yRWFjaChpdGVtID0+IHtcbiAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnbmF2aWdhdGlvbl9faXRlbS0taXNBY3RpdmUnKTtcbiAgICB9KTtcbiAgICB0YXJnZXQuY2xhc3NMaXN0LmFkZCgnbmF2aWdhdGlvbl9faXRlbS0taXNBY3RpdmUnKTtcbiAgfSBlbHNlIGlmICh0YXJnZXQgJiYgdGFyZ2V0Lm1hdGNoZXMoJ2Rpdi5oYW1idXJnZXItd3JhcHBlcicpIHx8IHRhcmdldC5tYXRjaGVzKCdkaXYuY2xvc2UnKSkge1xuICAgIGhhbmRsZU1lbnUoKTtcbiAgfVxufSk7XG4iXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./app.js\n");

/***/ }),

/***/ "./components/data.js":
/*!****************************!*\
  !*** ./components/data.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar data = [{\n  name: 'Pancak jaya',\n  quantity: 'seven summits',\n  location: 'oceania',\n  height: 4.884,\n  img: '/img/puncak_jaya.jpg'\n}, {\n  name: 'vinson',\n  quantity: 'seven summits',\n  location: 'antarctica',\n  height: 4.892,\n  img: '/img/vinson.jpg'\n}, {\n  name: 'elbrus',\n  quantity: 'seven summits',\n  location: 'europe',\n  height: 5.682,\n  img: '/img/elbrus.jpg'\n}, {\n  name: 'kilimanjaro',\n  quantity: 'seven summits',\n  location: 'africa',\n  height: 5.895,\n  img: '/img/klimanjaro.jpg'\n}, {\n  name: 'denali',\n  quantity: 'seven summits',\n  location: 'north america',\n  height: 6.194,\n  img: '/img/denali.jpg'\n}, {\n  name: 'aconcagua',\n  quantity: 'seven summits',\n  location: 'south america',\n  height: 6.962,\n  img: '/img/aconcagua.jpg'\n}, {\n  name: 'everest',\n  quantity: 'seven summits',\n  location: 'asia',\n  height: 8.848,\n  img: '/img/everest.jpg'\n}];\n\nexports.default = data;\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2RhdGEuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2pzL2NvbXBvbmVudHMvZGF0YS5qcz8zODNhIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGRhdGEgPSBbXG4gIHtcbiAgICBuYW1lOiAnUGFuY2FrIGpheWEnLFxuICAgIHF1YW50aXR5OiAnc2V2ZW4gc3VtbWl0cycsXG4gICAgbG9jYXRpb246ICdvY2VhbmlhJyxcbiAgICBoZWlnaHQ6IDQuODg0LFxuICAgIGltZzogJy9pbWcvcHVuY2FrX2pheWEuanBnJ1xuICB9LFxuICB7XG4gICAgbmFtZTogJ3ZpbnNvbicsXG4gICAgcXVhbnRpdHk6ICdzZXZlbiBzdW1taXRzJyxcbiAgICBsb2NhdGlvbjogJ2FudGFyY3RpY2EnLFxuICAgIGhlaWdodDogNC44OTIsXG4gICAgaW1nOiAnL2ltZy92aW5zb24uanBnJ1xuICB9LFxuICB7XG4gICAgbmFtZTogJ2VsYnJ1cycsXG4gICAgcXVhbnRpdHk6ICdzZXZlbiBzdW1taXRzJyxcbiAgICBsb2NhdGlvbjogJ2V1cm9wZScsXG4gICAgaGVpZ2h0OiA1LjY4MixcbiAgICBpbWc6ICcvaW1nL2VsYnJ1cy5qcGcnXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAna2lsaW1hbmphcm8nLFxuICAgIHF1YW50aXR5OiAnc2V2ZW4gc3VtbWl0cycsXG4gICAgbG9jYXRpb246ICdhZnJpY2EnLFxuICAgIGhlaWdodDogNS44OTUsXG4gICAgaW1nOiAnL2ltZy9rbGltYW5qYXJvLmpwZydcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdkZW5hbGknLFxuICAgIHF1YW50aXR5OiAnc2V2ZW4gc3VtbWl0cycsXG4gICAgbG9jYXRpb246ICdub3J0aCBhbWVyaWNhJyxcbiAgICBoZWlnaHQ6IDYuMTk0LFxuICAgIGltZzogJy9pbWcvZGVuYWxpLmpwZydcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdhY29uY2FndWEnLFxuICAgIHF1YW50aXR5OiAnc2V2ZW4gc3VtbWl0cycsXG4gICAgbG9jYXRpb246ICdzb3V0aCBhbWVyaWNhJyxcbiAgICBoZWlnaHQ6IDYuOTYyLFxuICAgIGltZzogJy9pbWcvYWNvbmNhZ3VhLmpwZydcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdldmVyZXN0JyxcbiAgICBxdWFudGl0eTogJ3NldmVuIHN1bW1pdHMnLFxuICAgIGxvY2F0aW9uOiAnYXNpYScsXG4gICAgaGVpZ2h0OiA4Ljg0OCxcbiAgICBpbWc6ICcvaW1nL2V2ZXJlc3QuanBnJ1xuICB9LFxuXTtcblxuZXhwb3J0IGRlZmF1bHQgZGF0YTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQUNBO0FBUUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/data.js\n");

/***/ }),

/***/ "./components/handleMenu.js":
/*!**********************************!*\
  !*** ./components/handleMenu.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nfunction handleMenu() {\n  var hamburger = document.getElementById('hamburger');\n  var navigationWrapper = document.querySelector('.navigation-wrapper');\n\n  hamburger.classList.toggle('hamburger--isHidden');\n  navigationWrapper.classList.toggle('navigation--isHidden');\n  navigationWrapper.classList.toggle('navigation--isActive');\n}\n\nexports.default = handleMenu;\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2hhbmRsZU1lbnUuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2pzL2NvbXBvbmVudHMvaGFuZGxlTWVudS5qcz8xOGVmIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGhhbmRsZU1lbnUoKSB7XG4gIGNvbnN0IGhhbWJ1cmdlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoYW1idXJnZXInKTtcbiAgY29uc3QgbmF2aWdhdGlvbldyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2aWdhdGlvbi13cmFwcGVyJyk7XG5cbiAgaGFtYnVyZ2VyLmNsYXNzTGlzdC50b2dnbGUoJ2hhbWJ1cmdlci0taXNIaWRkZW4nKTtcbiAgbmF2aWdhdGlvbldyYXBwZXIuY2xhc3NMaXN0LnRvZ2dsZSgnbmF2aWdhdGlvbi0taXNIaWRkZW4nKTtcbiAgbmF2aWdhdGlvbldyYXBwZXIuY2xhc3NMaXN0LnRvZ2dsZSgnbmF2aWdhdGlvbi0taXNBY3RpdmUnKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlTWVudTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/handleMenu.js\n");

/***/ }),

/***/ "./components/menuMarkup.js":
/*!**********************************!*\
  !*** ./components/menuMarkup.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _data = __webpack_require__(/*! ./data */ \"./components/data.js\");\n\nvar _data2 = _interopRequireDefault(_data);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar navigation = document.createElement('div');\nnavigation.classList.add('navigation-wrapper', 'navigation--isHidden');\n\nvar navigationBlock = document.createElement('nav');\nnavigationBlock.classList.add('navigation');\n\nvar menuList = document.createElement('ul');\n\nvar closeButton = document.createElement('div');\ncloseButton.classList.add('close');\ncloseButton.id = 'close';\n\n_data2.default.forEach(function (item) {\n  var menuListItem = document.createElement('li');\n  menuListItem.classList.add('navigation__item');\n  menuListItem.innerHTML = item.name;\n  menuList.appendChild(menuListItem);\n});\n\nnavigation.appendChild(navigationBlock);\nnavigationBlock.appendChild(menuList);\nnavigation.appendChild(closeButton);\n\nexports.default = navigation;\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL21lbnVNYXJrdXAuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2pzL2NvbXBvbmVudHMvbWVudU1hcmt1cC5qcz80YTk0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBkYXRhIGZyb20gJy4vZGF0YSc7XG5cbmNvbnN0IG5hdmlnYXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbm5hdmlnYXRpb24uY2xhc3NMaXN0LmFkZCgnbmF2aWdhdGlvbi13cmFwcGVyJywgJ25hdmlnYXRpb24tLWlzSGlkZGVuJyk7XG5cbmNvbnN0IG5hdmlnYXRpb25CbG9jayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpO1xubmF2aWdhdGlvbkJsb2NrLmNsYXNzTGlzdC5hZGQoJ25hdmlnYXRpb24nKTtcblxuY29uc3QgbWVudUxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuXG5jb25zdCBjbG9zZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuY2xvc2VCdXR0b24uY2xhc3NMaXN0LmFkZCgnY2xvc2UnKTtcbmNsb3NlQnV0dG9uLmlkID0gJ2Nsb3NlJztcblxuZGF0YS5mb3JFYWNoKGl0ZW0gPT4ge1xuICBsZXQgbWVudUxpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgbWVudUxpc3RJdGVtLmNsYXNzTGlzdC5hZGQoJ25hdmlnYXRpb25fX2l0ZW0nKTtcbiAgbWVudUxpc3RJdGVtLmlubmVySFRNTCA9IGl0ZW0ubmFtZTtcbiAgbWVudUxpc3QuYXBwZW5kQ2hpbGQobWVudUxpc3RJdGVtKTtcbn0pO1xuXG5uYXZpZ2F0aW9uLmFwcGVuZENoaWxkKG5hdmlnYXRpb25CbG9jayk7XG5uYXZpZ2F0aW9uQmxvY2suYXBwZW5kQ2hpbGQobWVudUxpc3QpO1xubmF2aWdhdGlvbi5hcHBlbmRDaGlsZChjbG9zZUJ1dHRvbik7XG5cbmV4cG9ydCBkZWZhdWx0IG5hdmlnYXRpb247XG4iXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0E7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/menuMarkup.js\n");

/***/ }),

/***/ "./components/setdata.js":
/*!*******************************!*\
  !*** ./components/setdata.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nfunction setData(object) {\n  return \"\\n  <div class=\\\"img-wrapper\\\" style=\\\"background-image: url(\" + object.img + \");\\\">\\n    <div class=\\\"info info-wrapper\\\">\\n      <div class=\\\"info__title\\\">\\n        <p class=\\\"info__name\\\">\\n          /\" + object.quantity + \"/\\n          <span class=\\\"info__mountin\\\">\" + object.name + \"</span>\\n        </p>\\n      </div>\\n      <div class=\\\"info__footer\\\">\\n        <p>\\n          <span class=\\\"info__location\\\">\" + object.location + \"</span>\\n          \" + object.height + \" m\\n        </p>\\n      </div>\\n    </div>\\n  </div>\\n\";\n}\n\nexports.default = setData;\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3NldGRhdGEuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2pzL2NvbXBvbmVudHMvc2V0ZGF0YS5qcz85NzBkIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIHNldERhdGEob2JqZWN0KSB7XG4gIHJldHVybiAgYFxuICA8ZGl2IGNsYXNzPVwiaW1nLXdyYXBwZXJcIiBzdHlsZT1cImJhY2tncm91bmQtaW1hZ2U6IHVybCgke29iamVjdC5pbWd9KTtcIj5cbiAgICA8ZGl2IGNsYXNzPVwiaW5mbyBpbmZvLXdyYXBwZXJcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJpbmZvX190aXRsZVwiPlxuICAgICAgICA8cCBjbGFzcz1cImluZm9fX25hbWVcIj5cbiAgICAgICAgICAvJHtvYmplY3QucXVhbnRpdHl9L1xuICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaW5mb19fbW91bnRpblwiPiR7b2JqZWN0Lm5hbWV9PC9zcGFuPlxuICAgICAgICA8L3A+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJpbmZvX19mb290ZXJcIj5cbiAgICAgICAgPHA+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJpbmZvX19sb2NhdGlvblwiPiR7b2JqZWN0LmxvY2F0aW9ufTwvc3Bhbj5cbiAgICAgICAgICAke29iamVjdC5oZWlnaHR9IG1cbiAgICAgICAgPC9wPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuYDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgc2V0RGF0YTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBa0JBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/setdata.js\n");

/***/ })

/******/ });