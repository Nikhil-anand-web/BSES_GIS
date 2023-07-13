/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../chunks/_rollupPluginBabelHelpers","./executionError","../chunks/datetime"],(function(e,t,n,i){"use strict";let o=t._createClass((function(){}));o.instance=new i.IANAZone("Etc/UTC"),e.ArcadeDateErrorCodes=void 0,(e.ArcadeDateErrorCodes||(e.ArcadeDateErrorCodes={})).TimeZoneNotRecognised="TimeZoneNotRecognised";const r={[e.ArcadeDateErrorCodes.TimeZoneNotRecognised]:"Timezone identifier has not been recognised."};let s=function(e){function i(o,s){var a;return(a=e.call(this,n.doSubstitutions(r[o],s))||this).declaredRootClass="esri.arcade.arcadedate.dateerror",Error.captureStackTrace&&Error.captureStackTrace(t._assertThisInitialized(a),i),a}return t._inherits(i,e),t._createClass(i)}(t._wrapNativeSuper(Error)),a=function(){function e(e){this._date=e,this.declaredRootClass="esri.arcade.arcadedate"}e.fromParts=function(t=0,n=1,o=1,r=0,s=0,a=0,c=0,d){if(isNaN(t)||isNaN(n)||isNaN(o)||isNaN(r)||isNaN(s)||isNaN(a)||isNaN(c))return null;let m=0;const f=i.DateTime.local(t,n).daysInMonth;o<1&&(m=o-1,o=1),o>f&&(m=o-f,o=f);let l=0;n>12?(l=n-12,n=12):n<1&&(l=n-1,n=1);let h=0;s>59?(h=s-59,s=59):s<0&&(h=s,s=0);let y=0;a>59?(y=a-59,a=59):a<0&&(y=a,a=0);let T=0;c>999?(T=c-999,c=999):c<0&&(T=c,c=0);let k=i.DateTime.fromObject({day:o,year:t,month:n,hour:r,minute:s,second:a,millisecond:c},{zone:u(d)});return 0!==l&&(k=k.plus({months:l})),0!==m&&(k=k.plus({days:m})),0!==h&&(k=k.plus({minutes:h})),0!==y&&(k=k.plus({seconds:y})),0!==T&&(k=k.plus({milliseconds:T})),new e(k)},e.arcadeDateAndZoneToArcadeDate=function(t,n){const i=u(n);return t.isUnknownTimeZone||i===o.instance?e.fromParts(t.year,t.monthJS+1,t.day,t.hour,t.minute,t.second,t.millisecond,i):new e(t._date.setZone(n))},e.dateJSToArcadeDate=function(t){return new e(i.DateTime.fromJSDate(t,{zone:"system"}))},e.dateJSAndZoneToArcadeDate=function(t,n="system"){return new e(i.DateTime.fromJSDate(t,{zone:n}))},e.unknownEpochToArcadeDate=function(t){return new e(i.DateTime.fromMillis(t,{zone:o.instance}))},e.unknownDateJSToArcadeDate=function(t){return new e(i.DateTime.fromMillis(t.getTime(),{zone:o.instance}))},e.epochToArcadeDate=function(t,n="system"){return new e(i.DateTime.fromMillis(t,{zone:n}))},e.dateTimeToArcadeDate=function(t){return new e(t)};var n=e.prototype;return n.clone=function(){return new e(this._date)},n.changeTimeZone=function(t){const n=u(t);return e.dateTimeToArcadeDate(this._date.setZone(n))},e.dateTimeAndZoneToArcadeDate=function(t,n){const i=u(n);return t.zone===o.instance||i===o.instance?e.fromParts(t.year,t.month,t.day,t.hour,t.minute,t.second,t.millisecond,i):new e(t.setZone(i))},e.nowToArcadeDate=function(t){return new e(i.DateTime.fromJSDate(new Date,{zone:t}))},e.nowUTCToArcadeDate=function(){return new e(i.DateTime.utc())},n.equals=function(e){return this.isSystem&&e.isSystem?this.toNumber()===e.toNumber():this.isUnknownTimeZone===e.isUnknownTimeZone&&this._date.equals(e._date)},n.stringify=function(){return JSON.stringify(this.toJSDate())},n.plus=function(t){return new e(this._date.plus(t))},n.diff=function(e,t="milliseconds"){return this._date.diff(e._date,t)[t]},n.toISOString=function(e){return e?this._date.toISO({suppressMilliseconds:!0,includeOffset:!this.isUnknownTimeZone}):this._date.toISO({includeOffset:!this.isUnknownTimeZone})},n.toFormat=function(e,t){return this._date.toFormat(e,t)},n.toJSDate=function(){return this._date.toJSDate()},n.toSQLString=function(){return"timestamp '"+this._date.toFormat("yyyy-LL-dd HH:mm:ss")+"'"},n.toDateTime=function(){return this._date},n.toNumber=function(){return this._date.toMillis()},n.getTime=function(){return this._date.toMillis()},n.toUTC=function(){return new e(this._date.toUTC())},n.toLocal=function(){return new e(this._date.toLocal())},n.toString=function(){return this.toISOString(!0)},t._createClass(e,[{key:"isSystem",get:function(){return"system"===this.timeZone||this.timeZone===e.systemTimeZoneCanonicalName}},{key:"isUnknownTimeZone",get:function(){return this._date.zone===o.instance}},{key:"isValid",get:function(){return this._date.isValid}},{key:"hour",get:function(){return this._date.hour}},{key:"second",get:function(){return this._date.second}},{key:"day",get:function(){return this._date.day}},{key:"dayOfWeekISO",get:function(){return this._date.weekday}},{key:"dayOfWeekJS",get:function(){let e=this._date.weekday;return e>6&&(e=0),e}},{key:"millisecond",get:function(){return this._date.millisecond}},{key:"monthISO",get:function(){return this._date.month}},{key:"weekISO",get:function(){return this._date.weekNumber}},{key:"yearISO",get:function(){return this._date.weekYear}},{key:"monthJS",get:function(){return this._date.month-1}},{key:"year",get:function(){return this._date.year}},{key:"minute",get:function(){return this._date.minute}},{key:"zone",get:function(){return this._date.zone}},{key:"timeZoneOffset",get:function(){return this.isUnknownTimeZone?0:this._date.offset}},{key:"timeZone",get:function(){if(this.isUnknownTimeZone)return"unknown";if("system"===this._date.zone.type)return"system";const e=this.zone;return"fixed"===e.type?0===e.fixed?"utc":e.formatOffset(0,"short"):e.name}}],[{key:"systemTimeZoneCanonicalName",get:function(){return Intl.DateTimeFormat().resolvedOptions().timeZone??"system"}}]),e}();function u(t){if(t instanceof i.Zone)return t;if("system"===t.toLowerCase())return"system";if("utc"===t.toLowerCase())return"utc";if("unknown"===t.toLowerCase())return o.instance;if(/^[\+\-]?[0-9]{1,2}([:][0-9]{2})?$/.test(t)){const e=i.FixedOffsetZone.parseSpecifier("UTC"+(t.startsWith("+")||t.startsWith("-")?"":"+")+t);if(e)return e}const n=i.IANAZone.create(t);if(!n.isValid)throw new s(e.ArcadeDateErrorCodes.TimeZoneNotRecognised);return n}e.ArcadeDate=a,e.ArcadeDateError=s,e.ArcadeDateErrorMessages=r,e.UnknownTimeZone=o,e.createDateTimeZone=u,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
