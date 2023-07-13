/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../Graphic","../../../core/arrayUtils","../../../core/Collection","../../../core/maybe","../../../core/accessorSupport/decorators/property","../../../core/accessorSupport/ensureType","../../../core/has","../../../core/accessorSupport/decorators/subclass","./LayerView2D","./graphics/GraphicContainer","./graphics/GraphicsView2D","../../layers/LayerView"],(function(i,e,t,h,s,r,a,c,n,o,p,g,l,u){"use strict";const d={remove(){},pause(){},resume(){}};let f=function(e){function a(){var i;return(i=e.apply(this,arguments)||this)._highlightIds=new Map,i}i._inherits(a,e);var c=a.prototype;return c.attach=function(){this.graphicsView=new l({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:this.layer.graphics,container:new g(this.view.featuresTilingScheme)}),this._updateHighlight(),this.container.addChild(this.graphicsView.container),this.addAttachHandles(this.layer.on("graphic-update",this.graphicsView.graphicUpdateHandler))},c.detach=function(){this.container.removeAllChildren(),this.graphicsView=r.destroyMaybe(this.graphicsView)},c.hitTest=async function(i){return this.graphicsView?this.graphicsView.hitTest(i).map((e=>({type:"graphic",graphic:e,mapPoint:i,layer:this.layer}))):null},c.fetchPopupFeatures=async function(i){return this.graphicsView?this.graphicsView.hitTest(i).filter((i=>!!i.popupTemplate)):[]},c.queryGraphics=function(){return Promise.resolve(this.graphicsView.graphics)},c.update=function(i){this.graphicsView.processUpdate(i)},c.moveStart=function(){},c.viewChange=function(){this.graphicsView.viewChange()},c.moveEnd=function(){},c.isUpdating=function(){return!this.graphicsView||this.graphicsView.updating},c.highlight=function(i){let e;"number"==typeof i?e=[i]:i instanceof t?e=[i.uid]:Array.isArray(i)&&i.length>0?e="number"==typeof i[0]?i:i.map((i=>i&&i.uid)):s.isCollection(i)&&i.length>0&&(e=i.map((i=>i&&i.uid)).toArray());const r=e?.filter(h.isSome);return r?.length?(this._addHighlight(r),{remove:()=>this._removeHighlight(r)}):d},c._addHighlight=function(i){for(const e of i)if(this._highlightIds.has(e)){const i=this._highlightIds.get(e);this._highlightIds.set(e,i+1)}else this._highlightIds.set(e,1);this._updateHighlight()},c._removeHighlight=function(i){for(const e of i)if(this._highlightIds.has(e)){const i=this._highlightIds.get(e)-1;0===i?this._highlightIds.delete(e):this._highlightIds.set(e,i)}this._updateHighlight()},c._updateHighlight=function(){this.graphicsView?.setHighlight(Array.from(this._highlightIds.keys()))},i._createClass(a)}(p.LayerView2DMixin(u));e.__decorate([a.property()],f.prototype,"graphicsView",void 0),f=e.__decorate([o.subclass("esri.views.2d.layers.GraphicsLayerView2D")],f);return f}));
