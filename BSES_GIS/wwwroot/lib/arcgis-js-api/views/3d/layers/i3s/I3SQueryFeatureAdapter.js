/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../geometry/support/aaBoundingBox","../../../../layers/graphics/centroid","../../../../layers/graphics/OptimizedGeometry","./I3SUtil"],(function(t,e,r,n,i,o){"use strict";let u=function(){function t(t){this._objectIdField=t.objectIdField,this._getFeatureExtent=t.getFeatureExtent}var r=t.prototype;return r.getObjectId=function(t){return t.id},r.getAttributes=function(t){const{meta:e,index:r}=t,n={};this._objectIdField&&(n[this._objectIdField]=t.id);const i=e.attributeInfo?.attributeData;if(null!=i)for(const u of Object.keys(i))n[u]=o.getCachedAttributeValue(i[u],r);return n},r.getAttribute=function(t,e){if(e===this._objectIdField)return t.id;const{meta:r,index:n}=t,i=r.attributeInfo?.attributeData;return null!=i?o.getCachedAttributeValue(i[e],n):null},r.getGeometry=function(t){if(t.geometry)return t.geometry;const[e,r,n,o,u]=this._getFeatureExtent(t,a);return new i([5],[e,r,n,o,r,n,o,u,n,e,u,n,e,r,n])},r.getCentroid=function(t,e){if(t.geometry)return n.getCentroidOptimizedGeometry(new i,t.geometry,e.hasZ,e.hasM);const[r,o,u,c,d,s]=this._getFeatureExtent(t,a);return new i([0],[(r+c)/2,(o+d)/2,(u+s)/2])},r.cloneWithGeometry=function(t,e){const{id:r,index:n,meta:i}=t;return{id:r,index:n,meta:i,geometry:e}},e._createClass(t)}();const a=r.create();t.I3SQueryFeatureAdapter=u,Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})}));
