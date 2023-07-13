/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../Ground","../core/Logger","../core/accessorSupport/ensureType"],(function(e,r,o,t){"use strict";const i={"world-elevation":{id:"worldElevation",url:"//elevation3d.arcgis.com/arcgis/rest/services/WorldElevation3D/Terrain3D/ImageServer",layerType:"ArcGISTiledElevationServiceLayer"},"world-topobathymetry":{id:"worldTopoBathymetry",url:"//elevation3d.arcgis.com/arcgis/rest/services/WorldElevation3D/TopoBathy3D/ImageServer",layerType:"ArcGISTiledElevationServiceLayer"}};function n(e){let n=null;if("string"==typeof e)if(e in i){const o=i[e];n=new r({resourceInfo:{data:{layers:[o]}}})}else o.getLogger("esri.support.groundUtils").warn(`Unable to find ground definition for: ${e}. Try "world-elevation"`);else n=t.ensureType(r,e);return n}e.ensureType=n,e.groundElevationLayers=i,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));