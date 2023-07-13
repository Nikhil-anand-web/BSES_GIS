/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../geometry/Point","../../geometry/Polygon","../../geometry/Polyline","../support/TelemetryData","../support/VideoTimeExtent"],(function(e,t,r,n,i,o){"use strict";const a={UASDatalinkLocalSet:1e4,PrecisionTimeStamp:10002,MissionId:10003,PlatformTailNumber:10004,PlatformHeadingAngle:10005,PlatformPitchAngle:10006,PlatformRollAngle:10007,PlatformTrueAirspeed:10008,PlatformIndicatedAirspeed:10009,PlatformDesignation:10010,ImageSourceSensor:10011,ImageCoordinateSystem:10012,SensorLatitude:10013,SensorLongitude:10014,SensorTrueAltitude:10015,SensorHorizontalFOV:10016,SensorVerticalFOV:10017,SensorAzimuthAngle:10018,SensorElevationAngle:10019,SensorRollAngle:10020,PlatformSlantRange:10021,TargetWidth:10022,FrameCenterLatitude:10023,FrameCenterLongitude:10024,FrameCenterElevation:10025,OffsetCorner1Latitude:10026,OffsetCorner1Longitude:10027,OffsetCorner2Latitude:10028,OffsetCorner2Longitude:10029,OffsetCorner3Latitude:10030,OffsetCorner3Longitude:10031,OffsetCorner4Latitude:10032,OffsetCorner4Longitude:10033,TargetLocationLatitude:10040,TargetLocationLongitude:10041,TargetLocationElevation:10042,TargetTrackGateWidth:10043,TargetTrackGateHeight:10044,TargetErrorEstimateHorizontal:10045,TargetErrorEstimateLateral:10046,GenericFlagData:10047,PlatformGroundSpeed:10056,PlatformGroundRange:10057,PlatformRemainingFuel:10058,PlatformCallSign:10059,SensorFOVName:10063,PlatformMagneticHeading:10064,LDSVersionNumber:10065,AlternatePlatformName:10070,EventStartTimeUTC:10072,VMTIDataSet:10074,SensorEllipsoidHeight:10075,OperationalMode:10077,CornerLatitudePoint1:10082,CornerLongitudePoint1:10083,CornerLatitudePoint2:10084,CornerLongitudePoint2:10085,CornerLatitudePoint3:10086,CornerLongitudePoint3:10087,CornerLatitudePoint4:10088,CornerLongitudePoint4:10089,SARMotionImageryMetadata:10095,SecurityClassification:20001,SecurityClassifyingAuthority:20002,SecurityClassifyingCountry:20003,SecuritySCI:20004,SecurityCaveats:20005,SecurityReleaseInstructions:20006,SecurityLDSVersion:20022,EsriVideoWidth:90001,EsriVideoHeight:90002,EsriFrameCenterLatitude:90050,EsriFrameCenterLongitude:90051,EsriCornerLatitudePt1:90052,EsriCornerLongitudePt1:90053,EsriCornerLatitudePt2:90054,EsriCornerLongitudePt2:90055,EsriCornerLatitudePt3:90056,EsriCornerLongitudePt3:90057,EsriCornerLatitudePt4:90058,EsriCornerLongitudePt4:90059,EsriFrameOutline:90060,EsriSensorPosition:90061};function u(e){const{screenX:t,screenY:r,videoFrameHeight:n,videoFrameWidth:i,videoPlayerHeight:o,videoPlayerWidth:a}=e;return{x:i/a*t,y:n/o*-r}}function s(e){const{duration:t,end:r,start:n,timezone:i="UTC"}=e||{};return"number"!=typeof t?null:new o({duration:t||null,end:"number"==typeof r?new Date(r):null,start:"number"==typeof n?new Date(n):null,timezone:i})}function d(e,t){const r=[...t],n=r.findIndex((t=>t.equals(e)));return n>-1&&r.splice(n),r.push(e),r}function l(e){if(!e?.size)return new i;const t=E(e),r=g(e),n=C(e),o=c(t,r);return new i({frameCenter:r,frameOutline:n,lineOfSight:o,sensorLocation:t})}function g(e){return f(e)??L(e)}function f(e){return e&&e.has(a.EsriFrameCenterLatitude)&&e.has(a.EsriFrameCenterLongitude)?new t({x:e.get(a.EsriFrameCenterLongitude).Value,y:e.get(a.EsriFrameCenterLatitude).Value,z:e.get(a.FrameCenterElevation).Value}):null}function L(e){return e&&e.has(a.FrameCenterLatitude)&&e.has(a.FrameCenterLongitude)?new t({x:e.get(a.FrameCenterLongitude)?.Value,y:e.get(a.FrameCenterLatitude)?.Value,z:e.get(a.FrameCenterElevation)?.Value}):null}function C(e){if(!e)return null;const t=e.get(a.EsriFrameOutline)?.Value;return t?r.fromJSON(t.geometry):m(e)??P(e)}function m(e){if(!(e.has(a.EsriCornerLatitudePt1)&&e.has(a.EsriCornerLongitudePt1)&&e.has(a.EsriCornerLatitudePt2)&&e.has(a.EsriCornerLongitudePt2)&&e.has(a.EsriCornerLatitudePt3)&&e.has(a.EsriCornerLongitudePt3)&&e.has(a.EsriCornerLatitudePt4)&&e.has(a.EsriCornerLongitudePt4)))return null;const t=[e.get(a.EsriCornerLongitudePt1)?.Value,e.get(a.EsriCornerLatitudePt1)?.Value],n=[e.get(a.EsriCornerLongitudePt2)?.Value,e.get(a.EsriCornerLatitudePt2)?.Value],i=[e.get(a.EsriCornerLongitudePt3)?.Value,e.get(a.EsriCornerLatitudePt3)?.Value],o=[e.get(a.EsriCornerLongitudePt4)?.Value,e.get(a.EsriCornerLatitudePt4)?.Value];return new r({rings:[[t,n,i,o]]})}function P(e){if(!(e.has(a.OffsetCorner1Latitude)&&e.has(a.OffsetCorner1Longitude)&&e.has(a.OffsetCorner2Latitude)&&e.has(a.OffsetCorner2Longitude)&&e.has(a.OffsetCorner3Latitude)&&e.has(a.OffsetCorner3Longitude)&&e.has(a.OffsetCorner4Latitude)&&e.has(a.OffsetCorner4Longitude)&&e.has(a.FrameCenterLatitude)&&e.has(a.FrameCenterLongitude)))return null;const t=e.get(a.FrameCenterLatitude)?.Value,n=e.get(a.FrameCenterLongitude)?.Value,i=t+e.get(a.OffsetCorner1Latitude)?.Value,o=n+e.get(a.OffsetCorner1Longitude)?.Value,u=t+e.get(a.OffsetCorner2Latitude)?.Value,s=n+e.get(a.OffsetCorner2Longitude)?.Value,d=t+e.get(a.OffsetCorner3Latitude)?.Value,l=n+e.get(a.OffsetCorner3Longitude)?.Value,g=t+e.get(a.OffsetCorner4Latitude)?.Value,f=n+e.get(a.OffsetCorner4Longitude)?.Value;return new r({rings:[[[o,i],[s,u],[l,d],[f,g]]]})}function c(e,t){if(!e||!t)return null;const r=[e.x,e.y,e.z],i=[t.x,t.y,t.z];return new n({paths:[[r,i]]})}function E(e){if(!e?.size)return null;if(e.has(a.EsriSensorPosition)){const r=e.get(a.EsriSensorPosition)?.Value;if(r)return t.fromJSON(r.geometry)}return e.has(a.SensorLongitude)&&e.has(a.SensorLatitude)&&e.has(a.SensorTrueAltitude)?new t({x:e.get(a.SensorLongitude)?.Value,y:e.get(a.SensorLatitude)?.Value,z:e.get(a.SensorTrueAltitude)?.Value}):null}e.VideoMetadataEntryId=a,e.convertScreenXYToVideoXY=u,e.getFrameCenter=g,e.getSensorTrailPoints=d,e.getTelemetryData=l,e.readVideoTimeExtent=s,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
