/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../chunks/_rollupPluginBabelHelpers","../../../layers/graphics/dehydratedFeatureUtils"],(function(e,t,r){"use strict";let a=t._createClass((function(e,t=null,r=0){this.array=e,this.spatialReference=t,this.offset=r}));function i(e){return"array"in e}function n(e,t,a="ground"){if(r.isDehydratedPoint(t))return e.getElevation(t.x,t.y,t.z||0,t.spatialReference,a);if(i(t)){let r=t.offset;return e.getElevation(t.array[r++],t.array[r++],t.array[r]||0,t.spatialReference??e.spatialReference,a)}return e.getElevation(t[0],t[1],t[2]||0,e.spatialReference,a)}e.SamplePosition=a,e.getElevationAtPoint=n,e.isSamplePosition=i,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
