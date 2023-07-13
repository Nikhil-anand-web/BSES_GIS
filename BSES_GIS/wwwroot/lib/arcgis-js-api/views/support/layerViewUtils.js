/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports"],(function(e){"use strict";function n(e){return e&&"function"==typeof e.highlight}function t(e){return e&&"function"==typeof e.maskOccludee}function c(e,n,t){return null==e||e>t&&(0===n||e<n)}function u(e,n){return null!=e&&e>0||null!=n&&n>0}function i(e){const n=e.effectiveScaleRange;return{minScale:n?.minScale??0,maxScale:n?.maxScale??0}}e.extractSafeScaleBounds=i,e.highlightsSupported=n,e.isScaleRangeActive=u,e.occludeesSupported=t,e.scaleBoundsPredicate=c,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
