/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../geometry","../../../../Viewpoint","../../ViewState","./style/StyleDefinition","../../../../geometry/Point"],(function(e,t,n,i,l,r,a){"use strict";const s=.125;let o=function(){function e(){this._renderParams={context:null,drawPhase:1,state:new l({viewpoint:new i({targetGeometry:new a(0,0),scale:1,rotation:0}),size:[256,256]}),stationary:!0,pixelRatio:1,displayLevel:-1,requiredLevel:-1,globalOpacity:1,renderPass:"background",styleLayer:null,styleLayerUID:-1,painter:null,glyphMosaic:null,spriteMosaic:null,profiler:null,renderingOptions:null,requestRender:null,allowDelayedRender:!1,deltaTime:-1,timeline:null,time:0,hasClipping:!1,blendMode:null,dataUploadCounter:0,effects:null,inFadeTransition:!1,requireFBO:!1,highlightGradient:null}}var n=e.prototype;return n.dispose=function(){this._renderParams=null},n.render=function(e,t,n,i,l,r,a,s,o,u,d){this._render(e,t,n,i,l,r,a,s,o,u,d)},n.renderSymbols=function(e,t,n,i,l,a,s,o,u,d,p){this._render(e,t,n,i,l,a,s,o,u,d,p,r.StyleLayerType.SYMBOL)},n._render=function(e,t,n,i,l,r,a,o,u,d,p,c){const y=t[0]-r.getLevelShift(t[0]),g=this._renderParams;g.context=e,g.painter=i,g.glyphMosaic=i.glyphMosaic,g.spriteMosaic=i.spriteMosaic,g.pixelRatio=d*p,g.displayLevel=y,g.requiredLevel=y;const f=r.getScale(t[0]),[h,m]=r.getOffset(t,a*f),v=s*a*f/u,w=n.transforms.dvs;w[0]=v,w[4]=-v,w[6]=-1-h-o[0]*a*2,w[7]=1+m+(1-o[1])*a*2-2,g.state.size[0]=u/p,g.state.size[1]=u/p,g.state.pixelRatio=p,n.stage||n.attachWithContext(e),n.triangleCount=0,i.drawTile(g,n,l,c)},t._createClass(e)}();e.VectorTileRendererHelper3D=o,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));