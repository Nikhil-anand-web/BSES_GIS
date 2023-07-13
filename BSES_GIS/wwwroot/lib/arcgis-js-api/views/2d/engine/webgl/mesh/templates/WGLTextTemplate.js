/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../../../../../../chunks/_rollupPluginBabelHelpers","../../../../../../core/BidiText","../../../../../../core/screenUtils","../../../../../../symbols/cim/enums","../../alignmentUtils","../../color","../../definitions","../../number","../../materialKey/MaterialKey","./util","./WGLBaseTextTemplate","./WGLMeshTemplate"],(function(e,t,o,i,n,r,l,a,s,c,_,u){"use strict";const m=5;return function(_){function u(e,t,r,c,u,p,d,A,h,f,M,x,b,g,y,C,z,R,S,B,L,O,T,I){var G;(G=_.call(this)||this)._xOffset=o.pt2px(b),G._yOffset=o.pt2px(g),G._decoration=f||"none",G._backgroundColor=O,G._borderLineColor=T,G._borderLineSize=I,G._color=u,G._haloColor=p,G._haloSize=Math.min(Math.floor(m*o.pt2px(o.toPt(r))),127),G._size=Math.min(Math.round(o.pt2px(t)),127);const k=Math.min(Math.round(o.pt2px(c||t)),127);G._referenceSize=Math.round(Math.sqrt(256*k)),G._scale=G._size/l.GLYPH_SIZE,G._angle=x,G._justify=n.getJustification(d||"center"),G._xAlignD=n.getXAnchorDirection(d||"center"),G._yAlignD=n.getYAnchorDirection(A||"baseline"),G._baseline="baseline"===(A||"baseline"),G._bitset=(h===i.Alignment.MAP?1:0)|(M?1:0)<<1;const P=s.MaterialKeyBase.load(e);return P.sdf=!0,G._materialKey=P.data,G._lineWidth=o.pt2px(y)||512,G._lineHeight=C||1,G._textPlacement=z,G._effects=R,G._isCIM=S??!1,G._minMaxZoom=a.i1616to32(Math.round(B*l.MIN_MAX_ZOOM_PRECISION_FACTOR),Math.round(L*l.MIN_MAX_ZOOM_PRECISION_FACTOR)),G}return e._inherits(u,_),u.fromText=function(e,o){const n=e.font?.size,l=new u(e.materialKey,n,e.haloSize||0,n,e.color&&r.premultiplyAlphaRGBAArray(e.color)||0,e.haloColor&&r.premultiplyAlphaRGBAArray(e.haloColor)||0,e.horizontalAlignment,e.verticalAlignment,i.Alignment.SCREEN,e.font?.decoration,!1,e.angle||0,e.xoffset||0,e.yoffset||0,e.lineWidth||0,e.lineHeight||0,null,null,!1,c.DEFAULT_MIN_ZOOM,c.DEFAULT_MAX_ZOOM,e.backgroundColor&&r.premultiplyAlphaRGBAArray(e.backgroundColor),e.borderLineColor&&r.premultiplyAlphaRGBAArray(e.borderLineColor),e.borderLineSize),[,a]=t.bidiText(e.text);return l.bindTextInfo(o??[],a),l._vertexBoundsScale=e.maxVVSize&&n?e.maxVVSize/n:1,l},u.fromCIMText=function(e,o,i){const n=e.scaleFactor||1,l=e.size*e.sizeRatio*n,[a,s]=c.getMinMaxZoom(e.scaleInfo,i),_=new u(e.materialKey,l,e.outlineSize*e.sizeRatio,e.referenceSize,r.premultiplyAlphaRGBA(e.color),r.premultiplyAlphaRGBA(e.outlineColor),e.horizontalAlignment,e.verticalAlignment,e.alignment,e.decoration,e.colorLocked??!1,e.angle,e.offsetX*e.sizeRatio*n,e.offsetY*e.sizeRatio*n,512,1,e.markerPlacement,e.effects,!0,a,s,e.backgroundColor?r.premultiplyAlphaRGBA(e.backgroundColor):void 0,e.borderLineColor?r.premultiplyAlphaRGBA(e.borderLineColor):void 0,e.borderLineWidth),[,m]=t.bidiText(e.text);return _.bindTextInfo(o,m),_._vertexBoundsScale=e.maxVVSize?e.maxVVSize/l:1,_},e._createClass(u)}(_(u))}));
