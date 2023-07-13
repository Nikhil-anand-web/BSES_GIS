/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../core/Accessor","../../../core/Identifiable","../../../core/maybe","../../../core/accessorSupport/decorators/property","../../../core/accessorSupport/ensureType","../../../core/arrayUtils","../../../core/has","../../../core/accessorSupport/decorators/subclass","./graphics/GraphicsProcessor"],(function(e,r,t,o,s,i,c,n,p,a,u){"use strict";let h=function(r){function t(e){var t;return(t=r.call(this,e)||this).processor=null,t.slicePlaneEnabled=!1,t.layer=new l,t}e._inherits(t,r);var o=t.prototype;return o.initialize=function(){this._set("processor",new u.GraphicsProcessor({owner:this}))},o.destroy=function(){this._set("processor",s.destroyMaybe(this.processor))},o.getHit=function(e){return this.processor.getHit(e)},o.whenGraphicBounds=function(e,r){return this.processor.whenGraphicBounds(e,r)},o.graphicChanged=function(e){this.processor.graphicsCore.graphicUpdateHandler(e)},o.queryGraphics=async function(){return this.loadedGraphics},o.fetchPopupFeatures=async function(e,r){return r?.clientGraphics??[]},o.highlight=function(e){return this.processor.highlight(e)},o.maskOccludee=function(e){return this.processor.maskOccludee(e)},e._createClass(t,[{key:"graphics",get:function(){return this.view?.graphics}},{key:"loadedGraphics",get:function(){return this.graphics}},{key:"updating",get:function(){return!!this.processor?.updating}},{key:"symbolUpdateType",get:function(){return this.processor.graphicsCore.symbolUpdateType}},{key:"updatePolicy",get:function(){return this.processor.graphicsCore.effectiveUpdatePolicy}}]),t}(o.IdentifiableMixin(t));r.__decorate([i.property({readOnly:!0})],h.prototype,"graphics",null),r.__decorate([i.property()],h.prototype,"loadedGraphics",null),r.__decorate([i.property({readOnly:!0})],h.prototype,"updating",null),r.__decorate([i.property({constructOnly:!0})],h.prototype,"view",void 0),r.__decorate([i.property()],h.prototype,"processor",void 0),r.__decorate([i.property({type:Boolean})],h.prototype,"slicePlaneEnabled",void 0),r.__decorate([i.property()],h.prototype,"layer",void 0),h=r.__decorate([a.subclass("esri.views.3d.layers.GraphicsView3D")],h);let l=function(r){function t(){var e;return(e=r.call(this)||this).type="graphics-view-3d-dummy",e.id=e.uid,e}return e._inherits(t,r),e._createClass(t)}(o.Identifiable);return h}));