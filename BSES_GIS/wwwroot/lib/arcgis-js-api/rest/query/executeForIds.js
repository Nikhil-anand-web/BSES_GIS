/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../utils","./operations/query","../support/Query"],(function(e,t,r,o){"use strict";async function u(e,u,n){const s=t.parseUrl(e);return r.executeQueryForIds(s,o.from(u),{...n}).then((e=>e.data.objectIds))}e.executeForIds=u,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
