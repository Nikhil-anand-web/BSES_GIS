/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/JSONSupport","../../core/accessorSupport/decorators/property","../../core/accessorSupport/ensureType","../../core/arrayUtils","../../core/has","../../core/accessorSupport/decorators/subclass"],(function(r,e,o,t,s,u,i,c,l){"use strict";var n;r.SlideThumbnail=n=function(r){function o(){var e;return(e=r.apply(this,arguments)||this).url="",e}e._inherits(o,r);var t=o.prototype;return t.destroy=function(){this.url=""},t.clone=function(){return new n({url:this.url})},e._createClass(o)}(t.JSONSupport),o.__decorate([s.property({type:String,json:{write:{isRequired:!0}}})],r.SlideThumbnail.prototype,"url",void 0),r.SlideThumbnail=n=o.__decorate([l.subclass("esri.webdoc.support.SlideThumbnail")],r.SlideThumbnail),Object.defineProperty(r,Symbol.toStringTag,{value:"Module"})}));