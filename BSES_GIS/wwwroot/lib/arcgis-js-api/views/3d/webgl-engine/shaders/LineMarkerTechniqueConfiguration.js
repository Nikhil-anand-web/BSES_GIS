/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../chunks/tslib.es6","../core/shaderLibrary/ShaderOutput","../core/shaderTechnique/ShaderTechniqueConfiguration","../lib/TransparencyPassType","../materials/DefaultTechniqueConfiguration"],(function(e,r,a,t,o,p,n){"use strict";var i,c;e.LineMarkerSpace=void 0,(i=e.LineMarkerSpace||(e.LineMarkerSpace={}))[i.Draped=0]="Draped",i[i.Screen=1]="Screen",i[i.World=2]="World",i[i.COUNT=3]="COUNT",e.LineMarkerAnchor=void 0,(c=e.LineMarkerAnchor||(e.LineMarkerAnchor={}))[c.Center=0]="Center",c[c.Tip=1]="Tip",c[c.COUNT=2]="COUNT";let d=function(a){function o(){var r;return(r=a.apply(this,arguments)||this).output=t.ShaderOutput.Color,r.transparencyPassType=p.TransparencyPassType.NONE,r.occluder=!1,r.hasSlicePlane=!1,r.writeDepth=!1,r.space=e.LineMarkerSpace.Screen,r.hideOnShortSegments=!1,r.hasCap=!1,r.anchor=e.LineMarkerAnchor.Center,r.hasTip=!1,r.vvSize=!1,r.vvColor=!1,r.vvOpacity=!1,r.hasOccludees=!1,r.hasMultipassTerrain=!1,r.cullAboveGround=!1,r}return r._inherits(o,a),r._createClass(o,[{key:"draped",get:function(){return this.space===e.LineMarkerSpace.Draped}}]),o}(n.DefaultTechniqueConfiguration);a.__decorate([o.parameter({count:t.ShaderOutput.COUNT})],d.prototype,"output",void 0),a.__decorate([o.parameter({count:p.TransparencyPassType.COUNT})],d.prototype,"transparencyPassType",void 0),a.__decorate([o.parameter()],d.prototype,"occluder",void 0),a.__decorate([o.parameter()],d.prototype,"hasSlicePlane",void 0),a.__decorate([o.parameter()],d.prototype,"writeDepth",void 0),a.__decorate([o.parameter({count:e.LineMarkerSpace.COUNT})],d.prototype,"space",void 0),a.__decorate([o.parameter()],d.prototype,"hideOnShortSegments",void 0),a.__decorate([o.parameter()],d.prototype,"hasCap",void 0),a.__decorate([o.parameter({count:e.LineMarkerAnchor.COUNT})],d.prototype,"anchor",void 0),a.__decorate([o.parameter()],d.prototype,"hasTip",void 0),a.__decorate([o.parameter()],d.prototype,"vvSize",void 0),a.__decorate([o.parameter()],d.prototype,"vvColor",void 0),a.__decorate([o.parameter()],d.prototype,"vvOpacity",void 0),a.__decorate([o.parameter()],d.prototype,"hasOccludees",void 0),a.__decorate([o.parameter()],d.prototype,"hasMultipassTerrain",void 0),a.__decorate([o.parameter()],d.prototype,"cullAboveGround",void 0),a.__decorate([o.parameter({constValue:!0})],d.prototype,"hasVvInstancing",void 0),a.__decorate([o.parameter({constValue:!0})],d.prototype,"hasSliceTranslatedView",void 0),e.LineMarkerTechniqueConfiguration=d,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
