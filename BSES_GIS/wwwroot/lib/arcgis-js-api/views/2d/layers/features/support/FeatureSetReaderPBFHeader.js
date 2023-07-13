/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../../../chunks/_rollupPluginBabelHelpers","../../../../../core/Error","../../../../../layers/support/FieldsIndex","../../../../../rest/query/operations/pbfFeatureServiceParser"],(function(e,t,s,r,n){"use strict";const o=268435455;let a=t._createClass((function(){this.hasFeatures=!1,this.exceededTransferLimit=!1,this.fieldCount=0,this.featureCount=0,this.objectIdFieldIndex=0,this.vertexCount=0,this.offsets={attributes:new Array,geometry:new Array},this.centroid=new Array}));function i(e,t,i=!1){const c=1,f=3,d=9,u=12,l=13,g=15,p=e.asUnsafe(),h=p.pos(),b=new a;let y=0,w=0;const k=1,x=2,I=4,m=3;let F=null,L=null,A=null,S=!1;const C=[];for(;p.next();)switch(p.tag()){case c:F=p.getString();break;case f:L=p.getString();break;case u:A=p.processMessage(n.parseTransform);break;case d:if(b.exceededTransferLimit=p.getBool(),b.exceededTransferLimit){b.offsets.geometry=i?new Float64Array(8e3):new Int32Array(8e3),b.centroid=i?new Float64Array(16e3):new Int32Array(16e3);for(let e=0;e<b.centroid.length;e++)b.centroid[e]=o}break;case l:{const e=p.processMessage(n.parseField);e.index=y++,C.push(e);break}case g:{const e=p.getLength(),s=p.pos()+e;if(!b.exceededTransferLimit){const e=b.offsets.geometry,t=b.centroid;e.push(0),t.push(o),t.push(o)}!S&&b.exceededTransferLimit&&(S=!0,b.offsets.attributes=i?new Float64Array(8e3*y):new Uint32Array(8e3*y));let r=w*y;for(;p.pos()<s&&p.next();)switch(p.tag()){case k:{if(S)b.offsets.attributes[r++]=p.pos();else{b.offsets.attributes.push(p.pos())}const e=p.getLength();p.skipLen(e);break}case x:if(t){const e=p.getLength(),t=p.pos()+e;for(;p.pos()<t&&p.next();)switch(p.tag()){case m:{p.getUInt32();const e=p.getSInt64(),t=p.getSInt64();b.centroid[2*w]=e,b.centroid[2*w+1]=t;break}default:p.skip()}}else{b.offsets.geometry[w]=p.pos();const e=p.getLength();b.vertexCount+=e,p.skipLen(e)}break;case I:{const e=p.getLength(),t=p.pos()+e;for(;p.pos()<t&&p.next();)switch(p.tag()){case m:{p.getUInt32();const e=p.getSInt64(),t=p.getSInt64();b.centroid[2*w]=e,b.centroid[2*w+1]=t;break}default:p.skip()}break}default:p.skip()}w++,b.hasFeatures=!0;break}default:p.skip()}const T=F||L;if(!T)throw new s("FeatureSet has no objectId or globalId field name");return b.fields=new r(C),b.featureCount=w,b.fieldCount=y,b.objectIdFieldIndex=b.fields.get(T)?.index,b.transform=A,b.displayIds=new Uint32Array(b.featureCount),b.groupIds=new Uint16Array(b.featureCount),p.move(h),b}e.FeatureSetHeader=a,e.parseHeader=i,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));