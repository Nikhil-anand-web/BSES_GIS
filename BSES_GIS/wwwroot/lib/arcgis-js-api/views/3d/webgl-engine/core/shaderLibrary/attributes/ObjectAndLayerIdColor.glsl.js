/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../ShaderOutput","../../shaderModules/interfaces","../../../lib/VertexAttribute"],(function(e,t,r,o){"use strict";function d(e,d){const a=d.output===t.ShaderOutput.ObjectAndLayerIdColor,l=d.objectAndLayerIdColorInstanced;a&&(e.varyings.add("objectAndLayerIdColorVarying","vec4"),l?e.attributes.add(o.VertexAttribute.INSTANCEOBJECTANDLAYERIDCOLOR,"vec4"):e.attributes.add(o.VertexAttribute.OBJECTANDLAYERIDCOLOR,"vec4")),e.vertex.code.add(r.glsl`
     void forwardObjectAndLayerIdColor() {
      ${a?l?r.glsl`objectAndLayerIdColorVarying = instanceObjectAndLayerIdColor * 0.003921568627451;`:r.glsl`objectAndLayerIdColorVarying = objectAndLayerIdColor * 0.003921568627451;`:r.glsl``} }`),e.fragment.code.add(r.glsl`
      void outputObjectAndLayerIdColor() {
        ${a?r.glsl`fragColor = objectAndLayerIdColorVarying;`:r.glsl``} }`)}e.ObjectAndLayerIdColor=d,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
