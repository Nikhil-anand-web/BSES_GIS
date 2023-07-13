/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["require","exports","../../../../../core/Error","../../../../../core/Logger"],(function(e,r,t,a){"use strict";const n=a.getLogger("esri.views.2d.layers.features.support.whereUtils"),s={getAttribute:(e,r)=>e.field(r)};async function i(r,a){const i=await new Promise(((r,t)=>e(["../../../../../core/sql/WhereClause"],r,t)));try{const e=i.WhereClause.create(r,a);if(!e.isStandardized){const r=new t("mapview - bad input","Unable to apply filter's definition expression, as expression is not standardized.",e);n.error(r)}return r=>{const t=r.readArcadeFeature();return e.testFeature(t,s)}}catch(o){return n.warn("mapview-bad-where-clause","Encountered an error when evaluating where clause",r),e=>!0}}r.createWhereClause=i,Object.defineProperty(r,Symbol.toStringTag,{value:"Module"})}));
