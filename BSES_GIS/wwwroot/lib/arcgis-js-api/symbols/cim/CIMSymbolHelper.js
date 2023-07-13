/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../Color","../../symbols","../../core/BidiText","../../core/lang","../../core/Logger","../../core/RandomLCG","../../core/screenUtils","../../geometry/support/aaBoundingRect","../../geometry/support/boundsUtils","../../support/arcadeOnDemand","./CIMPlacements","./CIMSymbolDrawHelper","./enums","./utils","../../views/2d/arcade/callExpressionWithFeature","../../views/2d/engine/vectorTiles/GeometryUtils","../../views/2d/engine/webgl/definitions","../../views/2d/engine/webgl/mesh/templates/shapingUtils","../Font"],(function(e,t,r,o,a,i,n,s,l,c,f,m,y,u,p,h,M,d,S,b,g){"use strict";const C=Math.PI,I=C/2,k=Math.PI/180,x=96/72,P=4,L=n.getLogger("esri.symbols.cim.CIMSymbolHelper");function w(e){if(!e||!e.type)return null;let t;switch(e.type){case"cim":return e.data;case"web-style":return e;case"simple-marker":{const r=G.fromSimpleMarker(e);if(!r)return null;t=r;break}case"picture-marker":t=G.fromPictureMarker(e);break;case"simple-line":t=G.fromSimpleLineSymbol(e);break;case"simple-fill":t=G.fromSimpleFillSymbol(e);break;case"picture-fill":t=G.fromPictureFillSymbol(e);break;case"text":t=G.fromTextSymbol(e)}return{type:"CIMSymbolReference",symbol:t}}function v(e,t,r){switch(t.type){case"CIMSymbolReference":return v(e,t.symbol,r);case"CIMPointSymbol":null==r&&(r={x:0,y:0}),e.drawSymbol(t,r);break;case"CIMLineSymbol":null==r&&(r={paths:[[[0,0],[10,0]]]}),e.drawSymbol(t,r);break;case"CIMPolygonSymbol":null==r&&(r={rings:[[[0,0],[0,10],[10,10],[10,0],[0,0]]]}),e.drawSymbol(t,r);break;case"CIMTextSymbol":{const r={x:0,y:0};e.drawSymbol(t,r);break}case"CIMVectorMarker":{const r=new y.Placement;e.drawMarker(t,r);break}}return e.envelope()}function T(e){if(!e)return 0;switch(e.type){case"CIMMarkerPlacementAlongLineSameSize":case"CIMMarkerPlacementAlongLineRandomSize":case"CIMMarkerPlacementAtExtremities":case"CIMMarkerPlacementAtMeasuredUnits":case"CIMMarkerPlacementAtRatioPositions":case"CIMMarkerPlacementOnLine":case"CIMMarkerPlacementOnVertices":return Math.abs(e.offset);default:return 0}}function F(e){if(!e)return 0;switch(e.type){case"CIMGeometricEffectArrow":return Math.abs(.5*e.width);case"CIMGeometricEffectBuffer":return Math.abs(e.size);case"CIMGeometricEffectExtension":case"CIMGeometricEffectRadial":return Math.abs(e.length);case"CIMGeometricEffectJog":return Math.abs(.5*e.length);case"CIMGeometricEffectMove":return Math.max(Math.abs(h.getValue(e.offsetX)),Math.abs(h.getValue(e.offsetY)));case"CIMGeometricEffectOffset":case"CIMGeometricEffectOffsetTangent":return Math.abs(e.offset);case"CIMGeometricEffectRegularPolygon":return Math.abs(e.radius);case"CIMGeometricEffectRotate":case"CIMGeometricEffectScale":default:return 0;case"CIMGeometricEffectTaperedPolygon":return.5*Math.max(Math.abs(e.fromWidth),Math.abs(e.toWidth));case"CIMGeometricEffectWave":return Math.abs(e.amplitude);case"CIMGeometricEffectDonut":return Math.abs(e.width)}}function E(e){if(!e)return 0;let t=0;for(const r of e)t+=F(r);return t}let D=function(){function e(){}var r=e.prototype;return r.getSymbolInflateSize=function(e,t,r,o,a){return e||(e=[0,0,0,0]),t?this._getInflateSize(e,t,r,o,a):e},e.safeSize=function(e){const t=Math.max(Math.abs(e[0]),Math.abs(e[2])),r=Math.max(Math.abs(e[1]),Math.abs(e[3]));return Math.sqrt(t*t+r*r)},r._vectorMarkerBounds=function(e,t,r,o){let a=!0;const i=c.create();if(t&&t.markerGraphics)for(const n of t.markerGraphics){const t=[0,0,0,0];n.geometry&&(f.getBoundsXY(i,n.geometry),t[0]=0,t[1]=0,t[2]=0,t[3]=0,this.getSymbolInflateSize(t,n.symbol,r,0,o),i[0]+=t[0],i[1]+=t[1],i[2]+=t[2],i[3]+=t[3],a?(e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],a=!1):(e[0]=Math.min(e[0],i[0]),e[1]=Math.min(e[1],i[1]),e[2]=Math.max(e[2],i[2]),e[3]=Math.max(e[3],i[3])))}return e},r._getInflateSize=function(e,t,r,o,a){if(Y(t)){const i=this._getLayersInflateSize(e,t.symbolLayers,r,o,a),n=E(t.effects);return n>0&&(i[0]-=n,i[1]-=n,i[2]+=n,i[3]+=n),i}return this._getTextInflatedSize(e,t,a)},r._getLayersInflateSize=function(e,t,r,o,a){let i=!0;if(!t)return e;for(const n of t){if(!n)continue;let t=[0,0,0,0];switch(n.type){case"CIMSolidFill":case"CIMPictureFill":case"CIMHatchFill":case"CIMGradientFill":break;case"CIMSolidStroke":case"CIMPictureStroke":case"CIMGradientStroke":{const e=n;let r=e.width;null!=r&&(e.capStyle===p.LineCapStyle.Square||e.joinStyle===p.LineJoinStyle.Miter?r/=1.4142135623730951:r/=2,t[0]=-r,t[1]=-r,t[2]=r,t[3]=r);break}case"CIMCharacterMarker":case"CIMVectorMarker":case"CIMPictureMarker":{const e=n;if("CIMVectorMarker"===n.type){const e=n;if(t=this._vectorMarkerBounds(t,e,r,a),e.frame){const r=(e.frame.xmin+e.frame.xmax)/2,o=(e.frame.ymin+e.frame.ymax)/2;if(t[0]-=r,t[1]-=o,t[2]-=r,t[3]-=o,null!=e.size){const r=e.size/(e.frame.ymax-e.frame.ymin);t[0]*=r,t[1]*=r,t[2]*=r,t[3]*=r}}}else if("CIMPictureMarker"===n.type){const o=n,a=r.getResource(o.url);let i=1;if(null!=a&&a.height&&(i=a.width/a.height),null!=e.size){const r=e.size/2,a=e.size*i*o.scaleX/2;t=[-a,-r,a,r]}}else if(null!=e.size){const r=e.size/2;t=[-r,-r,r,r]}if(e.anchorPoint){let r,o;"Absolute"===e.anchorPointUnits?(r=e.anchorPoint.x,o=e.anchorPoint.y):(r=e.anchorPoint.x*(t[2]-t[0]),o=e.anchorPoint.y*(t[3]-t[1])),t[0]-=r,t[1]-=o,t[2]-=r,t[3]-=o}let i=h.getValue(e.rotation);if(e.rotateClockwise&&(i=-i),o&&(i-=o),i){const e=k*i,r=Math.cos(e),o=Math.sin(e),a=c.create([d.C_INFINITY,d.C_INFINITY,-d.C_INFINITY,-d.C_INFINITY]);c.expandPointInPlace(a,[t[0]*r-t[1]*o,t[0]*o+t[1]*r]),c.expandPointInPlace(a,[t[0]*r-t[3]*o,t[0]*o+t[3]*r]),c.expandPointInPlace(a,[t[2]*r-t[1]*o,t[2]*o+t[1]*r]),c.expandPointInPlace(a,[t[2]*r-t[3]*o,t[2]*o+t[3]*r]),t=a}let s=h.getValue(e.offsetX),l=h.getValue(e.offsetY);if(o){const e=k*o,t=Math.cos(e),r=Math.sin(e),a=s*r+l*t;s=s*t-l*r,l=a}t[0]+=s,t[1]+=l,t[2]+=s,t[3]+=l;const f=T(e.markerPlacement);f>0&&(t[0]-=f,t[1]-=f,t[2]+=f,t[3]+=f);break}}const s=E(n.effects);s>0&&(t[0]-=s,t[1]-=s,t[2]+=s,t[3]+=s),i?(e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],i=!1):(e[0]=Math.min(e[0],t[0]),e[1]=Math.min(e[1],t[1]),e[2]=Math.max(e[2],t[2]),e[3]=Math.max(e[3],t[3]))}return e},r._getTextInflatedSize=function(e,t,r){const o=t.height??u.DEFAULT_TEXT_HEIGHT;if(e[0]=-o/2,e[1]=-o/2,e[2]=o/2,e[3]=o/2,!r)return e;const i=r.get(t);if(!i)return e;const{text:n,mosaicItem:s}=i;if(!s?.glyphMosaicItems?.length)return e;const{lineGapType:l,lineGap:c}=t,f=l?u.lineGapType2LineHeight(l,c??0,o):0,m=a.bidiText(n)[1],y=s.glyphMosaicItems,p="CIMBackgroundCallout"===t.callout?.type,M=b.shapeGlyphs(y,m,{scale:o/S.GLYPH_SIZE,angle:h.getValue(t.angle),xOffset:h.getValue(t.offsetX),yOffset:h.getValue(t.offsetY),hAlign:u.horizontalAlignment2HAlign(t.horizontalAlignment),vAlign:u.verticalAlignment2VAlign(t.verticalAlignment),maxLineWidth:512,lineHeight:S.MAGIC_LABEL_LINE_HEIGHT*Math.max(.25,Math.min(f||1,4)),decoration:t.font.decoration||"none",isCIM:!0,hasBackground:p}).boundsT;return e[0]=M.x-M.halfWidth,e[1]=-M.y-M.halfHeight,e[2]=M.x+M.halfWidth,e[3]=-M.y+M.halfHeight,e},t._createClass(e)}(),G=function(){function e(){}return e.getEnvelope=function(e,t,r){if(!e)return null;const o=new u.EnvDrawHelper(r);if(Array.isArray(e)){let r;for(const a of e)r?r.union(v(o,a,t)):r=v(o,a,t);return r}return v(o,e,t)},e.getTextureAnchor=function(e,t){const r=this.getEnvelope(e,null,t);if(!r)return[0,0,0];const o=(r.x+.5*r.width)*x,a=(r.y+.5*r.height)*x,i=r.width*x+2,n=r.height*x+2;return[-o/i,-a/n,n]},e.rasterize=function(e,t,r,o,a=!0){const i=r||this.getEnvelope(t,null,o);if(!i)return[null,0,0,0,0];const n=(i.x+.5*i.width)*x,s=(i.y+.5*i.height)*x;e.width=i.width*x,e.height=i.height*x,r||(e.width+=2,e.height+=2);const l=e.getContext("2d"),c=u.Transformation.createScale(x,-x);c.translate(.5*e.width-n,.5*e.height+s);const f=new u.CanvasDrawHelper(l,o,c);switch(t.type){case"CIMPointSymbol":{const e={type:"point",x:0,y:0};f.drawSymbol(t,e);break}case"CIMVectorMarker":{const e=new y.Placement;f.drawMarker(t,e);break}}const m=l.getImageData(0,0,e.width,e.height),p=new Uint8Array(m.data);if(a){let e;for(let t=0;t<p.length;t+=4)e=p[t+3]/255,p[t]=p[t]*e,p[t+1]=p[t+1]*e,p[t+2]=p[t+2]*e}return[p,e.width,e.height,-n/e.width,-s/e.height]},e.fromTextSymbol=function(e){const{angle:t,color:r,font:o,haloColor:i,haloSize:n,horizontalAlignment:s,kerning:l,text:c,verticalAlignment:f,xoffset:m,yoffset:y,backgroundColor:u,borderLineColor:M,borderLineSize:d}=e;let S,b,g,C,I,k;o&&(S=o.family,b=o.style,g=o.weight,C=o.size,I=o.decoration);let x=!1;if(c){x=a.bidiText(c)[1]}return(u||d)&&(k={type:"CIMBackgroundCallout",margin:null,backgroundSymbol:{type:"CIMPolygonSymbol",symbolLayers:[{type:"CIMSolidFill",color:R(u)},{type:"CIMSolidStroke",color:R(M),width:d}]},accentBarSymbol:null,gap:null,leaderLineSymbol:null,lineStyle:null}),{type:"CIMPointSymbol",symbolLayers:[{type:"CIMVectorMarker",enable:!0,anchorPointUnits:"Relative",dominantSizeAxis3D:"Y",size:10,billboardMode3D:"FaceNearPlane",frame:{xmin:-5,ymin:-5,xmax:5,ymax:5},markerGraphics:[{type:"CIMMarkerGraphic",geometry:{x:0,y:0},symbol:{type:"CIMTextSymbol",angle:t,blockProgression:p.BlockProgression.BTT,depth3D:1,extrapolateBaselines:!0,fontEffects:p.FontEffects.Normal,fontEncoding:p.FontEncoding.Unicode,fontFamilyName:S||"Arial",fontStyleName:_(b,g),fontType:p.FontType.Unspecified,haloSize:n,height:C,hinting:p.GlyphHinting.Default,horizontalAlignment:N(s??"center"),kerning:l,letterWidth:100,ligatures:!0,lineGapType:"Multiple",offsetX:h.getValue(m),offsetY:h.getValue(y),strikethrough:"line-through"===I,underline:"underline"===I,symbol:{type:"CIMPolygonSymbol",symbolLayers:[{type:"CIMSolidFill",enable:!0,color:R(r)}]},haloSymbol:{type:"CIMPolygonSymbol",symbolLayers:[{type:"CIMSolidFill",enable:!0,color:R(i)}]},shadowColor:[0,0,0,255],shadowOffsetX:1,shadowOffsetY:1,textCase:"Normal",textDirection:x?p.TextReadingDirection.RTL:p.TextReadingDirection.LTR,verticalAlignment:O(f??"baseline"),verticalGlyphOrientation:p.VerticalGlyphOrientation.Right,wordSpacing:100,billboardMode3D:p.BillBoardMode.FaceNearPlane,callout:k},textString:c}],scaleSymbolsProportionally:!0,respectFrame:!0}],scaleX:1,angleAlignment:"Display"}},e.fromPictureFillSymbol=function(e){const{height:t,outline:r,width:o,xoffset:a,xscale:i,yoffset:n,yscale:s}=e,l=[],c={type:"CIMPolygonSymbol",symbolLayers:l};if(r){const e=J(r);e&&l.push(e)}let f=e.url;"esriPFS"===e.type&&e.imageData&&(f=e.imageData);const m="angle"in e?e.angle??0:0,y=(o??0)*(i||1),u=(t??0)*(s||1);return l.push({type:"CIMPictureFill",invertBackfaceTexture:!1,scaleX:1,textureFilter:p.TextureFilter.Picture,tintColor:null,url:f,height:u,width:y,offsetX:h.getValue(a),offsetY:h.getValue(n),rotation:h.getValue(-m),colorSubstitutions:null}),c},e.fromSimpleFillSymbol=function(e){const{color:t,style:r,outline:o}=e,a=[],n={type:"CIMPolygonSymbol",symbolLayers:a};if(o){const e=J(o);e&&a.push(e)}if(r&&"solid"!==r&&"none"!==r&&"esriSFSSolid"!==r&&"esriSFSNull"!==r){const e={type:"CIMLineSymbol",symbolLayers:[{type:"CIMSolidStroke",color:R(t),capStyle:p.LineCapStyle.Butt,joinStyle:p.LineJoinStyle.Miter,width:.75}]};let o=0;const n=l.px2pt($(r)?8:10);switch(r){case"vertical":case"esriSFSVertical":o=90;break;case"forward-diagonal":case"esriSFSForwardDiagonal":case"diagonal-cross":case"esriSFSDiagonalCross":o=-45;break;case"backward-diagonal":case"esriSFSBackwardDiagonal":o=45;break;case"cross":case"esriSFSCross":o=0}a.push({type:"CIMHatchFill",lineSymbol:e,offsetX:0,offsetY:0,rotation:o,separation:n}),"cross"===r||"esriSFSCross"===r?a.push({type:"CIMHatchFill",lineSymbol:i.clone(e),offsetX:0,offsetY:0,rotation:90,separation:n}):"diagonal-cross"!==r&&"esriSFSDiagonalCross"!==r||a.push({type:"CIMHatchFill",lineSymbol:i.clone(e),offsetX:0,offsetY:0,rotation:45,separation:n})}else!r||"solid"!==r&&"esriSFSSolid"!==r||a.push({type:"CIMSolidFill",enable:!0,color:R(t)});return n},e.fromSimpleLineSymbol=function(t){const{cap:r,color:o,join:a,marker:i,miterLimit:n,style:s,width:l}=t;let c=null;"solid"!==s&&"none"!==s&&"esriSLSSolid"!==s&&"esriSLSNull"!==s&&(c=[{type:"CIMGeometricEffectDashes",dashTemplate:X(s,r),lineDashEnding:"NoConstraint",scaleDash:!0,offsetAlongLine:null}]);const f=[];if(i){let t;switch(i.placement){case"begin-end":t=p.ExtremityPlacement.Both;break;case"begin":t=p.ExtremityPlacement.JustBegin;break;case"end":t=p.ExtremityPlacement.JustEnd;break;default:t=p.ExtremityPlacement.None}const r=e.fromSimpleMarker(i,l,o).symbolLayers[0];r.markerPlacement={type:"CIMMarkerPlacementAtExtremities",angleToLine:!0,offset:0,extremityPlacement:t,offsetAlongLine:0},f.push(r)}return f.push({type:"CIMSolidStroke",color:"none"!==s&&"esriSLSNull"!==s?R(o):[0,0,0,0],capStyle:z(r),joinStyle:A(a),miterLimit:n,width:l,effects:c}),{type:"CIMLineSymbol",symbolLayers:f}},e.fromPictureMarker=function(e){const{angle:t,height:r,width:o,xoffset:a,yoffset:i}=e;let n=e.url;return"esriPMS"===e.type&&e.imageData&&(n=e.imageData),{type:"CIMPointSymbol",symbolLayers:[{type:"CIMPictureMarker",invertBackfaceTexture:!1,scaleX:1,textureFilter:p.TextureFilter.Picture,tintColor:null,url:n,size:r,width:o,offsetX:h.getValue(a),offsetY:h.getValue(i),rotation:h.getValue(-t)}]}},e.fromSimpleMarker=function(e,t,r){const{style:o}=e,a=e.color??r;if("path"===o){const t=[];if("outline"in e&&e.outline){const r=e.outline;t.push({type:"CIMSolidStroke",enable:!0,width:l.pt2px(Math.round(l.px2pt(r.width))),color:R(r.color)})}t.push({type:"CIMSolidFill",enable:!0,color:R(a),path:e.path});const[r,o]=U("square");return{type:"CIMPointSymbol",symbolLayers:[{type:"CIMVectorMarker",enable:!0,rotation:h.getValue(-e.angle),size:h.getValue(e.size||6),offsetX:h.getValue(e.xoffset),offsetY:h.getValue(e.yoffset),frame:r,markerGraphics:[{type:"CIMMarkerGraphic",geometry:o,symbol:{type:"CIMPolygonSymbol",symbolLayers:t}}]}]}}const[i,n]=U(o);let s;if(n&&i){const r=[];if("outline"in e&&e.outline){const t=e.outline;r.push({type:"CIMSolidStroke",enable:!0,width:null!=t.width&&t.width>.667?l.pt2px(Math.round(l.px2pt(t.width))):t.width,color:R(t.color)})}else!t||"line-marker"!==e.type||"cross"!==e.style&&"x"!==e.style||r.push({type:"CIMSolidStroke",enable:!0,width:t,color:R(a)});r.push({type:"CIMSolidFill",enable:!0,color:R(a)});const o={type:"CIMPolygonSymbol",symbolLayers:r};s={type:"CIMPointSymbol",symbolLayers:[{type:"CIMVectorMarker",enable:!0,rotation:h.getValue(-e.angle),size:h.getValue(e.size||6*t),offsetX:h.getValue(e.xoffset),offsetY:h.getValue(e.yoffset),frame:i,markerGraphics:[{type:"CIMMarkerGraphic",geometry:n,symbol:o}]}]}}return s},e.fromCIMHatchFill=function(e,t){const r=t*(e.separation??u.DEFAULT_HATCH_FILL_SEPARATION),o=r/2,a=i.clone(e.lineSymbol);a.symbolLayers?.forEach((e=>{switch(e.type){case"CIMSolidStroke":null!=e.width&&(e.width*=t),e.effects?.forEach((e=>{"CIMGeometricEffectDashes"===e.type&&(e.dashTemplate=e.dashTemplate.map((e=>e*t)))}));break;case"CIMVectorMarker":{null!=e.size&&(e.size*=t);const r=e.markerPlacement;null!=r&&"placementTemplate"in r&&(r.placementTemplate=r.placementTemplate.map((e=>e*t)));break}}}));let n=this._getLineSymbolPeriod(a)||P;for(;n<P;)n*=2;const s=n/2;return{type:"CIMVectorMarker",frame:{xmin:-s,xmax:s,ymin:-o,ymax:o},markerGraphics:[{type:"CIMMarkerGraphic",geometry:{paths:[[[-s,0],[s,0]]]},symbol:a}],size:r}},e.fetchResources=function(t,r,o){if(t&&r)switch(t.type){case"CIMPointSymbol":case"CIMLineSymbol":case"CIMPolygonSymbol":{const a=t.symbolLayers;if(!a)return;for(const t of a)switch(q(t,r,o),t.type){case"CIMPictureFill":case"CIMHatchFill":case"CIMGradientFill":case"CIMPictureStroke":case"CIMGradientStroke":case"CIMCharacterMarker":case"CIMPictureMarker":"url"in t&&t.url&&o.push(r.fetchResource(t.url,null));break;case"CIMVectorMarker":{const a=t.markerGraphics;if(!a)continue;for(const t of a)if(t){const a=t.symbol;a&&e.fetchResources(a,r,o)}}}break}}},e.fetchFonts=function(t,r,o){if(t&&r)if("symbolLayers"in t&&t.symbolLayers){for(const a of t.symbolLayers)if("CIMVectorMarker"===a.type&&a.markerGraphics)for(const t of a.markerGraphics)t?.symbol&&e.fetchFonts(t.symbol,r,o)}else if("CIMTextSymbol"===t.type){const{fontFamilyName:e,fontStyleName:a}=t;if(!e||"calcitewebcoreicons"===e.toLowerCase())return;const{style:i,weight:n}=h.fromCIMFontStyle(a),s=h.fromCIMFontDecoration(t),l=new g({family:e,style:i,weight:n,decoration:s});o.push(r.loadFont(l).catch((()=>{L.error(`Unsupported font ${e} in CIM symbol`)})))}},e._getLineSymbolPeriod=function(e){if(e){const t=this._getEffectsRepeat(e.effects);if(t)return t;if(e.symbolLayers)for(const r of e.symbolLayers)if(r){const e=this._getEffectsRepeat(r.effects);if(e)return e;switch(r.type){case"CIMCharacterMarker":case"CIMPictureMarker":case"CIMVectorMarker":case"CIMObjectMarker3D":case"CIMglTFMarker3D":{const e=this._getPlacementRepeat(r.markerPlacement);if(e)return e}}}}return 0},e._getEffectsRepeat=function(e){if(e)for(const t of e)if(t)switch(t.type){case"CIMGeometricEffectDashes":{const e=t.dashTemplate;if(e&&e.length){let t=0;for(const r of e)t+=r;return 1&e.length&&(t*=2),t}break}case"CIMGeometricEffectWave":return t.period;default:L.error(`unsupported geometric effect type ${t.type}`)}return 0},e._getPlacementRepeat=function(e){if(e)switch(e.type){case"CIMMarkerPlacementAlongLineSameSize":case"CIMMarkerPlacementAlongLineRandomSize":case"CIMMarkerPlacementAlongLineVariableSize":{const t=e.placementTemplate;if(t&&t.length){let e=0;for(const r of t)e+=+r;return 1&t.length&&(e*=2),e}break}}return 0},e.fromCIMInsidePolygon=function(e){const t=e.markerPlacement,r={...e};r.markerPlacement=null,r.anchorPoint=null;const o=Math.abs(t.stepX),a=Math.abs(t.stepY),i=(t.randomness??100)/100;let n,c,f,m;if("Random"===t.gridType){const e=l.px2pt(S.RANDOM_INSIDE_POLYGON_TEXTURE_SIZE),r=Math.max(Math.floor(e/o),1),y=Math.max(Math.floor(e/a),1);n=r*o/2,c=y*a/2,f=2*c;const u=new s(t.seed),p=i*o/1.5,h=i*a/1.5;m=[];for(let t=0;t<r;t++)for(let e=0;e<y;e++){const r=t*o-n+p*(.5-u.getFloat()),i=e*a-c+h*(.5-u.getFloat());m.push({x:r,y:i}),0===t&&m.push({x:r+2*n,y:i}),0===e&&m.push({x:r,y:i+2*c})}}else!0===t.shiftOddRows?(n=o/2,c=a,f=2*a,m=[{x:-n,y:0},{x:n,y:0},{x:0,y:c},{x:0,y:-c}]):(n=o/2,c=a/2,f=a,m=[{x:-o,y:0},{x:0,y:-a},{x:-o,y:-a},{x:0,y:0},{x:o,y:0},{x:0,y:a},{x:o,y:a},{x:-o,y:a},{x:o,y:-a}]);return{type:"CIMVectorMarker",frame:{xmin:-n,xmax:n,ymin:-c,ymax:c},markerGraphics:m.map((e=>({type:"CIMMarkerGraphic",geometry:e,symbol:{type:"CIMPointSymbol",symbolLayers:[r]}}))),size:f}},e.getSize=function(e){if(e)switch(e.type){case"CIMTextSymbol":return e.height;case"CIMPointSymbol":{let t=0;if(e.symbolLayers)for(const r of e.symbolLayers)if(r)switch(r.type){case"CIMCharacterMarker":case"CIMPictureMarker":case"CIMVectorMarker":case"CIMObjectMarker3D":case"CIMglTFMarker3D":{const e=r.size;null!=e&&e>t&&(t=e);break}}return t}case"CIMLineSymbol":case"CIMPolygonSymbol":{let t=0;if(e.symbolLayers)for(const r of e.symbolLayers)if(r)switch(r.type){case"CIMSolidStroke":case"CIMPictureStroke":case"CIMGradientStroke":{const e=r.width;null!=e&&e>t&&(t=e);break}case"CIMCharacterMarker":case"CIMPictureMarker":case"CIMVectorMarker":case"CIMObjectMarker3D":case"CIMglTFMarker3D":if(r.markerPlacement&&h.isCIMMarkerStrokePlacement(r.markerPlacement)){const e=r.size;null!=e&&e>t&&(t=e)}}return t}}},e.getMarkerScaleRatio=function(e){if(e&&"CIMVectorMarker"===e.type)if(!1!==e.scaleSymbolsProportionally&&e.frame&&null!=e.size){const t=e.frame.ymax-e.frame.ymin;return e.size/t}return 1},t._createClass(e)}(),V=function(){function e(){}return e.findApplicableOverrides=function(t,r,o){if(t&&r){if(t.primitiveName){let e=!1;for(const r of o)if(r.primitiveName===t.primitiveName){e=!0;break}if(!e)for(const a of r)a.primitiveName===t.primitiveName&&o.push(a)}switch(t.type){case"CIMPointSymbol":case"CIMLineSymbol":case"CIMPolygonSymbol":if(t.effects)for(const a of t.effects)e.findApplicableOverrides(a,r,o);if(t.symbolLayers)for(const a of t.symbolLayers)e.findApplicableOverrides(a,r,o);break;case"CIMTextSymbol":break;case"CIMSolidStroke":case"CIMPictureStroke":case"CIMGradientStroke":case"CIMSolidFill":case"CIMPictureFill":case"CIMHatchFill":case"CIMGradientFill":case"CIMVectorMarker":case"CIMCharacterMarker":case"CIMPictureMarker":if(t.effects)for(const a of t.effects)e.findApplicableOverrides(a,r,o);if(t.markerPlacement&&e.findApplicableOverrides(t.markerPlacement,r,o),"CIMVectorMarker"===t.type){if(t.markerGraphics)for(const a of t.markerGraphics)e.findApplicableOverrides(a,r,o),e.findApplicableOverrides(a.symbol,r,o)}else"CIMCharacterMarker"===t.type?e.findApplicableOverrides(t.symbol,r,o):"CIMHatchFill"===t.type?e.findApplicableOverrides(t.lineSymbol,r,o):"CIMPictureMarker"===t.type&&e.findApplicableOverrides(t.animatedSymbolProperties,r,o)}}},e.findEffectOverrides=function(e,t,r){if(!t||!e)return;const o=e.length;for(let a=0;a<o;a++){const o=e[a],i=o?.primitiveName;if(i){let e=!1;for(const t of r)if(t.primitiveName===i){e=!0;break}if(!e)for(const o of t)o.primitiveName===i&&r.push(o)}}},e.resolveSymbolOverrides=async function(t,r,o,a,n,s,l){if(!t||!t.symbol)return null;let{symbol:c,primitiveOverrides:f}=t;const m=!!f;if(!m&&!a)return c;c=i.clone(c);let y=!0;if(r||(r={attributes:{}},y=!1),m){if(y||(f=f.filter((e=>!e.valueExpressionInfo?.expression.includes("$feature")))),l||(f=f.filter((e=>!e.valueExpressionInfo?.expression.includes("$view")))),f.length>0){const t=h.attributesToFields(r.attributes);await e.evaluateOverrides(f,r,{spatialReference:o,fields:t,geometryType:n},s,l)}e.applyOverrides(c,f)}return a&&e.applyDictionaryTextOverrides(c,r,a),c},e.evaluateOverrides=async function(e,t,r,o,a){if(!t)return;let i;for(const n of e){const e=n.valueExpressionInfo;if(e&&r&&r.geometryType){i||(i=[]),n.value=void 0;const s=m.createRendererExpression(e.expression,r.spatialReference,r.fields).then((e=>{n.value=M(e,t,{$view:a},r.geometryType,o)}));i.push(s)}}void 0!==i&&i.length>0&&await Promise.all(i)},e.applyDictionaryTextOverrides=function(t,r,o,a="Normal"){if(t&&t.type)switch(t.type){case"CIMPointSymbol":case"CIMLineSymbol":case"CIMPolygonSymbol":case"CIMTextSymbol":{const i=t.symbolLayers;if(!i)return;for(const n of i)n&&"CIMVectorMarker"===n.type&&e.applyDictionaryTextOverrides(n,r,o,"CIMTextSymbol"===t.type?t.textCase:a)}break;case"CIMVectorMarker":{const a=t.markerGraphics;if(!a)return;for(const t of a)t&&e.applyDictionaryTextOverrides(t,r,o)}break;case"CIMMarkerGraphic":{const e=t.textString;if(e&&e.includes("[")){const i=h.analyzeTextParts(e,o);t.textString=h.assignTextValuesFromFeature(r,i,a)}}}},e.applyOverrides=function(t,r,o,a){if(t.primitiveName)for(const i of r)if(i.primitiveName===t.primitiveName){const r=j(i.propertyName);if(a&&a.push({cim:t,nocapPropertyName:r,value:t[r]}),i.expression&&(i.value=e.toValue(i.propertyName,i.expression)),o){let e=!1;for(const r of o)r.primitiveName===t.primitiveName&&(e=!0);e||o.push(i)}null!=i.value&&(t[r]=i.value)}switch(t.type){case"CIMPointSymbol":case"CIMLineSymbol":case"CIMPolygonSymbol":if(t.effects)for(const i of t.effects)e.applyOverrides(i,r,o,a);if(t.symbolLayers)for(const i of t.symbolLayers)e.applyOverrides(i,r,o,a);break;case"CIMTextSymbol":break;case"CIMSolidStroke":case"CIMSolidFill":case"CIMVectorMarker":if(t.effects)for(const i of t.effects)e.applyOverrides(i,r,o,a);if("CIMVectorMarker"===t.type&&t.markerGraphics)for(const i of t.markerGraphics)e.applyOverrides(i,r,o,a),e.applyOverrides(i.symbol,r,o,a)}},e.restoreOverrides=function(e){for(const t of e)t.cim[t.nocapPropertyName]=t.value},e.buildOverrideKey=function(e){let t="";for(const r of e)void 0!==r.value&&(t+=`${r.primitiveName}${r.propertyName}${JSON.stringify(r.value)}`);return t},e.toValue=function(e,t){if("DashTemplate"===e)return t.split(" ").map((e=>Number(e)));if("Color"===e){const e=new r(t).toRgba();return e[3]*=255,e}return t},t._createClass(e)}();const z=e=>{if(!e)return p.LineCapStyle.Butt;switch(e){case"butt":return p.LineCapStyle.Butt;case"square":return p.LineCapStyle.Square;case"round":return p.LineCapStyle.Round}},A=e=>{if(!e)return p.LineJoinStyle.Miter;switch(e){case"miter":return p.LineJoinStyle.Miter;case"round":return p.LineJoinStyle.Round;case"bevel":return p.LineJoinStyle.Bevel}},N=e=>{if(null==e)return"Center";switch(e){case"left":return"Left";case"right":return"Right";case"center":return"Center"}},O=e=>{if(null==e)return"Center";switch(e){case"baseline":return"Baseline";case"top":return"Top";case"middle":return"Center";case"bottom":return"Bottom"}},R=e=>{if(!e)return[0,0,0,0];const{r:t,g:r,b:o,a}=e;return[t,r,o,255*a]},_=(e,t)=>{const r=H(t),o=B(e);return r&&o?`${r}-${o}`:`${r}${o}`},H=e=>{if(!e)return"";switch(e.toLowerCase()){case"bold":case"bolder":return"bold"}return""},B=e=>{if(!e)return"";switch(e.toLowerCase()){case"italic":case"oblique":return"italic"}return""},X=(e,t)=>{const r="butt"===t;switch(e){case"dash":case"esriSLSDash":return r?[4,3]:[3,4];case"dash-dot":case"esriSLSDashDot":return r?[4,3,1,3]:[3,4,0,4];case"dot":case"esriSLSDot":return r?[1,3]:[0,4];case"long-dash":case"esriSLSLongDash":return r?[8,3]:[7,4];case"long-dash-dot":case"esriSLSLongDashDot":return r?[8,3,1,3]:[7,4,0,4];case"long-dash-dot-dot":case"esriSLSDashDotDot":return r?[8,3,1,3,1,3]:[7,4,0,4,0,4];case"short-dash":case"esriSLSShortDash":return r?[4,1]:[3,2];case"short-dash-dot":case"esriSLSShortDashDot":return r?[4,1,1,1]:[3,2,0,2];case"short-dash-dot-dot":case"esriSLSShortDashDotDot":return r?[4,1,1,1,1,1]:[3,2,0,2,0,2];case"short-dot":case"esriSLSShortDot":return r?[1,1]:[0,2];case"solid":case"esriSLSSolid":case"none":return L.error("Unexpected: style does not require rasterization"),[0,0];default:return L.error(`Tried to rasterize SLS, but found an unexpected style: ${e}!`),[0,0]}};function Y(e){return void 0!==e.symbolLayers}const U=e=>{const t=100,r=50;let o,a;const i=e;if("circle"===i||"esriSMSCircle"===i){const e=.25;let t=Math.acos(1-e/r),i=Math.ceil(C/t/4);0===i&&(i=1),t=I/i,i*=4;const n=[];n.push([r,0]);for(let o=1;o<i;o++)n.push([r*Math.cos(o*t),-r*Math.sin(o*t)]);n.push([r,0]),o={rings:[n]},a={xmin:-r,ymin:-r,xmax:r,ymax:r}}else if("cross"===i||"esriSMSCross"===i){const e=0;o={rings:[[[e,r],[e,e],[r,e],[r,-e],[e,-e],[e,-r],[-e,-r],[-e,-e],[-r,-e],[-r,e],[-e,e],[-e,r],[e,r]]]},a={xmin:-r,ymin:-r,xmax:r,ymax:r}}else if("diamond"===i||"esriSMSDiamond"===i)o={rings:[[[-r,0],[0,r],[r,0],[0,-r],[-r,0]]]},a={xmin:-r,ymin:-r,xmax:r,ymax:r};else if("square"===i||"esriSMSSquare"===i)o={rings:[[[-r,-r],[-r,r],[r,r],[r,-r],[-r,-r]]]},a={xmin:-r,ymin:-r,xmax:r,ymax:r};else if("x"===i||"esriSMSX"===i){const e=0;o={rings:[[[0,e],[r-e,r],[r,r-e],[e,0],[r,e-r],[r-e,-r],[0,-e],[e-r,-r],[-r,e-r],[-e,0],[-r,r-e],[e-r,r],[0,e]]]},a={xmin:-r,ymin:-r,xmax:r,ymax:r}}else if("triangle"===i||"esriSMSTriangle"===i){const e=t*.5773502691896257,r=-e,i=2/3*t,n=i-t;o={rings:[[[r,n],[0,i],[e,n],[r,n]]]},a={xmin:r,ymin:n,xmax:e,ymax:i}}else"arrow"===i&&(o={rings:[[[-50,50],[50,0],[-50,-50],[-33,-20],[-33,20],[-50,50]]]},a={xmin:-r,ymin:-r,xmax:r,ymax:r});return[a,o]},$=e=>"vertical"===e||"horizontal"===e||"cross"===e||"esriSFSCross"===e||"esriSFSVertical"===e||"esriSFSHorizontal"===e,j=e=>e?e.charAt(0).toLowerCase()+e.substr(1):e;function q(e,t,r){if(!e.effects||null!=t.geometryEngine)return;if(t.geometryEnginePromise)return void r.push(t.geometryEnginePromise);h.isGeometryEngineRequired(e.effects)&&(t.geometryEnginePromise=h.importGeometryEngine(),r.push(t.geometryEnginePromise),t.geometryEnginePromise.then((e=>t.geometryEngine=e)))}function J(e){if(!e)return null;let t=null;const{cap:r,color:o,join:a,miterLimit:i,style:n,width:s}=e;return"solid"!==n&&"none"!==n&&"esriSLSSolid"!==n&&"esriSLSNull"!==n&&(t=[{type:"CIMGeometricEffectDashes",dashTemplate:X(n,r),lineDashEnding:"NoConstraint",scaleDash:!0,offsetAlongLine:null}]),{type:"CIMSolidStroke",color:"esriSLSNull"!==n&&"none"!==n?R(o):[0,0,0,0],capStyle:z(r),joinStyle:A(a),miterLimit:i,width:s,effects:t}}e.CIMSymbolHelper=G,e.CIMSymbolInflatedSizeHelper=D,e.OverrideHelper=V,e.getEffectsInflateSize=E,e.slsDashToTemplateArray=X,e.symbolToCIM=w,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
