/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["require","exports","../../config","../../core/Logger"],(function(r,t,o,e){"use strict";async function a(t){const a="portalItem"in t?t:{portalItem:t},{fromItem:l}=await new Promise(((t,o)=>r(["../../portal/support/portalLayers"],t,o)));try{return await l(a)}catch(i){const r=a&&a.portalItem,t=r&&r.id||"unset",l=r&&r.portal&&r.portal.url||o.portalUrl;throw e.getLogger("esri.layers.support.fromPortalItem").error("#fromPortalItem()","Failed to create layer from portal item (portal: '"+l+"', id: '"+t+"')",i),i}}t.fromPortalItem=a,Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})}));
