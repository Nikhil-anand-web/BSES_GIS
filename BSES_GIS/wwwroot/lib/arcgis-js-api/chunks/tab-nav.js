/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","./index","./dom","./observers"],(function(t,e,i,a){"use strict";
/*!
   * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
   * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
   * v1.4.2
   */const n="@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-right{0%{opacity:0;transform:translate3D(-5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-left{0%{opacity:0;transform:translate3D(5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-right{animation-name:in-right}.calcite-animate__in-left{animation-name:in-left}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:var(--calcite-app-z-index-dropdown)}:host([hidden]){display:none}:host{position:relative;display:flex}:host([scale=s]){min-block-size:1.5rem}:host([scale=m]){min-block-size:2rem}:host([scale=l]){min-block-size:2.75rem}.tab-nav{display:flex;inline-size:100%;justify-content:flex-start;overflow:auto}.tab-nav-active-indicator-container{position:absolute;inset-inline:0px;inset-block-end:0px;block-size:0.125rem;inline-size:100%;overflow:hidden}.tab-nav-active-indicator{position:absolute;inset-block-end:0px;display:block;block-size:0.125rem;background-color:var(--calcite-ui-brand);transition-property:all;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;transition-timing-function:cubic-bezier(0, 0, 0.2, 1)}:host([layout=center]) .tab-nav{justify-content:space-evenly}:host([position=bottom]) .tab-nav-active-indicator{inset-block-end:unset;inset-block-start:0px}:host([position=bottom]) .tab-nav-active-indicator-container{inset-block-end:unset;inset-block-start:0px}:host([bordered]) .tab-nav-active-indicator-container{inset-block-end:unset}:host([bordered][position=bottom]) .tab-nav-active-indicator-container{inset-block-end:0;inset-block-start:unset}@media (forced-colors: active){.tab-nav-active-indicator{background-color:highlight}}",s=e.proxyCustomElement(class extends e.H{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteTabChange=e.createEvent(this,"calciteTabChange",6),this.calciteInternalTabChange=e.createEvent(this,"calciteInternalTabChange",6),this.animationActiveDuration=.3,this.resizeObserver=a.createObserver("resize",(()=>{this.activeIndicatorEl&&(this.activeIndicatorEl.style.transitionDuration="0s",this.updateActiveWidth(),this.updateOffsetPosition())})),this.handleTabFocus=(t,e,a)=>{i.focusElementInGroup(this.enabledTabTitles,e,a),t.stopPropagation()},this.handleContainerScroll=()=>{this.activeIndicatorEl.style.transitionDuration="0s",this.updateOffsetPosition()},this.storageId=void 0,this.syncId=void 0,this.selectedTitle=null,this.scale="m",this.layout="inline",this.position="bottom",this.bordered=!1,this.indicatorOffset=void 0,this.indicatorWidth=void 0,this.selectedTabId=void 0}async selectedTabIdChanged(){localStorage&&this.storageId&&void 0!==this.selectedTabId&&null!==this.selectedTabId&&localStorage.setItem(`calcite-tab-nav-${this.storageId}`,JSON.stringify(this.selectedTabId)),this.calciteInternalTabChange.emit({tab:this.selectedTabId}),this.selectedTitle=await this.getTabTitleById(this.selectedTabId)}selectedTitleChanged(){this.updateOffsetPosition(),this.updateActiveWidth(),this.activeIndicatorEl.style.transitionDuration=`${this.animationActiveDuration}s`}connectedCallback(){this.parentTabsEl=this.el.closest("calcite-tabs"),this.resizeObserver?.observe(this.el)}disconnectedCallback(){this.resizeObserver?.disconnect()}componentWillLoad(){const t=`calcite-tab-nav-${this.storageId}`;if(localStorage&&this.storageId&&localStorage.getItem(t)){const e=JSON.parse(localStorage.getItem(t));this.selectedTabId=e}}componentWillRender(){const{parentTabsEl:t}=this;this.layout=t?.layout,this.position=t?.position,this.scale=t?.scale,this.bordered=t?.bordered,this.selectedTitle&&this.updateOffsetPosition()}componentDidRender(){this.tabTitles.length&&this.tabTitles.every((t=>!t.selected))&&!this.selectedTabId&&this.tabTitles[0].getTabIdentifier().then((t=>{this.calciteInternalTabChange.emit({tab:t})}))}render(){const t=i.getElementDir(this.el),a=`${this.indicatorWidth}px`,n=`${this.indicatorOffset}px`,s="rtl"!==t?{width:a,left:n}:{width:a,right:n};return e.h(e.Host,{role:"tablist"},e.h("div",{class:"tab-nav",onScroll:this.handleContainerScroll,ref:t=>this.tabNavEl=t},e.h("slot",null),e.h("div",{class:"tab-nav-active-indicator-container",ref:t=>this.activeIndicatorContainerEl=t},e.h("div",{class:"tab-nav-active-indicator",style:s,ref:t=>this.activeIndicatorEl=t}))))}focusPreviousTabHandler(t){this.handleTabFocus(t,t.target,"previous")}focusNextTabHandler(t){this.handleTabFocus(t,t.target,"next")}focusFirstTabHandler(t){this.handleTabFocus(t,t.target,"first")}focusLastTabHandler(t){this.handleTabFocus(t,t.target,"last")}internalActivateTabHandler(t){this.selectedTabId=t.detail.tab?t.detail.tab:this.getIndexOfTabTitle(t.target),t.stopPropagation()}activateTabHandler(t){this.calciteTabChange.emit(),t.stopPropagation()}internalCloseTabHandler(t){const e=t.target;this.handleTabTitleClose(e),t.stopPropagation()}updateTabTitles(t){t.target.selected&&(this.selectedTabId=t.detail)}globalInternalTabChangeHandler(t){this.syncId&&t.target!==this.el&&t.target.syncId===this.syncId&&this.selectedTabId!==t.detail.tab&&(this.selectedTabId=t.detail.tab),t.stopPropagation()}iconStartChangeHandler(){this.updateActiveWidth()}updateOffsetPosition(){const t=i.getElementDir(this.el),e=this.activeIndicatorContainerEl?.offsetWidth,a=this.selectedTitle?.offsetLeft,n=this.selectedTitle?.offsetWidth,s=e-(a+n);this.indicatorOffset="rtl"!==t?a-this.tabNavEl?.scrollLeft:s+this.tabNavEl?.scrollLeft}updateActiveWidth(){this.indicatorWidth=this.selectedTitle?.offsetWidth}getIndexOfTabTitle(t,e=this.tabTitles){return e.indexOf(t)}async getTabTitleById(t){return Promise.all(this.tabTitles.map((t=>t.getTabIdentifier()))).then((e=>this.tabTitles[e.indexOf(t)]))}get tabTitles(){return i.filterDirectChildren(this.el,"calcite-tab-title")}get enabledTabTitles(){return i.filterDirectChildren(this.el,"calcite-tab-title:not([disabled])").filter((t=>!t.closed))}handleTabTitleClose(t){const{tabTitles:e}=this,i=e.reduce(((t,e,i)=>e.closed?t:[...t,i]),[]),a=i.length;if(1===a&&e[i[0]].closable)e[i[0]].closable=!1,this.selectedTabId=i[0];else if(a>1){const n=e.findIndex((e=>e===t)),s=i.find((t=>t>n));this.selectedTabId===n&&(this.selectedTabId=s||a-1)}requestAnimationFrame((()=>{this.updateOffsetPosition(),this.updateActiveWidth(),e[this.selectedTabId].focus()}))}get el(){return this}static get watchers(){return{selectedTabId:["selectedTabIdChanged"],selectedTitle:["selectedTitleChanged"]}}static get style(){return n}},[1,"calcite-tab-nav",{storageId:[513,"storage-id"],syncId:[513,"sync-id"],selectedTitle:[1040],scale:[1537],layout:[1537],position:[1537],bordered:[1540],indicatorOffset:[1026,"indicator-offset"],indicatorWidth:[1026,"indicator-width"],selectedTabId:[32]},[[0,"calciteInternalTabsFocusPrevious","focusPreviousTabHandler"],[0,"calciteInternalTabsFocusNext","focusNextTabHandler"],[0,"calciteInternalTabsFocusFirst","focusFirstTabHandler"],[0,"calciteInternalTabsFocusLast","focusLastTabHandler"],[0,"calciteInternalTabsActivate","internalActivateTabHandler"],[0,"calciteTabsActivate","activateTabHandler"],[0,"calciteInternalTabsClose","internalCloseTabHandler"],[0,"calciteInternalTabTitleRegister","updateTabTitles"],[16,"calciteInternalTabChange","globalInternalTabChangeHandler"],[0,"calciteInternalTabIconChanged","iconStartChangeHandler"]]]);function l(){if("undefined"==typeof customElements)return;["calcite-tab-nav"].forEach((t=>{if("calcite-tab-nav"===t)customElements.get(t)||customElements.define(t,s)}))}l(),t.TabNav=s,t.defineCustomElement=l}));