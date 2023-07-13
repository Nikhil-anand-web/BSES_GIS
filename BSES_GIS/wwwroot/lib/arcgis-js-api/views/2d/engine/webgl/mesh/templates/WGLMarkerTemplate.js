/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../../../../../../chunks/_rollupPluginBabelHelpers","../../../../../../core/screenUtils","../../../../../../chunks/mat2df32","../../../../../../chunks/vec2f32","../../../../../../symbols/cim/enums","../../color","../../definitions","../../enums","../../number","../../materialKey/MaterialKey","./util","./WGLBaseMarkerTemplate","./WGLMeshTemplate"],(function(e,t,r,n,i,o,a,l,s,c,m,u,M){"use strict";return function(u){function M(e,t,o,m,M,h,p,_,d,x,f,A,S,y,E,O,R,T,g,L,V,I,B,C){var P;(P=u.call(this)||this).angle=m,P.height=p,P.width=h,P.xOffset=t*g,P.yOffset=o*g,P._markerPlacement=L||void 0,P._effects=V||void 0,P._anchorX=O,P._anchorY=R,P._minMaxZoom=s.i1616to32(Math.round(I*a.MIN_MAX_ZOOM_PRECISION_FACTOR),Math.round(B*a.MIN_MAX_ZOOM_PRECISION_FACTOR));const z=(y===i.Alignment.MAP?a.BITSET_MARKER_ALIGNMENT_MAP:a.BITSET_MARKER_ALIGNMENT_SCREEN)|(f?a.BITSET_GENERIC_LOCK_COLOR:0)|(S?a.BITSET_MARKER_OUTLINE_ALLOW_COLOR_OVERRIDE:0)|(A?a.BITSET_MARKER_SCALE_SYMBOLS_PROPORTIONALLY:0),N=E&&E.sdf,b=c.MarkerMaterialKey.load(e);b.sdf=N,b.pattern=!0,b.textureBinding=E.textureBinding,P._materialKey=b.data,P._fillColor=M,P._outlineColor=d,P._sizeOutlineWidth=s.i8888to32(Math.round(Math.min(Math.sqrt(128*h),255)),Math.round(Math.min(Math.sqrt(128*p),255)),Math.round(Math.min(Math.sqrt(128*x),255)),Math.round(Math.min(Math.sqrt(128*_),255))),b.symbologyType===l.WGLSymbologyType.PIE_CHART?(h*=T*g,p*=T*g,P._computedWidth=h,P._computedHeight=p,P._texUpperLeft=s.i1616to32(0,1),P._texUpperRight=s.i1616to32(1,1),P._texBottomLeft=s.i1616to32(0,0),P._texBottomRight=s.i1616to32(1,0)):P._computeSize(h,p,T,x,g,E,b.hasSizeVV(),C);const k=Math.round(64*T);P._bitestAndDistRatio=s.i1616to32(z,k);const w=n.create(),K=r.create();return P._applyTransformation(K,w),P}return e._inherits(M,u),M.fromCIMMarker=function(e,r,n){const a=r&&r.width||1,l=r&&r.height||1,s=e.size,c=a/l*e.scaleX,u=e.scaleSymbolsProportionally&&e.frameHeight?s/e.frameHeight:1,h=o.premultiplyAlphaRGBA(e.color),p=o.premultiplyAlphaRGBA(e.outlineColor),_=t.pt2px(s),d=_*c,x=t.pt2px(e.offsetX||0),f=t.pt2px(e.offsetY||0),A=t.pt2px(e.outlineWidth||0)*u,S=e.alignment||i.Alignment.SCREEN,y=t.pt2px(e.referenceSize),[E,O]=m.getMinMaxZoom(e.scaleInfo,n);let R=e.rotation||0;e.rotateClockwise||(R=-R);let T=0,g=0;const L=e.anchorPoint;L&&(e.isAbsoluteAnchorPoint?s&&(T=L.x/(s*c),g=L.y/s):(T=L.x,g=L.y));const V=new M(e.materialKey,x,f,R,h,d,_,y,p,A,e.colorLocked,e.scaleSymbolsProportionally,!1,S,r,T,g,e.sizeRatio,e.scaleFactor??1,e.markerPlacement,e.effects,E,O,!0);return V._vertexBoundsScaleX=e.maxVVSize?e.maxVVSize/d:1,V._vertexBoundsScaleY=e.maxVVSize?e.maxVVSize/_:1,V},M.fromPictureMarker=function(e,r){const n=Math.round(t.pt2px(e.width)),o=Math.round(t.pt2px(e.height)),l=a.PICTURE_FILL_COLOR,s=Math.round(t.pt2px(e.xoffset||0)),c=Math.round(t.pt2px(e.yoffset||0)),u=new M(e.materialKey,s,c,e.angle,l,n,o,o,0,0,!1,!1,!1,i.Alignment.SCREEN,r,0,0,1,1,null,null,m.DEFAULT_MIN_ZOOM,m.DEFAULT_MAX_ZOOM,!1);return u._vertexBoundsScaleX=e.maxVVSize?e.maxVVSize/e.width:1,u._vertexBoundsScaleY=e.maxVVSize?e.maxVVSize/e.height:1,u},M.fromSimpleMarker=function(e,r){const n=e.style,a=o.premultiplyAlphaRGBAArray(e.color),l=Math.round(t.pt2px(e.size));let s=l;"esriSMSTriangle"===n&&(s*=r.height/r.width);const c=Math.round(t.pt2px(e.xoffset||0)),u=Math.round(t.pt2px(e.yoffset||0)),h=e.outline,p=0|(h?.color&&o.premultiplyAlphaRGBAArray(h.color)),_=0|(h?.width&&Math.round(t.pt2px(h.width))),d=new M(e.materialKey,c,u,e.angle??0,a,l,s,s,p,_,!1,!1,"esriSMSCross"===n||"esriSMSX"===n,i.Alignment.SCREEN,r,0,0,2,1,null,null,m.DEFAULT_MIN_ZOOM,m.DEFAULT_MAX_ZOOM,!1);return d.boundsType="esriSMSCircle"===n?"circle":"square",d._vertexBoundsScaleX=e.maxVVSize?e.maxVVSize/e.size:1,d._vertexBoundsScaleY=e.maxVVSize?e.maxVVSize/e.size:1,d},M.fromLineSymbolMarker=function(e,r){const n=o.premultiplyAlphaRGBAArray(e.color),a=6,l=Math.round(t.pt2px(a*e.lineWidth)),s=l,c="cross"===e.style||"x"===e.style;let u;switch(e.placement){case"begin-end":u=i.ExtremityPlacement.Both;break;case"begin":u=i.ExtremityPlacement.JustBegin;break;case"end":u=i.ExtremityPlacement.JustEnd;break;default:u=i.ExtremityPlacement.None}const h={type:"CIMMarkerPlacementAtExtremities",angleToLine:!0,offset:0,extremityPlacement:u,offsetAlongLine:0},p=new M(e.materialKey,0,0,0,n,l,s,s/a,n,c?Math.round(t.pt2px(e.lineWidth)):0,!1,!1,c,i.Alignment.MAP,r,0,0,2,1,h,null,m.DEFAULT_MIN_ZOOM,m.DEFAULT_MAX_ZOOM,!1);return p.boundsType="circle"===e.style?"circle":"square",p},e._createClass(M)}(u(M))}));