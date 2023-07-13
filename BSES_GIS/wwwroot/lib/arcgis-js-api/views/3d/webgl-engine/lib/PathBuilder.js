/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../geometry/support/FloatArray","../../../../geometry/support/Indices"],(function(t,e,i,s){"use strict";let r=function(){function t(t,e,r,o,h,n={}){this.path=t,this.profile=e,this.extruder=r,this.startCap=o,this.endCap=h,this.options=n,this._extrusionVertexCount=0;const p=this.path.vertices.length-2;this.numExtrusionProfiles=r.numProfilesPerJoin()*p+2,this.numVerticesTotal=e.vertices.length*this.numExtrusionProfiles,this.startCap.vertexBufferStart=this.numVerticesTotal;const a=this.startCap.numVertices;this.numVerticesTotal+=a,this.endCap.vertexBufferStart=this.numVerticesTotal;const l=this.endCap.numVertices;this.numVerticesTotal+=l,this.pathVertexData=s.newIntArray(1*this.numVerticesTotal),this.profileRightAxes=i.newFloatArray(4*this.numVerticesTotal),this.profileUpAxes=i.newFloatArray(4*this.numVerticesTotal),this.profileVertexAndNormals=i.newFloatArray(4*this.numVerticesTotal),this.positions=i.floatSubArray(t.positions,t.offset,3*t.vertices.length),this._rebuildGeometry(),this.buildTopology()}var r=t.prototype;return r.emitVertex=function(t,e,i,s,r){const o=4*this._extrusionVertexCount;if(this.profileRightAxes[o]=e.right[0],this.profileRightAxes[o+1]=e.right[1],this.profileRightAxes[o+2]=e.right[2],this.profileUpAxes[o]=e.up[0],this.profileUpAxes[o+1]=e.up[1],this.profileUpAxes[o+2]=e.up[2],this.profileVertexAndNormals[o]=i[0],this.profileVertexAndNormals[o+1]=i[1],this.profileVertexAndNormals[o+2]=s[0],this.profileVertexAndNormals[o+3]=s[1],this.pathVertexData[this._extrusionVertexCount]=t,r){const e=this.path.vertices[t],i=e.maxStretchDistance;this.profileRightAxes[o+3]=e.rotationRight[0]*i,this.profileUpAxes[o+3]=e.rotationRight[1]*i}else this.profileRightAxes[o+3]=0,this.profileUpAxes[o+3]=0;++this._extrusionVertexCount},r.emitCapVertex=function(t,e,i,s,r,o){const h=4*this._extrusionVertexCount;this.profileRightAxes[h]=e.right[0],this.profileRightAxes[h+1]=e.right[1],this.profileRightAxes[h+2]=e.right[2],this.profileRightAxes[h+3]=r,this.profileUpAxes[h]=e.up[0],this.profileUpAxes[h+1]=e.up[1],this.profileUpAxes[h+2]=e.up[2],this.profileUpAxes[h+3]=o,this.profileVertexAndNormals[h]=i[0],this.profileVertexAndNormals[h+1]=i[1],this.profileVertexAndNormals[h+2]=s[0],this.profileVertexAndNormals[h+3]=s[1],this.pathVertexData[this._extrusionVertexCount]=t,++this._extrusionVertexCount},r._rebuildGeometry=function(){this._extrusionVertexCount=0;const{positions:t,offset:e,vertices:s}=this.path;this.positions=i.floatSubArray(t,e,3*s.length);let r=0;const o=(t,e,i,s,o)=>this.emitCapVertex(r,t,e,i,s,o),h=(t,e,i,s)=>this.emitVertex(r,t,e,i,s);for(this.startCap.rebuildConnectingProfileGeometry(s[r],this.profile,o),r=1;r<s.length-1;++r)this.extruder.extrude(s[r],this.profile,h);this.endCap.rebuildConnectingProfileGeometry(s[r],this.profile,o),r=0,this.startCap.rebuildCapGeometry(s[r],o),r=s.length-1,this.endCap.rebuildCapGeometry(s[r],o)},r.buildTopology=function(){const t=this.profile.vertices.length,e=this.profile.numSegments,i=this.numExtrusionProfiles-1;let r=3*(2*(e*i));this.startCap.indexBufferStart=r,this.startCap.firstProfileVertexIndex=0,r+=this.startCap.numIndices,this.endCap.indexBufferStart=r,this.endCap.firstProfileVertexIndex=t*(this.numExtrusionProfiles-1);const o=new Array,h=new Array,n=new Array,p=(t,e,i)=>{o.push(t),o.push(e),o.push(i),h.push(t),h.push(e),h.push(i),n.push(this.pathVertexData[t]),n.push(this.pathVertexData[e]),n.push(this.pathVertexData[i])};for(let s=0;s<e;++s){const e=this.profile.indices[2*s],r=this.profile.indices[2*s+1];for(let s=0;s<i;++s){const i=s*t+e,o=(s+1)*t+r,h=s*t+r;p(i,(s+1)*t+e,o),p(i,o,h)}}this.startCap.buildTopology(this.path.vertices[0],p),this.endCap.buildTopology(this.path.vertices[this.path.vertices.length-1],p),this.vertexIndices=s.compactIndices(o),this.normalIndices=s.compactIndices(h),this.pathVertexIndices=s.compactIndices(n)},r.onPathChanged=function(){this._rebuildGeometry()},e._createClass(t)}();t.PathBuilder=r,Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})}));
