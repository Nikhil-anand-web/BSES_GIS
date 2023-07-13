/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","./index"],(function(t,r){"use strict";
/*!
   * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
   * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
   * v1.4.2
   */const e={arrow:"calcite-floating-ui-arrow",arrowStroke:"calcite-floating-ui-arrow__stroke"},i={width:12,height:6,strokeWidth:1},o=({floatingLayout:t,key:o,ref:a})=>{const{width:h,height:n,strokeWidth:s}=i,d=h/2,w="vertical"===t,c=`M0,0 H${h} L${h-d},${n} Q${d},${n} ${d},${n} Z`;return r.h("svg",{"aria-hidden":"true",class:e.arrow,height:h,key:o,ref:a,viewBox:`0 0 ${h} ${h+(w?0:s)}`,width:h+(w?s:0)},s>0&&r.h("path",{class:e.arrowStroke,d:c,fill:"none","stroke-width":s+1}),r.h("path",{d:c,stroke:"none"}))};t.FloatingArrow=o}));
