/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../core/accessorSupport/decorators/property","../../../core/accessorSupport/ensureType","../../../core/arrayUtils","../../../core/has","../../../core/accessorSupport/decorators/enumeration","../../../core/accessorSupport/decorators/subclass","./BaseFunctionArguments","./pixelUtils"],(function(e,t,r,o,n,s,a,i,c,p){"use strict";var d;let u=d=function(t){function r(){var e;return(e=t.apply(this,arguments)||this).bandIds=[],e.bandNames=[],e.bandWavelengths=[],e.missingBandAction=p.MissingBandAction.bestMatch,e}return e._inherits(r,t),r.prototype.clone=function(){return new d({bandIds:[...this.bandIds],bandNames:[...this.bandNames],missingBandAction:this.missingBandAction,method:this.method,wavelengthMatchTolerance:this.wavelengthMatchTolerance})},e._createClass(r)}(c);t.__decorate([r.property({json:{write:!0}})],u.prototype,"bandIds",void 0),t.__decorate([r.property({json:{write:!0}})],u.prototype,"bandNames",void 0),t.__decorate([r.property({json:{write:!0}})],u.prototype,"bandWavelengths",void 0),t.__decorate([a.enumeration({0:"name",1:"wavelength",2:"id"})],u.prototype,"method",void 0),t.__decorate([r.property({json:{write:!0}})],u.prototype,"missingBandAction",void 0),t.__decorate([r.property({json:{write:!0}})],u.prototype,"wavelengthMatchTolerance",void 0),u=d=t.__decorate([i.subclass("esri.layers.support.rasterFunctions.ExtractBandFunctionArguments")],u);return u}));