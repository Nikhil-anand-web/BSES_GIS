/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../core/asyncUtils","../../core/Error","../../core/promiseUtils","../../core/uuid","../../portal/support/resourceUtils"],(function(e,r,o,t,s,c){"use strict";async function a(e,r,a){if(!r||!r.resources)return;const p=r.portalItem===e.portalItem?new Set(e.paths):new Set;e.paths.length=0,e.portalItem=r.portalItem;const h=new Set(r.resources.toKeep.map((e=>e.resource.path))),i=new Set,l=[];h.forEach((r=>{p.delete(r),e.paths.push(r)}));for(const o of r.resources.toUpdate)if(p.delete(o.resource.path),h.has(o.resource.path)||i.has(o.resource.path)){const{resource:r,content:t,finish:u,error:p}=o,h=c.getSiblingOfSameTypeI(r,s.generateUUID());e.paths.push(h.path),l.push(n({resource:h,content:t,compress:o.compress,finish:u,error:p},a))}else e.paths.push(o.resource.path),l.push(u(o,a)),i.add(o.resource.path);for(const o of r.resources.toAdd)l.push(n(o,a)),e.paths.push(o.resource.path);if(p.forEach((e=>{if(r.portalItem){const o=r.portalItem.resourceFromPath(e);l.push(o.portalItem.removeResource(o).catch((()=>{})))}})),0===l.length)return;const f=await t.eachAlways(l);t.throwIfAborted(a);const m=f.filter((e=>"error"in e)).map((e=>e.error));if(m.length>0)throw new o("save:resources","Failed to save one or more resources",{errors:m})}async function n(e,o){const t={...null!=o?o:{},compress:e.compress},s=await r.result(e.resource.portalItem.addResource(e.resource,e.content,t));if(!0!==s.ok)throw e.error?.(s.error),s.error;e.finish?.(e.resource)}async function u(e,o){const t=await r.result(e.resource.update(e.content,o));if(!0!==t.ok)throw e.error?.(t.error),t.error;e.finish?.(e.resource)}e.saveResources=a,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
