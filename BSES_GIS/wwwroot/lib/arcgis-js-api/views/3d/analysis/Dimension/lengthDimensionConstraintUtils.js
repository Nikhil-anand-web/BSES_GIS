/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../../geometry","../../../../analysis/dimensionUtils","../../../../core/has","../../../../chunks/vec3","../../../../geometry/support/vectorStacks","./lengthDimensionManipulatorUtils","./lengthDimensionUtils","./settings","../../../../geometry/Point"],(function(n,e,t,i,o,r,a,s,l,d){"use strict";var c;function u(n,e){return{enabled:e.effectiveFeatureEnabled,elevationAlignedStartPoint:n.elevationAlignedStartPoint,elevationAlignedEndPoint:n.elevationAlignedEndPoint,geometry:n.geometry}}function g(e,t){if(s.isGeodesicDimension(e))return n.LengthDimensionConstraint.Direct;if(!e.enabled)return null;const{geometry:i}=e;if(null==i||o.exactEquals(i.directSegment.startRenderSpace,i.directSegment.endRenderSpace))return null;const{constraintThresholdPx:a}=l.settings,{camera:d}=t.state,c=s.directUp(r.sv3d.get(),i,t.renderCoordsHelper),u=s.directStartToEnd(r.sv3d.get(),i),g=o.scale(r.sv3d.get(),c,o.dot(u,c)),m=o.subtract(r.sv3d.get(),u,g),P=o.squaredLength(m),p=o.squaredLength(g),{startRenderSpace:v,endRenderSpace:y}=i.directSegment,f=Math.max(d.computeRenderPixelSizeAt(v)*a,d.computeRenderPixelSizeAt(y)*a)**2;return P<f?n.LengthDimensionConstraint.Vertical:p<f?n.LengthDimensionConstraint.Horizontal:null}function m(n,e,{constraint:t,view:i}){const{unconstrainedGeometry:o}=n;if(null==o)return;const{renderCoordsHelper:r,spatialReference:a}=i,{startRenderSpace:s,endRenderSpace:l}=o.directSegment,c=r.fromRenderCoords(s,new d,a),u=r.fromRenderCoords(l,new d,a);let g;g="start"===e?{startPoint:c}:{endPoint:u},P(n,g,{constraint:t,elevationAlignedStartPoint:n.elevationAlignedStartPoint,elevationAlignedEndPoint:n.elevationAlignedEndPoint,unconstrainedGeometry:o,view:i})}function P(e,i,o){const{constraint:r,elevationAlignedStartPoint:s,elevationAlignedEndPoint:l,unconstrainedGeometry:d,view:c}=o,{dimension:u,previousConstraint:g,preConstraintProperties:m}=e;if(null==s||null==l)return;const P=()=>{"startPoint"in i?u.startPoint=i.startPoint:"endPoint"in i&&(u.endPoint=i.endPoint)};if(null==r)P(),null!=g&&null!=m&&(u.measureType=m.measureType,u.orientation=m.orientation);else switch(u.measureType=t.LengthDimensionMeasureType.Direct,r){case n.LengthDimensionConstraint.Horizontal:if(r!==g&&(u.orientation=0),"startPoint"in i){const n=i.startPoint;null!=n&&(n.z=l.z),u.startPoint=n}else if("endPoint"in i){const n=i.endPoint;null!=n&&(n.z=s.z),u.endPoint=n}break;case n.LengthDimensionConstraint.Vertical:if(r!==g&&(u.orientation=a.automaticHeadingFromCamera(d,c)),"startPoint"in i){const n=i.startPoint;null!=n&&(n.x=l.x,n.y=l.y),u.startPoint=n}else if("endPoint"in i){const n=i.endPoint;null!=n&&(n.x=s.x,n.y=s.y),u.endPoint=n}break;case n.LengthDimensionConstraint.Direct:r!==g&&null!=m&&(u.orientation=m.orientation),P()}e.previousConstraint=r,e.unconstrainedGeometry=d}n.LengthDimensionConstraint=void 0,(c=n.LengthDimensionConstraint||(n.LengthDimensionConstraint={}))[c.Horizontal=0]="Horizontal",c[c.Vertical=1]="Vertical",c[c.Direct=2]="Direct",n.applyConstraint=P,n.computeConstraint=g,n.constraintDependencies=u,n.reapplyConstraint=m,Object.defineProperty(n,Symbol.toStringTag,{value:"Module"})}));
