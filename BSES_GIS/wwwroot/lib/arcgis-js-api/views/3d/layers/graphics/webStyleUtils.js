/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../../core/Error","../../../../symbols/support/styleUtils","../../../../symbols/support/webStyleSymbolUtils"],(function(l,e,t,s){"use strict";async function n(l){if(null===l||null==l.styleName&&null==l.styleUrl)return null;const n=l.name;if(null==n)throw new e("symbolstyleutils:style-symbol-reference-name-missing","Missing name in style symbol reference");const o={portal:l.portal},r=await t.fetchStyle(l,o).catch((()=>null));if(null===r)return null;const u=s.getStyleItemFromStyle(n,r.data);if(u&&!u.formatInfos?.some((l=>"gltf_basisu"===l.type)))return null;const y=await s.fetchSymbolFromStyle(r,n,o,"webRef",((l,e)=>t.symbolUrlFromStyleItem(l,e,["gltf_basisu","gltf"]))).catch((()=>null));if(null===y||"point-3d"!==y.type)return null;const i=y.symbolLayers.items[0];return"object"===i.type?i.resource:null}l.getResourceUrlFromSymbolStyle=n,Object.defineProperty(l,Symbol.toStringTag,{value:"Module"})}));