/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["./chunks/_rollupPluginBabelHelpers","./chunks/tslib.es6","./Camera","./geometry","./core/JSONSupport","./core/accessorSupport/decorators/property","./core/accessorSupport/decorators/cast","./core/arrayUtils","./core/has","./core/accessorSupport/decorators/subclass","./geometry/support/jsonUtils"],(function(e,r,t,o,a,s,i,c,n,p,l){"use strict";var u;let y=u=function(r){function t(e){var t;return(t=r.call(this,e)||this).rotation=0,t.scale=0,t.targetGeometry=null,t.camera=null,t}e._inherits(t,r);var o=t.prototype;return o.castRotation=function(e){return(e%=360)<0&&(e+=360),e},o.clone=function(){return new u({rotation:this.rotation,scale:this.scale,targetGeometry:null!=this.targetGeometry?this.targetGeometry.clone():null,camera:null!=this.camera?this.camera.clone():null})},e._createClass(t)}(a.JSONSupport);function d(){return{enabled:!this.camera}}r.__decorate([s.property({type:Number,json:{write:!0,origins:{"web-map":{default:0,write:!0},"web-scene":{write:{overridePolicy:d}}}}})],y.prototype,"rotation",void 0),r.__decorate([i.cast("rotation")],y.prototype,"castRotation",null),r.__decorate([s.property({type:Number,json:{write:!0,origins:{"web-map":{default:0,write:!0},"web-scene":{write:{overridePolicy:d}}}}})],y.prototype,"scale",void 0),r.__decorate([s.property({types:o.geometryTypes,json:{read:l.fromJSON,write:!0,origins:{"web-scene":{read:l.fromJSON,write:{overridePolicy:d}}}}})],y.prototype,"targetGeometry",void 0),r.__decorate([s.property({type:t,json:{write:!0}})],y.prototype,"camera",void 0),y=u=r.__decorate([p.subclass("esri.Viewpoint")],y);return y}));
