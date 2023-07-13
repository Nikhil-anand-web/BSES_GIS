/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../chunks/_rollupPluginBabelHelpers","../chunks/tslib.es6","../Color","../core/jsonMap","../core/lang","../core/screenUtils","../core/accessorSupport/decorators/property","../core/accessorSupport/ensureType","../core/accessorSupport/decorators/enumeration","../core/accessorSupport/decorators/subclass","../core/accessorSupport/decorators/writer","./MarkerSymbol","./SimpleLineSymbol"],(function(e,t,r,o,s,i,l,n,p,c,a,u,y){"use strict";var h;const S=new o.JSONMap({esriSMSCircle:"circle",esriSMSSquare:"square",esriSMSCross:"cross",esriSMSX:"x",esriSMSDiamond:"diamond",esriSMSTriangle:"triangle",esriSMSPath:"path"});let d=h=function(t){function o(...e){var o;return(o=t.call(this,...e)||this).color=new r([255,255,255,.25]),o.type="simple-marker",o.size=12,o.style="circle",o.outline=new y,o}e._inherits(o,t);var l=o.prototype;return l.normalizeCtorArgs=function(e,t,r,o){if(e&&"string"!=typeof e)return e;const s={};return e&&(s.style=e),null!=t&&(s.size=i.toPt(t)),r&&(s.outline=r),o&&(s.color=o),s},l.writeColor=function(e,t){e&&"x"!==this.style&&"cross"!==this.style&&(t.color=e.toJSON()),null===e&&(t.color=null)},l.clone=function(){return new h({angle:this.angle,color:s.clone(this.color),outline:this.outline&&this.outline.clone(),path:this.path,size:this.size,style:this.style,xoffset:this.xoffset,yoffset:this.yoffset})},l.hash=function(){return`${e._get(e._getPrototypeOf(o.prototype),"hash",this).call(this)}.${this.color&&this.color.hash()}.${this.path}.${this.style}.${this.outline?.hash()}`},e._createClass(o,[{key:"path",set:function(e){this.style="path",this._set("path",e)}}]),o}(u);t.__decorate([l.property()],d.prototype,"color",void 0),t.__decorate([a.writer("color")],d.prototype,"writeColor",null),t.__decorate([p.enumeration({esriSMS:"simple-marker"},{readOnly:!0})],d.prototype,"type",void 0),t.__decorate([l.property()],d.prototype,"size",void 0),t.__decorate([l.property({type:S.apiValues,json:{read:S.read,write:S.write}})],d.prototype,"style",void 0),t.__decorate([l.property({type:String,json:{write:!0}})],d.prototype,"path",null),t.__decorate([l.property({types:{key:"type",base:null,defaultKeyValue:"simple-line",typeMap:{"simple-line":y}},json:{default:null,write:!0}})],d.prototype,"outline",void 0),d=h=t.__decorate([c.subclass("esri.symbols.SimpleMarkerSymbol")],d);return d}));