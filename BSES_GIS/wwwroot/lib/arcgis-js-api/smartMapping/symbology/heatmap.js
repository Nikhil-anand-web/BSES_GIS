/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../Color","../../core/arrayUtils","./support/colors","./support/symbologyUtils"],(function(e,a,t,r,l){"use strict";const n={default:{name:"default",label:"Default",description:"Default theme for visualizing features using heatmap.",schemes:{default:{light:{primary:"heatmap-v1",secondary:["heatmap-v2","heatmap-v3","neutral-yellow-orange","neutral-yellow-green","neutral-yellow-purple","neutral-yellow-magenta","neutral-white-blue","neutral-white-blue-metal","neutral-white-gold","neutral-yellow-bronze","heatmap-v4","dark-yellow-orange","dark-yellow-green","dark-yellow-purple","dark-yellow-magenta","dark-white-blue","dark-white-blue-metal","dark-white-gold","dark-yellow-bronze"]},dark:{primary:"heatmap-v4",secondary:["dark-white-blue","dark-yellow-orange","dark-yellow-green","dark-yellow-purple","dark-yellow-magenta","dark-white-blue-metal","dark-white-gold","dark-yellow-bronze","heatmap-v1","heatmap-v2","heatmap-v3","neutral-yellow-orange","neutral-yellow-green","neutral-yellow-purple","neutral-yellow-magenta","neutral-white-blue","neutral-white-blue-metal","neutral-white-gold","neutral-yellow-bronze"]}}}}},o=l.createThemes({themeDictionary:n});function m(e){return l.getThemesforBasemap(o,e)}function u(e){const a="default",r=l.getRawSchemes({basemap:e.basemap,basemapTheme:e.basemapTheme,theme:o.get(a)});if(!r)return;const{schemesInfo:n,basemapId:m,basemapTheme:u}=r,s=`${a}/${m}/`;return{primaryScheme:p(n.primary,s+n.primary),secondarySchemes:n.secondary.map((e=>p(e,s+e))).filter(t.isSome),basemapId:m,basemapTheme:u}}function s(e){return l.filterSchemesByName(e.name,u(e))}function i(e){return l.filterSchemesByTag(e.includedTags,e.excludedTags,u(e))}function c(e){if(!e)return;const t={...e};return t.colors=t.colors.map((e=>new a(e))),t.tags=[...t.tags],t}function p(e,a){const t=r[e];if(t)return h({id:a,name:t.name,tags:t.tags,colors:t.stops??[],opacity:.7})}function h(e){return{id:e.id,name:e.name,tags:[...e.tags],colors:e.colors.map((e=>new a(e))),opacity:e.opacity}}e.cloneScheme=c,e.getSchemeByName=s,e.getSchemes=u,e.getSchemesByTag=i,e.getThemes=m,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));