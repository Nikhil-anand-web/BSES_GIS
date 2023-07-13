/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../../core/screenUtils","../../../../chunks/vec3","../../../../chunks/vec3f64","../../../../geometry/projection","../../../../geometry/support/plane","../../../../geometry/support/ray","../../../../geometry/support/vector","../../../../geometry/support/vectorStacks","../../../../support/elevationInfoUtils","../../support/geometryUtils/ray","../../webgl-engine/lib/Intersector","../../webgl-engine/lib/IntersectorInterfaces","../../webgl-engine/lib/verticalOffsetUtils","../../../interactive/dragEventPipeline"],(function(e,n,r,t,o,c,l,a,s,i,u,p,d,f,y){"use strict";function S(e,n){return g(e,(()=>n))}function m(e){return g(e,(e=>e.plane))}function g(e,r){const o=t.create(),l=t.create();let a=!1;return t=>{const i=r(t);if("start"===t.action){const r=n.screenPointObjectToArray(t.screenStart,n.castScreenPointArray(s.sv2d.get())),l=u.fromScreen(e.state.camera,r,U);null!=l&&(a=c.intersectRay(i,l,o))}if(!a)return null;const p=n.screenPointObjectToArray(t.screenEnd,n.castScreenPointArray(s.sv2d.get())),d=u.fromScreen(e.state.camera,p,U);return null==d?null:c.intersectRay(i,d,l)?{...t,renderStart:o,renderEnd:l,plane:i,ray:d}:null}}function T(e,r,t=0,c=null,l=null){let a=null;return s=>{if("start"===s.action&&(a=e.sceneIntersectionHelper.intersectElevationFromScreen(n.createScreenPointArray(s.screenStart.x,s.screenStart.y),r,t,l),null!=a&&null!=c&&!o.projectPoint(a,a,c)))return null;if(null==a)return null;const i=e.sceneIntersectionHelper.intersectElevationFromScreen(n.createScreenPointArray(s.screenEnd.x,s.screenEnd.y),r,t,l);return null!=i&&(null==c||o.projectPoint(i,i,c))?{...s,mapStart:a,mapEnd:i}:null}}function E(e,n,r,t=null,o=null){return T(e,r,i.getZForElevationMode(n,e,r),t,o)}function v(e,n,r,t=null,o=null){return E(e,r,i.getGraphicEffectiveElevationInfo(n),t,o)}function R(e,n,r,t){const o=n.toMap(e.screenStart,{include:[r]});return null!=o?v(n,r,o,t):null}function P(e,n){const t=O,o=w,l=c.create();e.renderCoordsHelper.worldUpAtPosition(n,t);const a=r.cross(l,t,r.subtract(o,n,e.state.camera.eye));return r.cross(a,a,t),c.fromPositionAndNormal(n,a,l)}function b(e,n,r){let t=null;const o=new y.EventPipeline;return o.next(S(e,P(e,n))).next(I(e,n)).next(A(e,r)).next((e=>{e.mapEnd.x=e.mapStart.x,e.mapEnd.y=e.mapStart.y,t=e})),e=>(t=null,o.execute(e),t)}function I(e,n){const o=t.create(),c=r.length(n);e.renderCoordsHelper.worldUpAtPosition(n,o);const l=t.create(),s=t.create(),i=t=>{if(r.subtract(t,t,n),a.projectPoint(o,t,t),"global"===e.viewingMode){r.length(t)*Math.sign(r.dot(o,t))<.001-c&&r.subtract(t,r.scale(t,o,.001),n)}return r.add(t,t,n),t};return e=>(e.renderStart=i(r.copy(l,e.renderStart)),e.renderEnd=i(r.copy(s,e.renderEnd)),e)}function A(e,n){const r=e.renderCoordsHelper;return e=>{const t=r.fromRenderCoords(e.renderStart,n),o=r.fromRenderCoords(e.renderEnd,n);return null!=t&&null!=o?{...e,mapStart:t,mapEnd:o}:null}}var M;function x(e){let n=null;return r=>{switch(r.action){case"start":n=e.disableDisplay();break;case"end":case"cancel":null!=n&&(n.remove(),n=null)}return r}}function h(r,o=null){const c=p.newIntersector(r.state.viewingMode);c.options.selectionMode=!0,c.options.store=d.StoreResults.MIN,c.options.hud=!1;const l=n.createScreenPointArray(),a={requiresGroundFeedback:!0,enableDraped:!0,exclude:new Set},s=t.create(),i=o??r.spatialReference,u=t=>{r.map.ground&&r.map.ground.opacity<1?a.exclude.add(f.TERRAIN_ID):a.exclude.delete(f.TERRAIN_ID),r.sceneIntersectionHelper.intersectIntersectorScreen(n.screenPointObjectToArray(t,l),c,a);const o=c.results.min;let u;if(o.getIntersectionPoint(s))u=o.intersector===d.IntersectorType.TERRAIN?e.SurfaceType.GROUND:e.SurfaceType.OTHER;else{if(!c.results.ground.getIntersectionPoint(s))return null;u=e.SurfaceType.GROUND}return{location:r.renderCoordsHelper.fromRenderCoords(s,i),surfaceType:u}};let y;return e=>{if("start"===e.action){const n=u(e.screenStart);y=null!=n?n.location:null}if(null==y)return null;const n=u(e.screenEnd);return null!=n&&null!=n.location?{...e,mapStart:y,mapEnd:n.location,surfaceType:n.surfaceType}:null}}e.SurfaceType=void 0,(M=e.SurfaceType||(e.SurfaceType={}))[M.GROUND=0]="GROUND",M[M.OTHER=1]="OTHER";const O=t.create(),w=t.create(),U=l.create();e.convertToMapCoordinates=A,e.hideManipulatorWhileDragging=x,e.projectToWorldUp=I,e.screenToMap3D=h,e.screenToMapXYAtLocation=E,e.screenToMapXYForGraphic=R,e.screenToMapXYForGraphicAtLocation=v,e.screenToRenderPlane=S,e.screenToRenderPlaneFromEvent=m,e.screenToZConstrained=b,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));