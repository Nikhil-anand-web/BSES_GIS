/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","./GPOptions","./utils","../support/GPMessage"],(function(e,t,s,r){"use strict";async function u(e,u,n,o){return n=t.from(n||{}),s.constructRequest(e,"execute",n,u??{},o).then((e=>{const t=e.data.results||[],u=e.data.messages||[];return{results:t.map(s.decode),messages:u.map((e=>r.fromJSON(e)))}}))}e.execute=u,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
