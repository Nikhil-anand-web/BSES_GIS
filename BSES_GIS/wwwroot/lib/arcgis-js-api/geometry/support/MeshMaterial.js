/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../Color","../../core/JSONSupport","../../core/accessorSupport/decorators/property","../../core/accessorSupport/ensureType","../../core/arrayUtils","../../core/has","../../core/accessorSupport/decorators/subclass","./MeshTexture","./MeshTextureTransform"],(function(e,o,r,t,l,n,u,s,i,a,c){"use strict";var p;let d=p=function(o){function r(e){var r;return(r=o.call(this,e)||this).color=null,r.colorTexture=null,r.colorTextureTransform=null,r.normalTexture=void 0,r.normalTextureTransform=void 0,r.alphaMode="auto",r.alphaCutoff=.5,r.doubleSided=!0,r}e._inherits(r,o);var t=r.prototype;return t.clone=function(){return this.cloneWithDeduplication(null,new Map)},t.cloneWithDeduplication=function(e,o){const r=null!=e?e.get(this):null;if(r)return r;const t=new p(this.clonePropertiesWithDeduplication(o));return null!=e&&e.set(this,t),t},t.clonePropertiesWithDeduplication=function(e){return{color:null!=this.color?this.color.clone():null,colorTexture:this.colorTexture?.cloneWithDeduplication(e),normalTexture:this.normalTexture?.cloneWithDeduplication(e),alphaMode:this.alphaMode,alphaCutoff:this.alphaCutoff,doubleSided:this.doubleSided,colorTextureTransform:this.colorTextureTransform?.clone(),normalTextureTransform:this.normalTextureTransform?.clone()}},t.getMemoryUsage=function(){let e=0;return e+=null!=this.color?16:0,null!=this.colorTexture&&(e+=this.colorTexture.memoryUsage),e+=null!=this.colorTextureTransform?20:0,null!=this.normalTexture&&(e+=this.normalTexture.memoryUsage),e+=null!=this.normalTextureTransform?20:0,e},e._createClass(r,[{key:"memoryUsage",get:function(){return this.getMemoryUsage()}}]),r}(t.JSONSupport);o.__decorate([l.property({type:r,json:{write:!0}})],d.prototype,"color",void 0),o.__decorate([l.property({type:a,json:{write:!0}})],d.prototype,"colorTexture",void 0),o.__decorate([l.property({type:c,json:{write:!0}})],d.prototype,"colorTextureTransform",void 0),o.__decorate([l.property({type:a,json:{write:!0}})],d.prototype,"normalTexture",void 0),o.__decorate([l.property({type:c,json:{write:!0}})],d.prototype,"normalTextureTransform",void 0),o.__decorate([l.property({nonNullable:!0,json:{write:!0}})],d.prototype,"alphaMode",void 0),o.__decorate([l.property({nonNullable:!0,json:{write:!0}})],d.prototype,"alphaCutoff",void 0),o.__decorate([l.property({nonNullable:!0,json:{write:!0}})],d.prototype,"doubleSided",void 0),d=p=o.__decorate([i.subclass("esri.geometry.support.MeshMaterial")],d);return d}));
