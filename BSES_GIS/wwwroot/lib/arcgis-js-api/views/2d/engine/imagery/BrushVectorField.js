/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../../../../chunks/_rollupPluginBabelHelpers","../webgl/brushes/WGLBrush","../../../webgl/enums"],(function(e,t,a){"use strict";const r=new Float32Array([.27058823529411763,.4588235294117647,.7098039215686275,1,.396078431372549,.5372549019607843,.7215686274509804,1,.5176470588235295,.6196078431372549,.7294117647058823,1,.6352941176470588,.7058823529411765,.7411764705882353,1,.7529411764705882,.8,.7450980392156863,1,.8705882352941177,.8901960784313725,.7490196078431373,1,1,1,.7490196078431373,1,1,.8627450980392157,.6313725490196078,1,.9803921568627451,.7254901960784313,.5176470588235295,1,.9607843137254902,.596078431372549,.4117647058823529,1,.9294117647058824,.4588235294117647,.3176470588235294,1,.9098039215686274,.08235294117647059,.08235294117647059,1]),n=new Float32Array([0,92/255,230/255,1]),o={beaufort_ft:r,beaufort_m:r,beaufort_km:r,beaufort_mi:r,beaufort_kn:new Float32Array([.1568627450980392,.5725490196078431,.7803921568627451,1,.34901960784313724,.6352941176470588,.7294117647058823,1,.5058823529411764,.7019607843137254,.6705882352941176,1,.6274509803921569,.7607843137254902,.6078431372549019,1,.7490196078431373,.8313725490196079,.5411764705882353,1,.8549019607843137,.9019607843137255,.4666666666666667,1,.9803921568627451,.9803921568627451,.39215686274509803,1,.9882352941176471,.8352941176470589,.3254901960784314,1,.9882352941176471,.7019607843137254,.4,1,.9803921568627451,.5529411764705883,.20392156862745098,1,.9686274509803922,.43137254901960786,.16470588235294117,1,.9411764705882353,.2784313725490196,.11372549019607843,1]),classified_arrow:new Float32Array([.2196078431372549,.6588235294117647,0,1,.5450980392156862,1.2117647058823529,0,1,1,1,0,1,1,.5019607843137255,0,1,1,0,0,1]),ocean_current_m:new Float32Array([.3058823529411765,.10196078431372549,.6,1,.7019607843137254,.10588235294117647,.10196078431372549,1,.792156862745098,.5019607843137255,.10196078431372549,1,.6941176470588235,.6941176470588235,.6941176470588235,1]),ocean_current_kn:new Float32Array([0,0,0,1,0,.1450980392156863,.39215686274509803,1,.3058823529411765,.10196078431372549,.6,1,.592156862745098,0,.39215686274509803,1,.7019607843137254,.10588235294117647,.10196078431372549,1,.6941176470588235,.3058823529411765,.10196078431372549,1,.792156862745098,.5019607843137255,.10196078431372549,1,.6941176470588235,.7019607843137254,.20392156862745098,1,.6941176470588235,.6941176470588235,.6941176470588235,1]),simple_scalar:n,single_arrow:n,wind_speed:new Float32Array([0,0,0,1])},s=[0,20];let i=function(t){function r(){var e;return(e=t.apply(this,arguments)||this)._desc={magdir:{vsPath:"raster/magdir",fsPath:"raster/magdir",attributes:new Map([["a_pos",0],["a_offset",1],["a_vv",2]])},scalar:{vsPath:"raster/scalar",fsPath:"raster/scalar",attributes:new Map([["a_pos",0],["a_offset",1],["a_vv",2]])}},e}e._inherits(r,t);var n=r.prototype;return n.dispose=function(){},n.prepareState=function({context:e}){e.setBlendingEnabled(!0),e.setBlendFunctionSeparate(a.BlendFactor.ONE,a.BlendFactor.ONE_MINUS_SRC_ALPHA,a.BlendFactor.ONE,a.BlendFactor.ONE_MINUS_SRC_ALPHA),e.setColorMask(!0,!0,!0,!0),e.setStencilWriteMask(0),e.setStencilTestEnabled(!0),e.setStencilOp(a.StencilOperation.KEEP,a.StencilOperation.KEEP,a.StencilOperation.REPLACE)},n.draw=function(e,t){if(null==t.source||0===t.source.validPixelCount)return;const{context:r,timeline:n}=e;if(n.begin(this.name),r.setStencilFunction(a.CompareFunction.EQUAL,t.stencilRef,255),t.updateVectorFieldVAO(e),"scalar"===e.renderPass){const a=t.vaoData.scalar;a&&this._drawScalars(e,t,a.vao,a.elementCount)}else{const a=t.vaoData.magdir;a&&this._drawTriangles(e,t,a.vao,a.elementCount)}n.end(this.name)},n._drawTriangles=function(e,t,r,n){const{context:i,painter:l,requestRender:c,allowDelayedRender:u}=e,{symbolizerParameters:d}=t,f=d.dataRange?["dataRange"]:[];"geographic"===d.rotationType&&f.push("rotationGeographic");const m=l.materialManager.getProgram(this._desc.magdir,f);if(u&&null!=c&&!m.compiled)return void c();i.useProgram(m);const{coordScale:_,opacity:p,transforms:g}=t;m.setUniform2fv("u_coordScale",_),m.setUniform1f("u_opacity",p),m.setUniformMatrix3fv("u_dvsMat3",g.dvs);const{style:y,dataRange:v,rotation:S,symbolPercentRange:h}=d;m.setUniform4fv("u_colors",o[y]),m.setUniform2fv("u_dataRange",v||s),m.setUniform1f("u_rotation",S),m.setUniform2fv("u_symbolPercentRange",h);const b=this._getSymbolSize(e,t);m.setUniform2fv("u_symbolSize",b),i.bindVAO(r),i.drawElements(a.PrimitiveType.TRIANGLES,n,a.DataType.UNSIGNED_INT,0)},n._drawScalars=function(e,t,r,n){const{context:o,painter:i,requestRender:l,allowDelayedRender:c}=e,{symbolizerParameters:u}=t,d=[];"wind_speed"===u.style?d.push("innerCircle"):u.dataRange&&d.push("dataRange"),"geographic"===u.rotationType&&d.push("rotationGeographic");const f=i.materialManager.getProgram(this._desc.scalar,d);if(c&&null!=l&&!f.compiled)return void l();o.useProgram(f);const{coordScale:m,opacity:_,transforms:p}=t;f.setUniform2fv("u_coordScale",m),f.setUniform1f("u_opacity",_),f.setUniformMatrix3fv("u_dvsMat3",p.dvs);const{dataRange:g,symbolPercentRange:y}=u;f.setUniform2fv("u_dataRange",g||s),f.setUniform2fv("u_symbolPercentRange",y);const v=this._getSymbolSize(e,t);f.setUniform2fv("u_symbolSize",v),o.bindVAO(r),o.drawElements(a.PrimitiveType.TRIANGLES,n,a.DataType.UNSIGNED_INT,0)},n._getSymbolSize=function(e,t){const a=t.key?2**(e.displayLevel-t.key.level):t.resolution/e.state.resolution,{symbolTileSize:r}=t.symbolizerParameters;return[r/(Math.round((t.width-t.offset[0])/r)*r)/a,r/(Math.round((t.height-t.offset[1])/r)*r)/a]},e._createClass(r)}(t);return i}));
