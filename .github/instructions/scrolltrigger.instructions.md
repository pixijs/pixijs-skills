---
applyTo: ["**/*shader*", "**/*render*", "**/*pipe*", "**/*filter*"]
---

# PixiJS Custom Rendering — path-specific instructions

When writing or suggesting custom rendering code for PixiJS v8:

- Register custom pipes and systems via `extensions.add()`. Implement the `RenderPipe` interface for type-specific rendering.
- Shaders use WGSL (WebGPU) or GLSL (WebGL). Use `GlProgram` for WebGL shaders and `GpuProgram` for WebGPU. Provide both for cross-backend support.
- Uniforms use `UniformGroup` with typed values. Common types: 'f32' (float), 'vec2<f32>' (2D vector), 'vec4<f32>' (4D vector / color), 'mat3x3<f32>' (3x3 matrix).
- Custom filters extend `Filter`. Pass shader source and uniforms to the constructor via options object.
- Batch rendering: implement `BatchableMeshElement` or `BatchableGraphicsElement` interfaces for objects that should batch together.
- Use `Texture.WHITE` as a placeholder; never pass null where a texture is expected.
- Destroy GPU resources (programs, textures, buffers) when no longer needed to prevent memory leaks.
