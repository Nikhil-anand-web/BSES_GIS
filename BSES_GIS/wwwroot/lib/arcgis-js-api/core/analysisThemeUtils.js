/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../Color","../config","../views/support/colorUtils"],(function(e,n,t,o){"use strict";function r(e){return o.getColorLuminance(e,{ignoreAlpha:!0})>225?new n([0,0,0,e.a]):new n([255,255,255,e.a])}function c(e,t){const o=new n(e);return o.a*=t,o}function i(e=1){return c(t.analysisTheme.accentColor,e)}function u(e=1){return r(i(e))}function a(e=1){return c(t.analysisTheme.accentColor,e).a}function l(e=1){return c(t.analysisTheme.textColor,e)}function s(e=1){return r(l(e))}e.getAccentColor=i,e.getContrastColor=u,e.getOpacity=a,e.getTextColor=l,e.getTextHaloColor=s,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
