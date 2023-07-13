/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports"],(function(t){"use strict";
/*!
   * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
   * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
   * v1.4.2
   */var e="object"==typeof global&&global&&global.Object===Object&&global,n="object"==typeof self&&self&&self.Object===Object&&self,r=e||n||Function("return this")(),o=r.Symbol,i=Object.prototype,u=i.hasOwnProperty,a=i.toString,c=o?o.toStringTag:void 0;function f(t){var e=u.call(t,c),n=t[c];try{t[c]=void 0;var r=!0}catch(i){}var o=a.call(t);return r&&(e?t[c]=n:delete t[c]),o}var l=Object.prototype.toString;function v(t){return l.call(t)}var b="[object Null]",s="[object Undefined]",p=o?o.toStringTag:void 0;function d(t){return null==t?void 0===t?s:b:p&&p in Object(t)?f(t):v(t)}function y(t){return null!=t&&"object"==typeof t}var g="[object Symbol]";function j(t){return"symbol"==typeof t||y(t)&&d(t)==g}var m=/\s/;function O(t){for(var e=t.length;e--&&m.test(t.charAt(e)););return e}var h=/^\s+/;function T(t){return t?t.slice(0,O(t)+1).replace(h,""):t}function S(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}var x=NaN,w=/^[-+]0x[0-9a-f]+$/i,N=/^0b[01]+$/i,$=/^0o[0-7]+$/i,E=parseInt;function G(t){if("number"==typeof t)return t;if(j(t))return x;if(S(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=S(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=T(t);var n=N.test(t);return n||$.test(t)?E(t.slice(2),n?2:8):w.test(t)?x:+t}var M=function(){return r.Date.now()},W="Expected a function",k=Math.max,A=Math.min;function D(t,e,n){var r,o,i,u,a,c,f=0,l=!1,v=!1,b=!0;if("function"!=typeof t)throw new TypeError(W);function s(e){var n=r,i=o;return r=o=void 0,f=e,u=t.apply(i,n)}function p(t){return f=t,a=setTimeout(g,e),l?s(t):u}function d(t){var n=e-(t-c);return v?A(n,i-(t-f)):n}function y(t){var n=t-c;return void 0===c||n>=e||n<0||v&&t-f>=i}function g(){var t=M();if(y(t))return j(t);a=setTimeout(g,d(t))}function j(t){return a=void 0,b&&r?s(t):(r=o=void 0,u)}function m(){void 0!==a&&clearTimeout(a),f=0,r=c=o=a=void 0}function O(){return void 0===a?u:j(M())}function h(){var t=M(),n=y(t);if(r=arguments,o=this,c=t,n){if(void 0===a)return p(c);if(v)return clearTimeout(a),a=setTimeout(g,e),s(c)}return void 0===a&&(a=setTimeout(g,e)),u}return e=G(e)||0,S(n)&&(l=!!n.leading,i=(v="maxWait"in n)?k(G(n.maxWait)||0,e):i,b="trailing"in n?!!n.trailing:b),h.cancel=m,h.flush=O,h}t.Symbol=o,t.baseGetTag=d,t.debounce=D,t.freeGlobal=e,t.isObject=S,t.isObjectLike=y,t.isSymbol=j,t.root=r}));