/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../webgl/enums","../../../webgl/VertexElementDescriptor"],(function(e,t,r){"use strict";function n(e,t=0){const n=e.stride;return Array.from(e.fields.keys()).filter((t=>{const r=e.fields.get(t)?.optional;return!(r&&r.glPadding)})).map((a=>{const i=e.fields.get(a),l=i.constructor.ElementCount,s=o(i.constructor.ElementType),u=i.offset,p=!(!i.optional||!i.optional.glNormalized);return new r.VertexElementDescriptor(a,l,s,u,n,p,t)}))}function o(e){const t=a[e];if(t)return t;throw new Error("BufferType not supported in WebGL")}const a={u8:t.DataType.UNSIGNED_BYTE,u16:t.DataType.UNSIGNED_SHORT,u32:t.DataType.UNSIGNED_INT,i8:t.DataType.BYTE,i16:t.DataType.SHORT,i32:t.DataType.INT,f32:t.DataType.FLOAT};e.glLayout=n,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
