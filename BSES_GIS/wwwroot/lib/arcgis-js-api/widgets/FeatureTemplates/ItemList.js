/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../support/Heading","../support/widgetUtils","../support/jsxFactory"],(function(e,t,n,r){"use strict";const s="esri-item-list",o={base:s,group:`${s}__group`,scroller:`${s}__scroller`,scrollerEnabled:`${s}__scroller--enabled`,groupHeader:`${s}__group__header`,item:`${s}__list-item`,itemIcon:`${s}__list-item-icon`,itemContentEnd:`${s}__list-item-content-end`,noMatchesMessage:`${s}__no-matches-message`,filterContainerSticky:`${s}__filter-container--sticky`},l=4;function i(e){const{filterText:t="",id:n,messages:s,onFilterChange:o,...l}=e;return r.tsx("div",{key:n},e.filterEnabled??1?d({filterText:t,id:n,messages:s,onFilterChange:o}):null,c({...l,enableListScroll:e.enableListScroll??!0,filterText:t,messages:s}))}function a(e){return!!e.items}function c(e){const{headingLevel:t,items:s,...l}=e;return 0===s.length?r.tsx("div",{class:o.noMatchesMessage,key:"no-matches"},e.messages.noMatches):r.tsx("div",{class:n.classes({[o.scroller]:!0,[o.scrollerEnabled]:!!e.enableListScroll}),key:"item-container"},s.map((e=>a(e)?p({...l,group:e,headingLevel:t}):u({...l,grouped:!0,item:e}))))}function d(e){const{messages:t,filterText:n,enableListScroll:s}=e;return r.tsx("div",{key:"filter",class:s?void 0:o.filterContainerSticky},r.tsx("calcite-input",{onCalciteInputInput:t=>{const n=t.currentTarget;e.onFilterChange&&e.onFilterChange(n.value)},placeholder:t.filterPlaceholder,value:n,type:"search"}))}function u(e){const{grouped:t,identify:n,item:s,onItemMouseEnter:l,onItemMouseLeave:i,onItemSelect:a,renderIcon:c,renderCustomItem:d,renderItemContent:u,renderItemContentEnd:p,renderItemLabel:f,renderItemDescription:v,selectedItem:_}=e,b=m(s,n),x=b===m(_,n),I=d?.(e);if(I)return I;const h=u?.(s),y=p?.(s);return r.tsx("calcite-list-item",{"aria-level":t?"2":"",class:o.item,"data-item":s,key:b,label:h?void 0:f?.(s)??s.label??void 0,description:h?void 0:v?.(s)??void 0,selected:x,tabIndex:0,afterUpdate:e=>{e.selected=x},onCalciteListItemSelect:e=>{e.preventDefault(),a?.(g(e))},onmouseenter:e=>l?.(g(e)),onmouseleave:e=>i?.(g(e))},r.tsx("div",{key:"content-start",class:o.itemIcon,slot:"content-start"},c?.(s)),h?r.tsx("div",{key:"content",slot:"content"},h):null,y?r.tsx("div",{key:"content-end",class:o.itemContentEnd,slot:"content-end"},y):null)}function m(e,t){return e?`${t?.(e)||e.id}__${e.label}`:""}function g(e){return e.currentTarget["data-item"]}function p(e){const{group:n,headingLevel:s=l,selectionMode:i="none",renderCustomGroupContent:a,...c}=e,d=a?.(e);return r.tsx("div",{class:o.group,key:n.label??void 0},r.tsx(t.Heading,{level:s,class:o.groupHeader},n.label),d||r.tsx("calcite-list",{selectionMode:i,selectionAppearance:"border"},n.items.map((e=>u({...c,item:e,grouped:!0})))))}e.ItemList=i,e.renderGroup=p,e.renderItem=u,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
