/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/vec3","../../../../chunks/vec3f64"],(function(e,t,l){"use strict";function u({normalTexture:e,metallicRoughnessTexture:u,metallicFactor:c,roughnessFactor:n,emissiveTexture:o,emissiveFactor:s,occlusionTexture:r}){return null==e&&null==u&&null==o&&(null==s||t.exactEquals(s,l.ZEROS))&&null==r&&(null==n||1===n)&&(null==c||1===c||0===c)}const c=[1,1,.5],n=[0,.6,.2],o=[0,1,.2];e.defaultAdvancedMRRFactors=c,e.defaultEsriSymbologyMRRFactors=o,e.defaultSchematicMRRFactors=n,e.useSchematicPBR=u,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
