/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","./generateTextures","./heading-rotate-svg","./tilt-rotate-svg","../../../webgl-engine/lib/Texture"],(function(t,e,r,o,a){"use strict";const n=64;function l(t,o){const{accentColor:l,contrastColor:c,preMultiplyAlpha:i}=o;return t.fromData(`heading-rotate:[accent:${l},contrast:${c},size:${n}]`,(()=>new a.Texture(e.generateStyledTexture(r,{accentColor:l,contrastColor:c,size:n}),{mipmap:!0,preMultiplyAlpha:i})))}function c(t,r){const{accentColor:l,contrastColor:c,preMultiplyAlpha:i}=r;return t.fromData(`tilt-rotate:[accent:${l},contrast:${c},size:${n}]`,(()=>new a.Texture(e.generateStyledTexture(o,{accentColor:l,contrastColor:c,size:n}),{mipmap:!0,preMultiplyAlpha:i})))}t.getRotateHeadingTexture=l,t.getTiltRotateTexture=c,Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})}));
