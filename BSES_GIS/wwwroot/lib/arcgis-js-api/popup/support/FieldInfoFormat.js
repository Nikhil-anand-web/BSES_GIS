/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/Clonable","../../core/JSONSupport","../../core/accessorSupport/decorators/property","../../core/accessorSupport/ensureType","../../core/arrayUtils","../../core/has","../../core/accessorSupport/decorators/enumeration","../../core/accessorSupport/decorators/subclass","../../intl/date","../../intl/number"],(function(t,r,e,o,a,i,n,s,m,c,u,p){"use strict";let l=function(r){function e(t){var e;return(e=r.call(this,t)||this).dateFormat=null,e.digitSeparator=!1,e.places=null,e}t._inherits(e,r);var o=e.prototype;return o.formatNumber=function(t){return p.formatNumber(t,p.convertNumberFormatToIntlOptions(this))},o.formatDate=function(t,r=!1){return this.dateFormat?u.formatDate(t,{...u.convertDateFormatToIntlOptions(this.dateFormat),...r&&u.utcTimeZone}):this.formatNumber(t)},o.formatDateOnly=function(t){const r=(this.dateFormat&&u.convertDateFormatToIntlOptions(this.dateFormat))??void 0;return u.formatDateOnly(t,r)},o.formatTimeOnly=function(t){const r=(this.dateFormat&&u.convertDateFormatToIntlOptions(this.dateFormat))??void 0;return u.formatTimeOnly(t,r)},o.formatTimestamp=function(t){const r=(this.dateFormat&&u.convertDateFormatToIntlOptions(this.dateFormat))??void 0;return u.formatTimestamp(t,r)},o.formatRasterPixelValue=function(t){return t.includes("-")?t:t.trim().includes(",")?this._formatDelimitedString(t,",",", "):t.trim().includes(";")?this._formatDelimitedString(t,";","; "):t.trim().includes(" ")?this._formatDelimitedString(t," "," "):this.formatNumber(Number(t))},o._formatDelimitedString=function(t,r,e){return t&&r&&e?t.trim().split(r).map((t=>this.formatNumber(Number(t)))).join(e):t},t._createClass(e)}(e.ClonableMixin(o.JSONSupport));r.__decorate([m.enumeration(u.dateFormatJSONMap)],l.prototype,"dateFormat",void 0),r.__decorate([a.property({type:Boolean,json:{write:!0}})],l.prototype,"digitSeparator",void 0),r.__decorate([a.property({type:i.Integer,json:{write:!0}})],l.prototype,"places",void 0),l=r.__decorate([c.subclass("esri.popup.support.FieldInfoFormat")],l);return l}));