/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports"],(function(e){"use strict";var o;e.LayerBlendMode=void 0,(o=e.LayerBlendMode||(e.LayerBlendMode={}))[o.Normal=0]="Normal",o[o.Average=1]="Average",o[o.Lighten=2]="Lighten",o[o.Lighter=3]="Lighter",o[o.Plus=4]="Plus",o[o.Screen=5]="Screen",o[o.ColorDodge=6]="ColorDodge",o[o.Darken=7]="Darken",o[o.Multiply=8]="Multiply",o[o.ColorBurn=9]="ColorBurn",o[o.Overlay=10]="Overlay",o[o.SoftLight=11]="SoftLight",o[o.HardLight=12]="HardLight",o[o.VividLight=13]="VividLight",o[o.Hue=14]="Hue",o[o.Saturation=15]="Saturation",o[o.Luminosity=16]="Luminosity",o[o.Color=17]="Color",o[o.DestinationOver=18]="DestinationOver",o[o.DestinationAtop=19]="DestinationAtop",o[o.DestinationIn=20]="DestinationIn",o[o.DestinationOut=21]="DestinationOut",o[o.SourceAtop=22]="SourceAtop",o[o.SourceIn=23]="SourceIn",o[o.SourceOut=24]="SourceOut",o[o.Xor=25]="Xor",o[o.Difference=26]="Difference",o[o.Exclusion=27]="Exclusion",o[o.Minus=28]="Minus",o[o.Invert=29]="Invert",o[o.Reflect=30]="Reflect",o[o.COUNT=31]="COUNT";const n={normal:e.LayerBlendMode.Normal,average:e.LayerBlendMode.Average,lighten:e.LayerBlendMode.Lighten,lighter:e.LayerBlendMode.Lighter,screen:e.LayerBlendMode.Screen,plus:e.LayerBlendMode.Plus,"color-dodge":e.LayerBlendMode.ColorDodge,darken:e.LayerBlendMode.Darken,multiply:e.LayerBlendMode.Multiply,"color-burn":e.LayerBlendMode.ColorBurn,overlay:e.LayerBlendMode.Overlay,"soft-light":e.LayerBlendMode.SoftLight,"hard-light":e.LayerBlendMode.HardLight,"vivid-light":e.LayerBlendMode.VividLight,hue:e.LayerBlendMode.Hue,saturation:e.LayerBlendMode.Saturation,luminosity:e.LayerBlendMode.Luminosity,color:e.LayerBlendMode.Color,difference:e.LayerBlendMode.Difference,exclusion:e.LayerBlendMode.Exclusion,minus:e.LayerBlendMode.Minus,invert:e.LayerBlendMode.Invert,reflect:e.LayerBlendMode.Reflect,"destination-over":e.LayerBlendMode.DestinationOver,"destination-atop":e.LayerBlendMode.DestinationAtop,"destination-in":e.LayerBlendMode.DestinationIn,"destination-out":e.LayerBlendMode.DestinationOut,"source-atop":e.LayerBlendMode.SourceAtop,"source-in":e.LayerBlendMode.SourceIn,"source-out":e.LayerBlendMode.SourceOut,xor:e.LayerBlendMode.Xor};function r(o){return o===e.LayerBlendMode.DestinationOver||o===e.LayerBlendMode.DestinationAtop||o===e.LayerBlendMode.DestinationIn||o===e.LayerBlendMode.DestinationOut||o===e.LayerBlendMode.SourceAtop||o===e.LayerBlendMode.SourceIn||o===e.LayerBlendMode.SourceOut||o===e.LayerBlendMode.Xor}e.blendModeFromString=n,e.isCompositeBlendMode=r,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));