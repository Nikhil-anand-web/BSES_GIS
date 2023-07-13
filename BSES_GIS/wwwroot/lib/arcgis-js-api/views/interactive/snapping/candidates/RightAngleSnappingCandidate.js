/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../SnappingDomain","../snappingUtils","./SnappingCandidate","../hints/LineSnappingHint","../hints/RightAngleSnappingHint"],(function(e,t,i,n,r,p,s){"use strict";let a=function(r){function a({targetPoint:e,constraint:t,previousVertex:n,otherVertex:p,otherVertexType:s,objectId:a,isDraped:h}){var o;return(o=r.call(this,e,t,h,i.SnappingDomain.SELF)||this).previousVertex=n,o.otherVertex=p,o.otherVertexType=s,o.objectId=a,o}return t._inherits(a,r),t._createClass(a,[{key:"hints",get:function(){const t=this.previousVertex,i=this.otherVertexType===e.OtherVertexType.CENTER?this.otherVertex:this.targetPoint,r=this.otherVertexType===e.OtherVertexType.CENTER?this.targetPoint:this.otherVertex;return[new p.LineSnappingHint(n.LineSegmentHintType.TARGET,i,r,this.isDraped,this.domain),new p.LineSnappingHint(n.LineSegmentHintType.REFERENCE,t,i,this.isDraped,this.domain),new s.RightAngleSnappingHint(this.previousVertex,i,r,this.isDraped,this.domain)]}}]),a}(r.SnappingCandidate);var h;e.OtherVertexType=void 0,(h=e.OtherVertexType||(e.OtherVertexType={}))[h.NEXT=0]="NEXT",h[h.CENTER=1]="CENTER",e.RightAngleSnappingCandidate=a,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));