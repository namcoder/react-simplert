/*!
 * React-Simplert v.0.0.3
 * Irfan Maulana (https://github.com/mazipan)
 */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react"),require("react-dom")):"function"==typeof define&&define.amd?define("Simplert",["react","react-dom"],t):"object"==typeof exports?exports.Simplert=t(require("react"),require("react-dom")):e.Simplert=t(e.React,e.ReactDOM)}(this,function(e,t){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/build",t(t.s=0)}([function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(1),c=r(l),u=n(2),p=(r(u),n(3)),f=r(p);n(8);var d=function(e){function t(){o(this,t);var e=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={isShowPopup:!1},e}return s(t,e),a(t,[{key:"render",value:function(){var e=this.closeSimplert,t=this.closeOverlaySimplert,n=this.confirmSimplert,r=this.props,o=(r.showSimplert,r.title),i=r.message,s=r.type,a=r.customIconUrl,l=r.customCloseBtnText,u=r.customConfirmBtnText,p=r.useConfirmBtn,f=r.hideAllButton,d=(this.state.isShowPopup,null);return"info"===s?d=c.default.createElement("div",{className:"simplert__icon simplert__icon--info"},c.default.createElement("div",{className:"simplert__line simplert__line--info"}),c.default.createElement("div",{className:"simplert__line simplert__line--info-2"})):"success"===s?d=c.default.createElement("div",{className:"simplert__icon simplert__icon--success"},c.default.createElement("div",{className:"simplert__line simplert__line--success"}),c.default.createElement("div",{className:"simplert__line simplert__line--success-2"})):"warning"===s?d=c.default.createElement("div",{className:"simplert__icon simplert__icon--warning"},c.default.createElement("div",{className:"simplert__line simplert__line--warning"}),c.default.createElement("div",{className:"simplert__line simplert__line--warning-2"})):"error"===s?d=c.default.createElement("div",{className:"simplert__icon simplert__icon--error"},c.default.createElement("div",{className:"simplert__line simplert__line--error"}),c.default.createElement("div",{className:"simplert__line simplert__line--error-2"})):a&&(d=c.default.createElement("div",{className:"simplert__icon"},c.default.createElement("img",{src:a}))),c.default.createElement("div",{role:"modal",className:this.classSimplert(),onClick:t.bind(this)},c.default.createElement("div",{className:"simplert__content"},c.default.createElement("div",{className:"simplert__header"},c.default.createElement("div",null,d),c.default.createElement("b",{className:"simplert__title"},o)),c.default.createElement("div",{className:"simplert__body"},c.default.createElement("div",{dangerouslySetInnerHTML:{__html:i}})),c.default.createElement("div",{className:"simplert__footer"},p&&!f?c.default.createElement("button",{className:this.classBtnConfirm(),onClick:n.bind(this)},u):"",f?"":c.default.createElement("button",{className:this.classBtnClose(),onClick:e.bind(this)},l))))}},{key:"componentWillReceiveProps",value:function(e){var t=this.props.onOpen;this.setState({isShowPopup:e.showSimplert}),e.showSimplert&&t&&t()}},{key:"classSimplert",value:function(){var e=this.props.customClass,t=this.state.isShowPopup,n="simplert "+e;return t&&(n+=" simplert--shown"),n}},{key:"classBtnConfirm",value:function(){return"simplert__confirm "+this.props.customConfirmBtnClass}},{key:"classBtnClose",value:function(){return"simplert__close "+this.props.customCloseBtnClass}},{key:"createMessageHTML",value:function(e){return{__html:e}}},{key:"closeSimplert",value:function(e){var t=this.props.onClose;e.preventDefault(),this.setState({isShowPopup:!1}),t&&t()}},{key:"confirmSimplert",value:function(e){var t=this.props.onConfirm;e.preventDefault(),this.setState({isShowPopup:!0}),t&&t()}},{key:"closeOverlaySimplert",value:function(e){var t=this.props.disableOverlayClick;e.target.className.indexOf("simplert--shown")>0&&!t&&this.setState({isShowPopup:!1})}}]),t}(c.default.Component);d.propTypes={showSimplert:f.default.bool.isRequired,title:f.default.string,message:f.default.any,type:f.default.string,customClass:f.default.string,customIconUrl:f.default.string,onOpen:f.default.func,customCloseBtnText:f.default.string,customCloseBtnClass:f.default.string,onClose:f.default.func,useConfirmBtn:f.default.bool,customConfirmBtnText:f.default.string,customConfirmBtnClass:f.default.string,onConfirm:f.default.func,disableOverlayClick:f.default.bool,hideAllButton:f.default.bool};d.defaultProps={showSimplert:!1,title:"",message:"",type:"info",customClass:"",customIconUrl:"",onOpen:null,customCloseBtnText:"Close",customCloseBtnClass:"",onClose:null,useConfirmBtn:!1,customConfirmBtnText:"Confirm",customConfirmBtnClass:"",onConfirm:null,disableOverlayClick:!1,hideAllButton:!1},t.default=d},function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t,n){"use strict";"function"==typeof Symbol&&Symbol.iterator;e.exports=n(4)()},function(e,t,n){"use strict";var r=n(5),o=n(6),i=n(7);e.exports=function(){function e(e,t,n,r,s,a){a!==i&&o(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return n.checkPropTypes=r,n.PropTypes=n,n}},function(e,t,n){"use strict";function r(e){return function(){return e}}var o=function(){};o.thatReturns=r,o.thatReturnsFalse=r(!1),o.thatReturnsTrue=r(!0),o.thatReturnsNull=r(null),o.thatReturnsThis=function(){return this},o.thatReturnsArgument=function(e){return e},e.exports=o},function(e,t,n){"use strict";function r(e,t,n,r,i,s,a,l){if(o(t),!e){var c;if(void 0===t)c=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var u=[n,r,i,s,a,l],p=0;c=new Error(t.replace(/%s/g,function(){return u[p++]})),c.name="Invariant Violation"}throw c.framesToPop=1,c}}var o=function(e){};e.exports=r},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,n){var r=n(9);"string"==typeof r&&(r=[[e.i,r,""]]);var o={};o.transform=void 0;n(11)(r,o);r.locals&&(e.exports=r.locals)},function(e,t,n){t=e.exports=n(10)(void 0),t.push([e.i,"html {\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n  -o-box-sizing: border-box;\n  -ms-box-sizing: border-box; }\n\n*, *:before, *:after {\n  box-sizing: inherit; }\n\n.simplert {\n  font-size: 14px;\n  line-height: 1.15; }\n\n.simplert {\n  position: fixed;\n  z-index: 999;\n  top: 0;\n  left: 0;\n  display: none;\n  overflow: auto;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  background-color: black;\n  background-color: rgba(0, 0, 0, 0.4); }\n\n.simplert--shown {\n  display: flex;\n  align-items: center; }\n\n.simplert--shown .simplert__content {\n  animation-name: zoomIn;\n  animation-duration: .3s;\n  animation-fill-mode: both; }\n\n.simplert__header {\n  padding: 2em 0; }\n\n.simplert__title {\n  font-size: 30px;\n  display: block; }\n\n.simplert__content {\n  position: relative;\n  width: 90%;\n  max-width: 400px;\n  margin: 0 auto;\n  padding: 0 20px;\n  background-color: #fff;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  -webkit-border-radius: 0.3em;\n  -moz-border-radius: 0.3em;\n  border-radius: 0.3em; }\n\n@media only screen and (min-width: 768px) {\n  .simplert__content {\n    width: 30%; } }\n\n.simplert__body {\n  padding-bottom: 1em; }\n\n.simplert__icon {\n  position: relative;\n  width: 80px;\n  height: 80px;\n  margin: 10px auto;\n  -webkit-border-radius: 50%;\n  -moz-border-radius: 50%;\n  border-radius: 50%; }\n\n.simplert__icon--info {\n  border: 4px solid #c9dae1; }\n\n.simplert__icon--success {\n  border: 4px solid #a5dc86; }\n\n.simplert__icon--warning {\n  border: 4px solid #f8bb86; }\n\n.simplert__icon--error {\n  border: 4px solid #f27474; }\n\n.simplert__icon img {\n  width: 80px;\n  height: 80px; }\n\n.simplert__line {\n  position: absolute;\n  z-index: 2;\n  display: block;\n  height: 5px;\n  border-radius: 2px; }\n\n.simplert__line--info {\n  position: absolute;\n  top: 19px;\n  left: 50%;\n  width: 7px;\n  height: 7px;\n  margin-left: -3px;\n  border-radius: 50%;\n  background-color: #c9dae1; }\n\n.simplert__line--info-2 {\n  position: absolute;\n  bottom: 15px;\n  left: 50%;\n  width: 5px;\n  height: 29px;\n  margin-left: -2px;\n  border-radius: 2px;\n  background-color: #c9dae1; }\n\n.simplert__line--success {\n  top: 44px;\n  left: 6px;\n  width: 25px;\n  -webkit-transform: rotate(45deg);\n  transform: rotate(45deg);\n  background-color: #a5dc86; }\n\n.simplert__line--success-2 {\n  top: 38px;\n  right: 6px;\n  width: 47px;\n  -webkit-transform: rotate(-45deg);\n  transform: rotate(-45deg);\n  background-color: #a5dc86; }\n\n.simplert__line--warning {\n  position: absolute;\n  top: 10px;\n  left: 50%;\n  width: 5px;\n  height: 35px;\n  margin-left: -2px;\n  -webkit-border-radius: 2px;\n  border-radius: 2px;\n  background-color: #f8bb86; }\n\n.simplert__line--warning-2 {\n  position: absolute;\n  bottom: 10px;\n  left: 50%;\n  width: 7px;\n  height: 7px;\n  margin-left: -3px;\n  -webkit-border-radius: 50%;\n  border-radius: 50%;\n  background-color: #f8bb86; }\n\n.simplert__line--error {\n  top: 35px;\n  left: 13px;\n  width: 47px;\n  -webkit-transform: rotate(45deg);\n  transform: rotate(45deg);\n  background-color: #f27474; }\n\n.simplert__line--error-2 {\n  top: 35px;\n  right: 13px;\n  width: 47px;\n  -webkit-transform: rotate(-45deg);\n  transform: rotate(-45deg);\n  background-color: #f27474; }\n\n.simplert__footer {\n  padding: 1em 0; }\n\n.simplert__close, .simplert__confirm {\n  display: inline-block;\n  margin: 0 .5em;\n  padding: 10px 20px;\n  cursor: pointer;\n  text-align: center;\n  color: #fff;\n  border: none;\n  outline: none;\n  background-color: #068ac9;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  -webkit-border-radius: 0.3em;\n  -moz-border-radius: 0.3em;\n  border-radius: 0.3em; }\n\n@keyframes zoomIn {\n  from {\n    transform: scale3d(0.3, 0.3, 0.3);\n    opacity: 0; }\n  50% {\n    opacity: 1; } }\n",""])},function(e,t,n){"use strict";function r(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var i=o(r);return[n].concat(r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"})).concat([i]).join("\n")}return[n].join("\n")}function o(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=r(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<e.length;o++){var s=e[o];"number"==typeof s[0]&&r[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),t.push(s))}},t}},function(e,t,n){function r(e,t){for(var n=0;n<e.length;n++){var r=e[n],o=m[r.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](r.parts[i]);for(;i<r.parts.length;i++)o.parts.push(u(r.parts[i],t))}else{for(var s=[],i=0;i<r.parts.length;i++)s.push(u(r.parts[i],t));m[r.id]={id:r.id,refs:1,parts:s}}}}function o(e,t){for(var n=[],r={},o=0;o<e.length;o++){var i=e[o],s=t.base?i[0]+t.base:i[0],a=i[1],l=i[2],c=i[3],u={css:a,media:l,sourceMap:c};r[s]?r[s].parts.push(u):n.push(r[s]={id:s,parts:[u]})}return n}function i(e,t){var n=b(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=g[g.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),g.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t)}}function s(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=g.indexOf(e);t>=0&&g.splice(t,1)}function a(e){var t=document.createElement("style");return e.attrs.type="text/css",c(t,e.attrs),i(e,t),t}function l(e){var t=document.createElement("link");return e.attrs.type="text/css",e.attrs.rel="stylesheet",c(t,e.attrs),i(e,t),t}function c(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function u(e,t){var n,r,o,i;if(t.transform&&e.css){if(!(i=t.transform(e.css)))return function(){};e.css=i}if(t.singleton){var c=v++;n=_||(_=a(t)),r=p.bind(null,n,c,!1),o=p.bind(null,n,c,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=l(t),r=d.bind(null,n,t),o=function(){s(n),n.href&&URL.revokeObjectURL(n.href)}):(n=a(t),r=f.bind(null,n),o=function(){s(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}function p(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=y(t,o);else{var i=document.createTextNode(o),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(i,s[t]):e.appendChild(i)}}function f(e,t){var n=t.css,r=t.media;if(r&&e.setAttribute("media",r),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function d(e,t,n){var r=n.css,o=n.sourceMap,i=void 0===t.convertToAbsoluteUrls&&o;(t.convertToAbsoluteUrls||i)&&(r=x(r)),o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var s=new Blob([r],{type:"text/css"}),a=e.href;e.href=URL.createObjectURL(s),a&&URL.revokeObjectURL(a)}var m={},h=function(e){var t;return function(){return void 0===t&&(t=e.apply(this,arguments)),t}}(function(){return window&&document&&document.all&&!window.atob}),b=function(e){var t={};return function(n){return void 0===t[n]&&(t[n]=e.call(this,n)),t[n]}}(function(e){return document.querySelector(e)}),_=null,v=0,g=[],x=n(12);e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");t=t||{},t.attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||(t.singleton=h()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=o(e,t);return r(n,t),function(e){for(var i=[],s=0;s<n.length;s++){var a=n[s],l=m[a.id];l.refs--,i.push(l)}if(e){r(o(e,t),t)}for(var s=0;s<i.length;s++){var l=i[s];if(0===l.refs){for(var c=0;c<l.parts.length;c++)l.parts[c]();delete m[l.id]}}}};var y=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t,n){"use strict";e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,r=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var o=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(o))return e;var i;return i=0===o.indexOf("//")?o:0===o.indexOf("/")?n+o:r+o.replace(/^\.\//,""),"url("+JSON.stringify(i)+")"})}}])});
//# sourceMappingURL=simplert.bundle.js.map