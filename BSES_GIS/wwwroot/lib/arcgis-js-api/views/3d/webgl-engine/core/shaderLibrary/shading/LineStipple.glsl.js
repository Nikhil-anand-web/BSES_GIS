/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../util/RgbaFloatEncoding.glsl","../util/View.glsl","../../shaderModules/Float4PassUniform","../../shaderModules/FloatPassUniform","../../shaderModules/interfaces","../../shaderModules/Texture2DPassUniform","../../../materials/stippleTextureRepository","../../../shaders/ensureColor4"],(function(e,t,l,i,o,a,r,s,p){"use strict";function n(e,t){e.constants.add("stippleAlphaColorDiscard","float",.001),e.constants.add("stippleAlphaHighlightDiscard","float",.5),t.stippleEnabled?d(e,t):c(e)}function d(e,n){const d=!(n.draped&&n.stipplePreferContinuous),{vertex:c,fragment:g}=e;g.include(t.RgbaFloatEncoding),n.draped||(l.addCameraPosition(c,n),c.uniforms.add(new o.FloatPassUniform("worldToScreenPerDistanceRatio",((e,t)=>1/t.camera.perScreenPixelRatio))),c.code.add(a.glsl`float computeWorldToScreenRatio(vec3 segmentCenter) {
float segmentDistanceToCamera = length(segmentCenter - cameraPosition);
return worldToScreenPerDistanceRatio / segmentDistanceToCamera;
}`)),e.varyings.add("vStippleDistance","float"),n.stippleRequiresClamp&&e.varyings.add("vStippleDistanceLimits","vec2"),n.stippleRequiresStretchMeasure&&e.varyings.add("vStipplePatternStretch","float"),c.code.add(a.glsl`
    float discretizeWorldToScreenRatio(float worldToScreenRatio) {
      float step = ${S};

      float discreteWorldToScreenRatio = log(worldToScreenRatio);
      discreteWorldToScreenRatio = ceil(discreteWorldToScreenRatio / step) * step;
      discreteWorldToScreenRatio = exp(discreteWorldToScreenRatio);
      return discreteWorldToScreenRatio;
    }
  `),c.code.add(a.glsl`vec2 computeStippleDistanceLimits(float startPseudoScreen, float segmentLengthPseudoScreen, float segmentLengthScreen, float patternLength) {`),c.code.add(a.glsl`
    if (segmentLengthPseudoScreen >= ${d?"patternLength":"1e4"}) {
  `),l.addPixelRatio(c,n),c.code.add(a.glsl`
        // Round the screen length to get an integer number of pattern repetitions (minimum 1).
        float repetitions = segmentLengthScreen / (patternLength * pixelRatio);
        float flooredRepetitions = max(1.0, floor(repetitions + 0.5));
        float segmentLengthScreenRounded = flooredRepetitions * patternLength;

        ${n.stippleRequiresStretchMeasure?a.glsl`
              float stretch = repetitions / flooredRepetitions;

              // We need to impose a lower bound on the stretch factor to prevent the dots from merging together when there is only 1 repetition.
              // 0.75 is the lowest possible stretch value for flooredRepetitions > 1, so it makes sense as lower bound.
              vStipplePatternStretch = max(0.75, stretch);`:""}

        return vec2(0.0, segmentLengthScreenRounded);
      }
      return vec2(startPseudoScreen, startPseudoScreen + segmentLengthPseudoScreen);
    }
  `),g.constants.add("stippleTexturePadding","float",s.STIPPLE_TEXTURE_PADDING),g.uniforms.add(new r.Texture2DPassUniform("stipplePatternTexture",(e=>e.stippleTexture)),new o.FloatPassUniform("stipplePatternSDFNormalizer",(e=>u(e.stipplePattern))),new o.FloatPassUniform("stipplePatternPixelSizeInv",(e=>1/f(e)))),g.code.add(a.glsl`float padStippleTexture(float u) {
float paddedTextureSize = float(textureSize(stipplePatternTexture, 0).x);
float unpaddedTextureSize = paddedTextureSize - stippleTexturePadding;
return (u * unpaddedTextureSize + stippleTexturePadding * 0.5) / paddedTextureSize;
}`),g.code.add(a.glsl`
    float getStippleSDF(out bool isClamped) {
      ${n.stippleRequiresClamp?a.glsl`
          float stippleDistanceClamped = clamp(vStippleDistance, vStippleDistanceLimits.x, vStippleDistanceLimits.y);
          vec2 aaCorrectedLimits = vStippleDistanceLimits + vec2(1.0, -1.0) / gl_FragCoord.w;
          isClamped = vStippleDistance < aaCorrectedLimits.x || vStippleDistance > aaCorrectedLimits.y;`:a.glsl`
          float stippleDistanceClamped = vStippleDistance;
          isClamped = false;`}

      float u = stippleDistanceClamped * gl_FragCoord.w * stipplePatternPixelSizeInv;
      ${n.stippleScaleWithLineWidth?a.glsl`u *= vLineSizeInv;`:""}
      u = padStippleTexture(fract(u));

      float encodedSDF = rgba2float(texture(stipplePatternTexture, vec2(u, 0.5)));
      float sdf = (encodedSDF * 2.0 - 1.0) * stipplePatternSDFNormalizer;

      ${n.stippleRequiresStretchMeasure?a.glsl`return (sdf - 0.5) * vStipplePatternStretch + 0.5;`:a.glsl`return sdf;`}
    }

    float getStippleSDF() {
      bool ignored;
      return getStippleSDF(ignored);
    }

    float getStippleAlpha() {
      bool isClamped;
      float stippleSDF = getStippleSDF(isClamped);

      float antiAliasedResult = ${n.stippleScaleWithLineWidth?a.glsl`clamp(stippleSDF * vLineWidth + 0.5, 0.0, 1.0);`:a.glsl`clamp(stippleSDF + 0.5, 0.0, 1.0);`}

      return isClamped ? floor(antiAliasedResult + 0.5) : antiAliasedResult;
    }
  `),n.stippleOffColorEnabled?(g.uniforms.add(new i.Float4PassUniform("stippleOffColor",(e=>p.ensureColor4(e.stippleOffColor)))),g.code.add(a.glsl`#define discardByStippleAlpha(stippleAlpha, threshold) {}
#define blendStipple(color, stippleAlpha) mix(color, stippleOffColor, stippleAlpha)`)):g.code.add(a.glsl`#define discardByStippleAlpha(stippleAlpha, threshold) if (stippleAlpha < threshold) { discard; }
#define blendStipple(color, stippleAlpha) vec4(color.rgb, color.a * stippleAlpha)`)}function c(e){e.fragment.code.add(a.glsl`float getStippleAlpha() { return 1.0; }
#define discardByStippleAlpha(_stippleAlpha_, _threshold_) {}
#define blendStipple(color, _stippleAlpha_) color`)}function u(e){return e?(Math.floor(.5*(s.computeLongestPattern(e)-1))+.5)/e.pixelRatio:1}function f(e){const t=e.stipplePattern;return t?s.computeTextureSize(e.stipplePattern)/t.pixelRatio:1}const S=a.glsl.float(.4);e.LineStipple=n,e.computePixelSize=f,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
