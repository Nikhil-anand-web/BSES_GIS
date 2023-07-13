/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../geometry","../../core/Collection","../../core/Evented","../../core/JSONSupport","../../core/Loadable","../../core/reactiveUtils","../../core/string","../../core/accessorSupport/decorators/property","../../core/accessorSupport/ensureType","../../core/arrayUtils","../../core/has","../../core/accessorSupport/decorators/reader","../../core/accessorSupport/decorators/subclass","./kmlUtils","../../geometry/Extent"],(function(e,r,t,o,i,s,l,n,a,u,c,p,y,d,h,f,v){"use strict";var _;let b=_=function(r){function t(...t){var o;return(o=r.call(this,...t)||this).description=null,o.fullExtent=null,o.id=null,o.networkLink=null,o.parent=null,o.sublayers=null,o.title=null,o.sourceJSON=null,o.layer=null,o.addHandles([n.on((()=>o.sublayers),"after-add",(({item:r})=>{r.parent=e._assertThisInitialized(o),r.layer=o.layer}),n.sync),n.on((()=>o.sublayers),"after-remove",(({item:e})=>{e.layer=e.parent=null}),n.sync),n.watch((()=>o.sublayers),((r,t)=>{if(t)for(const e of t)e.layer=e.parent=null;if(r)for(const i of r)i.parent=e._assertThisInitialized(o),i.layer=o.layer}),n.sync),n.watch((()=>o.layer),(e=>{if(o.sublayers)for(const r of o.sublayers)r.layer=e}),n.sync)]),o}e._inherits(t,r);var i=t.prototype;return i.initialize=function(){n.whenOnce((()=>this.networkLink)).then((()=>n.whenOnce((()=>!0===this.visible)))).then((()=>this.load()))},i.load=function(e){if(!this.networkLink)return;if(this.networkLink.viewFormat)return;const r=null!=e?e.signal:null,t=this._fetchService(this._get("networkLink")?.href??"",r).then((e=>{const r=f.computeExtent(e.sublayers);this.fullExtent=v.fromJSON(r),this.sourceJSON=e;const t=c.ensureType(o.ofType(_),f.sublayersFromJSON(_,e));this.sublayers?this.sublayers.addMany(t):this.sublayers=t,this.layer?.emit("sublayer-update"),this.layer&&this.layer.notifyChange("visibleSublayers")}));return this.addResolvingPromise(t),Promise.resolve(this)},i.readVisible=function(e,r){return!!r.visibility},i._fetchService=function(e,r){return f.fetchService(e,this.layer.outSpatialReference,this.layer.refreshInterval,r).then((e=>f.parseKML(e.data)))},e._createClass(t,[{key:"visible",get:function(){return this._get("visible")},set:function(e){this._get("visible")!==e&&(this._set("visible",e),this.layer&&this.layer.notifyChange("visibleSublayers"))}}]),t}(i.EventedMixin(s.JSONSupportMixin(l)));r.__decorate([u.property()],b.prototype,"description",void 0),r.__decorate([u.property({type:v})],b.prototype,"fullExtent",void 0),r.__decorate([u.property()],b.prototype,"id",void 0),r.__decorate([u.property({readOnly:!0,value:null})],b.prototype,"networkLink",void 0),r.__decorate([u.property({json:{write:{allowNull:!0}}})],b.prototype,"parent",void 0),r.__decorate([u.property({type:o.ofType(_),json:{write:{allowNull:!0}}})],b.prototype,"sublayers",void 0),r.__decorate([u.property({value:null,json:{read:{source:"name",reader:e=>a.stripHTML(e)}}})],b.prototype,"title",void 0),r.__decorate([u.property({value:!0})],b.prototype,"visible",null),r.__decorate([d.reader("visible",["visibility"])],b.prototype,"readVisible",null),r.__decorate([u.property()],b.prototype,"sourceJSON",void 0),r.__decorate([u.property()],b.prototype,"layer",void 0),b=_=r.__decorate([h.subclass("esri.layers.support.KMLSublayer")],b);return b}));
