uniform float time;
uniform float progress;
uniform vec4 resolution;
varying vec2 vUv;
varying vec3 vColour;
varying vec3 vPosition;

const float PI = 3.1415926535897932384626433832795;

void main () {
    gl_FragColor = vec4(vColour, 1.);
}