/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../geometry","../../../core/accessorSupport/decorators/property","../../../core/accessorSupport/ensureType","../../../core/arrayUtils","../../../core/has","../../../core/accessorSupport/decorators/enumeration","../../../core/accessorSupport/decorators/reader","../../../core/accessorSupport/decorators/subclass","../../../core/accessorSupport/decorators/writer","./BaseRasterTransform","../../../geometry/Point","../../../geometry/Extent"],(function(e,r,t,o,n,i,s,f,c,a,l,p,u,y){"use strict";var h;function d(e,r,t){const{x:o,y:n}=r;if(t<2){return{x:e[0]+o*e[2]+n*e[4],y:e[1]+o*e[3]+n*e[5]}}if(2===t){const r=o*o,t=n*n,i=o*n;return{x:e[0]+o*e[2]+n*e[4]+r*e[6]+i*e[8]+t*e[10],y:e[1]+o*e[3]+n*e[5]+r*e[7]+i*e[9]+t*e[11]}}const i=o*o,s=n*n,f=o*n,c=i*o,a=i*n,l=o*s,p=n*s;return{x:e[0]+o*e[2]+n*e[4]+i*e[6]+f*e[8]+s*e[10]+c*e[12]+a*e[14]+l*e[16]+p*e[18],y:e[1]+o*e[3]+n*e[5]+i*e[7]+f*e[9]+s*e[11]+c*e[13]+a*e[15]+l*e[17]+p*e[19]}}function m(e,r,t){const{xmin:o,ymin:n,xmax:i,ymax:s,spatialReference:f}=r;let c=[];if(t<2)c.push({x:o,y:s}),c.push({x:i,y:s}),c.push({x:o,y:n}),c.push({x:i,y:n});else{let e=10;for(let r=0;r<e;r++)c.push({x:o,y:n+(s-n)*r/(e-1)}),c.push({x:i,y:n+(s-n)*r/(e-1)});e=8;for(let r=1;r<=e;r++)c.push({x:o+(i-o)*r/e,y:n}),c.push({x:o+(i-o)*r/e,y:s})}c=c.map((r=>d(e,r,t)));const a=c.map((e=>e.x)),l=c.map((e=>e.y));return new y({xmin:Math.min.apply(null,a),xmax:Math.max.apply(null,a),ymin:Math.min.apply(null,l),ymax:Math.max.apply(null,l),spatialReference:f})}function C(e){const[r,t,o,n,i,s]=e,f=o*s-i*n,c=i*n-o*s;return[(i*t-r*s)/f,(o*t-r*n)/c,s/f,n/c,-i/f,-o/c]}let x=h=function(r){function t(){var e;return(e=r.apply(this,arguments)||this).polynomialOrder=1,e.type="polynomial",e}e._inherits(t,r);var o=t.prototype;return o.readForwardCoefficients=function(e,r){const{coeffX:t,coeffY:o}=r;if(!t?.length||!o?.length||t.length!==o.length)return null;const n=[];for(let i=0;i<t.length;i++)n.push(t[i]),n.push(o[i]);return n},o.writeForwardCoefficients=function(e,r,t){const o=[],n=[];for(let i=0;i<e?.length;i++)i%2==0?o.push(e[i]):n.push(e[i]);r.coeffX=o,r.coeffY=n},o.readInverseCoefficients=function(e,r){const{inverseCoeffX:t,inverseCoeffY:o}=r;if(!t?.length||!o?.length||t.length!==o.length)return null;const n=[];for(let i=0;i<t.length;i++)n.push(t[i]),n.push(o[i]);return n},o.writeInverseCoefficients=function(e,r,t){const o=[],n=[];for(let i=0;i<e?.length;i++)i%2==0?o.push(e[i]):n.push(e[i]);r.inverseCoeffX=o,r.inverseCoeffY=n},o.forwardTransform=function(e){if("point"===e.type){const r=d(this.forwardCoefficients,e,this.polynomialOrder);return new u({x:r.x,y:r.y,spatialReference:e.spatialReference})}return m(this.forwardCoefficients,e,this.polynomialOrder)},o.inverseTransform=function(e){if("point"===e.type){const r=d(this.inverseCoefficients,e,this.polynomialOrder);return new u({x:r.x,y:r.y,spatialReference:e.spatialReference})}return m(this.inverseCoefficients,e,this.polynomialOrder)},o.clone=function(){return new h({polynomialOrder:this.polynomialOrder,forwardCoefficients:this.forwardCoefficients?[...this.forwardCoefficients]:null,inverseCoefficients:this.inverseCoefficients?[...this.inverseCoefficients]:null})},e._createClass(t,[{key:"inverseCoefficients",get:function(){let e=this._get("inverseCoefficients");const r=this._get("forwardCoefficients");return!e&&r&&this.polynomialOrder<2&&(e=C(r)),e},set:function(e){this._set("inverseCoefficients",e)}},{key:"affectsPixelSize",get:function(){return this.polynomialOrder>0}}]),t}(p);r.__decorate([o.property({json:{write:!0}})],x.prototype,"polynomialOrder",void 0),r.__decorate([o.property()],x.prototype,"forwardCoefficients",void 0),r.__decorate([c.reader("forwardCoefficients",["coeffX","coeffY"])],x.prototype,"readForwardCoefficients",null),r.__decorate([l.writer("forwardCoefficients")],x.prototype,"writeForwardCoefficients",null),r.__decorate([o.property({json:{write:!0}})],x.prototype,"inverseCoefficients",null),r.__decorate([c.reader("inverseCoefficients",["inverseCoeffX","inverseCoeffY"])],x.prototype,"readInverseCoefficients",null),r.__decorate([l.writer("inverseCoefficients")],x.prototype,"writeInverseCoefficients",null),r.__decorate([o.property()],x.prototype,"affectsPixelSize",null),r.__decorate([f.enumeration({PolynomialXform:"polynomial"})],x.prototype,"type",void 0),x=h=r.__decorate([a.subclass("esri.layers.support.rasterTransforms.PolynomialTransform")],x);return x}));
