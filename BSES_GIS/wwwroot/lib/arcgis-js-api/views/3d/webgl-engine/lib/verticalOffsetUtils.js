/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../chunks/mat3","../../../../chunks/mat3f64","../../../../chunks/mat4","../../../../chunks/mat4f64","../../../../chunks/quat","../../../../chunks/quatf64","../../../../chunks/vec3","../../../../chunks/vec3f32","../../../../chunks/vec3f64","../../../../chunks/sphere"],(function(t,e,s,i,n,r,a,o,h,f,l,c){"use strict";let u=function(){function t(){this._transform=r.create(),this._transformInverse=new _({value:this._transform},n.invert,r.create),this._transformInverseTranspose=new _(this._transformInverse,n.transpose,r.create),this._transformTranspose=new _({value:this._transform},n.transpose,r.create),this._transformInverseRotation=new _({value:this._transform},s.normalFromMat4Legacy,i.create)}var a=t.prototype;return a._invalidateLazyTransforms=function(){this._transformInverse.invalidate(),this._transformInverseTranspose.invalidate(),this._transformTranspose.invalidate(),this._transformInverseRotation.invalidate()},a.setTransformMatrix=function(t){n.copy(this._transform,t)},a.multiplyTransform=function(t){n.multiply(this._transform,this._transform,t)},a.set=function(t){n.copy(this._transform,t),this._invalidateLazyTransforms()},a.setAndInvalidateLazyTransforms=function(t,e){this.setTransformMatrix(t),this.multiplyTransform(e),this._invalidateLazyTransforms()},e._createClass(t,[{key:"transform",get:function(){return this._transform}},{key:"inverse",get:function(){return this._transformInverse.value}},{key:"inverseTranspose",get:function(){return this._transformInverseTranspose.value}},{key:"inverseRotation",get:function(){return this._transformInverseRotation.value}},{key:"transpose",get:function(){return this._transformTranspose.value}}]),t}(),_=function(){function t(t,e,s){this._original=t,this._update=e,this._dirty=!0,this._transform=s()}return t.prototype.invalidate=function(){this._dirty=!0},e._createClass(t,[{key:"value",get:function(){return this._dirty&&(this._update(this._transform,this._original.value),this._dirty=!1),this._transform}}]),t}(),b=function(){function t(t=0){this.offset=t,this.tmpVertex=l.create()}var s=t.prototype;return s.applyToVertex=function(t,e,s){const i=t+this.localOrigin[0],n=e+this.localOrigin[1],r=s+this.localOrigin[2],a=this.offset/Math.sqrt(i*i+n*n+r*r);return this.tmpVertex[0]=t+i*a,this.tmpVertex[1]=e+n*a,this.tmpVertex[2]=s+r*a,this.tmpVertex},s.applyToAabb=function(t){for(let n=0;n<3;++n)m[n]=t[0+n]+this.localOrigin[n],p[n]=t[3+n]+this.localOrigin[n],M[n]=m[n];const e=this.applyToVertex(m[0],m[1],m[2]);for(let n=0;n<3;++n)t[n]=e[n],t[n+3]=e[n];const s=e=>{const s=this.applyToVertex(e[0],e[1],e[2]);for(let i=0;i<3;++i)t[i]=Math.min(t[i],s[i]),t[i+3]=Math.max(t[i+3],s[i])};for(let n=1;n<8;++n){for(let t=0;t<3;++t)M[t]=0==(n&1<<t)?m[t]:p[t];s(M)}let i=0;for(let n=0;n<3;++n){m[n]*p[n]<0&&(i|=1<<n)}if(0!==i&&7!==i)for(let n=0;n<8;++n)if(0==(i&n)){for(let t=0;t<3;++t)M[t]=0!=(i&1<<t)?0:0!=(n&1<<t)?m[t]:p[t];s(M)}for(let n=0;n<3;++n)t[n]-=this.localOrigin[n],t[n+3]-=this.localOrigin[n];return t},e._createClass(t)}();const m=l.create(),p=l.create(),M=l.create();let O=function(){function t(t=0){this.componentLocalOriginLength=0,this._tmpVertex=l.create(),this._mbs=c.create(),this._obb={center:l.create(),halfSize:f.create(),quaternion:null},this._totalOffset=0,this._offset=0,this._resetOffset(t)}var s=t.prototype;return s._resetOffset=function(t){this._offset=t,this._totalOffset=t},s.applyToVertex=function(t,e,s){const i=t,n=e,r=s+this.componentLocalOriginLength,a=this._totalOffset/Math.sqrt(i*i+n*n+r*r);return this._tmpVertex[0]=t+i*a,this._tmpVertex[1]=e+n*a,this._tmpVertex[2]=s+r*a,this._tmpVertex},s.applyToAabb=function(t){const e=t[0],s=t[1],i=t[2]+this.componentLocalOriginLength,n=t[3],r=t[4],a=t[5]+this.componentLocalOriginLength,o=e*n<0?0:Math.min(Math.abs(e),Math.abs(n)),h=s*r<0?0:Math.min(Math.abs(s),Math.abs(r)),f=i*a<0?0:Math.min(Math.abs(i),Math.abs(a)),l=Math.sqrt(o*o+h*h+f*f);if(l<this._totalOffset)return t[0]-=e<0?this._totalOffset:0,t[1]-=s<0?this._totalOffset:0,t[2]-=i<0?this._totalOffset:0,t[3]+=n>0?this._totalOffset:0,t[4]+=r>0?this._totalOffset:0,t[5]+=a>0?this._totalOffset:0,t;const c=Math.max(Math.abs(e),Math.abs(n)),u=Math.max(Math.abs(s),Math.abs(r)),_=Math.max(Math.abs(i),Math.abs(a)),b=Math.sqrt(c*c+u*u+_*_),m=this._totalOffset/b,p=this._totalOffset/l;return t[0]+=e*(e>0?m:p),t[1]+=s*(s>0?m:p),t[2]+=i*(i>0?m:p),t[3]+=n*(n<0?m:p),t[4]+=r*(r<0?m:p),t[5]+=a*(a<0?m:p),t},s.applyToMbs=function(t){const e=Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]),s=this._totalOffset/e;return this._mbs[0]=t[0]+t[0]*s,this._mbs[1]=t[1]+t[1]*s,this._mbs[2]=t[2]+t[2]*s,this._mbs[3]=t[3]+t[3]*this._totalOffset/e,this._mbs},s.applyToObb=function(t){const e=t.center,s=this._totalOffset/Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]);this._obb.center[0]=e[0]+e[0]*s,this._obb.center[1]=e[1]+e[1]*s,this._obb.center[2]=e[2]+e[2]*s,h.transformQuat(this._obb.halfSize,t.halfSize,t.quaternion),h.add(this._obb.halfSize,this._obb.halfSize,t.center);const i=this._totalOffset/Math.sqrt(this._obb.halfSize[0]*this._obb.halfSize[0]+this._obb.halfSize[1]*this._obb.halfSize[1]+this._obb.halfSize[2]*this._obb.halfSize[2]);return this._obb.halfSize[0]+=this._obb.halfSize[0]*i,this._obb.halfSize[1]+=this._obb.halfSize[1]*i,this._obb.halfSize[2]+=this._obb.halfSize[2]*i,h.subtract(this._obb.halfSize,this._obb.halfSize,t.center),a.conjugate(d,t.quaternion),h.transformQuat(this._obb.halfSize,this._obb.halfSize,d),this._obb.halfSize[0]*=this._obb.halfSize[0]<0?-1:1,this._obb.halfSize[1]*=this._obb.halfSize[1]<0?-1:1,this._obb.halfSize[2]*=this._obb.halfSize[2]<0?-1:1,this._obb.quaternion=t.quaternion,this._obb},e._createClass(t,[{key:"offset",get:function(){return this._offset},set:function(t){this._resetOffset(t)}},{key:"componentOffset",set:function(t){this._totalOffset=this._offset+t}},{key:"localOrigin",set:function(t){this.componentLocalOriginLength=Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2])}}]),t}(),y=function(){function t(t=0){this.offset=t,this.sphere=c.create(),this.tmpVertex=l.create()}var s=t.prototype;return s.applyToVertex=function(t,e,s){const i=this.objectTransform.transform;let n=i[0]*t+i[4]*e+i[8]*s+i[12],r=i[1]*t+i[5]*e+i[9]*s+i[13],a=i[2]*t+i[6]*e+i[10]*s+i[14];const o=this.offset/Math.sqrt(n*n+r*r+a*a);n+=n*o,r+=r*o,a+=a*o;const h=this.objectTransform.inverse;return this.tmpVertex[0]=h[0]*n+h[4]*r+h[8]*a+h[12],this.tmpVertex[1]=h[1]*n+h[5]*r+h[9]*a+h[13],this.tmpVertex[2]=h[2]*n+h[6]*r+h[10]*a+h[14],this.tmpVertex},s.applyToMinMax=function(t,e){const s=this.offset/Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]);t[0]+=t[0]*s,t[1]+=t[1]*s,t[2]+=t[2]*s;const i=this.offset/Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]);e[0]+=e[0]*i,e[1]+=e[1]*i,e[2]+=e[2]*i},s.applyToAabb=function(t){const e=this.offset/Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]);t[0]+=t[0]*e,t[1]+=t[1]*e,t[2]+=t[2]*e;const s=this.offset/Math.sqrt(t[3]*t[3]+t[4]*t[4]+t[5]*t[5]);return t[3]+=t[3]*s,t[4]+=t[4]*s,t[5]+=t[5]*s,t},s.applyToBoundingSphere=function(t){const e=Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]),s=this.offset/e;return this.sphere[0]=t[0]+t[0]*s,this.sphere[1]=t[1]+t[1]*s,this.sphere[2]=t[2]+t[2]*s,this.sphere[3]=t[3]+t[3]*this.offset/e,this.sphere},e._createClass(t)}();const v=new y;function g(t){return null!=t?(v.offset=t,v):null}const T=new O;function S(t){return null!=t?(T.offset=t,T):null}const z=new b;function V(t){return null!=t?(z.offset=t,z):null}const x="terrain",d=o.create();t.I3SVerticalOffsetGlobalViewingMode=O,t.IntersectorTransform=u,t.Object3DVerticalOffsetGlobalViewingMode=y,t.TERRAIN_ID=x,t.TerrainVerticalOffsetGlobalViewingMode=b,t.getVerticalOffsetI3S=S,t.getVerticalOffsetObject3D=g,t.getVerticalOffsetTerrain=V,Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})}));
