/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports"],(function(n){"use strict";function e(n,e){for(const t of n.entries())if(e(t[0]))return!0;return!1}function t(n,e){const t=new Set;return null!=n&&n.forEach((n=>t.add(n))),null!=e&&e.forEach((n=>t.add(n))),t}n.someSet=e,n.union=t,Object.defineProperty(n,Symbol.toStringTag,{value:"Module"})}));
