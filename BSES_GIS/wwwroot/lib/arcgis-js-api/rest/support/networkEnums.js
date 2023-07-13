/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../core/jsonMap"],(function(e,i){"use strict";const r=i.strict()({esriCentimeters:"centimeters",esriDecimalDegrees:"decimal-degrees",esriDecimeters:"decimeters",esriFeet:"feet",esriInches:"inches",esriKilometers:"kilometers",esriMeters:"meters",esriMiles:"miles",esriMillimeters:"millimeters",esriNauticalMiles:"nautical-miles",esriPoints:"points",esriUnknownUnits:"unknown",esriYards:"yards"}),t=i.strict()({esriNAUCentimeters:"centimeters",esriNAUDecimalDegrees:"decimal-degrees",esriNAUDecimeters:"decimeters",esriNAUFeet:"feet",esriNAUInches:"inches",esriNAUKilometers:"kilometers",esriNAUMeters:"meters",esriNAUMiles:"miles",esriNAUMillimeters:"millimeters",esriNAUNauticalMiles:"nautical-miles",esriNAUPoints:"points",esriNAUYards:"yards"}),s=i.strict()({esriNAUDays:"days",esriNAUHours:"hours",esriNAUMinutes:"minutes",esriNAUSeconds:"seconds"}),a=i.strict()({esriNAUCentimeters:"centimeters",esriNAUDecimalDegrees:"decimal-degrees",esriNAUDecimeters:"decimeters",esriNAUFeet:"feet",esriNAUInches:"inches",esriNAUKilometers:"kilometers",esriNAUMeters:"meters",esriNAUMiles:"miles",esriNAUMillimeters:"millimeters",esriNAUNauticalMiles:"nautical-miles",esriNAUPoints:"points",esriNAUYards:"yards",esriNAUDays:"days",esriNAUHours:"hours",esriNAUMinutes:"minutes",esriNAUSeconds:"seconds",esriNAUKilometersPerHour:"kilometers-per-hour",esriNAUMilesPerHour:"miles-per-hour",esriNAUUnknown:"unknown"}),o=i.strict()({esriDOTComplete:"complete",esriDOTCompleteNoEvents:"complete-no-events",esriDOTFeatureSets:"featuresets",esriDOTInstructionsOnly:"instructions-only",esriDOTStandard:"standard",esriDOTSummaryOnly:"summary-only"}),n=i.strict()({esriNAOutputLineNone:"none",esriNAOutputLineStraight:"straight",esriNAOutputLineTrueShape:"true-shape",esriNAOutputLineTrueShapeWithMeasure:"true-shape-with-measure"}),l=i.strict()({esriNAOutputPolygonNone:"none",esriNAOutputPolygonSimplified:"simplified",esriNAOutputPolygonDetailed:"detailed"}),c=i.strict()({esriNFSBAllowBacktrack:"allow-backtrack",esriNFSBAtDeadEndsOnly:"at-dead-ends-only",esriNFSBNoBacktrack:"no-backtrack",esriNFSBAtDeadEndsAndIntersections:"at-dead-ends-and-intersections"}),d=i.strict()({esriNATravelDirectionFromFacility:"from-facility",esriNATravelDirectionToFacility:"to-facility"}),m=i.strict()({esriNATimeOfDayNotUsed:"not-used",esriNATimeOfDayUseAsStartTime:"start",esriNATimeOfDayUseAsEndTime:"end"}),u=i.strict()({AUTOMOBILE:"automobile",TRUCK:"truck",WALK:"walk",OTHER:"other"}),p=i.strict()({0:"either-side-of-vehicle",1:"right-side-of-vehicle",2:"left-side-of-vehicle",3:"no-u-turn"},{useNumericKeys:!0}),h=i.strict()({0:"stop",1:"waypoint",2:"break"},{useNumericKeys:!0}),A=i.strict()({0:"ok",1:"not-located",2:"network-element-not-located",3:"element-not-traversable",4:"invalid-field-values",5:"not-reached",6:"time-window-violation",7:"not-located-on-closest"},{useNumericKeys:!0}),v=i.strict()({1:"right",2:"left"},{useNumericKeys:!0}),T=i.strict()({0:"restriction",1:"added-cost"},{useNumericKeys:!0}),g=i.strict()({0:"permit",1:"restrict"},{useNumericKeys:!0}),N=i.strict()({1:"header",50:"arrive",51:"depart",52:"straight",100:"on-ferry",101:"off-ferry",102:"central-fork",103:"roundabout",104:"u-turn",150:"door",151:"stairs",152:"elevator",153:"escalator",154:"pedestrian-ramp",200:"left-fork",201:"left-ramp",202:"clockwise-roundabout",203:"left-handed-u-turn",204:"bear-left",205:"left-turn",206:"sharp-left",207:"left-turn-and-immediate-left-turn",208:"left-turn-and-immediate-right-turn",300:"right-fork",301:"right-ramp",302:"counter-clockwise-roundabout",303:"right-handed-u-turn",304:"bear-right",305:"right-turn",306:"sharp-right",307:"right-turn-and-immediate-left-turn",308:"right-turn-and-immediate-right-turn",400:"up-elevator",401:"up-escalator",402:"up-stairs",500:"down-elevator",501:"down-escalator",502:"down-stairs",1e3:"general-event",1001:"landmark",1002:"time-zone-change",1003:"traffic-event",1004:"scaled-cost-barrier-event",1005:"boundary-crossing",1006:"restriction-violation"},{useNumericKeys:!0}),y=i.strict()({0:"unknown",1:"segment",2:"maneuver-segment",3:"restriction-violation",4:"scaled-cost-barrier",5:"heavy-traffic",6:"slow-traffic",7:"moderate-traffic"},{useNumericKeys:!0}),f=i.strict()({"NA Campus":"campus","NA Desktop":"desktop","NA Navigation":"navigation"}),k=i.strict()({Kilometers:"kilometers",Miles:"miles",Meters:"meters"},{ignoreUnknown:!1}),U=i.strict()({Minutes:"minutes",TimeAt1KPH:"time-at-1-kph",TravelTime:"travel-time",TruckMinutes:"truck-minutes",TruckTravelTime:"truck-travel-time",WalkTime:"walk-time"},{ignoreUnknown:!1}),M=i.strict()({Kilometers:"kilometers",Miles:"miles",Meters:"meters",Minutes:"minutes",TimeAt1KPH:"time-at-1-kph",TravelTime:"travel-time",TruckMinutes:"truck-minutes",TruckTravelTime:"truck-travel-time",WalkTime:"walk-time"},{ignoreUnknown:!1}),D=i.strict()({"Any Hazmat Prohibited":"any-hazmat-prohibited","Avoid Carpool Roads":"avoid-carpool-roads","Avoid Express Lanes":"avoid-express-lanes","Avoid Ferries":"avoid-ferries","Avoid Gates":"avoid-gates","Avoid Limited Access Roads":"avoid-limited-access-roads","Avoid Private Roads":"avoid-private-roads","Avoid Roads Unsuitable for Pedestrians":"avoid-roads-unsuitable-for-pedestrians","Avoid Stairways":"avoid-stairways","Avoid Toll Roads":"avoid-toll-roads","Avoid Toll Roads for Trucks":"avoid-toll-roads-for-trucks","Avoid Truck Restricted Roads":"avoid-truck-restricted-roads","Avoid Unpaved Roads":"avoid-unpaved-roads","Axle Count Restriction":"axle-count-restriction","Driving a Bus":"driving-a-bus","Driving a Taxi":"driving-a-taxi","Driving a Truck":"driving-a-truck","Driving an Automobile":"driving-an-automobile","Driving an Emergency Vehicle":"driving-an-emergency-vehicle","Height Restriction":"height-restriction","Kingpin to Rear Axle Length Restriction":"kingpin-to-rear-axle-length-restriction","Length Restriction":"length-restriction","Preferred for Pedestrians":"preferred-for-pedestrians","Riding a Motorcycle":"riding-a-motorcycle","Roads Under Construction Prohibited":"roads-under-construction-prohibited","Semi or Tractor with One or More Trailers Prohibited":"semi-or-tractor-with-one-or-more-trailers-prohibited","Single Axle Vehicles Prohibited":"single-axle-vehicles-prohibited","Tandem Axle Vehicles Prohibited":"tandem-axle-vehicles-prohibited","Through Traffic Prohibited":"through-traffic-prohibited","Truck with Trailers Restriction":"truck-with-trailers-restriction","Use Preferred Hazmat Routes":"use-preferred-hazmat-routes","Use Preferred Truck Routes":"use-preferred-truck-routes",Walking:"walking","Weight Restriction":"weight-restriction"},{ignoreUnknown:!1}),S=i.strict()({esriSpatialRelIntersects:"intersects",esriSpatialRelContains:"contains",esriSpatialRelCrosses:"crosses",esriSpatialRelEnvelopeIntersects:"envelope-intersects",esriSpatialRelIndexIntersects:"index-intersects",esriSpatialRelOverlaps:"overlaps",esriSpatialRelTouches:"touches",esriSpatialRelWithin:"within",esriSpatialRelRelation:"relation"}),w=i.strict()({esriGeometryPoint:"point",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon",esriGeometryEnvelope:"envelope",esriGeometryMultipoint:"multipoint"}),b=i.strict()({esriNAUTCost:"cost",esriNAUTDescriptor:"descriptor",esriNAUTRestriction:"restriction",esriNAUTHierarchy:"hierarchy"}),R=i.strict()({esriDSTAltName:"alt-name",esriDSTArrive:"arrive",esriDSTBranch:"branch",esriDSTCrossStreet:"cross-street",esriDSTCumulativeLength:"cumulative-length",esriDSTDepart:"depart",esriDSTEstimatedArrivalTime:"estimated-arrival-time",esriDSTExit:"exit",esriDSTGeneral:"general",esriDSTLength:"length",esriDSTServiceTime:"service-time",esriDSTStreetName:"street-name",esriDSTSummary:"summary",esriDSTTime:"time",esriDSTTimeWindow:"time-window",esriDSTToward:"toward",esriDSTViolationTime:"violation-time",esriDSTWaitTime:"wait-time"});e.barrierTypeJsonMap=T,e.curbApproachJsonMap=p,e.directionLineTypeJsonMap=y,e.directionPointTypeJsonMap=N,e.directionsLengthUnitJsonMap=t,e.directionsOutputTypeJsonMap=o,e.directionsStringTypeJsonMap=R,e.directionsStyleNameJsonMap=f,e.directionsTimeUnitJsonMap=s,e.distanceImpedanceAttributeNameJsonMap=k,e.durationImpedanceAttributeNameJsonMap=U,e.fullEdgeJsonMap=g,e.geometryTypeJsonMap=w,e.impedanceAttributeNameJsonMap=M,e.lengthUnitJsonMap=r,e.locationTypeJsonMap=h,e.networkAttributeUnitJsonMap=a,e.outputLineJsonMap=n,e.outputPolygonJsonMap=l,e.restrictUTurnJsonMap=c,e.restrictionAttributeNameJsonMap=D,e.sideOfEdgeJsonMap=v,e.spatialRelationshipJsonMap=S,e.statusJsonMap=A,e.timeOfDayUsageJsonMap=m,e.travelDirectionJsonMap=d,e.travelModeTypeJsonMap=u,e.usageTypeJsonMap=b,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));