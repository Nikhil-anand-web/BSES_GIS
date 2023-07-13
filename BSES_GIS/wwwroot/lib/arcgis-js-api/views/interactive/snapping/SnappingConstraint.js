/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../chunks/_rollupPluginBabelHelpers","../../../chunks/vec2","../../../chunks/vec2f64","../../../chunks/vec3","../../../chunks/vec3f64","./SnappingPoint","../../support/geometry3dUtils","../../support/geometry2dUtils"],(function(t,n,e,i,r,s,a,c,o){"use strict";let l=function(){function t(){}return t.prototype.intersect=function(t){return _(this,t)},n._createClass(t)}(),u=function(t){function e(n){var e;return(e=t.call(this)||this).point=n,e}n._inherits(e,t);var i=e.prototype;return i.equals=function(t){return v(t)&&r.exactEquals(this.point,t.point)},i.closestTo=function(){return a.cloneSnappingPoint(this.point)},n._createClass(e)}(l),f=function(t){function e(n,e,i){var r;return(r=t.call(this)||this).start=n,r.end=e,r.type=i,r.lineLike={start:r.start,end:r.end,type:r.type},r}n._inherits(e,t);var i=e.prototype;return i.equals=function(t){return A(t)&&this.type===t.type&&r.exactEquals(this.start,t.start)&&r.exactEquals(this.end,t.end)},i.closestTo=function(t){const n=c.projectPointToLineLike(t,this.lineLike);return a.asSnappingPoint(n)},n._createClass(e)}(l),p=function(t){function e(n,e){return t.call(this,n,e,o.LineType.LINE)||this}return n._inherits(e,t),n._createClass(e)}(f),h=function(t){function e(n,e,i){var r;return(r=t.call(this)||this).intersection=n,r.first=e,r.second=i,r}n._inherits(e,t);var i=e.prototype;return i.equals=function(t){return t instanceof e&&this.first.equals(t.first)&&this.second.equals(t.second)},i.closestTo=function(){return a.cloneSnappingPoint(this.intersection)},n._createClass(e)}(l),d=function(t){function e(n,e,i){var r;return(r=t.call(this)||this).basePoint=n,r.first=e,r.second=i,r}n._inherits(e,t);var i=e.prototype;return i.equals=function(t){return t instanceof e&&this.first.equals(t.first)&&this.second.equals(t.second)},i.closestTo=function(t){const n=this.basePoint;return a.asSnappingPoint(s.fromValues(n[0],n[1],t[2]))},n._createClass(e)}(l),L=function(t){function e(n,e){var i;return(i=t.call(this)||this).center=n,i.radius=e,i}n._inherits(e,t);var i=e.prototype;return i.equals=function(t){return q(t)&&this.center[0]===t.center[0]&&this.center[1]===t.center[1]&&this.radius===t.radius},i.closestTo=function(t){const n=c.projectPointToVerticalCylinder(t,this.center,this.radius);return a.asSnappingPoint(n)},n._createClass(e)}(l),P=function(t){function i(n,e,i){var r;return(r=t.call(this)||this).start=n,r.end=e,r.type=i,r.planeLike={start:n,end:e,type:i},r}n._inherits(i,t);var s=i.prototype;return s.equals=function(t){return E(t)&&this.type===t.type&&r.exactEquals(this.start,t.start)&&r.exactEquals(this.end,t.end)},s.closestTo=function(t){return a.asSnappingPoint(c.projectPointToVerticalPlane(t,this.planeLike))},s.closestEndTo=function(t){const{start:n,end:i}=this;return Math.sign(e.dot(e.subtract(m,i,n),e.subtract(b,t,n)))>0?i:n},n._createClass(i)}(l),y=function(t){function e(n,e){return t.call(this,n,e,c.VerticalPlaneType.HALF_PLANE)||this}return n._inherits(e,t),n._createClass(e)}(P),k=function(t){function e(n,e){return t.call(this,n,e,c.VerticalPlaneType.PLANE)||this}return n._inherits(e,t),n._createClass(e)}(P),V=function(t){function e(n,e,i){var r;return(r=t.call(this)||this).start=n,r.end=e,r.getZ=i,r.planeLike={start:n,end:e,type:c.VerticalPlaneType.PLANE},r}n._inherits(e,t);var i=e.prototype;return i.equals=function(t){return S(t)&&r.exactEquals(this.start,t.start)&&r.exactEquals(this.end,t.end)&&this.getZ===t.getZ},i.closestTo=function(t){return C(this,t)},i.addIfOnTheGround=function(t,n){for(const e of n){const n=this.getZ(e[0],e[1],e[2])??0;Math.abs(e[2]-n)<c.epsilon&&(e[2]=n,t.push(e))}},n._createClass(e)}(l);function C(t,n){const e=c.projectPointToVerticalPlane(n,t.planeLike);return e[2]=t.getZ(n[0],n[1],n[2])??x,a.asSnappingPoint(e)}function _(t,n){let e=[];if(v(t)){const{point:i}=t;A(n)?e=c.intersectLineAndPoint(n.lineLike,i):q(n)?e=c.intersectVerticalCylinderAndPoint(n.center,n.radius,i):E(n)?e=c.intersectVerticalPlaneAndPoint(n.planeLike,i):S(n)&&(e=g(n,t))}else if(A(t)){const{lineLike:i}=t;v(n)?e=c.intersectLineAndPoint(i,n.point):A(n)?e=c.intersectLineLike(i,n.lineLike):q(n)?e=c.intersectLineLikeAndVerticalCylinder(i,n.center,n.radius):E(n)?e=c.intersectVerticalPlaneAndLineLike(n.planeLike,i):S(n)&&(e=g(n,t))}else if(q(t)){const{center:i,radius:r}=t;if(A(n))e=c.intersectLineLikeAndVerticalCylinder(n.lineLike,i,r);else if(v(n))e=c.intersectVerticalCylinderAndPoint(i,r,n.point);else{if(E(n))return c.intersectVerticalPlaneAndVerticalCylinder(n.planeLike,i,r).map((e=>new d(e,t,n)));S(n)&&(e=g(n,t))}}else if(E(t)){const{planeLike:i}=t;if(E(n))return c.intersectVerticalPlane(i,n.planeLike).map((e=>new d(e,t,n)));if(v(n))e=c.intersectVerticalPlaneAndPoint(i,n.point);else if(A(n))e=c.intersectVerticalPlaneAndLineLike(i,n.lineLike);else{if(q(n))return c.intersectVerticalPlaneAndVerticalCylinder(i,n.center,n.radius).map((e=>new d(e,t,n)));S(n)&&(e=g(n,t))}}else S(t)&&(e=g(t,n));return T(e,t,n)}function g(t,n){const{planeLike:e,getZ:i}=t,r=[];if(v(n))t.addIfOnTheGround(r,c.intersectVerticalPlaneAndPoint(e,n.point));else if(A(n))t.addIfOnTheGround(r,c.intersectVerticalPlaneAndLineLike(e,n.lineLike));else if(q(n))for(const[a,o]of c.intersectVerticalPlaneAndVerticalCylinder(e,n.center,n.radius)){const t=i(a,o,0);null!=t&&r.push(s.fromValues(a,o,t))}else if(E(n)||S(n))for(const[a,o]of c.intersectVerticalPlane(e,n.planeLike)){const t=i(a,o,0)??x;r.push(s.fromValues(a,o,t))}return r}function T(t,n,e){return t.map((t=>new h(a.asSnappingPoint(t),n,e)))}function v(t){return t instanceof u}function A(t){return t instanceof f}function q(t){return t instanceof L}function E(t){return t instanceof P}function S(t){return t instanceof V}const m=i.create(),b=i.create(),x=0;t.DrapedLineConstraint=V,t.IntersectionConstraint=h,t.LineConstraint=p,t.LineLikeConstraint=f,t.PointConstraint=u,t.SnappingConstraint=l,t.VerticalCylinderConstraint=L,t.VerticalHalfPlaneConstraint=y,t.VerticalLineIntersectionConstraint=d,t.VerticalPlaneConstraint=k,t.VerticalPlaneLikeConstraint=P,Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})}));