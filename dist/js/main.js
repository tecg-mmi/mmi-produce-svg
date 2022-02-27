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

eval("var form = document.getElementById(\"generate\");\nvar backgroundColorInput = form.querySelector(\"#bg-color\");\nvar downloadBTN = form.querySelector(\"#download\");\nvar textColorInput = form.querySelector(\"#txt-color\");\nvar acronymInput = form.querySelector(\"#acronymTextElement\");\nvar titleInput = form.querySelector(\"#titleTextElement\");\nvar textInputs = [acronymInput, titleInput];\nvar svgElement = document.querySelector(\"#Logo\");\n\nfunction parseSVG() {\n  var acronymTextElement = svgElement.querySelector('#acronym');\n  var titleTextElement = svgElement.querySelector('#title');\n  var backgroundElements = svgElement.querySelector('#background');\n  var lBrace = svgElement.querySelector('#lBrace');\n  var rBrace = svgElement.querySelector('#rBrace');\n  return {\n    acronymTextElement: acronymTextElement,\n    titleTextElement: titleTextElement,\n    backgroundElements: backgroundElements,\n    lBrace: lBrace,\n    rBrace: rBrace,\n    textElements: [acronymTextElement, titleTextElement, lBrace, rBrace]\n  };\n}\n\nvar svgLogo = parseSVG();\nform === null || form === void 0 ? void 0 : form.addEventListener(\"submit\", function (event) {\n  event.preventDefault();\n});\nbackgroundColorInput === null || backgroundColorInput === void 0 ? void 0 : backgroundColorInput.addEventListener('input', function (event) {\n  svgLogo.backgroundElements.setAttribute('fill', event.currentTarget.value);\n});\ntextColorInput === null || textColorInput === void 0 ? void 0 : textColorInput.addEventListener('input', function (event) {\n  svgLogo.textElements.forEach(function (element) {\n    element.setAttribute('fill', event.currentTarget.value);\n  });\n});\ndownloadBTN.addEventListener('click', function (event) {\n  var base64doc = btoa(unescape(encodeURIComponent(svgElement.outerHTML)));\n  var link = event.currentTarget;\n  link.download = acronymInput.value + \".svg\";\n  link.href = 'data:image/svg+xml;base64,' + base64doc;\n});\ntextInputs.forEach(function (input) {\n  input.addEventListener('keyup', function (e) {\n    var t = e.currentTarget;\n    drawLogo({\n      id: t.id,\n      value: t.value\n    });\n  });\n});\n\nfunction loadDataInDForm() {\n  acronymInput.value = svgLogo.acronymTextElement.textContent;\n  acronymInput.placeholder = \"Exemple : \" + svgLogo.acronymTextElement.textContent;\n  titleInput.value = svgLogo.titleTextElement.textContent;\n  titleInput.placeholder = \"Exemple : \" + svgLogo.titleTextElement.textContent;\n  backgroundColorInput.value = svgLogo.backgroundElements.getAttribute(\"fill\");\n  textColorInput.value = svgLogo.acronymTextElement.getAttribute(\"fill\");\n}\n\nfunction separateBraces() {\n  var acronymLetterWidth = svgLogo.acronymTextElement.getComputedTextLength() * 0.75;\n  console.log(svgLogo.acronymTextElement.getClientRects()[0].width);\n  svgLogo.lBrace.setAttribute(\"transform\", \"translate(\".concat(Math.trunc(-acronymLetterWidth / 2), \",0)\"));\n  svgLogo.rBrace.setAttribute(\"transform\", \"translate(\".concat(Math.trunc(acronymLetterWidth / 2), \",0)\"));\n}\n\nfunction drawLogo(info) {\n  svgLogo[info.id].textContent = info.value;\n  separateBraces();\n}\n\nloadDataInDForm();\nseparateBraces();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFxRCxJQUF0RjtBQUNBQyxTQUFPLENBQUNDLEdBQVIsQ0FBWTlCLE9BQU8sQ0FBQ04sa0JBQVIsQ0FBMkJxQyxjQUEzQixHQUE0QyxDQUE1QyxFQUErQ0MsS0FBM0Q7QUFDQWhDLFNBQU8sQ0FBQ0gsTUFBUixDQUFlTyxZQUFmLENBQTRCLFdBQTVCLEVBQXlDLG9CQUFhNkIsSUFBSSxDQUFDQyxLQUFMLENBQVcsQ0FBQ1Asa0JBQUQsR0FBc0IsQ0FBakMsQ0FBYixFQUFnRCxLQUFoRCxDQUF6QztBQUNBM0IsU0FBTyxDQUFDRixNQUFSLENBQWVNLFlBQWYsQ0FBNEIsV0FBNUIsRUFBeUMsb0JBQWE2QixJQUFJLENBQUNDLEtBQUwsQ0FBV1Asa0JBQWtCLEdBQUcsQ0FBaEMsQ0FBYixFQUErQyxLQUEvQyxDQUF6QztBQUNIOztBQUVELFNBQVNQLFFBQVQsQ0FBa0JlLElBQWxCLEVBQXFEO0FBRWpEbkMsU0FBTyxDQUFDbUMsSUFBSSxDQUFDZCxFQUFOLENBQVAsQ0FBaUJFLFdBQWpCLEdBQStCWSxJQUFJLENBQUM3QixLQUFwQztBQUNBb0IsZ0JBQWM7QUFDakI7O0FBR0RKLGVBQWU7QUFDZkksY0FBYyIsIm5hbWVzIjpbImZvcm0iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiYmFja2dyb3VuZENvbG9ySW5wdXQiLCJxdWVyeVNlbGVjdG9yIiwiZG93bmxvYWRCVE4iLCJ0ZXh0Q29sb3JJbnB1dCIsImFjcm9ueW1JbnB1dCIsInRpdGxlSW5wdXQiLCJ0ZXh0SW5wdXRzIiwic3ZnRWxlbWVudCIsInBhcnNlU1ZHIiwiYWNyb255bVRleHRFbGVtZW50IiwidGl0bGVUZXh0RWxlbWVudCIsImJhY2tncm91bmRFbGVtZW50cyIsImxCcmFjZSIsInJCcmFjZSIsInRleHRFbGVtZW50cyIsInN2Z0xvZ28iLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInNldEF0dHJpYnV0ZSIsImN1cnJlbnRUYXJnZXQiLCJ2YWx1ZSIsImZvckVhY2giLCJlbGVtZW50IiwiYmFzZTY0ZG9jIiwiYnRvYSIsInVuZXNjYXBlIiwiZW5jb2RlVVJJQ29tcG9uZW50Iiwib3V0ZXJIVE1MIiwibGluayIsImRvd25sb2FkIiwiaHJlZiIsImlucHV0IiwiZSIsInQiLCJkcmF3TG9nbyIsImlkIiwibG9hZERhdGFJbkRGb3JtIiwidGV4dENvbnRlbnQiLCJwbGFjZWhvbGRlciIsImdldEF0dHJpYnV0ZSIsInNlcGFyYXRlQnJhY2VzIiwiYWNyb255bUxldHRlcldpZHRoIiwiZ2V0Q29tcHV0ZWRUZXh0TGVuZ3RoIiwiY29uc29sZSIsImxvZyIsImdldENsaWVudFJlY3RzIiwid2lkdGgiLCJNYXRoIiwidHJ1bmMiLCJpbmZvIl0sInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tbWktcHJvZHVjZS1zdmcvLi9zcmMvanMvbWFpbi50cz80YjcxIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGZvcm06IEhUTUxGb3JtRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2VuZXJhdGVcIikgYXMgSFRNTEZvcm1FbGVtZW50O1xuY29uc3QgYmFja2dyb3VuZENvbG9ySW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoXCIjYmctY29sb3JcIik7XG5jb25zdCBkb3dubG9hZEJUTjogSFRNTEFuY2hvckVsZW1lbnQgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoXCIjZG93bmxvYWRcIik7XG5jb25zdCB0ZXh0Q29sb3JJbnB1dDogSFRNTElucHV0RWxlbWVudCA9IGZvcm0ucXVlcnlTZWxlY3RvcihcIiN0eHQtY29sb3JcIik7XG5jb25zdCBhY3JvbnltSW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoXCIjYWNyb255bVRleHRFbGVtZW50XCIpO1xuY29uc3QgdGl0bGVJbnB1dDogSFRNTElucHV0RWxlbWVudCA9IGZvcm0ucXVlcnlTZWxlY3RvcihcIiN0aXRsZVRleHRFbGVtZW50XCIpO1xuY29uc3QgdGV4dElucHV0czogSFRNTElucHV0RWxlbWVudFtdID0gW2Fjcm9ueW1JbnB1dCwgdGl0bGVJbnB1dF07XG5jb25zdCBzdmdFbGVtZW50OiBTVkdBRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjTG9nb1wiKTtcblxuXG50eXBlIGxvZ29UeXBlID0ge1xuICAgIGFjcm9ueW1UZXh0RWxlbWVudDogU1ZHVGV4dEVsZW1lbnQsXG4gICAgdGl0bGVUZXh0RWxlbWVudDogU1ZHVGV4dEVsZW1lbnQsXG4gICAgYmFja2dyb3VuZEVsZW1lbnRzOiBTVkdSZWN0RWxlbWVudCxcbiAgICBsQnJhY2U6IFNWR1BhdGhFbGVtZW50LFxuICAgIHJCcmFjZTogU1ZHUGF0aEVsZW1lbnQsXG4gICAgdGV4dEVsZW1lbnRzOiBTVkdFbGVtZW50W11cbn1cblxuLypcblRoaXMgZnVuY3Rpb24gcmV0cmlldmVzIHRoZSBuZWNlc3NhcnkgZWxlbWVudHMgZnJvbSB0aGUgU1ZHIGRvY3VtZW50LiBXZSB1c2UgYSBmdW5jdGlvbiB0byBiZSBhYmxlIHRvIHVzZSB0aGUgc2FtZSBpbmZvcm1hdGlvbiBzZXZlcmFsIHRpbWVzXG4gKi9cbmZ1bmN0aW9uIHBhcnNlU1ZHKCk6IGxvZ29UeXBlIHtcbiAgICBjb25zdCBhY3JvbnltVGV4dEVsZW1lbnQ6IFNWR1RleHRFbGVtZW50ID0gc3ZnRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcjYWNyb255bScpO1xuICAgIGNvbnN0IHRpdGxlVGV4dEVsZW1lbnQ6IFNWR1RleHRFbGVtZW50ID0gc3ZnRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcjdGl0bGUnKTtcbiAgICBjb25zdCBiYWNrZ3JvdW5kRWxlbWVudHM6IFNWR1JlY3RFbGVtZW50ID0gc3ZnRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcjYmFja2dyb3VuZCcpO1xuICAgIGNvbnN0IGxCcmFjZTogU1ZHUGF0aEVsZW1lbnQgPSBzdmdFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsQnJhY2UnKTtcbiAgICBjb25zdCByQnJhY2U6IFNWR1BhdGhFbGVtZW50ID0gc3ZnRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcjckJyYWNlJyk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgYWNyb255bVRleHRFbGVtZW50OiBhY3JvbnltVGV4dEVsZW1lbnQsXG4gICAgICAgIHRpdGxlVGV4dEVsZW1lbnQ6IHRpdGxlVGV4dEVsZW1lbnQsXG4gICAgICAgIGJhY2tncm91bmRFbGVtZW50czogYmFja2dyb3VuZEVsZW1lbnRzLFxuICAgICAgICBsQnJhY2U6IGxCcmFjZSxcbiAgICAgICAgckJyYWNlOiByQnJhY2UsXG4gICAgICAgIHRleHRFbGVtZW50czogW2Fjcm9ueW1UZXh0RWxlbWVudCwgdGl0bGVUZXh0RWxlbWVudCwgbEJyYWNlLCByQnJhY2VdXG4gICAgfTtcbn1cblxuY29uc3Qgc3ZnTG9nbzogbG9nb1R5cGUgPSBwYXJzZVNWRygpO1xuXG5mb3JtPy5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG59KTtcblxuYmFja2dyb3VuZENvbG9ySW5wdXQ/LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIHN2Z0xvZ28uYmFja2dyb3VuZEVsZW1lbnRzLnNldEF0dHJpYnV0ZSgnZmlsbCcsIGV2ZW50LmN1cnJlbnRUYXJnZXQudmFsdWUpO1xufSlcblxudGV4dENvbG9ySW5wdXQ/LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgc3ZnTG9nby50ZXh0RWxlbWVudHMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnZmlsbCcsIGV2ZW50LmN1cnJlbnRUYXJnZXQudmFsdWUpXG4gICAgfSlcbn0pXG5cbmRvd25sb2FkQlROLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgYmFzZTY0ZG9jID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoc3ZnRWxlbWVudC5vdXRlckhUTUwpKSk7XG4gICAgY29uc3QgbGluayA9IGV2ZW50LmN1cnJlbnRUYXJnZXQgYXMgSFRNTEFuY2hvckVsZW1lbnQ7XG4gICAgbGluay5kb3dubG9hZCA9IGFjcm9ueW1JbnB1dC52YWx1ZSArIFwiLnN2Z1wiO1xuICAgIGxpbmsuaHJlZiA9ICdkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LCcgKyBiYXNlNjRkb2M7XG59KVxuXG50ZXh0SW5wdXRzLmZvckVhY2goaW5wdXQgPT4ge1xuICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKGUpID0+IHtcbiAgICAgICAgY29uc3QgdCA9IGUuY3VycmVudFRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgICAgICBkcmF3TG9nbyh7aWQ6IHQuaWQsIHZhbHVlOiB0LnZhbHVlfSk7XG4gICAgfSk7XG59KVxuXG5mdW5jdGlvbiBsb2FkRGF0YUluREZvcm0oKTogdm9pZCB7XG4gICAgYWNyb255bUlucHV0LnZhbHVlID0gc3ZnTG9nby5hY3JvbnltVGV4dEVsZW1lbnQudGV4dENvbnRlbnQ7XG4gICAgYWNyb255bUlucHV0LnBsYWNlaG9sZGVyID0gXCJFeGVtcGxlIDogXCIgKyBzdmdMb2dvLmFjcm9ueW1UZXh0RWxlbWVudC50ZXh0Q29udGVudDtcbiAgICB0aXRsZUlucHV0LnZhbHVlID0gc3ZnTG9nby50aXRsZVRleHRFbGVtZW50LnRleHRDb250ZW50O1xuICAgIHRpdGxlSW5wdXQucGxhY2Vob2xkZXIgPSBcIkV4ZW1wbGUgOiBcIiArIHN2Z0xvZ28udGl0bGVUZXh0RWxlbWVudC50ZXh0Q29udGVudDtcbiAgICBiYWNrZ3JvdW5kQ29sb3JJbnB1dC52YWx1ZSA9IHN2Z0xvZ28uYmFja2dyb3VuZEVsZW1lbnRzLmdldEF0dHJpYnV0ZShcImZpbGxcIik7XG4gICAgdGV4dENvbG9ySW5wdXQudmFsdWUgPSBzdmdMb2dvLmFjcm9ueW1UZXh0RWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJmaWxsXCIpO1xufVxuXG5mdW5jdGlvbiBzZXBhcmF0ZUJyYWNlcygpIHtcbiAgICBsZXQgYWNyb255bUxldHRlcldpZHRoOiBudW1iZXIgPSBzdmdMb2dvLmFjcm9ueW1UZXh0RWxlbWVudC5nZXRDb21wdXRlZFRleHRMZW5ndGgoKSAqIDAuNzU7XG4gICAgY29uc29sZS5sb2coc3ZnTG9nby5hY3JvbnltVGV4dEVsZW1lbnQuZ2V0Q2xpZW50UmVjdHMoKVswXS53aWR0aCk7XG4gICAgc3ZnTG9nby5sQnJhY2Uuc2V0QXR0cmlidXRlKFwidHJhbnNmb3JtXCIsIGB0cmFuc2xhdGUoJHtNYXRoLnRydW5jKC1hY3JvbnltTGV0dGVyV2lkdGggLyAyKX0sMClgKTtcbiAgICBzdmdMb2dvLnJCcmFjZS5zZXRBdHRyaWJ1dGUoXCJ0cmFuc2Zvcm1cIiwgYHRyYW5zbGF0ZSgke01hdGgudHJ1bmMoYWNyb255bUxldHRlcldpZHRoIC8gMil9LDApYCk7XG59XG5cbmZ1bmN0aW9uIGRyYXdMb2dvKGluZm86IHsgaWQ6IHN0cmluZzsgdmFsdWU6IHN0cmluZyB9KTogdm9pZCB7XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIHN2Z0xvZ29baW5mby5pZF0udGV4dENvbnRlbnQgPSBpbmZvLnZhbHVlXG4gICAgc2VwYXJhdGVCcmFjZXMoKTtcbn1cblxuXG5sb2FkRGF0YUluREZvcm0oKTtcbnNlcGFyYXRlQnJhY2VzKCk7Il19\n//# sourceURL=webpack-internal:///./src/js/main.ts\n");

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