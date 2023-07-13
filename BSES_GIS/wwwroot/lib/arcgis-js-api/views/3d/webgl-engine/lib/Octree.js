/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../../../../chunks/_rollupPluginBabelHelpers","../../../../core/ObjectPool","../../../../core/PooledArray","../../../../chunks/vec3","../../../../chunks/vec3f64","../../../../geometry/support/frustum","../../../../geometry/support/ray","../../../../chunks/sphere","./Util"],(function(e,t,n,o,i,r,s,h,u){"use strict";let a=function(){function t(e,t){this.objectToBoundingSphere=e,this._maximumObjectsPerNode=10,this._maximumDepth=20,this._degenerateObjects=new Set,this._root=new c,this._objectCount=0,t&&(void 0!==t.maximumObjectsPerNode&&(this._maximumObjectsPerNode=t.maximumObjectsPerNode),void 0!==t.maximumDepth&&(this._maximumDepth=t.maximumDepth))}var i=t.prototype;return i.destroy=function(){this._degenerateObjects.clear(),c.clearPool(),N[0]=null,E.prune(),v.prune()},i.add=function(e,t=e.length){this._objectCount+=t,this._grow(e,t);const n=c.acquire();for(let o=0;o<t;o++){const t=e[o];this._isDegenerate(t)?this._degenerateObjects.add(t):(n.init(this._root),this._add(t,n))}c.release(n)},i.remove=function(e,t=null){this._objectCount-=e.length;const n=c.acquire();for(const o of e){const e=null!=t?t:h.copy(this.objectToBoundingSphere(o),M);g(e[3])?(n.init(this._root),this._remove(o,e,n)):this._degenerateObjects.delete(o)}c.release(n),this._shrink()},i.update=function(e,t){if(!g(t[3])&&this._isDegenerate(e))return;const n=j(e);this.remove(n,t),this.add(n)},i.forEachAlongRay=function(e,t,n){const o=s.wrap(e,t);this._forEachNode(this._root,(e=>{if(!this._intersectsNode(o,e))return!1;const t=e.node;return t.terminals.forAll((e=>{this._intersectsObject(o,e)&&n(e)})),null!==t.residents&&t.residents.forAll((e=>{this._intersectsObject(o,e)&&n(e)})),!0}))},i.forEachAlongRayWithVerticalOffset=function(e,t,n,o){const i=s.wrap(e,t);this._forEachNode(this._root,(e=>{if(!this._intersectsNodeWithOffset(i,e,o))return!1;const t=e.node;return t.terminals.forAll((e=>{this._intersectsObjectWithOffset(i,e,o)&&n(e)})),null!==t.residents&&t.residents.forAll((e=>{this._intersectsObjectWithOffset(i,e,o)&&n(e)})),!0}))},i.forEach=function(e){this._forEachNode(this._root,(t=>{const n=t.node;return n.terminals.forAll(e),null!==n.residents&&n.residents.forAll(e),!0})),this._degenerateObjects.forEach(e)},i.forEachDegenerateObject=function(e){this._degenerateObjects.forEach(e)},i.findClosest=function(e,t,n,i=(()=>!0),s=1/0){let u=1/0,a=1/0,c=null;const d=p(e,t),l=o=>{if(--s,!i(o))return;const d=this.objectToBoundingSphere(o);if(!r.intersectsSphere(n,d))return;const l=b(e,t,h.getCenter(d)),f=l-d[3],m=l+d[3];f<u&&(u=f,a=m,c=o)};return this._forEachNodeDepthOrdered(this._root,(i=>{if(s<=0||!r.intersectsSphere(n,i.bounds))return!1;o.scale(z,d,i.halfSize),o.add(z,z,i.bounds);if(b(e,t,z)>a)return!1;const h=i.node;return h.terminals.forAll((e=>l(e))),null!==h.residents&&h.residents.forAll((e=>l(e))),!0}),e,t),c},i.forEachInDepthRange=function(e,n,i,s,u,a,c){let d=-1/0,l=1/0;const f={setRange:e=>{i===t.DepthOrder.FRONT_TO_BACK?(d=Math.max(d,e.near),l=Math.min(l,e.far)):(d=Math.max(d,-e.far),l=Math.min(l,-e.near))}};f.setRange(s);const m=b(n,i,e),_=p(n,i),g=p(n,-i),S=e=>{if(!c(e))return;const t=this.objectToBoundingSphere(e),o=h.getCenter(t),s=b(n,i,o)-m,_=s-t[3],p=s+t[3];_>l||p<d||!r.intersectsSphere(a,t)||u(e,f)};this._forEachNodeDepthOrdered(this._root,(e=>{if(!r.intersectsSphere(a,e.bounds))return!1;o.scale(z,_,e.halfSize),o.add(z,z,e.bounds);if(b(n,i,z)-m>l)return!1;o.scale(z,g,e.halfSize),o.add(z,z,e.bounds);if(b(n,i,z)-m<d)return!1;const t=e.node;return t.terminals.forAll((e=>S(e))),null!==t.residents&&t.residents.forAll((e=>S(e))),!0}),n,i)},i.forEachNode=function(e){this._forEachNode(this._root,(t=>e(t.node,t.bounds,t.halfSize,t.depth)))},i.forEachNeighbor=function(e,t){const n=h.getRadius(t),i=h.getCenter(t),r=t=>{const r=this.objectToBoundingSphere(t),s=h.getRadius(r),u=n+s;return!(o.squaredDistance(h.getCenter(r),i)-u*u<=0)||e(t)};let s=!0;const u=e=>{s&&(s=r(e))};this._forEachNode(this._root,(e=>{const t=h.getRadius(e.bounds),r=n+t;if(o.squaredDistance(h.getCenter(e.bounds),i)-r*r>0)return!1;const a=e.node;return a.terminals.forAll(u),s&&null!==a.residents&&a.residents.forAll(u),s})),s&&this.forEachDegenerateObject(u)},i._intersectsNode=function(e,t){return f(t.bounds,2*-t.halfSize,y),f(t.bounds,2*t.halfSize,D),u.rayBoxTest(e.origin,e.direction,y,D)},i._intersectsNodeWithOffset=function(e,t,n){return f(t.bounds,2*-t.halfSize,y),f(t.bounds,2*t.halfSize,D),n.applyToMinMax(y,D),u.rayBoxTest(e.origin,e.direction,y,D)},i._intersectsObject=function(e,t){const n=this.objectToBoundingSphere(t);return!(n[3]>0)||h.intersectsRay(n,e)},i._intersectsObjectWithOffset=function(e,t,n){const o=this.objectToBoundingSphere(t);return!(o[3]>0)||h.intersectsRay(n.applyToBoundingSphere(o),e)},i._forEachNode=function(e,t){let n=c.acquire().init(e);const o=[n];for(;0!==o.length;){if(n=o.pop(),t(n)&&!n.isLeaf())for(let e=0;e<n.node.children.length;e++){n.node.children[e]&&o.push(c.acquire().init(n).advance(e))}c.release(n)}},i._forEachNodeDepthOrdered=function(e,n,o,i=t.DepthOrder.FRONT_TO_BACK){let r=c.acquire().init(e);const s=[r];for(_(o,i,F);0!==s.length;){if(r=s.pop(),n(r)&&!r.isLeaf())for(let e=7;e>=0;--e){const t=F[e];r.node.children[t]&&s.push(c.acquire().init(r).advance(t))}c.release(r)}},i._remove=function(e,t,n){E.clear();const o=n.advanceTo(t,((e,t)=>{E.push(e.node),E.push(t)}))?n.node.terminals:n.node.residents;if(o.removeUnordered(e),0===o.length)for(let i=E.length-2;i>=0;i-=2){const e=E.data[i],t=E.data[i+1];if(!this._purge(e,t))break}},i._nodeIsEmpty=function(e){if(0!==e.terminals.length)return!1;if(null!==e.residents)return 0===e.residents.length;for(let t=0;t<e.children.length;t++)if(e.children[t])return!1;return!0},i._purge=function(e,t){return t>=0&&(e.children[t]=null),!!this._nodeIsEmpty(e)&&(null===e.residents&&(e.residents=new n({shrink:!0})),!0)},i._add=function(e,t){t.advanceTo(this.objectToBoundingSphere(e))?t.node.terminals.push(e):(t.node.residents.push(e),t.node.residents.length>this._maximumObjectsPerNode&&t.depth<this._maximumDepth&&this._split(t))},i._split=function(e){const t=e.node.residents;e.node.residents=null;for(let n=0;n<t.length;n++){const o=c.acquire().init(e);this._add(t.at(n),o),c.release(o)}},i._grow=function(e,t){if(0!==t&&(m(e,t,(e=>this.objectToBoundingSphere(e)),B),g(B[3])&&!this._fitsInsideTree(B)))if(this._nodeIsEmpty(this._root.node))h.copy(B,this._root.bounds),this._root.halfSize=1.25*this._root.bounds[3],this._root.updateBoundsRadiusFromHalfSize();else{const e=this._rootBoundsForRootAsSubNode(B);this._placingRootViolatesMaxDepth(e)?this._rebuildTree(B,e):this._growRootAsSubNode(e),c.release(e)}},i._rebuildTree=function(e,t){o.copy(R,t.bounds),R[3]=t.halfSize,m([e,R],2,(e=>e),A);const n=c.acquire().init(this._root);this._root.initFrom(null,A,A[3]),this._root.increaseHalfSize(1.25),this._forEachNode(n,(e=>(this.add(e.node.terminals.data,e.node.terminals.length),null!==e.node.residents&&this.add(e.node.residents.data,e.node.residents.length),!0))),c.release(n)},i._placingRootViolatesMaxDepth=function(e){const t=Math.log(e.halfSize/this._root.halfSize)*Math.LOG2E;let n=0;return this._forEachNode(this._root,(e=>(n=Math.max(n,e.depth),n+t<=this._maximumDepth))),n+t>this._maximumDepth},i._rootBoundsForRootAsSubNode=function(e){const t=e[3],n=e;let o=-1/0;const i=this._root.bounds,r=this._root.halfSize;for(let h=0;h<3;h++){const e=i[h]-r-(n[h]-t),s=n[h]+t-(i[h]+r),u=Math.max(0,Math.ceil(e/(2*r))),a=Math.max(0,Math.ceil(s/(2*r)))+1,c=2**Math.ceil(Math.log(u+a)*Math.LOG2E);o=Math.max(o,c),C[h].min=u,C[h].max=a}for(let h=0;h<3;h++){let e=C[h].min,t=C[h].max;const n=(o-(e+t))/2;e+=Math.ceil(n),t+=Math.floor(n);const s=i[h]-r-e*r*2;T[h]=s+(t+e)*r}const s=o*r;return T[3]=s*x,c.acquire().initFrom(null,T,s,0)},i._growRootAsSubNode=function(e){const t=this._root.node;o.copy(B,this._root.bounds),B[3]=this._root.halfSize,this._root.init(e),e.advanceTo(B,null,!0),e.node.children=t.children,e.node.residents=t.residents,e.node.terminals=t.terminals},i._shrink=function(){for(;;){const e=this._findShrinkIndex();if(-1===e)break;this._root.advance(e),this._root.depth=0}},i._findShrinkIndex=function(){if(0!==this._root.node.terminals.length||this._root.isLeaf())return-1;let e=null;const t=this._root.node.children;let n=0,o=0;for(;o<t.length&&null==e;)n=o++,e=t[n];for(;o<t.length;)if(t[o++])return-1;return n},i._isDegenerate=function(e){return!g(this.objectToBoundingSphere(e)[3])},i._fitsInsideTree=function(e){const t=this._root.bounds,n=this._root.halfSize;return e[3]<=n&&e[0]>=t[0]-n&&e[0]<=t[0]+n&&e[1]>=t[1]-n&&e[1]<=t[1]+n&&e[2]>=t[2]-n&&e[2]<=t[2]+n},i.toJSON=function(){const{maximumDepth:e,maximumObjectsPerNode:t,_objectCount:n}=this,o=this._nodeToJSON(this._root.node);return{maximumDepth:e,maximumObjectsPerNode:t,objectCount:n,root:{bounds:this._root.bounds,halfSize:this._root.halfSize,depth:this._root.depth,node:o}}},i._nodeToJSON=function(e){const t=e.children.map((e=>e?this._nodeToJSON(e):null)),n=e.residents?.map((e=>this.objectToBoundingSphere(e))),o=e.terminals?.map((e=>this.objectToBoundingSphere(e)));return{children:t,residents:n,terminals:o}},t.fromJSON=function(e){const n=new t((e=>e),{maximumDepth:e.maximumDepth,maximumObjectsPerNode:e.maximumObjectsPerNode});return n._objectCount=e.objectCount,n._root.initFrom(e.root.node,e.root.bounds,e.root.halfSize,e.root.depth),n},e._createClass(t,[{key:"bounds",get:function(){return this._root.bounds}},{key:"halfSize",get:function(){return this._root.halfSize}},{key:"root",get:function(){return this._root.node}},{key:"maximumObjectsPerNode",get:function(){return this._maximumObjectsPerNode}},{key:"maximumDepth",get:function(){return this._maximumDepth}},{key:"objectCount",get:function(){return this._objectCount}}]),t}(),c=function(){function t(){this.bounds=h.create(),this.halfSize=0,this.initFrom(null,null,0,0)}var o=t.prototype;return o.init=function(e){return this.initFrom(e.node,e.bounds,e.halfSize,e.depth)},o.initFrom=function(e,n,o,i=this.depth){return this.node=null!=e?e:t.createEmptyNode(),null!=n&&h.copy(n,this.bounds),this.halfSize=o,this.depth=i,this},o.increaseHalfSize=function(e){this.halfSize*=e,this.updateBoundsRadiusFromHalfSize()},o.updateBoundsRadiusFromHalfSize=function(){this.bounds[3]=this.halfSize*x},o.advance=function(e){let n=this.node.children[e];n||(n=t.createEmptyNode(),this.node.children[e]=n),this.node=n,this.halfSize/=2,this.depth++;const o=S[e];return this.bounds[0]+=o[0]*this.halfSize,this.bounds[1]+=o[1]*this.halfSize,this.bounds[2]+=o[2]*this.halfSize,this.updateBoundsRadiusFromHalfSize(),this},o.advanceTo=function(e,t,n=!1){for(;;){if(this.isTerminalFor(e))return t&&t(this,-1),!0;if(this.isLeaf()){if(!n)return t&&t(this,-1),!1;this.node.residents=null}const o=this._childIndex(e);t&&t(this,o),this.advance(o)}},o.isLeaf=function(){return null!=this.node.residents},o.isTerminalFor=function(e){return e[3]>this.halfSize/2},o._childIndex=function(e){const t=this.bounds;return(t[0]<e[0]?1:0)+(t[1]<e[1]?2:0)+(t[2]<e[2]?4:0)},t.createEmptyNode=function(){return{children:[null,null,null,null,null,null,null,null],terminals:new n({shrink:!0}),residents:new n({shrink:!0})}},t.acquire=function(){return t._pool.acquire()},t.release=function(e){t._pool.release(e)},t.clearPool=function(){t._pool.prune()},e._createClass(t)}();function d(e,t){e[0]=Math.min(e[0],t[0]-t[3]),e[1]=Math.min(e[1],t[1]-t[3]),e[2]=Math.min(e[2],t[2]-t[3])}function l(e,t){e[0]=Math.max(e[0],t[0]+t[3]),e[1]=Math.max(e[1],t[1]+t[3]),e[2]=Math.max(e[2],t[2]+t[3])}function f(e,t,n){n[0]=e[0]+t,n[1]=e[1]+t,n[2]=e[2]+t}function m(e,t,n,i){if(1===t){const t=n(e[0]);h.copy(t,i)}else{y[0]=1/0,y[1]=1/0,y[2]=1/0,D[0]=-1/0,D[1]=-1/0,D[2]=-1/0;for(let o=0;o<t;o++){const t=n(e[o]);g(t[3])&&(d(y,t),l(D,t))}o.lerp(i,y,D,.5),i[3]=Math.max(D[0]-y[0],D[1]-y[1],D[2]-y[2])/2}}function _(e,t,n){if(!v.length)for(let o=0;o<8;++o)v.push({index:0,distance:0});for(let o=0;o<8;++o){const n=S[o];v.data[o].index=o,v.data[o].distance=b(e,t,n)}v.sort(((e,t)=>e.distance-t.distance));for(let o=0;o<8;++o)n[o]=v.data[o].index}function p(e,t){let n,o=1/0;for(let i=0;i<8;++i){const r=b(e,t,O[i]);r<o&&(o=r,n=O[i])}return n}function b(e,t,n){return t*(e[0]*n[0]+e[1]*n[1]+e[2]*n[2])}function g(e){return!isNaN(e)&&e!==-1/0&&e!==1/0&&e>0}c._pool=new t(c),function(e){var t;(t=e.DepthOrder||(e.DepthOrder={}))[t.FRONT_TO_BACK=1]="FRONT_TO_BACK",t[t.BACK_TO_FRONT=-1]="BACK_TO_FRONT"}(a||(a={}));const S=[i.fromValues(-1,-1,-1),i.fromValues(1,-1,-1),i.fromValues(-1,1,-1),i.fromValues(1,1,-1),i.fromValues(-1,-1,1),i.fromValues(1,-1,1),i.fromValues(-1,1,1),i.fromValues(1,1,1)],O=[i.fromValues(-1,-1,-1),i.fromValues(-1,-1,1),i.fromValues(-1,1,-1),i.fromValues(-1,1,1),i.fromValues(1,-1,-1),i.fromValues(1,-1,1),i.fromValues(1,1,-1),i.fromValues(1,1,1)],x=Math.sqrt(3),N=[null];function j(e){return N[0]=e,N}const T=h.create(),z=i.create(),y=i.create(),D=i.create(),E=new n,M=h.create(),B=h.create(),R=h.create(),A=h.create(),C=[{min:0,max:0},{min:0,max:0},{min:0,max:0}],v=new n,F=[0,0,0,0,0,0,0,0];return a}));