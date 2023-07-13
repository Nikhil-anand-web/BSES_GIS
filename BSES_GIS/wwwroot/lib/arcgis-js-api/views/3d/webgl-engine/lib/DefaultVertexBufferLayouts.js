/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","./VertexAttribute","../../../webgl/enums","../../../webgl/VertexElementDescriptor"],(function(e,t,r,T){"use strict";const n=[new T.VertexElementDescriptor(t.VertexAttribute.POSITION,3,r.DataType.FLOAT,0,12)],i=[new T.VertexElementDescriptor(t.VertexAttribute.POSITION,3,r.DataType.FLOAT,0,20),new T.VertexElementDescriptor(t.VertexAttribute.UV0,2,r.DataType.FLOAT,12,20)],x=[new T.VertexElementDescriptor(t.VertexAttribute.POSITION,3,r.DataType.FLOAT,0,32),new T.VertexElementDescriptor(t.VertexAttribute.NORMAL,3,r.DataType.FLOAT,12,32),new T.VertexElementDescriptor(t.VertexAttribute.UV0,2,r.DataType.FLOAT,24,32)],o=[new T.VertexElementDescriptor(t.VertexAttribute.POSITION,3,r.DataType.FLOAT,0,16),new T.VertexElementDescriptor(t.VertexAttribute.COLOR,4,r.DataType.UNSIGNED_BYTE,12,16)],V=[new T.VertexElementDescriptor(t.VertexAttribute.POSITION,2,r.DataType.FLOAT,0,8)],O=[new T.VertexElementDescriptor(t.VertexAttribute.POSITION,2,r.DataType.FLOAT,0,16),new T.VertexElementDescriptor(t.VertexAttribute.UV0,2,r.DataType.FLOAT,8,16)];e.Pos2=V,e.Pos2Tex=O,e.Pos3=n,e.Pos3Col=o,e.Pos3NormalTex=x,e.Pos3Tex=i,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));