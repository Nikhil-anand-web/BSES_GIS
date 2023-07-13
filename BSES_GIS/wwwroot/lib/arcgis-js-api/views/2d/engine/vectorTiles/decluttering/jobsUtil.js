/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","./core","./jobs","./SymbolDeclutterer","./SymbolRepository","./util","../style/StyleDefinition"],(function(t,e,i,o,r,s,y){"use strict";function l(t){const l=[],n=new r.SymbolRepository(4096,l,(()=>{const t=new e.VTLUniqueSymbol;return t.show=!1,t.parts.push({startTime:0,startOpacity:0,targetOpacity:0,show:!1}),t.parts.push({startTime:0,startOpacity:0,targetOpacity:0,show:!1}),t})),a=new o.SymbolDeclutterer(l,n,((e,o,r)=>new i.CollisionJob(e,o,r,t.styleRepository,t.key.level,0)),((t,e)=>{s.writeOpacityToBuffers(t,e,!1)}),(()=>0),(e=>{const i=t.styleRepository.getStyleLayerByUID(e).getLayoutProperty("visibility");return!i||i.getValue()!==y.Visibility.NONE}));l.push(t),n.add(t),a.setScreenSize(512,512),a.continue(1/0)}t.declutterSingleTile=l,Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})}));
