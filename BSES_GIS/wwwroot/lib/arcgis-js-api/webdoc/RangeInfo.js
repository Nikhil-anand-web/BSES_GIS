/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../chunks/_rollupPluginBabelHelpers","../chunks/tslib.es6","../core/JSONSupport","../core/lang","../core/accessorSupport/decorators/property","../core/accessorSupport/ensureType","../core/accessorSupport/decorators/subclass"],(function(e,t,r,n,o,a,c){"use strict";var u;let s=u=function(t){function r(e){var r;return(r=t.call(this,e)||this).activeRange=null,r.currentRangeExtent=null,r.fullRangeExtent=null,r}return e._inherits(r,t),r.prototype.clone=function(){return new u(n.clone({activeRange:this.activeRange,currentRangeExtent:this.currentRangeExtent,fullRangeExtent:this.fullRangeExtent}))},e._createClass(r)}(r.JSONSupport);t.__decorate([o.property({type:String,nonNullable:!0,json:{read:{source:"activeRangeName"},write:{target:"activeRangeName",isRequired:!0}}})],s.prototype,"activeRange",void 0),t.__decorate([o.property({type:[Number],json:{write:!0}})],s.prototype,"currentRangeExtent",void 0),t.__decorate([o.property({type:[Number],json:{write:!0}})],s.prototype,"fullRangeExtent",void 0),s=u=t.__decorate([c.subclass("esri.webdoc.RangeInfo")],s);return s}));
