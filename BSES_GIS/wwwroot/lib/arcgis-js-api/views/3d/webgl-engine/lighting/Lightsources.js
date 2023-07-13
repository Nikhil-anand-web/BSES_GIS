/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../chunks/vec3f64"],(function(t,e,i){"use strict";let s=e._createClass((function(t=i.create()){this.intensity=t})),n=e._createClass((function(t=i.create(),e=i.fromValues(.57735,.57735,.57735)){this.intensity=t,this.direction=e})),r=e._createClass((function(t=i.create(),e=i.fromValues(.57735,.57735,.57735),s=!0,n=1,r=1){this.intensity=t,this.direction=e,this.castShadows=s,this.specularStrength=n,this.environmentStrength=r})),c=e._createClass((function(){this.r=[0],this.g=[0],this.b=[0]}));t.AmbientLight=s,t.FillLight=n,t.MainLight=r,t.SphericalHarmonicsAmbientLight=c,Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})}));
