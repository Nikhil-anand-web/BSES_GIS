/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports"],(function(e){"use strict";const t="esri-elevation-profile",o={esriWidget:"esri-widget--panel esri-widget",esriWidgetDisabled:"esri-widget--disabled",buttonDisabled:"esri-button--disabled",widgetIcon:"esri-icon-elevation-profile",base:`${t}`,portrait:`${t}--portrait`,refined:`${t}--refined`,mainContainer:`${t}__main-container`,promptContainer:`${t}__prompt-container`,header:`${t}__header`,zoomOutButton:`${t}__zoom-out-button esri-icon-zoom-out-magnifying-glass`,clearButton:`${t}__clear-button esri-icon-trash`,actionButton:`${t}__action-button esri-button`,sketchButton:`${t}__sketch-button esri-button--primary`,sketchCancelButton:`${t}__sketch-cancel-button esri-button--secondary`,sketchDoneButton:`${t}__sketch-done-button esri-button--primary`,selectButton:`${t}__select-button esri-button--secondary`,selectCancelButton:`${t}__select-cancel-button esri-button--secondary`,chartContainer:`${t}__chart-container`,chartSpinner:`${t}__chart-spinner esri-icon-loading-indicator esri-rotating`,chartSpinnerVisible:`${t}__chart-spinner--visible`,chartSpinnerSmall:`${t}__chart-spinner--small`,footer:`${t}__footer`},i={line:"amcharts-LineSeries",cursorEnabled:"amcharts-cursor--enabled",axisTooltip:"amcharts-axis-tooltip",seriesTooltip:"amcharts-series-tooltip"},n={base:"esri-elevation-profile-legend"},a="esri-elevation-profile-legend-item",r={base:a,disabled:`${a}--disabled`,expanded:`${a}--expanded`,colorIndicator:`${a}__color-indicator`,header:`${a}__header`,content:`${a}__content`,collapseToggle:`${a}__collapse-toggle esri-button esri-button--tertiary`,collapseToggleIcon:`${a}__collapse-toggle__icon esri-icon-down`,label:`${a}__label`,labelDisabled:`${a}__label--disabled`,checkbox:`${a}__checkbox`},s="esri-elevation-profile-statistics",c={base:s,statistic:`${s}__statistic`,statisticLabel:`${s}__statistic__label`,statisticValue:`${s}__statistic__value`,slopeValue:`${s}__slope-value`,slopeUpIcon:"esri-icon-arrow-up",slopeDownIcon:"esri-icon-arrow-down"},l="esri-elevation-profile-settings",_={base:`${l} esri-icon-handle-vertical`,popoverContent:`${l}__popover-content`,select:`${l}__select esri-select`,selectLabel:`${l}__select-label`,checkboxLabel:`${l}__checkbox-label`,checkbox:`${l}__checkbox`,uniformChartScalingCheckbox:`${l}__uniform-chart-scaling-checkbox`};e.CHART_CSS=i,e.CSS=o,e.LEGEND_CSS=n,e.LEGEND_ITEM_BASE=a,e.LEGEND_ITEM_CSS=r,e.SETTINGS_CSS=_,e.STATISTICS_CSS=c,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
