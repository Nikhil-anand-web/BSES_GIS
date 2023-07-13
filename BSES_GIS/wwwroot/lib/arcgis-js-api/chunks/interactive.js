/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports"],(function(e){"use strict";
/*!
   * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
   * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
   * v1.4.2
   */function t(){const{disabled:e}=this;e||HTMLElement.prototype.click.call(this)}function n(e){e.preventDefault()}const i=["mousedown","mouseup","click"];function o(e){const{disabled:t}=e.target;t&&(e.stopImmediatePropagation(),e.preventDefault())}const l={capture:!0};function r(e,r=!1){if(e.disabled)return e.el.setAttribute("tabindex","-1"),e.el.setAttribute("aria-disabled","true"),e.el.contains(document.activeElement)&&document.activeElement.blur(),e.el.click=t,e.el.addEventListener("pointerdown",n,l),void i.forEach((t=>e.el.addEventListener(t,o,l)));e.el.click=HTMLElement.prototype.click,e.el.removeEventListener("pointerdown",n,l),i.forEach((t=>e.el.removeEventListener(t,o,l))),"function"==typeof r?e.el.setAttribute("tabindex",r.call(e)?"0":"-1"):!0===r?e.el.setAttribute("tabindex","0"):!1===r&&e.el.removeAttribute("tabindex"),e.el.removeAttribute("aria-disabled")}e.updateHostInteraction=r}));
