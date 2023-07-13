/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../Graphic","../../../core/Collection","../../../core/reactiveUtils","../../../core/accessorSupport/decorators/property","../../../core/accessorSupport/ensureType","../../../core/arrayUtils","../../../core/has","../../../core/accessorSupport/decorators/subclass","../../../support/GraphicsCollection","../engine/flow/FlowView2D","./LayerView2D","./graphics/GraphicsView2D","./graphics/HighlightGraphicContainer","./imagery/ImageryView2D","./imagery/VectorFieldView2D","../../layers/ImageryLayerView","../../layers/LayerView","../../layers/RefreshableLayerView"],(function(e,t,i,r,s,a,h,n,c,o,l,u,w,d,y,p,v,g,b,f){"use strict";let m=function(t){function a(){var e;return(e=t.apply(this,arguments)||this)._exportImageVersion=-1,e._highlightGraphics=new l.GraphicsCollection,e._highlightView=void 0,e.layer=null,e.subview=null,e}e._inherits(a,t);var h=a.prototype;return h.hitTest=async function(e,t){return this.subview?[{type:"graphic",graphic:this.subview.hitTest(e),layer:this.layer,mapPoint:e}]:null},h.update=function(e){this.subview?.update(e)},h.attach=function(){this.layer.increaseRasterJobHandlerUsage(),this._setSubView(),this.view&&(this._highlightView=new d({view:this.view,graphics:this._highlightGraphics,requestUpdateCallback:()=>this.requestUpdate(),container:new y(this.view.featuresTilingScheme)}),this.container.addChild(this._highlightView.container)),this.addAttachHandles([s.watch((()=>this.layer.blendMode??"normal"),(e=>this.subview&&(this.subview.container.blendMode=e)),s.syncAndInitial),s.watch((()=>this.layer.effect??null),(e=>this.subview&&(this.subview.container.effect=e)),s.syncAndInitial),s.watch((()=>this.layer.exportImageServiceParameters.version),(e=>{e&&this._exportImageVersion!==e&&(this._exportImageVersion=e,this.requestUpdate())}),s.sync),s.watch((()=>this.timeExtent),(e=>{const{subview:t}=this;t&&(t.timeExtent=e,"redraw"in t?this.requestUpdate():t.redrawOrRefetch())}),s.sync),this.layer.on("redraw",(()=>{const{subview:e}=this;e&&("redraw"in e?e.redraw():e.redrawOrRefetch())})),s.watch((()=>this.layer.renderer),(()=>this._setSubView()))])},h.detach=function(){this.layer.decreaseRasterJobHandlerUsage(),this.container.removeAllChildren(),this._detachSubview(this.subview),this.subview?.destroy(),this.subview=null,this._highlightView?.destroy(),this._exportImageVersion=-1},h.moveStart=function(){},h.viewChange=function(){},h.moveEnd=function(){this.requestUpdate()},h.highlight=function(e,t){if(!((Array.isArray(e)?e[0]:r.isCollection(e)?e.at(0):e)instanceof i))return{remove:()=>{}};let s=[];return Array.isArray(e)||r.isCollection(e)?s=e.map((e=>e.clone())):e instanceof i&&(s=[e.clone()]),this._highlightGraphics.addMany(s),{remove:()=>{this._highlightGraphics.removeMany(s)}}},h.doRefresh=async function(){this.requestUpdate()},h.isUpdating=function(){return!this.subview||this.subview.updating},h._setSubView=function(){if(!this.view)return;const e=this.layer.renderer?.type;let t="imagery";if("vector-field"===e?t="imageryVF":"flow"===e&&(t="flow"),this.subview){const{type:e}=this.subview;if(e===t)return this._attachSubview(this.subview),void("flow"===e?this.subview.redrawOrRefetch():"imagery"===e&&"lerc"===this.layer.format?this.subview.redraw():this.requestUpdate());this._detachSubview(this.subview),this.subview?.destroy()}this.subview="imagery"===t?new p({layer:this.layer,view:this.view,timeExtent:this.timeExtent}):"imageryVF"===t?new v({layer:this.layer,view:this.view,timeExtent:this.timeExtent}):new u({layer:this.layer,layerView:this}),this._attachSubview(this.subview),this.requestUpdate()},h._attachSubview=function(e){e&&!e.attached&&(e.attach(),e.attached=!0,this.container.addChildAt(e.container,0),e.container.blendMode=this.layer.blendMode,e.container.effect=this.layer.effect)},h._detachSubview=function(e){e?.attached&&(this.container.removeChild(e.container),e.detach(),e.attached=!1)},e._createClass(a,[{key:"pixelData",get:function(){const{subview:e}=this;return this.updating||!e?null:"getPixelData"in e?e.getPixelData():null}}]),a}(g(f(w.LayerView2DMixin(b))));t.__decorate([a.property()],m.prototype,"pixelData",null),t.__decorate([a.property()],m.prototype,"subview",void 0),m=t.__decorate([o.subclass("esri.views.2d.layers.ImageryLayerView2D")],m);return m}));
