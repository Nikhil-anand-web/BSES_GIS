/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../../../../chunks/_rollupPluginBabelHelpers","../../../../../../chunks/vec3f64","../output/BlendOptions","./BackgroundGrid.glsl","../util/BlendModes.glsl","../../shaderModules/Float3PassUniform","../../shaderModules/FloatPassUniform","../../shaderModules/interfaces","../../shaderModules/Texture2DPassUniform"],(function(o,e,r,l,a,t,s,u,i,c){"use strict";var d,n,p;o.BlendLayersOutput=void 0,(d=o.BlendLayersOutput||(o.BlendLayersOutput={}))[d.Composite=0]="Composite",d[d.ColorComposite=1]="ColorComposite",d[d.GridComposite=2]="GridComposite",d[d.GroupBackgroundComposite=3]="GroupBackgroundComposite",d[d.COUNT=4]="COUNT",o.BaseOpacityMode=void 0,(n=o.BaseOpacityMode||(o.BaseOpacityMode={}))[n.NotRequired=0]="NotRequired",n[n.Required=1]="Required",n[n.COUNT=2]="COUNT",o.PremultipliedAlphaSource=void 0,(p=o.PremultipliedAlphaSource||(o.PremultipliedAlphaSource={}))[p.Off=0]="Off",p[p.On=1]="On",p[p.COUNT=2]="COUNT";let g=function(o){function l(){var e;return(e=o.apply(this,arguments)||this).baseOpacity=1,e.backgroundColor=r.ZEROS,e.fboTexture=null,e}return e._inherits(l,o),e._createClass(l)}(i.NoParameters);function m(e,r){const d=r.output===o.BlendLayersOutput.GridComposite,n=r.output===o.BlendLayersOutput.ColorComposite,p=r.output===o.BlendLayersOutput.GroupBackgroundComposite,g=r.output===o.BlendLayersOutput.Composite;d&&e.fragment.include(a.BackgroundGrid),n&&e.fragment.uniforms.add(new s.Float3PassUniform("backgroundColor",(o=>o.backgroundColor)));const m=r.baseOpacityMode===o.BaseOpacityMode.Required;m&&e.fragment.uniforms.add(new u.FloatPassUniform("baseOpacity",(o=>o.baseOpacity))),g&&e.fragment.uniforms.add(new c.Texture2DPassUniform("fboColor",(o=>o.fboTexture)));const y=r.blendMode!==l.LayerBlendMode.Normal,C=r.premultipliedSource===o.PremultipliedAlphaSource.On;e.fragment.include(t.BlendModes,r),e.fragment.code.add(i.glsl`
    vec4 getBackground(vec2 uv) {
      return ${m?i.glsl`baseOpacity *`:""} ${p?i.glsl`vec4(0.0, 0.0, 0.0, 0.0)`:n?i.glsl`vec4(backgroundColor, 1.0)`:d?i.glsl`vec4(gridColor(uv), 1.0)`:i.glsl`texelFetch(fboColor, ivec2(gl_FragCoord.xy), 0)`};
    }

    vec4 blendLayers(vec4 bgColor, vec4 colorLayer, float opacity) {
      ${y?i.glsl`
          vec3 cl = colorLayer.a == 0.0 ? colorLayer.rgb : colorLayer.rgb / colorLayer.a;
          vec3 cb = bgColor.a == 0.0 ? bgColor.rgb : bgColor.rgb / bgColor.a;
          return applyBlendMode(clamp(cl, vec3(0.0), vec3(1.0)), colorLayer.a * opacity, cb, bgColor.a);`:i.glsl`
          float composeAlpha = colorLayer.a * opacity;
          return ${!C&&(g&&!m||p)?i.glsl`colorLayer * opacity;`:i.glsl`bgColor * (1.0 - composeAlpha) + colorLayer * opacity;`}`}
    }`)}o.TileBackground=m,o.TileBackgroundPassParameters=g,Object.defineProperty(o,Symbol.toStringTag,{value:"Module"})}));
