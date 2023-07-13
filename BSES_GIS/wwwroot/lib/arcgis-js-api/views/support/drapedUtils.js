/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../geometry","../../core/unitUtils","../../renderers/support/clickToleranceUtils","../../geometry/Extent"],(function(e,t,n,r,a){"use strict";function i(e,t,r,i=new a){let o=0;if("2d"===r.type)o=t*(r.resolution??0);else if("3d"===r.type){const a=r.overlayPixelSizeInMapUnits(e),i=r.basemapSpatialReference;o=null==i||i.equals(r.spatialReference)?t*a:n.getMetersPerUnitForSR(i)/n.getMetersPerUnitForSR(r.spatialReference)}const s=e.x-o,l=e.y-o,c=e.x+o,u=e.y+o,{spatialReference:p}=r;return i.xmin=Math.min(s,c),i.ymin=Math.min(l,u),i.xmax=Math.max(s,c),i.ymax=Math.max(l,u),i.spatialReference=p,i}function o(e,t,n){const a=n.toMap(e);if(null==a)return!1;return i(a,r.calculateTolerance(),n,s).intersects(t)}const s=new a;e.createQueryGeometry=i,e.intersectsDrapedGeometry=o,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));