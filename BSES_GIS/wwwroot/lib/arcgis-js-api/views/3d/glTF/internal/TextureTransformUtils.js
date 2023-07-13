/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/mat3f32","../../../../chunks/vec2f32","../../../../chunks/mat3"],(function(t,e,n,l){"use strict";function o(t){if(null==t)return null;const o=null!=t.offset?t.offset:n.ZEROS,u=null!=t.rotation?t.rotation:0,s=null!=t.scale?t.scale:n.ONES,a=e.fromValues(1,0,0,0,1,0,o[0],o[1],1),r=e.fromValues(Math.cos(u),-Math.sin(u),0,Math.sin(u),Math.cos(u),0,0,0,1),f=e.fromValues(s[0],0,0,0,s[1],0,0,0,1),c=e.create();return l.multiply(c,r,f),l.multiply(c,a,c),c}t.getTransformMatrix=o,Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})}));
