/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../chunks/_rollupPluginBabelHelpers","./ImmutableArray","./ImmutablePointArray"],(function(t,e,i){"use strict";return function(e){function s(t,i,s,n,a){var h;return(h=e.call(this,t)||this)._lazyPath=[],h._hasZ=!1,h._hasM=!1,h._hasZ=s,h._hasM=n,h._spRef=i,h._cacheId=a,h}t._inherits(s,e);var n=s.prototype;return n.get=function(t){if(void 0===this._lazyPath[t]){const e=this._elements[t];if(void 0===e)return;this._lazyPath[t]=new i(e,this._spRef,this._hasZ,this._hasM,this._cacheId,t)}return this._lazyPath[t]},n.equalityTest=function(t){return t===this||null!==t&&(t instanceof s!=!1&&t.getUniqueHash()===this.getUniqueHash())},n.getUniqueHash=function(){return this._cacheId.toString()},t._createClass(s)}(e)}));
