/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../has","../Logger","../MapUtils"],(function(e,n,r,t,o){"use strict";const u=t.getLogger("esri.core.accessorSupport.ensureTypes");function s(e){return null==e?e:new Date(e)}function a(e){return null==e?e:!!e}function i(e){return null==e?e:e.toString()}function l(e){return null==e?e:(e=parseFloat(e),isNaN(e)?0:e)}function c(e){return null==e?e:Math.round(parseFloat(e))}function f(e){return e&&e.constructor&&void 0!==e.constructor.__accessorMetadata__}function p(e,n){return null!=n&&e&&!(n instanceof e)}function y(e){return e&&"isCollection"in e}function g(e){return e&&e.Type?"function"==typeof e.Type?e.Type:e.Type.base:null}function v(e,n){if(!n||!n.constructor||!y(n.constructor))return d(e,n)?n:new e(n);const r=g(e.prototype.itemType),t=g(n.constructor.prototype.itemType);return r?t?r===t?n:r.prototype.isPrototypeOf(t.prototype)?new e(n):(d(e,n),n):new e(n):n}function d(e,n){return!!f(n)&&(u.error("Accessor#set","Assigning an instance of '"+(n.declaredClass||"unknown")+"' which is not a subclass of '"+b(e)+"'"),!0)}function h(e,n){return null==n?n:y(e)?v(e,n):p(e,n)?d(e,n)?n:new e(n):n}function b(e){return e&&e.prototype&&e.prototype.declaredClass||"unknown"}const m=new WeakMap;function A(e){switch(e){case Number:return l;case C:return c;case Boolean:return a;case String:return i;case Date:return s;default:return o.getOrCreateMapValue(m,e,(()=>h.bind(null,e)))}}function w(e,n){const r=A(e);return 1===arguments.length?r:r(n)}function T(e,n,r){return 1===arguments.length?T.bind(null,e):n?Array.isArray(n)?n.map((n=>e(n,r))):[e(n,r)]:n}function $(e,n){return 1===arguments.length?T((n=>w(e,n))):T((n=>w(e,n)),n)}function k(e,n,r){return 0!==n&&Array.isArray(r)?r.map((r=>k(e,n-1,r))):e(r)}function O(e,n,r){if(2===arguments.length)return r=>O(e,n,r);if(!r)return r;r=k(e,n,r);let t=n,o=r;for(;t>0&&Array.isArray(o);)t--,o=o[0];if(void 0!==o)for(let u=0;u<t;u++)r=[r];return r}function S(e,n,r){return 2===arguments.length?O((n=>w(e,n)),n):O((n=>w(e,n)),n,r)}function M(e){return!!Array.isArray(e)&&!e.some((n=>{const r=typeof n;return!("string"===r||"number"===r||"function"===r&&e.length>1)}))}function N(e,n){if(2===arguments.length)return N(e).call(null,n);const r=new Set,t=e.filter((e=>"function"!=typeof e)),o=e.filter((e=>"function"==typeof e));for(const u of e)"string"!=typeof u&&"number"!=typeof u||r.add(u);let s=null,a=null;return(e,n)=>{if(null==e)return e;const i=typeof e,l="string"===i||"number"===i;return l&&(r.has(e)||o.some((e=>"string"===i&&e===String||"number"===i&&e===Number)))||"object"===i&&o.some((n=>!p(e,n)))?e:(l&&t.length?(s||(s=t.map((e=>"string"==typeof e?`'${e}'`:`${e}`)).join(", ")),u.error("Accessor#set",`'${e}' is not a valid value for this property, only the following values are valid: ${s}`)):"object"==typeof e&&o.length?(a||(a=o.map((e=>b(e))).join(", ")),u.error("Accessor#set",`'${e}' is not a valid value for this property, value must be one of ${a}`)):u.error("Accessor#set",`'${e}' is not a valid value for this property`),n&&(n.valid=!1),null)}}function j(e,n){if(2===arguments.length)return j(e).call(null,n);const r={},t=[],o=[];for(const u in e.typeMap){const n=e.typeMap[u];r[u]=w(n),t.push(b(n)),o.push(u)}const s=()=>`'${t.join("', '")}'`,a=()=>`'${o.join("', '")}'`,i="string"==typeof e.key?n=>n[e.key]:e.key;return n=>{if(e.base&&!p(e.base,n))return n;if(null==n)return n;const t=i(n)||e.defaultKeyValue,o=r[t];if(!o)return u.error("Accessor#set",`Invalid property value, value needs to be one of ${s()}, or a plain object that can autocast (having .type = ${a()})`),null;if(!p(e.typeMap[t],n))return n;if("string"==typeof e.key&&!f(n)){const r={};for(const t in n)t!==e.key&&(r[t]=n[t]);return o(r)}return o(n)}}let C=n._createClass((function(){}));const _={native:e=>({type:"native",value:e}),array:e=>({type:"array",value:e}),oneOf:e=>({type:"one-of",values:e})};function B(e){if(!e||!("type"in e))return!1;switch(e.type){case"native":case"array":case"one-of":return!0}return!1}function D(e){switch(e.type){case"native":return w(e.value);case"array":return T(D(e.value));case"one-of":return F(e);default:return null}}function F(e){let n=null;return(r,t)=>L(r,e)?r:(null==n&&(n=I(e)),u.error("Accessor#set",`Invalid property value, value needs to be of type ${n}`),t&&(t.valid=!1),null)}function I(e){switch(e.type){case"native":switch(e.value){case Number:return"number";case String:return"string";case Boolean:return"boolean";case C:return"integer";case Date:return"date";default:return b(e.value)}case"array":return`array of ${I(e.value)}`;case"one-of":{const n=e.values.map((e=>I(e)));return`one of ${n.slice(0,n.length-1)} or ${n[n.length-1]}`}}return"unknown"}function L(e,n){if(null==e)return!0;switch(n.type){case"native":switch(n.value){case Number:case C:return"number"==typeof e;case Boolean:return"boolean"==typeof e;case String:return"string"==typeof e}return e instanceof n.value;case"array":return!!Array.isArray(e)&&!e.some((e=>!L(e,n.value)));case"one-of":return n.values.some((n=>L(e,n)))}}e.Integer=C,e.ensureArray=$,e.ensureArrayTyped=T,e.ensureBoolean=a,e.ensureClass=h,e.ensureDate=s,e.ensureInteger=c,e.ensureLongFormType=D,e.ensureNArray=S,e.ensureNArrayTyped=O,e.ensureNumber=l,e.ensureOneOf=N,e.ensureOneOfType=j,e.ensureString=i,e.ensureType=w,e.isClassedType=f,e.isLongFormType=B,e.isOneOf=M,e.requiresType=p,e.types=_,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));