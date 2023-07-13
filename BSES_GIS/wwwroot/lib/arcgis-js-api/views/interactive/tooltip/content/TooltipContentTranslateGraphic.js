/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../chunks/tslib.es6","../../../../core/Logger","../../../../core/accessorSupport/ensureType","../../../../core/arrayUtils","../../../../core/has","../../../../core/Error","../../../../core/accessorSupport/decorators/subclass","../css","./TooltipContent","../support/TooltipContentWithHelpMessage","../support/TooltipField","../../../../widgets/support/widgetUtils","../../../../widgets/support/jsxFactory"],(function(t,e,s,o,i,r,n,a,l,p,c,u,T,h,g){"use strict";const d=`${p.CONTENT}--translate-graphic`,C={base:`${p.CONTENT} ${d}`};t.TooltipContentTranslateGraphic=function(t){function s(){return t.apply(this,arguments)||this}return e._inherits(s,t),s.prototype.render=function(){const{info:t}=this,{visibleElements:e}=t.tooltipOptions,s=this._messagesTooltip.sketch;return g.tsx(u.TooltipContentWithHelpMessage,{className:C.base,helpMessage:this._getHelpMessage()},e.distance&&g.tsx(T.TooltipField,{title:s.distance,value:this._formatLength(t.distance)}))},e._createClass(s)}(c.TooltipContent),t.TooltipContentTranslateGraphic=s.__decorate([l.subclass("esri.views.interactive.tooltip.content.TooltipContentTranslateGraphic")],t.TooltipContentTranslateGraphic),Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})}));
