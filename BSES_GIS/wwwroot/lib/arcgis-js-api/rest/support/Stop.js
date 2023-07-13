/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../Graphic","../../PopupTemplate","../../symbols","../../core/Clonable","../../core/JSONSupport","../../core/accessorSupport/decorators/property","../../core/accessorSupport/ensureType","../../core/arrayUtils","../../core/has","../../core/accessorSupport/decorators/reader","../../core/accessorSupport/decorators/subclass","../../core/accessorSupport/decorators/writer","../../geometry/Point","../route/utils","./networkEnums"],(function(e,t,i,r,a,o,l,s,p,n,u,d,b,c,m,v,y){"use strict";var f;let T=f=function(t){function r(e){var i;return(i=t.call(this,e)||this).arriveCurbApproach=null,i.arriveTime=null,i.arriveTimeOffset=null,i.bearing=null,i.bearingTol=null,i.cumulativeCosts=null,i.cumulativeDistance=null,i.cumulativeDuration=null,i.curbApproach=null,i.departCurbApproach=null,i.departTime=null,i.departTimeOffset=null,i.distanceToNetworkInMeters=null,i.geometry=null,i.lateDuration=null,i.locationType=null,i.name=null,i.navLatency=null,i.objectId=null,i.popupTemplate=null,i.posAlong=null,i.routeName=null,i.serviceCosts=null,i.serviceDistance=null,i.serviceDuration=null,i.sequence=null,i.sideOfEdge=null,i.snapX=null,i.snapY=null,i.snapZ=null,i.sourceId=null,i.sourceOid=null,i.status=null,i.symbol=null,i.timeWindowEnd=null,i.timeWindowEndOffset=null,i.timeWindowStart=null,i.timeWindowStartOffset=null,i.type="stop",i.violations=null,i.waitDuration=null,i.wait=null,i}e._inherits(r,t);var a=r.prototype;return a.readArriveTimeOffset=function(e,t){return v.getTimezoneOffset(t.attributes.ArriveTime,t.attributes.ArriveTimeUTC)},a.readCumulativeCosts=function(e,t){return v.getPrefixedProperties(t.attributes,"Cumul_")},a.readDepartTimeOffset=function(e,t){return v.getTimezoneOffset(t.attributes.DepartTime,t.attributes.DepartTimeUTC)},a.readServiceCosts=function(e,t){return v.getPrefixedProperties(t.attributes,"Attr_")},a.writeServiceCosts=function(e,t){v.setPrefixedProperties(e,t,"Attr_")},a.writeTimeWindowEnd=function(e,t){null!=e&&(t.attributes||(t.attributes={}),t.attributes.TimeWindowEnd=e.getTime())},a.writeTimeWindowStart=function(e,t){null!=e&&(t.attributes||(t.attributes={}),t.attributes.TimeWindowStart=e.getTime())},a.readViolations=function(e,t){return v.getPrefixedProperties(t.attributes,"Violation_")},a.readWait=function(e,t){return v.getPrefixedProperties(t.attributes,"Wait_")},r.fromGraphic=function(e){return new f({arriveCurbApproach:null!=e.attributes.ArrivalCurbApproach?y.curbApproachJsonMap.fromJSON(e.attributes.ArrivalCurbApproach):null,arriveTime:null!=e.attributes.ArrivalTime?new Date(e.attributes.ArrivalTime):null,arriveTimeOffset:e.attributes.ArrivalUTCOffset,cumulativeCosts:null!=e.attributes.CumulativeCosts?v.toKebabImpedanceAttributes(JSON.parse(e.attributes.CumulativeCosts)):null,cumulativeDistance:e.attributes.CumulativeMeters??null,cumulativeDuration:e.attributes.CumulativeMinutes??null,curbApproach:null!=e.attributes.CurbApproach?y.curbApproachJsonMap.fromJSON(e.attributes.CurbApproach):null,departCurbApproach:null!=e.attributes.DepartureCurbApproach?y.curbApproachJsonMap.fromJSON(e.attributes.DepartureCurbApproach):null,departTime:null!=e.attributes.DepartureTime?new Date(e.attributes.DepartureTime):null,departTimeOffset:e.attributes.DepartureUTCOffset??null,geometry:e.geometry,lateDuration:e.attributes.LateMinutes??null,locationType:null!=e.attributes.LocationType?y.locationTypeJsonMap.fromJSON(e.attributes.LocationType):null,name:e.attributes.Name,objectId:e.attributes.ObjectID??e.attributes.__OBJECTID,popupTemplate:e.popupTemplate,routeName:e.attributes.RouteName,sequence:e.attributes.Sequence??null,serviceCosts:null!=e.attributes.ServiceCosts?v.toKebabImpedanceAttributes(JSON.parse(e.attributes.ServiceCosts)):null,serviceDistance:e.attributes.ServiceMeters??null,serviceDuration:e.attributes.ServiceMinutes??null,status:null!=e.attributes.Status?y.statusJsonMap.fromJSON(e.attributes.Status):null,symbol:e.symbol,timeWindowEnd:null!=e.attributes.TimeWindowEnd?new Date(e.attributes.TimeWindowEnd):null,timeWindowEndOffset:e.attributes.TimeWindowEndUTCOffset??null,timeWindowStart:null!=e.attributes.TimeWindowStart?new Date(e.attributes.TimeWindowStart):null,timeWindowStartOffset:e.attributes.TimeWindowStartUTCOffset??null,waitDuration:e.attributes.WaitMinutes??null})},a.toGraphic=function(){const e={ObjectID:this.objectId,ArrivalCurbApproach:null!=this.arriveCurbApproach?y.curbApproachJsonMap.toJSON(this.arriveCurbApproach):null,ArrivalTime:null!=this.arriveTime?this.arriveTime.getTime():null,ArrivalUTCOffset:this.arriveTimeOffset,CumulativeCosts:null!=this.cumulativeCosts?JSON.stringify(v.fromKebabImpedanceAttributes(this.cumulativeCosts)):null,CumulativeMeters:this.cumulativeDistance,CumulativeMinutes:this.cumulativeDuration,CurbApproach:null!=this.curbApproach?y.curbApproachJsonMap.toJSON(this.curbApproach):null,DepartureCurbApproach:null!=this.departCurbApproach?y.curbApproachJsonMap.toJSON(this.departCurbApproach):null,DepartureTime:null!=this.departTime?this.departTime.getTime():null,DepartureUTCOffset:this.departTimeOffset,LateMinutes:this.lateDuration,LocationType:null!=this.locationType?y.locationTypeJsonMap.toJSON(this.locationType):null,Name:this.name,RouteName:this.routeName,Sequence:this.sequence,ServiceCosts:null!=this.serviceCosts?JSON.stringify(v.fromKebabImpedanceAttributes(this.serviceCosts)):null,ServiceMeters:this.serviceDistance,ServiceMinutes:this.serviceDuration,Status:null!=this.status?y.statusJsonMap.toJSON(this.status):null,TimeWindowEnd:null!=this.timeWindowEnd?this.timeWindowEnd.getTime():null,TimeWindowEndUTCOffset:this.timeWindowEndOffset??this.arriveTimeOffset,TimeWindowStart:null!=this.timeWindowStart?this.timeWindowStart.getTime():null,TimeWindowStartUTCOffset:this.timeWindowStartOffset??this.arriveTimeOffset,WaitMinutes:this.waitDuration};return new i({geometry:this.geometry,attributes:e,symbol:this.symbol,popupTemplate:this.popupTemplate})},e._createClass(r)}(o.ClonableMixin(l.JSONSupport));T.fields=[{name:"ObjectID",alias:"ObjectID",type:"esriFieldTypeOID",editable:!1,nullable:!1,domain:null},{name:"ArrivalCurbApproach",alias:"Arrival Curb Approach",type:"esriFieldTypeInteger",editable:!0,nullable:!0,visible:!0,domain:{type:"codedValue",name:"esriNACurbApproachType",codedValues:[{name:"Either side",code:0},{name:"From the right",code:1},{name:"From the left",code:2},{name:"Depart in the same direction",code:3}]}},{name:"ArrivalTime",alias:"Arrival Time",type:"esriFieldTypeDate",length:36,editable:!0,nullable:!0,visible:!0},{name:"ArrivalUTCOffset",alias:"Arrival Time: Offset from UTC in Minutes",type:"esriFieldTypeInteger",editable:!0,nullable:!0,visible:!0},{name:"CumulativeCosts",alias:"Cumulative Costs",type:"esriFieldTypeString",length:1048576,editable:!0,nullable:!0,visible:!1,domain:null},{name:"CumulativeMeters",alias:"Cumulative Meters",type:"esriFieldTypeDouble",editable:!0,nullable:!0,visible:!0},{name:"CumulativeMinutes",alias:"Cumulative Minutes",type:"esriFieldTypeDouble",editable:!0,nullable:!0,visible:!0},{name:"CurbApproach",alias:"Curb Approach",type:"esriFieldTypeInteger",editable:!0,nullable:!0,visible:!1,domain:{type:"codedValue",name:"esriNACurbApproachType",codedValues:[{name:"Either side",code:0},{name:"From the right",code:1},{name:"From the left",code:2},{name:"Depart in the same direction",code:3}]}},{name:"DepartureCurbApproach",alias:"Departure Curb Approach",type:"esriFieldTypeInteger",editable:!0,nullable:!0,visible:!0,domain:{type:"codedValue",name:"esriNACurbApproachType",codedValues:[{name:"Either side",code:0},{name:"From the right",code:1},{name:"From the left",code:2},{name:"Depart in the same direction",code:3}]}},{name:"DepartureTime",alias:"Departure Time",type:"esriFieldTypeDate",length:36,editable:!0,nullable:!0,visible:!0},{name:"DepartureUTCOffset",alias:"Departure Time: Offset from UTC in Minutes",type:"esriFieldTypeInteger",editable:!0,nullable:!0,visible:!0},{name:"LateMinutes",alias:"Minutes Late",type:"esriFieldTypeDouble",editable:!0,nullable:!0,visible:!1},{name:"LocationType",alias:"Location Type",type:"esriFieldTypeInteger",editable:!0,nullable:!0,visible:!0,domain:{type:"codedValue",name:"esriNALocationType",codedValues:[{name:"Stop",code:0},{name:"Waypoint",code:1}]}},{name:"Name",alias:"Name",type:"esriFieldTypeString",length:255,editable:!0,nullable:!0,visible:!0},{name:"RouteName",alias:"Route Name",type:"esriFieldTypeString",length:255,editable:!0,nullable:!0,visible:!0},{name:"Sequence",alias:"Sequence",type:"esriFieldTypeInteger",editable:!0,nullable:!0,visible:!0},{name:"ServiceCosts",alias:"Service Costs",type:"esriFieldTypeString",length:1048576,editable:!0,nullable:!0,visible:!1,domain:null},{name:"ServiceMeters",alias:"Service Meters",type:"esriFieldTypeDouble",editable:!0,nullable:!0,visible:!1},{name:"ServiceMinutes",alias:"Service Minutes",type:"esriFieldTypeDouble",editable:!0,nullable:!0,visible:!1},{name:"Status",alias:"Status",type:"esriFieldTypeInteger",editable:!0,nullable:!0,visible:!0,domain:{type:"codedValue",name:"esriNAObjectStatus",codedValues:[{name:"OK",code:0},{name:"Not Located on Network",code:1},{name:"Network Unbuilt",code:2},{name:"Prohibited Street",code:3},{name:"Invalid Field Values",code:4},{name:"Cannot Reach",code:5},{name:"Time Window Violation",code:6}]}},{name:"TimeWindowEnd",alias:"Time Window End",type:"esriFieldTypeDate",length:36,editable:!0,nullable:!0,visible:!1},{name:"TimeWindowEndUTCOffset",alias:"Time Window End: Offset from UTC in Minutes",type:"esriFieldTypeInteger",editable:!0,nullable:!0,visible:!0},{name:"TimeWindowStart",alias:"Time Window Start",type:"esriFieldTypeDate",length:36,editable:!0,nullable:!0,visible:!1},{name:"TimeWindowStartUTCOffset",alias:"Time Window Start: Offset from UTC in Minutes",type:"esriFieldTypeInteger",editable:!0,nullable:!0,visible:!0},{name:"WaitMinutes",alias:"Minutes Early",type:"esriFieldTypeDouble",editable:!0,nullable:!0,visible:!1}],T.popupInfo={title:"{Name}",fieldInfos:[{fieldName:"Name",label:"Name",isEditable:!0,tooltip:"",visible:!0,stringFieldOption:"textbox"},{fieldName:"RouteName",label:"Route Name",isEditable:!0,tooltip:"",visible:!0,stringFieldOption:"textbox"},{fieldName:"Sequence",label:"Sequence",isEditable:!1,tooltip:"",visible:!0,format:{places:0,digitSeparator:!0},stringFieldOption:"textbox"},{fieldName:"ArrivalTime",label:"Arrival Time",isEditable:!0,tooltip:"",visible:!0,format:{dateFormat:"shortDateShortTime24"},stringFieldOption:"textbox"},{fieldName:"ArrivalUTCOffset",label:"Arrival Time: Offset from UTC in Minutes",isEditable:!1,tooltip:"",visible:!0,format:{places:0,digitSeparator:!0},stringFieldOption:"textbox"},{fieldName:"DepartureTime",label:"Departure Time",isEditable:!0,tooltip:"",visible:!0,format:{dateFormat:"shortDateShortTime24"},stringFieldOption:"textbox"},{fieldName:"DepartureUTCOffset",label:"Departure Time: Offset from UTC in Minutes",isEditable:!1,tooltip:"",visible:!0,format:{places:0,digitSeparator:!0},stringFieldOption:"textbox"},{fieldName:"CurbApproach",label:"Curb Approach",isEditable:!0,tooltip:"",visible:!1,format:{places:0,digitSeparator:!0},stringFieldOption:"textbox"},{fieldName:"ArrivalCurbApproach",label:"Arrival Curb Approach",isEditable:!1,tooltip:"",visible:!0,format:{places:0,digitSeparator:!0},stringFieldOption:"textbox"},{fieldName:"DepartureCurbApproach",label:"Departure Curb Approach",isEditable:!1,tooltip:"",visible:!0,format:{places:0,digitSeparator:!0},stringFieldOption:"textbox"},{fieldName:"Status",label:"Status",isEditable:!1,tooltip:"",visible:!0,format:{places:0,digitSeparator:!0},stringFieldOption:"textbox"},{fieldName:"LocationType",label:"Location Type",isEditable:!1,tooltip:"",visible:!0,format:{places:0,digitSeparator:!0},stringFieldOption:"textbox"},{fieldName:"TimeWindowStart",label:"Time Window Start",isEditable:!0,tooltip:"",visible:!1,format:{dateFormat:"shortDateShortTime24"},stringFieldOption:"textbox"},{fieldName:"TimeWindowStartUTCOffset",label:"Time Window Start: Offset from UTC in Minutes",isEditable:!1,tooltip:"",visible:!1,format:{places:0,digitSeparator:!0},stringFieldOption:"textbox"},{fieldName:"TimeWindowEnd",label:"Time Window End",isEditable:!0,tooltip:"",visible:!1,format:{dateFormat:"shortDateShortTime24"},stringFieldOption:"textbox"},{fieldName:"TimeWindowEndUTCOffset",label:"Time Window End: Offset from UTC in Minutes",isEditable:!1,tooltip:"",visible:!1,format:{places:0,digitSeparator:!0},stringFieldOption:"textbox"},{fieldName:"ServiceMinutes",label:"Service Minutes",isEditable:!0,tooltip:"",visible:!1,format:{places:2,digitSeparator:!0},stringFieldOption:"textbox"},{fieldName:"ServiceMeters",label:"Service Meters",isEditable:!0,tooltip:"",visible:!1,format:{places:2,digitSeparator:!0},stringFieldOption:"textbox"},{fieldName:"ServiceCosts",label:"Service Costs",isEditable:!0,tooltip:"",visible:!1,stringFieldOption:"textbox"},{fieldName:"CumulativeMinutes",label:"Cumulative Minutes",isEditable:!1,tooltip:"",visible:!0,format:{places:2,digitSeparator:!0},stringFieldOption:"textbox"},{fieldName:"CumulativeMeters",label:"Cumulative Meters",isEditable:!1,tooltip:"",visible:!0,format:{places:2,digitSeparator:!0},stringFieldOption:"textbox"},{fieldName:"CumulativeCosts",label:"Cumulative Costs",isEditable:!0,tooltip:"",visible:!1,stringFieldOption:"textbox"},{fieldName:"LateMinutes",label:"Minutes Late",isEditable:!1,tooltip:"",visible:!1,format:{places:2,digitSeparator:!0},stringFieldOption:"textbox"},{fieldName:"WaitMinutes",label:"Minutes Early",isEditable:!1,tooltip:"",visible:!1,format:{places:2,digitSeparator:!0},stringFieldOption:"textbox"}],description:null,showAttachments:!1,mediaInfos:[]},t.__decorate([s.property({type:y.curbApproachJsonMap.apiValues,json:{read:{source:"attributes.ArrivalCurbApproach",reader:y.curbApproachJsonMap.read}}})],T.prototype,"arriveCurbApproach",void 0),t.__decorate([s.property({type:Date,json:{read:{source:"attributes.ArriveTimeUTC"}}})],T.prototype,"arriveTime",void 0),t.__decorate([s.property()],T.prototype,"arriveTimeOffset",void 0),t.__decorate([d.reader("arriveTimeOffset",["attributes.ArriveTime","attributes.ArriveTimeUTC"])],T.prototype,"readArriveTimeOffset",null),t.__decorate([s.property({json:{name:"attributes.Bearing",read:!1,write:!0}})],T.prototype,"bearing",void 0),t.__decorate([s.property({json:{name:"attributes.BearingTol",read:!1,write:!0}})],T.prototype,"bearingTol",void 0),t.__decorate([s.property()],T.prototype,"cumulativeCosts",void 0),t.__decorate([d.reader("cumulativeCosts",["attributes"])],T.prototype,"readCumulativeCosts",null),t.__decorate([s.property()],T.prototype,"cumulativeDistance",void 0),t.__decorate([s.property()],T.prototype,"cumulativeDuration",void 0),t.__decorate([s.property({type:y.curbApproachJsonMap.apiValues,json:{name:"attributes.CurbApproach",read:{reader:y.curbApproachJsonMap.read},write:{writer:y.curbApproachJsonMap.write}}})],T.prototype,"curbApproach",void 0),t.__decorate([s.property({type:y.curbApproachJsonMap.apiValues,json:{read:{source:"attributes.DepartCurbApproach",reader:y.curbApproachJsonMap.read}}})],T.prototype,"departCurbApproach",void 0),t.__decorate([s.property({type:Date,json:{read:{source:"attributes.DepartTimeUTC"}}})],T.prototype,"departTime",void 0),t.__decorate([s.property()],T.prototype,"departTimeOffset",void 0),t.__decorate([d.reader("departTimeOffset",["attributes.DepartTime","attributes.DepartTimeUTC"])],T.prototype,"readDepartTimeOffset",null),t.__decorate([s.property({json:{read:{source:"attributes.DistanceToNetworkInMeters"}}})],T.prototype,"distanceToNetworkInMeters",void 0),t.__decorate([s.property({type:m,json:{write:!0}})],T.prototype,"geometry",void 0),t.__decorate([s.property()],T.prototype,"lateDuration",void 0),t.__decorate([s.property({type:y.locationTypeJsonMap.apiValues,json:{name:"attributes.LocationType",read:{reader:y.locationTypeJsonMap.read},write:{writer:y.locationTypeJsonMap.write}}})],T.prototype,"locationType",void 0),t.__decorate([s.property({json:{name:"attributes.Name"}})],T.prototype,"name",void 0),t.__decorate([s.property({json:{name:"attributes.NavLatency",read:!1,write:!0}})],T.prototype,"navLatency",void 0),t.__decorate([s.property({json:{name:"attributes.ObjectID"}})],T.prototype,"objectId",void 0),t.__decorate([s.property({type:r})],T.prototype,"popupTemplate",void 0),t.__decorate([s.property({json:{read:{source:"attributes.PosAlong"}}})],T.prototype,"posAlong",void 0),t.__decorate([s.property({json:{name:"attributes.RouteName"}})],T.prototype,"routeName",void 0),t.__decorate([s.property()],T.prototype,"serviceCosts",void 0),t.__decorate([d.reader("serviceCosts",["attributes"])],T.prototype,"readServiceCosts",null),t.__decorate([c.writer("serviceCosts")],T.prototype,"writeServiceCosts",null),t.__decorate([s.property()],T.prototype,"serviceDistance",void 0),t.__decorate([s.property()],T.prototype,"serviceDuration",void 0),t.__decorate([s.property({json:{name:"attributes.Sequence"}})],T.prototype,"sequence",void 0),t.__decorate([s.property({type:y.sideOfEdgeJsonMap.apiValues,json:{read:{source:"attributes.SideOfEdge",reader:y.sideOfEdgeJsonMap.read}}})],T.prototype,"sideOfEdge",void 0),t.__decorate([s.property({json:{read:{source:"attributes.SnapX"}}})],T.prototype,"snapX",void 0),t.__decorate([s.property({json:{read:{source:"attributes.SnapY"}}})],T.prototype,"snapY",void 0),t.__decorate([s.property({json:{read:{source:"attributes.SnapZ"}}})],T.prototype,"snapZ",void 0),t.__decorate([s.property({json:{read:{source:"attributes.SourceID"}}})],T.prototype,"sourceId",void 0),t.__decorate([s.property({json:{read:{source:"attributes.SourceOID"}}})],T.prototype,"sourceOid",void 0),t.__decorate([s.property({type:y.statusJsonMap.apiValues,json:{read:{source:"attributes.Status",reader:y.statusJsonMap.read}}})],T.prototype,"status",void 0),t.__decorate([s.property({types:a.symbolTypes})],T.prototype,"symbol",void 0),t.__decorate([s.property({type:Date,json:{name:"attributes.TimeWindowEnd"}})],T.prototype,"timeWindowEnd",void 0),t.__decorate([c.writer("timeWindowEnd")],T.prototype,"writeTimeWindowEnd",null),t.__decorate([s.property()],T.prototype,"timeWindowEndOffset",void 0),t.__decorate([s.property({type:Date,json:{name:"attributes.TimeWindowStart"}})],T.prototype,"timeWindowStart",void 0),t.__decorate([c.writer("timeWindowStart")],T.prototype,"writeTimeWindowStart",null),t.__decorate([s.property()],T.prototype,"timeWindowStartOffset",void 0),t.__decorate([s.property({readOnly:!0,json:{read:!1}})],T.prototype,"type",void 0),t.__decorate([s.property()],T.prototype,"violations",void 0),t.__decorate([d.reader("violations",["attributes"])],T.prototype,"readViolations",null),t.__decorate([s.property()],T.prototype,"waitDuration",void 0),t.__decorate([s.property()],T.prototype,"wait",void 0),t.__decorate([d.reader("wait",["attributes"])],T.prototype,"readWait",null),T=f=t.__decorate([b.subclass("esri.rest.support.Stop")],T);return T}));