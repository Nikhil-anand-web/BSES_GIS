/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../intl","../../../core/mathUtils","../../../core/timeUtils","../../../core/accessorSupport/decorators/property","../../../core/accessorSupport/ensureType","../../../core/arrayUtils","../../../core/has","../../../core/accessorSupport/decorators/subclass","../../../intl/duration","../../Widget","../css","../../support/widgetUtils","../../support/decorators/messageBundle","../../support/jsxFactory","../../../intl/substitute"],(function(t,e,o,s,r,n,a,i,c,l,d,u,p,m,h,S,T,_){"use strict";const w=n.convertTime(1,"minutes","milliseconds"),y=n.convertTime(15,"minutes","milliseconds");t.ShadowTooltipContent=function(t){function o(e,o){var s;return(s=t.call(this,e,o)||this).accumulatedShadowTime=null,s._messages=null,s}return e._inherits(o,t),o.prototype.render=function(){const t=this._formattedContent;return T.tsx("div",{class:m.TOOLTIP_CSS.base},t&&T.tsx("div",{class:m.TOOLTIP_CSS.content},t))},e._createClass(o,[{key:"_formattedContent",get:function(){const t=this._messages,e=this.accumulatedShadowTime;if(null==t||null==e)return null;const o=e<y?r.roundToNearest(e,w):r.roundToNearest(e,y);return _.substitute(t.timeInShadow,{duration:u.formatDuration(o)})}}]),o}(p),o.__decorate([a.property()],t.ShadowTooltipContent.prototype,"accumulatedShadowTime",void 0),o.__decorate([a.property()],t.ShadowTooltipContent.prototype,"view",void 0),o.__decorate([a.property(),S.messageBundle("esri/widgets/ShadowCast/t9n/ShadowCast")],t.ShadowTooltipContent.prototype,"_messages",void 0),o.__decorate([a.property({readOnly:!0})],t.ShadowTooltipContent.prototype,"_formattedContent",null),t.ShadowTooltipContent=o.__decorate([d.subclass("esri.widgets.ShadowCast.components.ShadowTooltipContent")],t.ShadowTooltipContent),Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})}));
