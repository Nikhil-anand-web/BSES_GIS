/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../utils","./operations/query","../support/Query"],(function(e,t,o,r){"use strict";async function u(e,u,n){const c=t.parseUrl(e);return o.executeQueryForCount(c,r.from(u),{...n}).then((e=>e.data.count))}e.executeForCount=u,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
