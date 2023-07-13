/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../../../core/Logger"],(function(e){"use strict";function r(r,t,a){if(null==r)return null;const n=t.readArcadeFeature();try{return r.evaluate({...a,$feature:n},r.services)}catch(u){return e.getLogger("esri.views.2d.support.arcadeOnDemand").warn("Feature arcade evaluation failed:",u),null}}return r}));
