/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../core/accessorSupport/decorators/property","../../../core/accessorSupport/ensureType","../../../core/arrayUtils","../../../core/has","../../../core/accessorSupport/decorators/subclass","./ColumnTemplateBase","./EditableColumnTemplateMixin"],(function(e,r,t,s,o,a,c,l,n){"use strict";let p=function(r){function t(e){var t;return(t=r.call(this,e)||this).type="column",t}return e._inherits(t,r),e._createClass(t)}(n.EditableColumnTemplateMixin(l));r.__decorate([t.property({type:String,json:{read:!1,write:!0}})],p.prototype,"type",void 0),p=r.__decorate([c.subclass("esri.widgets.FeatureTable.support.ColumnTemplate")],p);return p}));
