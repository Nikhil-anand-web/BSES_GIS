/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../config","../../core/Error","../Portal","../../rest/geometryService/project","../../rest/support/ProjectParameters"],(function(e,r,t,o,n,i){"use strict";async function c(e=null,n){if(r.geometryServiceUrl)return r.geometryServiceUrl;if(!e)throw new t("internal:geometry-service-url-not-configured");let i;i="portal"in e?e.portal||o.getDefault():e,await i.load({signal:n});const c=i.helperServices?.geometry?.url;if(!c)throw new t("internal:geometry-service-url-not-configured");return c}async function a(e,r,o=null,a){const l=await c(o,a),s=new i;s.geometries=[e],s.outSpatialReference=r;const u=await n.project(l,s,{signal:a});if(u&&Array.isArray(u)&&1===u.length)return u[0];throw new t("internal:geometry-service-projection-failed")}e.getGeometryServiceURL=c,e.projectGeometry=a,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));