/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../chunks/_rollupPluginBabelHelpers","./internals/Mat3","./internals/Mat4","./internals/Scalar","./internals/Vec2","./internals/Vec3","./internals/Vec4"],(function(e,t,r,n,f,i,u,s){"use strict";let l=function(e){function r(t,r=0,n,f){var i;return(i=e.call(this,Float32Array,t,r,n,f)||this).elementType="f32",i}return t._inherits(r,e),r.fromTypedArray=function(e,t){return new r(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)},t._createClass(r)}(f.BufferViewScalarImpl);l.ElementType="f32";let c=function(e){function r(t,r=0,n,f){var i;return(i=e.call(this,Float32Array,t,r,n,f)||this).elementType="f32",i}return t._inherits(r,e),r.prototype.slice=function(e,t){return this.sliceBuffer(r,e,t)},r.fromTypedArray=function(e,t){return new r(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)},t._createClass(r)}(i.BufferViewVec2Impl);c.ElementType="f32";let y=function(e){function r(t,r=0,n,f){var i;return(i=e.call(this,Float32Array,t,r,n,f)||this).elementType="f32",i}return t._inherits(r,e),r.prototype.slice=function(e,t){return this.sliceBuffer(r,e,t)},r.fromTypedArray=function(e,t){return new r(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)},t._createClass(r)}(u.BufferViewVec3Impl);y.ElementType="f32";let o=function(e){function r(t,r=0,n,f){var i;return(i=e.call(this,Float32Array,t,r,n,f)||this).elementType="f32",i}return t._inherits(r,e),r.prototype.slice=function(e,t){return this.sliceBuffer(r,e,t)},r.fromTypedArray=function(e,t){return new r(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)},t._createClass(r)}(s.BufferViewVec4Impl);o.ElementType="f32";let a=function(e){function r(t,r=0,n,f){var i;return(i=e.call(this,Float32Array,t,r,n,f)||this).elementType="f32",i}return t._inherits(r,e),r.prototype.slice=function(e,t){return this.sliceBuffer(r,e,t)},r.fromTypedArray=function(e,t){return new r(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)},t._createClass(r)}(r.BufferViewMat3Impl);a.ElementType="f32";let p=function(e){function r(t,r=0,n,f){var i;return(i=e.call(this,Float64Array,t,r,n,f)||this).elementType="f64",i}return t._inherits(r,e),r.prototype.slice=function(e,t){return this.sliceBuffer(r,e,t)},r.fromTypedArray=function(e,t){return new r(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)},t._createClass(r)}(r.BufferViewMat3Impl);p.ElementType="f64";let h=function(e){function r(t,r=0,n,f){var i;return(i=e.call(this,Float32Array,t,r,n,f)||this).elementType="f32",i}return t._inherits(r,e),r.prototype.slice=function(e,t){return this.sliceBuffer(r,e,t)},r.fromTypedArray=function(e,t){return new r(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)},t._createClass(r)}(n.BufferViewMat4Impl);h.ElementType="f32";let b=function(e){function r(t,r=0,n,f){var i;return(i=e.call(this,Float64Array,t,r,n,f)||this).elementType="f64",i}return t._inherits(r,e),r.prototype.slice=function(e,t){return this.sliceBuffer(r,e,t)},r.fromTypedArray=function(e,t){return new r(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)},t._createClass(r)}(n.BufferViewMat4Impl);b.ElementType="f64";let m=function(e){function r(t,r=0,n,f){var i;return(i=e.call(this,Float64Array,t,r,n,f)||this).elementType="f64",i}return t._inherits(r,e),r.prototype.slice=function(e,t){return this.sliceBuffer(r,e,t)},r.fromTypedArray=function(e,t){return new r(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)},t._createClass(r)}(f.BufferViewScalarImpl);m.ElementType="f64";let V=function(e){function r(t,r=0,n,f){var i;return(i=e.call(this,Float64Array,t,r,n,f)||this).elementType="f64",i}return t._inherits(r,e),r.prototype.slice=function(e,t){return this.sliceBuffer(r,e,t)},r.fromTypedArray=function(e,t){return new r(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)},t._createClass(r)}(i.BufferViewVec2Impl);V.ElementType="f64";let T=function(e){function r(t,r=0,n,f){var i;return(i=e.call(this,Float64Array,t,r,n,f)||this).elementType="f64",i}return t._inherits(r,e),r.prototype.slice=function(e,t){return this.sliceBuffer(r,e,t)},r.fromTypedArray=function(e,t){return new r(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)},t._createClass(r)}(u.BufferViewVec3Impl);T.ElementType="f64";let w=function(e){function r(t,r=0,n,f){var i;return(i=e.call(this,Float64Array,t,r,n,f)||this).elementType="f64",i}return t._inherits(r,e),r.prototype.slice=function(e,t){return this.sliceBuffer(r,e,t)},r.fromTypedArray=function(e,t){return new r(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)},t._createClass(r)}(s.BufferViewVec4Impl);w.ElementType="f64";let B=function(e){function r(t,r=0,n,f){var i;return(i=e.call(this,Uint8Array,t,r,n,f)||this).elementType="u8",i}return t._inherits(r,e),r.prototype.slice=function(e,t){return this.sliceBuffer(r,e,t)},r.fromTypedArray=function(e,t){return new r(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)},t._createClass(r)}(f.BufferViewScalarImpl);B.ElementType="u8";let O=function(e){function r(t,r=0,n,f){var i;return(i=e.call(this,Uint8Array,t,r,n,f)||this).elementType="u8",i}return t._inherits(r,e),r.prototype.slice=function(e,t){return this.sliceBuffer(r,e,t)},r.fromTypedArray=function(e,t){return new r(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)},t._createClass(r)}(i.BufferViewVec2Impl);O.ElementType="u8";let _=function(e){function r(t,r=0,n,f){var i;return(i=e.call(this,Uint8Array,t,r,n,f)||this).elementType="u8",i}return t._inherits(r,e),r.prototype.slice=function(e,t){return this.sliceBuffer(r,e,t)},r.fromTypedArray=function(e,t){return new r(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)},t._createClass(r)}(u.BufferViewVec3Impl);_.ElementType="u8";let A=function(e){function r(t,r=0,n,f){var i;return(i=e.call(this,Uint8Array,t,r,n,f)||this).elementType="u8",i}return t._inherits(r,e),r.prototype.slice=function(e,t){return this.sliceBuffer(r,e,t)},r.fromTypedArray=function(e,t){return new r(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)},t._createClass(r)}(s.BufferViewVec4Impl);A.ElementType="u8";let I=function(e){function r(t,r=0,n,f){var i;return(i=e.call(this,Uint16Array,t,r,n,f)||this).elementType="u16",i}return t._inherits(r,e),r.prototype.slice=function(e,t){return this.sliceBuffer(r,e,t)},r.fromTypedArray=function(e,t){return new r(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)},t._createClass(r)}(f.BufferViewScalarImpl);I.ElementType="u16";let d=function(e){function r(t,r=0,n,f){var i;return(i=e.call(this,Uint16Array,t,r,n,f)||this).elementType="u16",i}return t._inherits(r,e),r.prototype.slice=function(e,t){return this.sliceBuffer(r,e,t)},r.fromTypedArray=function(e,t){return new r(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)},t._createClass(r)}(i.BufferViewVec2Impl);d.ElementType="u16";let g=function(e){function r(t,r=0,n,f){var i;return(i=e.call(this,Uint16Array,t,r,n,f)||this).elementType="u16",i}return t._inherits(r,e),r.prototype.slice=function(e,t){return this.sliceBuffer(r,e,t)},r.fromTypedArray=function(e,t){return new r(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)},t._createClass(r)}(u.BufferViewVec3Impl);g.ElementType="u16";let v=function(e){function r(t,r=0,n,f){var i;return(i=e.call(this,Uint16Array,t,r,n,f)||this).elementType="u16",i}return t._inherits(r,e),r.prototype.slice=function(e,t){return this.sliceBuffer(r,e,t)},r.fromTypedArray=function(e,t){return new r(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)},t._createClass(r)}(s.BufferViewVec4Impl);v.ElementType="u16";let C=function(e){function r(t,r=0,n,f){var i;return(i=e.call(this,Uint32Array,t,r,n,f)||this).elementType="u32",i}return t._inherits(r,e),r.prototype.slice=function(e,t){return this.sliceBuffer(r,e,t)},r.fromTypedArray=function(e,t){return new r(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)},t._createClass(r)}(f.BufferViewScalarImpl);C.ElementType="u32";let E=function(e){function r(t,r=0,n,f){var i;return(i=e.call(this,Uint32Array,t,r,n,f)||this).elementType="u32",i}return t._inherits(r,e),r.prototype.slice=function(e,t){return this.sliceBuffer(r,e,t)},r.fromTypedArray=function(e,t){return new r(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)},t._createClass(r)}(i.BufferViewVec2Impl);E.ElementType="u32";let L=function(e){function r(t,r=0,n,f){var i;return(i=e.call(this,Uint32Array,t,r,n,f)||this).elementType="u32",i}return t._inherits(r,e),r.prototype.slice=function(e,t){return this.sliceBuffer(r,e,t)},r.fromTypedArray=function(e,t){return new r(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)},t._createClass(r)}(u.BufferViewVec3Impl);L.ElementType="u32";let U=function(e){function r(t,r=0,n,f){var i;return(i=e.call(this,Uint32Array,t,r,n,f)||this).elementType="u32",i}return t._inherits(r,e),r.prototype.slice=function(e,t){return this.sliceBuffer(r,e,t)},r.fromTypedArray=function(e,t){return new r(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)},t._createClass(r)}(s.BufferViewVec4Impl);U.ElementType="u32";let F=function(e){function r(t,r=0,n,f){var i;return(i=e.call(this,Int8Array,t,r,n,f)||this).elementType="i8",i}return t._inherits(r,e),r.prototype.slice=function(e,t){return this.sliceBuffer(r,e,t)},r.fromTypedArray=function(e,t){return new r(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)},t._createClass(r)}(f.BufferViewScalarImpl);F.ElementType="i8";let M=function(e){function r(t,r=0,n,f){var i;return(i=e.call(this,Int8Array,t,r,n,f)||this).elementType="i8",i}return t._inherits(r,e),r.prototype.slice=function(e,t){return this.sliceBuffer(r,e,t)},r.fromTypedArray=function(e,t){return new r(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)},t._createClass(r)}(i.BufferViewVec2Impl);M.ElementType="i8";let S=function(e){function r(t,r=0,n,f){var i;return(i=e.call(this,Int8Array,t,r,n,f)||this).elementType="i8",i}return t._inherits(r,e),r.prototype.slice=function(e,t){return this.sliceBuffer(r,e,t)},r.fromTypedArray=function(e,t){return new r(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)},t._createClass(r)}(u.BufferViewVec3Impl);S.ElementType="i8";let P=function(e){function r(t,r=0,n,f){var i;return(i=e.call(this,Int8Array,t,r,n,f)||this).elementType="i8",i}return t._inherits(r,e),r.prototype.slice=function(e,t){return this.sliceBuffer(r,e,t)},r.fromTypedArray=function(e,t){return new r(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)},t._createClass(r)}(s.BufferViewVec4Impl);P.ElementType="i8";let j=function(e){function r(t,r=0,n,f){var i;return(i=e.call(this,Int16Array,t,r,n,f)||this).elementType="i16",i}return t._inherits(r,e),r.prototype.slice=function(e,t){return this.sliceBuffer(r,e,t)},r.fromTypedArray=function(e,t){return new r(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)},t._createClass(r)}(f.BufferViewScalarImpl);j.ElementType="i16";let k=function(e){function r(t,r=0,n,f){var i;return(i=e.call(this,Int16Array,t,r,n,f)||this).elementType="i16",i}return t._inherits(r,e),r.prototype.slice=function(e,t){return this.sliceBuffer(r,e,t)},r.fromTypedArray=function(e,t){return new r(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)},t._createClass(r)}(i.BufferViewVec2Impl);k.ElementType="i16";let x=function(e){function r(t,r=0,n,f){var i;return(i=e.call(this,Int16Array,t,r,n,f)||this).elementType="i16",i}return t._inherits(r,e),r.prototype.slice=function(e,t){return this.sliceBuffer(r,e,t)},r.fromTypedArray=function(e,t){return new r(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)},t._createClass(r)}(u.BufferViewVec3Impl);x.ElementType="i16";let H=function(e){function r(t,r=0,n,f){var i;return(i=e.call(this,Int16Array,t,r,n,f)||this).elementType="i16",i}return t._inherits(r,e),r.prototype.slice=function(e,t){return this.sliceBuffer(r,e,t)},r.fromTypedArray=function(e,t){return new r(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)},t._createClass(r)}(s.BufferViewVec4Impl);H.ElementType="i16";let q=function(e){function r(t,r=0,n,f){var i;return(i=e.call(this,Int32Array,t,r,n,f)||this).elementType="i32",i}return t._inherits(r,e),r.prototype.slice=function(e,t){return this.sliceBuffer(r,e,t)},r.fromTypedArray=function(e,t){return new r(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)},t._createClass(r)}(f.BufferViewScalarImpl);q.ElementType="i32";let z=function(e){function r(t,r=0,n,f){var i;return(i=e.call(this,Int32Array,t,r,n,f)||this).elementType="i32",i}return t._inherits(r,e),r.prototype.slice=function(e,t){return this.sliceBuffer(r,e,t)},r.fromTypedArray=function(e,t){return new r(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)},t._createClass(r)}(i.BufferViewVec2Impl);z.ElementType="i32";let D=function(e){function r(t,r=0,n,f){var i;return(i=e.call(this,Int32Array,t,r,n,f)||this).elementType="i32",i}return t._inherits(r,e),r.prototype.slice=function(e,t){return this.sliceBuffer(r,e,t)},r.fromTypedArray=function(e,t){return new r(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)},t._createClass(r)}(u.BufferViewVec3Impl);D.ElementType="i32";let G=function(e){function r(t,r=0,n,f){var i;return(i=e.call(this,Int32Array,t,r,n,f)||this).elementType="i32",i}return t._inherits(r,e),r.prototype.slice=function(e,t){return this.sliceBuffer(r,e,t)},r.fromTypedArray=function(e,t){return new r(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)},t._createClass(r)}(s.BufferViewVec4Impl);G.ElementType="i32",e.BufferViewFloat=l,e.BufferViewFloat64=m,e.BufferViewInt16=j,e.BufferViewInt32=q,e.BufferViewInt8=F,e.BufferViewMat3f=a,e.BufferViewMat3f64=p,e.BufferViewMat4f=h,e.BufferViewMat4f64=b,e.BufferViewUint16=I,e.BufferViewUint32=C,e.BufferViewUint8=B,e.BufferViewVec2f=c,e.BufferViewVec2f64=V,e.BufferViewVec2i16=k,e.BufferViewVec2i32=z,e.BufferViewVec2i8=M,e.BufferViewVec2u16=d,e.BufferViewVec2u32=E,e.BufferViewVec2u8=O,e.BufferViewVec3f=y,e.BufferViewVec3f64=T,e.BufferViewVec3i16=x,e.BufferViewVec3i32=D,e.BufferViewVec3i8=S,e.BufferViewVec3u16=g,e.BufferViewVec3u32=L,e.BufferViewVec3u8=_,e.BufferViewVec4f=o,e.BufferViewVec4f64=w,e.BufferViewVec4i16=H,e.BufferViewVec4i32=G,e.BufferViewVec4i8=P,e.BufferViewVec4u16=v,e.BufferViewVec4u32=U,e.BufferViewVec4u8=A,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));