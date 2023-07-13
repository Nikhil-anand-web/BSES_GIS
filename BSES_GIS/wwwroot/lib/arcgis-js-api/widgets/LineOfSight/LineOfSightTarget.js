/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../Graphic","../../core/Accessor","../../core/accessorSupport/decorators/property","../../core/accessorSupport/ensureType","../../core/arrayUtils","../../core/has","../../core/accessorSupport/decorators/subclass","../../geometry/Point"],(function(e,r,t,o,c,i,s,p,n,a){"use strict";let l=function(r){function t(e){var t;return(t=r.call(this,e)||this).location=null,t.intersectedLocation=null,t.intersectedGraphic=null,t.visible=void 0,t}return e._inherits(t,r),e._createClass(t)}(o);r.__decorate([c.property({type:a})],l.prototype,"location",void 0),r.__decorate([c.property({type:a})],l.prototype,"intersectedLocation",void 0),r.__decorate([c.property({type:t})],l.prototype,"intersectedGraphic",void 0),r.__decorate([c.property({type:Boolean})],l.prototype,"visible",void 0),l=r.__decorate([n.subclass("esri.widgets.lineOfSight.LineOfSightTarget")],l);return l}));
