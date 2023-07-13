/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../../core/compilerUtils","../../../../core/mathUtils","../../../../chunks/mat4","../../../../chunks/mat4f64","../../../../chunks/vec3","../../../../chunks/vec3f64","../../../../geometry/ellipsoidUtils","../../../../chunks/sphere","./common","./ConstraintTypes","./InteractionType","./TiltMode","../../state/utils/viewUtils"],(function(e,t,n,r,i,a,s,c,o,l,u,d,p,f){"use strict";function m(e,n,i=l.defaultConstraintOptions,s=!0){q.eyeCenterDistance=0,q.requiresTwoSteps=!1;const c=y(e,n,i,void 0,q);if(0===c)return!1;switch(r.fromRotation(P,-c,n.viewRight),i.tiltMode){case p.TiltMode.LOOK_AROUND:a.transformMat4(v,n.viewForward,P),a.scale(v,v,q.eyeCenterDistance),n.center=a.add(x,n.eye,v);break;case p.TiltMode.TUMBLE:a.subtract(v,n.center,n.eye),a.transformMat4(v,v,P),n.eye=a.subtract(x,n.center,v);break;default:t.neverReached(i.tiltMode)}return n.up=a.transformMat4(x,n.up,P),!q.requiresTwoSteps||!s||m(e,n,i,!1)}function y(e,t,n=l.defaultConstraintOptions,r=l.defaultConstraintOptions,i){if(!e.state.constraints.tilt)return 0;const a=t.distance,s=e.state.constraints.tilt(a,L);return w(e,n,s),r.interactionType===d.InteractionType.TUMBLE&&l.hasConstraintType(r.selection,u.ConstraintTypes.ALTITUDE)&&D(e,r.interactionStartCamera,s),n.tiltMode===p.TiltMode.LOOK_AROUND||r.tiltMode===p.TiltMode.LOOK_AROUND?M(e,t,s,i):C(e,t,s)}function C(e,t,r){const i=f.viewAngle(e.renderCoordsHelper,t.center,t.eye),a=i-n.clamp(i,r.min,r.max);return O(a)?a:0}function M(e,t,n,r){switch(r&&(r.requiresTwoSteps=!1),e.viewingMode){case"global":return T(e,t,n,r);case"local":return h(e,t,n,r)}}function h(e,t,r,i){const a=f.viewAngle(e.renderCoordsHelper,t.center,t.eye),s=n.clamp(a,r.min,r.max),c=a-s;if(!O(c))return 0;if(i){const n=e.pointsOfInterest.centerOnSurfaceFrequent.estimatedSurfaceAltitude,r=e.renderCoordsHelper.getAltitude(t.eye)-n,a=Math.cos(s);Math.abs(a)>1e-4?i.eyeCenterDistance=r/a:i.eyeCenterDistance=t.distance}return c}function T(e,t,r,i){const a=I(e,t,b),s=n.clamp(a.tiltAtCenter,r.min,r.max);if(!O(a.tiltAtCenter-s))return 0;let c,o;return a.centerIsOnSurface?(c=A(a),o=g(a,c)):(c=a.constraints.clampTilt(a.eyeCenterDistance,a.tiltAtCenter),i&&c<Math.PI/2&&(i.requiresTwoSteps=!0,c=Math.PI/2-1e-5),o=S(a,c)),i&&(i.eyeCenterDistance=R(a,c)),o}function I(e,t,r){const i=e.pointsOfInterest.centerOnSurfaceFrequent.estimatedSurfaceAltitude,s=i+c.getReferenceEllipsoid(e.spatialReference).radius,l=e.renderCoordsHelper.intersectManifold(t.ray,i,x);return r.eyeCenterDistance=t.distance,r.centerIsOnSurface=!1,null!=l?(r.eyeCenterDistance=a.distance(t.eye,l),r.tiltAtCenter=f.viewAngle(e.renderCoordsHelper,l,t.eye),r.centerIsOnSurface=!0):e.state.isLocal?r.tiltAtCenter=f.viewAngle(e.renderCoordsHelper,t.center,t.eye):(o.closestPointOnSilhouette(o.fromRadius(o.tmpSphere,s),t.ray,x),r.eyeCenterDistance=a.distance(t.eye,x),r.tiltAtCenter=n.acosClamped(-a.dot(t.viewForward,a.normalize(x,x)))),r.radius=s,r.eyeRadius=a.length(t.eye),r.constraints=e.state.constraints,r}function O(e){return Math.abs(e)>1e-9}function A(e){const{constraints:t,eyeCenterDistance:n,tiltAtCenter:r}=e;let i=r,a=t.clampTilt(n,r);const s=R(e,a);if(t.clampTilt(s,r)===a)return a;let c=0;for(;c<10&&O(a-i);){const n=(i+a)/2,r=R(e,n);O(t.clampTilt(r,n)-n)?i=n:a=n,c++}return a}function R(e,t){if(!e.centerIsOnSurface)return e.eyeCenterDistance;const r=Math.PI-n.clamp(t,0,Math.PI),i=n.asinClamped(e.radius/e.eyeRadius*Math.sin(r)),a=Math.PI-r-i,s=Math.sin(a)/Math.sin(r);if(e.eyeRadius<e.radius&&s>1){const t=Math.PI-i,n=Math.PI-r-t;return Math.sin(n)/Math.sin(r)*e.eyeRadius}return s*e.eyeRadius}function g(e,t){const r=n.asinClamped(e.radius/e.eyeRadius*Math.sin(e.tiltAtCenter)),i=n.asinClamped(e.radius/e.eyeRadius*Math.sin(t));return e.eyeRadius>e.radius?r-i:i-r}function S(e,t){return e.tiltAtCenter-Math.PI/2-(t-Math.PI/2)}function w(e,t,n){if(t.interactionType===d.InteractionType.NONE)return;const{interactionStartCamera:r,interactionFactor:i}=t;if(!r)return;const{min:a,max:s}=n,c=y(e,r,l.defaultConstraintOptions,t),o=0===c?0:f.viewAngle(e.renderCoordsHelper,r.center,r.eye);n.min=a,n.max=s,t.interactionType===d.InteractionType.TUMBLE?(l.hasConstraintType(t.selection,u.ConstraintTypes.ALTITUDE)&&D(e,r,n),l.adjustRangeForInteraction(c,o,!0,i,U,n)):l.adjustRangeForInteraction(c,o,!1,i,U,n)}function D(e,t,r){const i=e.state.constraints;if(e.state.isLocal||!i.altitude||!t)return;const s=a.squaredLength(t.center),o=Math.sqrt(s),l=t.distance,u=c.getReferenceEllipsoid(e.spatialReference).radius,d=i.altitude.min+u,p=i.altitude.max+u,f=(d*d-l*l-s)/(-2*o*l),m=(p*p-l*l-s)/(-2*o*l);r.min=Math.max(r.min,Math.min(Math.PI-n.acosClamped(m),r.max)),r.max=Math.min(r.max,Math.PI-n.acosClamped(f))}const v=s.create(),P=i.create(),x=s.create(),U=n.deg2rad(5),L={min:0,max:0},b={constraints:null,radius:0,eyeRadius:0,centerIsOnSurface:!0,eyeCenterDistance:0,tiltAtCenter:0},q={eyeCenterDistance:0,requiresTwoSteps:!1};e.applyTiltConstraint=m,e.getTiltConstraintError=y,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));