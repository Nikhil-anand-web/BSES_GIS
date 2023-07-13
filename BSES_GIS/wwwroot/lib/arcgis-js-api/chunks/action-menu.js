/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","./index","./dom","./guid","./key","./loadable","./action","./icon","./loader","./popover"],(function(t,e,n,i,a,o,l,c,s,r){"use strict";
/*!
   * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
   * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
   * v1.4.2
   */function u(t,e){return(t+e)%e}
/*!
   * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
   * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
   * v1.4.2
   */const m={menu:"menu",defaultTrigger:"default-trigger"},d={tooltip:"tooltip",trigger:"trigger"},h={menu:"ellipsis"},p="@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-right{0%{opacity:0;transform:translate3D(-5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-left{0%{opacity:0;transform:translate3D(5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-right{animation-name:in-right}.calcite-animate__in-left{animation-name:in-left}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:var(--calcite-app-z-index-dropdown)}:host([hidden]){display:none}:host{box-sizing:border-box;display:flex;flex-direction:column;background-color:var(--calcite-ui-foreground-1);font-size:var(--calcite-font-size-1);color:var(--calcite-ui-text-2)}.menu ::slotted(calcite-action){margin:0.125rem;display:flex;outline-color:transparent}.menu ::slotted(calcite-action[active]){outline:2px solid var(--calcite-ui-focus-color, var(--calcite-ui-brand));outline-offset:calc(\n            2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-ui-focus-offset-invert),\n                1\n              )\n            )\n          );outline-offset:0px}.default-trigger{position:relative;block-size:100%;flex:0 1 auto;align-self:stretch}slot[name=trigger]::slotted(calcite-action),calcite-action::slotted([slot=trigger]){position:relative;block-size:100%;flex:0 1 auto;align-self:stretch}.menu{flex-direction:column;flex-wrap:nowrap;outline:2px solid transparent;outline-offset:2px}",f=["ArrowUp","ArrowDown","End","Home"],g=e.proxyCustomElement(class extends e.H{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteActionMenuOpen=e.createEvent(this,"calciteActionMenuOpen",6),this.actionElements=[],this.guid=`calcite-action-menu-${i.guid()}`,this.menuId=`${this.guid}-menu`,this.menuButtonId=`${this.guid}-menu-button`,this.connectMenuButtonEl=()=>{const{menuButtonId:t,menuId:e,open:i,label:a}=this,o=this.slottedMenuButtonEl||this.defaultMenuButtonEl;this.menuButtonEl!==o&&(this.disconnectMenuButtonEl(),this.menuButtonEl=o,this.setTooltipReferenceElement(),o&&(o.active=i,o.setAttribute("aria-controls",e),o.setAttribute("aria-expanded",n.toAriaBoolean(i)),o.setAttribute("aria-haspopup","true"),o.id||(o.id=t),o.label||(o.label=a),o.text||(o.text=a),o.addEventListener("pointerdown",this.menuButtonClick),o.addEventListener("keydown",this.menuButtonKeyDown)))},this.disconnectMenuButtonEl=()=>{const{menuButtonEl:t}=this;t&&(t.removeEventListener("pointerdown",this.menuButtonClick),t.removeEventListener("keydown",this.menuButtonKeyDown))},this.setMenuButtonEl=t=>{const e=t.target.assignedElements({flatten:!0}).filter((t=>t?.matches("calcite-action")));this.slottedMenuButtonEl=e[0],this.connectMenuButtonEl()},this.setDefaultMenuButtonEl=t=>{this.defaultMenuButtonEl=t,this.connectMenuButtonEl()},this.handleCalciteActionClick=()=>{this.open=!1,this.setFocus()},this.menuButtonClick=t=>{n.isPrimaryPointerButton(t)&&this.toggleOpen()},this.updateTooltip=t=>{const e=t.target.assignedElements({flatten:!0}).filter((t=>t?.matches("calcite-tooltip")));this.tooltipEl=e[0],this.setTooltipReferenceElement()},this.setTooltipReferenceElement=()=>{const{tooltipEl:t,expanded:e,menuButtonEl:n,open:i}=this;t&&(t.referenceElement=e||i?null:n)},this.updateAction=(t,e)=>{const{guid:n,activeMenuItemIndex:i}=this,a=`${n}-action-${e}`;t.tabIndex=-1,t.setAttribute("role","menuitem"),t.id||(t.id=a),t.active=e===i},this.updateActions=t=>{t?.forEach(this.updateAction)},this.handleDefaultSlotChange=t=>{const e=t.target.assignedElements({flatten:!0}).filter((t=>t?.matches("calcite-action")));this.actionElements=e},this.menuButtonKeyDown=t=>{const{key:e}=t,{actionElements:n,activeMenuItemIndex:i,open:o}=this;if(n.length){if(a.isActivationKey(e)){if(t.preventDefault(),!o)return void this.toggleOpen();const e=n[i];e?e.click():this.toggleOpen(!1)}if("Tab"!==e)return"Escape"===e?(this.toggleOpen(!1),void t.preventDefault()):void this.handleActionNavigation(t,e,n);this.open=!1}},this.handleActionNavigation=(t,e,n)=>{if(!this.isValidKey(e,f))return;if(t.preventDefault(),!this.open)return this.toggleOpen(),"Home"!==e&&"ArrowDown"!==e||(this.activeMenuItemIndex=0),void("End"!==e&&"ArrowUp"!==e||(this.activeMenuItemIndex=n.length-1));"Home"===e&&(this.activeMenuItemIndex=0),"End"===e&&(this.activeMenuItemIndex=n.length-1);const i=this.activeMenuItemIndex;"ArrowUp"===e&&(this.activeMenuItemIndex=u(Math.max(i-1,-1),n.length)),"ArrowDown"===e&&(this.activeMenuItemIndex=u(i+1,n.length))},this.toggleOpenEnd=()=>{this.setFocus(),this.el.removeEventListener("calcitePopoverOpen",this.toggleOpenEnd)},this.toggleOpen=(t=!this.open)=>{this.el.addEventListener("calcitePopoverOpen",this.toggleOpenEnd),this.open=t},this.expanded=!1,this.flipPlacements=void 0,this.label=void 0,this.open=!1,this.overlayPositioning="absolute",this.placement="auto",this.scale=void 0,this.menuButtonEl=void 0,this.activeMenuItemIndex=-1}componentWillLoad(){o.setUpLoadableComponent(this)}componentDidLoad(){o.setComponentLoaded(this)}disconnectedCallback(){this.disconnectMenuButtonEl()}expandedHandler(){this.open=!1,this.setTooltipReferenceElement()}openHandler(t){this.activeMenuItemIndex=this.open?0:-1,this.menuButtonEl&&(this.menuButtonEl.active=t),this.calciteActionMenuOpen.emit(),this.setTooltipReferenceElement()}closeCalciteActionMenuOnClick(t){if(!n.isPrimaryPointerButton(t))return;t.composedPath().includes(this.el)||(this.open=!1)}activeMenuItemIndexHandler(){this.updateActions(this.actionElements)}async setFocus(){await o.componentLoaded(this),n.focusElement(this.menuButtonEl)}renderMenuButton(){const{label:t,scale:n,expanded:i}=this;return e.h("slot",{name:d.trigger,onSlotchange:this.setMenuButtonEl},e.h("calcite-action",{class:m.defaultTrigger,icon:h.menu,scale:n,text:t,textEnabled:i,ref:this.setDefaultMenuButtonEl}))}renderMenuItems(){const{actionElements:t,activeMenuItemIndex:n,open:i,menuId:a,menuButtonEl:o,label:l,placement:c,overlayPositioning:s,flipPlacements:r}=this,u=t[n],d=u?.id||null;return e.h("calcite-popover",{flipPlacements:r,focusTrapDisabled:!0,label:l,offsetDistance:0,open:i,overlayPositioning:s,placement:c,pointerDisabled:!0,referenceElement:o},e.h("div",{"aria-activedescendant":d,"aria-labelledby":o?.id,class:m.menu,id:a,onClick:this.handleCalciteActionClick,role:"menu",tabIndex:-1},e.h("slot",{onSlotchange:this.handleDefaultSlotChange})))}render(){return e.h(e.Fragment,null,this.renderMenuButton(),this.renderMenuItems(),e.h("slot",{name:d.tooltip,onSlotchange:this.updateTooltip}))}isValidKey(t,e){return!!e.find((e=>e===t))}get el(){return this}static get watchers(){return{expanded:["expandedHandler"],open:["openHandler"],activeMenuItemIndex:["activeMenuItemIndexHandler"]}}static get style(){return p}},[1,"calcite-action-menu",{expanded:[516],flipPlacements:[16],label:[1],open:[1540],overlayPositioning:[513,"overlay-positioning"],placement:[513],scale:[513],menuButtonEl:[32],activeMenuItemIndex:[32],setFocus:[64]},[[9,"pointerdown","closeCalciteActionMenuOnClick"]]]);function v(){if("undefined"==typeof customElements)return;["calcite-action-menu","calcite-action","calcite-icon","calcite-loader","calcite-popover"].forEach((t=>{switch(t){case"calcite-action-menu":customElements.get(t)||customElements.define(t,g);break;case"calcite-action":customElements.get(t)||l.defineCustomElement();break;case"calcite-icon":customElements.get(t)||c.defineCustomElement();break;case"calcite-loader":customElements.get(t)||s.defineCustomElement();break;case"calcite-popover":customElements.get(t)||r.defineCustomElement()}}))}v(),t.ActionMenu=g,t.SLOTS=d,t.defineCustomElement=v}));