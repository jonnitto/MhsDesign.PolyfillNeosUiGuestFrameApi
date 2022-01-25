!function(e){var t={};function __webpack_require__(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,__webpack_require__),r.l=!0,r.exports}__webpack_require__.m=e,__webpack_require__.c=t,__webpack_require__.d=function(e,t,n){__webpack_require__.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},__webpack_require__.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},__webpack_require__.t=function(e,t){if(1&t&&(e=__webpack_require__(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(__webpack_require__.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)__webpack_require__.d(n,r,function(t){return e[t]}.bind(null,r));return n},__webpack_require__.n=function(e){var t=e&&e.__esModule?function getDefault(){return e.default}:function getModuleExports(){return e};return __webpack_require__.d(t,"a",t),t},__webpack_require__.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},__webpack_require__.p="",__webpack_require__(__webpack_require__.s=0)}([function(e,t,n){"use strict";var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=function _interopRequireWildcard(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(1));!function addExportToConsumerApi(){if("object"!==r(window["@Neos:HostPluginAPI"])||"function"!=typeof window["@Neos:HostPluginAPI"]["@NeosProjectPackages"])throw new Error("Polyfill: 'MhsDesign.PolyfillNeosUiGuestFrameApi', cant be initialized because the consumer api was changed. 1643141497");var e=window["@Neos:HostPluginAPI"]["@NeosProjectPackages"];try{Object.defineProperty(window["@Neos:HostPluginAPI"],"@NeosProjectPackages",{value:function getAllPackageFromConsumerApi(){var t=e.apply(void 0,arguments);try{Object.defineProperty(t,"NeosUiGuestFrameDom",{value:o})}catch(e){console.error("Polyfill: 'MhsDesign.PolyfillNeosUiGuestFrameApi', couldn't add package to consumer api: '"+e.message+"' 1643141498")}return t}})}catch(e){throw new Error("Polyfill: 'MhsDesign.PolyfillNeosUiGuestFrameApi', couldn't override consumer api: '"+e.message+"' 1643141499")}}()},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.dispatchCustomEvent=t.animateScrollToElementInGuestFrame=t.animateScrollToPositionInGuestFrame=t.isElementVisibleInGuestFrame=t.getAbsolutePositionOfElementInGuestFrame=t.clampElementToDocumentDimensions=t.getGuestFrameScrollOffsetY=t.getGuestFrameScrollOffsetX=t.createNotInlineEditableOverlay=t.createEmptyContentCollectionPlaceholderIfMissing=t.markNodeAsVisible=t.markNodeAsHidden=t.closestContextPathInGuestFrame=t.closestNodeInGuestFrame=t.findAllChildNodes=t.findAllOccurrencesOfNodeInGuestFrame=t.findNodeInGuestFrame=t.findRelativePropertiesInGuestFrame=t.findAllOccurrencesOfNodePropertyInGuestFrame=t.findAllPropertiesInGuestFrame=t.findAllNodesInGuestFrame=t.findAllInGuestFrame=t.findInGuestFrame=t.getGuestFrameBody=t.getGuestFrameWindow=t.getGuestFrameDocument=void 0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},_slicedToArray=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function sliceIterator(e,t){var n=[],r=!0,o=!1,a=void 0;try{for(var i,u=e[Symbol.iterator]();!(r=(i=u.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{!r&&u.return&&u.return()}finally{if(o)throw a}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},o=_interopRequireDefault(n(2)),a=_interopRequireDefault(n(4));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var i=t.getGuestFrameDocument=function getGuestFrameDocument(){var e=document.getElementsByName("neos-content-main")[0];return e&&e.contentDocument},u=t.getGuestFrameWindow=function getGuestFrameWindow(){var e=document.getElementsByName("neos-content-main")[0];return e&&e.contentWindow},l=(t.getGuestFrameBody=function getGuestFrameBody(){return i().body},t.findInGuestFrame=function findInGuestFrame(e){return i().querySelector(e)}),c=t.findAllInGuestFrame=function findAllInGuestFrame(e){return[].slice.call(i().querySelectorAll(e))},s=(t.findAllNodesInGuestFrame=function findAllNodesInGuestFrame(){return c("[data-__neos-node-contextpath]")},t.findAllPropertiesInGuestFrame=function findAllPropertiesInGuestFrame(){return c("[data-__neos-property]")},t.findAllOccurrencesOfNodePropertyInGuestFrame=function findAllOccurrencesOfNodePropertyInGuestFrame(e,t){return c('[data-__neos-editable-node-contextpath="'+e+'"][data-__neos-property="'+t+'"]')},t.findRelativePropertiesInGuestFrame=function findRelativePropertiesInGuestFrame(e){var t;return(t=[].slice.call(e.querySelectorAll('[data-__neos-property][data-__neos-editable-node-contextpath="'+e.getAttribute("data-__neos-node-contextpath")+'"]'))).concat.apply(t,function _toConsumableArray(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}(e.hasAttribute("data-__neos-property")?[e]:[]))},t.findNodeInGuestFrame=function findNodeInGuestFrame(e,t){return l(t?'[data-__neos-node-contextpath="'+e+'"][data-__neos-fusion-path="'+t+'"]':'[data-__neos-node-contextpath="'+e+'"]')}),d=(t.findAllOccurrencesOfNodeInGuestFrame=function findAllOccurrencesOfNodeInGuestFrame(e,t){return c(t?'[data-__neos-node-contextpath="'+e+'"][data-__neos-fusion-path="'+t+'"]':'[data-__neos-node-contextpath="'+e+'"]')},t.findAllChildNodes=function findAllChildNodes(e){return[].slice.call(e.querySelectorAll("[data-__neos-node-contextpath]"))},t.closestNodeInGuestFrame=function closestNodeInGuestFrame(e){return e&&e.dataset?e.dataset.__neosNodeContextpath?e:closestNodeInGuestFrame(e.parentNode):null}),f=(t.closestContextPathInGuestFrame=function closestContextPathInGuestFrame(e){var t=d(e);return t?t.dataset.__neosNodeContextpath:null},t.markNodeAsHidden=function markNodeAsHidden(e){var t=s(e);t&&t.classList.add(a.default.markHiddenNodeAsHidden)},t.markNodeAsVisible=function markNodeAsVisible(e){var t=s(e);t&&t.classList.remove(a.default.markHiddenNodeAsHidden)},t.createEmptyContentCollectionPlaceholderIfMissing=function createEmptyContentCollectionPlaceholderIfMissing(e){if(e){var t=Boolean(e.querySelector("[data-__neos-node-contextpath]")),n=e.getBoundingClientRect().height,r=Boolean(e.querySelector("."+a.default.addEmptyContentCollectionOverlay));if(!t&&!r&&n<20){var o=document.createElement("div");o.setAttribute("class",a.default.addEmptyContentCollectionOverlay),e.appendChild(o)}}},t.createNotInlineEditableOverlay=function createNotInlineEditableOverlay(e){"static"===getComputedStyle(e).position&&(e.style.position="relative");var t=document.createElement("div");t.setAttribute("class",a.default.notInlineEditableOverlay),e.appendChild(t)},t.getGuestFrameScrollOffsetX=function getGuestFrameScrollOffsetX(){var e=u(),t=i();return e.scrollX||e.pageXOffset||t.body.scrollLeft}),m=t.getGuestFrameScrollOffsetY=function getGuestFrameScrollOffsetY(){var e=u(),t=i();return e.scrollY||e.pageYOffset||t.body.scrollTop},p=function clampNumber(e,t,n){return n<t&&(n=t),e<t?[t,t-e]:e>n?[n,e-n]:[e,0]},_=t.clampElementToDocumentDimensions=function clampElementToDocumentDimensions(e,t){var n=t.width,r=t.height,o=p(e.left-t.left,0,n),a=_slicedToArray(o,2),i=a[0],u=a[1],l=p(e.width-u,0,n-i),c=_slicedToArray(l,1)[0],s=p(e.top-t.top,0,r),d=_slicedToArray(s,2),f=d[0],m=d[1],_=p(e.height-m,0,r-f),y=_slicedToArray(_,1)[0];return{top:f,left:i,width:c,height:y,right:i+c,bottom:f+y,rightAsMeasuredFromRightDocumentBorder:n-(i+c)}},y=t.getAbsolutePositionOfElementInGuestFrame=function getAbsolutePositionOfElementInGuestFrame(e){if(e&&e.getBoundingClientRect){var t=i().documentElement.getBoundingClientRect(),n=e.getBoundingClientRect();return _(n,t)}return{top:0,left:0,width:0,height:0}},g=(t.isElementVisibleInGuestFrame=function isElementVisibleInGuestFrame(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=u(),o=r.innerHeight,a=r.innerWidth,i=e.getBoundingClientRect(),l=i.top,c=i.left,s=i.bottom,d=i.right,f=l>=t&&s+t<=o,m=c>=n&&d+n<=a;return f&&m},t.animateScrollToPositionInGuestFrame=function animateScrollToPositionInGuestFrame(e,t){var n={x:f(),y:m()},r=u();(0,o.default)(n,{x:e,y:t},{step:function step(e){var t=e.x,n=e.y;return r.scrollTo(t,n)}})});t.animateScrollToElementInGuestFrame=function animateScrollToElementInGuestFrame(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=y(e),o=r.top,a=r.left;g(a-n,o-t)},t.dispatchCustomEvent=function dispatchCustomEvent(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=r({message:t,time:new Date},n),a=new CustomEvent(e,{detail:o,bubbles:!0,cancelable:!0});i().dispatchEvent(a)}},function(e,t,n){var r=n(3),o={ease:r(.25,.1,.25,1),easeIn:r(.42,0,1,1),easeOut:r(0,0,.58,1),easeInOut:r(.42,0,.58,1),linear:r(0,0,1,1)};function noop(){}function makeAggregateRaf(){var e=new Set,t=new Set,n=0;return{next:next,cancel:next,clearAll:function clearAll(){e.clear(),t.clear(),cancelAnimationFrame(n),n=0}};function next(e){t.add(e),function renderNextFrame(){n||(n=requestAnimationFrame(renderFrame))}()}function renderFrame(){n=0;var r=t;t=e,(e=r).forEach((function(e){e()})),e.clear()}}e.exports=function animate(e,t,n){var r=Object.create(null),a=Object.create(null),i="function"==typeof(n=n||{}).easing?n.easing:o[n.easing];i||(n.easing&&console.warn("Unknown easing function in amator: "+n.easing),i=o.ease);var u="function"==typeof n.step?n.step:noop,l="function"==typeof n.done?n.done:noop,c=function getScheduler(e){if(!e){return"undefined"!=typeof window&&window.requestAnimationFrame?function rafScheduler(){return{next:window.requestAnimationFrame.bind(window),cancel:window.cancelAnimationFrame.bind(window)}}():function timeoutScheduler(){return{next:function(e){return setTimeout(e,1e3/60)},cancel:function(e){return clearTimeout(e)}}}()}if("function"!=typeof e.next)throw new Error("Scheduler is supposed to have next(cb) function");if("function"!=typeof e.cancel)throw new Error("Scheduler is supposed to have cancel(handle) function");return e}(n.scheduler),s=Object.keys(t);s.forEach((function(n){r[n]=e[n],a[n]=t[n]-e[n]}));var d,f="number"==typeof n.duration?n.duration:400,m=Math.max(1,.06*f),p=0;return d=c.next((function loop(){var t=i(p/m);p+=1,function setValues(t){s.forEach((function(n){e[n]=a[n]*t+r[n]}))}(t),p<=m?(d=c.next(loop),u(e)):(d=0,setTimeout((function(){l(e)}),0))})),{cancel:function cancel(){c.cancel(d),d=0}}},e.exports.makeAggregateRaf=makeAggregateRaf,e.exports.sharedScheduler=makeAggregateRaf()},function(e,t){var n="function"==typeof Float32Array;function A(e,t){return 1-3*t+3*e}function B(e,t){return 3*t-6*e}function C(e){return 3*e}function calcBezier(e,t,n){return((A(t,n)*e+B(t,n))*e+C(t))*e}function getSlope(e,t,n){return 3*A(t,n)*e*e+2*B(t,n)*e+C(t)}function LinearEasing(e){return e}e.exports=function bezier(e,t,r,o){if(!(0<=e&&e<=1&&0<=r&&r<=1))throw new Error("bezier x values must be in [0, 1] range");if(e===t&&r===o)return LinearEasing;for(var a=n?new Float32Array(11):new Array(11),i=0;i<11;++i)a[i]=calcBezier(.1*i,e,r);function getTForX(t){for(var n=0,o=1;10!==o&&a[o]<=t;++o)n+=.1;--o;var i=n+.1*((t-a[o])/(a[o+1]-a[o])),u=getSlope(i,e,r);return u>=.001?function newtonRaphsonIterate(e,t,n,r){for(var o=0;o<4;++o){var a=getSlope(t,n,r);if(0===a)return t;t-=(calcBezier(t,n,r)-e)/a}return t}(t,i,e,r):0===u?i:function binarySubdivide(e,t,n,r,o){var a,i,u=0;do{(a=calcBezier(i=t+(n-t)/2,r,o)-e)>0?n=i:t=i}while(Math.abs(a)>1e-7&&++u<10);return i}(t,n,n+.1,e,r)}return function BezierEasing(e){return 0===e?0:1===e?1:calcBezier(getTForX(e),t,o)}}},function(e,t,n){e.exports={markHoveredNodeAsHovered:"style__markHoveredNodeAsHovered___3ChWo",markHiddenNodeAsHidden:"style__markHiddenNodeAsHidden___9YDNa",addEmptyContentCollectionOverlay:"style__addEmptyContentCollectionOverlay___1BLjc","markActiveNodeAsFocused--focusedNode":"style__markActiveNodeAsFocused--focusedNode___1H72U",notInlineEditableOverlay:"style__notInlineEditableOverlay___3y83v"}}]);
//# sourceMappingURL=Plugin.js.map