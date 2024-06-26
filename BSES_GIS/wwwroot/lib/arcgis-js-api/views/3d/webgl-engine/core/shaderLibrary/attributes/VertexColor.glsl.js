/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../shaderModules/interfaces","../../../lib/VertexAttribute"],(function(e,o,r){"use strict";function t(e,t){t.hasVertexColors?(e.attributes.add(r.VertexAttribute.COLOR,"vec4"),e.varyings.add("vColor","vec4"),e.vertex.code.add(o.glsl`void forwardVertexColor() { vColor = color; }`),e.vertex.code.add(o.glsl`void forwardNormalizedVertexColor() { vColor = color * 0.003921568627451; }`)):e.vertex.code.add(o.glsl`void forwardVertexColor() {}
void forwardNormalizedVertexColor() {}`)}e.VertexColor=t,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
