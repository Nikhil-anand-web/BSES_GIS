/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../chunks/_rollupPluginBabelHelpers","./ArcadeDate","../layers/support/FieldsIndex","../time/TimeReference","../chunks/datetime","../time/timeReferenceUtils"],(function(e,n,t,i,a,r,s){"use strict";function o(e){return e instanceof a}function d(e){if(!e)return null;if(o(e)&&(e=f(e.toJSON())),e instanceof r.Zone)return e;if("unknown"===e.toLowerCase())return t.UnknownTimeZone.instance;if("system"===e.toLowerCase())return r.SystemZone.instance;if("utc"===e.toLowerCase())return r.FixedOffsetZone.utcInstance;if(/^[\+\-]?[0-9]{1,2}([:][0-9]{2})?$/.test(e)){const n=r.FixedOffsetZone.parseSpecifier("UTC"+(e.startsWith("+")||e.startsWith("-")?"":"+")+e);if(n)return n}const n=r.IANAZone.create(e);if(!n.isValid)throw new t.ArcadeDateError(t.ArcadeDateErrorCodes.TimeZoneNotRecognised);return n}function f(e){return e?.timeZoneIANA?e?.timeZoneIANA:e?.timeZone?s.convertLegacyTimeZone(e,""):""}let l=function(){function e(){this.dateTimeReferenceMetaData=null,this._fieldTimeZoneIndex={},this._fieldIndex=null,this._ianaPreferred=null,this._ianaTimeInfo=null,this._ianaEditFields=null,this._ianaLayerDateFields=null}e.create=function(n,t){const a=new e;return a.dateTimeReferenceMetaData=t,a._fieldIndex=n instanceof i?n:new i(n),a},e.createFromLayer=function(n){if(!n)return null;if(!n.fieldsIndex)return!n.declaredClass&&n.fields?e.create(n.fields,n):null;const t=new e;return t._fieldIndex=n.fieldsIndex,t.dateTimeReferenceMetaData={timeInfo:n?.timeInfo?.toJSON()??null,editFieldsInfo:n?.editFieldsInfo?.toJSON()??null,dateFieldsTimeReference:n?.dateFieldsTimeReference?.toJSON()??null,preferredTimeReference:n?.preferredTimeReference?.toJSON()??null,datesInUnknownTimezone:!0===n?.datesInUnknownTimezone},t};var t=e.prototype;return t.fieldTimeZone=function(e){const n=this._fieldIndex?.get(e);if(!n)return null;if("date"!==n.type&&"esriFieldTypeDate"!==n.type)return null;const t=this._fieldTimeZoneIndex[n.name];if(void 0!==t)return t;const i=[{field:this.dateTimeReferenceMetaData?.editFieldsInfo?.creationDateField,timeReference:this.dateTimeReferenceMetaData?.editFieldsInfo?.dateFieldsTimeReference,isunknown:!0===this.dateTimeReferenceMetaData?.datesInUnknownTimezone},{field:this.dateTimeReferenceMetaData?.editFieldsInfo?.editDateField,timeReference:this.dateTimeReferenceMetaData?.editFieldsInfo?.dateFieldsTimeReference,isunknown:!0===this.dateTimeReferenceMetaData?.datesInUnknownTimezone},{field:this.dateTimeReferenceMetaData?.timeInfo?.startTimeField,timeReference:this.dateTimeReferenceMetaData?.timeInfo?.timeReference,isunknown:!0===this.dateTimeReferenceMetaData?.datesInUnknownTimezone},{field:this.dateTimeReferenceMetaData?.timeInfo?.endTimeField,timeReference:this.dateTimeReferenceMetaData?.timeInfo?.timeReference,isunknown:!0===this.dateTimeReferenceMetaData?.datesInUnknownTimezone}];for(const r of i)if(r.field===n.name){const e=this.convertToIANA(r.timeReference,r.isunknown);return this._fieldTimeZoneIndex[n.name]=e,e}const a=this.convertToIANA(this.dateTimeReferenceMetaData?.dateFieldsTimeReference,this.dateTimeReferenceMetaData?.datesInUnknownTimezone);return this._fieldTimeZoneIndex[n.name]=a,a},t.convertToIANA=function(e,n){return n?"unknown":f(e)},n._createClass(e,[{key:"layerPreferredTimeZone",get:function(){if(null!==this._ianaPreferred)return this._ianaPreferred;this._ianaPreferred="";const e=this.dateTimeReferenceMetaData?.preferredTimeReference;return this._ianaPreferred=this.convertToIANA(e,!0===this.dateTimeReferenceMetaData?.datesInUnknownTimezone),this._ianaPreferred}},{key:"layerTimeInfoTimeZone",get:function(){if(null!==this._ianaTimeInfo)return this._ianaTimeInfo;this._ianaTimeInfo="";const e=this.dateTimeReferenceMetaData?.timeInfo?.timeReference;return this._ianaTimeInfo=this.convertToIANA(e,!1),this._ianaTimeInfo}},{key:"layerEditFieldsTimeZone",get:function(){if(null!==this._ianaEditFields)return this._ianaEditFields;this._ianaEditFields="";const e=this.dateTimeReferenceMetaData?.editFieldsInfo?.dateFieldsTimeReference;return this._ianaEditFields=this.convertToIANA(e,this.dateTimeReferenceMetaData?.datesInUnknownTimezone),this._ianaEditFields}},{key:"layerDateFieldsTimeZone",get:function(){if(null!==this._ianaLayerDateFields)return this._ianaLayerDateFields;this._ianaLayerDateFields="";const e=this.dateTimeReferenceMetaData?.dateFieldsTimeReference;return this._ianaLayerDateFields=this.convertToIANA(e,!0===this.dateTimeReferenceMetaData?.datesInUnknownTimezone),this._ianaLayerDateFields}}]),e}();e.DateTimeReferenceFieldIndex=l,e.convertTimeReference=d,e.convertToIANA=f,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));