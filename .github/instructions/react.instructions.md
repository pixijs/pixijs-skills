---
applyTo: ["**/*.tsx", "**/*.jsx", "**/components/**"]
---

# PixiJS in React — path-specific instructions

When writing or suggesting PixiJS code in React/JSX/TSX files:

- Use `@pixi/react` for declarative PixiJS in React. It provides `<Application>`, `<Container>`, `<Sprite>`, `<Graphics>`, `<Text>` and other components that map to PixiJS objects.
- Initialize the Application using the `<Application>` component. Pass props like `width`, `height`, `background` directly.
- Use `useApp()` hook to access the Application instance from child components.
- For the Graphics component, pass a `draw` callback: `<Graphics draw={(g) => { g.rect(0, 0, 100, 100).fill('red'); }} />`. The callback receives the Graphics instance.
- Use `useTick(callback)` hook for animation loops instead of directly accessing `app.ticker`.
- Clean up PixiJS resources on unmount. Remove textures and destroy objects that won't be reused.
- For complex scenes, create custom components that wrap PixiJS objects and manage their lifecycle with useEffect.
- Load assets outside of render using `Assets.load()` in a useEffect or with a loading state pattern; do not load assets synchronously in render.
