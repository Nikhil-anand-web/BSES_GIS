/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../../../../../core/compilerUtils","../../../../../../../core/floatRGBA","../../../../../../../core/has","./DecodeSymbolColor.glsl","../../../../core/shaderLibrary/ShaderOutput","../../../../core/shaderLibrary/util/RgbaFloatEncoding.glsl","../../../../core/shaderModules/Float4DrawUniform","../../../../core/shaderModules/IntegerDrawUniform","../../../../core/shaderModules/interfaces","../../../../core/shaderModules/Texture2DDrawUniform","../../../../lib/VertexAttribute"],(function(o,e,t,r,n,a,d,l,c,i,C,s){"use strict";var x;o.ComponentDataType=void 0,(x=o.ComponentDataType||(o.ComponentDataType={}))[x.Uniform=0]="Uniform",x[x.Varying=1]="Varying",x[x.COUNT=2]="COUNT";const u=429496.7296;function f(o,e){t.packFloatRGBA(o/u*.5+.5,e)}function m(t,r){switch(r.componentData){case o.ComponentDataType.Varying:return v(t,r);case o.ComponentDataType.Uniform:return p(t);case o.ComponentDataType.COUNT:return;default:e.neverReached(r.componentData)}}function v(o,e){const{vertex:t,fragment:l}=o;t.include(d.RgbaFloatEncoding),t.uniforms.add(new C.Texture2DDrawUniform("componentColorTex",(o=>o.componentParameters.texture.texture))),o.attributes.add(s.VertexAttribute.COMPONENTINDEX,"float"),o.varyings.add("vExternalColorMixMode","mediump float"),o.varyings.add("vExternalColor","vec4");const c=e.output===a.ShaderOutput.ObjectAndLayerIdColor;c&&o.varyings.add("vObjectAndLayerIdColor","vec4"),o.include(n.DecodeSymbolColor),t.constants.add("elevationScale","float",2*u),t.constants.add("stride","float",r("enable-feature:objectAndLayerId-rendering")?3:2),t.code.add(i.glsl`vec2 getComponentTextureCoordinates(float componentIndex, float typeOffset) {
float index = componentIndex * stride + typeOffset;
float texSize = float(textureSize(componentColorTex, 0).x);
float coordX = mod(index, texSize);
float coordY = floor(index / texSize);
return vec2(coordX, coordY) + 0.5;
}`),t.code.add(i.glsl`
  vec4 _readComponentColor() {
    vec2 textureCoordinates = getComponentTextureCoordinates(componentIndex, 0.0);

    return texelFetch(componentColorTex, ivec2(textureCoordinates), 0);
   }

   float readElevationOffset() {
    vec2 textureCoordinates = getComponentTextureCoordinates(componentIndex, 1.0);

    vec4 encodedElevation = texelFetch(componentColorTex, ivec2(textureCoordinates), 0);
    return (rgba2float(encodedElevation) - 0.5) * elevationScale;
  }

  ${c?i.glsl`
          void forwardObjectAndLayerIdColor() {
            vec2 textureCoordinates = getComponentTextureCoordinates(componentIndex, 2.0);

            vObjectAndLayerIdColor = texelFetch(componentColorTex, ivec2(textureCoordinates), 0);
          }`:i.glsl`void forwardObjectAndLayerIdColor() {}`}

  vec4 forwardExternalColor(out bool castShadows) {
    vec4 componentColor = _readComponentColor() * 255.0;

    float shadowFlag = mod(componentColor.b * 255.0, 2.0);
    componentColor.b -= shadowFlag;
    castShadows = shadowFlag >= 1.0;

    int decodedColorMixMode;
    vExternalColor = decodeSymbolColor(componentColor, decodedColorMixMode) * 0.003921568627451; // = 1/255;
    vExternalColorMixMode = float(decodedColorMixMode) + 0.5; // add 0.5 to avoid interpolation artifacts

    return vExternalColor;
  }
`),l.code.add(i.glsl`
  void readExternalColor(out vec4 externalColor, out int externalColorMixMode) {
    externalColor = vExternalColor;
    externalColorMixMode = int(vExternalColorMixMode);
  }

  void outputObjectAndLayerIdColor() {
     ${c?i.glsl`fragColor = vObjectAndLayerIdColor;`:""}
  }
`)}function p(o){const{vertex:e,fragment:t}=o;e.uniforms.add(new l.Float4DrawUniform("externalColor",(o=>o.componentParameters.externalColor))),t.uniforms.add(new c.IntegerDrawUniform("externalColorMixMode",(o=>o.componentParameters.externalColorMixMode))),o.varyings.add("vExternalColor","vec4"),e.code.add(i.glsl`float readElevationOffset() {
return 0.0;
}
void forwardObjectAndLayerIdColor() {
}
vec4 forwardExternalColor(out bool castShadows) {
vExternalColor = externalColor;
castShadows = true;
return externalColor;
}`),t.code.add(i.glsl`void readExternalColor(out vec4 color, out int colorMixMode) {
color = vExternalColor;
colorMixMode = externalColorMixMode;
}
void outputObjectAndLayerIdColor() {
fragColor = vec4(1.0,0.0,0.0,0.0);
}`)}o.ComponentData=m,o.MAX_ELEVATION_OFFSET=u,o.encodeElevationOffset=f,Object.defineProperty(o,Symbol.toStringTag,{value:"Module"})}));
