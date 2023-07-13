/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/Collection","../../core/JSONSupport","../../core/Warning","../../core/Logger","../../core/accessorSupport/ensureType","../../core/arrayUtils","../../core/has","../../core/Error","../../core/accessorSupport/decorators/subclass","../../geometry/Polygon","../../geometry/projection"],(function(e,t,r,o,n,s,i,c,a,l,u,p,f){"use strict";var h;let y=h=function(t){function r(e){return t.call(this,e)||this}e._inherits(r,t);var o=r.prototype;return o.clone=function(){return new h(this.items.map((e=>e.clone())))},o.write=function(e,t){return this.toJSON(t)},o.toJSON=function(e){const t=e?.layer?.spatialReference;return t?this.toArray().map((r=>{if(!t.equals(r.spatialReference)){if(!f.canProjectWithoutEngine(r.spatialReference,t))return e&&e.messages&&e.messages.push(new n("scenefilter:unsupported","Scene filters with incompatible spatial references are not supported",{modification:this,spatialReference:e.layer.spatialReference,context:e})),null;const o=new p;f.projectPolygon(r,o,t),r=o}const o=r.toJSON(e);return delete o.spatialReference,o})).filter((e=>null!=e)):(e?.messages&&e.messages.push(new n("scenefilter:unsupported","Writing Scene filters without context layer is not supported",{modification:this,spatialReference:e.layer.spatialReference,context:e})),this.toArray().map((t=>t.toJSON(e))))},r.fromJSON=function(e,t){const r=new h;return e.forEach((e=>r.add(p.fromJSON(e,t)))),r},e._createClass(r)}(o.JSONSupportMixin(r.ofType(p)));y=h=t.__decorate([u.subclass("esri.layers.support.PolygonCollection")],y);return y}));