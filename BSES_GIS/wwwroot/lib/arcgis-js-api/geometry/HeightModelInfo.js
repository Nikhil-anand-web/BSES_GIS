/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../chunks/_rollupPluginBabelHelpers","../chunks/tslib.es6","../core/arrayUtils","../core/jsonMap","../core/JSONSupport","../core/unitUtils","../core/Warning","../core/accessorSupport/decorators/property","../core/accessorSupport/ensureType","../core/has","../core/accessorSupport/decorators/reader","../core/accessorSupport/decorators/subclass","../core/accessorSupport/decorators/writer"],(function(e,t,r,o,i,n,s,a,c,l,h,d,u){"use strict";var p;const g=o.strict()({orthometric:"gravity-related-height",gravity_related_height:"gravity-related-height",ellipsoidal:"ellipsoidal"}),y=g.jsonValues.slice();r.removeUnordered(y,"orthometric");const f=o.strict()({meter:"meters",foot:"feet","us-foot":"us-feet","clarke-foot":"clarke-feet","clarke-yard":"clarke-yards","clarke-link":"clarke-links","sears-yard":"sears-yards","sears-foot":"sears-feet","sears-chain":"sears-chains","benoit-1895-b-chain":"benoit-1895-b-chains","indian-yard":"indian-yards","indian-1937-yard":"indian-1937-yards","gold-coast-foot":"gold-coast-feet","sears-1922-truncated-chain":"sears-1922-truncated-chains","50-kilometers":"50-kilometers","150-kilometers":"150-kilometers"});let S=p=function(t){function r(e){var r;return(r=t.call(this,e)||this).heightModel="gravity-related-height",r.heightUnit="meters",r.vertCRS=null,r}e._inherits(r,t);var o=r.prototype;return o.writeHeightModel=function(e,t,r){return g.write(e,t,r)},o.readHeightModel=function(e,t,r){const o=g.read(e);return o||(r&&r.messages&&r.messages.push(_(e,{context:r})),null)},o.readHeightUnit=function(e,t,r){const o=f.read(e);return o||(r&&r.messages&&r.messages.push(v(e,{context:r})),null)},o.readHeightUnitService=function(e,t,r){const o=n.unitFromRESTJSON(e)||f.read(e);return o||(r&&r.messages&&r.messages.push(v(e,{context:r})),null)},o.readVertCRS=function(e,t){return t.vertCRS||t.ellipsoid||t.geoid},o.clone=function(){return new p({heightModel:this.heightModel,heightUnit:this.heightUnit,vertCRS:this.vertCRS})},o.equals=function(e){return!!e&&(this===e||this.heightModel===e.heightModel&&this.heightUnit===e.heightUnit&&this.vertCRS===e.vertCRS)},r.deriveUnitFromSR=function(e,t){const r=n.getVerticalUnitStringForSR(t);return new p({heightModel:e.heightModel,heightUnit:r,vertCRS:e.vertCRS})},o.write=function(t,o){return o={origin:"web-scene",...o},e._get(e._getPrototypeOf(r.prototype),"write",this).call(this,t,o)},r.fromJSON=function(e){if(!e)return null;const t=new p;return t.read(e,{origin:"web-scene"}),t},e._createClass(r)}(i.JSONSupport);function v(e,t){return new s("height-unit:unsupported",`Height unit of value '${e}' is not supported`,t)}function _(e,t){return new s("height-model:unsupported",`Height model of value '${e}' is not supported`,t)}t.__decorate([a.property({type:g.apiValues,constructOnly:!0,json:{origins:{"web-scene":{type:y,default:"ellipsoidal"}}}})],S.prototype,"heightModel",void 0),t.__decorate([u.writer("web-scene","heightModel")],S.prototype,"writeHeightModel",null),t.__decorate([h.reader(["web-scene","service"],"heightModel")],S.prototype,"readHeightModel",null),t.__decorate([a.property({type:f.apiValues,constructOnly:!0,json:{origins:{"web-scene":{type:f.jsonValues,write:f.write}}}})],S.prototype,"heightUnit",void 0),t.__decorate([h.reader("web-scene","heightUnit")],S.prototype,"readHeightUnit",null),t.__decorate([h.reader("service","heightUnit")],S.prototype,"readHeightUnitService",null),t.__decorate([a.property({type:String,constructOnly:!0,json:{origins:{"web-scene":{write:!0}}}})],S.prototype,"vertCRS",void 0),t.__decorate([h.reader("service","vertCRS",["vertCRS","ellipsoid","geoid"])],S.prototype,"readVertCRS",null),S=p=t.__decorate([d.subclass("esri.geometry.HeightModelInfo")],S);return S}));
