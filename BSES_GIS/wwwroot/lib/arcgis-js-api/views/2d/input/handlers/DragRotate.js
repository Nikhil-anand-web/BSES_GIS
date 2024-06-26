/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../input/DragEventSeparator","../../../input/InputHandler","../../../input/handlers/support"],(function(t,e,a,n,r){"use strict";let o=function(t){function n(e,n,o){var i;(i=t.call(this,!0)||this)._view=e,i.pointerAction=n;const p=i._view.mapViewNavigation;return i._dragEventSeparator=new a.DragEventSeparator({start:(t,e)=>{p.rotate.begin(i._view,e.data),e.stopPropagation()},update:(t,e)=>{p.rotate.update(i._view,e.data),e.stopPropagation()},end:(t,e)=>{p.rotate.end(),e.stopPropagation()},condition:(t,e)=>1===t&&r.eventMatchesPointerAction(e.data,i.pointerAction)}),i.registerIncoming("drag",o,(t=>i._dragEventSeparator.handle(t))),i}return e._inherits(n,t),e._createClass(n)}(n.InputHandler);t.DragRotate=o,Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})}));
