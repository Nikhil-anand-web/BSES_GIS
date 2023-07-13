/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","./sdfPrimitives","../../../webgl/enums","../../../webgl/Texture","../../../webgl/TextureDescriptor"],(function(e,t,r,i,E){"use strict";const n=64,o=n/2,T=o/5,R=n/T,_=.25;function u(e,R){const _=t.createPrimitive(e,n,o,T),u=new E.TextureDescriptor;return u.internalFormat=r.PixelFormat.RGBA,u.width=n,u.height=n,u.wrapMode=r.TextureWrapMode.CLAMP_TO_EDGE,new i.Texture(R,u,_)}e.MARKER_SIZE_PER_LINE_WIDTH=R,e.MARKER_SYMBOL_SIZE=o,e.MARKER_TEXTURE_SIZE=n,e.MARKER_THICKNESS=T,e.MARKER_TIP_THICKNESS_FACTOR=_,e.createMarkerTexture=u,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
