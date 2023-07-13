/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports"],(function(t){"use strict";const n="randomUUID"in crypto;function e(){if(n)return crypto.randomUUID();const t=crypto.getRandomValues(new Uint16Array(8));t[3]=4095&t[3]|16384,t[4]=16383&t[4]|32768;const e=n=>t[n].toString(16).padStart(4,"0");return e(0)+e(1)+"-"+e(2)+"-"+e(3)+"-"+e(4)+"-"+e(5)+e(6)+e(7)}function r(){return`{${e()}}`}t.generateBracedUUID=r,t.generateUUID=e,Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})}));
