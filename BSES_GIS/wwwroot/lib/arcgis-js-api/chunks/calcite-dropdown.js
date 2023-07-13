/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","./index","./dom","./floating-ui","./guid","./interactive","./key","./loadable","./observers","./openCloseComponent"],(function(e,t,i,n,o,a,s,r,l,c){"use strict";
/*!
   * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
   * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
   * v1.4.2
   */const d={dropdownTrigger:"trigger"},p="@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-right{0%{opacity:0;transform:translate3D(-5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-left{0%{opacity:0;transform:translate3D(5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-right{animation-name:in-right}.calcite-animate__in-left{animation-name:in-left}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:var(--calcite-app-z-index-dropdown)}:host([hidden]){display:none}:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:inline-flex;flex:0 1 auto}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}:host .calcite-dropdown-wrapper{--calcite-floating-ui-z-index:var(--calcite-app-z-index-dropdown);display:block;position:absolute;z-index:var(--calcite-floating-ui-z-index);visibility:hidden}.calcite-dropdown-wrapper .calcite-floating-ui-anim{position:relative;transition:var(--calcite-floating-ui-transition);transition-property:transform, visibility, opacity;opacity:0;box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.16);z-index:var(--calcite-app-z-index);border-radius:0.25rem}.calcite-dropdown-wrapper[data-placement^=bottom] .calcite-floating-ui-anim{transform:translateY(-5px)}.calcite-dropdown-wrapper[data-placement^=top] .calcite-floating-ui-anim{transform:translateY(5px)}.calcite-dropdown-wrapper[data-placement^=left] .calcite-floating-ui-anim{transform:translateX(5px)}.calcite-dropdown-wrapper[data-placement^=right] .calcite-floating-ui-anim{transform:translateX(-5px)}.calcite-dropdown-wrapper[data-placement] .calcite-floating-ui-anim--active{opacity:1;transform:translate(0)}:host([open]) .calcite-dropdown-wrapper{visibility:visible}:host .calcite-dropdown-content{max-block-size:45vh;inline-size:auto;overflow-y:auto;overflow-x:hidden;background-color:var(--calcite-ui-foreground-1);inline-size:var(--calcite-dropdown-width)}.calcite-trigger-container{position:relative;display:flex;flex:1 1 auto;word-wrap:break-word;word-break:break-word}@media (forced-colors: active){:host([open]) .calcite-dropdown-wrapper{border:1px solid canvasText}}:host([width=s]){--calcite-dropdown-width:12rem}:host([width=m]){--calcite-dropdown-width:14rem}:host([width=l]){--calcite-dropdown-width:16rem}",h=t.proxyCustomElement(class extends t.H{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteDropdownSelect=t.createEvent(this,"calciteDropdownSelect",6),this.calciteDropdownBeforeClose=t.createEvent(this,"calciteDropdownBeforeClose",6),this.calciteDropdownClose=t.createEvent(this,"calciteDropdownClose",6),this.calciteDropdownBeforeOpen=t.createEvent(this,"calciteDropdownBeforeOpen",6),this.calciteDropdownOpen=t.createEvent(this,"calciteDropdownOpen",6),this.items=[],this.groups=[],this.mutationObserver=l.createObserver("mutation",(()=>this.updateItems())),this.resizeObserver=l.createObserver("resize",(e=>this.resizeObserverCallback(e))),this.openTransitionProp="opacity",this.guid=`calcite-dropdown-${o.guid()}`,this.defaultAssignedElements=[],this.slotChangeHandler=e=>{this.defaultAssignedElements=e.target.assignedElements({flatten:!0}),this.updateItems()},this.setFilteredPlacements=()=>{const{el:e,flipPlacements:t}=this;this.filteredFlipPlacements=t?n.filterComputedPlacements(t,e):null},this.updateTriggers=e=>{this.triggers=e.target.assignedElements({flatten:!0}),this.reposition(!0)},this.updateItems=()=>{this.items=this.groups.map((e=>Array.from(e?.querySelectorAll("calcite-dropdown-item")))).reduce(((e,t)=>[...e,...t]),[]),this.updateSelectedItems(),this.reposition(!0)},this.updateGroups=e=>{const t=e.target.assignedElements({flatten:!0}).filter((e=>e?.matches("calcite-dropdown-group")));this.groups=t,this.updateItems()},this.resizeObserverCallback=e=>{e.forEach((e=>{const{target:t}=e;t===this.referenceEl?this.setDropdownWidth():t===this.scrollerEl&&this.setMaxScrollerHeight()}))},this.setDropdownWidth=()=>{const{referenceEl:e,scrollerEl:t}=this,i=e?.clientWidth;i&&t&&(t.style.minWidth=`${i}px`)},this.setMaxScrollerHeight=()=>{const{scrollerEl:e}=this;if(!e)return;this.reposition(!0);const t=this.getMaxScrollerHeight();e.style.maxHeight=t>0?`${t}px`:"",this.reposition(!0)},this.setScrollerAndTransitionEl=e=>{this.resizeObserver.observe(e),this.scrollerEl=e,this.transitionEl=e,c.connectOpenCloseComponent(this)},this.setReferenceEl=e=>{this.referenceEl=e,n.connectFloatingUI(this,this.referenceEl,this.floatingEl),this.resizeObserver.observe(e)},this.setFloatingEl=e=>{this.floatingEl=e,n.connectFloatingUI(this,this.referenceEl,this.floatingEl)},this.keyDownHandler=e=>{if(e.target!==this.referenceEl)return;const{defaultPrevented:t,key:i}=e;if(!t){if(this.open){if("Escape"===i)return this.closeCalciteDropdown(),void e.preventDefault();if(e.shiftKey&&"Tab"===i)return this.closeCalciteDropdown(),void e.preventDefault()}s.isActivationKey(i)?(this.openCalciteDropdown(),e.preventDefault()):"Escape"===i&&(this.closeCalciteDropdown(),e.preventDefault())}},this.focusOnFirstActiveOrFirstItem=()=>{this.getFocusableElement(this.items.find((e=>e.selected))||this.items[0])},this.toggleOpenEnd=()=>{this.focusOnFirstActiveOrFirstItem(),this.el.removeEventListener("calciteDropdownOpen",this.toggleOpenEnd)},this.openCalciteDropdown=()=>{this.open=!this.open,this.open&&this.el.addEventListener("calciteDropdownOpen",this.toggleOpenEnd)},this.open=!1,this.closeOnSelectDisabled=!1,this.disabled=!1,this.flipPlacements=void 0,this.maxItems=0,this.overlayPositioning="absolute",this.placement=n.defaultMenuPlacement,this.scale="m",this.selectedItems=[],this.type="click",this.width=void 0}openHandler(e){this.disabled?this.open=!1:e&&this.reposition(!0)}handleDisabledChange(e){e||(this.open=!1)}flipPlacementsHandler(){this.setFilteredPlacements(),this.reposition(!0)}maxItemsHandler(){this.setMaxScrollerHeight()}overlayPositioningHandler(){this.reposition(!0)}placementHandler(){this.reposition(!0)}async setFocus(){await r.componentLoaded(this),this.el.focus()}connectedCallback(){this.mutationObserver?.observe(this.el,{childList:!0,subtree:!0}),this.setFilteredPlacements(),this.reposition(!0),this.open&&this.openHandler(this.open),c.connectOpenCloseComponent(this)}componentWillLoad(){r.setUpLoadableComponent(this)}componentDidLoad(){r.setComponentLoaded(this),this.reposition(!0)}componentDidRender(){a.updateHostInteraction(this)}disconnectedCallback(){this.mutationObserver?.disconnect(),n.disconnectFloatingUI(this,this.referenceEl,this.floatingEl),this.resizeObserver?.disconnect(),c.disconnectOpenCloseComponent(this)}render(){const{open:e,guid:o}=this;return t.h(t.Host,null,t.h("div",{class:"calcite-trigger-container",id:`${o}-menubutton`,onClick:this.openCalciteDropdown,onKeyDown:this.keyDownHandler,ref:this.setReferenceEl},t.h("slot",{"aria-controls":`${o}-menu`,"aria-expanded":i.toAriaBoolean(e),"aria-haspopup":"menu",name:d.dropdownTrigger,onSlotchange:this.updateTriggers})),t.h("div",{"aria-hidden":i.toAriaBoolean(!e),class:"calcite-dropdown-wrapper",ref:this.setFloatingEl},t.h("div",{"aria-labelledby":`${o}-menubutton`,class:{"calcite-dropdown-content":!0,[n.FloatingCSS.animation]:!0,[n.FloatingCSS.animationActive]:e},id:`${o}-menu`,role:"menu",ref:this.setScrollerAndTransitionEl},t.h("slot",{onSlotchange:this.updateGroups}))))}async reposition(e=!1){const{floatingEl:t,referenceEl:i,placement:o,overlayPositioning:a,filteredFlipPlacements:s}=this;return n.reposition(this,{floatingEl:t,referenceEl:i,overlayPositioning:a,placement:o,flipPlacements:s,type:"menu"},e)}closeCalciteDropdownOnClick(e){!this.disabled&&i.isPrimaryPointerButton(e)&&this.open&&!e.composedPath().includes(this.el)&&this.closeCalciteDropdown(!1)}closeCalciteDropdownOnEvent(e){this.closeCalciteDropdown(),e.stopPropagation()}closeCalciteDropdownOnOpenEvent(e){e.composedPath().includes(this.el)||(this.open=!1)}pointerEnterHandler(){this.disabled||"hover"!==this.type||this.openCalciteDropdown()}pointerLeaveHandler(){this.disabled||"hover"!==this.type||this.closeCalciteDropdown()}calciteInternalDropdownItemKeyEvent(e){const{keyboardEvent:t}=e.detail,n=t.target;switch(t.key){case"Tab":this.items.indexOf(n)!==this.items.length-1||t.shiftKey?0===this.items.indexOf(n)&&t.shiftKey&&this.closeCalciteDropdown():this.closeCalciteDropdown();break;case"ArrowDown":i.focusElementInGroup(this.items,n,"next");break;case"ArrowUp":i.focusElementInGroup(this.items,n,"previous");break;case"Home":i.focusElementInGroup(this.items,n,"first");break;case"End":i.focusElementInGroup(this.items,n,"last")}e.stopPropagation()}handleItemSelect(e){this.updateSelectedItems(),e.stopPropagation(),this.calciteDropdownSelect.emit(),this.closeOnSelectDisabled&&"none"!==e.detail.requestedDropdownGroup.selectionMode||this.closeCalciteDropdown(),e.stopPropagation()}onBeforeOpen(){this.calciteDropdownBeforeOpen.emit()}onOpen(){this.calciteDropdownOpen.emit()}onBeforeClose(){this.calciteDropdownBeforeClose.emit()}onClose(){this.calciteDropdownClose.emit()}updateSelectedItems(){this.selectedItems=this.items.filter((e=>e.selected))}getMaxScrollerHeight(){const{maxItems:e,items:t}=this;let i,n=0,o=0;return this.groups.forEach((t=>{e>0&&n<e&&Array.from(t.children).forEach(((t,a)=>{0===a&&(isNaN(i)&&(i=t.offsetTop),o+=i),n<e&&(o+=t.offsetHeight,n+=1)}))})),t.length>e?o:0}closeCalciteDropdown(e=!0){this.open=!1,e&&i.focusElement(this.triggers[0])}getFocusableElement(e){if(!e)return;const t=e.attributes.isLink?e.shadowRoot.querySelector("a"):e;i.focusElement(t)}static get delegatesFocus(){return!0}get el(){return this}static get watchers(){return{open:["openHandler"],disabled:["handleDisabledChange"],flipPlacements:["flipPlacementsHandler"],maxItems:["maxItemsHandler"],overlayPositioning:["overlayPositioningHandler"],placement:["placementHandler"]}}static get style(){return p}},[17,"calcite-dropdown",{open:[1540],closeOnSelectDisabled:[516,"close-on-select-disabled"],disabled:[516],flipPlacements:[16],maxItems:[514,"max-items"],overlayPositioning:[513,"overlay-positioning"],placement:[513],scale:[513],selectedItems:[1040],type:[513],width:[513],setFocus:[64],reposition:[64]},[[9,"pointerdown","closeCalciteDropdownOnClick"],[0,"calciteInternalDropdownCloseRequest","closeCalciteDropdownOnEvent"],[8,"calciteDropdownOpen","closeCalciteDropdownOnOpenEvent"],[1,"pointerenter","pointerEnterHandler"],[1,"pointerleave","pointerLeaveHandler"],[0,"calciteInternalDropdownItemKeyEvent","calciteInternalDropdownItemKeyEvent"],[0,"calciteInternalDropdownItemSelect","handleItemSelect"]]]);function m(){if("undefined"==typeof customElements)return;["calcite-dropdown"].forEach((e=>{if("calcite-dropdown"===e)customElements.get(e)||customElements.define(e,h)}))}m();
/*!
   * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
   * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
   * v1.4.2
   */
const f=h,u=m;e.CalciteDropdown=f,e.defineCustomElement=u,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
