/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../intl","../../../core/arrayUtils","../../../core/Error","../../../core/handleUtils","../../../core/maybe","../../../core/promiseUtils","../../../core/unitFormatUtils","../../../core/unitUtils","../css","./constants","./intlUtils","./niceScale","../../support/chartUtils","../../support/widgetUtils","../../../support/themeUtils","../../../intl/substitute","../../../intl/number"],(function(e,i,t,n,o,a,l,s,r,d,c,u,m,p,x,g,f,h){"use strict";const b="#f8f8f8",v="#a9a9a9",y="#323232",T="line",C="fill",A=15,S=12,L=30,k=.001,z=.5,P=.5,w=30,F=.02,M=.02,Y={sideSpacing:A,paddingBottom:0,paddingLeft:0,paddingRight:0,paddingTop:0,axisFontSize:9,axisFontWeight:"400",axisGridStroke:"#f4f4f4",axisLabelsFontSize:9,axisLabelsFontWeight:"400",axisLabelsColor:v,axisTooltipFontSize:12,axisTooltipBackgroundColor:y,axisTooltipLabelColor:b,axisTooltipPaddingTop:Math.round(S/4),axisTooltipPaddingBottom:Math.round(S/4),axisTooltipPaddingHorizontal:Math.round(A/4),xAxisMinGridDistance:50,xAxisLabelsSpacing:Math.round(S/2),xAxisMinLabelPosition:.05,xAxisMaxLabelPosition:.9,yAxisMinGridDistance:30,yAxisLabelSpacing:Math.round(A/4),yAxisMinLabelPosition:0,yAxisMaxLabelPosition:.8,seriesTooltipFontSize:12,seriesTooltipBackgroundColor:b,seriesTooltipLabelColor:y,seriesFillLighten:.9,seriesTooltipSpacing:S/2,seriesTooltipPaddingVertical:Math.round(A/4),seriesTooltipPaddingHorizontal:Math.round(A/4),tooltipBorderRadius:0},I={...Y,axisGridStroke:y,axisLabelsColor:v,axisTooltipBackgroundColor:y,axisTooltipLabelColor:b,seriesTooltipBackgroundColor:y,seriesTooltipLabelColor:b,seriesFillLighten:-.75},H={minX:void 0,maxX:void 0,minY:void 0,maxY:void 0};async function X(e){const i=await p.loadChartsModule();if(!i)throw new n("elevation-profile:load-failed","Could not load amCharts");const{am4core:t,am4charts:a}=i;l.throwIfAborted(e.abortOptions);const{options:s}=t;s.minPolylineStep=z,s.autoSetClassName=!0,s.animationsEnabled=!1;const r=g.isDarkTheme(),d=r?I:Y;r&&t.useTheme(i.am4themes_dark);const c=t.create(e.container,a.XYChart);c.arrangeTooltips=!1,c.preloader.disabled=!0,c.zoomOutButton.disabled=!0;const u=x.isRTL(e.container);c.rtl=u,c.padding(d.paddingTop,u?d.paddingLeft:d.paddingRight,d.paddingBottom,u?d.paddingRight:d.paddingLeft);const m=c.plotContainer.background;m.strokeWidth=0,m.strokeOpacity=0,m.stroke=null;const f=c.xAxes.push(new a.ValueAxis),h=c.yAxes.push(new a.ValueAxis),b={params:e,amCharts4Index:i,amChart:c,xAxis:f,yAxis:h,series:new Map,data:null,messages:null,theme:d,zooming:!1,pointerIsOver:!1};c.cursor=W(b),D(b),O(b),U(b);const v=[q(b,e.onRangeChange),K(b,e.onCursorPositionChange),J(b)];let y=null,T=!1;const C=()=>{null!=y&&("undefined"!=typeof window&&"cancelIdleCallback"in window?window.cancelIdleCallback(y):clearTimeout(y),y=null)};return{...b,destroy(){T=!0,C(),o.handlesGroup(v).remove(),c.dispose()},update(e){if(e.data===b.data&&e.messages===b.messages)return;if(C(),T)return;const i=()=>{T||(y=null,B(b,e))};y="undefined"!=typeof window&&"requestIdleCallback"in window?window.requestIdleCallback(i,{timeout:w}):setTimeout(i,w)},zoomOut(){T||(b.yAxis.zoom({start:0,end:1},!1,!0),b.xAxis.zoom({start:0,end:1},!1,!0))}}}function W(e){const i=new e.amCharts4Index.am4charts.XYCursor;return i.trackable=!0,i.lineY.disabled=!0,i.behavior="zoomXY",i}function D(e){const i=e.theme,t=e.amChart.tooltip,{am4core:n}=e.amCharts4Index;t.id="series-tooltip",t.fitPointerToBounds=!0,t.pointerOrientation="vertical",t.zIndex=-1,t.getFillFromObject=!1,t.label.fontSize=i.seriesTooltipFontSize,t.label.fill=n.color(i.seriesTooltipLabelColor),t.label.padding(i.seriesTooltipPaddingVertical,i.seriesTooltipPaddingHorizontal,i.seriesTooltipPaddingVertical,i.seriesTooltipPaddingHorizontal),t.background.cornerRadius=i.tooltipBorderRadius,t.background.stroke=null,t.background.fill=n.color(i.seriesTooltipBackgroundColor),t.background.padding(0,0,0,0),t.adapter.add("dy",(()=>i.seriesTooltipSpacing*(t.background.pointerY<=0?1:-1))),x.isRTL(e.params.container)&&(t.label.textAlign="middle")}function O(e){const{xAxis:i,theme:t}=e,{am4core:n}=e.amCharts4Index;i.numberFormatter=ae(e,"distance"),i.strictMinMax=!0,i.cursorTooltipEnabled=!1,i.title.visible=!1;const o=i.renderer;o.line.visible=!1,o.minGridDistance=t.xAxisMinGridDistance,o.minLabelPosition=t.xAxisMinLabelPosition,o.maxLabelPosition=t.xAxisMaxLabelPosition,o.fontWeight=t.axisFontWeight,o.fontSize=t.axisFontSize,o.baseGrid.disabled=!0;const a=o.labels.template;a.fontSize=t.axisLabelsFontSize,a.fontWeight=t.axisLabelsFontWeight,a.fill=n.color(t.axisLabelsColor),a.paddingTop=t.xAxisLabelsSpacing,a.horizontalCenter="left",a.paddingLeft=0;const l=i.tooltip;l.id="axis-tooltip",l.background.fill=n.color(t.axisTooltipBackgroundColor),l.background.stroke=null,l.background.padding(0,0,0,0),l.label.fontSize=t.axisTooltipFontSize,l.label.fill=n.color(t.axisTooltipLabelColor),l.label.padding(t.axisTooltipPaddingTop,t.axisTooltipPaddingHorizontal,t.axisTooltipPaddingBottom,t.axisTooltipPaddingHorizontal);const s=o.grid.template;s.strokeOpacity=1,s.stroke=n.color(t.axisGridStroke)}function U(e){const{yAxis:i,theme:t}=e,{am4core:n}=e.amCharts4Index;i.numberFormatter=ae(e,"elevation"),i.title.visible=!1,i.cursorTooltipEnabled=!1,i.strictMinMax=!0,i.baseValue=c.getConfig().noDataValue;const o=i.renderer;o.inside=!0,o.line.opacity=0,o.line.visible=!1,o.minGridDistance=t.yAxisMinGridDistance,o.minLabelPosition=t.yAxisMinLabelPosition,o.maxLabelPosition=t.yAxisMaxLabelPosition,o.fontWeight=t.axisFontWeight,o.fontSize=t.axisFontSize,o.baseGrid.disabled=!0;const a=o.labels.template;a.fontSize=t.axisLabelsFontSize,a.fontWeight=t.axisLabelsFontWeight,a.fill=n.color(t.axisLabelsColor),a.verticalCenter="bottom",a.paddingLeft=t.yAxisLabelSpacing,a.paddingBottom=0;const l=o.grid.template;l.strokeOpacity=1,l.stroke=n.color(t.axisGridStroke),x.isRTL(e.params.container)&&(o.opposite=!0,a.textAlign="middle",a.paddingLeft=0,a.paddingRight=t.yAxisLabelSpacing)}function B(e,{data:i,messages:t}){const{htmlContainer:n}=e.amChart;if(!n)return;const o=null!=i&&i.refined;e.amChart.cursor.disabled=!o,n.classList.toggle(d.CHART_CSS.cursorEnabled,o);const l=e.data!==i,s=a.applySome(e.data,(e=>e.effectiveUnits))!==a.applySome(i,(e=>e.effectiveUnits));e.data=i,e.messages=t,l&&(E(e),Z(e)),s&&(e.yAxis.invalidateLabels(),e.xAxis.invalidateLabels()),ee(e)}function E(e){const{xAxis:i,yAxis:t}=e,{minX:n,maxX:o,minY:a,maxY:l}=R({data:e.data,pixelWidth:i.pixelWidth,pixelHeight:t.pixelHeight});i.min=n,i.max=o,t.min=a,t.max=l}function R({data:e,pixelWidth:i,pixelHeight:t}){if(null==e)return H;const n=e.statistics,o=0,l=a.applySome(n,(e=>e.maxDistance));let s=a.applySome(n,(e=>e.minElevation)),d=a.applySome(n,(e=>e.maxElevation));if(null==l||null==s||null==d)return H;const u=Math.max(l-o,k);let p=Math.max(d-s,k);const x=e.effectiveUnits;if(e.dynamicElevationRange){const e=r.convertUnit(u,x.distance,x.elevation);p=Math.max(p,e/c.getConfig().maxChartRatio)}return s-=M*p,d=s+p+F*p,[s,d]=m.niceScale(s,d,10),p=d-s,e.uniformScaling?G({data:e,bounds:{minX:o,maxX:l,minY:s,maxY:d},pixelWidth:i,pixelHeight:t,centered:!0}):{minX:o,maxX:o+u,minY:s,maxY:s+p}}function G({data:e,bounds:i,pixelWidth:t,pixelHeight:n,centered:o}){if(null==e)return i;let{minX:a,maxX:l,minY:s,maxY:d}=i;if(null==a||null==l||null==s||null==d)return H;const c=l-a,u=d-s,m=e.effectiveUnits,p=r.convertUnit(u,m.elevation,m.distance)/n/(c/t);return p>=1?[a,l]=V([a,l],p,o):[s,d]=V([s,d],1/p,o),{minX:a,maxX:l,minY:s,maxY:d}}function V([e,i],t,n){const o=(i-e)*t;if(n){const t=(e+i)/2-o/2;return[t,t+o]}return[e,e+o]}function Z(e){const{amChart:i,data:t}=e;if(null==t||0===t.lines.length)return void i.series.clear();const n=new Map,o=new Set(i.series.values),l=t.lines.length;for(let s=0;s<l;s++){const r=t.lines[s];let d=e.series.get(r.id);d?(a.applySome(d.fill,(e=>o.delete(e))),o.delete(d.line)):(d=N(e,r),a.applySome(d.fill,(e=>i.series.push(e))),i.series.push(d.line)),n.set(d.id,d);const c=l-s-1;a.applySome(d.fill,(e=>e.zIndex=c)),d.line.zIndex=l+c,$(e,d,r)}e.series=n;for(const a of o)i.series.removeValue(a)}function $(e,{line:i,fill:t},n){const{theme:o}=e,{am4core:l}=e.amCharts4Index,{r:s,g:r,b:d,a:c}=n.color,u=l.color({r:s,g:r,b:d,a:c}),m=n.samples??new Array,p=m.length>0;i.stroke=u,i.visible=p,a.applySome(t,(e=>{e.visible=p,e.fill=u.lighten(o.seriesFillLighten)}));const x=m.length,g=i.data;if(g.length===x){let e=!1;for(let i=0;i<x;++i){const t=g[i],n=m[i];e=e||null!=t.elevation!=(null!=n.elevation),j(t,n)}e?(i.invalidateData(),a.applySome(t,(e=>e.invalidateData()))):(i.invalidateRawData(),a.applySome(t,(e=>e.invalidateRawData())))}else i.data=m,a.applySome(t,(e=>e.data=m))}function j(e,i){e.x=i.x,e.y=i.y,e.z=i.z,e.distance=i.distance,e.elevation=i.elevation}function N(e,i){const{id:t}=i,n=_(e,`${T}-${t}`);n.strokeWidth=i.chartStrokeWidth,n.dy=i.chartStrokeOffsetY;let o=null;return i.chartFillEnabled&&(o=_(e,`${C}-${t}`),o.fillOpacity=1),{id:t,line:n,fill:o}}function _(e,i){const t=new e.amCharts4Index.am4charts.LineSeries;t.id=i,t.showOnInit=!1,t.simplifiedProcessing=!0,t.minDistance=P,t.excludeFromTotal=!0,t.clickable=!1,t.contextMenuDisabled=!0,t.cursorHoverEnabled=!1,t.cursorTooltipEnabled=!1,t.connect=!1,t.fill=null,t.stroke=null;const n="distance";t.dataFields.valueX=n;const o="elevation";return t.dataFields.valueY=o,t}function q(e,i){const{amChart:t,xAxis:n,yAxis:a}=e;let l=!1;const s=()=>{const{data:i}=e;if(!l||null==i||!i.uniformScaling)return;l=!1;const{minX:o,maxX:s,minY:r,maxY:d}=G({data:e.data,bounds:{minX:n.minZoomed,maxX:n.maxZoomed,minY:a.minZoomed,maxY:a.maxZoomed},pixelWidth:n.pixelWidth,pixelHeight:a.pixelHeight,centered:!0});null!=o&&null!=s&&n.zoomToValues(o,s,!0),null!=r&&null!=d&&a.zoomToValues(r,d,!0),t.validate(),ee(e)},r=()=>{i(e.xAxis.zoomFactor,e.yAxis.zoomFactor)},d=i=>{e.zooming=i,ee(e)},c=[t.events.on("down",(()=>d(!0))),t.events.on("up",(()=>d(!1))),t.cursor.events.on("zoomended",(()=>{l=!0})),n.events.on("startendchanged",s),a.events.on("startendchanged",s),n.events.on("rangechangeended",r),a.events.on("rangechangeended",r)];return o.makeHandle((()=>{c.forEach((e=>e.dispose()))}))}function J({xAxis:e,yAxis:i}){const t=e=>()=>{e.renderer.grid.each((e=>{e.visible="none"!==e.dataItem.label.dom.getAttribute("display")}))},n=[e.events.on("rangechangeended",t(e)),e.events.on("validated",t(e)),i.events.on("rangechangeended",t(i)),i.events.on("validated",t(i))];return o.makeHandle((()=>{n.forEach((e=>e.dispose()))}))}function K(e,i){const{amChart:t,xAxis:n,yAxis:a}=e,{cursor:l,events:s}=t,r=i=>{e.pointerIsOver=i,ee(e)},d=()=>{r(!1),i(null,null)},c=[l.events.on("cursorpositionchanged",(()=>{if(!e.pointerIsOver)return;ee(e);let t=n.toAxisPosition(l.xPosition),o=a.toAxisPosition(l.yPosition);const s=e.data;if(null!=s&&null!=s.statistics){const{maxDistance:e,minElevation:i,maxElevation:l}=s.statistics;null!=e&&(t=Q(t,n.minZoomed,n.maxZoomed,0,e)),null!=i&&null!=l&&(o=Q(o,a.minZoomed,a.maxZoomed,i,l))}i(t,o)})),s.on("over",(()=>r(!0))),s.on("out",d),s.on("blur",d)];return o.makeHandle((()=>{c.forEach((e=>e.dispose()))}))}function Q(e,i,t,n,o){return(i+e*(t-i)-n)/(o-n)}function ee(e){const{amChart:i,xAxis:t,data:n,theme:o,zooming:a,pointerIsOver:l}=e;if(e.amChart.tooltip.hide(),e.xAxis.hideTooltip(),!l)return;if(a)return;if(null==n||!n.refined)return;const s=ie(e);if(null!=s){const{cursor:n}=i,a=i.tooltip;n.show(0),n.validate(),a.text=s.text,a.show(0),a.validate();const l=s.y-a.contentHeight-o.seriesTooltipSpacing;a.pointerOrientation=l<L?"up":"down",a.pointTo(s,!0),a.validate();const r=t.tooltip;r.text=oe(e),r.show(0),r.validate()}}function ie(e){const{amChart:i,yAxis:t,data:n}=e;if(null==n)return null;const o=n.lines.map((i=>({line:i,y:a.applySome(le(e,i),(e=>e.elevation))}))).sort(te),l=o.length?o[0].y:null;if(null==l)return null;const s=i.cursor,r=t.measuredHeight,d=r+i.pixelPaddingTop;return{text:o.map((({y:i,line:t})=>ne(e,t,i))).join("\n"),x:s.point.x+s.parent.pixelX+i.pixelPaddingLeft,y:d-t.valueToPosition(l)*r}}function te({y:e},{y:i}){return null==e?1:null==i?-1:i-e}function ne(e,i,t){const{data:n,messages:o}=e;if(null==n||null==o)return"";const a=c.getConfig().formatPrecision,l=f.substitute(o.chartTooltip,{name:u.getTranslatedLineTitle(i,o),elevation:null!=t?s.formatDecimal(o,t,n.effectiveUnits.elevation,a):c.NOT_AVAILABLE});return`[${i.color.toHex()}]●[/] ${l}`}function oe(e){const{data:i,messages:t}=e;if(null==i||null==t)return"";const n=i.lines[0],o=n?le(e,n):null,a=c.getConfig().formatPrecision;return null!=o?s.formatDecimal(t,o.distance,i.effectiveUnits.distance,a):"-"}function ae(e,i){const t=e.xAxis.numberFormatter.clone();return t.format=(t,n,o)=>{const{messages:a,data:l}=e;if(null==a||null==l||"string"==typeof t)return"";return`${h.formatNumber(t,{maximumFractionDigits:o})} ${s.unitName(a,l.effectiveUnits[i],"abbr")}`},t}function le({amChart:e,xAxis:i},n){const o=n.samples??[];if(0===o.length)return null;const a=i.toAxisPosition(e.cursor.xPosition),l=i.positionToValue(a);return t.binaryFindClosest(o,l,(e=>e.distance))}e.createChart=X,e.getAdjustedBounds=R,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
