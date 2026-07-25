#define TRAIL_LENGTH 32

uniform float uTime;
uniform vec2 uResolution;
uniform vec3 uColour[5];
uniform vec2 uTrail[TRAIL_LENGTH];          // cursor path, newest-first, [0,1] y-up
uniform float uTrailStrength[TRAIL_LENGTH]; // per-point fade, 1 = fresh

varying vec2 vUv;

//	Simplex 3D Noise
//	by Ian McEwan, Stefan Gustavson (https://github.com/stegu/webgl-noise)
vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}
vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}

float snoise(vec3 v){
  const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
  const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);
  vec3 i  = floor(v + dot(v, C.yyy) );
  vec3 x0 =   v - i + dot(i, C.xxx) ;
  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min( g.xyz, l.zxy );
  vec3 i2 = max( g.xyz, l.zxy );
  vec3 x1 = x0 - i1 + 1.0 * C.xxx;
  vec3 x2 = x0 - i2 + 2.0 * C.xxx;
  vec3 x3 = x0 - 1. + 3.0 * C.xxx;
  i = mod(i, 289.0 );
  vec4 p = permute( permute( permute(
             i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
           + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))
           + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));
  float n_ = 1.0/7.0;
  vec3  ns = n_ * D.wyz - D.xzx;
  vec4 j = p - 49.0 * floor(p * ns.z *ns.z);
  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_ );
  vec4 x = x_ *ns.x + ns.yyyy;
  vec4 y = y_ *ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);
  vec4 b0 = vec4( x.xy, y.xy );
  vec4 b1 = vec4( x.zw, y.zw );
  vec4 s0 = floor(b0)*2.0 + 1.0;
  vec4 s1 = floor(b1)*2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));
  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;
  vec3 p0 = vec3(a0.xy,h.x);
  vec3 p1 = vec3(a0.zw,h.y);
  vec3 p2 = vec3(a1.xy,h.z);
  vec3 p3 = vec3(a1.zw,h.w);
  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
  p0 *= norm.x;
  p1 *= norm.y;
  p2 *= norm.z;
  p3 *= norm.w;
  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
  m = m * m;
  return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1),
                                dot(p2,x2), dot(p3,x3) ) );
}

// 4-octave fractal noise
float fbm(vec3 p) {
  float v = 0.0;
  float a = 0.55;
  for (int i = 0; i < 4; i++) {
    v += a * snoise(p);
    p *= 2.0;
    a *= 0.5;
  }
  return v;
}

// Domain-warped height field -> the flowing chrome "anomalies".
// Higher SCALE = more, smaller blobs on screen.
const float SCALE = 6.5;

float surf(vec2 p, float t) {
  vec2 sp = p * SCALE;
  float w = fbm(vec3(sp * 1.6, t * 0.6));
  vec2 q = sp + w * 0.6;
  return fbm(vec3(q, t));
}

// Distance from p to segment a-b, plus the closest point on it.
float distToSeg(vec2 p, vec2 a, vec2 b, out vec2 closest) {
  vec2 ab = b - a;
  float h = clamp(dot(p - a, ab) / max(dot(ab, ab), 1e-6), 0.0, 1.0);
  closest = a + ab * h;
  return length(p - closest);
}

void main () {
  vec2 st = gl_FragCoord.xy / uResolution;      // [0,1], y-up
  float aspect = uResolution.x / uResolution.y;
  vec2 sta = vec2(st.x * aspect, st.y);         // aspect-corrected

  float t = uTime * 20.0;

  // --- cursor trail: one continuous carved gap that parts the anomalies ---
  // Distance to the polyline joining consecutive (newest-first) trail points,
  // so the effect is identical whether the cursor moves slow or fast.
  float trailField = 0.0;  // 0..1 proximity to the trail (carves black)
  vec2 push = vec2(0.0);   // shoves anomalies out of the way
  for (int i = 0; i < TRAIL_LENGTH - 1; i++) {
    float sA = uTrailStrength[i];
    float sB = uTrailStrength[i + 1];
    float sMax = max(sA, sB);
    if (sMax <= 0.001) continue;

    vec2 a = vec2(uTrail[i].x * aspect, uTrail[i].y);
    vec2 b = vec2(uTrail[i + 1].x * aspect, uTrail[i + 1].y);
    vec2 closest;
    float d = distToSeg(sta, a, b, closest);

    float infl = smoothstep(0.059, 0.0, d) * sMax;
    trailField = max(trailField, infl);
    // Outward push that VANISHES on the centerline: its magnitude grows with
    // the distance from the line, so the sample displacement stays smooth
    // across the middle (no seam) and is symmetric on both sides.
    float pushMag = smoothstep(0.0, 0.03, d) * infl;
    push += normalize(sta - closest + 1e-5) * pushMag;
  }
  // Clamp so overlapping segments near the cursor don't over-push.
  float pushLen = length(push);
  if (pushLen > 1.5) push *= 1.5 / pushLen;
  trailField = clamp(trailField, 0.0, 1.0);

  // Sample the height field; the push shifts anomalies away from the trail.
  // As the trail fades (uTrailStrength decays) the push relaxes and the
  // anomalies slowly flow back to fill the gap.
  vec2 sp = sta + push * 0.11;
  float base = surf(sp, t);

  // Surface normal from neighbouring samples -> drives gloss & shading.
  float e = 0.004;
  float hx = surf(sp + vec2(e, 0.0), t);
  float hy = surf(sp + vec2(0.0, e), t);
  vec2 grad = vec2(base - hx, base - hy) / e;
  vec3 n = normalize(vec3(grad * 0.35, 1.0));

  // Big organic black gaps (the torn look) + emptiness far from chrome.
  float mask = smoothstep(-0.15, 0.28, fbm(vec3(sp * 0.9, t * 0.4)));

  // Purple base gradient by height.
  float hv = clamp(base * 0.5 + 0.5, 0.0, 1.0);
  vec3 col = mix(uColour[4], uColour[2], smoothstep(0.25, 0.6, hv));
  col = mix(col, uColour[0], smoothstep(0.6, 0.9, hv));

  // Metallic lighting: diffuse + tight white specular + fresnel rim.
  vec3 lightDir = normalize(vec3(0.4, 0.7, 0.65));
  vec3 halfV = normalize(lightDir + vec3(0.0, 0.0, 1.0));
  float diff = clamp(dot(n, lightDir), 0.0, 1.0);
  float spec = pow(clamp(dot(n, halfV), 0.0, 1.0), 32.0);
  float fres = pow(1.0 - clamp(n.z, 0.0, 1.0), 3.0);

  col *= (0.18 + 0.95 * diff);
  col += spec * vec3(1.0) * 1.3;          // white gloss / blisk
  col += fres * uColour[0] * 0.5;         // bright rim

  // Thin black cracks in the crevices.
  float crack = smoothstep(0.34, 0.14, hv);
  col = mix(col, vec3(0.0), crack);

  // Carve out the big black regions.
  col *= mask;

  // Carve the cursor trail to black (the gap the anomalies were pushed out of).
  col *= (1.0 - trailField * 0.96);

  // Barely-there glow only on the rim (peaks mid-way, zero at the black centre
  // and outside) so the middle never lights up into a seam.
  float edge = trailField * (1.0 - trailField);
  vec3 foam = mix(uColour[0], vec3(1.0), 0.4);
  col += edge * foam * 0.12 * mask;

  gl_FragColor = vec4(clamp(col, 0.0, 1.0), 1.0);
}
