/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","./index","./dom","./guid","./key","./locale","./t9n","./icon","./switch"],(function(e,t,i,a,n,c,o,s,l){"use strict";
/*!
   * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
   * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
   * v1.4.2
   */const r={content:"content",invalid:"invalid",toggle:"toggle",toggleSwitch:"toggle--switch",toggleSwitchContent:"toggle--switch__content",toggleSwitchText:"toggle--switch__text",sectionHeader:"section-header",sectionHeaderText:"section-header__text",statusIcon:"status-icon",valid:"valid"},d={menuOpen:"chevron-down",menuClosedLeft:"chevron-left",menuClosedRight:"chevron-right",valid:"check-circle",invalid:"exclamation-mark-triangle"},g="@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-right{0%{opacity:0;transform:translate3D(-5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-left{0%{opacity:0;transform:translate3D(5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-right{animation-name:in-right}.calcite-animate__in-left{animation-name:in-left}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:var(--calcite-app-z-index-dropdown)}:host([hidden]){display:none}:host{box-sizing:border-box;display:block;background-color:var(--calcite-ui-foreground-1);font-size:var(--calcite-font-size--1);color:var(--calcite-ui-text-2)}:host([open]){border-width:0px;border-block-end-width:1px;border-style:solid;border-block-end-color:var(--calcite-ui-border-3)}:host(:last-child){border-block-end-width:0px}.toggle{inline-size:100%;border-width:0px;background-color:transparent;font-family:var(--calcite-sans-family);font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-2)}.toggle--switch,.section-header{margin-inline:0px;margin-block:0.25rem;display:flex;cursor:pointer;-webkit-user-select:none;user-select:none;align-items:center;padding-inline:0px;padding-block:0.5rem;font-size:var(--calcite-font-size--1);outline-color:transparent}.toggle--switch:focus,.section-header:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-ui-brand));outline-offset:calc(\n            2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-ui-focus-offset-invert),\n                1\n              )\n            )\n          )}.toggle--switch:hover,.section-header:hover{color:var(--calcite-ui-text-1)}.section-header .status-icon{align-self:flex-end}.section-header__text{margin-inline:0.75rem;margin-block:0px;flex:1 1 auto;text-align:initial;word-wrap:anywhere}.toggle--switch calcite-switch{pointer-events:none;margin-inline-start:0.25rem}.toggle--switch .status-icon{margin-inline-start:0.5rem}.toggle--switch__content{display:flex;flex:1 1 auto;align-items:center}.status-icon.valid{color:var(--calcite-ui-success)}.status-icon.invalid{color:var(--calcite-ui-danger)}",m=t.proxyCustomElement(class extends t.H{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteBlockSectionToggle=t.createEvent(this,"calciteBlockSectionToggle",6),this.guid=a.guid(),this.handleHeaderKeyDown=e=>{n.isActivationKey(e.key)&&(this.toggleSection(),e.preventDefault(),e.stopPropagation())},this.toggleSection=()=>{this.open=!this.open,this.calciteBlockSectionToggle.emit()},this.open=!1,this.status=void 0,this.text=void 0,this.toggleDisplay="button",this.messages=void 0,this.messageOverrides=void 0,this.effectiveLocale=void 0,this.defaultMessages=void 0}onMessagesChange(){}effectiveLocaleChange(){o.updateMessages(this,this.effectiveLocale)}connectedCallback(){c.connectLocalized(this),o.connectMessages(this)}disconnectedCallback(){c.disconnectLocalized(this),o.disconnectMessages(this)}async componentWillLoad(){await o.setUpMessages(this)}renderStatusIcon(){const{status:e}=this,i=d[e]??!1,a={[r.statusIcon]:!0,[r.valid]:"valid"==e,[r.invalid]:"invalid"==e};return i?t.h("calcite-icon",{class:a,icon:i,scale:"s"}):null}render(){const{el:e,messages:a,open:n,text:c,toggleDisplay:o}=this,s=i.getElementDir(e),l=n?d.menuOpen:"rtl"===s?d.menuClosedLeft:d.menuClosedRight,g=n?a.collapse:a.expand,{guid:m}=this,h=`${m}-region`,u=`${m}-button`,f="switch"===o?t.h("div",{"aria-controls":h,"aria-label":g,class:{[r.toggle]:!0,[r.toggleSwitch]:!0},id:u,onClick:this.toggleSection,onKeyDown:this.handleHeaderKeyDown,tabIndex:0,title:g},t.h("div",{class:r.toggleSwitchContent},t.h("span",{class:r.toggleSwitchText},c)),t.h("calcite-switch",{checked:n,label:g,scale:"s",tabIndex:-1}),this.renderStatusIcon()):t.h("button",{"aria-controls":h,"aria-label":g,class:{[r.sectionHeader]:!0,[r.toggle]:!0},id:u,name:g,onClick:this.toggleSection},t.h("calcite-icon",{icon:l,scale:"s"}),t.h("span",{class:r.sectionHeaderText},c),this.renderStatusIcon());return t.h(t.Host,null,f,t.h("section",{"aria-expanded":i.toAriaBoolean(n),"aria-labelledby":u,class:r.content,hidden:!n,id:h},t.h("slot",null)))}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}static get style(){return g}},[1,"calcite-block-section",{open:[1540],status:[513],text:[1],toggleDisplay:[513,"toggle-display"],messages:[1040],messageOverrides:[1040],effectiveLocale:[32],defaultMessages:[32]}]);function h(){if("undefined"==typeof customElements)return;["calcite-block-section","calcite-icon","calcite-switch"].forEach((e=>{switch(e){case"calcite-block-section":customElements.get(e)||customElements.define(e,m);break;case"calcite-icon":customElements.get(e)||s.defineCustomElement();break;case"calcite-switch":customElements.get(e)||l.defineCustomElement()}}))}h();const u=m,f=h;e.CalciteBlockSection=u,e.defineCustomElement=f,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
