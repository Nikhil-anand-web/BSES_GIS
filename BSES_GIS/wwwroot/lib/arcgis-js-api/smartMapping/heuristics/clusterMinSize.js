/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../../core/screenUtils","../../views/2d/support/engineHelpers"],(function(e,t){"use strict";async function n(n,s){await s.when();const i=n.clone();i.text="999";const c=await t.getTextBounds(i,s);return e.px2pt(c.width)}return n}));