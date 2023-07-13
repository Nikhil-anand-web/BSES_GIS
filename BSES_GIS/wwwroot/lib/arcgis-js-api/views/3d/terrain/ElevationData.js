/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../chunks/_rollupPluginBabelHelpers","../../../core/mathUtils","../../../layers/support/ElevationSamplerData","../support/mathUtils","./TerrainConst"],(function(t,a,e,l,o,i){"use strict";let n=function(){function t(t,a,e){this.type="elevation",this.level=t[0],this.i=t[1],this.j=t[2],this.extent=a,this.samplerData=new l.ElevationSamplerData(e,a)}return t.prototype.computeMinMaxValue=function(t,a,e,l){l.min=1/0,l.max=-1/0,l.hasNoDataValues=!1;const n=t-this.level;if(n<=0)return l;const r=2**n;if(!(Math.floor(a/r)===this.i&&Math.floor(e/r)===this.j))return l;let s=1/0,h=-1/0;const u=this.samplerData.data.width,f=this.samplerData.data.values,c=.5*i.ELEVATION_NODATA_VALUE;let p=(u-1)/r,m=(e-this.j*r)*p,M=(a-this.i*r)*p;if(p<1){const t=Math.floor(m),a=Math.floor(M),e=t+a*u,i=f[e],n=f[e+1],r=f[e+u],s=f[e+u+1];if(i+n+r+s<c){const e=m-t,h=M-a,u=o.bilerp(i,n,r,s,e,h),f=o.bilerp(i,n,r,s,e+p,h),c=o.bilerp(i,n,r,s,e,h+p),d=o.bilerp(i,n,r,s,e+p,h+p);return l.min=Math.min(u,f,c,d),l.max=Math.max(u,f,c,d),l}m=t,M=a,p=1}else m=Math.floor(m),M=Math.floor(M),p=Math.ceil(p);for(let o=m;o<=m+p;o++)for(let t=M;t<=M+p;t++){const a=f[o+t*u];a<c?(s=Math.min(s,a),h=Math.max(h,a)):l.hasNoDataValues=!0}return l.min=s,l.max=h,l},a._createClass(t)}();const r=.5*i.ELEVATION_NODATA_VALUE;function s(t,a,l){if(null==l)return null;for(const o of l){if(!o)continue;const l=o.safeWidth;let i=e.clamp(o.dy*(o.y1-a),0,l),n=e.clamp(o.dx*(t-o.x0),0,l);const s=Math.floor(i),h=Math.floor(n),u=o.data.width,f=s*u+h,c=o.data.values,p=c[f],m=c[f+1],M=f+u,d=c[M],v=c[M+1];if(p+d+m+v<r){i-=s,n-=h;const t=p+(m-p)*n;return t+(d+(v-d)*n-t)*i}}return null}t.ElevationData=n,t.sampleElevation=s,Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})}));