/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../core/promiseUtils"],(function(e,t,r){"use strict";let o=function(){function e(e,t){this._requester=e,this._apiKey=t,this._activeRequests=new Set}var o=e.prototype;return o.request=function(e,t,o){const n=new AbortController,s=r.onAbortOrThrow(o,(()=>n.abort())),l={signal:n.signal,query:{token:this._apiKey}},a=this._requester.request(e,t,l),i={response:a,abortController:n,abortHandle:s};return this._activeRequests.add(i),r.always(a,(()=>{i.abortController=null,i.abortHandle?.remove(),i.abortHandle=null,this._activeRequests.delete(i)})),a},o.cancelAll=function(){this._activeRequests.forEach((e=>{e.abortController?.abort(),e.abortController=null,e.abortHandle?.remove()})),this._activeRequests.clear()},t._createClass(e,[{key:"busy",get:function(){return this._requester.busy}}]),e}();e.I3SStreamDataController=o,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));