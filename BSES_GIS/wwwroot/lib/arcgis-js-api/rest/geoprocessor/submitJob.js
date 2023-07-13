/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","./GPOptions","./utils","../support/JobInfo"],(function(t,o,e,n){"use strict";async function r(t,r,u,s){return u=o.from(u||{}),e.constructRequest(t,"submitJob",u,r??{},s).then((o=>{const e=n.fromJSON(o.data);return e.sourceUrl=t,e}))}t.submitJob=r,Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})}));
