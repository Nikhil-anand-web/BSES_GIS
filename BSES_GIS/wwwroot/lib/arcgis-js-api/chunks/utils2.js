/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","./dom","./index"],(function(e,t,o){"use strict";
/*!
   * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
   * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
   * v1.4.2
   */const n="CALCITE-COMBOBOX-ITEM",r="CALCITE-COMBOBOX-ITEM-GROUP",c=`${n}, ${r}`,i={listContainer:"list-container"};function l(e){const t=e.parentElement?.closest(c),o=t?.parentElement?.closest(c);return[t,o].filter((e=>e))}function s(e){return e.ancestors?.filter((e=>"CALCITE-COMBOBOX-ITEM"===e.nodeName))||[]}function u(e){return t.nodeListToArray(e.querySelectorAll("calcite-combobox-item"))}function m(e){return t.nodeListToArray(e.querySelectorAll("calcite-combobox-item")).filter((e=>e.selected)).length>0}function a(e){if(!o.Build.isBrowser)return 0;return document.evaluate("ancestor::calcite-combobox-item | ancestor::calcite-combobox-item-group",e,null,XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,null).snapshotLength}e.CSS=i,e.ComboboxChildSelector=c,e.ComboboxItem=n,e.ComboboxItemGroup=r,e.getAncestors=l,e.getDepth=a,e.getItemAncestors=s,e.getItemChildren=u,e.hasActiveChildren=m}));
