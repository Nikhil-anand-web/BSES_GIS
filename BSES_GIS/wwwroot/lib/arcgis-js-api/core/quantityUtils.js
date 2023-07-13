/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","./unitUtils"],(function(t,n){"use strict";function e(t,e){return{type:n.unitType(e),value:t,unit:e}}function u(t,e){return{type:n.unitType(e),value:t,unit:e}}function i(t,e){return{type:n.unitType(e),value:t,unit:e}}function r(t,e){return{type:n.unitType(e),value:t,unit:e}}function a(t,e,u="arithmetic"){return{type:n.unitType(e),value:t,unit:e,rotationType:u}}function l(t){return n.isBaseUnit(t.unit)}function o(t,u){return e(n.convertUnit(t.value,t.unit,u),u)}function c(t){return o(t,n.baseUnitForUnit(t.unit))}function s(t,e){return null==t?e:null==e||t.value>n.convertUnit(e.value,e.unit,t.unit)?t:e}function v(t,e){return null==t?e:null==e||t.value<n.convertUnit(e.value,e.unit,t.unit)?t:e}function f(t,n){return null==t?null:{...t,value:t.value*n}}const y=u(0,"meters"),p=i(0,"square-meters"),U=a(0,"radians");t.createAngle=a,t.createArea=i,t.createLength=u,t.createQuantity=e,t.createVolume=r,t.isBaseUnit=l,t.max=s,t.min=v,t.scale=f,t.toBaseUnit=c,t.toUnit=o,t.zeroMeters=y,t.zeroRadians=U,t.zeroSquareMeters=p,Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})}));
