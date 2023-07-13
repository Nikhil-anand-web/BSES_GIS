/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../handleUtils","../Logger","../promiseUtils","../Queue","./RemoteClient"],(function(e,t,n,s,i,o){"use strict";return function(){function r(){this._inUseClients=new Array,this._clients=new Array,this._clientPromises=new Array,this._ongoingJobsQueue=new i}var l=r.prototype;return l.destroy=function(){this.close()},l.open=function(e,t){return new Promise(((n,i)=>{let r=!0;const l=e=>{s.throwIfAborted(t.signal),r&&(r=!1,e())};this._clients.length=e.length,this._clientPromises.length=e.length,this._inUseClients.length=e.length;for(let h=0;h<e.length;++h){const r=e[h];s.isPromiseLike(r)?this._clientPromises[h]=r.then((e=>(this._clients[h]=new o(e,t,(()=>this._ongoingJobsQueue.pop()??null)),l(n),this._clients[h])),(()=>(l(i),null))):(this._clients[h]=new o(r,t,(()=>this._ongoingJobsQueue.pop()??null)),this._clientPromises[h]=Promise.resolve(this._clients[h]),l(n))}}))},l.broadcast=function(e,t,n){const s=new Array(this._clientPromises.length);for(let i=0;i<this._clientPromises.length;++i){const o=this._clientPromises[i];s[i]=o.then((s=>s?.invoke(e,t,n)))}return s},l.close=function(){let e;for(;e=this._ongoingJobsQueue.pop();)e.resolver.reject(s.createAbortError(`Worker closing, aborting job calling '${e.methodName}'`));for(const t of this._clientPromises)t.then((e=>e?.close()));this._clients.length=0,this._clientPromises.length=0,this._inUseClients.length=0},l.invoke=function(e,t,i){let o;Array.isArray(i)?(n.getLogger("esri.core.workers.Connection").warn("invoke()","The transferList parameter is deprecated, use the options object instead"),o={transferList:i}):o=i;const r=s.createResolver();this._ongoingJobsQueue.push({methodName:e,data:t,invokeOptions:o,resolver:r});for(let n=0;n<this._clientPromises.length;n++){const e=this._clients[n];e?e.jobAdded():this._clientPromises[n].then((e=>e?.jobAdded()))}return r.promise},l.on=function(e,n){return Promise.all(this._clientPromises).then((()=>t.handlesGroup(this._clients.map((t=>t.on(e,n))))))},l.openPorts=function(){return new Promise((e=>{const t=new Array(this._clientPromises.length);let n=t.length;for(let s=0;s<this._clientPromises.length;++s){this._clientPromises[s].then((i=>{i&&(t[s]=i.openPort()),0==--n&&e(t)}))}}))},e._createClass(r,[{key:"closed",get:function(){return!this._clients||!this._clients.length}},{key:"test",get:function(){return{numClients:this._clients.length}}}]),r}()}));