/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../handleUtils","./tracking/ObservationHandle"],(function(e,t,s,r){"use strict";let o=function(){function e(){this._observers=null,this.destroyed=!1}var s=e.prototype;return s.observe=function(e){if(this.destroyed||e.destroyed)return n;null==this._observers&&(this._observers=[]);const t=this._observers;let s=!1,o=!1;const i=t.length;for(let r=0;r<i;++r){const n=t[r];if(n.destroyed)o=!0;else if(n===e){s=!0;break}}return s||(t.push(e),o&&this._removeDestroyedObservers()),new r.ObservationHandle(t,e)},s._removeDestroyedObservers=function(){const e=this._observers;if(!e||0===e.length)return;const t=e.length;let s=0;for(let r=0;r<t;++r){for(;r+s<t;){if(!e[r+s].destroyed)break;++s}if(s>0){if(!(r+s<t))break;e[r]=e[r+s]}}e.length=t-s},s.destroy=function(){if(this.destroyed)return;this.destroyed=!0;const e=this._observers;if(null!=e){for(const t of e)t.onCommitted();this._observers=null}},t._createClass(e)}();const n=s.makeHandle();e.ObservableBase=o,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
