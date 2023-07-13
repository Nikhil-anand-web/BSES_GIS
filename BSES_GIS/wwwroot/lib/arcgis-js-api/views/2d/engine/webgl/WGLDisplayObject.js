/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../../../../chunks/_rollupPluginBabelHelpers","./WGLDisplayRecord","./util/serializationUtils"],(function(i,s,t){"use strict";return function(){function e(i){this.insertAfter=null,this.id=i,this.displayRecords=[]}var r=e.prototype;return r.copy=function(){const i=new e(this.id);return i.set(this),i},r.clone=function(){const i=new e(this.id);return i.displayRecords=this.displayRecords.map((i=>i.clone())),i.insertAfter=this.insertAfter,i},r.set=function(i){this.id=i.id,this.displayRecords=i.displayRecords,this.insertAfter=i.insertAfter},r.serialize=function(i){return i.push(this.id),t.serializeList(i,this.displayRecords),i},e.deserialize=function(i){const r=i.readInt32(),n=new e(r),d={id:r};return n.displayRecords=t.deserializeList(i,s,d)??[],n},i._createClass(e)}()}));
