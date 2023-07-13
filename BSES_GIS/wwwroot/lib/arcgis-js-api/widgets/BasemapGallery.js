/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["require","../chunks/_rollupPluginBabelHelpers","../chunks/tslib.es6","../assets","../core/reactiveUtils","../core/accessorSupport/decorators/property","../core/accessorSupport/ensureType","../core/arrayUtils","../core/has","../core/accessorSupport/decorators/subclass","../support/basemapUtils","./Widget","./BasemapGallery/BasemapGalleryViewModel","./BasemapGallery/css","./support/componentsUtils","./support/Heading","./support/decorators/accessibleHandler","./support/decorators/messageBundle","./support/jsxFactory","./support/widgetUtils"],(function(e,t,s,a,i,o,r,n,l,d,c,p,u,m,h,y,_,g,v,b){"use strict";const w={small:200,default:280,wide:420};let S=function(s){function o(e,t){var a;return(a=s.call(this,e,t)||this).disabled=!1,a.headingLevel=2,a.iconClass=m.CSS.widgetIcon,a.icon=null,a.messages=null,a.viewModel=new u,a._focusBasemapItemEnabled=!1,a._container=null,a._width=0,a._onContainerCreated=e=>{a._container=e},a}t._inherits(o,s);var r=o.prototype;return r.initialize=function(){this.addHandles([b.onResize((()=>this._container),(({contentRect:e})=>{this._width=e.width})),i.when((()=>this.source),(()=>this.viewModel.load()),{sync:!0,initial:!0,once:!0})])},r.loadDependencies=function(){return h.loadCalciteComponents({scrim:()=>new Promise(((t,s)=>e(["../chunks/calcite-scrim"],t,s))),chip:()=>new Promise(((t,s)=>e(["../chunks/calcite-chip"],t,s)))})},r.render=function(){const e="loading"===this.source.state,t=this.disabled||"disabled"===this.viewModel.state,s=this.viewModel.items,a={[m.CSS.sourceLoading]:e,[m.CSS.disabled]:t},i=this._width;i<=w.small||i>=w.wide?a[m.CSS.layoutGrid]=!0:i<w.default&&(a[m.CSS.narrowItems]=!0);const o=e?v.tsx("div",{class:m.CSS.loader,key:"loader"}):null,r=e?null:s.length>0?v.tsx("ul",{bind:this,"aria-disabled":this.disabled,"aria-label":this.label,class:m.CSS.itemContainer,key:"item-container",onkeydown:this._handleKeyDown,role:"radiogroup"},s.map(((e,t)=>this._renderBasemapGalleryItem(e,t))).toArray()):v.tsx("div",{class:m.CSS.emptyMessage,key:"empty-message"},v.tsx(y.Heading,{level:this.headingLevel},this.messages.noBasemaps));return v.tsx("div",{key:"container",class:this.classes(m.CSS.base,a),afterCreate:this._onContainerCreated},0===this._width?null:[o,r])},r._getRoundRobinIndex=function(e,t){return(e+t)%t},r._handleKeyDown=function(e){const{key:t}=e;if(!["ArrowUp","ArrowDown","ArrowRight","ArrowLeft"].includes(t))return;e.preventDefault();const{items:s,activeBasemapIndex:a}=this.viewModel,i="ArrowUp"===t||"ArrowLeft"===t?this._getRoundRobinIndex(Math.max(a-1,-1),s.length):this._getRoundRobinIndex(a+1,s.length),o=s.at(i);"ready"===o?.state&&(this.viewModel.activeBasemap=o.basemap),this._focusBasemapItemEnabled=!0},r._focusBasemapItem=function(e){this._focusBasemapItemEnabled&&0===e.tabIndex&&(e.focus(),this._focusBasemapItemEnabled=!1)},r._handleClick=function(e){const t=e.currentTarget["data-item"];"ready"===t.state&&(this.viewModel.activeBasemap=t.basemap)},r._renderBasemapGalleryItem=function(e,t){const s=e.basemap.thumbnailUrl||a.getAssetUrl("esri/themes/base/images/basemap-toggle-64.svg"),i=e.basemap.title,o=e.basemap.portalItem?.snippet,r=e.error?.message||o||i,{viewModel:{state:n,activeBasemapIndex:l}}=this,d=this.disabled||"disabled"===n,p=l===t,u=p||-1===l&&0===t?0:-1,h="loading"===n,y={[m.CSS.selectedItem]:p,[m.CSS.itemError]:"error"===e.state},_=`basemapgallery-item-${e.uid}`;return v.tsx("li",{"aria-checked":p.toString(),"aria-disabled":d.toString(),"aria-labelledby":_,bind:this,class:this.classes(m.CSS.item,y),"data-item":e,key:e.uid,role:"radio",tabIndex:u,title:r,afterUpdate:this._focusBasemapItem,onclick:this._handleClick,onkeydown:this._handleClick},v.tsx("img",{alt:"",class:m.CSS.itemThumbnail,src:s}),v.tsx("div",{key:"content",class:m.CSS.itemContent},v.tsx("div",{key:"title",class:m.CSS.itemTitle},v.tsx("span",{id:_},i)),c.isBasemap3D(e.basemap)?this._render3DTags():null),"loading"===e.state||p&&h?v.tsx("calcite-scrim",null,v.tsx("span",{key:"loader","aria-hidden":"true",role:"presentation",class:m.CSS.loaderAnimation})):null)},r._render3DTags=function(){const{messages:e}=this;return v.tsx("div",{key:"tag",class:m.CSS.itemTagsContainer},v.tsx("calcite-chip",{key:"tag-3d",value:e.tag3D,scale:"s"},this.messages.tag3D),v.tsx("calcite-chip",{key:"tag-beta",value:e.tagBeta,scale:"s",appearance:"outline-fill"},this.messages.tagBeta))},t._createClass(o,[{key:"activeBasemap",get:function(){return this.viewModel.activeBasemap},set:function(e){this.viewModel.activeBasemap=e}},{key:"label",get:function(){return this.messages?.widgetLabel??""},set:function(e){this._overrideIfSome("label",e)}},{key:"source",get:function(){return this.viewModel.source},set:function(e){this.viewModel.source=e}},{key:"view",get:function(){return this.viewModel.view},set:function(e){this.viewModel.view=e}}]),o}(p);s.__decorate([o.property()],S.prototype,"activeBasemap",null),s.__decorate([o.property()],S.prototype,"disabled",void 0),s.__decorate([o.property()],S.prototype,"headingLevel",void 0),s.__decorate([o.property()],S.prototype,"iconClass",void 0),s.__decorate([o.property()],S.prototype,"icon",void 0),s.__decorate([o.property()],S.prototype,"label",null),s.__decorate([o.property(),g.messageBundle("esri/widgets/BasemapGallery/t9n/BasemapGallery")],S.prototype,"messages",void 0),s.__decorate([o.property()],S.prototype,"source",null),s.__decorate([o.property()],S.prototype,"view",null),s.__decorate([o.property()],S.prototype,"viewModel",void 0),s.__decorate([o.property()],S.prototype,"_focusBasemapItemEnabled",void 0),s.__decorate([o.property()],S.prototype,"_container",void 0),s.__decorate([o.property()],S.prototype,"_width",void 0),s.__decorate([_.accessibleHandler()],S.prototype,"_handleClick",null),S=s.__decorate([d.subclass("esri.widgets.BasemapGallery")],S);return S}));