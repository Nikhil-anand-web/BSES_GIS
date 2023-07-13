/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports"],(function(t){"use strict";
/*!
   * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
   * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
   * v1.4.2
   */const e=(t,e,a)=>Math.max(e,Math.min(t,a)),a=new RegExp(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/),n=t=>{const e=(""+t).match(a);return e?Math.max(0,(e[1]?e[1].length:0)-(e[2]?+e[2]:0)):0};t.clamp=e,t.decimalPlaces=n}));
