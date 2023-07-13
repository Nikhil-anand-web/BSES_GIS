/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../../../chunks/_rollupPluginBabelHelpers","../../../../../geometry/support/meshUtils/deduplicate","../../../support/meshProcessing","../../../support/buffer/InterleavedLayout","../VertexAttribute","./bufferLayouts","./edgeBufferWriters","./edgePreprocessing"],(function(e,t,r,i,n,s,u,o,c){"use strict";function a(e){const t=g(e.data,e.skipDeduplicate,e.indices,e.indicesLength);return d.updateSettings(e.writerSettings),l.updateSettings(e.writerSettings),c.extractEdges(t,d,l)}function g(e,t,n,s){if(t){const t=i.computeNeighbors(n,s,e.count);return new f(n,s,t,e)}const o=r.deduplicate(e.buffer,e.stride/4,{originalIndices:n,originalIndicesLength:s}),c=i.computeNeighbors(o.indices,s,o.uniqueCount);return{faces:o.indices,facesLength:o.indices.length,neighbors:c,vertices:u.EdgeInputBufferLayout.createView(o.buffer)}}let f=t._createClass((function(e,t,r,i){this.faces=e,this.facesLength=t,this.neighbors=r,this.vertices=i}));const d=new o.RegularEdgeBufferWriter,l=new o.SilhouetteEdgeBufferWriter,p=n.newLayout().vec3f(s.VertexAttribute.POSITION0).vec3f(s.VertexAttribute.POSITION1),b=n.newLayout().vec3f(s.VertexAttribute.POSITION0).vec3f(s.VertexAttribute.POSITION1).u16(s.VertexAttribute.COMPONENTINDEX).u16(s.VertexAttribute.U16PADDING,{glPadding:!0});e.extract=a,e.extractComponentsEdgeLocationsLayout=b,e.extractEdgeInformation=g,e.extractEdgeLocationsLayout=p,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));