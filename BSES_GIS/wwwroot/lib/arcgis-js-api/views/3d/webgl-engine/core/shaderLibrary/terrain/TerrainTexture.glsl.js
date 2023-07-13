/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../../../../chunks/_rollupPluginBabelHelpers","../../../../terrain/interfaces","../../../../terrain/Overlay","../shading/ReadShadowMap.glsl","./BackgroundGrid.glsl","./Overlay.glsl","./TileBlendInput","../../shaderModules/FloatPassUniform","../../shaderModules/interfaces","../../shaderModules/Texture2DPassUniform","../../shaderModules/Uniform"],(function(e,r,t,n,o,a,l,i,s,c,d,u){"use strict";let f=function(e){function t(){var r;return(r=e.apply(this,arguments)||this).overlayOpacity=1,r.overlaySource=n.OverlaySource.None,r}return r._inherits(t,e),r._createClass(t)}(o.ReadShadowMapPassParameters);function v(e,r){e.vertex.uniforms.add(new m("overlayTexOffset"),new m("overlayTexScale")),e.fragment.uniforms.add(new s.FloatPassUniform("overlayOpacity",(e=>e.overlayOpacity)),new d.Texture2DPassUniform("ovColorTex",((e,r)=>0===r.overlays.length?null:r.overlays[t.OverlayIndex.INNER].getColorTexture(e.overlaySource)))),l.overlay(e,r)}function x(e,r){const{vertex:t,fragment:n,varyings:o}=e;o.add("vtc","vec2"),t.uniforms.add(new m("texOffsetAndScale")),n.uniforms.add(new y("tex")),n.uniforms.add(new p("textureOpacities"));const l=r.textureFadingEnabled&&!r.renderOccluded;l&&(t.uniforms.add(new m("nextTexOffsetAndScale")),o.add("nvtc","vec2"),n.uniforms.add(new y("texNext")),n.uniforms.add(new p("nextTexOpacities")),n.uniforms.add(new g("fadeFactor")));const s=r.tileBlendInput===i.TileBlendInput.ColorComposite,d=r.tileBlendInput===i.TileBlendInput.GridComposite;d&&n.include(a.BackgroundGrid),s&&n.uniforms.add(new p("backgroundColor")),t.code.add(c.glsl`
  void forwardTextureCoordinatesWithTransform(in vec2 uv) {
    vtc = uv * texOffsetAndScale.zw + texOffsetAndScale.xy;
    ${l?c.glsl`nvtc = uv * nextTexOffsetAndScale.zw + nextTexOffsetAndScale.xy;`:c.glsl``}
  }`),n.code.add(c.glsl`
    vec4 getColor(vec4 color, vec2 uv, vec3 opacities) {
      ${d||s?c.glsl`
              if (opacities.y <= 0.0) {
                return color * opacities.z * opacities.x;
              }
              vec4 bg = vec4(${s?c.glsl`backgroundColor`:c.glsl`gridColor(uv)`} * opacities.y, opacities.y);
              vec4 layer = color * opacities.z;
              return (bg * (1.0 - layer.a) + layer) * opacities.x;`:c.glsl`return color;`}
    }`),l?n.code.add(c.glsl`vec4 getTileColor() {
vec4 color = getColor(texture(tex, vtc), vtc, textureOpacities);
if (fadeFactor >= 1.0) {
return color;
}
vec4 nextColor = getColor(texture(texNext, nvtc), nvtc, nextTexOpacities);
return mix(nextColor, color, fadeFactor);
}`):n.code.add(c.glsl`vec4 getTileColor() {
return getColor(texture(tex, vtc), vtc, textureOpacities);
}`)}let g=function(e){function t(r){return e.call(this,r,"float")||this}return r._inherits(t,e),r._createClass(t)}(u.Uniform),p=function(e){function t(r){return e.call(this,r,"vec3")||this}return r._inherits(t,e),r._createClass(t)}(u.Uniform),m=function(e){function t(r){return e.call(this,r,"vec4")||this}return r._inherits(t,e),r._createClass(t)}(u.Uniform),y=function(e){function t(r){return e.call(this,r,"sampler2D")||this}return r._inherits(t,e),r._createClass(t)}(u.Uniform);e.Float3Uniform=p,e.OverlayTerrain=v,e.OverlayTerrainPassParameters=f,e.TerrainTexture=x,e.Texture2DUniform=y,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
