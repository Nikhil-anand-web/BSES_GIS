/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/Accessor","../../core/accessorSupport/decorators/property","../../core/accessorSupport/ensureType","../../core/arrayUtils","../../core/has","../../core/accessorSupport/decorators/subclass","../../chunks/mat3f64","../../chunks/vec3f64","../../chunks/mat3","../../chunks/vec3","../../geometry/Point","../../geometry/projection","../../geometry/SpatialReference","../../geometry/spatialReferenceEllipsoidUtils","../../geometry/support/Ellipsoid","./videoUtils"],(function(e,t,a,o,r,n,i,l,s,d,c,u,p,g,m,V,_,f){"use strict";const y=Math.PI/180;let M=function(t){function a(e){var a;(a=t.call(this)||this).averageElevation=0,a.imageHeight=0,a.imageWidth=0,a.metadataSupportsTransforms=!1,a.platformHeadingAngle=0,a.platformPitchAngle=0,a.platformRollAngle=0,a.sensorHeadingAngle=0,a.sensorAltitude=0,a.sensorHorizontalFieldOfView=0,a.sensorLatitude=0,a.sensorLongitude=0,a.sensorPitchAngle=0,a.sensorRollAngle=0,a.sensorVerticalFieldOfView=0,a.vttMetadata=new Map,a._createMat3FromValues=e=>{const t=e[0],a=e[1],o=e[2];return s.fromValues(t[0],a[0],o[0],t[1],a[1],o[1],t[2],a[2],o[2])},a._multiplyMat3=(e,t)=>{const a=s.create();return c.multiply(a,e,t),a},a._transposeMat3=e=>{const t=s.create();return c.transpose(t,e),t},a._calculateCameraFovForward=()=>a._createMat3FromValues([[0,0,1],[Math.tan(.5*a.sensorHorizontalFieldOfView*y),0,0],[0,Math.tan(.5*a.sensorVerticalFieldOfView*y),0]]),a._calculateCameraFovReverse=()=>a._createMat3FromValues([[0,1/Math.tan(.5*a.sensorHorizontalFieldOfView*y),0],[0,0,1/Math.tan(.5*a.sensorVerticalFieldOfView*y)],[1,0,0]]),a._calculateCameraLook=()=>a._getRotationMatrixZYX(a.sensorHeadingAngle*y,a.sensorPitchAngle*y,a.sensorRollAngle*y),a._calculateImageDimensionsForward=()=>a._createMat3FromValues([[2/a.imageWidth,0,-1],[0,-2/a.imageHeight,-1],[0,0,1]]),a._calculateImageDimensionsReverse=()=>a._createMat3FromValues([[a.imageWidth/2,0,a.imageWidth/2],[0,-a.imageHeight/2,-a.imageHeight/2],[0,0,1]]),a._calculatePlatformPositionMatrix=()=>{const e=Math.sin(a.sensorLatitude*y),t=Math.cos(a.sensorLatitude*y),o=Math.sin(a.sensorLongitude*y),r=Math.cos(a.sensorLongitude*y);return a._createMat3FromValues([[-e*r,-o,-t*r],[-e*o,r,-t*o],[t,0,-e]])},a._calculatePlatformOrientation=()=>a._getRotationMatrixZYX(a.platformHeadingAngle*y,a.platformPitchAngle*y,a.platformRollAngle*y),a._extractValues=e=>{a.imageWidth=e.get(f.VideoMetadataEntryId.EsriVideoWidth)?.Value,a.imageHeight=e.get(f.VideoMetadataEntryId.EsriVideoHeight)?.Value;const t=e.get(f.VideoMetadataEntryId.SensorEllipsoidHeight)?.Value;a.sensorAltitude=t??e.get(f.VideoMetadataEntryId.SensorTrueAltitude)?.Value,a.sensorLatitude=e.get(f.VideoMetadataEntryId.SensorLatitude)?.Value,a.sensorLongitude=e.get(f.VideoMetadataEntryId.SensorLongitude)?.Value,a.sensorHeadingAngle=e.get(f.VideoMetadataEntryId.SensorAzimuthAngle)?.Value,a.sensorPitchAngle=e.get(f.VideoMetadataEntryId.SensorElevationAngle)?.Value,a.sensorRollAngle=e.get(f.VideoMetadataEntryId.SensorRollAngle)?.Value,a.sensorHorizontalFieldOfView=e.get(f.VideoMetadataEntryId.SensorHorizontalFOV)?.Value,a.sensorVerticalFieldOfView=e.get(f.VideoMetadataEntryId.SensorVerticalFOV)?.Value,a.platformHeadingAngle=e.get(f.VideoMetadataEntryId.PlatformHeadingAngle)?.Value,a.platformPitchAngle=e.get(f.VideoMetadataEntryId.PlatformPitchAngle)?.Value,a.platformRollAngle=e.get(f.VideoMetadataEntryId.PlatformRollAngle)?.Value,a.averageElevation=e.get(f.VideoMetadataEntryId.FrameCenterElevation)?.Value||0},a._getRotationMatrixZYX=(e,t,o)=>{const r=Math.cos(e),n=Math.sin(e),i=Math.cos(t),l=Math.sin(t),s=Math.cos(o),d=Math.sin(o);return a._createMat3FromValues([[r*i,r*l*d-s*n,n*d+r*s*l],[i*n,r*s+n*l*d,s*n*l-r*d],[-l,i*d,i*s]])},a._initCameraSensor=()=>{const e=a._calculateCameraFovForward(),t=a._calculateCameraFovReverse(),o=a._calculateCameraLook(),r=a._calculateImageDimensionsForward(),n=a._calculateImageDimensionsReverse(),i=a._calculatePlatformPositionMatrix(),l=a._calculatePlatformOrientation(),s=a._multiplyMat3(a._multiplyMat3(i,l),o);a._imageToEarthTransform=a._multiplyMat3(a._multiplyMat3(s,e),r);const d=a._multiplyMat3(n,t);a._earthToImageTransform=a._multiplyMat3(d,a._transposeMat3(s)),a._platformPositionEcef=a._projectPointToECEF(a.sensorLongitude,a.sensorLatitude,a.sensorAltitude||a.averageElevation)},a._metadataSupportsTransforms=e=>{if(!e?.size)return!1;const t=e.get(f.VideoMetadataEntryId.EsriVideoWidth)?.Value??0,a=e.get(f.VideoMetadataEntryId.EsriVideoHeight)?.Value??0;if(t<=0||a<=0)return!1;const o=e.get(f.VideoMetadataEntryId.SensorEllipsoidHeight)?.Value,r=e.get(f.VideoMetadataEntryId.SensorTrueAltitude)?.Value,n=e.get(f.VideoMetadataEntryId.SensorLatitude)?.Value,i=e.get(f.VideoMetadataEntryId.SensorLongitude)?.Value;if(null==o&&null==r||null==n||null==i)return!1;const l=e.get(f.VideoMetadataEntryId.PlatformHeadingAngle)?.Value,s=e.get(f.VideoMetadataEntryId.PlatformPitchAngle)?.Value,d=e.get(f.VideoMetadataEntryId.PlatformRollAngle)?.Value;if(null==l||null==s||null==d)return!1;const c=e.get(f.VideoMetadataEntryId.SensorHorizontalFOV)?.Value,u=e.get(f.VideoMetadataEntryId.SensorVerticalFOV)?.Value;if(null==c||null==u)return!1;const p=e.get(f.VideoMetadataEntryId.SensorAzimuthAngle)?.Value,g=e.get(f.VideoMetadataEntryId.SensorElevationAngle)?.Value,m=e.get(f.VideoMetadataEntryId.SensorRollAngle)?.Value;return null!=p&&null!=g&&null!=m},a._projectPointToECEF=(e,t,a)=>{const o=[];return g.projectBuffer([e,t,a],m.WGS84,0,o,V.WGS84ECEFSpatialReference,0,1),new p({x:o[0],y:o[1],z:o[2],spatialReference:V.WGS84ECEFSpatialReference})},a._projectImageVectorToEllipsoid=(e,t)=>{const o=_.earth.semiMajorAxis+t,r=_.earth.semiMinorAxis+t,n=r/o,i=o/r,{x:l,y:s,z:c}=a._platformPositionEcef,p=c??a.averageElevation,g=d.fromValues(l,s,i*p),m=u.dot(e,e),V=u.dot(e,g),f=u.dot(g,g)-o*o,y=(-V-Math.sqrt(V*V-m*f))/m;if(y<0)return[NaN,NaN,NaN];const M=d.create();return u.scaleAndAdd(M,g,e,y),M[2]=M[2]*n,M};const o=e?.videoMetadata;return a._set("metadataSupportsTransforms",a._metadataSupportsTransforms(o)),a.metadataSupportsTransforms&&(a._extractValues(o),a._initCameraSensor()),a}e._inherits(a,t);var o=a.prototype;return o.transformGeoToImage=function(e,t,a){const o=this._platformPositionEcef;if(!o)return[0,0];const{x:r,y:n,z:i}=o,l=d.fromValues(r,n,i),s=this._projectPointToECEF(e,t,a||this.averageElevation),c=d.create(),p=d.fromValues(s.x,s.y,s.z);u.subtract(c,p,l),u.transformMat3(c,c,this._earthToImageTransform);const g=c[0],m=c[1],V=c[2];let _=d.fromValues(NaN,NaN,NaN);return isNaN(V)||(_=d.fromValues(g/V,m/V,V/V)),[_[0],_[1]]},o.transformImageToGeo=function(e,t){const a=d.fromValues(e,t,1),o=d.create();u.transformMat3(o,a,this._imageToEarthTransform);const r=this._projectImageVectorToEllipsoid(o,this.averageElevation);let n;if(!isNaN(r[0])){const e=[];g.projectBuffer([r[0],r[1],r[2]],V.WGS84ECEFSpatialReference,0,e,m.WGS84,0,1),n=new p({x:e[0],y:e[1],z:e[2],spatialReference:m.WGS84})}return n},e._createClass(a)}(a);t.__decorate([o.property()],M.prototype,"averageElevation",void 0),t.__decorate([o.property()],M.prototype,"imageHeight",void 0),t.__decorate([o.property()],M.prototype,"imageWidth",void 0),t.__decorate([o.property({readOnly:!0})],M.prototype,"metadataSupportsTransforms",void 0),t.__decorate([o.property()],M.prototype,"platformHeadingAngle",void 0),t.__decorate([o.property()],M.prototype,"platformPitchAngle",void 0),t.__decorate([o.property()],M.prototype,"platformRollAngle",void 0),t.__decorate([o.property()],M.prototype,"sensorHeadingAngle",void 0),t.__decorate([o.property()],M.prototype,"sensorAltitude",void 0),t.__decorate([o.property()],M.prototype,"sensorHorizontalFieldOfView",void 0),t.__decorate([o.property()],M.prototype,"sensorLatitude",void 0),t.__decorate([o.property()],M.prototype,"sensorLongitude",void 0),t.__decorate([o.property()],M.prototype,"sensorPitchAngle",void 0),t.__decorate([o.property()],M.prototype,"sensorRollAngle",void 0),t.__decorate([o.property()],M.prototype,"sensorVerticalFieldOfView",void 0),t.__decorate([o.property()],M.prototype,"vttMetadata",void 0),M=t.__decorate([l.subclass("esri.layers.video.VideoCameraSensorModel")],M);return M}));
