/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../chunks/_rollupPluginBabelHelpers","../../../core/mathUtils","../../../core/unitUtils","../../../chunks/vec3","../../../chunks/vec3f64","../../../geometry/ellipsoidUtils","../../../geometry/Extent","../../ViewingMode","../environment/atmosphereUtils"],(function(e,t,n,i,r,a,s,o,l,c){"use strict";function m(e,t,n){return e===l.ViewingMode.Global?new h(n):new u(t,n)}let u=function(){function e(e,t){this._elevationProvider=e,this._referenceEllipsoid=s.getReferenceEllipsoid(t),this._unitInMeters=i.getMetersPerUnitForSR(t,this._referenceEllipsoid.metersPerDegree)}return e.prototype.compute=function(e,t,i,a,s){s||(s={near:0,far:0});let l=e[2]*this._unitInMeters;const c=l,m=l-a,u=this._elevationProvider?.visibleElevationBounds;u&&(l=m>=0?c-this._unitInMeters*u.min:this._unitInMeters*u.max-c);const h={x:(i=null!=i?i:new o({xmin:0,ymin:0,zmin:0,xmax:0,ymax:0,zmax:0})).xmax-i.xmin,y:i.ymax-i.ymin,z:4*Math.max(i.xmax-i.xmin,i.ymax-i.ymin)},f=Math.max(h.x,h.y,h.z);r.subtract(y,t,e),_[0]=y[0]>0?i.xmax:i.xmin,_[1]=y[1]>0?i.ymax:i.ymin,_[2]=y[2]>0?f/2:-f/2,r.subtract(_,_,e),r.normalize(y,y);const g=1.1*r.dot(_,y)*this._unitInMeters,E=Math.sqrt(l*(l+2*this._referenceEllipsoid.radius)),b=Math.max(i.xmax-i.xmin,i.ymax-i.ymin),v=b*p*this._unitInMeters,I=b*d*this._unitInMeters,P=n.clamp((l-I)/(v-I),0,1)**3,w=Math.min(n.lerp(E,g,P),E)*Math.max(Math.log(Math.abs(m)),1);return x(Math.min(w,Math.max(34064e4,f))/this._unitInMeters,M,this._unitInMeters,s)},t._createClass(e)}(),h=function(){function e(e){this._referenceEllipsoid=s.getReferenceEllipsoid(e)}return e.prototype.compute=function(e,t,i,a,s){s||(s={near:0,far:0});const o=r.length(e),l=o-this._referenceEllipsoid.radius,m=this._referenceEllipsoid.radius+Math.min(0,a),u=Math.abs(l-a),h=Math.max(u,Math.abs(l)),M=Math.sqrt(h*(h+2*m)),f=o+this._referenceEllipsoid.radius;return x(1.2*n.lerp(M,f,c.computeInnerAltitudeFade(h)),n.clamp(2e4-(Math.log(h)-7.983)/9.011*19e3,1e3,2e4),1,s)},t._createClass(e)}();function x(e,t,n,i){const r=f/n;return e/t>r?(i.far=e,i.near=i.far/t):(i.near=r,i.far=i.near*t),i}const M=2e4,f=2,p=.001,d=1e-4,_=a.create(),y=a.create();e.createNearFarHeuristic=m,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
