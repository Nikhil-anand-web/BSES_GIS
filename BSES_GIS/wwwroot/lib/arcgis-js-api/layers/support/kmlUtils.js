/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../config","../../kernel","../../PopupTemplate","../../request","../../core/lang","../../core/urlUtils","../../geometry/SpatialReference","../../geometry/support/aaBoundingBox","../../geometry/support/boundsUtils","../../renderers/support/jsonUtils","../../rest/support/FeatureSet"],(function(e,t,o,r,n,s,i,a,l,u,f,c){"use strict";const p={esriGeometryPoint:"points",esriGeometryPolyline:"polylines",esriGeometryPolygon:"polygons"};function y(e){const t=e.folders||[],o=t.slice(),r=new Map,n=new Map,i=new Map,a=new Map,l=new Map,u={esriGeometryPoint:n,esriGeometryPolyline:i,esriGeometryPolygon:a};(e.featureCollection&&e.featureCollection.layers||[]).forEach((e=>{const t=s.clone(e);t.featureSet.features=[];const o=e.featureSet.geometryType;r.set(o,t);const l=e.layerDefinition.objectIdField;"esriGeometryPoint"===o?g(n,l,e.featureSet.features):"esriGeometryPolyline"===o?g(i,l,e.featureSet.features):"esriGeometryPolygon"===o&&g(a,l,e.featureSet.features)})),e.groundOverlays&&e.groundOverlays.forEach((e=>{l.set(e.id,e)})),t.forEach((t=>{t.networkLinkIds.forEach((r=>{const n=I(r,t.id,e.networkLinks);n&&o.push(n)}))})),o.forEach((e=>{if(e.featureInfos){e.points=s.clone(r.get("esriGeometryPoint")),e.polylines=s.clone(r.get("esriGeometryPolyline")),e.polygons=s.clone(r.get("esriGeometryPolygon")),e.mapImages=[];for(const t of e.featureInfos)switch(t.type){case"esriGeometryPoint":case"esriGeometryPolyline":case"esriGeometryPolygon":{const o=u[t.type].get(t.id);o&&e[p[t.type]]?.featureSet.features.push(o);break}case"GroundOverlay":{const o=l.get(t.id);o&&e.mapImages.push(o);break}}e.fullExtent=G([e])}}));const f=G(o);return{folders:t,sublayers:o,extent:f}}function d(e,r,s,a){const l=o.id&&o.id.findCredential(e);e=i.addQueryParameters(e,{token:l&&l.token});const u=t.kmlServiceUrl;return n(u,{query:{url:e,model:"simple",folders:"",refresh:0!==s||void 0,outSR:JSON.stringify(r)},responseType:"json",signal:a})}function m(e,t,o=null,r=[]){const n=[],s={},i=t.sublayers,a=t.folders.map((e=>e.id));return i.forEach((t=>{const i=new e;if(o?i.read(t,o):i.read(t),r.length&&a.includes(i.id)&&(i.visible=r.includes(i.id)),s[t.id]=i,null!=t.parentFolderId&&-1!==t.parentFolderId){const e=s[t.parentFolderId];e.sublayers||(e.sublayers=[]),e.sublayers?.unshift(i)}else n.unshift(i)})),n}function g(e,t,o){o.forEach((o=>{e.set(o.attributes[t],o)}))}function S(e,t){let o;return t.some((t=>t.id===e&&(o=t,!0))),o}function I(e,t,o){const r=S(e,o);return r&&(r.parentFolderId=t,r.networkLink=r),r}async function h(e){const t=c.fromJSON(e.featureSet).features,o=e.layerDefinition,n=f.fromJSON(o.drawingInfo.renderer),s=r.fromJSON(e.popupInfo),i=[];for(const r of t){const e=await n.getSymbolAsync(r);r.symbol=e,r.popupTemplate=s,r.visible=!0,i.push(r)}return i}function G(e){const t=l.create(l.NEGATIVE_INFINITY),o=l.create(l.NEGATIVE_INFINITY);for(const r of e){if(r.polygons&&r.polygons.featureSet&&r.polygons.featureSet.features)for(const e of r.polygons.featureSet.features)u.getBoundsXYZ(t,e.geometry),l.expandWithAABB(o,t);if(r.polylines&&r.polylines.featureSet&&r.polylines.featureSet.features)for(const e of r.polylines.featureSet.features)u.getBoundsXYZ(t,e.geometry),l.expandWithAABB(o,t);if(r.points&&r.points.featureSet&&r.points.featureSet.features)for(const e of r.points.featureSet.features)u.getBoundsXYZ(t,e.geometry),l.expandWithAABB(o,t);if(r.mapImages)for(const e of r.mapImages)u.getBoundsXYZ(t,e.extent),l.expandWithAABB(o,t)}return l.equals(o,l.NEGATIVE_INFINITY)?void 0:{xmin:o[0],ymin:o[1],zmin:o[2],xmax:o[3],ymax:o[4],zmax:o[5],spatialReference:a.WGS84}}e.computeExtent=G,e.fetchService=d,e.getGraphics=h,e.parseKML=y,e.sublayersFromJSON=m,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));