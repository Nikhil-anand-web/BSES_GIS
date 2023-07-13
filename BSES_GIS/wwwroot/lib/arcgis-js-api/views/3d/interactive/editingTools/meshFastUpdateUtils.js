/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../../core/handleUtils","../../../../core/reactiveUtils","../../../../layers/graphics/sources/interfaces"],(function(e,t,n,s){"use strict";function a(e){const{graphic:s}=e;return[n.watch((()=>e.displaying),(e=>{e?r(s):o(s)}),{...n.syncAndInitial}),t.makeHandle((()=>o(s)))]}function r(e){const{geometry:t}=e;i(t)&&e.notifyMeshTransformChanged({action:s.MeshTransformUpdateAction.EnableFastUpdates})}function o(e){const{geometry:t}=e;i(t)&&e.notifyMeshTransformChanged({action:s.MeshTransformUpdateAction.DisableFastUpdates})}function i(e){return"mesh"===e?.type&&!e.vertexSpace.isGeoreferenced}e.meshTransformFastUpdateHandles=a,e.tryDisableMeshTransformFastUpdates=o,e.tryEnableMeshTransformFastUpdates=r,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
