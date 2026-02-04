precision highp float;

uniform vec2 u_resolution;
uniform vec2 u_center;
uniform float u_zoom;
uniform int u_maxIterations;
uniform int u_paletteMode;

varying vec2 vUv;

// Color palettes
vec3 getColor(float t, int mode) {
    if (mode == 0) {
        // Classic palette
        return vec3(
            0.5 + 0.5 * cos(3.0 + t * 0.15),
            0.5 + 0.5 * cos(3.0 + t * 0.15 + 2.0),
            0.5 + 0.5 * cos(3.0 + t * 0.15 + 4.0)
        );
    } else if (mode == 1) {
        // Neon palette
        float r = 0.5 + 0.5 * sin(t * 0.1);
        float g = 0.5 + 0.5 * sin(t * 0.1 + 2.0);
        float b = 0.5 + 0.5 * sin(t * 0.1 + 4.0);
        return vec3(r * r, g * g, b * b) * 2.0;
    } else {
        // Grayscale palette
        float intensity = t / float(u_maxIterations);
        return vec3(intensity);
    }
}

void main() {
    // Convert screen coordinates to complex plane
    vec2 c = (vUv - 0.5) * 4.0 / u_zoom + u_center;
    
    vec2 z = vec2(0.0);
    float iterations = 0.0;
    
    // Mandelbrot iteration
    for (int i = 0; i < 2000; i++) {
        if (i >= u_maxIterations) break;
        
        if (dot(z, z) > 4.0) {
            // Smooth coloring using fractional iteration
            iterations = float(i) + 1.0 - log2(log2(dot(z, z)));
            break;
        }
        
        z = vec2(z.x * z.x - z.y * z.y, 2.0 * z.x * z.y) + c;
        iterations = float(i + 1);
    }
    
    // Color based on iteration count
    if (iterations >= float(u_maxIterations)) {
        gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0); // Inside set = black
    } else {
        vec3 color = getColor(iterations, u_paletteMode);
        gl_FragColor = vec4(color, 1.0);
    }
}