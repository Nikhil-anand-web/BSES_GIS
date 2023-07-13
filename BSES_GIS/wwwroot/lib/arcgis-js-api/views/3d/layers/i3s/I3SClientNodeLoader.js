/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../core/Error","../../../../core/maybe","../../../../core/MemCache","../../../../core/promiseUtils","../../../../core/uuid","../../../../chunks/mat3","../../../../chunks/mat3f64","../../../../chunks/vec3","../../../../chunks/vec3f64","../../../../geometry/projection","../../../../chunks/sphere","../../../ViewingMode","./I3SClientMaterialUtil"],(function(e,t,n,o,r,s,a,i,l,d,u,c,m,h,f){"use strict";let p=function(){function e(e,t,n,o,r,s){this._uid=e,this._indexSR=t,this._renderSR=n,this._viewingMode=o,this._worker=s,this._id2Meta=new Map,this._oid2Meta=new Map,this._memCache=r.newCache(`sl-client-mesh-data-${this._uid}`)}var a=e.prototype;return a.createMeshNodeInfo=function(e,t){const n=`mesh${t}`,o=e.extent,r=o.spatialReference,s=this._indexSR,a=y(o,e.origin);c.projectBoundingSphere(a,r,a,s);return{type:"mesh",id:n,version:w(e),oid:t,mbs:a,componentNodeIds:[],unloadedMesh:e,nodeIndex:null,loadMeshPromise:null}},a.addMeshNode=function(e,t){if(null!=this.getMeshNodeIndex(t.oid))throw new n(`I3SClientNodeLoader: client side mesh for feature oid=${t.oid} already exists`);t.nodeIndex=e,this._id2Meta.set(t.id,t),this._oid2Meta.set(t.oid,t)},a.getMeshNodeIndex=function(e){const t=this._oid2Meta.get(e);return null==t||"mesh"!==t.type?null:t.nodeIndex},a.removeNode=function(e){if(null==e)return;const t=this._id2Meta.get(e);null!=t&&(this._id2Meta.delete(e),"mesh"===t.type&&this._oid2Meta.delete(t.oid))},a.loadNodeJSON=async function(e){const t=this._id2Meta.get(e);if(null==t)throw new n(`I3SClientNodeLoader::loadNodeJSON unable to find node ${e}`);switch(t.type){case"mesh":return this._loadMeshNodeJSON(t);case"mesh-component":return this._loadMeshComponentNodeJSON(t);default:throw new n(`I3SClientNodeLoader::loadNodeJSON unable to handle node ${e}`)}},a._loadMeshNodeJSON=async function(e){const t=e.id,n=(await this._getMeshData(e)).loadedMesh;if(null==n.components||0===n.components.length)return{id:t,version:null,mbs:e.mbs,obb:null,sharedResource:null,geometryData:null,attributeData:null,featureData:null,children:null};const o=[],r=n.components;for(let s=0;s<r.length;++s){const n=`${t}-component${s}`,r={type:"mesh-component",id:n,mbs:e.mbs,componentIndex:s,meshNodeInfo:e,textureData:new Map};this._id2Meta.set(r.id,r),e.componentNodeIds.push(n),o.push({id:r.id,href:null,mbs:r.mbs,obb:null})}return{id:t,version:null,mbs:e.mbs,obb:null,sharedResource:null,geometryData:null,attributeData:null,featureData:null,children:o}},a.updateNodeIndex=function(e,t,n){if(null==e)return;const o=this._id2Meta.get(e);o&&"mesh"===o.type&&(o.nodeIndex=n)},a._loadMeshComponentNodeJSON=async function(e){return{id:e.id,version:e.meshNodeInfo.version,mbs:e.mbs,obb:null,sharedResource:null,geometryData:null,attributeData:null,featureData:null,children:null,isEmpty:!1}},a.loadNodeData=async function(e,t){const r=e.id,a=this._id2Meta.get(r);if(null==a||"mesh-component"!==a.type)throw new n(`Failed to load client node data for node ${e.id} (unexpected node info)`);const i=a.meshNodeInfo,l=await this._getMeshData(i),d=l.loadedMesh,u=i.oid;if(null==d.components)throw new n(`Failed to load client node data for node ${e.id} (unexpected null reference)`);const c=d.components[a.componentIndex],{material:m,requiredTextures:p,textureData:y}=await f.convertMeshMaterialToPBRMaterial(c.material);if(null!=y)for(const n of y)null!=n&&a.textureData.set(n.id,n);const x={params:{material:m},type:"ArrayBufferView"},{vertexSpace:w,origin:S,transform:N}=d,_=[S.x,S.y,S.z??0],b={featureDataPosition:_,featureIds:[],geometries:[x]},I={attributeData:{},loadedAttributes:[]};l.projectionPromise||(o.assertIsSome(this._worker,"SceneLayerWorker is needed to project mesh"),l.projectionPromise=this._worker.project({positions:d.vertexAttributes.position,localMatrix:N?.localMatrix,vertexSpace:w.toJSON(),origin:_,inSpatialReference:d.spatialReference.toJSON(),outSpatialReference:this._indexSR.toJSON(),local:this._viewingMode===h.ViewingMode.Local},t));const{projected:v,original:D}=await l.projectionPromise;d.vertexAttributes.position=D;const{transformed:R,original:A}=await M(c,l,this._worker,t);d.vertexAttributes.normal=A,s.throwIfAborted(t);const{geometryBuffer:P,geometryDescriptor:O}=g(v,c.faces,R,d.vertexAttributes.uv,d.vertexAttributes.color,u);return{geometryData:b,attributeDataInfo:I,geometryBuffer:P,geometryDescriptor:O,requiredTextures:p,textureData:y}},a.loadAttributes=async function(e,t,n){const o=e.numFeatures,r={};for(const{field:{name:s}}of t)r[s]=new Array(o);return r},a.loadTextures=async function(e,t,n){const o=e.id,r=this._id2Meta.get(o);if(null==r||"mesh-component"!==r.type)throw new Error(`Failed to load textures for node ${e.id} (unexpected node info)`);const s=[];for(const a of t)s.push(r.textureData.get(a.id)||null);return s},a._getMeshData=async function(e){const t=e.version,n=this._memCache.get(t);if(null==n){if(null!=e.loadMeshPromise)return e.loadMeshPromise;const n=async(n,o)=>{const s=e.unloadedMesh.clone();try{await s.load()}catch(l){o(l)}const a=s.memoryUsage,i={loadedMesh:s,projectionPromise:null,normalsTransformPromise:null,usedMemoryInBytes:a};this._memCache.put(t,i,a,r.MIN_PRIORITY),e.loadMeshPromise=null,n(i)};return e.loadMeshPromise=new Promise(((e,t)=>n(e,t))),e.loadMeshPromise}return n},t._createClass(e,[{key:"indexSR",get:function(){return this._indexSR}},{key:"renderSR",get:function(){return this._renderSR}}]),e}();function y(e,t){const{spatialReference:n}=e,o=[1,-1],r=[.5*e.width,.5*e.height,e.hasZ?.5*(e.zmax-e.zmin):0],s=n.isGeographic?n.metersPerUnit:1,a=e.center;let i=0;if(e.hasZ)for(let l=0;l<2;++l)for(let e=0;e<2;++e)for(let n=0;n<2;++n){const d=(a.x+o[l]*r[0]-t.x)*s,u=(a.y+o[e]*r[1]-t.y)*s,c=a.z+o[n]*r[2]-t.z;i=Math.max(d*d+u*u+c*c,i)}else for(let l=0;l<2;++l)for(let e=0;e<2;++e){const n=(a.x+o[l]*r[0]-t.x)*s,d=(a.y+o[e]*r[1]-t.y)*s;i=Math.max(n*n+d*d,i)}return m.fromCenterAndRadius([t.x,t.y,t.z],Math.sqrt(i))}async function M(e,t,n,r){const{transform:s,vertexAttributes:a}=t.loadedMesh,c="source"===e.shading?a.normal:null;if(!(null!=c&&null!=s&&(0!==s.rotationAngle||!d.exactEquals(s.scale,u.ONES))))return{transformed:c,original:a.normal};if(!t.normalsTransformPromise){o.assertIsSome(n,"SceneLayerWorker is needed to transform mesh normals");const e=l.create();i.normalFromMat4(e,s.localMatrix),t.normalsTransformPromise=n.transformNormals({normalMatrix:e,normals:c},r)}return t.normalsTransformPromise}function g(e,t,n,o,r,s){const a=1,i=t.length/3,l=3*i;let d=0,u=0,c=!1,m=0,h=!1,f=0,p=!1,y=0,M=0,g=0;d+=S,d+=S,u=d,d+=3*l*N,null!=n&&(c=!0,m=d,d+=3*l*N),null!=o&&(h=!0,f=d,d+=2*l*N),null!=r&&(p=!0,y=d,d+=4*l*_),M=d,d+=a*b,g=d,d+=2*a*S;const w=new ArrayBuffer(d),I=new Uint8Array(w);x(I,0,l),x(I,S,a);const v=new Float32Array(w,u),D=null!=n?new Float32Array(w,m):null,R=null!=o?new Float32Array(w,f):null,A=null!=r?new Uint8Array(w,y):null;for(let x=0;x<i;++x){const s=3*x;for(let a=0;a<3;++a){const i=t[s+a],l=3*i,d=9*x+3*a;if(v[d]=e[l],v[d+1]=e[l+1],v[d+2]=e[l+2],null!=D&&(D[d]=n[l],D[d+1]=n[l+1],D[d+2]=n[l+2]),null!=R){const e=2*i,t=6*x+2*a;R[t]=o[e],R[t+1]=o[e+1]}if(null!=A){const e=4*i,t=12*x+4*a;A[t]=r[e],A[t+1]=r[e+1],A[t+2]=r[e+2],A[t+3]=r[e+3]}}}x(I,M,s),x(I,M+S,s/2**32),x(I,g,0),x(I,g+S,i-1);return{geometryBuffer:w,geometryDescriptor:{isDraco:!1,isLegacy:!0,color:p,normal:c,uv0:h,uvRegion:!1,featureIndex:!0}}}function x(e,t,n){e[t]=255&n,e[t+1]=255&n>>8,e[t+2]=255&n>>16,e[t+3]=255&n>>24}function w(e){const t=e.metadata.displaySource?.source;if(null==t||!Array.isArray(t)||!t.length||t[0]instanceof File)return a.generateUUID();const n=t;let o="";for(const r of n)o+=r.makeHash();return o+JSON.stringify(null!=e.transform?e.transform.toJSON():"")+(e.vertexSpace.isRelative?JSON.stringify(e.vertexSpace.origin):"")}const S=4,N=4,_=1,b=8;e.I3SClientNodeLoader=p,e.createSphereFromExtent=y,e.transformNormals=M,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));