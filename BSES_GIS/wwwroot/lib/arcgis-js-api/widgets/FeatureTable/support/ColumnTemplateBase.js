/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../core/JSONSupport","../../../core/accessorSupport/decorators/property","../../../core/accessorSupport/ensureType","../../../core/arrayUtils","../../../core/has","../../../core/accessorSupport/decorators/subclass"],(function(e,r,t,o,p,i,l,c){"use strict";let n=function(r){function t(e){var t;return(t=r.call(this,e)||this).description=null,t.direction=null,t.formatFunction=null,t.initialSortPriority=null,t.label=null,t.menuConfig=null,t.sortable=!0,t.textAlign="start",t.type=null,t.visible=!0,t}return e._inherits(t,r),e._createClass(t)}(t.JSONSupport);r.__decorate([o.property()],n.prototype,"description",void 0),r.__decorate([o.property()],n.prototype,"direction",void 0),r.__decorate([o.property()],n.prototype,"formatFunction",void 0),r.__decorate([o.property()],n.prototype,"initialSortPriority",void 0),r.__decorate([o.property()],n.prototype,"label",void 0),r.__decorate([o.property()],n.prototype,"menuConfig",void 0),r.__decorate([o.property()],n.prototype,"sortable",void 0),r.__decorate([o.property()],n.prototype,"textAlign",void 0),r.__decorate([o.property({type:String,json:{read:!1,write:!0}})],n.prototype,"type",void 0),r.__decorate([o.property()],n.prototype,"visible",void 0),n=r.__decorate([c.subclass("esri.widgets.FeatureTable.support.ColumnTemplateBase")],n);return n}));