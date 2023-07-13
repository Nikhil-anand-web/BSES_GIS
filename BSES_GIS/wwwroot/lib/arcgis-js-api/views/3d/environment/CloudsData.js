/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports"],(function(e){"use strict";var n,u;function N(e){return null!=e?.cubeMap}function E(e){return null!=e&&!e.running}e.CloudsRenderingStages=void 0,(n=e.CloudsRenderingStages||(e.CloudsRenderingStages={}))[n.RENDERING=0]="RENDERING",n[n.FINISHED_RENDERING=1]="FINISHED_RENDERING",n[n.FADING_TEXTURE_CHANNELS=2]="FADING_TEXTURE_CHANNELS",n[n.SWITCH_CHANNELS=3]="SWITCH_CHANNELS",n[n.FINISHED=4]="FINISHED",e.CloudsTextureChannels=void 0,(u=e.CloudsTextureChannels||(e.CloudsTextureChannels={}))[u.RG=0]="RG",u[u.BA=1]="BA",e.ensureClouds=E,e.isReadyCloudsData=N,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
