/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["require","exports","../../assets"],(function(e,s,t){"use strict";function i(){if(null==n){const s=e=>t.getAssetUrl(`esri/libs/basisu/${e}`);n=new Promise(((s,t)=>e(["../../chunks/basis_transcoder"],s,t))).then((e=>e.basis_transcoder)).then((({default:e})=>e({locateFile:s}).then((e=>(e.initializeBasis(),delete e.then,e)))))}return n}let n;s.getBasisTranscoder=i,Object.defineProperty(s,Symbol.toStringTag,{value:"Module"})}));
