/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../core/mathUtils","../../../../chunks/mat2","../../../../chunks/mat2f64","../../../../chunks/vec2","../../../../chunks/vec2f64","../../../../chunks/vec3","../../../../chunks/vec3f64","./PathExtruder","./PathGeometry"],(function(t,e,r,i,n,a,s,o,h,c,u){"use strict";let f=function(){function t(){this.vLeft=h.create(),this.vRight=h.create(),this.vMinSiblingLength=0,this.frame=new c.Frame2D}return t.prototype.setFrameFromUpVector=function(t){o.copy(this.frame.up,t),o.add(L,this.vLeft,this.vRight),o.normalize(L,L),o.scale(A,this.frame.up,o.dot(L,this.frame.up)),o.subtract(P,L,A),o.normalize(P,P),o.cross(this.frame.right,P,this.frame.up)},e._createClass(t,[{key:"foldingAngle",get:function(){return Math.PI-this.rotationAngle}}]),t}(),g=function(t){function i(){return t.apply(this,arguments)||this}return e._inherits(i,t),i.prototype.applyMiterStretch=function(t,e){const i=this.rotationAngle;if(Math.abs(i)<=0)return e;const n=r.reciprocalClamped(Math.cos(.5*i));return a.set(t,(n-1+1)*e[0],e[1])},e._createClass(i,[{key:"rotationFrameUp",get:function(){return this.frame.up}},{key:"rotationRight",get:function(){return s.UNIT_X}},{key:"rotationAngle",get:function(){o.scale(b,this.frame.up,o.dot(this.frame.up,this.vLeft)),o.subtract(b,this.vLeft,b),o.negate(b,b),o.normalize(b,b),o.scale(R,this.frame.up,o.dot(this.frame.up,this.vRight)),o.subtract(R,this.vRight,R),o.normalize(R,R),o.cross(k,this.rotationFrameUp,this.vLeft);return Math.sign(o.dot(k,this.vRight))*(Math.PI-r.acosClamped(o.dot(b,R)))}},{key:"maxStretchDistance",get:function(){return Math.abs(this.vMinSiblingLength/Math.cos(.5*this.foldingAngle))}}]),i}(f),l=function(t){function n(){return t.apply(this,arguments)||this}return e._inherits(n,t),n.prototype.applyMiterStretch=function(t,e){const n=this.rotationAngle;if(0===Math.abs(n))return e;const s=r.reciprocalClamped(Math.cos(.5*n)),o=this.rotationRight,h=i.set(S,1+(s-1)*o[0]*o[0],(s-1)*o[0]*o[1],(s-1)*o[0]*o[1],1+(s-1)*o[1]*o[1]);return a.transformMat2(t,e,h)},e._createClass(n,[{key:"rotationFrameUp",get:function(){const t=Math.sign(o.dot(this.frame.right,this.vRight));return o.cross(d,this.vRight,this.vLeft),o.scale(d,d,t),o.normalize(d,d)}},{key:"rotationRight",get:function(){const t=this.rotationFrameUp,e=o.dot(t,this.frame.up),r=o.dot(t,this.frame.right);return o.scale(M,this.frame.up,-r),o.scale(y,this.frame.right,e),o.add(M,M,y),o.normalize(M,M),m(v,this.frame,M),v}},{key:"rotationAngle",get:function(){const t=Math.sign(o.dot(this.frame.right,this.vRight));return o.negate(k,this.vLeft),-t*(Math.PI-r.acosClamped(o.dot(k,this.vRight)))}},{key:"maxStretchDistance",get:function(){return Math.abs(this.vMinSiblingLength*r.reciprocalClamped(Math.cos(.5*this.foldingAngle)))}}]),n}(f);function m(t,e,r){a.set(t,o.dot(r,e.right),o.dot(r,e.up))}function p(t){switch(t){case u.UpVectorAlignment.World:return new g;case u.UpVectorAlignment.Path:return new l}}const d=h.create(),v=s.create(),M=h.create(),y=h.create(),k=h.create(),b=h.create(),R=h.create(),A=h.create(),L=h.create(),P=h.create(),S=n.create();t.PathVertex=f,t.newPathVertex=p,Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})}));