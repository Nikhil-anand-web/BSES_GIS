/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../core/iteratorUtils","../../core/MapUtils","../../core/mathUtils","../../core/maybe","../../core/screenUtils","./interactiveToolUtils","../support/screenUtils"],(function(t,e,n,o,r,i,a,s,l){"use strict";let p=function(){function t(){this._pointerLocations=new Map,this._hoveredManipulators=new Map,this._grabbedManipulators=new Map,this._draggedManipulators=new Map,this._stopDrag=!1,this._revertToNullActiveTool=!1,this._cursor=null}var p=t.prototype;return p.hasFocusedManipulators=function(){return this._grabbedManipulators.size>0||this._draggedManipulators.size>0},p.handleInputEvent=function(t,e){const n=()=>t.stopPropagation();switch(t.type){case"pointer-move":u(t.pointerType)&&this._pointerLocations.set(t.pointerId,{x:t.x,y:t.y,pointerType:t.pointerType});break;case"drag":this._grabbedManipulators.size>0&&(this._stopDrag=!0),this._stopDrag&&(n(),"end"===t.action&&(this._stopDrag=!1));break;case"pointer-down":{if(!c(t))break;const o=l.createScreenPointFromEvent(t),r=this._intersect(o,t.pointerType,e.forEachTool);if(null==r)break;const i=r.manipulator,a=r.tool;null==i||null==a||!i.interactive||i.grabbable&&i.grabbableForEvent(t)||!i.grabbing||i.dragging||this._ungrabManipulatorBeforeDragging(i,t,e),null!=i&&null!=a&&i.interactive&&i.grabbable&&i.grabbableForEvent(t)&&!i.grabbing&&(this._grabbedManipulators.set(t.pointerId,{manipulator:i,tool:a,start:o,pointerType:t.pointerType}),1===this._grabbedManipulators.size&&null==e.activeTool&&(this._revertToNullActiveTool=!0,e.setActiveTool(r.tool)),i.grabbing=!0,i.events.emit("grab-changed",{action:"start",pointerType:t.pointerType,screenPoint:o}),n());break}case"pointer-up":this._draggedManipulators.has(t.pointerId)||this._handlePointerEnd(t,e);break;case"pointer-drag":{if(!c(t))break;const o=this._grabbedManipulators.get(t.pointerId),a=i.applySome(o,(({manipulator:t})=>t)),s=i.applySome(o,(({tool:t})=>t));if(null==a||null==s)break;const p=l.createScreenPointFromEvent(t);p.x=r.clamp(p.x,0,e.view.width),p.y=r.clamp(p.y,0,e.view.height);const u=o.start,h=this._draggedManipulators.get(t.pointerId);switch(t.action){case"start":case"update":"update"!==t.action&&1!==this._grabbedManipulators.size||(a.dragging=!0,h?a.events.emit("drag",{action:"update",start:u,screenPoint:p}):a.events.emit("drag",{action:"start",start:u,screenPoint:p,pointerType:t.pointerType}),this._draggedManipulators.set(t.pointerId,{tool:s,manipulator:a,start:u}));break;case"end":a.dragging=!1,h&&a.events.emit("drag",{action:"end",start:u,screenPoint:p}),this._draggedManipulators.delete(t.pointerId),this._handlePointerEnd(t,e)}n();break}case"immediate-click":{const o=l.createScreenPointFromEvent(t),r=this._intersect(o,t.pointerType,e.forEachTool);if(h(t)||e.forEachTool((t=>{if((null==r||r.tool!==t||t.automaticManipulatorSelection)&&t.manipulators){let e=!1;t.manipulators.forEach((({manipulator:t})=>{t.selected&&(t.selected=!1,e=!0)})),e&&t.onManipulatorSelectionChanged&&t.onManipulatorSelectionChanged()}})),null==r)break;const{manipulator:i,tool:a}=r;if(!i.interactive)break;i.selectable&&a.automaticManipulatorSelection&&(i.selected=!i.selected,a.onManipulatorSelectionChanged&&a.onManipulatorSelectionChanged());const s=t.native.shiftKey;i.events.emit("immediate-click",{screenPoint:o,button:t.button,pointerType:t.pointerType,shiftKey:s,stopPropagation:n});break}case"click":{const o=l.createScreenPointFromEvent(t),r=this._intersect(o,t.pointerType,e.forEachTool),i=null!=r?r.manipulator:null;if(null==i||!i.interactive)break;const a=t.native.shiftKey;i.events.emit(t.type,{screenPoint:o,button:t.button,pointerType:t.pointerType,shiftKey:a}),n();break}case"double-click":{const o=l.createScreenPointFromEvent(t),r=this._intersect(o,t.pointerType,e.forEachTool),i=null!=r?r.manipulator:null;if(null==i||!i.interactive)break;const a=t.native.shiftKey;i.events.emit("double-click",{screenPoint:o,button:t.button,pointerType:t.pointerType,shiftKey:a,stopPropagation:n});break}case"immediate-double-click":{const o=l.createScreenPointFromEvent(t),r=this._intersect(o,t.pointerType,e.forEachTool),i=null!=r?r.manipulator:null;if(null==i||!i.interactive)break;const a=t.native.shiftKey;i.events.emit("immediate-double-click",{screenPoint:o,button:t.button,pointerType:t.pointerType,shiftKey:a,stopPropagation:n});break}}this._onFocusChange(e.forEachTool)},p._ungrabManipulatorBeforeDragging=function(t,e,n){t.grabbing=!1,t.events.emit("grab-changed",{action:"end",pointerType:e.pointerType,screenPoint:l.createScreenPointFromEvent(e)}),this._grabbedManipulators.forEach((({manipulator:e},n)=>{e===t&&this._grabbedManipulators.delete(n)})),this._afterManipulatorUngrab(n.setActiveTool)},p._handlePointerEnd=function(t,e){const n=i.applySome(this._grabbedManipulators.get(t.pointerId),(({manipulator:t})=>t));null!=n&&n.grabbing&&(n.grabbing=!1,n.events.emit("grab-changed",{action:"end",pointerType:t.pointerType,screenPoint:l.createScreenPointFromEvent(t)}),this._grabbedManipulators.delete(t.pointerId),this._afterManipulatorUngrab(e.setActiveTool))},p._cursorFromMap=function(t){let e=null;return o.someMap(t,(({manipulator:t})=>!(null==t||!t.interactive)&&(t.grabbing&&t.grabCursor?(e=t.grabCursor,!0):!!t.cursor&&(e=t.cursor,!0)))),e},p._onFocusChange=function(t){this._updateCursor(),this._updateFocusedManipulatorTools(t)},p._updateCursor=function(){this._grabbedManipulators.size>0?this._cursor=this._cursorFromMap(this._grabbedManipulators)||"grabbing":this._hoveredManipulators.size>0?this._cursor=this._cursorFromMap(this._hoveredManipulators)||"pointer":this._cursor=null},p._updateFocusedManipulatorTools=function(t){const e=new Set,o=new Set;this._grabbedManipulators.forEach((({tool:t})=>{e.add(t)})),this._hoveredManipulators.forEach((({tool:t})=>{o.add(t)})),t((t=>{t.hasGrabbedManipulators=e.has(t),t.hasHoveredManipulators=o.has(t);const r=this._grabbedManipulators.values(),i=n.find(r,(({tool:e})=>e===t));t.firstGrabbedManipulator=null!=i?i.manipulator:null}))},p.clearPointers=function(t,{forEachTool:e,setActiveTool:n},o=!0,r){const i=(e,n)=>e===t&&(null==r||r===n);this._grabbedManipulators.forEach((({tool:t,manipulator:e,pointerType:n},o)=>{i(t,e)&&(this._grabbedManipulators.delete(o),e.grabbing=!1,e.events.emit("grab-changed",{action:"end",screenPoint:null,pointerType:n}))})),this._draggedManipulators.forEach((({tool:t,manipulator:e},n)=>{i(t,e)&&(this._draggedManipulators.delete(n),e.dragging=!1,e.events.emit("drag",{action:"cancel"}))})),o&&this._hoveredManipulators.forEach((({tool:t,manipulator:e},n)=>{i(t,e)&&(this._hoveredManipulators.delete(n),e.hovering=!1)})),this._afterManipulatorUngrab(n),this._onFocusChange(e)},p._intersect=function(t,e,n){let o=null;return n((n=>{if(null==n.manipulators||!s.areToolManipulatorsEditable(n))return!1;const r=n.manipulators.intersect(t,e);return null!=r&&(o={tool:n,manipulator:r},!0)})),o},p.updateHoveredStateFromKnownPointers=function(t){this._pointerLocations.forEach(((e,n)=>{this._updateHoveredStateForPointerAtScreenPosition(a.createScreenPoint(e.x,e.y),n,e.pointerType,t)}))},p.handleHoverEvent=function(t,e){"pointer-up"!==t.type&&"immediate-click"!==t.type&&"pointer-move"!==t.type||!u(t.pointerType)||this._updateHoveredStateForPointerAtScreenPosition(l.createScreenPointFromEvent(t),t.pointerId,t.pointerType,e)},p._updateHoveredStateForPointerAtScreenPosition=function(t,e,n,o){let r=this._intersect(t,n,o);const a=i.applySome(this._hoveredManipulators.get(e),(({manipulator:t})=>t));null==r||r.manipulator.interactive||(r=null),null!=r&&a===r.manipulator||(null!=a&&(a.hovering=!1),null!=r?(r.manipulator.hovering=!0,this._hoveredManipulators.set(e,r)):this._hoveredManipulators.delete(e),this._onFocusChange(o))},p._afterManipulatorUngrab=function(t){0===this._grabbedManipulators.size&&this._revertToNullActiveTool&&(t(null),this._revertToNullActiveTool=!1)},e._createClass(t,[{key:"cursor",get:function(){return this._cursor}}]),t}();function u(t){return"mouse"===t}function c(t){return"mouse"!==t.pointerType||0===t.button}function h(t){return!!t.native.shiftKey}t.ToolViewManagerManipulatorState=p,Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})}));
