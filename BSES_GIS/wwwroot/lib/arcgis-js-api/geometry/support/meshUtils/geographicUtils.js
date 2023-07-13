/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../core/Logger"],(function(e,r){"use strict";function o(e,r){return e.isGeographic||e.isWebMercator&&(r?.geographic??!0)}function i(e,o,i){const g=!e.isGeoreferenced;null!=i?.geographic&&i.geographic!==g&&r.getLogger(o).warnOnce(`Specifying the 'geographic' parameter (${i.geographic}) for a Mesh vertex space of type "${e.type}" is not supported. This parameter will be ignored.`)}e.isGeographicMesh=o,e.validateGeographicFlag=i,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
