/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../support/buffer/InterleavedLayout","../lib/VertexAttribute"],(function(t,e,r){"use strict";const u=e.newLayout().vec3f(r.VertexAttribute.POSITION),o=e.newLayout().vec3f(r.VertexAttribute.POSITION).vec2f(r.VertexAttribute.UV0),i=e.newLayout().vec3f(r.VertexAttribute.POSITION).vec4u8(r.VertexAttribute.COLOR),O=e.newLayout().vec3f(r.VertexAttribute.POSITION).vec4u8(r.VertexAttribute.OBJECTANDLAYERIDCOLOR),L=e.newLayout().vec3f(r.VertexAttribute.POSITION).vec2f(r.VertexAttribute.UV0).vec4u8(r.VertexAttribute.OBJECTANDLAYERIDCOLOR),A=e.newLayout().vec3f(r.VertexAttribute.POSITION).vec4u8(r.VertexAttribute.COLOR).vec4u8(r.VertexAttribute.OBJECTANDLAYERIDCOLOR);t.PositionColorLayout=i,t.PositionColorLayoutObjectAndLayerId=A,t.PositionLayout=u,t.PositionLayoutObjectAndLayerId=O,t.PositionUVLayout=o,t.PositionUVLayoutObjectAndLayerId=L,Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})}));
