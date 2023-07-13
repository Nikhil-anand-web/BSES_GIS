/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../core/Clonable","../../../core/Collection","../../../core/accessorSupport/decorators/property","../../../core/accessorSupport/ensureType","../../../core/arrayUtils","../../../core/has","../../../core/accessorSupport/decorators/subclass","./External"],(function(e,t,r,o,a,s,i,l,c,n,u){"use strict";e.Metadata=function(e){function r(){var t;return(t=e.call(this)||this).externalSources=new a,t._explicitDisplaySource=null,t}t._inherits(r,e);var o=r.prototype;return o.clearSources=function(){this.displaySource=null,this.externalSources.removeAll()},o.getExternalSourcesOnService=function(e){return this.externalSources.items.filter((t=>u.externalIsOnService(t,e)))},t._createClass(r,[{key:"displaySource",get:function(){return this._explicitDisplaySource??this._implicitDisplaySource},set:function(e){if(null!=e&&!u.isDisplayExternal(e))throw new Error("Cannot use this source for display: it is not in a supported format.");this._explicitDisplaySource=e,e&&this.externalSources.every((t=>!u.externalSourcesAreEqual(t,e)))&&this.externalSources.add(e)}},{key:"_implicitDisplaySource",get:function(){return this.externalSources.find(u.isDisplayExternal)}}]),r}(o.Clonable),r.__decorate([s.property()],e.Metadata.prototype,"externalSources",void 0),r.__decorate([s.property()],e.Metadata.prototype,"displaySource",null),r.__decorate([s.property()],e.Metadata.prototype,"_implicitDisplaySource",null),r.__decorate([s.property()],e.Metadata.prototype,"_explicitDisplaySource",void 0),e.Metadata=r.__decorate([n.subclass("esri.geometry.support.meshUtils.Metadata")],e.Metadata),Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
