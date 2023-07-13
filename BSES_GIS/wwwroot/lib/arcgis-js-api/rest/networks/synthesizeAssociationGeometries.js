/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../request","../utils","./support/AssociationGeometriesResult"],(function(e,t,o,s){"use strict";async function n(e,s,n){const r=o.parseUrl(e),c={...s.toJSON(),f:"json"},a=o.encode({...r.query,...c});n?n.method="post":n={method:"post"};const u=o.asValidOptions(a,n),f=`${r.path}/synthesizeAssociationGeometries`;return t(f,u).then((e=>i(e,s.outSpatialReference)))}function i(e,t){const{data:o}=e;if(!o)return null;const n=s.fromJSON(o);if(t)for(const s of n.associations)s.geometry.spatialReference=t.clone();return n}e.synthesizeAssociationGeometries=n,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
