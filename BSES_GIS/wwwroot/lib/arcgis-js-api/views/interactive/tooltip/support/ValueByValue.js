/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../chunks/tslib.es6","../../../../core/accessorSupport/decorators/property","../../../../core/accessorSupport/ensureType","../../../../core/arrayUtils","../../../../core/has","../../../../core/accessorSupport/decorators/subclass","../css","../../../../widgets/Widget","../../../../widgets/support/widgetUtils","../../../../widgets/support/jsxFactory"],(function(e,t,r,s,o,a,u,i,l,p,c,n){"use strict";const d={base:`${l.BASE}-value-by-value`};e.ValueByValue=function(e){function r(){var t;return(t=e.apply(this,arguments)||this).divider="×",t}return t._inherits(r,e),r.prototype.render=function(){return n.tsx("div",{class:d.base},n.tsx("span",null,this.left),n.tsx("span",null,this.divider),n.tsx("span",null,this.right))},t._createClass(r)}(p),r.__decorate([s.property()],e.ValueByValue.prototype,"left",void 0),r.__decorate([s.property()],e.ValueByValue.prototype,"divider",void 0),r.__decorate([s.property()],e.ValueByValue.prototype,"right",void 0),e.ValueByValue=r.__decorate([i.subclass("esri.views.interactive.tooltip.support.ValueByValue")],e.ValueByValue),Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));