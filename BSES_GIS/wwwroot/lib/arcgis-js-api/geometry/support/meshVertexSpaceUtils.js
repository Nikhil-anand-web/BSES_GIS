/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../chunks/mat4","../../chunks/mat4f64","./MeshGeoreferencedRelativeVertexSpace","../../chunks/vec32"],(function(e,t,n,r,o){"use strict";function i(e){const{vertexSpace:n}=e;if(n.isRelative)return e.clone();const{anchor:i}=e,a=i.clone(),s=t.fromTranslation(c,[-a.x,-a.y,-a.z]),u=new r({origin:[a.x,a.y,a.z]}),l=e.cloneWithVertexSpace(u),{position:x}=l.vertexAttributes;return l.vertexAttributes.position=o.transformMat4(new Float64Array(x.length),x,s),l.vertexAttributesChanged(),l}const c=n.create();e.toRelativeVertexSpace=i,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
