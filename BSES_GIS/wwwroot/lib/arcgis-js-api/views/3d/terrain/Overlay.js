/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../chunks/_rollupPluginBabelHelpers","../../../geometry/support/aaBoundingRect","./interfaces","../webgl-engine/lib/basicInterfaces","../webgl-engine/lib/LocalOriginFactory"],(function(e,t,r,i,a,s){"use strict";var n;e.OverlaySource=void 0,(n=e.OverlaySource||(e.OverlaySource={}))[n.None=0]="None",n[n.ColorAndWater=1]="ColorAndWater",n[n.Highlight=2]="Highlight",n[n.Occluded=3]="Occluded",n[n.ObjectAndLayerIdColor=4]="ObjectAndLayerIdColor";const o=1.3;let l=function(){function n(e,t){this.index=e,this.renderTargets=t,this._extent=r.create(),this.resolution=0,this.renderLocalOrigin=s.fromValues(0,0,0,"O"),this.pixelRatio=1,this.mapUnitsPerPixel=1,this.canvasGeometries=new g,this.hasDrapedFeatureSource=!1,this.hasDrapedRasterSource=!1,this.hasTargetWithoutRasterImage=!1,this.index=e,this.validTargets=new Array(t.renderTargets.length).fill(!1)}var o=n.prototype;return o.getValidTexture=function(e){return this.validTargets[e]?this.renderTargets.getTarget(e).getTexture():null},o.getColorTexture=function(t){const r=t===e.OverlaySource.ColorAndWater?this.renderTargets.getTarget(i.RenderTargetType.Color):t===e.OverlaySource.Highlight?this.renderTargets.getTarget(i.RenderTargetType.Highlight):t===e.OverlaySource.ObjectAndLayerIdColor?this.renderTargets.getTarget(i.RenderTargetType.ObjectAndLayerIdColor):this.renderTargets.getTarget(i.RenderTargetType.Occluded);return r?r.getTexture():null},o.getColorTextureNoRasterImage=function(){return this._needsColorWithoutRasterImage?this.getValidTexture(i.RenderTargetType.ColorNoRasterImage):this.hasDrapedFeatureSource?this.getValidTexture(i.RenderTargetType.Color):null},o.getNormalTexture=function(t){const r=t===e.OverlaySource.ColorAndWater?this.renderTargets.getTarget(i.RenderTargetType.Water):null;return r?r.getTexture():null},o.draw=function(e,t){const r=this.computeRenderTargetValidityBitfield();for(const a of this.renderTargets.renderTargets)a.type!==i.RenderTargetType.ColorNoRasterImage||this._needsColorWithoutRasterImage?this.validTargets[a.type]=e.drawTarget(this,a,t):this.validTargets[a.type]=!1;return r^this.computeRenderTargetValidityBitfield()?a.ValidationState.CHANGED:a.ValidationState.UNCHANGED},o.computeRenderTargetValidityBitfield=function(){const e=this.validTargets;return+e[i.RenderTargetType.Color]|+e[i.RenderTargetType.ColorNoRasterImage]<<1|+e[i.RenderTargetType.Highlight]<<2|+e[i.RenderTargetType.Water]<<3|+e[i.RenderTargetType.Occluded]<<4},o.setupGeometryViewsCyclical=function(e){this.setupGeometryViewsDirect();const t=.001*e.range;if(this._extent[0]-t<=e.min){const t=this.canvasGeometries.extents[this.canvasGeometries.numViews++];r.offset(this._extent,e.range,0,t)}if(this._extent[2]+t>=e.max){const t=this.canvasGeometries.extents[this.canvasGeometries.numViews++];r.offset(this._extent,-e.range,0,t)}},o.setupGeometryViewsDirect=function(){this.canvasGeometries.numViews=1,r.copy(this.canvasGeometries.extents[0],this._extent)},o.hasSomeSizedView=function(){for(let e=0;e<this.canvasGeometries.numViews;e++){const t=this.canvasGeometries.extents[e];if(t[0]!==t[2]&&t[1]!==t[3])return!0}return!1},o.applyViewport=function(e){e.setViewport(this.index===i.OverlayIndex.INNER?0:this.resolution,0,this.resolution,this.resolution)},t._createClass(n,[{key:"extent",get:function(){return this._extent}},{key:"_needsColorWithoutRasterImage",get:function(){return this.hasDrapedRasterSource&&this.hasDrapedFeatureSource&&this.hasTargetWithoutRasterImage}}]),n}(),g=t._createClass((function(){this.extents=[r.create(),r.create(),r.create()],this.numViews=0}));e.Overlay=l,e.OverlayStretch=o,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
