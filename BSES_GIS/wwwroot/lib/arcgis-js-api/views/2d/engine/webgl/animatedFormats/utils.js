/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../../../chunks/_rollupPluginBabelHelpers","../../../../../core/time","../../../../../geometry/support/meshUtils/exporters/gltf/imageutils","../../../../../symbols/cim/enums","../grouping"],(function(e,t,i,r,a,n){"use strict";function s(e){return i.Milliseconds(e.frameDurations.reduce(((e,t)=>e+t),0))}function o(e){const{width:t,height:i}=e;return{frameDurations:e.frameDurations.reverse(),getFrame:t=>{const i=e.frameDurations.length-1-t;return e.getFrame(i)},width:t,height:i}}function m(e,t){const{width:r,height:a,getFrame:n}=e,o=t/s(e);return{frameDurations:e.frameDurations.map((e=>i.Milliseconds(e*o))),getFrame:n,width:r,height:a}}function l(e,t){const{width:r,height:a,getFrame:n}=e,s=e.frameDurations.slice(),o=s.shift();return s.unshift(i.Milliseconds(o+t)),{frameDurations:s,getFrame:n,width:r,height:a}}function c(e,t){const{width:r,height:a,getFrame:n}=e,s=e.frameDurations.slice(),o=s.pop();return s.push(i.Milliseconds(o+t)),{frameDurations:s,getFrame:n,width:r,height:a}}let u=function(){function e(e,t,i,r){this._animation=e,this._repeatType=i,this._onFrameData=r,this._direction=1,this._currentFrame=0,this.timeToFrame=this._animation.frameDurations[this._currentFrame];let a=0;for(;t>a;)a+=this.timeToFrame,this.nextFrame();const n=this._animation.getFrame(this._currentFrame);this._onFrameData(n)}return e.prototype.nextFrame=function(){if(this._currentFrame+=this._direction,this._direction>0){if(this._currentFrame===this._animation.frameDurations.length)switch(this._repeatType){case a.AnimatedSymbolRepeatType.None:this._currentFrame-=this._direction;break;case a.AnimatedSymbolRepeatType.Loop:this._currentFrame=0;break;case a.AnimatedSymbolRepeatType.Oscillate:this._currentFrame-=this._direction,this._direction=-1}}else if(-1===this._currentFrame)switch(this._repeatType){case a.AnimatedSymbolRepeatType.None:this._currentFrame-=this._direction;break;case a.AnimatedSymbolRepeatType.Loop:this._currentFrame=this._animation.frameDurations.length-1;break;case a.AnimatedSymbolRepeatType.Oscillate:this._currentFrame-=this._direction,this._direction=1}this.timeToFrame=this._animation.frameDurations[this._currentFrame];const e=this._animation.getFrame(this._currentFrame);this._onFrameData(e)},t._createClass(e)}();function h(e,t,r,h){let d,{repeatType:p}=t;if(null==p&&(p=a.AnimatedSymbolRepeatType.Loop),!0===t.reverseAnimation&&(e=o(e)),null!=t.duration&&(e=m(e,i.Milliseconds(1e3*t.duration))),null!=t.repeatDelay){const r=1e3*t.repeatDelay;p===a.AnimatedSymbolRepeatType.Loop?e=c(e,i.Milliseconds(r)):p===a.AnimatedSymbolRepeatType.Oscillate&&(e=l(c(e,i.Milliseconds(r/2)),i.Milliseconds(r/2)))}if(null!=t.startTimeOffset)d=i.Milliseconds(1e3*t.startTimeOffset);else if(null!=t.randomizeStartTime){const a=n.getMaterialGroup(r),o=82749913,m=null!=t.randomizeStartSeed?t.randomizeStartSeed:o,l=n.getRandomValue(a,m);d=i.Milliseconds(l*s(e))}else d=i.Milliseconds(0);return new u(e,d,p,h)}function d(e,t,i,r){const a=null==t.playAnimation||t.playAnimation,n=h(e,t,i,r);let s,o=n.timeToFrame;function m(){s=a?setTimeout((()=>{n.nextFrame(),o=n.timeToFrame,m()}),o):void 0}return m(),{remove:()=>{a&&clearTimeout(s)}}}const p=document.createElement("canvas"),f=p.getContext("2d");function g(e,t,i){p.width=t,p.height=i;const a=[],n=e.frameDurations.length;for(let s=0;s<n;s++){const n=e.getFrame(s);f.clearRect(0,0,t,i),n instanceof ImageData?f.drawImage(r.imageTypeToCanvas(n),0,0,t,i):f.drawImage(n,0,0,t,i),a.push(f.getImageData(0,0,t,i))}return{width:t,height:i,frameDurations:e.frameDurations,getFrame:e=>a[e]}}e.Player=u,e.adjustDuration=m,e.appendDelay=c,e.createPlayer=h,e.getDuration=s,e.play=d,e.prependDelay=l,e.resize=g,e.reverse=o,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));