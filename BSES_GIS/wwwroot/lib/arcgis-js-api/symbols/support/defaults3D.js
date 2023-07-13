/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../core/has","../FillSymbol3DLayer","../LineSymbol3D","../MeshSymbol3D","../PointSymbol3D","../PolygonSymbol3D","../edges/SolidEdges3D","./defaults","./defaultsJSON"],(function(e,l,o,t,n,r,i,u,m,y){"use strict";const a=r.fromSimpleMarkerSymbol(m.defaultPointSymbol2D),s=t.fromSimpleLineSymbol(m.defaultPolylineSymbol2D),S=i.fromSimpleFillSymbol(m.defaultPolygonSymbol2D),f=new n({symbolLayers:[new o({material:{color:y.defaultColor},edges:new u({size:"1px",color:y.defaultOutlineColor})})]});function b(e){if(null==e)return null;switch(e.type){case"mesh":return f;case"point":case"multipoint":return a;case"polyline":return s;case"polygon":case"extent":return S}return null}e.getDefaultSymbol3D=b,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
