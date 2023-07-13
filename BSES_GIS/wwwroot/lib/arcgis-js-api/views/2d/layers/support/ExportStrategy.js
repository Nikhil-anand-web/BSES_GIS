/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../../../../chunks/_rollupPluginBabelHelpers","../../../../chunks/tslib.es6","../../../../core/Accessor","../../../../core/has","../../../../core/promiseUtils","../../../../core/accessorSupport/decorators/property","../../../../core/accessorSupport/ensureType","../../../../core/arrayUtils","../../../../core/accessorSupport/decorators/subclass","../../../../geometry/support/aaBoundingRect","../../../../geometry/support/spatialReferenceUtils","../../../../layers/support/TileInfo","../../viewStateUtils","../../engine/Bitmap","../../tiling/TileInfoView","../../tiling/TileKey"],(function(e,t,o,r,i,a,n,s,p,c,d,l,u,m,h,g){"use strict";const y=c.create(),f=[0,0],_=new g(0,0,0,0),x={container:null,fetchSource:null,requestUpdate:null,imageMaxWidth:2048,imageMaxHeight:2048,imageRotationSupported:!1,imageNormalizationSupported:!1,hidpi:!1};let S=function(t){function o(e){var o;return(o=t.call(this,e)||this)._imagePromise=null,o.bitmaps=[],o.hidpi=x.hidpi,o.imageMaxWidth=x.imageMaxWidth,o.imageMaxHeight=x.imageMaxHeight,o.imageRotationSupported=x.imageRotationSupported,o.imageNormalizationSupported=x.imageNormalizationSupported,o.update=i.debounce((async(e,t)=>{if(i.throwIfAborted(t),!e.stationary||o.destroyed)return;const r=e.state,a=d.getInfo(r.spatialReference),n=o.hidpi?e.pixelRatio:1,s=o.imageNormalizationSupported&&r.worldScreenWidth&&r.worldScreenWidth<r.size[0],p=o.imageMaxWidth??0,c=o.imageMaxHeight??0;s?(f[0]=r.worldScreenWidth,f[1]=r.size[1]):o.imageRotationSupported?(f[0]=r.size[0],f[1]=r.size[1]):u.getOuterSize(f,r);const l=Math.floor(f[0]*n)>p||Math.floor(f[1]*n)>c,m=a&&(r.extent.xmin<a.valid[0]||r.extent.xmax>a.valid[1]),h=!o.imageNormalizationSupported&&m,g=!l&&!h,y=o.imageRotationSupported?r.rotation:0,_=o.container.children.slice();if(g){const e=s?r.paddedViewState.center:r.center;o._imagePromise&&console.error("Image promise was not defined!"),o._imagePromise=o._singleExport(r,f,e,r.resolution,y,n,t)}else{let e=Math.min(p,c);h&&(e=Math.min(r.worldScreenWidth,e)),o._imagePromise=o._tiledExport(r,e,n,t)}try{const e=await o._imagePromise??[];i.throwIfAborted(t);const r=[];if(o._imagePromise=null,o.destroyed)return;o.bitmaps=e;for(const t of _)e.includes(t)||r.push(t.fadeOut().then((()=>{t.remove(),t.destroy()})));for(const t of e)r.push(t.fadeIn());await Promise.all(r)}catch(x){o._imagePromise=null,i.throwIfAbortError(x)}}),5e3),o.updateExports=i.debounce((async e=>{const t=[];for(const r of o.container.children){if(!r.visible||!r.stage)return;t.push(e(r).then((()=>{r.invalidateTexture(),r.requestRender()})))}o._imagePromise=i.eachAlways(t).then((()=>o._imagePromise=null)),await o._imagePromise})),o}e._inherits(o,t);var r=o.prototype;return r.destroy=function(){this.bitmaps.forEach((e=>e.destroy())),this.bitmaps=[]},r._export=async function(e,t,o,r,a,n){const s=await this.fetchSource(e,Math.floor(t*a),Math.floor(o*a),{rotation:r,pixelRatio:a,signal:n});i.throwIfAborted(n);const p=new m.Bitmap(null,!0);return p.x=e.xmin,p.y=e.ymax,p.resolution=e.width/t,p.rotation=r,p.pixelRatio=a,p.opacity=0,this.container.addChild(p),await p.setSourceAsync(s,n),i.throwIfAborted(n),p},r._singleExport=async function(e,t,o,r,i,a,n){u.getBBox(y,o,r,t);const s=c.toExtent(y,e.spatialReference);return[await this._export(s,t[0],t[1],i,a,n)]},r._tiledExport=function(e,t,o,r){const i=l.create({size:t,spatialReference:e.spatialReference,scales:[e.scale]}),a=new h(i),n=a.getTileCoverage(e);if(!n)return null;const s=[];return n.forEach(((i,n,p,d)=>{_.set(i,n,p,0),a.getTileBounds(y,_);const l=c.toExtent(y,e.spatialReference);s.push(this._export(l,t,t,0,o,r).then((e=>(0!==d&&(_.set(i,n,p,d),a.getTileBounds(y,_),e.x=y[0],e.y=y[3]),e))))})),Promise.all(s)},e._createClass(o,[{key:"updating",get:function(){return!this.destroyed&&null!==this._imagePromise}}]),o}(o);t.__decorate([a.property()],S.prototype,"_imagePromise",void 0),t.__decorate([a.property()],S.prototype,"bitmaps",void 0),t.__decorate([a.property()],S.prototype,"container",void 0),t.__decorate([a.property()],S.prototype,"fetchSource",void 0),t.__decorate([a.property()],S.prototype,"hidpi",void 0),t.__decorate([a.property()],S.prototype,"imageMaxWidth",void 0),t.__decorate([a.property()],S.prototype,"imageMaxHeight",void 0),t.__decorate([a.property()],S.prototype,"imageRotationSupported",void 0),t.__decorate([a.property()],S.prototype,"imageNormalizationSupported",void 0),t.__decorate([a.property()],S.prototype,"requestUpdate",void 0),t.__decorate([a.property()],S.prototype,"updating",null),S=t.__decorate([p.subclass("esri.views.2d.layers.support.ExportStrategy")],S);return S}));