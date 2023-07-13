/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/vec3","../../../../chunks/vec3f64","../../../../chunks/boundedPlane","./IntersectorInterfaces"],(function(e,t,n,r,c){"use strict";function s(e){return null!=e&&null!=e.dist}function u(e){return(n,c,s)=>(t.lerp(l,n,c,s),!r.extrusionContainsPoint(e,l))}function i(e){return s(e)&&e.intersector===c.IntersectorType.OBJECT&&!!e.target}function o(e){return s(e)&&e.intersector===c.IntersectorType.HUD&&!!e.target&&"center"in e.target&&null!=e.target.center}const l=n.create();e.isHudIntersectorResult=o,e.isObjectIntersectorResult=i,e.isValidIntersectorResult=s,e.sliceFilterPredicate=u,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
