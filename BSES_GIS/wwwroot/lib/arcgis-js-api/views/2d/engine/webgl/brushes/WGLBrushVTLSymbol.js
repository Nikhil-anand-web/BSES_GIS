/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../../../chunks/_rollupPluginBabelHelpers","../../../../../chunks/vec2f32","../../vectorTiles/decluttering/config","../../vectorTiles/style/StyleDefinition","../definitions","../enums","../GeometryUtils","../number","./WGLBrush","../../../../webgl/enums"],(function(e,t,i,a,n,r,o,s,l,u,f){"use strict";const c=1/65536;let p=function(e){function u(){var t;return(t=e.apply(this,arguments)||this)._iconProgramOptions={id:!1,sdf:!1},t._sdfProgramOptions={id:!1},t._spritesTextureSize=i.create(),t}t._inherits(u,e);var p=u.prototype;return p.dispose=function(){},p.drawMany=function(e,t){const{drawPhase:i,styleLayerUID:a}=e,n=e.styleLayer;let r;i===o.WGLDrawPhase.HITTEST&&(r=l.u32to4Xu8(a+1)),this._drawIcons(e,n,t,r),this._drawText(e,n,t,r)},p._drawIcons=function(e,t,i,l){const{context:u,displayLevel:f,drawPhase:c,painter:p,spriteMosaic:m,state:g,styleLayerUID:y,requestRender:d,allowDelayedRender:T}=e,_=t.iconMaterial,P=p.vectorTilesMaterialManager;let h,E=!1;for(const a of i)if(a.layerData.has(y)&&(h=a.layerData.get(y),h.iconPerPageElementsMap.size>0)){E=!0;break}if(!E)return;const U=t.getPaintValue("icon-translate",f),M=t.getPaintValue("icon-translate-anchor",f);let R=t.getLayoutValue("icon-rotation-alignment",f);R===n.RotationAlignment.AUTO&&(R=t.getLayoutValue("symbol-placement",f)===n.SymbolPlacement.POINT?n.RotationAlignment.VIEWPORT:n.RotationAlignment.MAP);const I=R===n.RotationAlignment.MAP,D=t.getLayoutValue("icon-keep-upright",f)&&I,S=h.isIconSDF,v=c===o.WGLDrawPhase.HITTEST,A=this._iconProgramOptions;A.id=v,A.sdf=S;const x=P.getMaterialProgram(u,_,A);if(T&&null!=d&&!x.compiled)return void d();u.useProgram(x),x.setUniformMatrix3fv("u_displayViewMat3",R===n.RotationAlignment.MAP?g.displayViewMat3:g.displayMat3),x.setUniformMatrix3fv("u_displayMat3",M===n.TranslateAnchor.VIEWPORT?g.displayMat3:g.displayViewMat3),x.setUniform2fv("u_iconTranslation",U),x.setUniform1f("u_depth",t.z),x.setUniform1f("u_mapRotation",s.degToByte(g.rotation)),x.setUniform1f("u_keepUpright",D?1:0),x.setUniform1f("u_level",10*f),x.setUniform1i("u_texture",r.VTL_TEXTURE_BINDING_UNIT_SPRITES),x.setUniform1f("u_fadeDuration",a.FADE_DURATION/1e3),v&&x.setUniform4fv("u_id",l);let V=-1;for(const a of i){if(!a.layerData.has(y))continue;if(a.key.level!==V&&(V=a.key.level,_.setDataUniforms(x,f,t,V,m)),h=a.layerData.get(y),0===h.iconPerPageElementsMap.size)continue;h.prepareForRendering(u),h.updateOpacityInfo();const i=h.iconVAO;if(null!=i){u.bindVAO(i),x.setUniformMatrix3fv("u_dvsMat3",a.transforms.dvs),x.setUniform1f("u_time",(performance.now()-h.lastOpacityUpdate)/1e3);for(const[t,i]of h.iconPerPageElementsMap)this._renderIconRange(e,x,i,t,a)}}},p._renderIconRange=function(e,t,i,a,n){const{context:o,spriteMosaic:s}=e;this._spritesTextureSize[0]=s.getWidth(a)/4,this._spritesTextureSize[1]=s.getHeight(a)/4,t.setUniform2fv("u_mosaicSize",this._spritesTextureSize),s.bind(o,f.TextureSamplingMode.LINEAR,a,r.VTL_TEXTURE_BINDING_UNIT_SPRITES),o.setStencilTestEnabled(!0),o.setStencilFunction(f.CompareFunction.GREATER,255,255),o.setStencilWriteMask(0),o.drawElements(f.PrimitiveType.TRIANGLES,i[1],f.DataType.UNSIGNED_INT,Uint32Array.BYTES_PER_ELEMENT*i[0]),n.triangleCount+=i[1]/3},p._drawText=function(e,t,l,u){const{context:p,displayLevel:m,drawPhase:g,glyphMosaic:y,painter:d,pixelRatio:T,spriteMosaic:_,state:P,styleLayerUID:h,requestRender:E,allowDelayedRender:U}=e,M=t.textMaterial,R=d.vectorTilesMaterialManager;let I,D=!1;for(const i of l)if(i.layerData.has(h)&&(I=i.layerData.get(h),I.glyphPerPageElementsMap.size>0)){D=!0;break}if(!D)return;const S=t.getPaintProperty("text-opacity");if(S&&!S.isDataDriven&&0===S.getValue(m))return;const v=t.getPaintProperty("text-color"),A=!v||v.isDataDriven||v.getValue(m)[3]>0,x=t.getPaintProperty("text-halo-width"),V=t.getPaintProperty("text-halo-color"),N=(!x||x.isDataDriven||x.getValue(m)>0)&&(!V||V.isDataDriven||V.getValue(m)[3]>0);if(!A&&!N)return;const L=24/8;let w=t.getLayoutValue("text-rotation-alignment",m);w===n.RotationAlignment.AUTO&&(w=t.getLayoutValue("symbol-placement",m)===n.SymbolPlacement.POINT?n.RotationAlignment.VIEWPORT:n.RotationAlignment.MAP);const O=w===n.RotationAlignment.MAP,G=t.getLayoutValue("text-keep-upright",m)&&O,b=g===o.WGLDrawPhase.HITTEST,z=.8*L/T;this._glyphTextureSize||(this._glyphTextureSize=i.fromValues(y.width/4,y.height/4));const k=t.getPaintValue("text-translate",m),W=t.getPaintValue("text-translate-anchor",m),B=this._sdfProgramOptions;B.id=b;const F=R.getMaterialProgram(p,M,B);if(U&&null!=E&&!F.compiled)return void E();p.useProgram(F),F.setUniformMatrix3fv("u_displayViewMat3",w===n.RotationAlignment.MAP?P.displayViewMat3:P.displayMat3),F.setUniformMatrix3fv("u_displayMat3",W===n.TranslateAnchor.VIEWPORT?P.displayMat3:P.displayViewMat3),F.setUniform2fv("u_textTranslation",k),F.setUniform1f("u_depth",t.z+c),F.setUniform2fv("u_mosaicSize",this._glyphTextureSize),F.setUniform1f("u_mapRotation",s.degToByte(P.rotation)),F.setUniform1f("u_keepUpright",G?1:0),F.setUniform1f("u_level",10*m),F.setUniform1i("u_texture",r.VTL_TEXTURE_BINDING_UNIT_GLYPHS),F.setUniform1f("u_antialiasingWidth",z),F.setUniform1f("u_fadeDuration",a.FADE_DURATION/1e3),b&&F.setUniform4fv("u_id",u);let H=-1;for(const i of l){if(!i.layerData.has(h))continue;if(i.key.level!==H&&(H=i.key.level,M.setDataUniforms(F,m,t,H,_)),I=i.layerData.get(h),0===I.glyphPerPageElementsMap.size)continue;I.prepareForRendering(p),I.updateOpacityInfo();const e=I.textVAO;if(null==e)continue;p.bindVAO(e),F.setUniformMatrix3fv("u_dvsMat3",i.transforms.dvs),p.setStencilTestEnabled(!0),p.setStencilFunction(f.CompareFunction.GREATER,255,255),p.setStencilWriteMask(0);const a=(performance.now()-I.lastOpacityUpdate)/1e3;F.setUniform1f("u_time",a),I.glyphPerPageElementsMap.forEach(((e,t)=>{this._renderGlyphRange(p,e,t,y,F,N,A,i)}))}},p._renderGlyphRange=function(e,t,i,a,n,o,s,l){a.bind(e,f.TextureSamplingMode.LINEAR,i,r.VTL_TEXTURE_BINDING_UNIT_GLYPHS),o&&(n.setUniform1f("u_halo",1),e.drawElements(f.PrimitiveType.TRIANGLES,t[1],f.DataType.UNSIGNED_INT,Uint32Array.BYTES_PER_ELEMENT*t[0]),l.triangleCount+=t[1]/3),s&&(n.setUniform1f("u_halo",0),e.drawElements(f.PrimitiveType.TRIANGLES,t[1],f.DataType.UNSIGNED_INT,Uint32Array.BYTES_PER_ELEMENT*t[0]),l.triangleCount+=t[1]/3)},t._createClass(u)}(u);e.WGLBrushVTLSymbol=p,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));