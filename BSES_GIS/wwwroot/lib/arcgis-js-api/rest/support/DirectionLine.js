/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../Graphic","../../PopupTemplate","../../symbols","../../core/Clonable","../../core/JSONSupport","../../core/accessorSupport/decorators/property","../../core/accessorSupport/ensureType","../../core/arrayUtils","../../core/has","../../core/accessorSupport/decorators/subclass","../../geometry/Polyline","./networkEnums"],(function(e,t,i,o,r,l,n,a,s,p,d,c,u,b){"use strict";var y;let m=y=function(t){function o(e){var i;return(i=t.call(this,e)||this).directionLineType=null,i.directionPointId=null,i.distance=null,i.duration=null,i.fromLevel=null,i.geometry=null,i.objectId=null,i.popupTemplate=null,i.symbol=null,i.toLevel=null,i.type="direction-line",i}return e._inherits(o,t),o.fromGraphic=function(e){return new y({directionLineType:b.directionLineTypeJsonMap.fromJSON(e.attributes.DirectionLineType),directionPointId:e.attributes.DirectionPointID,distance:e.attributes.Meters,duration:e.attributes.Minutes,fromLevel:e.attributes.FromLevel??null,geometry:e.geometry,objectId:e.attributes.ObjectID??e.attributes.__OBJECTID,popupTemplate:e.popupTemplate,symbol:e.symbol,toLevel:e.attributes.ToLevel??null})},o.prototype.toGraphic=function(){const e={ObjectID:this.objectId,DirectionLineType:null!=this.directionLineType?b.directionLineTypeJsonMap.toJSON(this.directionLineType):null,DirectionPointID:this.directionPointId,Meters:this.distance,Minutes:this.duration};return null!=this.fromLevel&&(e.FromLevel=this.fromLevel),null!=this.toLevel&&(e.ToLevel=this.toLevel),new i({geometry:this.geometry,attributes:e,symbol:this.symbol,popupTemplate:this.popupTemplate})},e._createClass(o)}(l.ClonableMixin(n.JSONSupport));m.fields=[{name:"ObjectID",alias:"ObjectID",type:"esriFieldTypeOID",editable:!1,nullable:!1,domain:null},{name:"DirectionLineType",alias:"Line Type",type:"esriFieldTypeInteger",editable:!0,nullable:!0,visible:!0,domain:{type:"codedValue",name:"esriDirectionsLineType",codedValues:[{name:"Unknown",code:0},{name:"Segment",code:1},{name:"Maneuver Segment",code:2},{name:"Restriction violation",code:3},{name:"Scale cost barrier crossing",code:4},{name:"Heavy Traffic",code:5},{name:"Slow Traffic",code:6},{name:"Moderate Traffic",code:7}]}},{name:"DirectionPointID",alias:"Direction Point ID",type:"esriFieldTypeInteger",editable:!0,nullable:!0,visible:!1},{name:"FromLevel",alias:"Start from 3D Level",type:"esriFieldTypeInteger",editable:!0,nullable:!0,visible:!1},{name:"Meters",alias:"Length in Meters",type:"esriFieldTypeDouble",editable:!0,nullable:!0,visible:!0},{name:"Minutes",alias:"Duration in Minutes",type:"esriFieldTypeDouble",editable:!0,nullable:!0,visible:!0},{name:"ToLevel",alias:"End at 3D Level",type:"esriFieldTypeInteger",editable:!0,nullable:!0,visible:!1}],m.popupInfo={title:"Direction Lines",fieldInfos:[{fieldName:"DirectionLineType",label:"Line Type",isEditable:!1,tooltip:"",visible:!0,stringFieldOption:"textbox"},{fieldName:"Meters",label:"Length in Meters",isEditable:!1,tooltip:"",visible:!0,format:{places:2,digitSeparator:!0},stringFieldOption:"textbox"},{fieldName:"Minutes",label:"Duration in Minutes",isEditable:!1,tooltip:"",visible:!0,format:{places:2,digitSeparator:!0},stringFieldOption:"textbox"},{fieldName:"DirectionPointID",label:"Direction Point ID",isEditable:!1,tooltip:"",visible:!0,format:{places:0,digitSeparator:!0},stringFieldOption:"textbox"},{fieldName:"FromLevel",label:"Start from 3D Level",isEditable:!1,tooltip:"",visible:!1,format:{places:0,digitSeparator:!0},stringFieldOption:"textbox"},{fieldName:"ToLevel",label:"End at 3D Level",isEditable:!1,tooltip:"",visible:!1,format:{places:0,digitSeparator:!0},stringFieldOption:"textbox"}],description:null,showAttachments:!1,mediaInfos:[]},t.__decorate([a.property({type:b.directionLineTypeJsonMap.apiValues,json:{read:{source:"attributes.DirectionLineType",reader:b.directionLineTypeJsonMap.read}}})],m.prototype,"directionLineType",void 0),t.__decorate([a.property({json:{read:{source:"attributes.DirectionPointID"}}})],m.prototype,"directionPointId",void 0),t.__decorate([a.property({json:{read:{source:"attributes.Meters"}}})],m.prototype,"distance",void 0),t.__decorate([a.property({json:{read:{source:"attributes.Minutes"}}})],m.prototype,"duration",void 0),t.__decorate([a.property({json:{read:{source:"attributes.FromLevel"}}})],m.prototype,"fromLevel",void 0),t.__decorate([a.property({type:u})],m.prototype,"geometry",void 0),t.__decorate([a.property({json:{read:{source:"attributes.ObjectID"}}})],m.prototype,"objectId",void 0),t.__decorate([a.property({type:o})],m.prototype,"popupTemplate",void 0),t.__decorate([a.property({types:r.symbolTypes})],m.prototype,"symbol",void 0),t.__decorate([a.property({json:{read:{source:"attributes.ToLevel"}}})],m.prototype,"toLevel",void 0),t.__decorate([a.property({readOnly:!0,json:{read:!1}})],m.prototype,"type",void 0),m=y=t.__decorate([c.subclass("esri.rest.support.DirectionLine")],m);return m}));
