/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["require","exports","../../core/handleUtils","../../core/maybe","../../core/promiseUtils","../../core/reactiveUtils","./workflowUtils"],(function(e,o,r,t,a,n,s){"use strict";async function l({view:o,data:l,signal:i,next:u,cancel:d}){const{creationInfo:p}=l;if(!p)return;if(!c(p))return;const{layer:y}=p,f=null!=p.geometryToPlace;if(p.geometryToPlace=null,f)return void d();const w=(await new Promise(((o,r)=>e(["./Upload"],o,r)))).Upload;a.throwIfAborted(i);const m=new w;l.upload=m;const U=s.showProgressCursor(o),b=r.handlesGroup([U,n.watch((()=>m.state),(e=>{switch(e){case"success":p.maxFeatures=1,p.geometryToPlace=m.result,u();break;case"error":U.remove();break;case"canceled":d()}})),r.makeHandle((()=>{l.upload=t.destroyMaybe(l.upload)}))]);return m.uploadTo(y),b}function c(e){const o=e?.layer;return"scene"===o?.type}o.isModelUpload=c,o.waitForModelUpload=l,Object.defineProperty(o,Symbol.toStringTag,{value:"Module"})}));
