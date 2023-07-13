/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../chunks/_rollupPluginBabelHelpers","../../has","../beforeDestroy","../interfaces","../metadata","../tracking","../extensions/serializableProperty"],(function(e,t,r,o,s,i,n,a){"use strict";const c=new Set,l=new Set;function p(e){return r=>{r.prototype.declaredClass=e,f(r);const s=[],n=[];let a=r.prototype;for(;a;)a.hasOwnProperty("initialize")&&!c.has(a.initialize)&&(c.add(a.initialize),s.push(a.initialize)),a.hasOwnProperty("destroy")&&!l.has(a.destroy)&&(l.add(a.destroy),n.push(a.destroy)),a=Object.getPrototypeOf(a);c.clear(),l.clear();let p=function(e){function r(...i){var a;if((a=e.call(this,...i)||this).constructor===r&&"function"==typeof a.postscript){if(s.length&&Object.defineProperty(t._assertThisInitialized(a),"initialize",{enumerable:!1,configurable:!0,value(){for(let e=s.length-1;e>=0;e--)s[e].call(this)}}),n.length){let e=!1;const r=a[o.BEFORE_DESTROY_SYMBOL];Object.defineProperty(t._assertThisInitialized(a),"destroy",{enumerable:!1,configurable:!0,value(){if(!e){e=!0,r.call(this);for(let e=0;e<n.length;e++)n[e].call(this)}}})}a.postscript(...i)}return a}return t._inherits(r,e),t._createClass(r)}(r);return p.__accessorMetadata__=i.getPropertiesMetadata(r.prototype),p.prototype.declaredClass=e,p}}function u(e,t){return null==t.get?function(){const t=this.__accessor__,r=t.propertiesByName.get(e);if(void 0===r)return;n.trackAccess(r.observerObject);const o=t.store;return o.has(e)?o.get(e):r.metadata.value}:function(){const t=this.__accessor__,r=t.propertiesByName.get(e);if(void 0!==r)return r.getComputed(t)}}function f(e){const t=e.prototype,r=i.getPropertiesMetadata(t),o={};for(const i of Object.getOwnPropertyNames(r)){const e=r[i];a.processPrototypePropertyMetadata(e),o[i]={enumerable:!0,configurable:!0,get:u(i,e),set(t){const r=this.__accessor__;if(void 0!==r){if(!Object.isFrozen(this)){if(r.initialized&&e.readOnly)throw new TypeError(`[accessor] cannot assign to read-only property '${i}' of ${this.declaredClass}`);if(r.lifecycle===s.Lifecycle.CONSTRUCTED&&e.constructOnly)throw new TypeError(`[accessor] cannot assign to construct-only property '${i}' of ${this.declaredClass}`);r.set(i,t)}}else Object.defineProperty(this,i,{enumerable:!0,configurable:!0,writable:!0,value:t})}}}Object.defineProperties(e.prototype,o)}e.finalizeClass=f,e.subclass=p,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
