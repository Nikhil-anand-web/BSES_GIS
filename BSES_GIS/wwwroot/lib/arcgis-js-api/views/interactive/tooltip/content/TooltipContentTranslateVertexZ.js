/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../chunks/tslib.es6","../../../../core/Logger","../../../../core/accessorSupport/ensureType","../../../../core/arrayUtils","../../../../core/has","../../../../core/Error","../../../../core/accessorSupport/decorators/subclass","../css","./TooltipContent","../support/TooltipContentWithHelpMessage","../support/TooltipField","../../../../widgets/support/widgetUtils","../../../../widgets/support/jsxFactory"],(function(t,e,o,s,i,r,n,l,a,p,c,u,T,h,g){"use strict";const d=`${p.CONTENT}--translate-vertex`,v={base:`${p.CONTENT} ${d}`};t.TooltipContentTranslateVertexZ=function(t){function o(){return t.apply(this,arguments)||this}return e._inherits(o,t),o.prototype.render=function(){const{distance:t,elevation:e,tooltipOptions:o}=this.info,{visibleElements:s}=o,i=this._messagesTooltip.sketch;return g.tsx(u.TooltipContentWithHelpMessage,{className:v.base,helpMessage:this._getHelpMessage()},s.distance&&g.tsx(T.TooltipField,{title:i.distance,value:this._formatRelativeVerticalLength(t)}),s.elevation&&null!=e&&g.tsx(T.TooltipField,{title:i.elevation,value:this._formatVerticalLength(e)}))},e._createClass(o)}(c.TooltipContent),t.TooltipContentTranslateVertexZ=o.__decorate([a.subclass("esri.views.interactive.tooltip.content.TooltipContentTranslateVertexZ")],t.TooltipContentTranslateVertexZ),Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})}));