/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../chunks/vec2","../../../../chunks/vec2f64","../../../../chunks/vec3","../../../../chunks/vec3f64","../../../../chunks/vec4f64","../../../../geometry/support/FloatArray","../../../../geometry/support/Indices","./Attribute","./Normals","./VertexAttribute","../materials/internal/MaterialUtil"],(function(t,e,r,i,s,n,o,a,u,l,c,h,b){"use strict";let A=function(){function t(t){this.builder=t}return t.prototype.onPathChanged=function(t){this.builder.onPathChanged()},e._createClass(t)}(),d=function(t){function i(e){var r;return(r=t.call(this,e)||this).vertexAttributeColor=o.fromValues(255,255,255,255),r.size=new Array,r.vertexAttributePosition=a.newFloatArray(3*r.builder.numVerticesTotal),r.vertexAttributeNormal=new Int16Array(2*r.builder.numVerticesTotal),r}e._inherits(i,t);var n=i.prototype;return n.bakeVertexColors=function(t){this.vertexAttributeColor[0]=255*t[0],this.vertexAttributeColor[1]=255*t[1],this.vertexAttributeColor[2]=255*t[2],this.vertexAttributeColor[3]=255*(t.length>3?t[3]:1)},n.bake=function(t){this.size=t;const{numVerticesTotal:e,pathVertexData:i,path:n,positions:o,profileRightAxes:a,profileUpAxes:u,profileVertexAndNormals:l}=this.builder;for(let h=0;h<e;++h){let e=i[h];const b=0===e||e===n.vertices.length-1;e*=3;const A=I;let d=0,v=0;const x=4*h,m=s.set(g,a[x],a[x+1],a[x+2]),y=s.set(O,u[x],u[x+1],u[x+2]),R=r.set(p,l[x]*t[0],l[x+1]*t[1]);if(b)s.cross(A,y,m),d=a[x+3]*t[0],v=u[x+3];else{const t=V,e=f;r.set(t,a[x+3],u[x+3]);const i=r.length(t);r.normalize(t,t);const n=r.dot(R,t);if(Math.abs(n)>i){r.set(e,-t[1],t[0]);const s=r.dot(R,e);r.scale(t,t,i*Math.sign(n)),r.scale(e,e,s),r.add(R,t,e)}s.set(A,0,0,0)}const C=s.set(P,m[0]*R[0]+y[0]*R[1],m[1]*R[0]+y[1]*R[1],m[2]*R[0]+y[2]*R[1]),E=3*h;this.vertexAttributePosition[E]=o[e]+C[0]+A[0]*d,this.vertexAttributePosition[E+1]=o[e+1]+C[1]+A[1]*d,this.vertexAttributePosition[E+2]=o[e+2]+C[2]+A[2]*d;const N=r.set(p,l[x+2],l[x+3]);c.compressNormal(this.vertexAttributeNormal,h,m[0]*N[0]+y[0]*N[1]+A[0]*v,m[1]*N[0]+y[1]*N[1]+A[1]*v,m[2]*N[0]+y[2]*N[1]+A[2]*v)}},n.createGeometryData=function(){const t=this.builder.vertexIndices.length;return new x([[h.VertexAttribute.POSITION,new l.Attribute(this.vertexAttributePosition,3,!0)],[h.VertexAttribute.NORMALCOMPRESSED,new l.Attribute(this.vertexAttributeNormal,2,!0)],[h.VertexAttribute.COLOR,new l.Attribute(this.vertexAttributeColor,4)]],[[h.VertexAttribute.POSITION,this.builder.vertexIndices],[h.VertexAttribute.NORMALCOMPRESSED,this.builder.normalIndices],[h.VertexAttribute.COLOR,u.getZeroIndexArray(t)]])},n.onPathChanged=function(t){e._get(e._getPrototypeOf(i.prototype),"onPathChanged",this).call(this,t),this.bake(this.size)},n.intersect=function(t,e,r){const i=this.builder.vertexIndices,s=new l.Attribute(this.vertexAttributePosition,3),n=i.length/3;b.intersectTriangles(t,e,0,n,i,s,void 0,void 0,r)},e._createClass(i)}(A),v=function(t){function r(e,r,i,s){var n;(n=t.call(this,e)||this).sizeAttributeValue=r,n.colorAttributeValue=i,n.opacityAttributeValue=s,n.vvData=null,n.baked=new d(e),n.vvData=a.newFloatArray(4*n.builder.path.vertices.length);for(let t=0;t<n.builder.path.vertices.length;++t){n.vvData[4*t]=r,n.vvData[4*t+1]=i,n.vvData[4*t+2]=s;const e=0===t||t===n.builder.path.vertices.length-1;n.vvData[4*t+3]=e?1:0}return n}e._inherits(r,t);var i=r.prototype;return i.createGeometryData=function(){return new x([[h.VertexAttribute.POSITION,new l.Attribute(this.builder.positions,3,!0)],[h.VertexAttribute.PROFILERIGHT,new l.Attribute(this.builder.profileRightAxes,4,!0)],[h.VertexAttribute.PROFILEUP,new l.Attribute(this.builder.profileUpAxes,4,!0)],[h.VertexAttribute.PROFILEVERTEXANDNORMAL,new l.Attribute(this.builder.profileVertexAndNormals,4,!0)],[h.VertexAttribute.FEATUREVALUE,new l.Attribute(this.vvData,4,!0)]],[[h.VertexAttribute.POSITION,this.builder.pathVertexIndices],[h.VertexAttribute.PROFILERIGHT,this.builder.vertexIndices],[h.VertexAttribute.PROFILEUP,this.builder.vertexIndices],[h.VertexAttribute.PROFILEVERTEXANDNORMAL,this.builder.vertexIndices],[h.VertexAttribute.FEATUREVALUE,this.builder.pathVertexIndices]])},i.onPathChanged=function(t){e._get(e._getPrototypeOf(r.prototype),"onPathChanged",this).call(this,t);const i=t.getMutableAttribute(h.VertexAttribute.POSITION);i&&(i.data=this.builder.positions)},e._createClass(r)}(A),x=e._createClass((function(t,e){this.vertexAttributes=t,this.indices=e}));const p=i.create(),V=i.create(),f=i.create(),P=n.create(),I=n.create(),g=n.create(),O=n.create();t.FastUpdatePathGeometry=v,t.PathGeometryData=A,t.StaticPathGeometry=d,Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})}));
