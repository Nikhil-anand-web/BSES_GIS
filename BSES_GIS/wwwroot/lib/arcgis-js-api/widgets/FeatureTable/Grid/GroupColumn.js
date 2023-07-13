/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../core/accessorSupport/decorators/property","../../../core/accessorSupport/ensureType","../../../core/arrayUtils","../../../core/has","../../../core/accessorSupport/decorators/subclass","./Column"],(function(e,r,t,o,s,c,a,u){"use strict";let n=function(r){function t(e){var t;return(t=r.call(this,e)||this).columns=null,t.sortable=!1,t}return e._inherits(t,r),e._createClass(t,[{key:"path",get:function(){return this.header},set:function(e){this.header=e}}]),t}(u);r.__decorate([t.property()],n.prototype,"columns",void 0),r.__decorate([t.property()],n.prototype,"path",null),r.__decorate([t.property({readOnly:!0})],n.prototype,"sortable",void 0),n=r.__decorate([a.subclass("esri.widgets.FeatureTable.Grid.GroupColumn")],n);return n}));
