"use strict";(self.webpackChunkexb_client=self.webpackChunkexb_client||[]).push([[74094],{45584:(e,t,r)=>{r.d(t,{D:()=>j,b:()=>$});var i=r(1662),o=r(34344),n=r(39100),a=r(95650),s=r(57218),l=r(35031),c=r(5885),u=r(4731),d=r(99163),h=r(7792),f=r(91636),m=r(40433),p=r(82082),v=r(6502),g=r(78549),_=r(5664),x=r(74312),T=r(3417),b=r(19075),S=r(14859),A=r(58749),y=r(73393),C=r(2833),w=r(89585),O=r(3864),M=r(59181),E=r(30228),I=r(91024),R=r(44391),P=r(49745),L=r(10938),N=r(3261),H=r(43036),D=r(63371),F=r(24603),B=r(23410),V=r(11125),z=r(1130),U=r(3961),G=r(15176),W=r(42842),k=r(21414);function $(e){const t=new U.kG,{vertex:r,fragment:$,varyings:j}=t;if((0,N.Sv)(r,e),t.include(f.f),j.add("vpos","vec3"),t.include(I.k,e),t.include(d.f,e),t.include(_.L,e),e.hasColorTextureTransform&&t.include(E.av),e.output===l.H.Color||e.output===l.H.Alpha){e.hasNormalTextureTransform&&t.include(E.NI),e.hasEmissionTextureTransform&&t.include(E.R5),e.hasOcclusionTextureTransform&&t.include(E.jF),e.hasMetallicRoughnessTextureTransform&&t.include(E.DT),(0,N.hY)(r,e),t.include(h.O,e),t.include(u.w,e);const l=e.normalType===h.r.Attribute||e.normalType===h.r.Compressed;l&&e.offsetBackfaces&&t.include(s.w),t.include(T.Q,e),t.include(g.Bb,e),e.instancedColor&&t.attributes.add(k.T.INSTANCECOLOR,"vec4"),j.add("vPositionLocal","vec3"),t.include(p.D,e),t.include(a.qj,e),t.include(m.R,e),t.include(v.c,e),r.uniforms.add(new D.N("externalColor",(e=>e.externalColor))),j.add("vcolorExt","vec4"),e.hasMultipassTerrain&&j.add("depth","float");const c=e.hasModelTransformation;if(c){const e=(0,o.c)();r.uniforms.add(new z.g("model",(e=>e.modelTransformation??n.I))),r.uniforms.add(new V.c("normalTransform",(t=>((0,i.b)(e,t.modelTransformation??n.I),e))))}r.code.add(B.H`
      void main(void) {
        forwardNormalizedVertexColor();
        vcolorExt = externalColor;
        ${e.instancedColor?"vcolorExt *= instanceColor * 0.003921568627451;":""}
        vcolorExt *= vvColor();
        vcolorExt *= getSymbolColor();
        forwardColorMixMode();

        if (vcolorExt.a < ${B.H.float(R.b)}) {
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
        } else {
          vpos = calculateVPos();
          ${c?"vpos = (model * vec4(vpos, 1.0)).xyz;":""}
          vPositionLocal = vpos - view[3].xyz;
          vpos = subtractOrigin(vpos);
          ${l?B.H`vNormalWorld = ${c?"normalize(normalTransform * dpNormal(vvLocalNormal(normalModel())))":"dpNormal(vvLocalNormal(normalModel()))"};`:""}
          vpos = addVerticalOffset(vpos, localOrigin);
          ${e.hasVertexTangents?"vTangent = dpTransformVertexTangent(tangent);":""}
          gl_Position = transformPosition(proj, view, vpos);
          ${l&&e.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);":""}
        }

        ${e.hasMultipassTerrain?"depth = (view * vec4(vpos, 1.0)).z;":""}
        forwardLinearDepth();
        forwardTextureCoordinates();
        ${e.hasColorTextureTransform?B.H`forwardColorUV();`:""}
        ${e.hasNormalTextureTransform?B.H`forwardNormalUV();`:""}
        ${e.hasEmissionTextureTransform?B.H`forwardEmissiveUV();`:""}
        ${e.hasOcclusionTextureTransform?B.H`forwardOcclusionUV();`:""}
        ${e.hasMetallicRoughnessTextureTransform?B.H`forwardMetallicRoughnessUV();`:""}
      }
    `)}switch(e.output){case l.H.Alpha:t.include(c.f5,e),t.include(P.z,e),t.include(y.l,e),$.uniforms.add(new F.p("opacity",(e=>e.opacity)),new F.p("layerOpacity",(e=>e.layerOpacity))),e.hasColorTexture&&$.uniforms.add(new G.A("tex",(e=>e.texture))),$.include(L.y),$.code.add(B.H`
      void main() {
        discardBySlice(vpos);
        ${e.hasMultipassTerrain?"terrainDepthTest(gl_FragCoord, depth);":""}
        ${e.hasColorTexture?B.H`
                vec4 texColor = texture(tex, ${e.hasColorTextureTransform?B.H`colorUV`:B.H`vuv0`});
                ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:B.H`vec4 texColor = vec4(1.0);`}
        ${e.hasVertexColors?B.H`float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:B.H`float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        fragColor = vec4(opacity_);
      }
    `);break;case l.H.Color:t.include(c.f5,e),t.include(S.XP,e),t.include(b.K,e),t.include(P.z,e),t.include(e.instancedDoublePrecision?M.hb:M.XE,e),t.include(y.l,e),(0,N.hY)($,e),$.uniforms.add(r.uniforms.get("localOrigin"),new H.J("ambient",(e=>e.ambient)),new H.J("diffuse",(e=>e.diffuse)),new F.p("opacity",(e=>e.opacity)),new F.p("layerOpacity",(e=>e.layerOpacity))),e.hasColorTexture&&$.uniforms.add(new G.A("tex",(e=>e.texture))),t.include(O.jV,e),t.include(w.T,e),$.include(L.y),t.include(C.k,e),(0,S.PN)($),(0,S.sC)($),(0,A.F1)($),$.code.add(B.H`
      void main() {
        discardBySlice(vpos);
        ${e.hasMultipassTerrain?"terrainDepthTest(gl_FragCoord, depth);":""}
        ${e.hasColorTexture?B.H`
                vec4 texColor = texture(tex, ${e.hasColorTextureTransform?B.H`colorUV`:B.H`vuv0`});
                ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:B.H`vec4 texColor = vec4(1.0);`}
        shadingParams.viewDirection = normalize(vpos - cameraPosition);
        ${e.normalType===h.r.ScreenDerivative?B.H`
                vec3 normal = screenDerivativeNormal(vPositionLocal);`:B.H`
                shadingParams.normalView = vNormalWorld;
                vec3 normal = shadingNormal(shadingParams);`}
        ${e.pbrMode===O.f7.Normal?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        vec3 posWorld = vpos + localOrigin;

        float additionalAmbientScale = additionalDirectedAmbientLight(posWorld);
        float shadow = ${e.receiveShadows?"readShadowMap(vpos, linearDepth)":e.spherical?"lightingGlobalFactor * (1.0 - additionalAmbientScale)":"0.0"};

        vec3 matColor = max(ambient, diffuse);
        ${e.hasVertexColors?B.H`
                vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:B.H`
                vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        ${e.hasNormalTexture?B.H`
                mat3 tangentSpace = ${e.hasVertexTangents?"computeTangentSpace(normal);":"computeTangentSpace(normal, vpos, vuv0);"}
                vec3 shadingNormal = computeTextureNormal(tangentSpace, ${e.hasNormalTextureTransform?B.H`normalUV`:"vuv0"});`:B.H`vec3 shadingNormal = normal;`}
        vec3 normalGround = ${e.spherical?B.H`normalize(posWorld);`:B.H`vec3(0.0, 0.0, 1.0);`}

        ${e.snowCover?B.H`
                float snow = smoothstep(0.5, 0.55, dot(normal, normalGround));
                albedo = mix(albedo, vec3(1), snow);
                shadingNormal = mix(shadingNormal, normal, snow);
                ssao = mix(ssao, 1.0, snow);`:""}

        vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;

        ${e.pbrMode===O.f7.Normal||e.pbrMode===O.f7.Schematic?B.H`
                float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
                ${e.snowCover?B.H`
                        mrr = mix(mrr, vec3(0.0, 1.0, 0.04), snow);
                        emission = mix(emission, vec3(0.0), snow);`:""}

                vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:B.H`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
        fragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${e.transparencyPassType===W.A.Color?B.H`fragColor = premultiplyAlpha(fragColor);`:""}
      }
    `)}return t.include(x.s,e),t}const j=Object.freeze(Object.defineProperty({__proto__:null,build:$},Symbol.toStringTag,{value:"Module"}))},60926:(e,t,r)=>{r.d(t,{R:()=>F,b:()=>D});var i=r(95650),o=r(57218),n=r(35031),a=r(5885),s=r(4731),l=r(99163),c=r(7792),u=r(91636),d=r(40433),h=r(82082),f=r(6502),m=r(5664),p=r(74312),v=r(19075),g=r(14859),_=r(58749),x=r(73393),T=r(89585),b=r(3864),S=r(59181),A=r(91024),y=r(44391),C=r(49745),w=r(10938),O=r(3261),M=r(43036),E=r(63371),I=r(24603),R=r(23410),P=r(3961),L=r(15176),N=r(42842),H=r(21414);function D(e){const t=new P.kG,{vertex:r,fragment:D,varyings:F}=t;return(0,O.Sv)(r,e),t.include(u.f),F.add("vpos","vec3"),t.include(A.k,e),t.include(l.f,e),t.include(m.L,e),e.output!==n.H.Color&&e.output!==n.H.Alpha||((0,O.hY)(t.vertex,e),t.include(c.O,e),t.include(s.w,e),e.offsetBackfaces&&t.include(o.w),e.instancedColor&&t.attributes.add(H.T.INSTANCECOLOR,"vec4"),F.add("vNormalWorld","vec3"),F.add("localvpos","vec3"),e.hasMultipassTerrain&&F.add("depth","float"),t.include(h.D,e),t.include(i.qj,e),t.include(d.R,e),t.include(f.c,e),r.uniforms.add(new E.N("externalColor",(e=>e.externalColor))),F.add("vcolorExt","vec4"),r.code.add(R.H`
        void main(void) {
          forwardNormalizedVertexColor();
          vcolorExt = externalColor;
          ${e.instancedColor?"vcolorExt *= instanceColor * 0.003921568627451;":""}
          vcolorExt *= vvColor();
          vcolorExt *= getSymbolColor();
          forwardColorMixMode();

          if (vcolorExt.a < ${R.H.float(y.b)}) {
            gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          } else {
            vpos = calculateVPos();
            localvpos = vpos - view[3].xyz;
            vpos = subtractOrigin(vpos);
            vNormalWorld = dpNormal(vvLocalNormal(normalModel()));
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, vpos);
            ${e.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);":""}
          }
          ${e.hasMultipassTerrain?R.H`depth = (view * vec4(vpos, 1.0)).z;`:""}
          forwardLinearDepth();
          forwardTextureCoordinates();
        }
      `)),e.output===n.H.Alpha&&(t.include(a.f5,e),t.include(C.z,e),t.include(x.l,e),D.uniforms.add(new I.p("opacity",(e=>e.opacity)),new I.p("layerOpacity",(e=>e.layerOpacity))),e.hasColorTexture&&D.uniforms.add(new L.A("tex",(e=>e.texture))),D.include(w.y),D.code.add(R.H`
      void main() {
        discardBySlice(vpos);
        ${e.hasMultipassTerrain?R.H`terrainDepthTest(gl_FragCoord, depth);`:""}
        ${e.hasColorTexture?R.H`
                vec4 texColor = texture(tex, ${e.hasColorTextureTransform?R.H`colorUV`:R.H`vuv0`});
                ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:R.H`vec4 texColor = vec4(1.0);`}
        ${e.hasVertexColors?R.H`float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:R.H`float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}

        fragColor = vec4(opacity_);
      }
    `)),e.output===n.H.Color&&(t.include(a.f5,e),t.include(g.XP,e),t.include(v.K,e),t.include(C.z,e),t.include(e.instancedDoublePrecision?S.hb:S.XE,e),t.include(x.l,e),(0,O.hY)(t.fragment,e),(0,_.Pe)(D),(0,g.PN)(D),(0,g.sC)(D),D.uniforms.add(r.uniforms.get("localOrigin"),r.uniforms.get("view"),new M.J("ambient",(e=>e.ambient)),new M.J("diffuse",(e=>e.diffuse)),new I.p("opacity",(e=>e.opacity)),new I.p("layerOpacity",(e=>e.layerOpacity))),e.hasColorTexture&&D.uniforms.add(new L.A("tex",(e=>e.texture))),t.include(b.jV,e),t.include(T.T,e),D.include(w.y),(0,_.F1)(D),D.code.add(R.H`
      void main() {
        discardBySlice(vpos);
        ${e.hasMultipassTerrain?R.H`terrainDepthTest(gl_FragCoord, depth);`:""}
        ${e.hasColorTexture?R.H`
                vec4 texColor = texture(tex, ${e.hasColorTextureTransform?R.H`colorUV`:R.H`vuv0`});
                ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:R.H`vec4 texColor = vec4(1.0);`}
        vec3 viewDirection = normalize(vpos - cameraPosition);
        ${e.pbrMode===b.f7.Normal?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
        vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${e.receiveShadows?"float shadow = readShadowMap(vpos, linearDepth);":e.spherical?"float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow = 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${e.hasVertexColors?R.H`
                vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:R.H`
                vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        ${e.snowCover?R.H`albedo = mix(albedo, vec3(1), 0.9);`:R.H``}
        ${R.H`
            vec3 shadingNormal = normalize(vNormalWorld);
            albedo *= 1.2;
            vec3 viewForward = vec3(view[0][2], view[1][2], view[2][2]);
            float alignmentLightView = clamp(dot(viewForward, -mainLightDirection), 0.0, 1.0);
            float transmittance = 1.0 - clamp(dot(viewForward, shadingNormal), 0.0, 1.0);
            float treeRadialFalloff = vColor.r;
            float backLightFactor = 0.5 * treeRadialFalloff * alignmentLightView * transmittance * (1.0 - shadow);
            additionalLight += backLightFactor * mainLightIntensity;`}
        ${e.pbrMode===b.f7.Normal||e.pbrMode===b.f7.Schematic?e.spherical?R.H`vec3 normalGround = normalize(vpos + localOrigin);`:R.H`vec3 normalGround = vec3(0.0, 0.0, 1.0);`:R.H``}
        ${e.pbrMode===b.f7.Normal||e.pbrMode===b.f7.Schematic?R.H`
                float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
                ${e.snowCover?R.H`
                        mrr = vec3(0.0, 1.0, 0.04);
                        emission = vec3(0.0);`:""}

                vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:R.H`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
        fragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${e.transparencyPassType===N.A.Color?R.H`fragColor = premultiplyAlpha(fragColor);`:R.H``}
      }
    `)),t.include(p.s,e),t}const F=Object.freeze(Object.defineProperty({__proto__:null,build:D},Symbol.toStringTag,{value:"Module"}))},91800:(e,t,r)=>{r.d(t,{S:()=>g,b:()=>m,g:()=>p});var i=r(55709),o=r(69666),n=r(55208),a=r(6665),s=r(77334),l=r(93072),c=r(24603),u=r(23410),d=r(3961),h=r(15176);const f=16;function m(){const e=new d.kG,t=e.fragment;return e.include(n.k),t.include(a.S),e.include(s.G),t.uniforms.add(new c.p("radius",((e,t)=>p(t.camera)))),t.code.add(u.H`vec3 sphere[16];
void fillSphere() {
sphere[0] = vec3(0.186937, 0.0, 0.0);
sphere[1] = vec3(0.700542, 0.0, 0.0);
sphere[2] = vec3(-0.864858, -0.481795, -0.111713);
sphere[3] = vec3(-0.624773, 0.102853, -0.730153);
sphere[4] = vec3(-0.387172, 0.260319, 0.007229);
sphere[5] = vec3(-0.222367, -0.642631, -0.707697);
sphere[6] = vec3(-0.01336, -0.014956, 0.169662);
sphere[7] = vec3(0.122575, 0.1544, -0.456944);
sphere[8] = vec3(-0.177141, 0.85997, -0.42346);
sphere[9] = vec3(-0.131631, 0.814545, 0.524355);
sphere[10] = vec3(-0.779469, 0.007991, 0.624833);
sphere[11] = vec3(0.308092, 0.209288,0.35969);
sphere[12] = vec3(0.359331, -0.184533, -0.377458);
sphere[13] = vec3(0.192633, -0.482999, -0.065284);
sphere[14] = vec3(0.233538, 0.293706, -0.055139);
sphere[15] = vec3(0.417709, -0.386701, 0.442449);
}
float fallOffFunction(float vv, float vn, float bias) {
float f = max(radius * radius - vv, 0.0);
return f * f * f * max(vn - bias, 0.0);
}`),t.code.add(u.H`float aoValueFromPositionsAndNormal(vec3 C, vec3 n_C, vec3 Q) {
vec3 v = Q - C;
float vv = dot(v, v);
float vn = dot(normalize(v), n_C);
return fallOffFunction(vv, vn, 0.1);
}`),t.uniforms.add(new l.A("nearFar",((e,t)=>t.camera.nearFar)),new h.A("normalMap",(e=>e.normalTexture)),new h.A("depthMap",(e=>e.depthTexture)),new l.A("zScale",((e,t)=>(0,s.R)(t))),new c.p("projScale",(e=>e.projScale)),new h.A("rnm",(e=>e.noiseTexture)),new l.A("rnmScale",((e,t)=>(0,i.s)(v,t.camera.fullWidth/e.noiseTexture.descriptor.width,t.camera.fullHeight/e.noiseTexture.descriptor.height))),new c.p("intensity",(e=>e.intensity)),new l.A("screenSize",((e,t)=>(0,i.s)(v,t.camera.fullWidth,t.camera.fullHeight)))),t.code.add(u.H`
    void main(void) {
      fillSphere();
      vec3 fres = normalize(2.0 * texture(rnm, uv * rnmScale).xyz - 1.0);
      float currentPixelDepth = linearDepthFromTexture(depthMap, uv, nearFar);

      if (-currentPixelDepth>nearFar.y || -currentPixelDepth<nearFar.x) {
        fragColor = vec4(0);
        return;
      }

      vec3 currentPixelPos = reconstructPosition(gl_FragCoord.xy,currentPixelDepth);

      // get the normal of current fragment
      vec4 norm4 = texture(normalMap, uv);
      vec3 norm = vec3(-1.0) + 2.0 * norm4.xyz;
      bool isTerrain = norm4.w < 0.5;

      float sum = 0.0;
      vec3 tapPixelPos;

      // note: the factor 2.0 should not be necessary, but makes ssao much nicer.
      // bug or deviation from CE somewhere else?
      float ps = projScale / (2.0 * currentPixelPos.z * zScale.x + zScale.y);

      for(int i = 0; i < ${u.H.int(f)}; ++i) {
        vec2 unitOffset = reflect(sphere[i], fres).xy;
        vec2 offset = vec2(-unitOffset * radius * ps);

        //don't use current or very nearby samples
        if( abs(offset.x) < 2.0 || abs(offset.y) < 2.0){
          continue;
        }

        vec2 tc = vec2(gl_FragCoord.xy + offset);
        if (tc.x < 0.0 || tc.y < 0.0 || tc.x > screenSize.x || tc.y > screenSize.y) continue;
        vec2 tcTap = tc / screenSize;
        float occluderFragmentDepth = linearDepthFromTexture(depthMap, tcTap, nearFar);

        if (isTerrain) {
          if (texture(normalMap, tcTap).w < 0.5) {
            continue;
          }
        }

        tapPixelPos = reconstructPosition(tc, occluderFragmentDepth);

        sum+= aoValueFromPositionsAndNormal(currentPixelPos, norm, tapPixelPos);
      }

      // output the result
      float A = max(1.0 - sum * intensity / float(${u.H.int(f)}), 0.0);

      // Anti-tone map to reduce contrast and drag dark region farther: (x^0.2 + 1.2 * x^4) / 2.2
      A = (pow(A, 0.2) + 1.2 * A*A*A*A) / 2.2;
      fragColor = vec4(A);
    }
  `),e}function p(e){return Math.max(10,20*e.computeScreenPixelSizeAtDist(Math.abs(4*e.relativeElevation)))}const v=(0,o.a)(),g=Object.freeze(Object.defineProperty({__proto__:null,build:m,getRadius:p},Symbol.toStringTag,{value:"Module"}))},24756:(e,t,r)=>{r.d(t,{S:()=>p,b:()=>m});var i=r(6766),o=r(55208),n=r(6665),a=r(26482),s=r(93072),l=r(24603),c=r(23410),u=r(3961),d=r(37649),h=r(15176);const f=4;function m(){const e=new u.kG,t=e.fragment;e.include(o.k);const r=(f+1)/2,m=1/(2*r*r);return t.include(n.S),t.uniforms.add(new h.A("depthMap",(e=>e.depthTexture)),new d.R("tex",(e=>e.colorTexture)),new a.q("blurSize",(e=>e.blurSize)),new l.p("projScale",((e,t)=>{const r=(0,i.i)(t.camera.eye,t.camera.center);return r>5e4?Math.max(0,e.projScale-(r-5e4)):e.projScale})),new s.A("nearFar",((e,t)=>t.camera.nearFar))),t.code.add(c.H`
    void blurFunction(vec2 uv, float r, float center_d, float sharpness, inout float wTotal, inout float bTotal) {
      float c = texture(tex, uv).r;
      float d = linearDepthFromTexture(depthMap, uv, nearFar);

      float ddiff = d - center_d;

      float w = exp(-r * r * ${c.H.float(m)} - ddiff * ddiff * sharpness);
      wTotal += w;
      bTotal += w * c;
    }
  `),t.code.add(c.H`
    void main(void) {
      float b = 0.0;
      float w_total = 0.0;

      float center_d = linearDepthFromTexture(depthMap, uv, nearFar);

      float sharpness = -0.05 * projScale / center_d;
      for (int r = -${c.H.int(f)}; r <= ${c.H.int(f)}; ++r) {
        float rf = float(r);
        vec2 uvOffset = uv + rf * blurSize;
        blurFunction(uvOffset, rf, center_d, sharpness, w_total, b);
      }

      fragColor = vec4(b / w_total);
    }
  `),e}const p=Object.freeze(Object.defineProperty({__proto__:null,build:m},Symbol.toStringTag,{value:"Module"}))},34344:(e,t,r)=>{function i(){return[1,0,0,0,1,0,0,0,1]}function o(e,t,r,i,o,n,a,s,l){return[e,t,r,i,o,n,a,s,l]}function n(e,t){return new Float64Array(e,t,9)}r.d(t,{a:()=>n,c:()=>i,f:()=>o}),Object.freeze(Object.defineProperty({__proto__:null,clone:function(e){return[e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8]]},create:i,createView:n,fromValues:o},Symbol.toStringTag,{value:"Module"}))},39100:(e,t,r)=>{function i(){return[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}function o(e){return[e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8],e[9],e[10],e[11],e[12],e[13],e[14],e[15]]}function n(e,t){return new Float64Array(e,t,16)}r.d(t,{I:()=>a,a:()=>n,b:()=>o,c:()=>i});const a=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];Object.freeze(Object.defineProperty({__proto__:null,IDENTITY:a,clone:o,create:i,createView:n,fromValues:function(e,t,r,i,o,n,a,s,l,c,u,d,h,f,m,p){return[e,t,r,i,o,n,a,s,l,c,u,d,h,f,m,p]}},Symbol.toStringTag,{value:"Module"}))},10663:(e,t,r)=>{r.d(t,{c:()=>f,g:()=>u,j:()=>M,k:()=>p,m:()=>d,s:()=>c});var i=r(34344),o=r(61044),n=r(8909),a=r(93011),s=r(6766),l=r(88589);function c(e,t,r){r*=.5;const i=Math.sin(r);return e[0]=i*t[0],e[1]=i*t[1],e[2]=i*t[2],e[3]=Math.cos(r),e}function u(e,t){const r=2*Math.acos(t[3]),i=Math.sin(r/2);return i>(0,a.g)()?(e[0]=t[0]/i,e[1]=t[1]/i,e[2]=t[2]/i):(e[0]=1,e[1]=0,e[2]=0),r}function d(e,t,r){const i=t[0],o=t[1],n=t[2],a=t[3],s=r[0],l=r[1],c=r[2],u=r[3];return e[0]=i*u+a*s+o*c-n*l,e[1]=o*u+a*l+n*s-i*c,e[2]=n*u+a*c+i*l-o*s,e[3]=a*u-i*s-o*l-n*c,e}function h(e,t,r,i){const o=t[0],n=t[1],s=t[2],l=t[3];let c,u,d,h,f,m=r[0],p=r[1],v=r[2],g=r[3];return u=o*m+n*p+s*v+l*g,u<0&&(u=-u,m=-m,p=-p,v=-v,g=-g),1-u>(0,a.g)()?(c=Math.acos(u),d=Math.sin(c),h=Math.sin((1-i)*c)/d,f=Math.sin(i*c)/d):(h=1-i,f=i),e[0]=h*o+f*m,e[1]=h*n+f*p,e[2]=h*s+f*v,e[3]=h*l+f*g,e}function f(e,t){return e[0]=-t[0],e[1]=-t[1],e[2]=-t[2],e[3]=t[3],e}function m(e,t){const r=t[0]+t[4]+t[8];let i;if(r>0)i=Math.sqrt(r+1),e[3]=.5*i,i=.5/i,e[0]=(t[5]-t[7])*i,e[1]=(t[6]-t[2])*i,e[2]=(t[1]-t[3])*i;else{let r=0;t[4]>t[0]&&(r=1),t[8]>t[3*r+r]&&(r=2);const o=(r+1)%3,n=(r+2)%3;i=Math.sqrt(t[3*r+r]-t[3*o+o]-t[3*n+n]+1),e[r]=.5*i,i=.5/i,e[3]=(t[3*o+n]-t[3*n+o])*i,e[o]=(t[3*o+r]+t[3*r+o])*i,e[n]=(t[3*n+r]+t[3*r+n])*i}return e}function p(e,t,r,i){const o=.5*Math.PI/180;t*=o,r*=o,i*=o;const n=Math.sin(t),a=Math.cos(t),s=Math.sin(r),l=Math.cos(r),c=Math.sin(i),u=Math.cos(i);return e[0]=n*l*u-a*s*c,e[1]=a*s*u+n*l*c,e[2]=a*l*c-n*s*u,e[3]=a*l*u+n*s*c,e}const v=l.c,g=l.s,_=l.a,x=d,T=l.b,b=l.d,S=l.l,A=l.e,y=A,C=l.f,w=C,O=l.n,M=l.g,E=l.h,I=(0,n.c)(),R=(0,n.f)(1,0,0),P=(0,n.f)(0,1,0),L=(0,o.a)(),N=(0,o.a)(),H=(0,i.c)();Object.freeze(Object.defineProperty({__proto__:null,add:_,calculateW:function(e,t){const r=t[0],i=t[1],o=t[2];return e[0]=r,e[1]=i,e[2]=o,e[3]=Math.sqrt(Math.abs(1-r*r-i*i-o*o)),e},conjugate:f,copy:v,dot:b,equals:E,exactEquals:M,fromEuler:p,fromMat3:m,getAxisAngle:u,identity:function(e){return e[0]=0,e[1]=0,e[2]=0,e[3]=1,e},invert:function(e,t){const r=t[0],i=t[1],o=t[2],n=t[3],a=r*r+i*i+o*o+n*n,s=a?1/a:0;return e[0]=-r*s,e[1]=-i*s,e[2]=-o*s,e[3]=n*s,e},len:y,length:A,lerp:S,mul:x,multiply:d,normalize:O,random:function(e){const t=a.R,r=t(),i=t(),o=t(),n=Math.sqrt(1-r),s=Math.sqrt(r);return e[0]=n*Math.sin(2*Math.PI*i),e[1]=n*Math.cos(2*Math.PI*i),e[2]=s*Math.sin(2*Math.PI*o),e[3]=s*Math.cos(2*Math.PI*o),e},rotateX:function(e,t,r){r*=.5;const i=t[0],o=t[1],n=t[2],a=t[3],s=Math.sin(r),l=Math.cos(r);return e[0]=i*l+a*s,e[1]=o*l+n*s,e[2]=n*l-o*s,e[3]=a*l-i*s,e},rotateY:function(e,t,r){r*=.5;const i=t[0],o=t[1],n=t[2],a=t[3],s=Math.sin(r),l=Math.cos(r);return e[0]=i*l-n*s,e[1]=o*l+a*s,e[2]=n*l+i*s,e[3]=a*l-o*s,e},rotateZ:function(e,t,r){r*=.5;const i=t[0],o=t[1],n=t[2],a=t[3],s=Math.sin(r),l=Math.cos(r);return e[0]=i*l+o*s,e[1]=o*l-i*s,e[2]=n*l+a*s,e[3]=a*l-n*s,e},rotationTo:function(e,t,r){const i=(0,s.e)(t,r);return i<-.999999?((0,s.f)(I,R,t),(0,s.u)(I)<1e-6&&(0,s.f)(I,P,t),(0,s.n)(I,I),c(e,I,Math.PI),e):i>.999999?(e[0]=0,e[1]=0,e[2]=0,e[3]=1,e):((0,s.f)(I,t,r),e[0]=I[0],e[1]=I[1],e[2]=I[2],e[3]=1+i,O(e,e))},scale:T,set:g,setAxes:function(e,t,r,i){const o=H;return o[0]=r[0],o[3]=r[1],o[6]=r[2],o[1]=i[0],o[4]=i[1],o[7]=i[2],o[2]=-t[0],o[5]=-t[1],o[8]=-t[2],O(e,m(e,o))},setAxisAngle:c,slerp:h,sqlerp:function(e,t,r,i,o,n){return h(L,t,o,n),h(N,r,i,n),h(e,L,N,2*n*(1-n)),e},sqrLen:w,squaredLength:C,str:function(e){return"quat("+e[0]+", "+e[1]+", "+e[2]+", "+e[3]+")"}},Symbol.toStringTag,{value:"Module"}))},61044:(e,t,r)=>{function i(){return[0,0,0,1]}function o(e){return[e[0],e[1],e[2],e[3]]}function n(e,t){return new Float64Array(e,t,4)}r.d(t,{I:()=>a,a:()=>i,b:()=>o,c:()=>n});const a=[0,0,0,1];Object.freeze(Object.defineProperty({__proto__:null,IDENTITY:a,clone:o,create:i,createView:n,fromValues:function(e,t,r,i){return[e,t,r,i]}},Symbol.toStringTag,{value:"Module"}))},45612:(e,t,r)=>{r.d(t,{a:()=>_,c:()=>v,g:()=>x,h:()=>g,j:()=>S,l:()=>E}),r(39994);var i,o,n=r(13802),a=r(19431),s=r(24455),l=r(6766),c=r(8909),u=r(88589),d=r(1983);(o=i||(i={}))[o.X=0]="X",o[o.Y=1]="Y",o[o.Z=2]="Z";var h=r(97537),f=r(5700),m=r(68817);const p=v();function v(){return(0,d.c)()}function g(e,t=v()){return(0,u.c)(t,e)}function _(e){return e[3]}function x(e){return e}function T(e,t,r){if(null==t)return!1;const{origin:i,direction:o}=t,n=b;n[0]=i[0]-e[0],n[1]=i[1]-e[1],n[2]=i[2]-e[2];const a=o[0]*o[0]+o[1]*o[1]+o[2]*o[2];if(0===a)return!1;const s=2*(o[0]*n[0]+o[1]*n[1]+o[2]*n[2]),l=s*s-4*a*(n[0]*n[0]+n[1]*n[1]+n[2]*n[2]-e[3]*e[3]);if(l<0)return!1;const c=Math.sqrt(l);let u=(-s-c)/(2*a);const d=(-s+c)/(2*a);return(u<0||d<u&&d>0)&&(u=d),!(u<0||(r&&(r[0]=i[0]+o[0]*u,r[1]=i[1]+o[1]*u,r[2]=i[2]+o[2]*u),0))}const b=(0,c.c)();function S(e,t){return T(e,t,null)}function A(e,t,r){const i=m.WM.get(),o=m.MP.get();(0,l.f)(i,t.origin,t.direction);const n=_(e);(0,l.f)(r,i,t.origin),(0,l.g)(r,r,1/(0,l.l)(r)*n);const a=C(e,t.origin),c=(0,f.EU)(t.origin,r);return(0,s.d)(o,c+a,i),(0,l.m)(r,r,o),r}function y(e,t,r){const i=(0,l.b)(m.WM.get(),t,e),o=(0,l.g)(m.WM.get(),i,e[3]/(0,l.l)(i));return(0,l.a)(r,o,e)}function C(e,t){const r=(0,l.b)(m.WM.get(),t,e),i=(0,l.l)(r),o=_(e),n=o+Math.abs(o-i);return(0,a.ZF)(o/n)}const w=(0,c.c)();function O(e,t,r,o){const n=(0,l.b)(w,t,e);switch(r){case i.X:{const e=(0,a.jE)(n,w)[2];return(0,l.s)(o,-Math.sin(e),Math.cos(e),0)}case i.Y:{const e=(0,a.jE)(n,w),t=e[1],r=e[2],i=Math.sin(t);return(0,l.s)(o,-i*Math.cos(r),-i*Math.sin(r),Math.cos(t))}case i.Z:return(0,l.n)(o,n);default:return}}function M(e,t){const r=(0,l.b)(I,t,e);return(0,l.l)(r)-e[3]}function E(e,t){const r=(0,l.d)(e,t),i=_(e);return r<=i*i}const I=(0,c.c)(),R=v();Object.freeze(Object.defineProperty({__proto__:null,NullSphere:p,altitudeAt:M,angleToSilhouette:C,axisAt:O,clear:function(e){e[0]=e[1]=e[2]=e[3]=0},closestPoint:function(e,t,r){return T(e,t,r)?r:((0,h.JI)(t,e,r),y(e,r,r))},closestPointOnSilhouette:A,containsPoint:E,copy:g,create:v,distanceToSilhouette:function(e,t){const r=(0,l.b)(m.WM.get(),t,e),i=(0,l.p)(r),o=e[3]*e[3];return Math.sqrt(Math.abs(i-o))},elevate:function(e,t,r){return e!==r&&(0,l.c)(r,e),r[3]=e[3]+t,r},fromCenterAndRadius:function(e,t){return(0,d.f)(e[0],e[1],e[2],t)},fromRadius:function(e,t){return e[0]=e[1]=e[2]=0,e[3]=t,e},fromValues:function(e,t,r,i){return(0,d.f)(e,t,r,i)},getCenter:x,getRadius:_,intersectRay:T,intersectRayClosestSilhouette:function(e,t,r){if(T(e,t,r))return r;const i=A(e,t,m.WM.get());return(0,l.a)(r,t.origin,(0,l.g)(m.WM.get(),t.direction,(0,l.i)(t.origin,i)/(0,l.l)(t.direction))),r},intersectsRay:S,projectPoint:y,setAltitudeAt:function(e,t,r,o){const n=M(e,t),a=O(e,t,i.Z,I),s=(0,l.g)(I,a,r-n);return(0,l.a)(o,t,s)},setExtent:function(e,t,r){return n.Z.getLogger("esri.geometry.support.sphere").error("sphere.setExtent is not yet supported"),e===r?r:g(e,r)},tmpSphere:R,union:function(e,t,r=v()){const i=(0,l.i)(e,t),o=e[3],n=t[3];return i+n<o?((0,u.c)(r,e),r):i+o<n?((0,u.c)(r,t),r):((0,l.h)(r,e,t,(i+n-o)/(2*i)),r[3]=(i+o+n)/2,r)},wrap:function(e){return e}},Symbol.toStringTag,{value:"Module"}))},86717:(e,t,r)=>{r.d(t,{a:()=>s,b:()=>a,c:()=>o,d:()=>u,e:()=>l,n:()=>d,s:()=>c,t:()=>n});var i=r(45150);function o(e,t,r){n(e.typedBuffer,t.typedBuffer,r,e.typedBufferStride,t.typedBufferStride)}function n(e,t,r,o=3,n=o){if(e.length/o!==Math.ceil(t.length/n))return i.c.error("source and destination buffers need to have the same number of elements"),e;const a=e.length/o,s=r[0],l=r[1],c=r[2],u=r[4],d=r[5],h=r[6],f=r[8],m=r[9],p=r[10],v=r[12],g=r[13],_=r[14];let x=0,T=0;for(let r=0;r<a;r++){const r=t[x],i=t[x+1],a=t[x+2];e[T]=s*r+u*i+f*a+v,e[T+1]=l*r+d*i+m*a+g,e[T+2]=c*r+h*i+p*a+_,x+=n,T+=o}return e}function a(e,t,r){s(e.typedBuffer,t.typedBuffer,r,e.typedBufferStride,t.typedBufferStride)}function s(e,t,r,o=3,n=o){if(e.length/o!==Math.ceil(t.length/n))return void i.c.error("source and destination buffers need to have the same number of elements");const a=e.length/o,s=r[0],l=r[1],c=r[2],u=r[3],d=r[4],h=r[5],f=r[6],m=r[7],p=r[8];let v=0,g=0;for(let r=0;r<a;r++){const r=t[v],i=t[v+1],a=t[v+2];e[g]=s*r+u*i+f*a,e[g+1]=l*r+d*i+m*a,e[g+2]=c*r+h*i+p*a,v+=n,g+=o}}function l(e,t,r){c(e.typedBuffer,t,r,e.typedBufferStride)}function c(e,t,r,i=3){const o=Math.min(e.length/i,t.count),n=t.typedBuffer,a=t.typedBufferStride;let s=0,l=0;for(let t=0;t<o;t++)e[l]=r*n[s],e[l+1]=r*n[s+1],e[l+2]=r*n[s+2],s+=a,l+=i}function u(e,t){d(e.typedBuffer,t.typedBuffer,e.typedBufferStride,t.typedBufferStride)}function d(e,t,r=3,i=r){const o=Math.min(e.length/r,t.length/i);let n=0,a=0;for(let s=0;s<o;s++){const o=t[n],s=t[n+1],l=t[n+2],c=o*o+s*s+l*l;if(c>0){const t=1/Math.sqrt(c);e[a]=t*o,e[a+1]=t*s,e[a+2]=t*l}n+=i,a+=r}}Object.freeze(Object.defineProperty({__proto__:null,normalize:d,normalizeView:u,scale:c,scaleView:l,shiftRight:function(e,t,r){const i=Math.min(e.count,t.count),o=e.typedBuffer,n=e.typedBufferStride,a=t.typedBuffer,s=t.typedBufferStride;let l=0,c=0;for(let e=0;e<i;e++)o[c]=a[l]>>r,o[c+1]=a[l+1]>>r,o[c+2]=a[l+2]>>r,l+=s,c+=n},transformMat3:s,transformMat3View:a,transformMat4:n,transformMat4View:o},Symbol.toStringTag,{value:"Module"}))},79912:(e,t,r)=>{function i(){return new Float32Array(3)}function o(e){const t=new Float32Array(3);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t}function n(e,t,r){const i=new Float32Array(3);return i[0]=e,i[1]=t,i[2]=r,i}function a(){return i()}function s(){return n(1,1,1)}function l(){return n(1,0,0)}function c(){return n(0,1,0)}function u(){return n(0,0,1)}r.d(t,{b:()=>o,c:()=>i,f:()=>n});const d=a(),h=s(),f=l(),m=c(),p=u();Object.freeze(Object.defineProperty({__proto__:null,ONES:h,UNIT_X:f,UNIT_Y:m,UNIT_Z:p,ZEROS:d,clone:o,create:i,createView:function(e,t){return new Float32Array(e,t,3)},fromValues:n,ones:s,unitX:l,unitY:c,unitZ:u,zeros:a},Symbol.toStringTag,{value:"Module"}))},25015:(e,t,r)=>{var i;r.d(t,{Y:()=>i}),function(e){e[e.KILOBYTES=1024]="KILOBYTES",e[e.MEGABYTES=1048576]="MEGABYTES",e[e.GIGABYTES=1073741824]="GIGABYTES"}(i||(i={}))},22445:(e,t,r)=>{r.d(t,{r:()=>i});class i{constructor(){this._outer=new Map}clear(){this._outer.clear()}get empty(){return 0===this._outer.size}get(e,t){return this._outer.get(e)?.get(t)}set(e,t,r){const i=this._outer.get(e);i?i.set(t,r):this._outer.set(e,new Map([[t,r]]))}delete(e,t){const r=this._outer.get(e);r&&(r.delete(t),0===r.size&&this._outer.delete(e))}forEach(e){this._outer.forEach(((t,r)=>e(t,r)))}}},19480:(e,t,r)=>{r.d(t,{x:()=>o});var i=r(66581);class o{constructor(e){this._allocator=e,this._items=[],this._itemsPtr=0,this._grow()}get(){return 0===this._itemsPtr&&(0,i.Y)((()=>this._reset())),this._itemsPtr===this._items.length&&this._grow(),this._items[this._itemsPtr++]}_reset(){const e=Math.min(3*Math.max(8,this._itemsPtr),this._itemsPtr+3*n);this._items.length=Math.min(e,this._items.length),this._itemsPtr=0}_grow(){for(let e=0;e<Math.max(8,Math.min(this._items.length,n));e++)this._items.push(this._allocator())}}const n=1024},4745:(e,t,r)=>{function i(e){return 32+e.length}function o(e){if(!e)return 0;let t=l;for(const r in e)if(e.hasOwnProperty(r)){const o=e[r];switch(typeof o){case"string":t+=i(o);break;case"number":t+=16;break;case"boolean":t+=4}}return t}function n(e){if(!e)return 0;if(Array.isArray(e))return function(e){const t=e.length;if(0===t||"number"==typeof e[0])return 32+8*t;let r=c;for(let i=0;i<t;i++)r+=a(e[i]);return r}(e);let t=l;for(const r in e)e.hasOwnProperty(r)&&(t+=a(e[r]));return t}function a(e){switch(typeof e){case"object":return n(e);case"string":return i(e);case"number":return 16;case"boolean":return 4;default:return 8}}function s(e,t){return c+e.length*t}r.d(t,{Ul:()=>n,do:()=>s,f2:()=>o});const l=32,c=32},45150:(e,t,r)=>{r.d(t,{c:()=>i});const i=r(13802).Z.getLogger("esri.views.3d.support.buffer.math")},56215:(e,t,r)=>{r.d(t,{Ue:()=>l,nF:()=>u,zk:()=>c});var i=r(19431),o=r(19480),n=r(6766),a=r(8909),s=r(68817);function l(e){return e?{origin:(0,a.a)(e.origin),vector:(0,a.a)(e.vector)}:{origin:(0,a.c)(),vector:(0,a.c)()}}function c(e,t,r=l()){return(0,n.c)(r.origin,e),(0,n.b)(r.vector,t,e),r}function u(e,t,r){return function(e,t,r,o,a){const{vector:l,origin:c}=e,u=(0,n.b)(s.WM.get(),t,c),d=(0,n.e)(l,u)/(0,n.p)(l);return(0,n.g)(a,l,(0,i.uZ)(d,0,1)),(0,n.a)(a,a,e.origin)}(e,t,0,0,r)}(0,a.c)(),(0,a.c)(),new o.x((()=>l()))},97537:(e,t,r)=>{r.d(t,{JI:()=>c,Ue:()=>a,re:()=>l}),r(7753);var i=r(19480),o=r(6766),n=r(8909);function a(e){return e?s((0,n.a)(e.origin),(0,n.a)(e.direction)):s((0,n.c)(),(0,n.c)())}function s(e,t){return{origin:e,direction:t}}function l(e,t){const r=u.get();return r.origin=e,r.direction=t,r}function c(e,t,r){const i=(0,o.e)(e.direction,(0,o.b)(r,t,e.origin));return(0,o.a)(r,e.origin,(0,o.g)(r,e.direction,i)),r}r(68817);const u=new i.x((()=>a()))},5700:(e,t,r)=>{r.d(t,{EU:()=>a});var i=r(19431),o=r(6766),n=r(8909);function a(e,t){const r=(0,o.e)(e,t)/((0,o.l)(e)*(0,o.l)(t));return-(0,i.ZF)(r)}(0,n.c)(),(0,n.c)()},68817:(e,t,r)=>{r.d(t,{MP:()=>m,WM:()=>f});var i=r(25015),o=r(66581),n=r(34344),a=r(39100),s=r(61044),l=r(69666),c=r(8909),u=r(1983);class d{constructor(e,t,r){this._itemByteSize=e,this._itemCreate=t,this._buffers=new Array,this._items=new Array,this._itemsPtr=0,this._itemsPerBuffer=Math.ceil(r/this._itemByteSize)}get(){0===this._itemsPtr&&(0,o.Y)((()=>this._reset()));const e=Math.floor(this._itemsPtr/this._itemsPerBuffer);for(;this._buffers.length<=e;){const e=new ArrayBuffer(this._itemsPerBuffer*this._itemByteSize);for(let t=0;t<this._itemsPerBuffer;++t)this._items.push(this._itemCreate(e,t*this._itemByteSize));this._buffers.push(e)}return this._items[this._itemsPtr++]}_reset(){const e=2*(Math.floor(this._itemsPtr/this._itemsPerBuffer)+1);for(;this._buffers.length>e;)this._buffers.pop(),this._items.length=this._buffers.length*this._itemsPerBuffer;this._itemsPtr=0}static createVec2f64(e=h){return new d(16,l.c,e)}static createVec3f64(e=h){return new d(24,c.b,e)}static createVec4f64(e=h){return new d(32,u.a,e)}static createMat3f64(e=h){return new d(72,n.a,e)}static createMat4f64(e=h){return new d(128,a.a,e)}static createQuatf64(e=h){return new d(32,s.c,e)}get test(){return{size:this._buffers.length*this._itemsPerBuffer*this._itemByteSize}}}const h=4*i.Y.KILOBYTES,f=(d.createVec2f64(),d.createVec3f64()),m=(d.createVec4f64(),d.createMat3f64(),d.createMat4f64());d.createQuatf64()},44883:(e,t,r)=>{r.d(t,{t:()=>o});var i=r(66341);async function o(e,t){const{data:r}=await(0,i.default)(e,{responseType:"image",...t});return r}},74094:(e,t,r)=>{r.r(t),r.d(t,{fetch:()=>Qt,gltfToEngineResources:()=>tr,parseUrl:()=>er});var i=r(57989),o=r(1662),n=r(34344),a=r(24455),s=r(39100),l=r(6766),c=r(8909),u=r(37116),d=r(86098);function h(e,t=!1){return e<=d.DB?t?new Array(e).fill(0):new Array(e):new Float32Array(e)}var f=r(81936),m=r(86717),p=r(56999),v=r(385),g=r(14789),_=r(32101),x=r(47737),T=r(85636),b=r(1731),S=r(95970),A=r(19710),y=r(55542);function C(e){if(null==e)return null;const t=null!=e.offset?e.offset:y.Z,r=null!=e.rotation?e.rotation:0,i=null!=e.scale?e.scale:y.O,n=(0,A.f)(1,0,0,0,1,0,t[0],t[1],1),a=(0,A.f)(Math.cos(r),-Math.sin(r),0,Math.sin(r),Math.cos(r),0,0,0,1),s=(0,A.f)(i[0],0,0,0,i[1],0,0,0,1),l=(0,A.c)();return(0,o.m)(l,a,s),(0,o.m)(l,n,l),l}class w{constructor(){this.geometries=new Array,this.materials=new Array,this.textures=new Array}}class O{constructor(e,t,r){this.name=e,this.lodThreshold=t,this.pivotOffset=r,this.stageResources=new w,this.numberOfVertices=0}}var M=r(66341),E=r(67979),I=r(4745),R=r(70375),P=r(13802),L=r(22445),N=r(78668),H=r(26139),D=r(44883),F=r(85799),B=r(70984),V=r(35914);function z(e){if(e.length<d.DB)return Array.from(e);if((0,d.kJ)(e))return Float64Array.from(e);if(!("BYTES_PER_ELEMENT"in e))return Array.from(e);switch(e.BYTES_PER_ELEMENT){case 1:return Uint8Array.from(e);case 2:return(0,d.Uc)(e)?Uint16Array.from(e):Int16Array.from(e);case 4:return Float32Array.from(e);default:return Float64Array.from(e)}}var U=r(17135),G=r(15095);class W{constructor(e,t,r,i){this.primitiveIndices=e,this._numIndexPerPrimitive=t,this.indices=r,this.position=i,this._children=void 0,(0,G.hu)(e.length>=1),(0,G.hu)(r.length%this._numIndexPerPrimitive==0),(0,G.hu)(r.length>=e.length*this._numIndexPerPrimitive),(0,G.hu)(3===i.size||4===i.size);const{data:o,size:n}=i,a=e.length;let s=n*r[this._numIndexPerPrimitive*e[0]];k.clear(),k.push(s);const u=(0,c.f)(o[s],o[s+1],o[s+2]),d=(0,c.a)(u);for(let t=0;t<a;++t){const i=this._numIndexPerPrimitive*e[t];for(let e=0;e<this._numIndexPerPrimitive;++e){s=n*r[i+e],k.push(s);let t=o[s];u[0]=Math.min(t,u[0]),d[0]=Math.max(t,d[0]),t=o[s+1],u[1]=Math.min(t,u[1]),d[1]=Math.max(t,d[1]),t=o[s+2],u[2]=Math.min(t,u[2]),d[2]=Math.max(t,d[2])}}this.bbMin=u,this.bbMax=d;const h=(0,l.h)((0,c.c)(),this.bbMin,this.bbMax,.5);this.radius=.5*Math.max(Math.max(d[0]-u[0],d[1]-u[1]),d[2]-u[2]);let f=this.radius*this.radius;for(let e=0;e<k.length;++e){s=k.at(e);const t=o[s]-h[0],r=o[s+1]-h[1],i=o[s+2]-h[2],n=t*t+r*r+i*i;if(n<=f)continue;const a=Math.sqrt(n),l=.5*(a-this.radius);this.radius=this.radius+l,f=this.radius*this.radius;const c=l/a;h[0]+=t*c,h[1]+=r*c,h[2]+=i*c}this.center=h,k.clear()}getChildren(){if(this._children||(0,l.d)(this.bbMin,this.bbMax)<=1)return this._children;const e=(0,l.h)((0,c.c)(),this.bbMin,this.bbMax,.5),t=this.primitiveIndices.length,r=new Uint8Array(t),i=new Array(8);for(let e=0;e<8;++e)i[e]=0;const{data:o,size:n}=this.position;for(let a=0;a<t;++a){let t=0;const s=this._numIndexPerPrimitive*this.primitiveIndices[a];let l=n*this.indices[s],c=o[l],u=o[l+1],d=o[l+2];for(let e=1;e<this._numIndexPerPrimitive;++e){l=n*this.indices[s+e];const t=o[l],r=o[l+1],i=o[l+2];t<c&&(c=t),r<u&&(u=r),i<d&&(d=i)}c<e[0]&&(t|=1),u<e[1]&&(t|=2),d<e[2]&&(t|=4),r[a]=t,++i[t]}let a=0;for(let e=0;e<8;++e)i[e]>0&&++a;if(a<2)return;const s=new Array(8);for(let e=0;e<8;++e)s[e]=i[e]>0?new Uint32Array(i[e]):void 0;for(let e=0;e<8;++e)i[e]=0;for(let e=0;e<t;++e){const t=r[e];s[t][i[t]++]=this.primitiveIndices[e]}this._children=new Array;for(let e=0;e<8;++e)void 0!==s[e]&&this._children.push(new W(s[e],this._numIndexPerPrimitive,this.indices,this.position));return this._children}static prune(){k.prune()}}const k=new U.Z({deallocator:null});var $=r(10107),j=r(95399),q=r(19480),J=r(56215);function Y(e,t,r){return(0,l.b)(X,t,e),(0,l.b)(K,r,e),(0,l.l)((0,l.f)(X,X,K))/2}r(68817),new q.x(J.Ue),new q.x((()=>{return e?{p0:(0,c.a)(e.p0),p1:(0,c.a)(e.p1),p2:(0,c.a)(e.p2)}:{p0:(0,c.c)(),p1:(0,c.c)(),p2:(0,c.c)()};var e}));const X=(0,c.c)(),K=(0,c.c)(),Z=(0,c.c)(),Q=(0,c.c)(),ee=(0,c.c)(),te=(0,c.c)();var re=r(7958);class ie{constructor(e){this.channel=e,this.id=(0,re.D)()}}var oe=r(21414);r(30560),(0,c.c)(),new Float32Array(6);class ne extends $.c{constructor(e,t,r=[],i=null,o=j.U.Mesh,n=null,a=-1){super(),this.material=e,this.mapPositions=i,this.type=o,this.objectAndLayerIdColor=n,this.edgeIndicesLength=a,this.visible=!0,this._vertexAttributes=new Map,this._indices=new Map,this._boundingInfo=null;for(const[e,r]of t)r&&this._vertexAttributes.set(e,{...r});if(null==r||0===r.length){const e=function(e){const t=e.values().next().value;return null==t?0:t.data.length/t.size}(this._vertexAttributes),t=(0,V.KF)(e);this.edgeIndicesLength=this.edgeIndicesLength<0?e:this.edgeIndicesLength;for(const e of this._vertexAttributes.keys())this._indices.set(e,t)}else for(const[e,t]of r)t&&(this._indices.set(e,(0,V.mi)(t)),e===oe.T.POSITION&&(this.edgeIndicesLength=this.edgeIndicesLength<0?this._indices.get(e).length:this.edgeIndicesLength))}instantiate(e={}){const t=new ne(e.material||this.material,[],void 0,this.mapPositions,this.type,this.objectAndLayerIdColor,this.edgeIndicesLength);return this._vertexAttributes.forEach(((e,r)=>{e.exclusive=!1,t._vertexAttributes.set(r,e)})),this._indices.forEach(((e,r)=>t._indices.set(r,e))),t._boundingInfo=this._boundingInfo,t.transformation=e.transformation||this.transformation,t}get vertexAttributes(){return this._vertexAttributes}getMutableAttribute(e){let t=this._vertexAttributes.get(e);return t&&!t.exclusive&&(t={...t,exclusive:!0,data:z(t.data)},this._vertexAttributes.set(e,t)),t}setAttributeData(e,t){const r=this._vertexAttributes.get(e);r&&this._vertexAttributes.set(e,{...r,exclusive:!0,data:t})}get indices(){return this._indices}get indexCount(){const e=this._indices.values().next().value;return e?e.length:0}get faceCount(){return this.indexCount/3}get boundingInfo(){return null==this._boundingInfo&&(this._boundingInfo=this._calculateBoundingInfo()),this._boundingInfo}computeAttachmentOrigin(e){return!!(this.type===j.U.Mesh?this._computeAttachmentOriginTriangles(e):this.type===j.U.Line?this._computeAttachmentOriginLines(e):this._computeAttachmentOriginPoints(e))&&(null!=this._transformation&&(0,l.m)(e,e,this._transformation),!0)}_computeAttachmentOriginTriangles(e){const t=this.indices.get(oe.T.POSITION);return function(e,t,r){if(!e||!t)return!1;const{size:i,data:o}=e;(0,l.s)(r,0,0,0),(0,l.s)(te,0,0,0);let n=0,a=0;for(let e=0;e<t.length-2;e+=3){const s=t[e]*i,c=t[e+1]*i,u=t[e+2]*i;(0,l.s)(Z,o[s],o[s+1],o[s+2]),(0,l.s)(Q,o[c],o[c+1],o[c+2]),(0,l.s)(ee,o[u],o[u+1],o[u+2]);const d=Y(Z,Q,ee);d?((0,l.a)(Z,Z,Q),(0,l.a)(Z,Z,ee),(0,l.g)(Z,Z,1/3*d),(0,l.a)(r,r,Z),n+=d):((0,l.a)(te,te,Z),(0,l.a)(te,te,Q),(0,l.a)(te,te,ee),a+=3)}return!(0===a&&0===n||(0!==n?((0,l.g)(r,r,1/n),0):0===a||((0,l.g)(r,te,1/a),0)))}(this.vertexAttributes.get(oe.T.POSITION),t,e)}_computeAttachmentOriginLines(e){const t=this.vertexAttributes.get(oe.T.POSITION),r=this.indices.get(oe.T.POSITION);return function(e,t,r,i){if(!e)return!1;(0,l.s)(i,0,0,0),(0,l.s)(te,0,0,0);let o=0,n=0;const{size:a,data:s}=e,c=t?t.length-1:s.length/a-1,u=c+(r?2:0);for(let e=0;e<u;e+=2){const r=e<c?e:c,u=e<c?e+1:0,d=(t?t[r]:r)*a,h=(t?t[u]:u)*a;Z[0]=s[d],Z[1]=s[d+1],Z[2]=s[d+2],Q[0]=s[h],Q[1]=s[h+1],Q[2]=s[h+2],(0,l.g)(Z,(0,l.a)(Z,Z,Q),.5);const f=(0,l.j)(Z,Q);f>0?((0,l.a)(i,i,(0,l.g)(Z,Z,f)),o+=f):0===o&&((0,l.a)(te,te,Z),n++)}return 0!==o?((0,l.g)(i,i,1/o),!0):0!==n&&((0,l.g)(i,te,1/n),!0)}(t,r,r&&function(e,t,r){return!(!("isClosed"in e)||!e.isClosed)&&(r?r.length>2:t.data.length>6)}(this.material.parameters,t,r),e)}_computeAttachmentOriginPoints(e){const t=this.indices.get(oe.T.POSITION);return function(e,t,r){if(!e||!t)return!1;const{size:i,data:o}=e;(0,l.s)(r,0,0,0);let n=-1,a=0;for(let e=0;e<t.length;e++){const s=t[e]*i;n!==s&&(r[0]+=o[s],r[1]+=o[s+1],r[2]+=o[s+2],a++),n=s}return a>1&&(0,l.g)(r,r,1/a),a>0}(this.vertexAttributes.get(oe.T.POSITION),t,e)}invalidateBoundingInfo(){this._boundingInfo=null}_calculateBoundingInfo(){const e=this.indices.get(oe.T.POSITION),t=this.vertexAttributes.get(oe.T.POSITION);if(!e||0===e.length||!t)return null;const r=this.type===j.U.Mesh?3:1;(0,G.hu)(e.length%r==0,"Indexing error: "+e.length+" not divisible by "+r);const i=(0,V.KF)(e.length/r);return new W(i,r,e,t)}get transformation(){return this._transformation??s.I}set transformation(e){this._transformation=e&&e!==s.I?(0,s.b)(e):null}get shaderTransformation(){return null!=this._shaderTransformer?this._shaderTransformer(this.transformation):this.transformation}get shaderTransformer(){return this._shaderTransformer}set shaderTransformer(e){this._shaderTransformer=e}get hasVolatileTransformation(){return null!=this._shaderTransformer}addHighlight(){const e=new ie(B.V_.Highlight);return this.highlights=function(e,t){return null==e&&(e=[]),e.push(t),e}(this.highlights,e),e}removeHighlight(e){this.highlights=function(e,t){if(null==e)return null;const r=e.filter((e=>e!==t));return 0===r.length?null:r}(this.highlights,e)}}var ae=r(39994),se=r(31355),le=r(61681),ce=r(3466),ue=r(73401),de=r(36567);let he;var fe,me;(me=fe||(fe={}))[me.ETC1_RGB=0]="ETC1_RGB",me[me.ETC2_RGBA=1]="ETC2_RGBA",me[me.BC1_RGB=2]="BC1_RGB",me[me.BC3_RGBA=3]="BC3_RGBA",me[me.BC4_R=4]="BC4_R",me[me.BC5_RG=5]="BC5_RG",me[me.BC7_M6_RGB=6]="BC7_M6_RGB",me[me.BC7_M5_RGBA=7]="BC7_M5_RGBA",me[me.PVRTC1_4_RGB=8]="PVRTC1_4_RGB",me[me.PVRTC1_4_RGBA=9]="PVRTC1_4_RGBA",me[me.ASTC_4x4_RGBA=10]="ASTC_4x4_RGBA",me[me.ATC_RGB=11]="ATC_RGB",me[me.ATC_RGBA=12]="ATC_RGBA",me[me.FXT1_RGB=17]="FXT1_RGB",me[me.PVRTC2_4_RGB=18]="PVRTC2_4_RGB",me[me.PVRTC2_4_RGBA=19]="PVRTC2_4_RGBA",me[me.ETC2_EAC_R11=20]="ETC2_EAC_R11",me[me.ETC2_EAC_RG11=21]="ETC2_EAC_RG11",me[me.RGBA32=13]="RGBA32",me[me.RGB565=14]="RGB565",me[me.BGR565=15]="BGR565",me[me.RGBA4444=16]="RGBA4444";var pe=r(91907),ve=r(71449),ge=r(62486);let _e=null,xe=null;async function Te(){return null==xe&&(xe=function(){if(null==he){const e=e=>(0,de.V)(`esri/libs/basisu/${e}`);he=r.e(21681).then(r.bind(r,21681)).then((e=>e.b)).then((({default:t})=>t({locateFile:e}).then((e=>(e.initializeBasis(),delete e.then,e)))))}return he}(),_e=await xe),xe}function be(e,t,r,i,o){const n=(0,ge.RG)(t?pe.q_.COMPRESSED_RGBA8_ETC2_EAC:pe.q_.COMPRESSED_RGB8_ETC2),a=o&&e>1?(4**e-1)/(3*4**(e-1)):1;return Math.ceil(r*i*n*a)}function Se(e){return e.getNumImages()>=1&&!e.isUASTC()}function Ae(e){return e.getFaces()>=1&&e.isETC1S()}function ye(e,t,r,i,o,n,a,s){const{compressedTextureETC:l,compressedTextureS3TC:c}=e.capabilities,[u,d]=l?i?[fe.ETC2_RGBA,pe.q_.COMPRESSED_RGBA8_ETC2_EAC]:[fe.ETC1_RGB,pe.q_.COMPRESSED_RGB8_ETC2]:c?i?[fe.BC3_RGBA,pe.q_.COMPRESSED_RGBA_S3TC_DXT5_EXT]:[fe.BC1_RGB,pe.q_.COMPRESSED_RGB_S3TC_DXT1_EXT]:[fe.RGBA32,pe.VI.RGBA],h=t.hasMipmap?r:Math.min(1,r),f=[];for(let e=0;e<h;e++)f.push(new Uint8Array(a(e,u))),s(e,u,f[e]);return t.internalFormat=d,t.hasMipmap=f.length>1,t.samplingMode=t.hasMipmap?pe.cw.LINEAR_MIPMAP_LINEAR:pe.cw.LINEAR,t.width=o,t.height=n,new ve.x(e,t,{type:"compressed",levels:f})}const Ce=P.Z.getLogger("esri.views.3d.webgl-engine.lib.DDSUtil");function we(e){return e.charCodeAt(0)+(e.charCodeAt(1)<<8)+(e.charCodeAt(2)<<16)+(e.charCodeAt(3)<<24)}const Oe=we("DXT1"),Me=we("DXT3"),Ee=we("DXT5");var Ie,Re,Pe=r(80479);class Le extends $.c{constructor(e,t){super(),this._data=e,this.type=j.U.Texture,this._glTexture=null,this._loadingPromise=null,this._loadingController=null,this.events=new se.Z,this.parameters=t||{},this.parameters.mipmap=!1!==this.parameters.mipmap,this.parameters.noUnpackFlip=this.parameters.noUnpackFlip||!1,this.parameters.preMultiplyAlpha=this.parameters.preMultiplyAlpha||!1,this.parameters.wrap=this.parameters.wrap||{s:pe.e8.REPEAT,t:pe.e8.REPEAT},this._startPreload(e)}_startPreload(e){null!=e&&(e instanceof HTMLVideoElement?this._startPreloadVideoElement(e):e instanceof HTMLImageElement&&this._startPreloadImageElement(e))}_startPreloadVideoElement(e){if(!((0,ce.jc)(e.src)||"auto"===e.preload&&e.crossOrigin)){e.preload="auto",e.crossOrigin="anonymous";const t=!e.paused;if(e.src=e.src,t&&e.autoplay){const t=()=>{e.removeEventListener("canplay",t),e.play()};e.addEventListener("canplay",t)}}}_startPreloadImageElement(e){(0,ce.HK)(e.src)||(0,ce.jc)(e.src)||e.crossOrigin||(e.crossOrigin="anonymous",e.src=e.src)}dispose(){this._data=void 0}_createDescriptor(e){const t=new Pe.X;return t.wrapMode=this.parameters.wrap??pe.e8.REPEAT,t.flipped=!this.parameters.noUnpackFlip,t.samplingMode=this.parameters.mipmap?pe.cw.LINEAR_MIPMAP_LINEAR:pe.cw.LINEAR,t.hasMipmap=!!this.parameters.mipmap,t.preMultiplyAlpha=!!this.parameters.preMultiplyAlpha,t.maxAnisotropy=this.parameters.maxAnisotropy??(this.parameters.mipmap?e.parameters.maxMaxAnisotropy:1),t}get glTexture(){return this._glTexture}get memoryEstimate(){return this._glTexture?.gpuMemoryUsage||function(e,t){if(null==e)return 0;if((0,d.eP)(e)||(0,d.lq)(e))return t.encoding===B.Ti.KTX2_ENCODING?function(e,t){if(null==_e)return e.byteLength;const r=new _e.KTX2File(new Uint8Array(e)),i=Ae(r)?be(r.getLevels(),r.getHasAlpha(),r.getWidth(),r.getHeight(),t):0;return r.close(),r.delete(),i}(e,!!t.mipmap):t.encoding===B.Ti.BASIS_ENCODING?function(e,t){if(null==_e)return e.byteLength;const r=new _e.BasisFile(new Uint8Array(e)),i=Se(r)?be(r.getNumLevels(0),r.getHasAlpha(),r.getImageWidth(0,0),r.getImageHeight(0,0),t):0;return r.close(),r.delete(),i}(e,!!t.mipmap):e.byteLength;const{width:r,height:i}=e instanceof Image||e instanceof ImageData||e instanceof HTMLCanvasElement||e instanceof HTMLVideoElement?Ne(e):t;return(t.mipmap?4/3:1)*r*i*(t.components||4)||0}(this._data,this.parameters)}load(e){if(null!=this._glTexture)return this._glTexture;if(this._loadingPromise)return this._loadingPromise;const t=this._data;return null==t?(this._glTexture=new ve.x(e,this._createDescriptor(e),null),this._glTexture):"string"==typeof t?this._loadFromURL(e,t):t instanceof Image?this._loadFromImageElement(e,t):t instanceof HTMLVideoElement?this._loadFromVideoElement(e,t):t instanceof ImageData||t instanceof HTMLCanvasElement?this._loadFromImage(e,t):((0,d.eP)(t)||(0,d.lq)(t))&&this.parameters.encoding===B.Ti.DDS_ENCODING?(this._data=void 0,this._loadFromDDSData(e,t)):((0,d.eP)(t)||(0,d.lq)(t))&&this.parameters.encoding===B.Ti.KTX2_ENCODING?(this._data=void 0,this._loadFromKTX2(e,t)):((0,d.eP)(t)||(0,d.lq)(t))&&this.parameters.encoding===B.Ti.BASIS_ENCODING?(this._data=void 0,this._loadFromBasis(e,t)):(0,d.lq)(t)?this._loadFromPixelData(e,t):(0,d.eP)(t)?this._loadFromPixelData(e,new Uint8Array(t)):null}get requiresFrameUpdates(){return this._data instanceof HTMLVideoElement}frameUpdate(e){return this._data instanceof HTMLVideoElement&&null!=this._glTexture?this._data.readyState<Ie.HAVE_CURRENT_DATA||e===this._data.currentTime?e:(this._glTexture.setData(this._data),this._glTexture.descriptor.hasMipmap&&this._glTexture.generateMipmap(),this.parameters.updateCallback&&this.parameters.updateCallback(),this._data.currentTime):e}_loadFromDDSData(e,t){return this._glTexture=function(e,t,r){const i=function(e,t){const r=new Int32Array(e,0,31);if(542327876!==r[0])return Ce.error("Invalid magic number in DDS header"),null;if(!(4&r[20]))return Ce.error("Unsupported format, must contain a FourCC code"),null;const i=r[21];let o,n;switch(i){case Oe:o=8,n=pe.q_.COMPRESSED_RGB_S3TC_DXT1_EXT;break;case Me:o=16,n=pe.q_.COMPRESSED_RGBA_S3TC_DXT3_EXT;break;case Ee:o=16,n=pe.q_.COMPRESSED_RGBA_S3TC_DXT5_EXT;break;default:return Ce.error("Unsupported FourCC code:",function(e){return String.fromCharCode(255&e,e>>8&255,e>>16&255,e>>24&255)}(i)),null}let a=1,s=r[4],l=r[3];0==(3&s)&&0==(3&l)||(Ce.warn("Rounding up compressed texture size to nearest multiple of 4."),s=s+3&-4,l=l+3&-4);const c=s,u=l;let d,h;131072&r[2]&&!1!==t&&(a=Math.max(1,r[7]));let f=r[1]+4;const m=[];for(let t=0;t<a;++t)h=(s+3>>2)*(l+3>>2)*o,d=new Uint8Array(e,f,h),m.push(d),f+=h,s=Math.max(1,s>>1),l=Math.max(1,l>>1);return{textureData:{type:"compressed",levels:m},internalFormat:n,width:c,height:u}}(r,t.hasMipmap??!1);if(null==i)throw new Error("DDS texture data is null");const{textureData:o,internalFormat:n,width:a,height:s}=i;return t.samplingMode=o.levels.length>1?pe.cw.LINEAR_MIPMAP_LINEAR:pe.cw.LINEAR,t.hasMipmap=o.levels.length>1,t.internalFormat=n,t.width=a,t.height=s,new ve.x(e,t,o)}(e,this._createDescriptor(e),t),this._glTexture}_loadFromKTX2(e,t){return this._loadAsync((()=>async function(e,t,r){null==_e&&(_e=await Te());const i=new _e.KTX2File(new Uint8Array(r));if(!Ae(i))return null;i.startTranscoding();const o=ye(e,t,i.getLevels(),i.getHasAlpha(),i.getWidth(),i.getHeight(),((e,t)=>i.getImageTranscodedSizeInBytes(e,0,0,t)),((e,t,r)=>i.transcodeImage(r,e,0,0,t,0,-1,-1)));return i.close(),i.delete(),o}(e,this._createDescriptor(e),t).then((e=>(this._glTexture=e,e)))))}_loadFromBasis(e,t){return this._loadAsync((()=>async function(e,t,r){null==_e&&(_e=await Te());const i=new _e.BasisFile(new Uint8Array(r));if(!Se(i))return null;i.startTranscoding();const o=ye(e,t,i.getNumLevels(0),i.getHasAlpha(),i.getImageWidth(0,0),i.getImageHeight(0,0),((e,t)=>i.getImageTranscodedSizeInBytes(0,e,t)),((e,t,r)=>i.transcodeImage(r,0,e,t,0,0)));return i.close(),i.delete(),o}(e,this._createDescriptor(e),t).then((e=>(this._glTexture=e,e)))))}_loadFromPixelData(e,t){(0,G.hu)(this.parameters.width>0&&this.parameters.height>0);const r=this._createDescriptor(e);return r.pixelFormat=1===this.parameters.components?pe.VI.LUMINANCE:3===this.parameters.components?pe.VI.RGB:pe.VI.RGBA,r.width=this.parameters.width??0,r.height=this.parameters.height??0,this._glTexture=new ve.x(e,r,t),this._glTexture}_loadFromURL(e,t){return this._loadAsync((async r=>{const i=await(0,D.t)(t,{signal:r});return(0,N.k_)(r),this._loadFromImage(e,i)}))}_loadFromImageElement(e,t){return t.complete?this._loadFromImage(e,t):this._loadAsync((async r=>{const i=await(0,ue.fY)(t,t.src,!1,r);return(0,N.k_)(r),this._loadFromImage(e,i)}))}_loadFromVideoElement(e,t){return t.readyState>=Ie.HAVE_CURRENT_DATA?this._loadFromImage(e,t):this._loadFromVideoElementAsync(e,t)}_loadFromVideoElementAsync(e,t){return this._loadAsync((r=>new Promise(((i,o)=>{const n=()=>{t.removeEventListener("loadeddata",a),t.removeEventListener("error",s),(0,le.hw)(l)},a=()=>{t.readyState>=Ie.HAVE_CURRENT_DATA&&(n(),i(this._loadFromImage(e,t)))},s=e=>{n(),o(e||new R.Z("Failed to load video"))};t.addEventListener("loadeddata",a),t.addEventListener("error",s);const l=(0,N.fu)(r,(()=>s((0,N.zE)())))}))))}_loadFromImage(e,t){const r=Ne(t);this.parameters.width=r.width,this.parameters.height=r.height;const i=this._createDescriptor(e);return i.pixelFormat=3===this.parameters.components?pe.VI.RGB:pe.VI.RGBA,i.width=r.width,i.height=r.height,this._glTexture=new ve.x(e,i,t),this._glTexture}_loadAsync(e){const t=new AbortController;this._loadingController=t;const r=e(t.signal);this._loadingPromise=r;const i=()=>{this._loadingController===t&&(this._loadingController=null),this._loadingPromise===r&&(this._loadingPromise=null)};return r.then(i,i),r}unload(){if(this._glTexture=(0,le.M2)(this._glTexture),null!=this._loadingController){const e=this._loadingController;this._loadingController=null,this._loadingPromise=null,e.abort()}this.events.emit("unloaded")}}function Ne(e){return e instanceof HTMLVideoElement?{width:e.videoWidth,height:e.videoHeight}:e}(Re=Ie||(Ie={}))[Re.HAVE_NOTHING=0]="HAVE_NOTHING",Re[Re.HAVE_METADATA=1]="HAVE_METADATA",Re[Re.HAVE_CURRENT_DATA=2]="HAVE_CURRENT_DATA",Re[Re.HAVE_FUTURE_DATA=3]="HAVE_FUTURE_DATA",Re[Re.HAVE_ENOUGH_DATA=4]="HAVE_ENOUGH_DATA";var He,De,Fe=r(65684),Be=r(44685),Ve=r(35031),ze=r(7792),Ue=r(2833),Ge=r(3864),We=r(97009),ke=r(7358),$e=r(12045);(De=He||(He={}))[De.INTEGRATED_MESH=0]="INTEGRATED_MESH",De[De.OPAQUE_TERRAIN=1]="OPAQUE_TERRAIN",De[De.OPAQUE_MATERIAL=2]="OPAQUE_MATERIAL",De[De.TRANSPARENT_MATERIAL=3]="TRANSPARENT_MATERIAL",De[De.TRANSPARENT_TERRAIN=4]="TRANSPARENT_TERRAIN",De[De.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL=5]="TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL",De[De.OCCLUDED_TERRAIN=6]="OCCLUDED_TERRAIN",De[De.OCCLUDER_MATERIAL=7]="OCCLUDER_MATERIAL",De[De.TRANSPARENT_OCCLUDER_MATERIAL=8]="TRANSPARENT_OCCLUDER_MATERIAL",De[De.OCCLUSION_PIXELS=9]="OCCLUSION_PIXELS",De[De.POSTPROCESSING_ENVIRONMENT_OPAQUE=10]="POSTPROCESSING_ENVIRONMENT_OPAQUE",De[De.POSTPROCESSING_ENVIRONMENT_TRANSPARENT=11]="POSTPROCESSING_ENVIRONMENT_TRANSPARENT",De[De.LASERLINES=12]="LASERLINES",De[De.LASERLINES_CONTRAST_CONTROL=13]="LASERLINES_CONTRAST_CONTROL",De[De.HUD_MATERIAL=14]="HUD_MATERIAL",De[De.LABEL_MATERIAL=15]="LABEL_MATERIAL",De[De.LINE_CALLOUTS=16]="LINE_CALLOUTS",De[De.LINE_CALLOUTS_HUD_DEPTH=17]="LINE_CALLOUTS_HUD_DEPTH",De[De.DRAPED_MATERIAL=18]="DRAPED_MATERIAL",De[De.DRAPED_WATER=19]="DRAPED_WATER",De[De.VOXEL=20]="VOXEL",De[De.MAX_SLOTS=21]="MAX_SLOTS";var je=r(10663),qe=r(61044),Je=r(79912),Ye=r(45612);const Xe=(0,c.c)(),Ke=(0,c.c)(),Ze=(0,c.c)(),Qe=new class{constructor(e=0){this.offset=e,this.sphere=(0,Ye.c)(),this.tmpVertex=(0,c.c)()}applyToVertex(e,t,r){const i=this.objectTransform.transform;let o=i[0]*e+i[4]*t+i[8]*r+i[12],n=i[1]*e+i[5]*t+i[9]*r+i[13],a=i[2]*e+i[6]*t+i[10]*r+i[14];const s=this.offset/Math.sqrt(o*o+n*n+a*a);o+=o*s,n+=n*s,a+=a*s;const l=this.objectTransform.inverse;return this.tmpVertex[0]=l[0]*o+l[4]*n+l[8]*a+l[12],this.tmpVertex[1]=l[1]*o+l[5]*n+l[9]*a+l[13],this.tmpVertex[2]=l[2]*o+l[6]*n+l[10]*a+l[14],this.tmpVertex}applyToMinMax(e,t){const r=this.offset/Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]);e[0]+=e[0]*r,e[1]+=e[1]*r,e[2]+=e[2]*r;const i=this.offset/Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]);t[0]+=t[0]*i,t[1]+=t[1]*i,t[2]+=t[2]*i}applyToAabb(e){const t=this.offset/Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]);e[0]+=e[0]*t,e[1]+=e[1]*t,e[2]+=e[2]*t;const r=this.offset/Math.sqrt(e[3]*e[3]+e[4]*e[4]+e[5]*e[5]);return e[3]+=e[3]*r,e[4]+=e[4]*r,e[5]+=e[5]*r,e}applyToBoundingSphere(e){const t=Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]),r=this.offset/t;return this.sphere[0]=e[0]+e[0]*r,this.sphere[1]=e[1]+e[1]*r,this.sphere[2]=e[2]+e[2]*r,this.sphere[3]=e[3]+e[3]*this.offset/t,this.sphere}};new class{constructor(e=0){this.componentLocalOriginLength=0,this._tmpVertex=(0,c.c)(),this._mbs=(0,Ye.c)(),this._obb={center:(0,c.c)(),halfSize:(0,Je.c)(),quaternion:null},this._totalOffset=0,this._offset=0,this._resetOffset(e)}_resetOffset(e){this._offset=e,this._totalOffset=e}set offset(e){this._resetOffset(e)}get offset(){return this._offset}set componentOffset(e){this._totalOffset=this._offset+e}set localOrigin(e){this.componentLocalOriginLength=Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2])}applyToVertex(e,t,r){const i=e,o=t,n=r+this.componentLocalOriginLength,a=this._totalOffset/Math.sqrt(i*i+o*o+n*n);return this._tmpVertex[0]=e+i*a,this._tmpVertex[1]=t+o*a,this._tmpVertex[2]=r+n*a,this._tmpVertex}applyToAabb(e){const t=e[0],r=e[1],i=e[2]+this.componentLocalOriginLength,o=e[3],n=e[4],a=e[5]+this.componentLocalOriginLength,s=t*o<0?0:Math.min(Math.abs(t),Math.abs(o)),l=r*n<0?0:Math.min(Math.abs(r),Math.abs(n)),c=i*a<0?0:Math.min(Math.abs(i),Math.abs(a)),u=Math.sqrt(s*s+l*l+c*c);if(u<this._totalOffset)return e[0]-=t<0?this._totalOffset:0,e[1]-=r<0?this._totalOffset:0,e[2]-=i<0?this._totalOffset:0,e[3]+=o>0?this._totalOffset:0,e[4]+=n>0?this._totalOffset:0,e[5]+=a>0?this._totalOffset:0,e;const d=Math.max(Math.abs(t),Math.abs(o)),h=Math.max(Math.abs(r),Math.abs(n)),f=Math.max(Math.abs(i),Math.abs(a)),m=Math.sqrt(d*d+h*h+f*f),p=this._totalOffset/m,v=this._totalOffset/u;return e[0]+=t*(t>0?p:v),e[1]+=r*(r>0?p:v),e[2]+=i*(i>0?p:v),e[3]+=o*(o<0?p:v),e[4]+=n*(n<0?p:v),e[5]+=a*(a<0?p:v),e}applyToMbs(e){const t=Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]),r=this._totalOffset/t;return this._mbs[0]=e[0]+e[0]*r,this._mbs[1]=e[1]+e[1]*r,this._mbs[2]=e[2]+e[2]*r,this._mbs[3]=e[3]+e[3]*this._totalOffset/t,this._mbs}applyToObb(e){const t=e.center,r=this._totalOffset/Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]);this._obb.center[0]=t[0]+t[0]*r,this._obb.center[1]=t[1]+t[1]*r,this._obb.center[2]=t[2]+t[2]*r,(0,l.q)(this._obb.halfSize,e.halfSize,e.quaternion),(0,l.a)(this._obb.halfSize,this._obb.halfSize,e.center);const i=this._totalOffset/Math.sqrt(this._obb.halfSize[0]*this._obb.halfSize[0]+this._obb.halfSize[1]*this._obb.halfSize[1]+this._obb.halfSize[2]*this._obb.halfSize[2]);return this._obb.halfSize[0]+=this._obb.halfSize[0]*i,this._obb.halfSize[1]+=this._obb.halfSize[1]*i,this._obb.halfSize[2]+=this._obb.halfSize[2]*i,(0,l.b)(this._obb.halfSize,this._obb.halfSize,e.center),(0,je.c)(et,e.quaternion),(0,l.q)(this._obb.halfSize,this._obb.halfSize,et),this._obb.halfSize[0]*=this._obb.halfSize[0]<0?-1:1,this._obb.halfSize[1]*=this._obb.halfSize[1]<0?-1:1,this._obb.halfSize[2]*=this._obb.halfSize[2]<0?-1:1,this._obb.quaternion=e.quaternion,this._obb}},new class{constructor(e=0){this.offset=e,this.tmpVertex=(0,c.c)()}applyToVertex(e,t,r){const i=e+this.localOrigin[0],o=t+this.localOrigin[1],n=r+this.localOrigin[2],a=this.offset/Math.sqrt(i*i+o*o+n*n);return this.tmpVertex[0]=e+i*a,this.tmpVertex[1]=t+o*a,this.tmpVertex[2]=r+n*a,this.tmpVertex}applyToAabb(e){for(let t=0;t<3;++t)Xe[t]=e[0+t]+this.localOrigin[t],Ke[t]=e[3+t]+this.localOrigin[t],Ze[t]=Xe[t];const t=this.applyToVertex(Xe[0],Xe[1],Xe[2]);for(let r=0;r<3;++r)e[r]=t[r],e[r+3]=t[r];const r=t=>{const r=this.applyToVertex(t[0],t[1],t[2]);for(let t=0;t<3;++t)e[t]=Math.min(e[t],r[t]),e[t+3]=Math.max(e[t+3],r[t])};for(let e=1;e<8;++e){for(let t=0;t<3;++t)Ze[t]=0==(e&1<<t)?Xe[t]:Ke[t];r(Ze)}let i=0;for(let e=0;e<3;++e)Xe[e]*Ke[e]<0&&(i|=1<<e);if(0!==i&&7!==i)for(let e=0;e<8;++e)if(0==(i&e)){for(let t=0;t<3;++t)Ze[t]=0!=(i&1<<t)?0:0!=(e&1<<t)?Xe[t]:Ke[t];r(Ze)}for(let t=0;t<3;++t)e[t]-=this.localOrigin[t],e[t+3]-=this.localOrigin[t];return e}};const et=(0,qe.a)();function tt(e,t,r,i){const o=r.typedBuffer,n=r.typedBufferStride,a=e.length;i*=n;for(let r=0;r<a;++r){const a=2*e[r];o[i]=t[a],o[i+1]=t[a+1],i+=n}}function rt(e,t,r,i,o){const n=r.typedBuffer,a=r.typedBufferStride,s=e.length;if(i*=a,null==o||1===o)for(let r=0;r<s;++r){const o=3*e[r];n[i]=t[o],n[i+1]=t[o+1],n[i+2]=t[o+2],i+=a}else for(let r=0;r<s;++r){const s=3*e[r];for(let e=0;e<o;++e)n[i]=t[s],n[i+1]=t[s+1],n[i+2]=t[s+2],i+=a}}function it(e,t,r,i,o=1){const n=r.typedBuffer,a=r.typedBufferStride,s=e.length;if(i*=a,1===o)for(let r=0;r<s;++r){const o=4*e[r];n[i]=t[o],n[i+1]=t[o+1],n[i+2]=t[o+2],n[i+3]=t[o+3],i+=a}else for(let r=0;r<s;++r){const s=4*e[r];for(let e=0;e<o;++e)n[i]=t[s],n[i+1]=t[s+1],n[i+2]=t[s+2],n[i+3]=t[s+3],i+=a}}function ot(e,t,r,i,o=1){const n=t.typedBuffer,a=t.typedBufferStride;if(i*=a,1===o)for(let t=0;t<r;++t)n[i]=e[0],n[i+1]=e[1],n[i+2]=e[2],n[i+3]=e[3],i+=a;else for(let t=0;t<r;++t)for(let t=0;t<o;++t)n[i]=e[0],n[i+1]=e[1],n[i+2]=e[2],n[i+3]=e[3],i+=a}function nt(e,t,r,i,o,n,s){switch(e){case oe.T.POSITION:{(0,G.hu)(3===t.size);const o=n.getField(e,f.ct);(0,G.hu)(!!o,`No buffer view for ${e}`),o&&function(e,t,r,i,o,n=1){if(!r)return void rt(e,t,i,o,n);const s=i.typedBuffer,l=i.typedBufferStride,c=e.length,u=r[0],d=r[1],h=r[2],f=r[4],m=r[5],p=r[6],v=r[8],g=r[9],_=r[10],x=r[12],T=r[13],b=r[14];o*=l;let S=0,A=0,y=0;const C=(0,a.y)(r)?e=>{S=t[e]+x,A=t[e+1]+T,y=t[e+2]+b}:e=>{const r=t[e],i=t[e+1],o=t[e+2];S=u*r+f*i+v*o+x,A=d*r+m*i+g*o+T,y=h*r+p*i+_*o+b};if(1===n)for(let t=0;t<c;++t)C(3*e[t]),s[o]=S,s[o+1]=A,s[o+2]=y,o+=l;else for(let t=0;t<c;++t){C(3*e[t]);for(let e=0;e<n;++e)s[o]=S,s[o+1]=A,s[o+2]=y,o+=l}}(r,t.data,i,o,s);break}case oe.T.NORMAL:{(0,G.hu)(3===t.size);const i=n.getField(e,f.ct);(0,G.hu)(!!i,`No buffer view for ${e}`),i&&function(e,t,r,i,o,n=1){if(!r)return void rt(e,t,i,o,n);const s=r,l=i.typedBuffer,c=i.typedBufferStride,u=e.length,d=s[0],h=s[1],f=s[2],m=s[4],p=s[5],v=s[6],g=s[8],_=s[9],x=s[10],T=!(0,a.z)(s),b=1e-6,S=1-b;o*=c;let A=0,y=0,C=0;const w=(0,a.y)(s)?e=>{A=t[e],y=t[e+1],C=t[e+2]}:e=>{const r=t[e],i=t[e+1],o=t[e+2];A=d*r+m*i+g*o,y=h*r+p*i+_*o,C=f*r+v*i+x*o};if(1===n)if(T)for(let t=0;t<u;++t){w(3*e[t]);const r=A*A+y*y+C*C;if(r<S&&r>b){const e=1/Math.sqrt(r);l[o]=A*e,l[o+1]=y*e,l[o+2]=C*e}else l[o]=A,l[o+1]=y,l[o+2]=C;o+=c}else for(let t=0;t<u;++t)w(3*e[t]),l[o]=A,l[o+1]=y,l[o+2]=C,o+=c;else for(let t=0;t<u;++t){if(w(3*e[t]),T){const e=A*A+y*y+C*C;if(e<S&&e>b){const t=1/Math.sqrt(e);A*=t,y*=t,C*=t}}for(let e=0;e<n;++e)l[o]=A,l[o+1]=y,l[o+2]=C,o+=c}}(r,t.data,o,i,s);break}case oe.T.NORMALCOMPRESSED:{(0,G.hu)(2===t.size);const i=n.getField(e,f.or);(0,G.hu)(!!i,`No buffer view for ${e}`),i&&tt(r,t.data,i,s);break}case oe.T.UV0:{(0,G.hu)(2===t.size);const i=n.getField(e,f.Eu);(0,G.hu)(!!i,`No buffer view for ${e}`),i&&tt(r,t.data,i,s);break}case oe.T.COLOR:case oe.T.SYMBOLCOLOR:{const i=n.getField(e,f.mc);(0,G.hu)(!!i,`No buffer view for ${e}`),(0,G.hu)(3===t.size||4===t.size),!i||3!==t.size&&4!==t.size||function(e,t,r,i,o,n=1){const a=i.typedBuffer,s=i.typedBufferStride,l=e.length;if(o*=s,r!==t.length||4!==r)if(1!==n)if(4!==r)for(let r=0;r<l;++r){const i=3*e[r];for(let e=0;e<n;++e)a[o]=t[i],a[o+1]=t[i+1],a[o+2]=t[i+2],a[o+3]=255,o+=s}else for(let r=0;r<l;++r){const i=4*e[r];for(let e=0;e<n;++e)a[o]=t[i],a[o+1]=t[i+1],a[o+2]=t[i+2],a[o+3]=t[i+3],o+=s}else{if(4===r){for(let r=0;r<l;++r){const i=4*e[r];a[o]=t[i],a[o+1]=t[i+1],a[o+2]=t[i+2],a[o+3]=t[i+3],o+=s}return}for(let r=0;r<l;++r){const i=3*e[r];a[o]=t[i],a[o+1]=t[i+1],a[o+2]=t[i+2],a[o+3]=255,o+=s}}else{a[o]=t[0],a[o+1]=t[1],a[o+2]=t[2],a[o+3]=t[3];const e=new Uint32Array(i.typedBuffer.buffer,i.start),r=s/4,c=e[o/=4];o+=r;const u=l*n;for(let t=1;t<u;++t)e[o]=c,o+=r}}(r,t.data,t.size,i,s);break}case oe.T.COLORFEATUREATTRIBUTE:{const i=n.getField(e,f.ly);(0,G.hu)(!!i,`No buffer view for ${e}`),(0,G.hu)(1===t.size),i&&1===t.size&&function(e,t,r,i){const o=r.typedBuffer,n=r.typedBufferStride,a=e.length,s=t[0];i*=n;for(let e=0;e<a;++e)o[i]=s,i+=n}(r,t.data,i,s);break}case oe.T.TANGENT:{(0,G.hu)(4===t.size);const i=n.getField(e,f.ek);(0,G.hu)(!!i,`No buffer view for ${e}`),i&&function(e,t,r,i,o,n=1){if(!r)return void it(e,t,i,o,n);const s=r,l=i.typedBuffer,c=i.typedBufferStride,u=e.length,d=s[0],h=s[1],f=s[2],m=s[4],p=s[5],v=s[6],g=s[8],_=s[9],x=s[10],T=!(0,a.z)(s),b=1e-6,S=1-b;if(o*=c,1===n)for(let r=0;r<u;++r){const i=4*e[r],n=t[i],a=t[i+1],s=t[i+2],u=t[i+3];let A=d*n+m*a+g*s,y=h*n+p*a+_*s,C=f*n+v*a+x*s;if(T){const e=A*A+y*y+C*C;if(e<S&&e>b){const t=1/Math.sqrt(e);A*=t,y*=t,C*=t}}l[o]=A,l[o+1]=y,l[o+2]=C,l[o+3]=u,o+=c}else for(let r=0;r<u;++r){const i=4*e[r],a=t[i],s=t[i+1],u=t[i+2],A=t[i+3];let y=d*a+m*s+g*u,C=h*a+p*s+_*u,w=f*a+v*s+x*u;if(T){const e=y*y+C*C+w*w;if(e<S&&e>b){const t=1/Math.sqrt(e);y*=t,C*=t,w*=t}}for(let e=0;e<n;++e)l[o]=y,l[o+1]=C,l[o+2]=w,l[o+3]=A,o+=c}}(r,t.data,o,i,s);break}case oe.T.PROFILERIGHT:case oe.T.PROFILEUP:case oe.T.PROFILEVERTEXANDNORMAL:case oe.T.FEATUREVALUE:{(0,G.hu)(4===t.size);const i=n.getField(e,f.ek);(0,G.hu)(!!i,`No buffer view for ${e}`),i&&it(r,t.data,i,s)}}}class at{constructor(e){this.vertexBufferLayout=e}elementCount(e){return e.indices.get(oe.T.POSITION).length}write(e,t,r,i,o){!function(e,t,r,i,o,n){for(const a of t.fields.keys()){const t=e.vertexAttributes.get(a),s=e.indices.get(a);if(t&&s)nt(a,t,s,r,i,o,n);else if(a===oe.T.OBJECTANDLAYERIDCOLOR&&null!=e.objectAndLayerIdColor){const t=e.indices.get(oe.T.POSITION);if((0,G.hu)(!!t,`No buffer view for ${a}`),t){const r=t.length,i=o.getField(a,f.mc);ot(e.objectAndLayerIdColor,i,r,n)}}}}(r,this.vertexBufferLayout,e,t,i,o)}}var st=r(13705),lt=r(1983),ct=r(82082),ut=r(78549),dt=r(44391),ht=r(9969),ft=r(52756),mt=r(5474),pt=r(95194);pe.wb.LESS,pe.wb.ALWAYS;const vt={mask:255},gt={function:{func:pe.wb.ALWAYS,ref:B.hU.OutlineVisualElementMask,mask:B.hU.OutlineVisualElementMask},operation:{fail:pe.xS.KEEP,zFail:pe.xS.KEEP,zPass:pe.xS.ZERO}},_t={function:{func:pe.wb.ALWAYS,ref:B.hU.OutlineVisualElementMask,mask:B.hU.OutlineVisualElementMask},operation:{fail:pe.xS.KEEP,zFail:pe.xS.KEEP,zPass:pe.xS.REPLACE}};pe.wb.EQUAL,B.hU.OutlineVisualElementMask,B.hU.OutlineVisualElementMask,pe.xS.KEEP,pe.xS.KEEP,pe.xS.KEEP,pe.wb.NOTEQUAL,B.hU.OutlineVisualElementMask,B.hU.OutlineVisualElementMask,pe.xS.KEEP,pe.xS.KEEP,pe.xS.KEEP;var xt=r(42842);const Tt=[1,1,.5],bt=[0,.6,.2],St=[0,1,.2];var At=r(45584),yt=r(17346);class Ct extends ut.d4{constructor(){super(...arguments),this.isSchematic=!1,this.usePBR=!1,this.mrrFactors=(0,c.g)(Tt),this.hasVertexColors=!1,this.hasSymbolColors=!1,this.doubleSided=!1,this.doubleSidedType="normal",this.cullFace=B.Vr.Back,this.isInstanced=!1,this.hasInstancedColor=!1,this.emissiveFactor=(0,c.f)(0,0,0),this.instancedDoublePrecision=!1,this.normalType=ze.r.Attribute,this.receiveSSAO=!0,this.receiveShadows=!0,this.castShadows=!0,this.shadowMappingEnabled=!1,this.ambient=(0,c.f)(.2,.2,.2),this.diffuse=(0,c.f)(.8,.8,.8),this.externalColor=(0,lt.f)(1,1,1,1),this.colorMixMode="multiply",this.opacity=1,this.layerOpacity=1,this.origin=(0,c.c)(),this.hasSlicePlane=!1,this.hasSliceHighlight=!0,this.offsetTransparentBackfaces=!1,this.vvSize=null,this.vvColor=null,this.vvOpacity=null,this.vvSymbolAnchor=null,this.vvSymbolRotationMatrix=null,this.modelTransformation=null,this.transparent=!1,this.writeDepth=!0,this.customDepthTest=B.Gv.Less,this.textureAlphaMode=B.JJ.Blend,this.textureAlphaCutoff=dt.F,this.textureAlphaPremultiplied=!1,this.hasOccludees=!1,this.renderOccluded=ke.yD.Occlude}}class wt extends ft.A{initializeConfiguration(e,t){t.spherical=e.viewingMode===Fe.JY.Global,t.doublePrecisionRequiresObfuscation=e.rctx.driverTest.doublePrecisionRequiresObfuscation.result,t.textureCoordinateType=t.hasColorTexture||t.hasMetallicRoughnessTexture||t.hasEmissionTexture||t.hasOcclusionTexture||t.hasNormalTexture?ct.N.Default:ct.N.None,t.objectAndLayerIdColorInstanced=t.instanced}initializeProgram(e){return this._initializeProgram(e,wt.shader)}_initializeProgram(e,t){return new pt.$(e.rctx,t.get().build(this.configuration),mt.i)}_convertDepthTestFunction(e){return e===B.Gv.Lequal?pe.wb.LEQUAL:pe.wb.LESS}_makePipeline(e,t){const r=this.configuration,i=e===xt.A.NONE,o=e===xt.A.FrontFace;return(0,yt.sm)({blending:r.output!==Ve.H.Color&&r.output!==Ve.H.Alpha||!r.transparent?null:i?$e.wu:(0,$e.j7)(e),culling:Ot(r)?(0,yt.zp)(r.cullFace):null,depthTest:{func:(0,$e.Bh)(e,this._convertDepthTestFunction(r.customDepthTest))},depthWrite:(i||o)&&r.writeDepth?yt.LZ:null,colorWrite:yt.BK,stencilWrite:r.hasOccludees?vt:null,stencilTest:r.hasOccludees?t?_t:gt:null,polygonOffset:i||o?null:(0,$e.je)(r.enableOffset)})}initializePipeline(){return this._occludeePipelineState=this._makePipeline(this.configuration.transparencyPassType,!0),this._makePipeline(this.configuration.transparencyPassType,!1)}getPipelineState(e,t){return t?this._occludeePipelineState:super.getPipelineState(e,t)}}function Ot(e){return e.cullFace!==B.Vr.None||!e.hasSlicePlane&&!e.transparent&&!e.doubleSidedMode}wt.shader=new ht.J(At.D,(()=>r.e(1180).then(r.bind(r,1180))));var Mt=r(36663),Et=r(67197),It=r(40017);class Rt extends Et.m{}(0,Mt._)([(0,Et.o)({constValue:!0})],Rt.prototype,"hasSliceHighlight",void 0),(0,Mt._)([(0,Et.o)({constValue:!1})],Rt.prototype,"hasSliceInVertexProgram",void 0),(0,Mt._)([(0,Et.o)({constValue:!1})],Rt.prototype,"instancedDoublePrecision",void 0),(0,Mt._)([(0,Et.o)({constValue:!1})],Rt.prototype,"hasModelTransformation",void 0),(0,Mt._)([(0,Et.o)({constValue:It.P.Pass})],Rt.prototype,"pbrTextureBindType",void 0);class Pt extends Rt{constructor(){super(...arguments),this.output=Ve.H.Color,this.alphaDiscardMode=B.JJ.Opaque,this.doubleSidedMode=Ue.q.None,this.pbrMode=Ge.f7.Disabled,this.cullFace=B.Vr.None,this.transparencyPassType=xt.A.NONE,this.normalType=ze.r.Attribute,this.textureCoordinateType=ct.N.None,this.customDepthTest=B.Gv.Less,this.spherical=!1,this.hasVertexColors=!1,this.hasSymbolColors=!1,this.hasVerticalOffset=!1,this.hasSlicePlane=!1,this.hasSliceHighlight=!0,this.hasColorTexture=!1,this.hasMetallicRoughnessTexture=!1,this.hasEmissionTexture=!1,this.hasOcclusionTexture=!1,this.hasNormalTexture=!1,this.hasScreenSizePerspective=!1,this.hasVertexTangents=!1,this.hasOccludees=!1,this.hasMultipassTerrain=!1,this.hasModelTransformation=!1,this.offsetBackfaces=!1,this.vvSize=!1,this.vvColor=!1,this.receiveShadows=!1,this.receiveAmbientOcclusion=!1,this.textureAlphaPremultiplied=!1,this.instanced=!1,this.instancedColor=!1,this.objectAndLayerIdColorInstanced=!1,this.instancedDoublePrecision=!1,this.doublePrecisionRequiresObfuscation=!1,this.writeDepth=!0,this.transparent=!1,this.enableOffset=!0,this.cullAboveGround=!1,this.snowCover=!1,this.hasColorTextureTransform=!1,this.hasEmissionTextureTransform=!1,this.hasNormalTextureTransform=!1,this.hasOcclusionTextureTransform=!1,this.hasMetallicRoughnessTextureTransform=!1}}(0,Mt._)([(0,Et.o)({count:Ve.H.COUNT})],Pt.prototype,"output",void 0),(0,Mt._)([(0,Et.o)({count:B.JJ.COUNT})],Pt.prototype,"alphaDiscardMode",void 0),(0,Mt._)([(0,Et.o)({count:Ue.q.COUNT})],Pt.prototype,"doubleSidedMode",void 0),(0,Mt._)([(0,Et.o)({count:Ge.f7.COUNT})],Pt.prototype,"pbrMode",void 0),(0,Mt._)([(0,Et.o)({count:B.Vr.COUNT})],Pt.prototype,"cullFace",void 0),(0,Mt._)([(0,Et.o)({count:xt.A.COUNT})],Pt.prototype,"transparencyPassType",void 0),(0,Mt._)([(0,Et.o)({count:ze.r.COUNT})],Pt.prototype,"normalType",void 0),(0,Mt._)([(0,Et.o)({count:ct.N.COUNT})],Pt.prototype,"textureCoordinateType",void 0),(0,Mt._)([(0,Et.o)({count:B.Gv.COUNT})],Pt.prototype,"customDepthTest",void 0),(0,Mt._)([(0,Et.o)()],Pt.prototype,"spherical",void 0),(0,Mt._)([(0,Et.o)()],Pt.prototype,"hasVertexColors",void 0),(0,Mt._)([(0,Et.o)()],Pt.prototype,"hasSymbolColors",void 0),(0,Mt._)([(0,Et.o)()],Pt.prototype,"hasVerticalOffset",void 0),(0,Mt._)([(0,Et.o)()],Pt.prototype,"hasSlicePlane",void 0),(0,Mt._)([(0,Et.o)()],Pt.prototype,"hasSliceHighlight",void 0),(0,Mt._)([(0,Et.o)()],Pt.prototype,"hasColorTexture",void 0),(0,Mt._)([(0,Et.o)()],Pt.prototype,"hasMetallicRoughnessTexture",void 0),(0,Mt._)([(0,Et.o)()],Pt.prototype,"hasEmissionTexture",void 0),(0,Mt._)([(0,Et.o)()],Pt.prototype,"hasOcclusionTexture",void 0),(0,Mt._)([(0,Et.o)()],Pt.prototype,"hasNormalTexture",void 0),(0,Mt._)([(0,Et.o)()],Pt.prototype,"hasScreenSizePerspective",void 0),(0,Mt._)([(0,Et.o)()],Pt.prototype,"hasVertexTangents",void 0),(0,Mt._)([(0,Et.o)()],Pt.prototype,"hasOccludees",void 0),(0,Mt._)([(0,Et.o)()],Pt.prototype,"hasMultipassTerrain",void 0),(0,Mt._)([(0,Et.o)()],Pt.prototype,"hasModelTransformation",void 0),(0,Mt._)([(0,Et.o)()],Pt.prototype,"offsetBackfaces",void 0),(0,Mt._)([(0,Et.o)()],Pt.prototype,"vvSize",void 0),(0,Mt._)([(0,Et.o)()],Pt.prototype,"vvColor",void 0),(0,Mt._)([(0,Et.o)()],Pt.prototype,"receiveShadows",void 0),(0,Mt._)([(0,Et.o)()],Pt.prototype,"receiveAmbientOcclusion",void 0),(0,Mt._)([(0,Et.o)()],Pt.prototype,"textureAlphaPremultiplied",void 0),(0,Mt._)([(0,Et.o)()],Pt.prototype,"instanced",void 0),(0,Mt._)([(0,Et.o)()],Pt.prototype,"instancedColor",void 0),(0,Mt._)([(0,Et.o)()],Pt.prototype,"objectAndLayerIdColorInstanced",void 0),(0,Mt._)([(0,Et.o)()],Pt.prototype,"instancedDoublePrecision",void 0),(0,Mt._)([(0,Et.o)()],Pt.prototype,"doublePrecisionRequiresObfuscation",void 0),(0,Mt._)([(0,Et.o)()],Pt.prototype,"writeDepth",void 0),(0,Mt._)([(0,Et.o)()],Pt.prototype,"transparent",void 0),(0,Mt._)([(0,Et.o)()],Pt.prototype,"enableOffset",void 0),(0,Mt._)([(0,Et.o)()],Pt.prototype,"cullAboveGround",void 0),(0,Mt._)([(0,Et.o)()],Pt.prototype,"snowCover",void 0),(0,Mt._)([(0,Et.o)()],Pt.prototype,"hasColorTextureTransform",void 0),(0,Mt._)([(0,Et.o)()],Pt.prototype,"hasEmissionTextureTransform",void 0),(0,Mt._)([(0,Et.o)()],Pt.prototype,"hasNormalTextureTransform",void 0),(0,Mt._)([(0,Et.o)()],Pt.prototype,"hasOcclusionTextureTransform",void 0),(0,Mt._)([(0,Et.o)()],Pt.prototype,"hasMetallicRoughnessTextureTransform",void 0),(0,Mt._)([(0,Et.o)({constValue:!0})],Pt.prototype,"hasVvInstancing",void 0),(0,Mt._)([(0,Et.o)({constValue:!1})],Pt.prototype,"useCustomDTRExponentForWater",void 0),(0,Mt._)([(0,Et.o)({constValue:!1})],Pt.prototype,"supportsTextureAtlas",void 0),(0,Mt._)([(0,Et.o)({constValue:!0})],Pt.prototype,"useFillLights",void 0);var Lt=r(60926);class Nt extends wt{initializeConfiguration(e,t){super.initializeConfiguration(e,t),t.hasMetallicRoughnessTexture=!1,t.hasEmissionTexture=!1,t.hasOcclusionTexture=!1,t.hasNormalTexture=!1,t.hasModelTransformation=!1,t.normalType=ze.r.Attribute,t.doubleSidedMode=Ue.q.WindingOrder,t.hasVertexTangents=!1}initializeProgram(e){return this._initializeProgram(e,Nt.shader)}}Nt.shader=new ht.J(Lt.R,(()=>r.e(56353).then(r.bind(r,56353))));class Ht extends ke.F5{constructor(e){super(e,Ft),this.supportsEdges=!0,this._configuration=new Pt,this._vertexBufferLayout=function(e){const t=(0,Be.U$)().vec3f(oe.T.POSITION);return e.normalType===ze.r.Compressed?t.vec2i16(oe.T.NORMALCOMPRESSED,{glNormalized:!0}):t.vec3f(oe.T.NORMAL),e.hasVertexTangents&&t.vec4f(oe.T.TANGENT),(e.textureId||e.normalTextureId||e.metallicRoughnessTextureId||e.emissiveTextureId||e.occlusionTextureId)&&t.vec2f(oe.T.UV0),e.hasVertexColors&&t.vec4u8(oe.T.COLOR),e.hasSymbolColors&&t.vec4u8(oe.T.SYMBOLCOLOR),(0,ae.Z)("enable-feature:objectAndLayerId-rendering")&&t.vec4u8(oe.T.OBJECTANDLAYERIDCOLOR),t}(this.parameters)}isVisibleForOutput(e){return e!==Ve.H.Shadow&&e!==Ve.H.ShadowExcludeHighlight&&e!==Ve.H.ShadowHighlight||this.parameters.castShadows}isVisible(){const e=this.parameters;if(!super.isVisible()||0===e.layerOpacity)return!1;const{hasInstancedColor:t,hasVertexColors:r,hasSymbolColors:i,vvColor:o}=e,n="replace"===e.colorMixMode,a=e.opacity>0,s=e.externalColor&&e.externalColor[3]>0,l=t||o||i;return r&&l?n||a:r?n?s:a:l?n||a:n?s:a}getConfiguration(e,t){return this._configuration.output=e,this._configuration.hasNormalTexture=!!this.parameters.normalTextureId,this._configuration.hasColorTexture=!!this.parameters.textureId,this._configuration.hasVertexTangents=this.parameters.hasVertexTangents,this._configuration.instanced=this.parameters.isInstanced,this._configuration.instancedDoublePrecision=this.parameters.instancedDoublePrecision,this._configuration.vvSize=!!this.parameters.vvSize,this._configuration.hasVerticalOffset=null!=this.parameters.verticalOffset,this._configuration.hasScreenSizePerspective=null!=this.parameters.screenSizePerspective,this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.hasSliceHighlight=this.parameters.hasSliceHighlight,this._configuration.alphaDiscardMode=this.parameters.textureAlphaMode,this._configuration.normalType=this.parameters.normalType,this._configuration.transparent=this.parameters.transparent,this._configuration.writeDepth=this.parameters.writeDepth,null!=this.parameters.customDepthTest&&(this._configuration.customDepthTest=this.parameters.customDepthTest),this._configuration.hasOccludees=this.parameters.hasOccludees,this._configuration.cullFace=this.parameters.hasSlicePlane?B.Vr.None:this.parameters.cullFace,this._configuration.hasMultipassTerrain=t.multipassTerrain.enabled,this._configuration.cullAboveGround=t.multipassTerrain.cullAboveGround,this._configuration.hasModelTransformation=null!=this.parameters.modelTransformation,e!==Ve.H.Color&&e!==Ve.H.Alpha||(this._configuration.hasVertexColors=this.parameters.hasVertexColors,this._configuration.hasSymbolColors=this.parameters.hasSymbolColors,this.parameters.treeRendering?this._configuration.doubleSidedMode=Ue.q.WindingOrder:this._configuration.doubleSidedMode=this.parameters.doubleSided&&"normal"===this.parameters.doubleSidedType?Ue.q.View:this.parameters.doubleSided&&"winding-order"===this.parameters.doubleSidedType?Ue.q.WindingOrder:Ue.q.None,this._configuration.instancedColor=this.parameters.hasInstancedColor,this._configuration.receiveShadows=this.parameters.receiveShadows&&this.parameters.shadowMappingEnabled,this._configuration.receiveAmbientOcclusion=!!t.ssaoHelper.active&&this.parameters.receiveSSAO,this._configuration.vvColor=!!this.parameters.vvColor,this._configuration.textureAlphaPremultiplied=!!this.parameters.textureAlphaPremultiplied,this._configuration.pbrMode=this.parameters.usePBR?this.parameters.isSchematic?Ge.f7.Schematic:Ge.f7.Normal:Ge.f7.Disabled,this._configuration.hasMetallicRoughnessTexture=!!this.parameters.metallicRoughnessTextureId,this._configuration.hasEmissionTexture=!!this.parameters.emissiveTextureId,this._configuration.hasOcclusionTexture=!!this.parameters.occlusionTextureId,this._configuration.offsetBackfaces=!(!this.parameters.transparent||!this.parameters.offsetTransparentBackfaces),this._configuration.transparencyPassType=t.transparencyPassType,this._configuration.enableOffset=t.camera.relativeElevation<$e.ve,this._configuration.snowCover=this.hasSnowCover(t),this._configuration.hasColorTextureTransform=!!this.parameters.colorTextureTransformMatrix,this._configuration.hasNormalTextureTransform=!!this.parameters.normalTextureTransformMatrix,this._configuration.hasEmissionTextureTransform=!!this.parameters.emissiveTextureTransformMatrix,this._configuration.hasOcclusionTextureTransform=!!this.parameters.occlusionTextureTransformMatrix,this._configuration.hasMetallicRoughnessTextureTransform=!!this.parameters.metallicRoughnessTextureTransformMatrix),this._configuration}hasSnowCover(e){return null!=e.weather&&e.weatherVisible&&"snowy"===e.weather.type&&"enabled"===e.weather.snowCover}intersect(e,t,r,i,o,n){if(null!=this.parameters.verticalOffset){const e=r.camera;(0,l.s)(Wt,t[12],t[13],t[14]);let n=null;switch(r.viewingMode){case Fe.JY.Global:n=(0,l.n)(Ut,Wt);break;case Fe.JY.Local:n=(0,l.c)(Ut,zt)}let a=0;const s=(0,l.b)(kt,Wt,e.eye),c=(0,l.l)(s),u=(0,l.g)(s,s,1/c);let d=null;this.parameters.screenSizePerspective&&(d=(0,l.e)(n,u)),a+=(0,st.Hx)(e,c,this.parameters.verticalOffset,d??0,this.parameters.screenSizePerspective),(0,l.g)(n,n,a),(0,l.t)(Gt,n,r.transform.inverseRotation),i=(0,l.b)(Bt,i,Gt),o=(0,l.b)(Vt,o,Gt)}(0,st.Bw)(e,r,i,o,function(e){return null!=e?(Qe.offset=e,Qe):null}(r.verticalOffset),n)}requiresSlot(e,t){return!(t!==Ve.H.Color&&t!==Ve.H.Alpha&&t!==Ve.H.Depth&&t!==Ve.H.Normal&&t!==Ve.H.Shadow&&t!==Ve.H.ShadowHighlight&&t!==Ve.H.ShadowExcludeHighlight&&t!==Ve.H.Highlight&&t!==Ve.H.ObjectAndLayerIdColor||e!==(this.parameters.transparent?this.parameters.writeDepth?He.TRANSPARENT_MATERIAL:He.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL:He.OPAQUE_MATERIAL)&&e!==He.DRAPED_MATERIAL)}createGLMaterial(e){return new Dt(e)}createBufferWriter(){return new at(this._vertexBufferLayout)}}class Dt extends We.F{constructor(e){super({...e,...e.material.parameters})}_updateShadowState(e){e.shadowMap.enabled!==this._material.parameters.shadowMappingEnabled&&this._material.setParameters({shadowMappingEnabled:e.shadowMap.enabled})}_updateOccludeeState(e){e.hasOccludees!==this._material.parameters.hasOccludees&&this._material.setParameters({hasOccludees:e.hasOccludees})}beginSlot(e){this._output!==Ve.H.Color&&this._output!==Ve.H.Alpha||(this._updateShadowState(e),this._updateOccludeeState(e));const t=this._material.parameters;this.updateTexture(t.textureId);const r=e.camera.viewInverseTransposeMatrix;return(0,l.s)(t.origin,r[3],r[7],r[11]),this._material.setParameters(this.textureBindParameters),this.ensureTechnique(t.treeRendering?Nt:wt,e)}}const Ft=new class extends Ct{constructor(){super(...arguments),this.initTextureTransparent=!1,this.treeRendering=!1,this.hasVertexTangents=!1}},Bt=(0,c.c)(),Vt=(0,c.c)(),zt=(0,c.f)(0,0,1),Ut=(0,c.c)(),Gt=(0,c.c)(),Wt=(0,c.c)(),kt=(0,c.c)(),$t=P.Z.getLogger("esri.views.3d.layers.graphics.objectResourceUtils");function jt(e){throw new R.Z("",`Request for object resource failed: ${e}`)}function qt(e){const t=e.params,r=t.topology;let i=!0;switch(t.vertexAttributes||($t.warn("Geometry must specify vertex attributes"),i=!1),t.topology){case"PerAttributeArray":break;case"Indexed":case null:case void 0:{const e=t.faces;if(e){if(t.vertexAttributes)for(const r in t.vertexAttributes){const t=e[r];t&&t.values?(null!=t.valueType&&"UInt32"!==t.valueType&&($t.warn(`Unsupported indexed geometry indices type '${t.valueType}', only UInt32 is currently supported`),i=!1),null!=t.valuesPerElement&&1!==t.valuesPerElement&&($t.warn(`Unsupported indexed geometry values per element '${t.valuesPerElement}', only 1 is currently supported`),i=!1)):($t.warn(`Indexed geometry does not specify face indices for '${r}' attribute`),i=!1)}}else $t.warn("Indexed geometries must specify faces"),i=!1;break}default:$t.warn(`Unsupported topology '${r}'`),i=!1}e.params.material||($t.warn("Geometry requires material"),i=!1);const o=e.params.vertexAttributes;for(const e in o)o[e].values||($t.warn("Geometries with externally defined attributes are not yet supported"),i=!1);return i}function Jt(e){const t=(0,u.cS)();return e.forEach((e=>{const r=e.boundingInfo;null!=r&&((0,u.pp)(t,r.bbMin),(0,u.pp)(t,r.bbMax))})),t}function Yt(e){switch(e){case"mask":return B.JJ.Mask;case"maskAndTransparency":return B.JJ.MaskBlend;case"none":return B.JJ.Opaque;default:return B.JJ.Blend}}function Xt(e){const t=e.params;return{id:1,material:t.material,texture:t.texture,region:t.texture}}const Kt=new H.G(1,2,"wosr");var Zt=r(14634);async function Qt(e,t){const r=er((0,i.pJ)(e));if("wosr"===r.fileType){const e=await(t.cache?t.cache.loadWOSR(r.url,t):async function(e,t){const r=await async function(e,t){const r=null!=t&&t.streamDataRequester;if(r)return async function(e,t,r){const i=await(0,E.q6)(t.request(e,"json",r));if(!0===i.ok)return i.value;(0,N.r9)(i.error),jt(i.error.details.url)}(e,r,t);const i=await(0,E.q6)((0,M.default)(e,t));if(!0===i.ok)return i.value.data;(0,N.r9)(i.error),jt(i.error)}(e,t),i=await async function(e,t){const r=new Array;for(const i in e){const o=e[i],n=o.images[0].data;if(!n){$t.warn("Externally referenced texture data is not yet supported");continue}const a=o.encoding+";base64,"+n,s="/textureDefinitions/"+i,l="rgba"===o.channels?o.alphaChannelUsage||"transparency":"none",c={noUnpackFlip:!0,wrap:{s:pe.e8.REPEAT,t:pe.e8.REPEAT},preMultiplyAlpha:Yt(l)!==B.JJ.Opaque},u=null!=t&&t.disableTextures?Promise.resolve(null):(0,D.t)(a,t);r.push(u.then((e=>({refId:s,image:e,parameters:c,alphaChannelUsage:l}))))}const i=await Promise.all(r),o={};for(const e of i)o[e.refId]=e;return o}(r.textureDefinitions??{},t);let o=0;for(const e in i)if(i.hasOwnProperty(e)){const t=i[e];o+=t?.image?t.image.width*t.image.height*4:0}return{resource:r,textures:i,size:o+(0,I.Ul)(r)}}(r.url,t)),{engineResources:i,referenceBoundingBox:o}=function(e,t){const r=new Array,i=new Array,o=new Array,n=new L.r,a=e.resource,s=H.G.parse(a.version||"1.0","wosr");Kt.validate(s);const l=a.model.name,u=a.model.geometries,d=a.materialDefinitions??{},h=e.textures;let f=0;const m=new Map;for(let e=0;e<u.length;e++){const a=u[e];if(!qt(a))continue;const s=Xt(a),l=a.params.vertexAttributes,p=[];for(const e in l){const t=l[e],r=t.values;p.push([e,new F.a(r,t.valuesPerElement,!0)])}const v=[];if("PerAttributeArray"!==a.params.topology){const e=a.params.faces;for(const t in e)v.push([t,e[t].values])}const g=s.texture,_=h&&h[g];if(_&&!m.has(g)){const{image:e,parameters:t}=_,r=new Le(e,t);i.push(r),m.set(g,r)}const x=m.get(g),T=x?x.id:void 0,b=s.material;let S=n.get(b,g);if(null==S){const e=d[b.substring(b.lastIndexOf("/")+1)].params;1===e.transparency&&(e.transparency=0);const r=_&&_.alphaChannelUsage,i=e.transparency>0||"transparency"===r||"maskAndTransparency"===r,o=_?Yt(_.alphaChannelUsage):void 0,a={ambient:(0,c.g)(e.diffuse),diffuse:(0,c.g)(e.diffuse),opacity:1-(e.transparency||0),transparent:i,textureAlphaMode:o,textureAlphaCutoff:.33,textureId:T,initTextureTransparent:!0,doubleSided:!0,cullFace:B.Vr.None,colorMixMode:e.externalColorMixMode||"tint",textureAlphaPremultiplied:_?.parameters.preMultiplyAlpha??!1};null!=t&&t.materialParamsMixin&&Object.assign(a,t.materialParamsMixin),S=new Ht(a),n.set(b,g,S)}o.push(S);const A=new ne(S,p,v);f+=v.find((e=>e[0]===oe.T.POSITION))?.[1].length??0,r.push(A)}return{engineResources:[{name:l,stageResources:{textures:i,materials:o,geometries:r},pivotOffset:a.model.pivotOffset,numberOfVertices:f,lodThreshold:null}],referenceBoundingBox:Jt(r)}}(e,t);return{lods:i,referenceBoundingBox:o,isEsriSymbolResource:!1,isWosr:!0}}const o=await(t.cache?t.cache.loadGLTF(r.url,t,!!t.usePBR):(0,T.Q)(new x.C(t.streamDataRequester),r.url,t,t.usePBR)),n=o.model.meta?.ESRI_proxyEllipsoid,u=o.meta.isEsriSymbolResource&&null!=n&&o.meta.uri.includes("/RealisticTrees/");u&&!o.customMeta.esriTreeRendering&&(o.customMeta.esriTreeRendering=!0,function(e,t){for(let r=0;r<e.model.lods.length;++r){const i=e.model.lods[r];for(const o of i.parts){const i=o.attributes.normal;if(null==i)return;const n=o.attributes.position,u=n.count,d=(0,c.c)(),h=(0,c.c)(),m=(0,c.c)(),p=new Uint8Array(4*u),v=new Float64Array(3*u),g=(0,a.a)((0,s.c)(),o.transform);let _=0,x=0;for(let a=0;a<u;a++){n.getVec(a,h),i.getVec(a,d),(0,l.m)(h,h,o.transform),(0,l.b)(m,h,t.center),(0,l.D)(m,m,t.radius);const s=m[2],c=(0,l.l)(m),u=Math.min(.45+.55*c*c,1);(0,l.D)(m,m,t.radius),null!==g&&(0,l.m)(m,m,g),(0,l.n)(m,m),r+1!==e.model.lods.length&&e.model.lods.length>1&&(0,l.h)(m,m,d,s>-1?.2:Math.min(-4*s-3.8,1)),v[_]=m[0],v[_+1]=m[1],v[_+2]=m[2],_+=3,p[x]=255*u,p[x+1]=255*u,p[x+2]=255*u,p[x+3]=255,x+=4}o.attributes.normal=new f.ct(v),o.attributes.color=new f.mc(p)}}}(o,n));const d=!!t.usePBR,h=o.meta.isEsriSymbolResource?{usePBR:d,isSchematic:!1,treeRendering:u,mrrFactors:[...St]}:{usePBR:d,isSchematic:!1,treeRendering:!1,mrrFactors:[...Tt]},m={...t.materialParamsMixin,treeRendering:u},{engineResources:p,referenceBoundingBox:v}=tr(o,h,m,t.skipHighLods&&null==r.specifiedLodIndex?{skipHighLods:!0}:{skipHighLods:!1,singleLodIndex:r.specifiedLodIndex});return{lods:p,referenceBoundingBox:v,isEsriSymbolResource:o.meta.isEsriSymbolResource,isWosr:!1}}function er(e){const t=e.match(/(.*\.(gltf|glb))(\?lod=([0-9]+))?$/);return t?{fileType:"gltf",url:t[1],specifiedLodIndex:null!=t[4]?Number(t[4]):null}:e.match(/(.*\.(json|json\.gz))$/)?{fileType:"wosr",url:e,specifiedLodIndex:null}:{fileType:"unknown",url:e,specifiedLodIndex:null}}function tr(e,t,r,i){const n=e.model,a=new Array,s=new Map,d=new Map,x=n.lods.length,T=(0,u.cS)();return n.lods.forEach(((e,A)=>{const y=!0===i.skipHighLods&&(x>1&&0===A||x>3&&1===A)||!1===i.skipHighLods&&null!=i.singleLodIndex&&A!==i.singleLodIndex;if(y&&0!==A)return;const w=new O(e.name,e.lodThreshold,[0,0,0]);e.parts.forEach((e=>{const i=y?new Ht({}):function(e,t,r,i,o,n,a){const s=t.material+(t.attributes.normal?"_normal":"")+(t.attributes.color?"_color":"")+(t.attributes.texCoord0?"_texCoord0":"")+(t.attributes.tangent?"_tangent":""),u=e.materials.get(t.material),d=null!=t.attributes.texCoord0,h=null!=t.attributes.normal;if(null==u)return null;const f=function(e){switch(e){case"BLEND":return B.JJ.Blend;case"MASK":return B.JJ.Mask;case"OPAQUE":case null:case void 0:return B.JJ.Opaque}}(u.alphaMode);if(!n.has(s)){if(d){const t=(t,r=!1)=>{if(null!=t&&!a.has(t)){const i=e.textures.get(t);if(null!=i){const e=i.data;a.set(t,new Le((0,S.$A)(e)?e.data:e,{...i.parameters,preMultiplyAlpha:!(0,S.$A)(e)&&r,encoding:(0,S.$A)(e)&&null!=e.encoding?e.encoding:void 0}))}}};t(u.textureColor,f!==B.JJ.Opaque),t(u.textureNormal),t(u.textureOcclusion),t(u.textureEmissive),t(u.textureMetallicRoughness)}const r=u.color[0]**(1/Zt.K),m=u.color[1]**(1/Zt.K),p=u.color[2]**(1/Zt.K),v=u.emissiveFactor[0]**(1/Zt.K),g=u.emissiveFactor[1]**(1/Zt.K),_=u.emissiveFactor[2]**(1/Zt.K),x=null!=u.textureColor&&d?a.get(u.textureColor):null,T=function({normalTexture:e,metallicRoughnessTexture:t,metallicFactor:r,roughnessFactor:i,emissiveTexture:o,emissiveFactor:n,occlusionTexture:a}){return null==e&&null==t&&null==o&&(null==n||(0,l.k)(n,c.Z))&&null==a&&(null==i||1===i)&&(null==r||1===r||0===r)}({normalTexture:u.textureNormal,metallicRoughnessTexture:u.textureMetallicRoughness,metallicFactor:u.metallicFactor,roughnessFactor:u.roughnessFactor,emissiveTexture:u.textureEmissive,emissiveFactor:u.emissiveFactor,occlusionTexture:u.textureOcclusion});n.set(s,new Ht({...i,transparent:f===B.JJ.Blend,customDepthTest:B.Gv.Lequal,textureAlphaMode:f,textureAlphaCutoff:u.alphaCutoff,diffuse:[r,m,p],ambient:[r,m,p],opacity:u.opacity,doubleSided:u.doubleSided,doubleSidedType:"winding-order",cullFace:u.doubleSided?B.Vr.None:B.Vr.Back,hasVertexColors:!!t.attributes.color,hasVertexTangents:!!t.attributes.tangent,normalType:h?ze.r.Attribute:ze.r.ScreenDerivative,castShadows:!0,receiveSSAO:!0,textureId:null!=x?x.id:void 0,colorMixMode:u.colorMixMode,normalTextureId:null!=u.textureNormal&&d?a.get(u.textureNormal).id:void 0,textureAlphaPremultiplied:null!=x&&!!x.parameters.preMultiplyAlpha,occlusionTextureId:null!=u.textureOcclusion&&d?a.get(u.textureOcclusion).id:void 0,emissiveTextureId:null!=u.textureEmissive&&d?a.get(u.textureEmissive).id:void 0,metallicRoughnessTextureId:null!=u.textureMetallicRoughness&&d?a.get(u.textureMetallicRoughness).id:void 0,emissiveFactor:[v,g,_],mrrFactors:T?[...bt]:[u.metallicFactor,u.roughnessFactor,i.mrrFactors[2]],isSchematic:T,colorTextureTransformMatrix:C(u.colorTextureTransform),normalTextureTransformMatrix:C(u.normalTextureTransform),occlusionTextureTransformMatrix:C(u.occlusionTextureTransform),emissiveTextureTransformMatrix:C(u.emissiveTextureTransform),metallicRoughnessTextureTransformMatrix:C(u.metallicRoughnessTextureTransform),...o}))}const m=n.get(s);if(r.stageResources.materials.push(m),d){const e=e=>{null!=e&&r.stageResources.textures.push(a.get(e))};e(u.textureColor),e(u.textureNormal),e(u.textureOcclusion),e(u.textureEmissive),e(u.textureMetallicRoughness)}return m}(n,e,w,t,r,s,d),{geometry:a,vertexCount:x}=function(e,t){const r=e.attributes.position.count,i=(0,b.p)(e.indices||r,e.primitiveType),n=h(3*r),{typedBuffer:a,typedBufferStride:s}=e.attributes.position;(0,m.t)(n,a,e.transform,3,s);const l=[[oe.T.POSITION,new F.a(n,3,!0)]],c=[[oe.T.POSITION,i]];if(null!=e.attributes.normal){const t=h(3*r),{typedBuffer:n,typedBufferStride:a}=e.attributes.normal;(0,o.b)(rr,e.transform),(0,m.a)(t,n,rr,3,a),l.push([oe.T.NORMAL,new F.a(t,3,!0)]),c.push([oe.T.NORMAL,i])}if(null!=e.attributes.tangent){const t=h(4*r),{typedBuffer:n,typedBufferStride:a}=e.attributes.tangent;(0,o.b)(rr,e.transform),(0,p.t)(t,n,rr,4,a),l.push([oe.T.TANGENT,new F.a(t,4,!0)]),c.push([oe.T.TANGENT,i])}if(null!=e.attributes.texCoord0){const t=h(2*r),{typedBuffer:o,typedBufferStride:n}=e.attributes.texCoord0;(0,v.n)(t,o,2,n),l.push([oe.T.UV0,new F.a(t,2,!0)]),c.push([oe.T.UV0,i])}if(null!=e.attributes.color){const t=new Uint8Array(4*r);4===e.attributes.color.elementCount?e.attributes.color instanceof f.ek?(0,p.s)(t,e.attributes.color,255):e.attributes.color instanceof f.mc?(0,_.c)(t,e.attributes.color):e.attributes.color instanceof f.v6&&(0,p.s)(t,e.attributes.color,1/256):(t.fill(255),e.attributes.color instanceof f.ct?(0,m.s)(t,e.attributes.color,255,4):e.attributes.color instanceof f.ne?(0,g.c)(t,e.attributes.color.typedBuffer,4,e.attributes.color.typedBufferStride):e.attributes.color instanceof f.mw&&(0,m.s)(t,e.attributes.color,1/256,4)),l.push([oe.T.COLOR,new F.a(t,4,!0)]),c.push([oe.T.COLOR,i])}return{geometry:new ne(t,l,c),vertexCount:r}}(e,null!=i?i:new Ht({})),O=a.boundingInfo;null!=O&&0===A&&((0,u.pp)(T,O.bbMin),(0,u.pp)(T,O.bbMax)),null!=i&&(w.stageResources.geometries.push(a),w.numberOfVertices+=x)})),y||a.push(w)})),{engineResources:a,referenceBoundingBox:T}}const rr=(0,n.c)()},66352:(e,t,r)=>{var i,o;r.d(t,{a9:()=>i}),r(19431),(o=i||(i={}))[o.Multiply=1]="Multiply",o[o.Ignore=2]="Ignore",o[o.Replace=3]="Replace",o[o.Tint=4]="Tint"},95650:(e,t,r)=>{r.d(t,{Zu:()=>l,bA:()=>c,qj:()=>u});var i=r(35031),o=r(62295),n=r(93072),a=r(23410);function s(e){e.varyings.add("linearDepth","float")}function l(e){e.vertex.uniforms.add(new n.A("nearFar",((e,t)=>t.camera.nearFar)))}function c(e){e.vertex.code.add(a.H`float calculateLinearDepth(vec2 nearFar,float z) {
return (-z - nearFar[0]) / (nearFar[1] - nearFar[0]);
}`)}function u(e,t){const{vertex:r}=e;switch(t.output){case i.H.Color:if(t.receiveShadows)return s(e),void r.code.add(a.H`void forwardLinearDepth() { linearDepth = gl_Position.w; }`);break;case i.H.Depth:case i.H.Shadow:case i.H.ShadowHighlight:case i.H.ShadowExcludeHighlight:return e.include(o.up,t),s(e),l(e),c(e),void r.code.add(a.H`void forwardLinearDepth() {
linearDepth = calculateLinearDepth(nearFar, vPosition_view.z);
}`)}r.code.add(a.H`void forwardLinearDepth() {}`)}},57218:(e,t,r)=>{r.d(t,{w:()=>o});var i=r(23410);function o(e){e.vertex.code.add(i.H`vec4 offsetBackfacingClipPosition(vec4 posClip, vec3 posWorld, vec3 normalWorld, vec3 camPosWorld) {
vec3 camToVert = posWorld - camPosWorld;
bool isBackface = dot(camToVert, normalWorld) > 0.0;
if (isBackface) {
posClip.z += 0.0000003 * posClip.w;
}
return posClip;
}`)}},55208:(e,t,r)=>{r.d(t,{k:()=>n});var i=r(23410),o=r(21414);function n(e,t=!0){e.attributes.add(o.T.POSITION,"vec2"),t&&e.varyings.add("uv","vec2"),e.vertex.code.add(i.H`
    void main(void) {
      gl_Position = vec4(position, 0.0, 1.0);
      ${t?i.H`uv = position * 0.5 + vec2(0.5);`:""}
    }
  `)}},35031:(e,t,r)=>{var i;r.d(t,{H:()=>i}),function(e){e[e.Color=0]="Color",e[e.Depth=1]="Depth",e[e.Normal=2]="Normal",e[e.Shadow=3]="Shadow",e[e.ShadowHighlight=4]="ShadowHighlight",e[e.ShadowExcludeHighlight=5]="ShadowExcludeHighlight",e[e.Highlight=6]="Highlight",e[e.Alpha=7]="Alpha",e[e.ObjectAndLayerIdColor=8]="ObjectAndLayerIdColor",e[e.COUNT=9]="COUNT"}(i||(i={}))},5885:(e,t,r)=>{r.d(t,{f5:()=>c});var i=r(24455),o=r(39100),n=r(6766),a=r(8909),s=r(32006),l=(r(43036),r(23410));function c(e,t){!function(e,t,...r){if(!t.hasSlicePlane){const r=l.H`#define rejectBySlice(_pos_) false
#define discardBySlice(_pos_) {}
#define highlightSlice(_color_, _pos_) (_color_)`;return t.hasSliceInVertexProgram&&e.vertex.code.add(r),void e.fragment.code.add(r)}t.hasSliceInVertexProgram&&e.vertex.uniforms.add(...r),e.fragment.uniforms.add(...r);const i=l.H`struct SliceFactors {
float front;
float side0;
float side1;
float side2;
float side3;
};
SliceFactors calculateSliceFactors(vec3 pos) {
vec3 rel = pos - slicePlaneOrigin;
vec3 slicePlaneNormal = -cross(slicePlaneBasis1, slicePlaneBasis2);
float slicePlaneW = -dot(slicePlaneNormal, slicePlaneOrigin);
float basis1Len2 = dot(slicePlaneBasis1, slicePlaneBasis1);
float basis2Len2 = dot(slicePlaneBasis2, slicePlaneBasis2);
float basis1Dot = dot(slicePlaneBasis1, rel);
float basis2Dot = dot(slicePlaneBasis2, rel);
return SliceFactors(
dot(slicePlaneNormal, pos) + slicePlaneW,
-basis1Dot - basis1Len2,
basis1Dot - basis1Len2,
-basis2Dot - basis2Len2,
basis2Dot - basis2Len2
);
}
bool sliceByFactors(SliceFactors factors) {
return factors.front < 0.0
&& factors.side0 < 0.0
&& factors.side1 < 0.0
&& factors.side2 < 0.0
&& factors.side3 < 0.0;
}
bool sliceEnabled() {
return dot(slicePlaneBasis1, slicePlaneBasis1) != 0.0;
}
bool sliceByPlane(vec3 pos) {
return sliceEnabled() && sliceByFactors(calculateSliceFactors(pos));
}
#define rejectBySlice(_pos_) sliceByPlane(_pos_)
#define discardBySlice(_pos_) { if (sliceByPlane(_pos_)) discard; }`,o=l.H`vec4 applySliceHighlight(vec4 color, vec3 pos) {
SliceFactors factors = calculateSliceFactors(pos);
const float HIGHLIGHT_WIDTH = 1.0;
const vec4 HIGHLIGHT_COLOR = vec4(0.0, 0.0, 0.0, 0.3);
factors.front /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.front);
factors.side0 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side0);
factors.side1 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side1);
factors.side2 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side2);
factors.side3 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side3);
if (sliceByFactors(factors)) {
return color;
}
float highlightFactor = (1.0 - step(0.5, factors.front))
* (1.0 - step(0.5, factors.side0))
* (1.0 - step(0.5, factors.side1))
* (1.0 - step(0.5, factors.side2))
* (1.0 - step(0.5, factors.side3));
return mix(color, vec4(HIGHLIGHT_COLOR.rgb, color.a), highlightFactor * HIGHLIGHT_COLOR.a);
}`,n=t.hasSliceHighlight?l.H`
        ${o}
        #define highlightSlice(_color_, _pos_) (sliceEnabled() ? applySliceHighlight(_color_, _pos_) : (_color_))
      `:l.H`#define highlightSlice(_color_, _pos_) (_color_)`;t.hasSliceInVertexProgram&&e.vertex.code.add(i),e.fragment.code.add(i),e.fragment.code.add(n)}(e,t,new s.B("slicePlaneOrigin",((e,r)=>function(e,t,r){if(null==r.slicePlane)return a.Z;const i=u(e,t,r),o=d(i,r.slicePlane),s=h(e,i,r);return null!=s?(0,n.m)(p,o,s):o}(t,e,r))),new s.B("slicePlaneBasis1",((e,r)=>f(t,e,r,r.slicePlane?.basis1))),new s.B("slicePlaneBasis2",((e,r)=>f(t,e,r,r.slicePlane?.basis2))))}function u(e,t,r){return e.instancedDoublePrecision?(0,n.s)(m,r.camera.viewInverseTransposeMatrix[3],r.camera.viewInverseTransposeMatrix[7],r.camera.viewInverseTransposeMatrix[11]):t.slicePlaneLocalOrigin}function d(e,t){return null!=e?(0,n.b)(p,t.origin,e):t.origin}function h(e,t,r){return e.hasSliceTranslatedView?null!=t?(0,i.w)(g,r.camera.viewMatrix,t):r.camera.viewMatrix:null}function f(e,t,r,i){if(null==i||null==r.slicePlane)return a.Z;const o=u(e,t,r),s=d(o,r.slicePlane),l=h(e,o,r);return null!=l?((0,n.a)(v,i,s),(0,n.m)(p,s,l),(0,n.m)(v,v,l),(0,n.b)(v,v,p)):i}const m=(0,a.c)(),p=(0,a.c)(),v=(0,a.c)(),g=(0,o.c)()},4731:(e,t,r)=>{r.d(t,{w:()=>n});var i=r(95650),o=r(23410);function n(e){(0,i.bA)(e),e.vertex.code.add(o.H`vec4 transformPositionWithDepth(mat4 proj, mat4 view, vec3 pos, vec2 nearFar, out float depth) {
vec4 eye = view * vec4(pos, 1.0);
depth = calculateLinearDepth(nearFar,eye.z);
return proj * eye;
}`),e.vertex.code.add(o.H`vec4 transformPosition(mat4 proj, mat4 view, vec3 pos) {
return proj * (view * vec4(pos, 1.0));
}`)}},99163:(e,t,r)=>{r.d(t,{f:()=>p});var i=r(36663),o=r(6766),n=r(8909),a=r(35031),s=r(5331),l=r(3261),c=r(32006),u=r(23410),d=r(67197),h=r(21414),f=r(30560);class m extends d.m{constructor(){super(...arguments),this.instancedDoublePrecision=!1}}function p(e,t){t.instanced&&t.instancedDoublePrecision&&(e.attributes.add(h.T.MODELORIGINHI,"vec3"),e.attributes.add(h.T.MODELORIGINLO,"vec3"),e.attributes.add(h.T.MODEL,"mat3"),e.attributes.add(h.T.MODELNORMAL,"mat3"));const r=e.vertex;t.instancedDoublePrecision&&(r.include(s.$,t),r.uniforms.add(new c.B("viewOriginHi",((e,t)=>(0,f.U8)((0,o.s)(v,t.camera.viewInverseTransposeMatrix[3],t.camera.viewInverseTransposeMatrix[7],t.camera.viewInverseTransposeMatrix[11]),v))),new c.B("viewOriginLo",((e,t)=>(0,f.GB)((0,o.s)(v,t.camera.viewInverseTransposeMatrix[3],t.camera.viewInverseTransposeMatrix[7],t.camera.viewInverseTransposeMatrix[11]),v))))),r.code.add(u.H`
    vec3 calculateVPos() {
      ${t.instancedDoublePrecision?"return model * localPosition().xyz;":"return localPosition().xyz;"}
    }
    `),r.code.add(u.H`
    vec3 subtractOrigin(vec3 _pos) {
      ${t.instancedDoublePrecision?u.H`
          vec3 originDelta = dpAdd(viewOriginHi, viewOriginLo, -modelOriginHi, -modelOriginLo);
          return _pos - originDelta;`:"return vpos;"}
    }
    `),r.code.add(u.H`
    vec3 dpNormal(vec4 _normal) {
      ${t.instancedDoublePrecision?"return normalize(modelNormal * _normal.xyz);":"return normalize(_normal.xyz);"}
    }
    `),t.output===a.H.Normal&&((0,l._8)(r),r.code.add(u.H`
    vec3 dpNormalView(vec4 _normal) {
      ${t.instancedDoublePrecision?"return normalize((viewNormal * vec4(modelNormal * _normal.xyz, 1.0)).xyz);":"return normalize((viewNormal * _normal).xyz);"}
    }
    `)),t.hasVertexTangents&&r.code.add(u.H`
    vec4 dpTransformVertexTangent(vec4 _tangent) {
      ${t.instancedDoublePrecision?"return vec4(modelNormal * _tangent.xyz, _tangent.w);":"return _tangent;"}

    }
    `)}(0,i._)([(0,d.o)()],m.prototype,"instancedDoublePrecision",void 0);const v=(0,n.c)()},7792:(e,t,r)=>{r.d(t,{O:()=>l,r:()=>i});var i,o,n=r(27755),a=r(23410),s=r(21414);function l(e,t){switch(t.normalType){case i.Compressed:e.attributes.add(s.T.NORMALCOMPRESSED,"vec2"),e.vertex.code.add(a.H`vec3 normalModel() {
float z = 1.0 - abs(normalCompressed.x) - abs(normalCompressed.y);
return vec3(normalCompressed + sign(normalCompressed) * min(z, 0.0), z);
}`);break;case i.Attribute:e.attributes.add(s.T.NORMAL,"vec3"),e.vertex.code.add(a.H`vec3 normalModel() {
return normal;
}`);break;case i.ScreenDerivative:e.fragment.code.add(a.H`vec3 screenDerivativeNormal(vec3 positionView) {
return normalize(cross(dFdx(positionView), dFdy(positionView)));
}`);break;default:(0,n.Bg)(t.normalType);case i.COUNT:case i.Ground:}}(o=i||(i={}))[o.Attribute=0]="Attribute",o[o.Compressed=1]="Compressed",o[o.Ground=2]="Ground",o[o.ScreenDerivative=3]="ScreenDerivative",o[o.COUNT=4]="COUNT"},91636:(e,t,r)=>{r.d(t,{f:()=>n});var i=r(23410),o=r(21414);function n(e){e.attributes.add(o.T.POSITION,"vec3"),e.vertex.code.add(i.H`vec3 positionModel() { return position; }`)}},40433:(e,t,r)=>{r.d(t,{R:()=>c});var i=r(66352),o=r(23410);function n(e){e.vertex.code.add(o.H`
    vec4 decodeSymbolColor(vec4 symbolColor, out int colorMixMode) {
      float symbolAlpha = 0.0;

      const float maxTint = 85.0;
      const float maxReplace = 170.0;
      const float scaleAlpha = 3.0;

      if (symbolColor.a > maxReplace) {
        colorMixMode = ${o.H.int(i.a9.Multiply)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxReplace);
      } else if (symbolColor.a > maxTint) {
        colorMixMode = ${o.H.int(i.a9.Replace)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxTint);
      } else if (symbolColor.a > 0.0) {
        colorMixMode = ${o.H.int(i.a9.Tint)};
        symbolAlpha = scaleAlpha * symbolColor.a;
      } else {
        colorMixMode = ${o.H.int(i.a9.Multiply)};
        symbolAlpha = 0.0;
      }

      return vec4(symbolColor.r, symbolColor.g, symbolColor.b, symbolAlpha);
    }
  `)}var a=r(59842),s=r(21414),l=r(13705);function c(e,t){t.hasSymbolColors?(e.include(n),e.attributes.add(s.T.SYMBOLCOLOR,"vec4"),e.varyings.add("colorMixMode","mediump float"),e.vertex.code.add(o.H`int symbolColorMixMode;
vec4 getSymbolColor() {
return decodeSymbolColor(symbolColor, symbolColorMixMode) * 0.003921568627451;
}
void forwardColorMixMode() {
colorMixMode = float(symbolColorMixMode) + 0.5;
}`)):(e.fragment.uniforms.add(new a._("colorMixMode",(e=>l.FZ[e.colorMixMode]))),e.vertex.code.add(o.H`vec4 getSymbolColor() { return vec4(1.0); }
void forwardColorMixMode() {}`))}},82082:(e,t,r)=>{r.d(t,{D:()=>l,N:()=>i});var i,o,n=r(27755),a=r(23410),s=r(21414);function l(e,t){switch(t.textureCoordinateType){case i.Default:return e.attributes.add(s.T.UV0,"vec2"),e.varyings.add("vuv0","vec2"),void e.vertex.code.add(a.H`void forwardTextureCoordinates() {
vuv0 = uv0;
}`);case i.Compressed:return e.attributes.add(s.T.UV0,"vec2"),e.varyings.add("vuv0","vec2"),void e.vertex.code.add(a.H`vec2 getUV0() {
return uv0 / 16384.0;
}
void forwardTextureCoordinates() {
vuv0 = getUV0();
}`);case i.Atlas:return e.attributes.add(s.T.UV0,"vec2"),e.varyings.add("vuv0","vec2"),e.attributes.add(s.T.UVREGION,"vec4"),e.varyings.add("vuvRegion","vec4"),void e.vertex.code.add(a.H`void forwardTextureCoordinates() {
vuv0 = uv0;
vuvRegion = uvRegion;
}`);default:(0,n.Bg)(t.textureCoordinateType);case i.None:return void e.vertex.code.add(a.H`void forwardTextureCoordinates() {}`);case i.COUNT:return}}(o=i||(i={}))[o.None=0]="None",o[o.Default=1]="Default",o[o.Atlas=2]="Atlas",o[o.Compressed=3]="Compressed",o[o.COUNT=4]="COUNT"},6502:(e,t,r)=>{r.d(t,{c:()=>n});var i=r(23410),o=r(21414);function n(e,t){t.hasVertexColors?(e.attributes.add(o.T.COLOR,"vec4"),e.varyings.add("vColor","vec4"),e.vertex.code.add(i.H`void forwardVertexColor() { vColor = color; }`),e.vertex.code.add(i.H`void forwardNormalizedVertexColor() { vColor = color * 0.003921568627451; }`)):e.vertex.code.add(i.H`void forwardVertexColor() {}
void forwardNormalizedVertexColor() {}`)}},78549:(e,t,r)=>{r.d(t,{Bb:()=>u,d4:()=>d});var i=r(27755),o=r(34344),n=(r(1983),r(7792)),a=r(62295),s=r(23410),l=r(55784),c=r(11125);function u(e,t){switch(t.normalType){case n.r.Attribute:case n.r.Compressed:e.include(n.O,t),e.varyings.add("vNormalWorld","vec3"),e.varyings.add("vNormalView","vec3"),e.vertex.uniforms.add(new l.j("transformNormalGlobalFromModel",(e=>e.transformNormalGlobalFromModel)),new c.c("transformNormalViewFromGlobal",(e=>e.transformNormalViewFromGlobal))),e.vertex.code.add(s.H`void forwardNormal() {
vNormalWorld = transformNormalGlobalFromModel * normalModel();
vNormalView = transformNormalViewFromGlobal * vNormalWorld;
}`);break;case n.r.Ground:e.include(a.up,t),e.varyings.add("vNormalWorld","vec3"),e.vertex.code.add(s.H`
        void forwardNormal() {
          vNormalWorld = ${t.spherical?s.H`normalize(vPositionWorldCameraRelative);`:s.H`vec3(0.0, 0.0, 1.0);`}
        }
        `);break;case n.r.ScreenDerivative:e.vertex.code.add(s.H`void forwardNormal() {}`);break;default:(0,i.Bg)(t.normalType);case n.r.COUNT:}}class d extends a.su{constructor(){super(...arguments),this.transformNormalViewFromGlobal=(0,o.c)()}}},62295:(e,t,r)=>{r.d(t,{su:()=>p,up:()=>m});var i=r(34344),o=r(39100),n=r(8909),a=r(91636),s=r(5331),l=r(32006),c=r(43036),u=r(23410),d=r(55784),h=r(11125),f=r(1130);function m(e,t){e.include(a.f);const r=e.vertex;r.include(s.$,t),e.varyings.add("vPositionWorldCameraRelative","vec3"),e.varyings.add("vPosition_view","vec3"),r.uniforms.add(new c.J("transformWorldFromViewTH",(e=>e.transformWorldFromViewTH)),new c.J("transformWorldFromViewTL",(e=>e.transformWorldFromViewTL)),new h.c("transformViewFromCameraRelativeRS",(e=>e.transformViewFromCameraRelativeRS)),new f.g("transformProjFromView",(e=>e.transformProjFromView)),new d.j("transformWorldFromModelRS",(e=>e.transformWorldFromModelRS)),new l.B("transformWorldFromModelTH",(e=>e.transformWorldFromModelTH)),new l.B("transformWorldFromModelTL",(e=>e.transformWorldFromModelTL))),r.code.add(u.H`vec3 positionWorldCameraRelative() {
vec3 rotatedModelPosition = transformWorldFromModelRS * positionModel();
vec3 transform_CameraRelativeFromModel = dpAdd(
transformWorldFromModelTL,
transformWorldFromModelTH,
-transformWorldFromViewTL,
-transformWorldFromViewTH
);
return transform_CameraRelativeFromModel + rotatedModelPosition;
}`),r.code.add(u.H`
    void forwardPosition(float fOffset) {
      vPositionWorldCameraRelative = positionWorldCameraRelative();
      if (fOffset != 0.0) {
        vPositionWorldCameraRelative += fOffset * ${t.spherical?u.H`normalize(transformWorldFromViewTL + vPositionWorldCameraRelative)`:u.H`vec3(0.0, 0.0, 1.0)`};
      }

      vPosition_view = transformViewFromCameraRelativeRS * vPositionWorldCameraRelative;
      gl_Position = transformProjFromView * vec4(vPosition_view, 1.0);
    }
  `),e.fragment.uniforms.add(new c.J("transformWorldFromViewTL",(e=>e.transformWorldFromViewTL))),r.code.add(u.H`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`),e.fragment.code.add(u.H`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`)}class p extends u.K{constructor(){super(...arguments),this.transformWorldFromViewTH=(0,n.c)(),this.transformWorldFromViewTL=(0,n.c)(),this.transformViewFromCameraRelativeRS=(0,i.c)(),this.transformProjFromView=(0,o.c)()}}},72129:(e,t,r)=>{r.d(t,{i:()=>s});var i=r(27755),o=r(82082),n=r(23410);function a(e){e.fragment.code.add(n.H`vec4 textureAtlasLookup(sampler2D tex, vec2 textureCoordinates, vec4 atlasRegion) {
vec2 atlasScale = atlasRegion.zw - atlasRegion.xy;
vec2 uvAtlas = fract(textureCoordinates) * atlasScale + atlasRegion.xy;
float maxdUV = 0.125;
vec2 dUVdx = clamp(dFdx(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
vec2 dUVdy = clamp(dFdy(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
return textureGrad(tex, uvAtlas, dUVdx, dUVdy);
}`)}function s(e,t){switch(e.include(o.D,t),t.textureCoordinateType){case o.N.Default:case o.N.Compressed:return void e.fragment.code.add(n.H`vec4 textureLookup(sampler2D tex, vec2 uv) {
return texture(tex, uv);
}`);case o.N.Atlas:return e.include(a),void e.fragment.code.add(n.H`vec4 textureLookup(sampler2D tex, vec2 uv) {
return textureAtlasLookup(tex, uv, vuvRegion);
}`);default:(0,i.Bg)(t.textureCoordinateType);case o.N.None:case o.N.COUNT:return}}},5664:(e,t,r)=>{r.d(t,{L:()=>u});var i=r(88589),o=r(1983),n=r(63371),a=r(23410);function s(e){e.vertex.code.add(a.H`float screenSizePerspectiveMinSize(float size, vec4 factor) {
float nonZeroSize = 1.0 - step(size, 0.0);
return (
factor.z * (
1.0 +
nonZeroSize *
2.0 * factor.w / (
size + (1.0 - nonZeroSize)
)
)
);
}`),e.vertex.code.add(a.H`float screenSizePerspectiveViewAngleDependentFactor(float absCosAngle) {
return absCosAngle * absCosAngle * absCosAngle;
}`),e.vertex.code.add(a.H`vec4 screenSizePerspectiveScaleFactor(float absCosAngle, float distanceToCamera, vec4 params) {
return vec4(
min(params.x / (distanceToCamera - params.y), 1.0),
screenSizePerspectiveViewAngleDependentFactor(absCosAngle),
params.z,
params.w
);
}`),e.vertex.code.add(a.H`float applyScreenSizePerspectiveScaleFactorFloat(float size, vec4 factor) {
return max(mix(size * factor.x, size, factor.y), screenSizePerspectiveMinSize(size, factor));
}`),e.vertex.code.add(a.H`float screenSizePerspectiveScaleFloat(float size, float absCosAngle, float distanceToCamera, vec4 params) {
return applyScreenSizePerspectiveScaleFactorFloat(
size,
screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params)
);
}`),e.vertex.code.add(a.H`vec2 applyScreenSizePerspectiveScaleFactorVec2(vec2 size, vec4 factor) {
return mix(size * clamp(factor.x, screenSizePerspectiveMinSize(size.y, factor) / max(1e-5, size.y), 1.0), size, factor.y);
}`),e.vertex.code.add(a.H`vec2 screenSizePerspectiveScaleVec2(vec2 size, float absCosAngle, float distanceToCamera, vec4 params) {
return applyScreenSizePerspectiveScaleFactorVec2(size, screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params));
}`)}const l=(0,o.c)();var c=r(3261);function u(e,t){const r=e.vertex;t.hasVerticalOffset?(function(e){e.uniforms.add(new n.N("verticalOffset",((e,t)=>{const{minWorldLength:r,maxWorldLength:o,screenLength:n}=e.verticalOffset,a=Math.tan(.5*t.camera.fovY)/(.5*t.camera.fullViewport[3]),s=t.camera.pixelRatio||1;return(0,i.s)(d,n*s,a,r,o)})))}(r),t.hasScreenSizePerspective&&(e.include(s),function(e){e.uniforms.add(new n.N("screenSizePerspectiveAlignment",(e=>function(e){return(0,i.s)(l,e.parameters.divisor,e.parameters.offset,e.parameters.minPixelSize,e.paddingPixelsOverride)}(e.screenSizePerspectiveAlignment||e.screenSizePerspective))))}(r),(0,c.hY)(e.vertex,t)),r.code.add(a.H`
      vec3 calculateVerticalOffset(vec3 worldPos, vec3 localOrigin) {
        float viewDistance = length((view * vec4(worldPos, 1.0)).xyz);
        ${t.spherical?a.H`vec3 worldNormal = normalize(worldPos + localOrigin);`:a.H`vec3 worldNormal = vec3(0.0, 0.0, 1.0);`}
        ${t.hasScreenSizePerspective?a.H`
            float cosAngle = dot(worldNormal, normalize(worldPos - cameraPosition));
            float verticalOffsetScreenHeight = screenSizePerspectiveScaleFloat(verticalOffset.x, abs(cosAngle), viewDistance, screenSizePerspectiveAlignment);`:a.H`
            float verticalOffsetScreenHeight = verticalOffset.x;`}
        // Screen sized offset in world space, used for example for line callouts
        float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * viewDistance, verticalOffset.z, verticalOffset.w);
        return worldNormal * worldOffset;
      }

      vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) {
        return worldPos + calculateVerticalOffset(worldPos, localOrigin);
      }
    `)):r.code.add(a.H`vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) { return worldPos; }`)}const d=(0,o.c)()},74312:(e,t,r)=>{r.d(t,{s:()=>E});var i=r(1662),o=r(34344),n=r(39100),a=r(95650),s=r(35031),l=r(5885),c=r(4731),u=r(7792),d=r(23410),h=r(21414);function f(e,t){const r=t.output===s.H.ObjectAndLayerIdColor,i=t.objectAndLayerIdColorInstanced;r&&(e.varyings.add("objectAndLayerIdColorVarying","vec4"),i?e.attributes.add(h.T.INSTANCEOBJECTANDLAYERIDCOLOR,"vec4"):e.attributes.add(h.T.OBJECTANDLAYERIDCOLOR,"vec4")),e.vertex.code.add(d.H`
     void forwardObjectAndLayerIdColor() {
      ${r?i?d.H`objectAndLayerIdColorVarying = instanceObjectAndLayerIdColor * 0.003921568627451;`:d.H`objectAndLayerIdColorVarying = objectAndLayerIdColor * 0.003921568627451;`:d.H``} }`),e.fragment.code.add(d.H`
      void outputObjectAndLayerIdColor() {
        ${r?d.H`fragColor = objectAndLayerIdColorVarying;`:d.H``} }`)}var m=r(82082),p=r(78549),v=r(9794);function g(e,t){switch(e.fragment.include(v.n),t.output){case s.H.Shadow:case s.H.ShadowHighlight:case s.H.ShadowExcludeHighlight:e.fragment.code.add(d.H`float _calculateFragDepth(const in float depth) {
const float SLOPE_SCALE = 2.0;
const float BIAS = 20.0 * .000015259;
float m = max(abs(dFdx(depth)), abs(dFdy(depth)));
float result = depth + SLOPE_SCALE * m + BIAS;
return clamp(result, .0, .999999);
}
void outputDepth(float _linearDepth) {
fragColor = float2rgba(_calculateFragDepth(_linearDepth));
}`);break;case s.H.Depth:e.fragment.code.add(d.H`void outputDepth(float _linearDepth) {
fragColor = float2rgba(_linearDepth);
}`)}}var _=r(1983),x=r(15176);const T=(0,_.f)(1,1,0,1),b=(0,_.f)(1,0,1,1);function S(e){e.fragment.uniforms.add(new x.A("depthTexture",((e,t)=>t.highlightDepthTexture))),e.fragment.constants.add("occludedHighlightFlag","vec4",T).add("unoccludedHighlightFlag","vec4",b),e.fragment.code.add(d.H`void outputHighlight() {
float sceneDepth = float(texelFetch(depthTexture, ivec2(gl_FragCoord.xy), 0).x);
if (gl_FragCoord.z > sceneDepth + 5e-7) {
fragColor = occludedHighlightFlag;
} else {
fragColor = unoccludedHighlightFlag;
}
}`)}var A=r(91024),y=r(49745),C=r(3261),w=r(11125),O=r(1130),M=r(70984);function E(e,t){const{vertex:r,fragment:h}=e,v=t.hasModelTransformation;if(v){const e=(0,o.c)();r.uniforms.add(new O.g("model",(e=>e.modelTransformation??n.I))),r.uniforms.add(new w.c("normalTransform",(t=>((0,i.b)(e,t.modelTransformation??n.I),e))))}const _=t.hasColorTexture&&t.alphaDiscardMode!==M.JJ.Opaque;switch(t.output){case s.H.Depth:case s.H.Shadow:case s.H.ShadowHighlight:case s.H.ShadowExcludeHighlight:case s.H.ObjectAndLayerIdColor:(0,C.Sv)(r,t),e.include(c.w,t),e.include(m.D,t),e.include(A.k,t),e.include(g,t),e.include(l.f5,t),e.include(f,t),(0,a.Zu)(e),e.varyings.add("depth","float"),_&&h.uniforms.add(new x.A("tex",(e=>e.texture))),r.code.add(d.H`
          void main(void) {
            vpos = calculateVPos();
            ${v?"vpos = (model * vec4(vpos, 1.0)).xyz;":""}
            vpos = subtractOrigin(vpos);
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPositionWithDepth(proj, view, vpos, nearFar, depth);
            forwardTextureCoordinates();
            forwardObjectAndLayerIdColor();
          }
        `),e.include(y.z,t),h.code.add(d.H`
          void main(void) {
            discardBySlice(vpos);
            ${_?d.H`
                    vec4 texColor = texture(tex, ${t.hasColorTextureTransform?d.H`colorUV`:d.H`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}
            ${t.output===s.H.ObjectAndLayerIdColor?d.H`outputObjectAndLayerIdColor();`:d.H`outputDepth(depth);`}
          }
        `);break;case s.H.Normal:{(0,C.Sv)(r,t),e.include(c.w,t),e.include(u.O,t),e.include(p.Bb,t),e.include(m.D,t),e.include(A.k,t),_&&h.uniforms.add(new x.A("tex",(e=>e.texture))),t.normalType===u.r.ScreenDerivative&&e.varyings.add("vPositionView","vec3");const i=t.normalType===u.r.Attribute||t.normalType===u.r.Compressed;r.code.add(d.H`
          void main(void) {
            vpos = calculateVPos();
            ${v?"vpos = (model * vec4(vpos, 1.0)).xyz;":""}

            ${i?d.H`vNormalWorld = ${v?"normalize(normalTransform * dpNormal(vvLocalNormal(normalModel())))":"dpNormalView(vvLocalNormal(normalModel()))"};`:d.H`
                  // Get vertex position in camera space for screen-space derivative normals
                  vPositionView = (view * vec4(vpos, 1.0)).xyz;
                `}
            vpos = subtractOrigin(vpos);
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, vpos);
            forwardTextureCoordinates();
          }
        `),e.include(l.f5,t),e.include(y.z,t),h.code.add(d.H`
          void main() {
            discardBySlice(vpos);
            ${_?d.H`
                    vec4 texColor = texture(tex, ${t.hasColorTextureTransform?d.H`colorUV`:d.H`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}

            ${t.normalType===u.r.ScreenDerivative?d.H`vec3 normal = screenDerivativeNormal(vPositionView);`:d.H`
                  vec3 normal = normalize(vNormalWorld);
                  if (gl_FrontFacing == false){
                    normal = -normal;
                  }`}
            fragColor = vec4(0.5 + 0.5 * normal, 1.0);
          }
        `);break}case s.H.Highlight:(0,C.Sv)(r,t),e.include(c.w,t),e.include(m.D,t),e.include(A.k,t),_&&h.uniforms.add(new x.A("tex",(e=>e.texture))),r.code.add(d.H`
          void main(void) {
            vpos = calculateVPos();
            ${v?"vpos = (model * vec4(vpos, 1.0)).xyz;":""}
            vpos = subtractOrigin(vpos);
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, vpos);
            forwardTextureCoordinates();
          }
        `),e.include(l.f5,t),e.include(y.z,t),e.include(S,t),h.code.add(d.H`
          void main() {
            discardBySlice(vpos);
            ${_?d.H`
                    vec4 texColor = texture(tex, ${t.hasColorTextureTransform?d.H`colorUV`:d.H`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}
            outputHighlight();
          }
        `)}}},6665:(e,t,r)=>{r.d(t,{S:()=>n});var i=r(9794),o=r(23410);function n(e){e.include(i.n),e.code.add(o.H`float linearDepthFromFloat(float depth, vec2 nearFar) {
return -(depth * (nearFar[1] - nearFar[0]) + nearFar[0]);
}
float linearDepthFromTexture(sampler2D depthTex, vec2 uv, vec2 nearFar) {
return linearDepthFromFloat(rgba2float(texture(depthTex, uv)), nearFar);
}`)}},3417:(e,t,r)=>{r.d(t,{Q:()=>d});var i=r(82082),o=r(72129),n=r(2833),a=r(23410),s=r(37649),l=r(15176),c=r(40017),u=r(21414);function d(e,t){const r=e.fragment;t.hasVertexTangents?(e.attributes.add(u.T.TANGENT,"vec4"),e.varyings.add("vTangent","vec4"),t.doubleSidedMode===n.q.WindingOrder?r.code.add(a.H`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = gl_FrontFacing ? vTangent.w : -vTangent.w;
vec3 tangent = normalize(gl_FrontFacing ? vTangent.xyz : -vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`):r.code.add(a.H`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = vTangent.w;
vec3 tangent = normalize(vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`)):r.code.add(a.H`mat3 computeTangentSpace(vec3 normal, vec3 pos, vec2 st) {
vec3 Q1 = dFdx(pos);
vec3 Q2 = dFdy(pos);
vec2 stx = dFdx(st);
vec2 sty = dFdy(st);
float det = stx.t * sty.s - sty.t * stx.s;
vec3 T = stx.t * Q2 - sty.t * Q1;
T = T - normal * dot(normal, T);
T *= inversesqrt(max(dot(T,T), 1.e-10));
vec3 B = sign(det) * cross(normal, T);
return mat3(T, B, normal);
}`),t.textureCoordinateType!==i.N.None&&(e.include(o.i,t),r.uniforms.add(t.pbrTextureBindType===c.P.Pass?new l.A("normalTexture",(e=>e.textureNormal)):new s.R("normalTexture",(e=>e.textureNormal))),r.code.add(a.H`vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {
vec3 rawNormal = textureLookup(normalTexture, uv).rgb * 2.0 - 1.0;
return tangentSpace * rawNormal;
}`))}},19075:(e,t,r)=>{r.d(t,{K:()=>_});var i=r(23410),o=r(15176),n=(r(55709),r(5474)),a=r(21414),s=r(91907),l=r(41163);new l.G(a.T.POSITION,3,s.g.FLOAT,0,12),new l.G(a.T.POSITION,3,s.g.FLOAT,0,20),new l.G(a.T.UV0,2,s.g.FLOAT,12,20),new l.G(a.T.POSITION,3,s.g.FLOAT,0,32),new l.G(a.T.NORMAL,3,s.g.FLOAT,12,32),new l.G(a.T.UV0,2,s.g.FLOAT,24,32),new l.G(a.T.POSITION,3,s.g.FLOAT,0,16),new l.G(a.T.COLOR,4,s.g.UNSIGNED_BYTE,12,16),new l.G(a.T.POSITION,2,s.g.FLOAT,0,8),new l.G(a.T.POSITION,2,s.g.FLOAT,0,16),new l.G(a.T.UV0,2,s.g.FLOAT,8,16),r(29620),r(78951),r(71449),r(80479);var c=r(9969),u=r(52756),d=r(95194),h=r(24756),f=r(17346);class m extends u.A{initializeProgram(e){return new d.$(e.rctx,m.shader.get().build(),n.i)}initializePipeline(){return(0,f.sm)({colorWrite:f.BK})}}m.shader=new c.J(h.S,(()=>r.e(99018).then(r.bind(r,99018))));var p=r(91800);class v extends u.A{initializeProgram(e){return new d.$(e.rctx,v.shader.get().build(),n.i)}initializePipeline(){return(0,f.sm)({colorWrite:f.BK})}}v.shader=new c.J(p.S,(()=>r.e(4168).then(r.bind(r,4168)))),r(69666),r(18567),r(62486);const g=2;function _(e,t){const r=e.fragment;t.receiveAmbientOcclusion?(r.uniforms.add(new o.A("ssaoTex",((e,t)=>t.ssaoHelper.colorTexture))),r.constants.add("blurSizePixelsInverse","float",1/g),r.code.add(i.H`float evaluateAmbientOcclusionInverse() {
vec2 ssaoTextureSizeInverse = 1.0 / vec2(textureSize(ssaoTex, 0));
return texture(ssaoTex, gl_FragCoord.xy * blurSizePixelsInverse * ssaoTextureSizeInverse).a;
}
float evaluateAmbientOcclusion() {
return 1.0 - evaluateAmbientOcclusionInverse();
}`)):r.code.add(i.H`float evaluateAmbientOcclusionInverse() { return 1.0; }
float evaluateAmbientOcclusion() { return 0.0; }`)}},14859:(e,t,r)=>{r.d(t,{XP:()=>w,PN:()=>y,sC:()=>C});var i=r(27755),o=r(6766),n=r(8909),a=r(88589),s=r(1983),l=r(3864),c=r(43036),u=r(63371),d=r(23410);function h(e,t){const r=e.fragment,i=void 0!==t.lightingSphericalHarmonicsOrder?t.lightingSphericalHarmonicsOrder:2;0===i?(r.uniforms.add(new c.J("lightingAmbientSH0",((e,t)=>(0,o.s)(f,t.lighting.sh.r[0],t.lighting.sh.g[0],t.lighting.sh.b[0])))),r.code.add(d.H`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
return ambientLight * (1.0 - ambientOcclusion);
}`)):1===i?(r.uniforms.add(new u.N("lightingAmbientSH_R",((e,t)=>(0,a.s)(m,t.lighting.sh.r[0],t.lighting.sh.r[1],t.lighting.sh.r[2],t.lighting.sh.r[3]))),new u.N("lightingAmbientSH_G",((e,t)=>(0,a.s)(m,t.lighting.sh.g[0],t.lighting.sh.g[1],t.lighting.sh.g[2],t.lighting.sh.g[3]))),new u.N("lightingAmbientSH_B",((e,t)=>(0,a.s)(m,t.lighting.sh.b[0],t.lighting.sh.b[1],t.lighting.sh.b[2],t.lighting.sh.b[3])))),r.code.add(d.H`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec4 sh0 = vec4(
0.282095,
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y
);
vec3 ambientLight = vec3(
dot(lightingAmbientSH_R, sh0),
dot(lightingAmbientSH_G, sh0),
dot(lightingAmbientSH_B, sh0)
);
return ambientLight * (1.0 - ambientOcclusion);
}`)):2===i&&(r.uniforms.add(new c.J("lightingAmbientSH0",((e,t)=>(0,o.s)(f,t.lighting.sh.r[0],t.lighting.sh.g[0],t.lighting.sh.b[0]))),new u.N("lightingAmbientSH_R1",((e,t)=>(0,a.s)(m,t.lighting.sh.r[1],t.lighting.sh.r[2],t.lighting.sh.r[3],t.lighting.sh.r[4]))),new u.N("lightingAmbientSH_G1",((e,t)=>(0,a.s)(m,t.lighting.sh.g[1],t.lighting.sh.g[2],t.lighting.sh.g[3],t.lighting.sh.g[4]))),new u.N("lightingAmbientSH_B1",((e,t)=>(0,a.s)(m,t.lighting.sh.b[1],t.lighting.sh.b[2],t.lighting.sh.b[3],t.lighting.sh.b[4]))),new u.N("lightingAmbientSH_R2",((e,t)=>(0,a.s)(m,t.lighting.sh.r[5],t.lighting.sh.r[6],t.lighting.sh.r[7],t.lighting.sh.r[8]))),new u.N("lightingAmbientSH_G2",((e,t)=>(0,a.s)(m,t.lighting.sh.g[5],t.lighting.sh.g[6],t.lighting.sh.g[7],t.lighting.sh.g[8]))),new u.N("lightingAmbientSH_B2",((e,t)=>(0,a.s)(m,t.lighting.sh.b[5],t.lighting.sh.b[6],t.lighting.sh.b[7],t.lighting.sh.b[8])))),r.code.add(d.H`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
vec4 sh1 = vec4(
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y,
1.092548 * normal.x * normal.y
);
vec4 sh2 = vec4(
1.092548 * normal.y * normal.z,
0.315392 * (3.0 * normal.z * normal.z - 1.0),
1.092548 * normal.x * normal.z,
0.546274 * (normal.x * normal.x - normal.y * normal.y)
);
ambientLight += vec3(
dot(lightingAmbientSH_R1, sh1),
dot(lightingAmbientSH_G1, sh1),
dot(lightingAmbientSH_B1, sh1)
);
ambientLight += vec3(
dot(lightingAmbientSH_R2, sh2),
dot(lightingAmbientSH_G2, sh2),
dot(lightingAmbientSH_B2, sh2)
);
return ambientLight * (1.0 - ambientOcclusion);
}`),t.pbrMode!==l.f7.Normal&&t.pbrMode!==l.f7.Schematic||r.code.add(d.H`const vec3 skyTransmittance = vec3(0.9, 0.9, 1.0);
vec3 calculateAmbientRadiance(float ambientOcclusion)
{
vec3 ambientLight = 1.2 * (0.282095 * lightingAmbientSH0) - 0.2;
return ambientLight *= (1.0 - ambientOcclusion) * skyTransmittance;
}`))}const f=(0,n.c)(),m=(0,s.c)();var p=r(19075),v=r(58749),g=r(89585),_=r(95509),x=r(91013),T=r(40017);class b extends x.x{constructor(e,t){super(e,"bool",T.P.Pass,((r,i,o)=>r.setUniform1b(e,t(i,o))))}}var S=r(24603);r(19431),(0,n.c)();const A=.4;function y(e){e.constants.add("ambientBoostFactor","float",A)}function C(e){e.uniforms.add(new S.p("lightingGlobalFactor",((e,t)=>t.lighting.globalFactor)))}function w(e,t){const r=e.fragment;switch(e.include(p.K,t),t.pbrMode!==l.f7.Disabled&&e.include(g.T,t),e.include(h,t),e.include(_.e),r.code.add(d.H`
    const float GAMMA_SRGB = 2.1;
    const float INV_GAMMA_SRGB = 0.4761904;
    ${t.pbrMode===l.f7.Disabled?"":"const vec3 GROUND_REFLECTANCE = vec3(0.2);"}
  `),y(r),C(r),(0,v.Pe)(r),r.code.add(d.H`
    float additionalDirectedAmbientLight(vec3 vPosWorld) {
      float vndl = dot(${t.spherical?d.H`normalize(vPosWorld)`:d.H`vec3(0.0, 0.0, 1.0)`}, mainLightDirection);
      return smoothstep(0.0, 1.0, clamp(vndl * 2.5, 0.0, 1.0));
    }
  `),(0,v.F1)(r),r.code.add(d.H`vec3 evaluateAdditionalLighting(float ambientOcclusion, vec3 vPosWorld) {
float additionalAmbientScale = additionalDirectedAmbientLight(vPosWorld);
return (1.0 - ambientOcclusion) * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor * mainLightIntensity;
}`),t.pbrMode){case l.f7.Disabled:case l.f7.WaterOnIntegratedMesh:case l.f7.Water:e.include(v.kR),r.code.add(d.H`vec3 evaluateSceneLighting(vec3 normalWorld, vec3 albedo, float shadow, float ssao, vec3 additionalLight)
{
vec3 mainLighting = evaluateMainLighting(normalWorld, shadow);
vec3 ambientLighting = calculateAmbientIrradiance(normalWorld, ssao);
vec3 albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
vec3 totalLight = mainLighting + ambientLighting + additionalLight;
totalLight = min(totalLight, vec3(PI));
vec3 outColor = vec3((albedoLinear / PI) * totalLight);
return pow(outColor, vec3(INV_GAMMA_SRGB));
}`);break;case l.f7.Normal:case l.f7.Schematic:r.code.add(d.H`const float fillLightIntensity = 0.25;
const float horizonLightDiffusion = 0.4;
const float additionalAmbientIrradianceFactor = 0.02;
vec3 evaluateSceneLightingPBR(vec3 normal, vec3 albedo, float shadow, float ssao, vec3 additionalLight, vec3 viewDir, vec3 normalGround, vec3 mrr, vec3 _emission, float additionalAmbientIrradiance)
{
vec3 viewDirection = -viewDir;
vec3 h = normalize(viewDirection + mainLightDirection);
PBRShadingInfo inputs;
inputs.NdotL = clamp(dot(normal, mainLightDirection), 0.001, 1.0);
inputs.NdotV = clamp(abs(dot(normal, viewDirection)), 0.001, 1.0);
inputs.NdotH = clamp(dot(normal, h), 0.0, 1.0);
inputs.VdotH = clamp(dot(viewDirection, h), 0.0, 1.0);
inputs.NdotNG = clamp(dot(normal, normalGround), -1.0, 1.0);
vec3 reflectedView = normalize(reflect(viewDirection, normal));
inputs.RdotNG = clamp(dot(reflectedView, normalGround), -1.0, 1.0);
inputs.albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
inputs.ssao = ssao;
inputs.metalness = mrr[0];
inputs.roughness = clamp(mrr[1] * mrr[1], 0.001, 0.99);`),r.code.add(d.H`inputs.f0 = (0.16 * mrr[2] * mrr[2]) * (1.0 - inputs.metalness) + inputs.albedoLinear * inputs.metalness;
inputs.f90 = vec3(clamp(dot(inputs.f0, vec3(50.0 * 0.33)), 0.0, 1.0));
inputs.diffuseColor = inputs.albedoLinear * (vec3(1.0) - inputs.f0) * (1.0 - inputs.metalness);`),t.useFillLights?r.uniforms.add(new b("hasFillLights",((e,t)=>t.enableFillLights))):r.constants.add("hasFillLights","bool",!1),r.code.add(d.H`vec3 ambientDir = vec3(5.0 * normalGround[1] - normalGround[0] * normalGround[2], - 5.0 * normalGround[0] - normalGround[2] * normalGround[1], normalGround[1] * normalGround[1] + normalGround[0] * normalGround[0]);
ambientDir = ambientDir != vec3(0.0)? normalize(ambientDir) : normalize(vec3(5.0, -1.0, 0.0));
inputs.NdotAmbDir = hasFillLights ? abs(dot(normal, ambientDir)) : 1.0;
vec3 mainLightIrradianceComponent = inputs.NdotL * (1.0 - shadow) * mainLightIntensity;
vec3 fillLightsIrradianceComponent = inputs.NdotAmbDir * mainLightIntensity * fillLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(normal, ssao) + additionalLight;
inputs.skyIrradianceToSurface = ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
inputs.groundIrradianceToSurface = GROUND_REFLECTANCE * ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;`),r.uniforms.add(new S.p("lightingSpecularStrength",((e,t)=>t.lighting.mainLight.specularStrength)),new S.p("lightingEnvironmentStrength",((e,t)=>t.lighting.mainLight.environmentStrength))),r.code.add(d.H`vec3 horizonRingDir = inputs.RdotNG * normalGround - reflectedView;
vec3 horizonRingH = normalize(viewDirection + horizonRingDir);
inputs.NdotH_Horizon = dot(normal, horizonRingH);
vec3 mainLightRadianceComponent = lightingSpecularStrength * normalDistribution(inputs.NdotH, inputs.roughness) * mainLightIntensity * (1.0 - shadow);
vec3 horizonLightRadianceComponent = lightingEnvironmentStrength * normalDistribution(inputs.NdotH_Horizon, min(inputs.roughness + horizonLightDiffusion, 1.0)) * mainLightIntensity * fillLightIntensity;
vec3 ambientLightRadianceComponent = lightingEnvironmentStrength * calculateAmbientRadiance(ssao) + additionalLight;
inputs.skyRadianceToSurface = ambientLightRadianceComponent + mainLightRadianceComponent + horizonLightRadianceComponent;
inputs.groundRadianceToSurface = GROUND_REFLECTANCE * (ambientLightRadianceComponent + horizonLightRadianceComponent) + mainLightRadianceComponent;
inputs.averageAmbientRadiance = ambientLightIrradianceComponent[1] * (1.0 + GROUND_REFLECTANCE[1]);`),r.code.add(d.H`
        vec3 reflectedColorComponent = evaluateEnvironmentIllumination(inputs);
        vec3 additionalMaterialReflectanceComponent = inputs.albedoLinear * additionalAmbientIrradiance;
        vec3 emissionComponent = pow(_emission, vec3(GAMMA_SRGB));
        vec3 outColorLinear = reflectedColorComponent + additionalMaterialReflectanceComponent + emissionComponent;
        ${t.pbrMode===l.f7.Schematic?d.H`vec3 outColor = pow(max(vec3(0.0), outColorLinear - 0.005 * inputs.averageAmbientRadiance), vec3(INV_GAMMA_SRGB));`:d.H`vec3 outColor = pow(blackLevelSoftCompression(outColorLinear, inputs), vec3(INV_GAMMA_SRGB));`}
        return outColor;
      }
    `);break;case l.f7.Terrain:case l.f7.TerrainWithWater:e.include(v.kR),r.code.add(d.H`const float roughnessTerrain = 0.5;
const float specularityTerrain = 0.5;
const vec3 fresnelReflectionTerrain = vec3(0.04);
vec3 evaluateTerrainLighting(vec3 n, vec3 c, float shadow, float ssao, vec3 al, vec3 vd, vec3 nup) {
vec3 viewDirection = -vd;
vec3 h = normalize(viewDirection + mainLightDirection);
float NdotL = clamp(dot(n, mainLightDirection), 0.001, 1.0);
float NdotV = clamp(abs(dot(n, viewDirection)), 0.001, 1.0);
float NdotH = clamp(dot(n, h), 0.0, 1.0);
float NdotNG = clamp(dot(n, nup), -1.0, 1.0);
vec3 albedoLinear = pow(c, vec3(GAMMA_SRGB));
float lightness = 0.3 * albedoLinear[0] + 0.5 * albedoLinear[1] + 0.2 * albedoLinear[2];
vec3 f0 = (0.85 * lightness + 0.15) * fresnelReflectionTerrain;
vec3 f90 =  vec3(clamp(dot(f0, vec3(50.0 * 0.33)), 0.0, 1.0));
vec3 mainLightIrradianceComponent = (1. - shadow) * NdotL * mainLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(n, ssao) + al;
vec3 ambientSky = ambientLightIrradianceComponent + mainLightIrradianceComponent;
vec3 indirectDiffuse = ((1.0 - NdotNG) * mainLightIrradianceComponent + (1.0 + NdotNG ) * ambientSky) * 0.5;
vec3 outDiffColor = albedoLinear * (1.0 - f0) * indirectDiffuse / PI;
vec3 mainLightRadianceComponent = normalDistribution(NdotH, roughnessTerrain) * mainLightIntensity;
vec2 dfg = prefilteredDFGAnalytical(roughnessTerrain, NdotV);
vec3 specularColor = f0 * dfg.x + f90 * dfg.y;
vec3 specularComponent = specularityTerrain * specularColor * mainLightRadianceComponent;
vec3 outColorLinear = outDiffColor + specularComponent;
vec3 outColor = pow(outColorLinear, vec3(INV_GAMMA_SRGB));
return outColor;
}`);break;default:(0,i.Bg)(t.pbrMode);case l.f7.COUNT:}}(0,n.c)()},58749:(e,t,r)=>{r.d(t,{F1:()=>a,Pe:()=>n,kR:()=>s});var i=r(43036),o=r(23410);function n(e){e.uniforms.add(new i.J("mainLightDirection",((e,t)=>t.lighting.mainLight.direction)))}function a(e){e.uniforms.add(new i.J("mainLightIntensity",((e,t)=>t.lighting.mainLight.intensity)))}function s(e){n(e.fragment),a(e.fragment),e.fragment.code.add(o.H`vec3 evaluateMainLighting(vec3 normal_global, float shadowing) {
float dotVal = clamp(dot(normal_global, mainLightDirection), 0.0, 1.0);
return mainLightIntensity * ((1.0 - shadowing) * dotVal);
}`)}},73393:(e,t,r)=>{r.d(t,{l:()=>s});var i=r(6665),o=r(93072),n=r(23410),a=r(15176);function s(e,t){t.hasMultipassTerrain&&(e.fragment.include(i.S),e.fragment.uniforms.add(new a.A("terrainDepthTexture",((e,t)=>t.multipassTerrain.linearDepthTexture))),e.fragment.uniforms.add(new o.A("nearFar",((e,t)=>t.camera.nearFar))),e.fragment.uniforms.add(new o.A("inverseViewport",((e,t)=>t.inverseViewport))),e.fragment.code.add(n.H`
    void terrainDepthTest(vec4 fragCoord, float fragmentDepth){
      float terrainDepth = linearDepthFromTexture(terrainDepthTexture, fragCoord.xy * inverseViewport, nearFar);
      if(fragmentDepth ${t.cullAboveGround?">":"<="} terrainDepth){
        discard;
      }
    }
  `))}},2833:(e,t,r)=>{r.d(t,{k:()=>s,q:()=>i});var i,o,n=r(27755),a=r(23410);function s(e,t){const r=e.fragment;switch(r.code.add(a.H`struct ShadingNormalParameters {
vec3 normalView;
vec3 viewDirection;
} shadingParams;`),t.doubleSidedMode){case i.None:r.code.add(a.H`vec3 shadingNormal(ShadingNormalParameters params) {
return normalize(params.normalView);
}`);break;case i.View:r.code.add(a.H`vec3 shadingNormal(ShadingNormalParameters params) {
return dot(params.normalView, params.viewDirection) > 0.0 ? normalize(-params.normalView) : normalize(params.normalView);
}`);break;case i.WindingOrder:r.code.add(a.H`vec3 shadingNormal(ShadingNormalParameters params) {
return gl_FrontFacing ? normalize(params.normalView) : normalize(-params.normalView);
}`);break;default:(0,n.Bg)(t.doubleSidedMode);case i.COUNT:}}(o=i||(i={}))[o.None=0]="None",o[o.View=1]="View",o[o.WindingOrder=2]="WindingOrder",o[o.COUNT=3]="COUNT"},89585:(e,t,r)=>{r.d(t,{T:()=>s});var i=r(23410);function o(e){const t=e.fragment.code;t.add(i.H`vec3 evaluateDiffuseIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float NdotNG)
{
return ((1.0 - NdotNG) * ambientGround + (1.0 + NdotNG) * ambientSky) * 0.5;
}`),t.add(i.H`float integratedRadiance(float cosTheta2, float roughness)
{
return (cosTheta2 - 1.0) / (cosTheta2 * (1.0 - roughness * roughness) - 1.0);
}`),t.add(i.H`vec3 evaluateSpecularIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float RdotNG, float roughness)
{
float cosTheta2 = 1.0 - RdotNG * RdotNG;
float intRadTheta = integratedRadiance(cosTheta2, roughness);
float ground = RdotNG < 0.0 ? 1.0 - intRadTheta : 1.0 + intRadTheta;
float sky = 2.0 - ground;
return (ground * ambientGround + sky * ambientSky) * 0.5;
}`)}var n=r(3864),a=r(95509);function s(e,t){const r=e.fragment.code;e.include(a.e),t.pbrMode!==n.f7.Normal&&t.pbrMode!==n.f7.Schematic&&t.pbrMode!==n.f7.Terrain&&t.pbrMode!==n.f7.TerrainWithWater||(r.add(i.H`float normalDistribution(float NdotH, float roughness)
{
float a = NdotH * roughness;
float b = roughness / (1.0 - NdotH * NdotH + a * a);
return b * b * INV_PI;
}`),r.add(i.H`const vec4 c0 = vec4(-1.0, -0.0275, -0.572,  0.022);
const vec4 c1 = vec4( 1.0,  0.0425,  1.040, -0.040);
const vec2 c2 = vec2(-1.04, 1.04);
vec2 prefilteredDFGAnalytical(float roughness, float NdotV) {
vec4 r = roughness * c0 + c1;
float a004 = min(r.x * r.x, exp2(-9.28 * NdotV)) * r.x + r.y;
return c2 * a004 + r.zw;
}`)),t.pbrMode!==n.f7.Normal&&t.pbrMode!==n.f7.Schematic||(e.include(o),r.add(i.H`struct PBRShadingInfo
{
float NdotL;
float NdotV;
float NdotH;
float VdotH;
float LdotH;
float NdotNG;
float RdotNG;
float NdotAmbDir;
float NdotH_Horizon;
vec3 skyRadianceToSurface;
vec3 groundRadianceToSurface;
vec3 skyIrradianceToSurface;
vec3 groundIrradianceToSurface;
float averageAmbientRadiance;
float ssao;
vec3 albedoLinear;
vec3 f0;
vec3 f90;
vec3 diffuseColor;
float metalness;
float roughness;
};`),r.add(i.H`vec3 evaluateEnvironmentIllumination(PBRShadingInfo inputs) {
vec3 indirectDiffuse = evaluateDiffuseIlluminationHemisphere(inputs.groundIrradianceToSurface, inputs.skyIrradianceToSurface, inputs.NdotNG);
vec3 indirectSpecular = evaluateSpecularIlluminationHemisphere(inputs.groundRadianceToSurface, inputs.skyRadianceToSurface, inputs.RdotNG, inputs.roughness);
vec3 diffuseComponent = inputs.diffuseColor * indirectDiffuse * INV_PI;
vec2 dfg = prefilteredDFGAnalytical(inputs.roughness, inputs.NdotV);
vec3 specularColor = inputs.f0 * dfg.x + inputs.f90 * dfg.y;
vec3 specularComponent = specularColor * indirectSpecular;
return (diffuseComponent + specularComponent);
}`),r.add(i.H`float gamutMapChanel(float x, vec2 p){
return (x < p.x) ? mix(0.0, p.y, x/p.x) : mix(p.y, 1.0, (x - p.x) / (1.0 - p.x) );
}`),r.add(i.H`vec3 blackLevelSoftCompression(vec3 inColor, PBRShadingInfo inputs){
vec3 outColor;
vec2 p = vec2(0.02 * (inputs.averageAmbientRadiance), 0.0075 * (inputs.averageAmbientRadiance));
outColor.x = gamutMapChanel(inColor.x, p) ;
outColor.y = gamutMapChanel(inColor.y, p) ;
outColor.z = gamutMapChanel(inColor.z, p) ;
return outColor;
}`))}},3864:(e,t,r)=>{r.d(t,{f7:()=>i,jV:()=>h});var i,o,n=r(72129),a=r(32006),s=r(43036),l=r(23410),c=r(37649),u=r(15176),d=r(40017);function h(e,t){const r=e.fragment,o=t.hasMetallicRoughnessTexture||t.hasEmissionTexture||t.hasOcclusionTexture;if(t.pbrMode===i.Normal&&o&&e.include(n.i,t),t.pbrMode!==i.Schematic)if(t.pbrMode!==i.Disabled){if(t.pbrMode===i.Normal){r.code.add(l.H`vec3 mrr;
vec3 emission;
float occlusion;`);const e=t.pbrTextureBindType;t.hasMetallicRoughnessTexture&&(r.uniforms.add(e===d.P.Pass?new u.A("texMetallicRoughness",(e=>e.textureMetallicRoughness)):new c.R("texMetallicRoughness",(e=>e.textureMetallicRoughness))),r.code.add(l.H`void applyMetallnessAndRoughness(vec2 uv) {
vec3 metallicRoughness = textureLookup(texMetallicRoughness, uv).rgb;
mrr[0] *= metallicRoughness.b;
mrr[1] *= metallicRoughness.g;
}`)),t.hasEmissionTexture&&(r.uniforms.add(e===d.P.Pass?new u.A("texEmission",(e=>e.textureEmissive)):new c.R("texEmission",(e=>e.textureEmissive))),r.code.add(l.H`void applyEmission(vec2 uv) {
emission *= textureLookup(texEmission, uv).rgb;
}`)),t.hasOcclusionTexture?(r.uniforms.add(e===d.P.Pass?new u.A("texOcclusion",(e=>e.textureOcclusion)):new c.R("texOcclusion",(e=>e.textureOcclusion))),r.code.add(l.H`void applyOcclusion(vec2 uv) {
occlusion *= textureLookup(texOcclusion, uv).r;
}
float getBakedOcclusion() {
return occlusion;
}`)):r.code.add(l.H`float getBakedOcclusion() { return 1.0; }`),e===d.P.Pass?r.uniforms.add(new s.J("emissionFactor",(e=>e.emissiveFactor)),new s.J("mrrFactors",(e=>e.mrrFactors))):r.uniforms.add(new a.B("emissionFactor",(e=>e.emissiveFactor)),new a.B("mrrFactors",(e=>e.mrrFactors))),r.code.add(l.H`
    void applyPBRFactors() {
      mrr = mrrFactors;
      emission = emissionFactor;
      occlusion = 1.0;

      ${t.hasMetallicRoughnessTexture?l.H`applyMetallnessAndRoughness(${t.hasMetallicRoughnessTextureTransform?l.H`metallicRoughnessUV`:"vuv0"});`:""}

      ${t.hasEmissionTexture?l.H`applyEmission(${t.hasEmissiveTextureTransform?l.H`emissiveUV`:"vuv0"});`:""}

      ${t.hasOcclusionTexture?l.H`applyOcclusion(${t.hasOcclusionTextureTransform?l.H`occlusionUV`:"vuv0"});`:""}
    }
  `)}}else r.code.add(l.H`float getBakedOcclusion() { return 1.0; }`);else r.code.add(l.H`vec3 mrr = vec3(0.0, 0.6, 0.2);
vec3 emission = vec3(0.0);
float occlusion = 1.0;
void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`)}r(97009),(o=i||(i={}))[o.Disabled=0]="Disabled",o[o.Normal=1]="Normal",o[o.Schematic=2]="Schematic",o[o.Water=3]="Water",o[o.WaterOnIntegratedMesh=4]="WaterOnIntegratedMesh",o[o.Terrain=5]="Terrain",o[o.TerrainWithWater=6]="TerrainWithWater",o[o.COUNT=7]="COUNT"},95509:(e,t,r)=>{r.d(t,{e:()=>o});var i=r(23410);function o(e){e.vertex.code.add(i.H`const float PI = 3.141592653589793;`),e.fragment.code.add(i.H`const float PI = 3.141592653589793;
const float LIGHT_NORMALIZATION = 1.0 / PI;
const float INV_PI = 0.3183098861837907;
const float HALF_PI = 1.570796326794897;`)}},59181:(e,t,r)=>{r.d(t,{XE:()=>f,hb:()=>h}),r(39100),r(8909);var i=r(9794),o=r(63371),n=r(59842),a=r(23410),s=r(91013),l=r(40017);class c extends s.x{constructor(e,t,r){super(e,"mat4",l.P.Draw,((r,i,o,n)=>r.setUniformMatrix4fv(e,t(i,o,n))),r)}}class u extends s.x{constructor(e,t,r){super(e,"mat4",l.P.Pass,((r,i,o)=>r.setUniformMatrix4fv(e,t(i,o))),r)}}var d=r(15176);function h(e,t){t.receiveShadows&&(e.fragment.uniforms.add(new u("shadowMapMatrix",((e,t)=>t.shadowMap.getShadowMapMatrices(e.origin)),4)),m(e))}function f(e,t){t.receiveShadows&&(e.fragment.uniforms.add(new c("shadowMapMatrix",((e,t)=>t.shadowMap.getShadowMapMatrices(e.origin)),4)),m(e))}function m(e){const t=e.fragment;t.include(i.n),t.uniforms.add(new d.A("shadowMapTex",((e,t)=>t.shadowMap.depthTexture)),new n._("numCascades",((e,t)=>t.shadowMap.numCascades)),new o.N("cascadeDistances",((e,t)=>t.shadowMap.cascadeDistances))),t.code.add(a.H`int chooseCascade(float depth, out mat4 mat) {
vec4 distance = cascadeDistances;
int i = depth < distance[1] ? 0 : depth < distance[2] ? 1 : depth < distance[3] ? 2 : 3;
mat = i == 0 ? shadowMapMatrix[0] : i == 1 ? shadowMapMatrix[1] : i == 2 ? shadowMapMatrix[2] : shadowMapMatrix[3];
return i;
}
vec3 lightSpacePosition(vec3 _vpos, mat4 mat) {
vec4 lv = mat * vec4(_vpos, 1.0);
lv.xy /= lv.w;
return 0.5 * lv.xyz + vec3(0.5);
}
vec2 cascadeCoordinates(int i, vec3 lvpos) {
return vec2(float(i - 2 * (i / 2)) * 0.5, float(i / 2) * 0.5) + (numCascades == 1 ? 1.0 : 0.5) * lvpos.xy;
}
float readShadowMapDepth(vec2 uv, sampler2D _depthTex) {
return rgba2float(texture(_depthTex, uv));
}
float posIsInShadow(vec2 uv, vec3 lvpos, sampler2D _depthTex) {
return readShadowMapDepth(uv, _depthTex) < lvpos.z ? 1.0 : 0.0;
}
float filterShadow(vec2 uv, vec3 lvpos, float texSize, sampler2D _depthTex) {
float halfPixelSize = 0.5 / texSize;
vec2 st = fract((vec2(halfPixelSize) + uv) * texSize);
float s00 = posIsInShadow(uv + vec2(-halfPixelSize, -halfPixelSize), lvpos, _depthTex);
float s10 = posIsInShadow(uv + vec2(halfPixelSize, -halfPixelSize), lvpos, _depthTex);
float s11 = posIsInShadow(uv + vec2(halfPixelSize, halfPixelSize), lvpos, _depthTex);
float s01 = posIsInShadow(uv + vec2(-halfPixelSize, halfPixelSize), lvpos, _depthTex);
return mix(mix(s00, s10, st.x), mix(s01, s11, st.x), st.y);
}
float readShadowMap(const in vec3 _vpos, float _linearDepth) {
mat4 mat;
int i = chooseCascade(_linearDepth, mat);
if (i >= numCascades) { return 0.0; }
vec3 lvpos = lightSpacePosition(_vpos, mat);
if (lvpos.z >= 1.0) { return 0.0; }
if (lvpos.x < 0.0 || lvpos.x > 1.0 || lvpos.y < 0.0 || lvpos.y > 1.0) { return 0.0; }
vec2 uv = cascadeCoordinates(i, lvpos);
return filterShadow(uv, lvpos, float(textureSize(shadowMapTex, 0).x), shadowMapTex);
}`)}},30228:(e,t,r)=>{r.d(t,{DT:()=>u,NI:()=>s,R5:()=>l,av:()=>a,jF:()=>c});var i=r(19710),o=r(23410),n=r(11125);function a(e){e.vertex.uniforms.add(new n.c("colorTextureTransformMatrix",(e=>null!=e.colorTextureTransformMatrix?e.colorTextureTransformMatrix:(0,i.c)()))),e.varyings.add("colorUV","vec2"),e.vertex.code.add(o.H`void forwardColorUV(){
colorUV = (colorTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}function s(e){e.vertex.uniforms.add(new n.c("normalTextureTransformMatrix",(e=>null!=e.normalTextureTransformMatrix?e.normalTextureTransformMatrix:(0,i.c)()))),e.varyings.add("normalUV","vec2"),e.vertex.code.add(o.H`void forwardNormalUV(){
normalUV = (normalTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}function l(e){e.vertex.uniforms.add(new n.c("emissiveTextureTransformMatrix",(e=>null!=e.emissiveTextureTransformMatrix?e.emissiveTextureTransformMatrix:(0,i.c)()))),e.varyings.add("emissiveUV","vec2"),e.vertex.code.add(o.H`void forwardEmissiveUV(){
emissiveUV = (emissiveTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}function c(e){e.vertex.uniforms.add(new n.c("occlusionTextureTransformMatrix",(e=>null!=e.occlusionTextureTransformMatrix?e.occlusionTextureTransformMatrix:(0,i.c)()))),e.varyings.add("occlusionUV","vec2"),e.vertex.code.add(o.H`void forwardOcclusionUV(){
occlusionUV = (occlusionTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}function u(e){e.vertex.uniforms.add(new n.c("metallicRoughnessTextureTransformMatrix",(e=>null!=e.metallicRoughnessTextureTransformMatrix?e.metallicRoughnessTextureTransformMatrix:(0,i.c)()))),e.varyings.add("metallicRoughnessUV","vec2"),e.vertex.code.add(o.H`void forwardMetallicRoughnessUV(){
metallicRoughnessUV = (metallicRoughnessTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}},91024:(e,t,r)=>{r.d(t,{k:()=>S});var i=r(43036),o=r(91013),n=r(40017);class a extends o.x{constructor(e,t,r){super(e,"vec4",n.P.Pass,((r,i,o)=>r.setUniform4fv(e,t(i,o))),r)}}class s extends o.x{constructor(e,t,r){super(e,"float",n.P.Pass,((r,i,o)=>r.setUniform1fv(e,t(i,o))),r)}}var l=r(23410),c=r(11125),u=r(21414),d=(r(39994),r(19431),r(1662),r(34344),r(24455),r(39100)),h=(r(6766),r(8909)),f=(r(6923),r(36663)),m=r(74396),p=r(81977),v=(r(7283),r(7753),r(40266));let g=class extends m.Z{constructor(){super(...arguments),this.SCENEVIEW_HITTEST_RETURN_INTERSECTOR=!1,this.DECONFLICTOR_SHOW_VISIBLE=!1,this.DECONFLICTOR_SHOW_INVISIBLE=!1,this.DECONFLICTOR_SHOW_GRID=!1,this.LABELS_SHOW_BORDER=!1,this.TEXT_SHOW_BASELINE=!1,this.TEXT_SHOW_BORDER=!1,this.OVERLAY_DRAW_DEBUG_TEXTURE=!1,this.OVERLAY_SHOW_CENTER=!1,this.SHOW_POI=!1,this.TESTS_DISABLE_OPTIMIZATIONS=!1,this.TESTS_DISABLE_FAST_UPDATES=!1,this.DRAW_MESH_GEOMETRY_NORMALS=!1,this.FEATURE_TILE_FETCH_SHOW_TILES=!1,this.FEATURE_TILE_TREE_SHOW_TILES=!1,this.TERRAIN_TILE_TREE_SHOW_TILES=!1,this.I3S_TREE_SHOW_TILES=!1,this.I3S_SHOW_MODIFICATIONS=!1,this.LOD_INSTANCE_RENDERER_DISABLE_UPDATES=!1,this.LOD_INSTANCE_RENDERER_COLORIZE_BY_LEVEL=!1,this.EDGES_SHOW_HIDDEN_TRANSPARENT_EDGES=!1,this.LINE_WIREFRAMES=!1}};var _,x,T;(0,f._)([(0,p.Cb)()],g.prototype,"SCENEVIEW_HITTEST_RETURN_INTERSECTOR",void 0),(0,f._)([(0,p.Cb)()],g.prototype,"DECONFLICTOR_SHOW_VISIBLE",void 0),(0,f._)([(0,p.Cb)()],g.prototype,"DECONFLICTOR_SHOW_INVISIBLE",void 0),(0,f._)([(0,p.Cb)()],g.prototype,"DECONFLICTOR_SHOW_GRID",void 0),(0,f._)([(0,p.Cb)()],g.prototype,"LABELS_SHOW_BORDER",void 0),(0,f._)([(0,p.Cb)()],g.prototype,"TEXT_SHOW_BASELINE",void 0),(0,f._)([(0,p.Cb)()],g.prototype,"TEXT_SHOW_BORDER",void 0),(0,f._)([(0,p.Cb)()],g.prototype,"OVERLAY_DRAW_DEBUG_TEXTURE",void 0),(0,f._)([(0,p.Cb)()],g.prototype,"OVERLAY_SHOW_CENTER",void 0),(0,f._)([(0,p.Cb)()],g.prototype,"SHOW_POI",void 0),(0,f._)([(0,p.Cb)()],g.prototype,"TESTS_DISABLE_OPTIMIZATIONS",void 0),(0,f._)([(0,p.Cb)()],g.prototype,"TESTS_DISABLE_FAST_UPDATES",void 0),(0,f._)([(0,p.Cb)()],g.prototype,"DRAW_MESH_GEOMETRY_NORMALS",void 0),(0,f._)([(0,p.Cb)()],g.prototype,"FEATURE_TILE_FETCH_SHOW_TILES",void 0),(0,f._)([(0,p.Cb)()],g.prototype,"FEATURE_TILE_TREE_SHOW_TILES",void 0),(0,f._)([(0,p.Cb)()],g.prototype,"TERRAIN_TILE_TREE_SHOW_TILES",void 0),(0,f._)([(0,p.Cb)()],g.prototype,"I3S_TREE_SHOW_TILES",void 0),(0,f._)([(0,p.Cb)()],g.prototype,"I3S_SHOW_MODIFICATIONS",void 0),(0,f._)([(0,p.Cb)()],g.prototype,"LOD_INSTANCE_RENDERER_DISABLE_UPDATES",void 0),(0,f._)([(0,p.Cb)()],g.prototype,"LOD_INSTANCE_RENDERER_COLORIZE_BY_LEVEL",void 0),(0,f._)([(0,p.Cb)()],g.prototype,"EDGES_SHOW_HIDDEN_TRANSPARENT_EDGES",void 0),(0,f._)([(0,p.Cb)()],g.prototype,"LINE_WIREFRAMES",void 0),g=(0,f._)([(0,v.j)("esri.views.3d.support.DebugFlags")],g),new g,(T=_||(_={}))[T.Undefined=0]="Undefined",T[T.DefinedSize=1]="DefinedSize",T[T.DefinedScale=2]="DefinedScale",function(e){e[e.Undefined=0]="Undefined",e[e.DefinedAngle=1]="DefinedAngle"}(x||(x={})),(0,d.c)(),(0,h.c)(),(0,d.c)(),r(7358);const b=8;function S(e,t){const{vertex:r,attributes:o}=e;t.hasVvInstancing&&(t.vvSize||t.vvColor)&&o.add(u.T.INSTANCEFEATUREATTRIBUTE,"vec4"),t.vvSize?(r.uniforms.add(new i.J("vvSizeMinSize",(e=>e.vvSize.minSize))),r.uniforms.add(new i.J("vvSizeMaxSize",(e=>e.vvSize.maxSize))),r.uniforms.add(new i.J("vvSizeOffset",(e=>e.vvSize.offset))),r.uniforms.add(new i.J("vvSizeFactor",(e=>e.vvSize.factor))),r.uniforms.add(new c.c("vvSymbolRotationMatrix",(e=>e.vvSymbolRotationMatrix))),r.uniforms.add(new i.J("vvSymbolAnchor",(e=>e.vvSymbolAnchor))),r.code.add(l.H`vec3 vvScale(vec4 _featureAttribute) {
return clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize);
}
vec4 vvTransformPosition(vec3 position, vec4 _featureAttribute) {
return vec4(vvSymbolRotationMatrix * ( vvScale(_featureAttribute) * (position + vvSymbolAnchor)), 1.0);
}`),r.code.add(l.H`
      const float eps = 1.192092896e-07;
      vec4 vvTransformNormal(vec3 _normal, vec4 _featureAttribute) {
        vec3 vvScale = clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize + eps, vvSizeMaxSize);
        return vec4(vvSymbolRotationMatrix * _normal / vvScale, 1.0);
      }

      ${t.hasVvInstancing?l.H`
      vec4 vvLocalNormal(vec3 _normal) {
        return vvTransformNormal(_normal, instanceFeatureAttribute);
      }

      vec4 localPosition() {
        return vvTransformPosition(position, instanceFeatureAttribute);
      }`:""}
    `)):r.code.add(l.H`vec4 localPosition() { return vec4(position, 1.0); }
vec4 vvLocalNormal(vec3 _normal) { return vec4(_normal, 1.0); }`),t.vvColor?(r.constants.add("vvColorNumber","int",b),r.uniforms.add(new s("vvColorValues",(e=>e.vvColor.values),b),new a("vvColorColors",(e=>e.vvColor.colors),b)),r.code.add(l.H`
      vec4 interpolateVVColor(float value) {
        if (value <= vvColorValues[0]) {
          return vvColorColors[0];
        }

        for (int i = 1; i < vvColorNumber; ++i) {
          if (vvColorValues[i] >= value) {
            float f = (value - vvColorValues[i-1]) / (vvColorValues[i] - vvColorValues[i-1]);
            return mix(vvColorColors[i-1], vvColorColors[i], f);
          }
        }
        return vvColorColors[vvColorNumber - 1];
      }

      vec4 vvGetColor(vec4 featureAttribute) {
        return interpolateVVColor(featureAttribute.y);
      }

      ${t.hasVvInstancing?l.H`
            vec4 vvColor() {
              return vvGetColor(instanceFeatureAttribute);
            }`:"vec4 vvColor() { return vec4(1.0); }"}
    `)):r.code.add(l.H`vec4 vvColor() { return vec4(1.0); }`)}},44391:(e,t,r)=>{r.d(t,{F:()=>i,b:()=>o});const i=.1,o=.001},49745:(e,t,r)=>{r.d(t,{z:()=>l});var i=r(44391),o=r(23410);function n(e){e.fragment.code.add(o.H`
    #define discardOrAdjustAlpha(color) { if (color.a < ${o.H.float(i.b)}) { discard; } }
  `)}r(91013),r(40017);var a=r(24603),s=r(70984);function l(e,t){!function(e,t,r){const i=e.fragment;switch(t.alphaDiscardMode!==s.JJ.Mask&&t.alphaDiscardMode!==s.JJ.MaskBlend||i.uniforms.add(r),t.alphaDiscardMode){case s.JJ.Blend:return e.include(n);case s.JJ.Opaque:i.code.add(o.H`void discardOrAdjustAlpha(inout vec4 color) {
color.a = 1.0;
}`);break;case s.JJ.Mask:i.code.add(o.H`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } else { color.a = 1.0; } }`);break;case s.JJ.MaskBlend:e.fragment.code.add(o.H`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } }`)}}(e,t,new a.p("textureAlphaCutoff",(e=>e.textureAlphaCutoff)))}},77334:(e,t,r)=>{r.d(t,{G:()=>u,R:()=>h});var i=r(55709),o=r(69666),n=r(88589),a=r(1983),s=r(93072),l=r(63371),c=r(23410);function u(e){e.fragment.uniforms.add(new l.N("projInfo",((e,t)=>function(e){const t=e.camera.projectionMatrix;return 0===t[11]?(0,n.s)(d,2/(e.camera.fullWidth*t[0]),2/(e.camera.fullHeight*t[5]),(1+t[12])/t[0],(1+t[13])/t[5]):(0,n.s)(d,-2/(e.camera.fullWidth*t[0]),-2/(e.camera.fullHeight*t[5]),(1-t[8])/t[0],(1-t[9])/t[5])}(t)))),e.fragment.uniforms.add(new s.A("zScale",((e,t)=>h(t)))),e.fragment.code.add(c.H`vec3 reconstructPosition(vec2 fragCoord, float depth) {
return vec3((fragCoord * projInfo.xy + projInfo.zw) * (zScale.x * depth + zScale.y), depth);
}`)}const d=(0,a.c)();function h(e){return 0===e.camera.projectionMatrix[11]?(0,i.s)(f,0,1):(0,i.s)(f,1,0)}const f=(0,o.a)()},5331:(e,t,r)=>{r.d(t,{$:()=>o});var i=r(23410);function o({code:e},t){t.doublePrecisionRequiresObfuscation?e.add(i.H`vec3 dpPlusFrc(vec3 a, vec3 b) {
return mix(a, a + b, vec3(notEqual(b, vec3(0))));
}
vec3 dpMinusFrc(vec3 a, vec3 b) {
return mix(vec3(0), a - b, vec3(notEqual(a, b)));
}
vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = dpPlusFrc(hiA, hiB);
vec3 e = dpMinusFrc(t1, hiA);
vec3 t2 = dpMinusFrc(hiB, e) + dpMinusFrc(hiA, dpMinusFrc(t1, e)) + loA + loB;
return t1 + t2;
}`):e.add(i.H`vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = hiA + hiB;
vec3 e = t1 - hiA;
vec3 t2 = ((hiB - e) + (hiA - (t1 - e))) + loA + loB;
return t1 + t2;
}`)}},10938:(e,t,r)=>{r.d(t,{y:()=>a});var i=r(66352),o=r(23410);function n(e){e.code.add(o.H`vec4 premultiplyAlpha(vec4 v) {
return vec4(v.rgb * v.a, v.a);
}
vec3 rgb2hsv(vec3 c) {
vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
vec4 p = c.g < c.b ? vec4(c.bg, K.wz) : vec4(c.gb, K.xy);
vec4 q = c.r < p.x ? vec4(p.xyw, c.r) : vec4(c.r, p.yzx);
float d = q.x - min(q.w, q.y);
float e = 1.0e-10;
return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), min(d / (q.x + e), 1.0), q.x);
}
vec3 hsv2rgb(vec3 c) {
vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}
float rgb2v(vec3 c) {
return max(c.x, max(c.y, c.z));
}`)}function a(e){e.include(n),e.code.add(o.H`
    vec3 mixExternalColor(vec3 internalColor, vec3 textureColor, vec3 externalColor, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      vec3 internalMixed = internalColor * textureColor;
      vec3 allMixed = internalMixed * externalColor;

      if (mode == ${o.H.int(i.a9.Multiply)}) {
        return allMixed;
      }
      if (mode == ${o.H.int(i.a9.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${o.H.int(i.a9.Replace)}) {
        return externalColor;
      }

      // tint (or something invalid)
      float vIn = rgb2v(internalMixed);
      vec3 hsvTint = rgb2hsv(externalColor);
      vec3 hsvOut = vec3(hsvTint.x, hsvTint.y, vIn * hsvTint.z);
      return hsv2rgb(hsvOut);
    }

    float mixExternalOpacity(float internalOpacity, float textureOpacity, float externalOpacity, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      float internalMixed = internalOpacity * textureOpacity;
      float allMixed = internalMixed * externalOpacity;

      if (mode == ${o.H.int(i.a9.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${o.H.int(i.a9.Replace)}) {
        return externalOpacity;
      }

      // multiply or tint (or something invalid)
      return allMixed;
    }
  `)}},9794:(e,t,r)=>{r.d(t,{n:()=>o});var i=r(23410);function o(e){e.code.add(i.H`const float MAX_RGBA_FLOAT =
255.0 / 256.0 +
255.0 / 256.0 / 256.0 +
255.0 / 256.0 / 256.0 / 256.0 +
255.0 / 256.0 / 256.0 / 256.0 / 256.0;
const vec4 FIXED_POINT_FACTORS = vec4(1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0);
vec4 float2rgba(const float value) {
float valueInValidDomain = clamp(value, 0.0, MAX_RGBA_FLOAT);
vec4 fixedPointU8 = floor(fract(valueInValidDomain * FIXED_POINT_FACTORS) * 256.0);
const float toU8AsFloat = 1.0 / 255.0;
return fixedPointU8 * toU8AsFloat;
}
const vec4 RGBA_2_FLOAT_FACTORS = vec4(
255.0 / (256.0),
255.0 / (256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0 * 256.0)
);
float rgba2float(vec4 rgba) {
return dot(rgba, RGBA_2_FLOAT_FACTORS);
}`)}},3261:(e,t,r)=>{r.d(t,{hY:()=>T,Sv:()=>b,_8:()=>y});var i,o,n,a,s,l,c,u=r(24455),d=r(39100),h=r(6766),f=r(8909);r(24568),function(e){e[e.INNER=0]="INNER",e[e.OUTER=1]="OUTER"}(i||(i={})),function(e){e[e.REGULAR=0]="REGULAR",e[e.HAS_NORTH_POLE=1]="HAS_NORTH_POLE",e[e.HAS_SOUTH_POLE=2]="HAS_SOUTH_POLE",e[e.HAS_BOTH_POLES=3]="HAS_BOTH_POLES"}(o||(o={})),function(e){e[e.OFF=0]="OFF",e[e.ON=1]="ON"}(n||(n={})),function(e){e[e.Color=0]="Color",e[e.ColorNoRasterImage=1]="ColorNoRasterImage",e[e.Highlight=2]="Highlight",e[e.Water=3]="Water",e[e.Occluded=4]="Occluded",e[e.ObjectAndLayerIdColor=5]="ObjectAndLayerIdColor"}(a||(a={})),function(e){e[e.FADING=0]="FADING",e[e.IMMEDIATE=1]="IMMEDIATE",e[e.UNFADED=2]="UNFADED"}(s||(s={})),r(70984),(c=l||(l={}))[c.None=0]="None",c[c.ColorAndWater=1]="ColorAndWater",c[c.Highlight=2]="Highlight",c[c.Occluded=3]="Occluded",c[c.ObjectAndLayerIdColor=4]="ObjectAndLayerIdColor";var m=r(32006),p=r(43036),v=(r(24603),r(91013)),g=r(40017);class _ extends v.x{constructor(e,t){super(e,"mat4",g.P.Draw,((r,i,o)=>r.setUniformMatrix4fv(e,t(i,o))))}}var x=r(1130);function T(e,t){t.instancedDoublePrecision?e.constants.add("cameraPosition","vec3",f.Z):e.uniforms.add(new m.B("cameraPosition",((e,t)=>(0,h.s)(A,t.camera.viewInverseTransposeMatrix[3]-e.origin[0],t.camera.viewInverseTransposeMatrix[7]-e.origin[1],t.camera.viewInverseTransposeMatrix[11]-e.origin[2]))))}function b(e,t){if(!t.instancedDoublePrecision)return void e.uniforms.add(new x.g("proj",((e,t)=>t.camera.projectionMatrix)),new _("view",((e,t)=>(0,u.w)(S,t.camera.viewMatrix,e.origin))),new m.B("localOrigin",(e=>e.origin)));const r=e=>(0,h.s)(A,e.camera.viewInverseTransposeMatrix[3],e.camera.viewInverseTransposeMatrix[7],e.camera.viewInverseTransposeMatrix[11]);e.uniforms.add(new x.g("proj",((e,t)=>t.camera.projectionMatrix)),new x.g("view",((e,t)=>(0,u.w)(S,t.camera.viewMatrix,r(t)))),new p.J("localOrigin",((e,t)=>r(t))))}const S=(0,d.c)(),A=(0,f.c)();function y(e){e.uniforms.add(new x.g("viewNormal",((e,t)=>t.camera.viewInverseTransposeMatrix)))}},26482:(e,t,r)=>{r.d(t,{q:()=>n});var i=r(91013),o=r(40017);class n extends i.x{constructor(e,t){super(e,"vec2",o.P.Draw,((r,i,o,n)=>r.setUniform2fv(e,t(i,o,n))))}}},93072:(e,t,r)=>{r.d(t,{A:()=>n});var i=r(91013),o=r(40017);class n extends i.x{constructor(e,t){super(e,"vec2",o.P.Pass,((r,i,o)=>r.setUniform2fv(e,t(i,o))))}}},32006:(e,t,r)=>{r.d(t,{B:()=>n});var i=r(91013),o=r(40017);class n extends i.x{constructor(e,t){super(e,"vec3",o.P.Draw,((r,i,o,n)=>r.setUniform3fv(e,t(i,o,n))))}}},43036:(e,t,r)=>{r.d(t,{J:()=>n});var i=r(91013),o=r(40017);class n extends i.x{constructor(e,t){super(e,"vec3",o.P.Pass,((r,i,o)=>r.setUniform3fv(e,t(i,o))))}}},63371:(e,t,r)=>{r.d(t,{N:()=>n});var i=r(91013),o=r(40017);class n extends i.x{constructor(e,t){super(e,"vec4",o.P.Pass,((r,i,o)=>r.setUniform4fv(e,t(i,o))))}}},24603:(e,t,r)=>{r.d(t,{p:()=>n});var i=r(91013),o=r(40017);class n extends i.x{constructor(e,t){super(e,"float",o.P.Pass,((r,i,o)=>r.setUniform1f(e,t(i,o))))}}},59842:(e,t,r)=>{r.d(t,{_:()=>n});var i=r(91013),o=r(40017);class n extends i.x{constructor(e,t){super(e,"int",o.P.Pass,((r,i,o)=>r.setUniform1i(e,t(i,o))))}}},55784:(e,t,r)=>{r.d(t,{j:()=>n});var i=r(91013),o=r(40017);class n extends i.x{constructor(e,t){super(e,"mat3",o.P.Draw,((r,i,o)=>r.setUniformMatrix3fv(e,t(i,o))))}}},11125:(e,t,r)=>{r.d(t,{c:()=>n});var i=r(91013),o=r(40017);class n extends i.x{constructor(e,t){super(e,"mat3",o.P.Pass,((r,i,o)=>r.setUniformMatrix3fv(e,t(i,o))))}}},1130:(e,t,r)=>{r.d(t,{g:()=>n});var i=r(91013),o=r(40017);class n extends i.x{constructor(e,t){super(e,"mat4",o.P.Pass,((r,i,o)=>r.setUniformMatrix4fv(e,t(i,o))))}}},3961:(e,t,r)=>{r.d(t,{kG:()=>l});var i=r(70375),o=r(13802),n=r(15095);const a=o.Z.getLogger("esri.views.3d.webgl-engine.core.shaderModules.shaderBuilder");class s{constructor(){this._includedModules=new Map}include(e,t){if(this._includedModules.has(e)){const r=this._includedModules.get(e);if(r!==t){a.error("Trying to include shader module multiple times with different sets of options.");const t=new Set;for(const i of Object.keys(r))r[i]!==e[i]&&t.add(i);for(const i of Object.keys(e))r[i]!==e[i]&&t.add(i);t.forEach((t=>console.error(`  ${t}: current ${r[t]} new ${e[t]}`)))}}else this._includedModules.set(e,t),e(this.builder,t)}}class l extends s{constructor(){super(...arguments),this.vertex=new d,this.fragment=new d,this.attributes=new h,this.varyings=new f,this.extensions=new m,this.constants=new p}get fragmentUniforms(){return this.fragment.uniforms.entries}get builder(){return this}generate(e){const t=this.extensions.generateSource(e),r=this.attributes.generateSource(e),i=this.varyings.generateSource(e),o="vertex"===e?this.vertex:this.fragment,n=o.uniforms.generateSource(),a=o.code.generateSource(),s="vertex"===e?g:v,l=this.constants.generateSource().concat(o.constants.generateSource());return`#version 300 es\n${t.join("\n")}\n\n${s}\n\n${l.join("\n")}\n\n${n.join("\n")}\n\n${r.join("\n")}\n\n${i.join("\n")}\n\n${a.join("\n")}`}generateBind(e,t){const r=new Map;this.vertex.uniforms.entries.forEach((t=>{const i=t.bind[e];null!=i&&r.set(t.name,i)})),this.fragment.uniforms.entries.forEach((t=>{const i=t.bind[e];null!=i&&r.set(t.name,i)}));const i=Array.from(r.values()),o=i.length;return(e,r,n)=>{for(let a=0;a<o;++a)i[a](t,e,r,n)}}}class c{constructor(){this._entries=new Map}add(...e){for(const t of e)this._add(t)}get(e){return this._entries.get(e)}_add(e){if(null!=e){if(this._entries.has(e.name)&&!this._entries.get(e.name).equals(e))throw new i.Z(`Duplicate uniform name ${e.name} for different uniform type`);this._entries.set(e.name,e)}else a.error(`Trying to add null Uniform from ${(new Error).stack}.`)}generateSource(){return Array.from(this._entries.values()).map((e=>null!=e.arraySize?`uniform ${e.type} ${e.name}[${e.arraySize}];`:`uniform ${e.type} ${e.name};`))}get entries(){return Array.from(this._entries.values())}}class u{constructor(){this._entries=new Array}add(e){this._entries.push(e)}generateSource(){return this._entries}}class d extends s{constructor(){super(...arguments),this.uniforms=new c,this.code=new u,this.constants=new p}get builder(){return this}}class h{constructor(){this._entries=new Array}add(e,t){this._entries.push([e,t])}generateSource(e){return"fragment"===e?[]:this._entries.map((e=>`in ${e[1]} ${e[0]};`))}}class f{constructor(){this._entries=new Map}add(e,t){this._entries.has(e)&&(0,n.hu)(this._entries.get(e)===t),this._entries.set(e,t)}generateSource(e){const t=new Array;return this._entries.forEach(((r,i)=>t.push("vertex"===e?`out ${r} ${i};`:`in ${r} ${i};`))),t}}class m{constructor(){this._entries=new Set}add(e){this._entries.add(e)}generateSource(e){const t="vertex"===e?m.ALLOWLIST_VERTEX:m.ALLOWLIST_FRAGMENT;return Array.from(this._entries).filter((e=>t.includes(e))).map((e=>`#extension ${e} : enable`))}}m.ALLOWLIST_FRAGMENT=["GL_EXT_shader_texture_lod","GL_OES_standard_derivatives"],m.ALLOWLIST_VERTEX=[];class p{constructor(){this._entries=new Set}add(e,t,r){let i="ERROR_CONSTRUCTOR_STRING";switch(t){case"float":i=p._numberToFloatStr(r);break;case"int":i=p._numberToIntStr(r);break;case"bool":i=r.toString();break;case"vec2":i=`vec2(${p._numberToFloatStr(r[0])},                            ${p._numberToFloatStr(r[1])})`;break;case"vec3":i=`vec3(${p._numberToFloatStr(r[0])},                            ${p._numberToFloatStr(r[1])},                            ${p._numberToFloatStr(r[2])})`;break;case"vec4":i=`vec4(${p._numberToFloatStr(r[0])},                            ${p._numberToFloatStr(r[1])},                            ${p._numberToFloatStr(r[2])},                            ${p._numberToFloatStr(r[3])})`;break;case"ivec2":i=`ivec2(${p._numberToIntStr(r[0])},                             ${p._numberToIntStr(r[1])})`;break;case"ivec3":i=`ivec3(${p._numberToIntStr(r[0])},                             ${p._numberToIntStr(r[1])},                             ${p._numberToIntStr(r[2])})`;break;case"ivec4":i=`ivec4(${p._numberToIntStr(r[0])},                             ${p._numberToIntStr(r[1])},                             ${p._numberToIntStr(r[2])},                             ${p._numberToIntStr(r[3])})`;break;case"mat2":case"mat3":case"mat4":i=`${t}(${Array.prototype.map.call(r,(e=>p._numberToFloatStr(e))).join(", ")})`}return this._entries.add(`const ${t} ${e} = ${i};`),this}static _numberToIntStr(e){return e.toFixed(0)}static _numberToFloatStr(e){return Number.isInteger(e)?e.toFixed(1):e.toString()}generateSource(){return Array.from(this._entries)}}const v="#ifdef GL_FRAGMENT_PRECISION_HIGH\n  precision highp float;\n  precision highp sampler2D;\n#else\n  precision mediump float;\n  precision mediump sampler2D;\n#endif\n\nout vec4 fragColor;",g="precision highp float;\nprecision highp sampler2D;"},37649:(e,t,r)=>{r.d(t,{R:()=>n});var i=r(91013),o=r(40017);class n extends i.x{constructor(e,t){super(e,"sampler2D",o.P.Draw,((r,i,o)=>r.bindTexture(e,t(i,o))))}}},15176:(e,t,r)=>{r.d(t,{A:()=>n});var i=r(91013),o=r(40017);class n extends i.x{constructor(e,t){super(e,"sampler2D",o.P.Pass,((r,i,o)=>r.bindTexture(e,t(i,o))))}}},91013:(e,t,r)=>{r.d(t,{x:()=>o});var i=r(40017);class o{constructor(e,t,r,o,n=null){this.name=e,this.type=t,this.arraySize=n,this.bind={[i.P.Pass]:null,[i.P.Draw]:null},null!=r&&null!=o&&(this.bind[r]=o)}equals(e){return this.type===e.type&&this.name===e.name&&this.arraySize===e.arraySize}}},23410:(e,t,r)=>{r.d(t,{H:()=>o,K:()=>i});const i=class{};function o(e,...t){let r="";for(let i=0;i<t.length;i++)r+=e[i]+t[i];return r+=e[e.length-1],r}var n;(n=o||(o={})).int=function(e){return Math.round(e).toString()},n.float=function(e){return e.toPrecision(8)}},40017:(e,t,r)=>{var i;r.d(t,{P:()=>i}),function(e){e[e.Pass=0]="Pass",e[e.Draw=1]="Draw"}(i||(i={}))},9969:(e,t,r)=>{r.d(t,{J:()=>i});class i{constructor(e,t){this._module=e,this._loadModule=t}get(){return this._module}async reload(){return this._module=await this._loadModule(),this._module}}},52756:(e,t,r)=>{r.d(t,{A:()=>n});var i=r(61681),o=r(91907);class n{constructor(e,t,r){this.release=r,this.initializeConfiguration(e,t),this._configuration=t.snapshot(),this._program=this.initializeProgram(e),this._pipeline=this.initializePipeline(e.rctx.capabilities)}destroy(){this._program=(0,i.M2)(this._program),this._pipeline=this._configuration=null}reload(e){(0,i.M2)(this._program),this._program=this.initializeProgram(e),this._pipeline=this.initializePipeline(e.rctx.capabilities)}get program(){return this._program}get compiled(){return this.program.compiled}get key(){return this._configuration.key}get configuration(){return this._configuration}bindPipelineState(e,t=null,r){e.setPipelineState(this.getPipelineState(t,r))}ensureAttributeLocations(e){this.program.assertCompatibleVertexAttributeLocations(e)}get primitiveType(){return o.MX.TRIANGLES}getPipelineState(e,t){return this._pipeline}initializeConfiguration(e,t){}}},67197:(e,t,r)=>{r.d(t,{m:()=>o,o:()=>n});var i=r(23410);class o extends i.K{constructor(){super(),this._key="",this._keyDirty=!1,this._parameterBits=this._parameterBits?this._parameterBits.map((()=>0)):[],this._parameterNames||(this._parameterNames=[])}get key(){return this._keyDirty&&(this._keyDirty=!1,this._key=String.fromCharCode.apply(String,this._parameterBits)),this._key}snapshot(){const e=this._parameterNames,t={key:this.key};for(const r of e)t[r]=this[r];return t}}function n(e={}){return(t,r)=>{if(t._parameterNames=t._parameterNames??[],t._parameterNames.push(r),null!=e.constValue)Object.defineProperty(t,r,{get:()=>e.constValue});else{const i=t._parameterNames.length-1,o=e.count||2,n=Math.ceil(Math.log2(o)),a=t._parameterBits??[0];let s=0;for(;a[s]+n>16;)s++,s>=a.length&&a.push(0);t._parameterBits=a;const l=a[s],c=(1<<n)-1<<l;a[s]+=n,Object.defineProperty(t,r,{get(){return this[i]},set(e){if(this[i]!==e&&(this[i]=e,this._keyDirty=!0,this._parameterBits[s]=this._parameterBits[s]&~c|+e<<l&c,"number"!=typeof e&&"boolean"!=typeof e))throw new Error("Configuration value for "+r+" must be boolean or number, got "+typeof e)}})}}}},85799:(e,t,r)=>{r.d(t,{a:()=>i});class i{constructor(e,t,r=!1,i=t){this.data=e,this.size=t,this.exclusive=r,this.stride=i}}},10107:(e,t,r)=>{r.d(t,{c:()=>o});var i=r(7958);class o{constructor(){this.id=(0,i.D)()}unload(){}}},95399:(e,t,r)=>{var i;r.d(t,{U:()=>i}),function(e){e[e.Layer=0]="Layer",e[e.Object=1]="Object",e[e.Mesh=2]="Mesh",e[e.Line=3]="Line",e[e.Point=4]="Point",e[e.Material=5]="Material",e[e.Texture=6]="Texture",e[e.COUNT=7]="COUNT"}(i||(i={}))},5474:(e,t,r)=>{r.d(t,{i:()=>o});var i=r(21414);const o=new Map([[i.T.POSITION,0],[i.T.NORMAL,1],[i.T.NORMALCOMPRESSED,1],[i.T.UV0,2],[i.T.COLOR,3],[i.T.COLORFEATUREATTRIBUTE,3],[i.T.SIZE,4],[i.T.TANGENT,4],[i.T.AUXPOS1,5],[i.T.SYMBOLCOLOR,5],[i.T.AUXPOS2,6],[i.T.FEATUREATTRIBUTE,6],[i.T.INSTANCEFEATUREATTRIBUTE,6],[i.T.INSTANCECOLOR,7],[i.T.OBJECTANDLAYERIDCOLOR,7],[i.T.INSTANCEOBJECTANDLAYERIDCOLOR,7],[i.T.MODEL,8],[i.T.MODELNORMAL,12],[i.T.MODELORIGINHI,11],[i.T.MODELORIGINLO,15]])},97009:(e,t,r)=>{r.d(t,{F:()=>l});var i=r(61681),o=r(78668),n=r(23410),a=r(70984);class s{constructor(e){this._material=e.material,this._techniqueRepository=e.techniqueRep,this._output=e.output}dispose(){this._techniqueRepository.release(this._technique)}get technique(){return this._technique}get _stippleTextureRepository(){return this._techniqueRepository.constructionContext.stippleTextureRepository}get _markerTextureRepository(){return this._techniqueRepository.constructionContext.markerTextureRepository}ensureTechnique(e,t){return this._technique=this._techniqueRepository.releaseAndAcquire(e,this._material.getConfiguration(this._output,t),this._technique),this._technique}ensureResources(e){return a.Rw.LOADED}}class l extends s{constructor(e){super(e),this._numLoading=0,this._disposed=!1,this._textureRepository=e.textureRep,this._textureId=e.textureId,this._acquire(e.textureId,(e=>this._texture=e)),this._acquire(e.normalTextureId,(e=>this._textureNormal=e)),this._acquire(e.emissiveTextureId,(e=>this._textureEmissive=e)),this._acquire(e.occlusionTextureId,(e=>this._textureOcclusion=e)),this._acquire(e.metallicRoughnessTextureId,(e=>this._textureMetallicRoughness=e))}dispose(){this._texture=(0,i.RY)(this._texture),this._textureNormal=(0,i.RY)(this._textureNormal),this._textureEmissive=(0,i.RY)(this._textureEmissive),this._textureOcclusion=(0,i.RY)(this._textureOcclusion),this._textureMetallicRoughness=(0,i.RY)(this._textureMetallicRoughness),this._disposed=!0}ensureResources(e){return 0===this._numLoading?a.Rw.LOADED:a.Rw.LOADING}get textureBindParameters(){return new c(null!=this._texture?this._texture.glTexture:null,null!=this._textureNormal?this._textureNormal.glTexture:null,null!=this._textureEmissive?this._textureEmissive.glTexture:null,null!=this._textureOcclusion?this._textureOcclusion.glTexture:null,null!=this._textureMetallicRoughness?this._textureMetallicRoughness.glTexture:null)}updateTexture(e){null!=this._texture&&e===this._texture.id||(this._texture=(0,i.RY)(this._texture),this._textureId=e,this._acquire(this._textureId,(e=>this._texture=e)))}_acquire(e,t){if(null==e)return void t(null);const r=this._textureRepository.acquire(e);if((0,o.y8)(r))return++this._numLoading,void r.then((e=>{if(this._disposed)return(0,i.RY)(e),void t(null);t(e)})).finally((()=>--this._numLoading));t(r)}}class c extends n.K{constructor(e=null,t=null,r=null,i=null,o=null){super(),this.texture=e,this.textureNormal=t,this.textureEmissive=r,this.textureOcclusion=i,this.textureMetallicRoughness=o}}},7358:(e,t,r)=>{r.d(t,{F5:()=>u,yD:()=>i});var i,o,n=r(8909),a=(r(23410),r(10107)),s=r(95399),l=r(5474),c=r(13705);class u extends a.c{constructor(e,t){super(),this.type=s.U.Material,this.supportsEdges=!1,this._visible=!0,this._renderPriority=0,this._insertOrder=0,this._vertexAttributeLocations=l.i,this._pp0=(0,n.f)(0,0,1),this._pp1=(0,n.f)(0,0,0),this._parameters=(0,c.Uf)(e,t),this.validateParameters(this._parameters)}dispose(){}get parameters(){return this._parameters}update(e){return!1}setParameters(e,t=!0){(0,c.LO)(this._parameters,e)&&(this.validateParameters(this._parameters),t&&this.parametersChanged())}validateParameters(e){}get visible(){return this._visible}set visible(e){e!==this._visible&&(this._visible=e,this.parametersChanged())}shouldRender(e){return this.isVisible()&&this.isVisibleForOutput(e.output)&&0!=(this.renderOccluded&e.renderOccludedMask)}isVisibleForOutput(e){return!0}get renderOccluded(){return this.parameters.renderOccluded}get renderPriority(){return this._renderPriority}set renderPriority(e){e!==this._renderPriority&&(this._renderPriority=e,this.parametersChanged())}get insertOrder(){return this._insertOrder}set insertOrder(e){e!==this._insertOrder&&(this._insertOrder=e,this.parametersChanged())}get vertexAttributeLocations(){return this._vertexAttributeLocations}isVisible(){return this._visible}parametersChanged(){null!=this.repository&&this.repository.materialChanged(this)}intersectDraped(e,t,r,i,o,n){return this._pp0[0]=this._pp1[0]=i[0],this._pp0[1]=this._pp1[1]=i[1],this.intersect(e,t,r,this._pp0,this._pp1,o)}}(o=i||(i={}))[o.None=0]="None",o[o.Occlude=1]="Occlude",o[o.Transparent=2]="Transparent",o[o.OccludeAndTransparent=4]="OccludeAndTransparent",o[o.OccludeAndTransparentStencil=8]="OccludeAndTransparentStencil",o[o.Opaque=16]="Opaque"},12045:(e,t,r)=>{r.d(t,{Bh:()=>f,IB:()=>l,j7:()=>c,je:()=>h,ve:()=>u,wu:()=>a});var i=r(42842),o=r(91907),n=r(17346);const a=(0,n.wK)(o.zi.SRC_ALPHA,o.zi.ONE,o.zi.ONE_MINUS_SRC_ALPHA,o.zi.ONE_MINUS_SRC_ALPHA),s=(0,n.if)(o.zi.ONE,o.zi.ONE),l=(0,n.if)(o.zi.ZERO,o.zi.ONE_MINUS_SRC_ALPHA);function c(e){return e===i.A.FrontFace?null:e===i.A.Alpha?l:s}const u=5e5,d={factor:-1,units:-2};function h(e){return e?d:null}function f(e,t=o.wb.LESS){return e===i.A.NONE||e===i.A.FrontFace?t:o.wb.LEQUAL}},95194:(e,t,r)=>{r.d(t,{$:()=>a});var i=r(17135),o=r(40017),n=r(6174);class a{constructor(e,t,r){this._context=e,this._locations=r,this._textures=new Map,this._freeTextureUnits=new i.Z({deallocator:null}),this._glProgram=e.programCache.acquire(t.generate("vertex"),t.generate("fragment"),r),this._glProgram.stop=()=>{throw new Error("Wrapped _glProgram used directly")},this.bindPass=t.generateBind(o.P.Pass,this),this.bindDraw=t.generateBind(o.P.Draw,this),this._fragmentUniforms=(0,n.hZ)()?t.fragmentUniforms:null}dispose(){this._glProgram.dispose()}get glName(){return this._glProgram.glName}get compiled(){return this._glProgram.compiled}setUniform1b(e,t){this._glProgram.setUniform1i(e,t?1:0)}setUniform1i(e,t){this._glProgram.setUniform1i(e,t)}setUniform1f(e,t){this._glProgram.setUniform1f(e,t)}setUniform2fv(e,t){this._glProgram.setUniform2fv(e,t)}setUniform3fv(e,t){this._glProgram.setUniform3fv(e,t)}setUniform4fv(e,t){this._glProgram.setUniform4fv(e,t)}setUniformMatrix3fv(e,t){this._glProgram.setUniformMatrix3fv(e,t)}setUniformMatrix4fv(e,t){this._glProgram.setUniformMatrix4fv(e,t)}setUniform1fv(e,t){this._glProgram.setUniform1fv(e,t)}setUniform1iv(e,t){this._glProgram.setUniform1iv(e,t)}setUniform2iv(e,t){this._glProgram.setUniform3iv(e,t)}setUniform3iv(e,t){this._glProgram.setUniform3iv(e,t)}setUniform4iv(e,t){this._glProgram.setUniform4iv(e,t)}assertCompatibleVertexAttributeLocations(e){e.locations!==this._locations&&console.error("VertexAttributeLocations are incompatible")}stop(){this._textures.clear(),this._freeTextureUnits.clear()}bindTexture(e,t){if(null==t||null==t.glName){const t=this._textures.get(e);return t&&(this._context.bindTexture(null,t.unit),this._freeTextureUnit(t),this._textures.delete(e)),null}let r=this._textures.get(e);return null==r?(r=this._allocTextureUnit(t),this._textures.set(e,r)):r.texture=t,this._context.useProgram(this),this.setUniform1i(e,r.unit),this._context.bindTexture(t,r.unit),r.unit}rebindTextures(){this._context.useProgram(this),this._textures.forEach(((e,t)=>{this._context.bindTexture(e.texture,e.unit),this.setUniform1i(t,e.unit)})),null!=this._fragmentUniforms&&this._fragmentUniforms.forEach((e=>{"sampler2D"!==e.type&&"samplerCube"!==e.type||this._textures.has(e.name)||console.error(`Texture sampler ${e.name} has no bound texture`)}))}_allocTextureUnit(e){return{texture:e,unit:0===this._freeTextureUnits.length?this._textures.size:this._freeTextureUnits.pop()}}_freeTextureUnit(e){this._freeTextureUnits.push(e.unit)}}},42842:(e,t,r)=>{var i;r.d(t,{A:()=>i}),function(e){e[e.Color=0]="Color",e[e.Alpha=1]="Alpha",e[e.FrontFace=2]="FrontFace",e[e.NONE=3]="NONE",e[e.COUNT=4]="COUNT"}(i||(i={}))},13705:(e,t,r)=>{r.d(t,{FZ:()=>w,Uf:()=>A,Bw:()=>m,LO:()=>y,Hx:()=>S});var i=r(7753),o=r(19431),n=r(6766),a=r(8909),s=r(37116),l=r(95399);function c(e,t,r,i){return function(e,t){return Math.max((0,o.t7)(e*t.scale,e,t.factor),function(e,t){return 0===e?t.minPixelSize:t.minPixelSize*(1+2*t.paddingPixels/e)}(e,t))}(e,function(e,t,r){const i=r.parameters,o=r.paddingPixelsOverride;return u.scale=Math.min(i.divisor/(t-i.offset),1),u.factor=function(e){return Math.abs(e*e*e)}(e),u.minPixelSize=i.minPixelSize,u.paddingPixels=o,u}(t,r,i))}r(65684),(0,o.Vl)(10),(0,o.Vl)(12),(0,o.Vl)(70),(0,o.Vl)(40);const u={scale:0,factor:0,minPixelSize:0,paddingPixels:0};var d=r(15095),h=r(21414);const f=(0,s.Ue)();function m(e,t,r,i,o,n){if(e.visible)if(e.boundingInfo){(0,d.hu)(e.type===l.U.Mesh);const a=t.tolerance;v(e.boundingInfo,r,i,a,o,n)}else{const t=e.indices.get(h.T.POSITION),a=e.vertexAttributes.get(h.T.POSITION);_(r,i,0,t.length/3,t,a,void 0,o,n)}}const p=(0,a.c)();function v(e,t,r,i,o,a){if(null==e)return;const l=function(e,t,r){return(0,n.s)(r,1/(t[0]-e[0]),1/(t[1]-e[1]),1/(t[2]-e[2]))}(t,r,p);if((0,s.op)(f,e.bbMin),(0,s.Tn)(f,e.bbMax),null!=o&&o.applyToAabb(f),function(e,t,r,i){return function(e,t,r,i,o){const n=(e[0]-i-t[0])*r[0],a=(e[3]+i-t[0])*r[0];let s=Math.min(n,a),l=Math.max(n,a);const c=(e[1]-i-t[1])*r[1],u=(e[4]+i-t[1])*r[1];if(l=Math.min(l,Math.max(c,u)),l<0)return!1;if(s=Math.max(s,Math.min(c,u)),s>l)return!1;const d=(e[2]-i-t[2])*r[2],h=(e[5]+i-t[2])*r[2];return l=Math.min(l,Math.max(d,h)),!(l<0)&&(s=Math.max(s,Math.min(d,h)),!(s>l)&&s<1/0)}(e,t,r,i)}(f,t,l,i)){const{primitiveIndices:n,indices:s,position:l}=e,c=n?n.length:s.length/3;if(c>O){const n=e.getChildren();if(void 0!==n){for(const e of n)v(e,t,r,i,o,a);return}}_(t,r,0,c,s,l,n,o,a)}}const g=(0,a.c)();function _(e,t,r,i,o,n,a,s,l){if(a)return function(e,t,r,i,o,n,a,s,l){const{data:c,stride:u}=n,d=e[0],h=e[1],f=e[2],m=t[0]-d,p=t[1]-h,v=t[2]-f;for(let e=r;e<i;++e){const t=a[e];let r=3*t,i=u*o[r++],n=c[i++],_=c[i++],x=c[i];i=u*o[r++];let T=c[i++],S=c[i++],A=c[i];i=u*o[r];let y=c[i++],C=c[i++],w=c[i];null!=s&&([n,_,x]=s.applyToVertex(n,_,x,e),[T,S,A]=s.applyToVertex(T,S,A,e),[y,C,w]=s.applyToVertex(y,C,w,e));const O=T-n,M=S-_,E=A-x,I=y-n,R=C-_,P=w-x,L=p*P-R*v,N=v*I-P*m,H=m*R-I*p,D=O*L+M*N+E*H;if(Math.abs(D)<=Number.EPSILON)continue;const F=d-n,B=h-_,V=f-x,z=F*L+B*N+V*H;if(D>0){if(z<0||z>D)continue}else if(z>0||z<D)continue;const U=B*E-M*V,G=V*O-E*F,W=F*M-O*B,k=m*U+p*G+v*W;if(D>0){if(k<0||z+k>D)continue}else if(k>0||z+k<D)continue;const $=(I*U+R*G+P*W)/D;$>=0&&l($,b(O,M,E,I,R,P,g),t,!1)}}(e,t,r,i,o,n,a,s,l);const{data:c,stride:u}=n,d=e[0],h=e[1],f=e[2],m=t[0]-d,p=t[1]-h,v=t[2]-f;for(let e=r,t=3*r;e<i;++e){let r=u*o[t++],i=c[r++],n=c[r++],a=c[r];r=u*o[t++];let _=c[r++],x=c[r++],T=c[r];r=u*o[t++];let S=c[r++],A=c[r++],y=c[r];null!=s&&([i,n,a]=s.applyToVertex(i,n,a,e),[_,x,T]=s.applyToVertex(_,x,T,e),[S,A,y]=s.applyToVertex(S,A,y,e));const C=_-i,w=x-n,O=T-a,M=S-i,E=A-n,I=y-a,R=p*I-E*v,P=v*M-I*m,L=m*E-M*p,N=C*R+w*P+O*L;if(Math.abs(N)<=Number.EPSILON)continue;const H=d-i,D=h-n,F=f-a,B=H*R+D*P+F*L;if(N>0){if(B<0||B>N)continue}else if(B>0||B<N)continue;const V=D*O-w*F,z=F*C-O*H,U=H*w-C*D,G=m*V+p*z+v*U;if(N>0){if(G<0||B+G>N)continue}else if(G>0||B+G<N)continue;const W=(M*V+E*z+I*U)/N;W>=0&&l(W,b(C,w,O,M,E,I,g),e,!1)}}const x=(0,a.c)(),T=(0,a.c)();function b(e,t,r,i,o,a,s){return(0,n.s)(x,e,t,r),(0,n.s)(T,i,o,a),(0,n.f)(s,x,T),(0,n.n)(s,s),s}function S(e,t,r,i,n){let a=(r.screenLength||0)*e.pixelRatio;null!=n&&(a=c(a,i,t,n));const s=a*Math.tan(.5*e.fovY)/(.5*e.fullHeight);return(0,o.uZ)(s*t,r.minWorldLength||0,null!=r.maxWorldLength?r.maxWorldLength:1/0)}function A(e,t){const r=t?A(t):{};for(const t in e){let i=e[t];i&&i.forEach&&(i=C(i)),null==i&&t in r||(r[t]=i)}return r}function y(e,t){let r=!1;for(const o in t){const n=t[o];void 0!==n&&(Array.isArray(n)?null===e[o]?(e[o]=n.slice(),r=!0):(0,i.Vx)(e[o],n)&&(r=!0):e[o]!==n&&(r=!0,e[o]=n))}return r}function C(e){const t=[];return e.forEach((e=>t.push(e))),t}const w={multiply:1,ignore:2,replace:3,tint:4},O=1e3},30560:(e,t,r)=>{function i(e,t,r){for(let i=0;i<r;++i)t[2*i]=e[i],t[2*i+1]=e[i]-t[2*i]}function o(e,t){const r=e.length;for(let i=0;i<r;++i)a[0]=e[i],t[i]=a[0];return t}function n(e,t){const r=e.length;for(let i=0;i<r;++i)a[0]=e[i],a[1]=e[i]-a[0],t[i]=a[1];return t}r.d(t,{GB:()=>n,LF:()=>i,U8:()=>o});const a=new Float32Array(2)},17346:(e,t,r)=>{r.d(t,{BK:()=>d,LZ:()=>u,if:()=>n,jp:()=>z,sm:()=>T,wK:()=>a,zp:()=>c});var i=r(70984),o=r(91907);function n(e,t,r=o.db.ADD,i=[0,0,0,0]){return{srcRgb:e,srcAlpha:e,dstRgb:t,dstAlpha:t,opRgb:r,opAlpha:r,color:{r:i[0],g:i[1],b:i[2],a:i[3]}}}function a(e,t,r,i,n=o.db.ADD,a=o.db.ADD,s=[0,0,0,0]){return{srcRgb:e,srcAlpha:t,dstRgb:r,dstAlpha:i,opRgb:n,opAlpha:a,color:{r:s[0],g:s[1],b:s[2],a:s[3]}}}const s={face:o.LR.BACK,mode:o.Wf.CCW},l={face:o.LR.FRONT,mode:o.Wf.CCW},c=e=>e===i.Vr.Back?s:e===i.Vr.Front?l:null,u={zNear:0,zFar:1},d={r:!0,g:!0,b:!0,a:!0};function h(e){return A.intern(e)}function f(e){return C.intern(e)}function m(e){return O.intern(e)}function p(e){return E.intern(e)}function v(e){return R.intern(e)}function g(e){return L.intern(e)}function _(e){return H.intern(e)}function x(e){return F.intern(e)}function T(e){return V.intern(e)}class b{constructor(e,t){this._makeKey=e,this._makeRef=t,this._interns=new Map}intern(e){if(!e)return null;const t=this._makeKey(e),r=this._interns;return r.has(t)||r.set(t,this._makeRef(e)),r.get(t)??null}}function S(e){return"["+e.join(",")+"]"}const A=new b(y,(e=>({__tag:"Blending",...e})));function y(e){return e?S([e.srcRgb,e.srcAlpha,e.dstRgb,e.dstAlpha,e.opRgb,e.opAlpha,e.color.r,e.color.g,e.color.b,e.color.a]):null}const C=new b(w,(e=>({__tag:"Culling",...e})));function w(e){return e?S([e.face,e.mode]):null}const O=new b(M,(e=>({__tag:"PolygonOffset",...e})));function M(e){return e?S([e.factor,e.units]):null}const E=new b(I,(e=>({__tag:"DepthTest",...e})));function I(e){return e?S([e.func]):null}const R=new b(P,(e=>({__tag:"StencilTest",...e})));function P(e){return e?S([e.function.func,e.function.ref,e.function.mask,e.operation.fail,e.operation.zFail,e.operation.zPass]):null}const L=new b(N,(e=>({__tag:"DepthWrite",...e})));function N(e){return e?S([e.zNear,e.zFar]):null}const H=new b(D,(e=>({__tag:"ColorWrite",...e})));function D(e){return e?S([e.r,e.g,e.b,e.a]):null}const F=new b(B,(e=>({__tag:"StencilWrite",...e})));function B(e){return e?S([e.mask]):null}const V=new b((function(e){return e?S([y(e.blending),w(e.culling),M(e.polygonOffset),I(e.depthTest),P(e.stencilTest),N(e.depthWrite),D(e.colorWrite),B(e.stencilWrite)]):null}),(e=>({blending:h(e.blending),culling:f(e.culling),polygonOffset:m(e.polygonOffset),depthTest:p(e.depthTest),stencilTest:v(e.stencilTest),depthWrite:g(e.depthWrite),colorWrite:_(e.colorWrite),stencilWrite:x(e.stencilWrite)})));class z{constructor(e){this._pipelineInvalid=!0,this._blendingInvalid=!0,this._cullingInvalid=!0,this._polygonOffsetInvalid=!0,this._depthTestInvalid=!0,this._stencilTestInvalid=!0,this._depthWriteInvalid=!0,this._colorWriteInvalid=!0,this._stencilWriteInvalid=!0,this._stateSetters=e}setPipeline(e){(this._pipelineInvalid||e!==this._pipeline)&&(this._setBlending(e.blending),this._setCulling(e.culling),this._setPolygonOffset(e.polygonOffset),this._setDepthTest(e.depthTest),this._setStencilTest(e.stencilTest),this._setDepthWrite(e.depthWrite),this._setColorWrite(e.colorWrite),this._setStencilWrite(e.stencilWrite),this._pipeline=e),this._pipelineInvalid=!1}invalidateBlending(){this._blendingInvalid=!0,this._pipelineInvalid=!0}invalidateCulling(){this._cullingInvalid=!0,this._pipelineInvalid=!0}invalidatePolygonOffset(){this._polygonOffsetInvalid=!0,this._pipelineInvalid=!0}invalidateDepthTest(){this._depthTestInvalid=!0,this._pipelineInvalid=!0}invalidateStencilTest(){this._stencilTestInvalid=!0,this._pipelineInvalid=!0}invalidateDepthWrite(){this._depthWriteInvalid=!0,this._pipelineInvalid=!0}invalidateColorWrite(){this._colorWriteInvalid=!0,this._pipelineInvalid=!0}invalidateStencilWrite(){this._stencilTestInvalid=!0,this._pipelineInvalid=!0}_setBlending(e){this._blending=this._setSubState(e,this._blending,this._blendingInvalid,this._stateSetters.setBlending),this._blendingInvalid=!1}_setCulling(e){this._culling=this._setSubState(e,this._culling,this._cullingInvalid,this._stateSetters.setCulling),this._cullingInvalid=!1}_setPolygonOffset(e){this._polygonOffset=this._setSubState(e,this._polygonOffset,this._polygonOffsetInvalid,this._stateSetters.setPolygonOffset),this._polygonOffsetInvalid=!1}_setDepthTest(e){this._depthTest=this._setSubState(e,this._depthTest,this._depthTestInvalid,this._stateSetters.setDepthTest),this._depthTestInvalid=!1}_setStencilTest(e){this._stencilTest=this._setSubState(e,this._stencilTest,this._stencilTestInvalid,this._stateSetters.setStencilTest),this._stencilTestInvalid=!1}_setDepthWrite(e){this._depthWrite=this._setSubState(e,this._depthWrite,this._depthWriteInvalid,this._stateSetters.setDepthWrite),this._depthWriteInvalid=!1}_setColorWrite(e){this._colorWrite=this._setSubState(e,this._colorWrite,this._colorWriteInvalid,this._stateSetters.setColorWrite),this._colorWriteInvalid=!1}_setStencilWrite(e){this._stencilWrite=this._setSubState(e,this._stencilWrite,this._stencilWriteInvalid,this._stateSetters.setStencilWrite),this._stencilTestInvalid=!1}_setSubState(e,t,r,i){return(r||e!==t)&&(i(e),this._pipelineInvalid=!0),e}}}}]);