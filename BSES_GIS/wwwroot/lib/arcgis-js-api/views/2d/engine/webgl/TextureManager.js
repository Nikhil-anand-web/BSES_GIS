/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../../../../chunks/_rollupPluginBabelHelpers","../../../../config","../../../../request","../../../../core/BidiText","../../../../core/Error","../../../../core/fontUtils","../../../../core/has","../../../../core/Logger","../../../../core/mathUtils","../../../../core/promiseUtils","../../../../core/screenUtils","../../../../chunks/vec2","../../../../chunks/vec2f32","../../../../symbols/cim/Rasterizer","./definitions","./enums","./GlyphMosaic","./GlyphSource","./SDFConverter","./SpriteMosaic","./Utils","./animatedFormats/AnimatableTextureResource","./animatedFormats/utils","./util/Result","./util/symbolUtils","../../../support/QueueProcessor","../../../webgl/enums"],(function(e,t,i,s,n,r,o,a,h,c,u,l,d,g,p,_,f,m,w,T,y,I,M,R,S,P,x){"use strict";const z=d.create(),E="arial-unicode-ms-regular",b=a.getLogger("esri.views.2d.engine.webgl.TextureManager");function v(e,t){const i=Math.round(u.pt2px(t)*window.devicePixelRatio),s=i>=128?2:4;return Math.min(e,i*s)}const A=(e,t,i)=>b.error(new n(e,t,i));let G=function(){function t(e,t,i){this.mosaicType=e,this.page=t,this.sdf=i}return t.fromMosaic=function(e,i){return new t(e,i.page,i.sdf)},e._createClass(t)}();return function(){function a(e,s,r){this._requestRender=e,this.resourceManager=s,this._allowNonPowerOfTwo=r,this._invalidFontsMap=new Map,this._sdfConverter=new w(p.SDF_TEXTURE_SIZE),this._bindingInfos=new Array,this._hashToBindingIndex=new Map,this._ongoingRasterizations=new Map,this._imageRequestQueue=new P.QueueProcessor({concurrency:10,process:async(e,t)=>{c.throwIfAborted(t);try{return await i(e,{responseType:"image",signal:t})}catch(s){if(!c.isAbortError(s))throw new n("mapview-invalid-resource",`Could not fetch requested resource at ${e}`,s);throw s}}}),this._spriteMosaic=new T(2048,2048,500),this._glyphSource=new m(`${t.fontsUrl}/{fontstack}/{range}.pbf`),this._glyphMosaic=new f(1024,1024,this._glyphSource),this._rasterizer=new g(s)}var d=a.prototype;return d.dispose=function(){this._spriteMosaic.dispose(),this._glyphMosaic.dispose(),this._rasterizer.dispose(),this._sdfConverter.dispose(),this._spriteMosaic=null,this._glyphMosaic=null,this._sdfConverter=null,this._hashToBindingIndex.clear(),this._hashToBindingIndex=null,this._bindingInfos=null,this._ongoingRasterizations.clear(),this._ongoingRasterizations=null,this._imageRequestQueue.clear(),this._imageRequestQueue=null},d.rasterizeItem=async function(e,t,i,s){if(null==e)return A("mapview-null-resource","Unable to rasterize null resource"),null;switch(e.type){case"text":case"esriTS":{const t=await this._rasterizeText(e,i,s);return t.forEach((e=>this._setTextureBinding(_.MosaicType.GLYPH,e))),{glyphMosaicItems:t}}default:{if(y.is3D(e))return A("mapview-invalid-type",`MapView does not support symbol type: ${e.type}`,e),null;const i=await this._rasterizeSpriteSymbol(e,t,s);return R.ok(i)&&i&&this._setTextureBinding(_.MosaicType.SPRITE,i),{spriteMosaicItem:i}}}},d.bindTextures=function(e,t,i,s=!1){if(0===i.textureBinding)return;const n=this._bindingInfos[i.textureBinding-1],r=n.page,o=s?x.TextureSamplingMode.LINEAR_MIPMAP_LINEAR:x.TextureSamplingMode.LINEAR;switch(n.mosaicType){case _.MosaicType.SPRITE:{const i=this.sprites.getWidth(r),s=this.sprites.getHeight(r),n=l.set(z,i,s);return this._spriteMosaic.bind(e,o,r,p.TEXTURE_BINDING_SPRITE_ATLAS),t.setUniform1i("u_texture",p.TEXTURE_BINDING_SPRITE_ATLAS),void t.setUniform2fv("u_mosaicSize",n)}case _.MosaicType.GLYPH:{const i=this.glyphs.width,s=this.glyphs.height,n=l.set(z,i,s);return this._glyphMosaic.bind(e,o,r,p.TEXTURE_BINDING_GLYPH_ATLAS),t.setUniform1i("u_texture",p.TEXTURE_BINDING_GLYPH_ATLAS),void t.setUniform2fv("u_mosaicSize",n)}default:b.error("mapview-texture-manager",`Cannot handle unknown type ${n.mosaicType}`)}},d._hashMosaic=function(e,t){return 1|e<<1|(t.sdf?1:0)<<2|t.page<<3},d._setTextureBinding=function(e,t){const i=this._hashMosaic(e,t);if(!this._hashToBindingIndex.has(i)){const s=G.fromMosaic(e,t),n=this._bindingInfos.length+1;this._hashToBindingIndex.set(i,n),this._bindingInfos.push(s)}t.textureBinding=this._hashToBindingIndex.get(i)},d._rasterizeText=async function(e,t,i){let n,a;if("cim"in e){const t=e;n=t.fontName,a=t.text}else{const t=e;n=r.getFullyQualifiedFontName(t.font),a=t.text}const h=this._invalidFontsMap.has(n),c=t||y.charCodes(s.bidiText(a)[0]);try{const e=h?E:n;return o("esri-2d-stabilize-glyphs")&&await this._glyphMosaic.preloadASCIIGlyphCache(e),await this._glyphMosaic.getGlyphItems(e,c,i)}catch(u){return A("mapview-invalid-resource",`Couldn't find font ${n}. Falling back to Arial Unicode MS Regular`),this._invalidFontsMap.set(n,!0),this._glyphMosaic.getGlyphItems(E,c,i)}},d._rasterizeSpriteSymbol=async function(e,t,i){if(y.isSimple(e))return;const s=S.keyFromSymbol(e);if(this._spriteMosaic.has(s))return this._spriteMosaic.getSpriteItem(s);if(y.isSVGResource(e)||y.isImageResource(e)&&!y.isMarkerPlacementInsidePolygon(e))return this._handleAsyncResource(s,e,i);const r=p.PATTERN_FILL_RASTERIZATION_SCALE,o=this._rasterizer.rasterizeJSONResource(e,r);if(o){const{size:t,image:i,sdf:n,simplePattern:r,rasterizationScale:a}=o;return this._addItemToMosaic(s,t,{type:"static",data:i},y.shouldRepeat(e),n,r,a)}return new n("TextureManager","unrecognized or null rasterized image")},d._handleAsyncResource=async function(e,t,i){if(this._ongoingRasterizations.has(e))return this._ongoingRasterizations.get(e);let s;s=y.isSVGResource(t)?this._handleSVG(t,e,i):this._handleImage(t,e,i),this._ongoingRasterizations.set(e,s);try{await s,this._ongoingRasterizations.delete(e)}catch{this._ongoingRasterizations.delete(e)}return s},d._handleSVG=async function(e,t,i){const s=[p.SDF_TEXTURE_SIZE,p.SDF_TEXTURE_SIZE],n=await this._sdfConverter.draw(e.path,i);return this._addItemToMosaic(t,s,{type:"static",data:new Uint32Array(n.buffer)},!1,!0,!0)},d._handleGIFOrPNG=async function(e,t,i){const s=y.getUrl(e);await this.resourceManager.fetchResource(s,i);let r=this.resourceManager.getResource(s);if(null==r)return new n("mapview-invalid-resource",`Could not fetch requested resource at ${s}.`);let o=r.width,a=r.height;if(r instanceof HTMLImageElement){"esriPMS"===e.type&&(o=Math.round(v(r.width,y.getPMSResourceSize(e))),a=Math.round(r.height*(o/r.width)));const i="cim"in e?e.cim.colorSubstitutions:void 0,{size:s,sdf:n,image:h}=this._rasterizer.rasterizeImageResource(o,a,r,i);return this._addItemToMosaic(t,s,{type:"static",data:h},y.shouldRepeat(e),n,!1)}this._allowNonPowerOfTwo||(o=h.nextPowerOfTwo(r.width+2*p.SPRITE_PADDING)-2*p.SPRITE_PADDING,a=h.nextPowerOfTwo(r.height+2*p.SPRITE_PADDING)-2*p.SPRITE_PADDING),o===r.width&&a===r.height||(r=M.resize(r,o,a));const c=e.animatedSymbolProperties||{},u=e.objectId,l=new I.AnimatableTextureResource(r,this._requestRender,c,u);return this._addItemToMosaic(t,[l.width,l.height],{type:"animated",data:l},y.shouldRepeat(e),!1,!1)},d._handleImage=async function(e,t,i){if(y.isGIF(e)||y.isPNG(e))return this._handleGIFOrPNG(e,t,i);const s=y.getUrl(e);try{let n;const r=this.resourceManager.getResource(s);if(null!=r&&r instanceof HTMLImageElement)n=r;else{const{data:e}=await this._imageRequestQueue.push(s,{...i});n=e}if(y.isSVGImage(s))if("width"in e&&"height"in e)n.width=u.pt2px(e.width),n.height=u.pt2px(e.height);else if("cim"in e){const t=e.cim;n.width=u.pt2px(t.width??t.scaleX*t.size),n.height=u.pt2px(t.size)}if(!n.width||!n.height)return null;let o=n.width,a=n.height;"esriPMS"===e.type&&(o=Math.round(v(n.width,y.getPMSResourceSize(e))),a=Math.round(n.height*(o/n.width)));const h="cim"in e?e.cim.colorSubstitutions:void 0,{size:c,sdf:l,image:d}=this._rasterizer.rasterizeImageResource(o,a,n,h);return this._addItemToMosaic(t,c,{type:"static",data:d},y.shouldRepeat(e),l,!1)}catch(A){if(!c.isAbortError(A))return new n("mapview-invalid-resource",`Could not fetch requested resource at ${s}. ${A.message}`)}},d._addItemToMosaic=function(e,t,i,s,n,r,o){return this._spriteMosaic.addSpriteItem(e,t,i,s,n,r,o)},e._createClass(a,[{key:"sprites",get:function(){return this._spriteMosaic}},{key:"glyphs",get:function(){return this._glyphMosaic}}]),a}()}));
