/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../chunks/vec2","../../../../chunks/vec3","../../../../chunks/vec3f64","../SnappingConstraint","../SnappingDomain","../SnappingPoint","../snappingUtils","./SnappingCandidate","../hints/LineSnappingHint","../hints/RightAngleSnappingHint"],(function(n,i,t,e,a,p,s,g,r,h,o,l){"use strict";let c=function(n){function h({targetPoint:i,point1:r,point2:h,isDraped:o}){var l;return(l=n.call(this,i,new p.VerticalCylinderConstraint(g.asSnappingPoint(e.lerp(a.create(),r,h,.5)),.5*t.distance(r,h)),o,s.SnappingDomain.SELF)||this)._p1=r,l._p2=h,l}return i._inherits(h,n),i._createClass(h,[{key:"hints",get:function(){return[new o.LineSnappingHint(r.LineSegmentHintType.REFERENCE,this.targetPoint,this._p1,this.isDraped,this.domain),new o.LineSnappingHint(r.LineSegmentHintType.REFERENCE,this.targetPoint,this._p2,this.isDraped,this.domain),new l.RightAngleSnappingHint(this._p1,this.targetPoint,this._p2,this.isDraped,this.domain)]}}]),h}(h.SnappingCandidate);n.RightAngleTriangleSnappingCandidate=c,Object.defineProperty(n,Symbol.toStringTag,{value:"Module"})}));