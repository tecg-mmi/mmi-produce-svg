/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/main.ts":
/*!************************!*\
  !*** ./src/js/main.ts ***!
  \************************/
/***/ (() => {

eval("var form = document.getElementById(\"generate\");\nvar backgroundColorInput = form.querySelector(\"#bg-color\");\nvar downloadBTN = form.querySelector(\"#download\");\nvar textColorInput = form.querySelector(\"#tx-color\");\nvar acronymInput = form.querySelector(\"#acronymTextElement\");\nvar titleInput = form.querySelector(\"#titleTextElement\");\nvar textInputs = [acronymInput, titleInput];\nvar svgElement = document.querySelector(\"#Logo\");\nvar svgLogo = {\n  acronymTextElement: svgElement.querySelector('#acronym'),\n  titleTextElement: svgElement.querySelector('#title'),\n  backgroundElements: svgElement.querySelector('#background'),\n  textElements: [svgElement.querySelector('#acronym'), svgElement.querySelector('#title'), svgElement.querySelector('#lBrace'), svgElement.querySelector('#rBrace')]\n};\nform === null || form === void 0 ? void 0 : form.addEventListener(\"submit\", function (event) {\n  event.preventDefault();\n});\nbackgroundColorInput === null || backgroundColorInput === void 0 ? void 0 : backgroundColorInput.addEventListener('input', function (event) {\n  svgLogo.backgroundElements.setAttribute('fill', event.currentTarget.value);\n});\ntextColorInput === null || textColorInput === void 0 ? void 0 : textColorInput.addEventListener('input', function (event) {\n  svgLogo.textElements.forEach(function (element) {\n    element.setAttribute('fill', event.currentTarget.value);\n  });\n});\ndownloadBTN.addEventListener('click', function (event) {\n  var base64doc = btoa(unescape(encodeURIComponent(svgElement.outerHTML)));\n  var link = event.currentTarget;\n  link.download = acronymInput.value + \".svg\";\n  link.href = 'data:image/svg+xml;base64,' + base64doc;\n});\ntextInputs.forEach(function (input) {\n  input.addEventListener('keyup', function (e) {\n    var t = e.currentTarget;\n    drawLogo({\n      id: t.id,\n      value: t.value\n    });\n  });\n});\n\nfunction loadDataInDForm() {\n  acronymInput.value = svgLogo.acronymTextElement.textContent;\n  acronymInput.placeholder = \"Exemple : \" + svgLogo.acronymTextElement.textContent;\n  titleInput.value = svgLogo.titleTextElement.textContent;\n  titleInput.placeholder = \"Exemple : \" + svgLogo.titleTextElement.textContent;\n  backgroundColorInput.value = svgLogo.backgroundElements.getAttribute(\"fill\");\n  textColorInput.value = svgLogo.acronymTextElement.getAttribute(\"fill\");\n}\n\nfunction drawLogo(info) {\n  console.log(info);\n  svgLogo[info.id].textContent = info.value;\n}\n\nloadDataInDForm();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEdBQUdELENBQUMsQ0FBQ2IsYUFBWjtBQUNBZSxZQUFRLENBQUM7QUFBQ0MsUUFBRSxFQUFFRixDQUFDLENBQUNFLEVBQVA7QUFBV2YsV0FBSyxFQUFFYSxDQUFDLENBQUNiO0FBQXBCLEtBQUQsQ0FBUjtBQUNILEdBSEQ7QUFJSCxDQUxEOztBQU9BLFNBQVNnQixlQUFULEdBQXdCO0FBQ3BCOUIsY0FBWSxDQUFDYyxLQUFiLEdBQXFCVixPQUFPLENBQUNDLGtCQUFSLENBQTJCMEIsV0FBaEQ7QUFDQS9CLGNBQVksQ0FBQ2dDLFdBQWIsR0FBMkIsZUFBZTVCLE9BQU8sQ0FBQ0Msa0JBQVIsQ0FBMkIwQixXQUFyRTtBQUNBOUIsWUFBVSxDQUFDYSxLQUFYLEdBQW1CVixPQUFPLENBQUNFLGdCQUFSLENBQXlCeUIsV0FBNUM7QUFDQTlCLFlBQVUsQ0FBQytCLFdBQVgsR0FBeUIsZUFBZTVCLE9BQU8sQ0FBQ0UsZ0JBQVIsQ0FBeUJ5QixXQUFqRTtBQUNBbkMsc0JBQW9CLENBQUNrQixLQUFyQixHQUE2QlYsT0FBTyxDQUFDRyxrQkFBUixDQUEyQjBCLFlBQTNCLENBQXdDLE1BQXhDLENBQTdCO0FBQ0FsQyxnQkFBYyxDQUFDZSxLQUFmLEdBQXVCVixPQUFPLENBQUNDLGtCQUFSLENBQTJCNEIsWUFBM0IsQ0FBd0MsTUFBeEMsQ0FBdkI7QUFDSDs7QUFHRCxTQUFTTCxRQUFULENBQWtCTSxJQUFsQixFQUFxRDtBQUNqREMsU0FBTyxDQUFDQyxHQUFSLENBQVlGLElBQVo7QUFFQTlCLFNBQU8sQ0FBQzhCLElBQUksQ0FBQ0wsRUFBTixDQUFQLENBQWlCRSxXQUFqQixHQUErQkcsSUFBSSxDQUFDcEIsS0FBcEM7QUFDSDs7QUFHRGdCLGVBQWUiLCJuYW1lcyI6WyJmb3JtIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImJhY2tncm91bmRDb2xvcklucHV0IiwicXVlcnlTZWxlY3RvciIsImRvd25sb2FkQlROIiwidGV4dENvbG9ySW5wdXQiLCJhY3JvbnltSW5wdXQiLCJ0aXRsZUlucHV0IiwidGV4dElucHV0cyIsInN2Z0VsZW1lbnQiLCJzdmdMb2dvIiwiYWNyb255bVRleHRFbGVtZW50IiwidGl0bGVUZXh0RWxlbWVudCIsImJhY2tncm91bmRFbGVtZW50cyIsInRleHRFbGVtZW50cyIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwic2V0QXR0cmlidXRlIiwiY3VycmVudFRhcmdldCIsInZhbHVlIiwiZm9yRWFjaCIsImVsZW1lbnQiLCJiYXNlNjRkb2MiLCJidG9hIiwidW5lc2NhcGUiLCJlbmNvZGVVUklDb21wb25lbnQiLCJvdXRlckhUTUwiLCJsaW5rIiwiZG93bmxvYWQiLCJocmVmIiwiaW5wdXQiLCJlIiwidCIsImRyYXdMb2dvIiwiaWQiLCJsb2FkRGF0YUluREZvcm0iLCJ0ZXh0Q29udGVudCIsInBsYWNlaG9sZGVyIiwiZ2V0QXR0cmlidXRlIiwiaW5mbyIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsid2VicGFjazovL21taS1wcm9kdWNlLXN2Zy8uL3NyYy9qcy9tYWluLnRzPzRiNzEiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZm9ybTogSFRNTEZvcm1FbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnZW5lcmF0ZVwiKSBhcyBIVE1MRm9ybUVsZW1lbnQ7XG5jb25zdCBiYWNrZ3JvdW5kQ29sb3JJbnB1dDogSFRNTElucHV0RWxlbWVudCA9IGZvcm0ucXVlcnlTZWxlY3RvcihcIiNiZy1jb2xvclwiKTtcbmNvbnN0IGRvd25sb2FkQlROOiBIVE1MQW5jaG9yRWxlbWVudCA9IGZvcm0ucXVlcnlTZWxlY3RvcihcIiNkb3dubG9hZFwiKTtcbmNvbnN0IHRleHRDb2xvcklucHV0OiBIVE1MSW5wdXRFbGVtZW50ID0gZm9ybS5xdWVyeVNlbGVjdG9yKFwiI3R4LWNvbG9yXCIpO1xuY29uc3QgYWNyb255bUlucHV0OiBIVE1MSW5wdXRFbGVtZW50ID0gZm9ybS5xdWVyeVNlbGVjdG9yKFwiI2Fjcm9ueW1UZXh0RWxlbWVudFwiKTtcbmNvbnN0IHRpdGxlSW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoXCIjdGl0bGVUZXh0RWxlbWVudFwiKTtcbmNvbnN0IHRleHRJbnB1dHM6IEhUTUxJbnB1dEVsZW1lbnRbXSA9IFthY3JvbnltSW5wdXQsIHRpdGxlSW5wdXRdO1xuY29uc3Qgc3ZnRWxlbWVudDogU1ZHQUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI0xvZ29cIik7XG5cblxudHlwZSBsb2dvVHlwZSA9IHtcbiAgICBhY3JvbnltVGV4dEVsZW1lbnQ6IFNWR1RleHRFbGVtZW50LFxuICAgIHRpdGxlVGV4dEVsZW1lbnQ6IFNWR1RleHRFbGVtZW50LFxuICAgIGJhY2tncm91bmRFbGVtZW50czogU1ZHUmVjdEVsZW1lbnQsXG4gICAgdGV4dEVsZW1lbnRzOiBTVkdUZXh0RWxlbWVudFtdLFxufVxuXG5cbmNvbnN0IHN2Z0xvZ286IGxvZ29UeXBlID0ge1xuICAgIGFjcm9ueW1UZXh0RWxlbWVudDogc3ZnRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcjYWNyb255bScpLFxuICAgIHRpdGxlVGV4dEVsZW1lbnQ6IHN2Z0VsZW1lbnQucXVlcnlTZWxlY3RvcignI3RpdGxlJyksXG4gICAgYmFja2dyb3VuZEVsZW1lbnRzOiBzdmdFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJyNiYWNrZ3JvdW5kJyksXG4gICAgdGV4dEVsZW1lbnRzOiBbc3ZnRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcjYWNyb255bScpLCBzdmdFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0aXRsZScpLCBzdmdFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsQnJhY2UnKSwgc3ZnRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcjckJyYWNlJyldLFxufVxuXG5mb3JtPy5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG59KTtcblxuYmFja2dyb3VuZENvbG9ySW5wdXQ/LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIHN2Z0xvZ28uYmFja2dyb3VuZEVsZW1lbnRzLnNldEF0dHJpYnV0ZSgnZmlsbCcsIGV2ZW50LmN1cnJlbnRUYXJnZXQudmFsdWUpO1xufSlcblxudGV4dENvbG9ySW5wdXQ/LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgc3ZnTG9nby50ZXh0RWxlbWVudHMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnZmlsbCcsIGV2ZW50LmN1cnJlbnRUYXJnZXQudmFsdWUpXG4gICAgfSlcbn0pXG5cbmRvd25sb2FkQlROLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgYmFzZTY0ZG9jID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoc3ZnRWxlbWVudC5vdXRlckhUTUwpKSk7XG4gICAgY29uc3QgbGluayA9IGV2ZW50LmN1cnJlbnRUYXJnZXQgYXMgSFRNTEFuY2hvckVsZW1lbnQ7XG4gICAgbGluay5kb3dubG9hZCA9IGFjcm9ueW1JbnB1dC52YWx1ZSArIFwiLnN2Z1wiO1xuICAgIGxpbmsuaHJlZiA9ICdkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LCcgKyBiYXNlNjRkb2M7XG59KVxuXG50ZXh0SW5wdXRzLmZvckVhY2goaW5wdXQgPT4ge1xuICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKGUpID0+IHtcbiAgICAgICAgY29uc3QgdCA9IGUuY3VycmVudFRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgICAgICBkcmF3TG9nbyh7aWQ6IHQuaWQsIHZhbHVlOiB0LnZhbHVlfSk7XG4gICAgfSk7XG59KVxuXG5mdW5jdGlvbiBsb2FkRGF0YUluREZvcm0oKTogdm9pZCB7XG4gICAgYWNyb255bUlucHV0LnZhbHVlID0gc3ZnTG9nby5hY3JvbnltVGV4dEVsZW1lbnQudGV4dENvbnRlbnQ7XG4gICAgYWNyb255bUlucHV0LnBsYWNlaG9sZGVyID0gXCJFeGVtcGxlIDogXCIgKyBzdmdMb2dvLmFjcm9ueW1UZXh0RWxlbWVudC50ZXh0Q29udGVudDtcbiAgICB0aXRsZUlucHV0LnZhbHVlID0gc3ZnTG9nby50aXRsZVRleHRFbGVtZW50LnRleHRDb250ZW50O1xuICAgIHRpdGxlSW5wdXQucGxhY2Vob2xkZXIgPSBcIkV4ZW1wbGUgOiBcIiArIHN2Z0xvZ28udGl0bGVUZXh0RWxlbWVudC50ZXh0Q29udGVudDtcbiAgICBiYWNrZ3JvdW5kQ29sb3JJbnB1dC52YWx1ZSA9IHN2Z0xvZ28uYmFja2dyb3VuZEVsZW1lbnRzLmdldEF0dHJpYnV0ZShcImZpbGxcIik7XG4gICAgdGV4dENvbG9ySW5wdXQudmFsdWUgPSBzdmdMb2dvLmFjcm9ueW1UZXh0RWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJmaWxsXCIpO1xufVxuXG5cbmZ1bmN0aW9uIGRyYXdMb2dvKGluZm86IHsgaWQ6IHN0cmluZzsgdmFsdWU6IHN0cmluZyB9KTogdm9pZCB7XG4gICAgY29uc29sZS5sb2coaW5mbylcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgc3ZnTG9nb1tpbmZvLmlkXS50ZXh0Q29udGVudCA9IGluZm8udmFsdWVcbn1cblxuXG5sb2FkRGF0YUluREZvcm0oKTsiXSwiZmlsZSI6Ii4vc3JjL2pzL21haW4udHMuanMifQ==\n//# sourceURL=webpack-internal:///./src/js/main.ts\n");

/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2Nzcy9tYWluLnNjc3MuanMiLCJtYXBwaW5ncyI6IjtBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbW1pLXByb2R1Y2Utc3ZnLy4vc3JjL3Njc3MvbWFpbi5zY3NzP2Y3ZTUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scss/main.scss\n");

/***/ })

/******/ 	});
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
/******/ 			// no module.id needed
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/main": 0,
/******/ 			"css/main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkmmi_produce_svg"] = self["webpackChunkmmi_produce_svg"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["css/main"], () => (__webpack_require__("./src/js/main.ts")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["css/main"], () => (__webpack_require__("./src/scss/main.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;