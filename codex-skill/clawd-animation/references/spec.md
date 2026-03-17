# Clawd Scene Spec

## Pixel Grid
- Base pixel size: use CSS variable `--px` from `assets/css/base.css`.
- All widths, heights, offsets should be integer multiples of `--px`.
- Keep transforms to whole pixels to avoid blur.

## Stage Constraints
- Scene viewport is `.scene-stage` with `--scene-w` and `--scene-h`.
- Anchor main action to the bottom center; use `bottom:` and `left: 50%` + `translateX(-50%)`.
- Keep key elements inside the stage bounds to avoid cropping.

## Clawd Sprite
- Base sprite path: `assets/sprites/clawd.svg` (16x16).
- Do not recolor or redraw the body; accessories can be separate sprites.
- Recommended CSS size:
  - `width: calc(16 * var(--px));`
  - `height: calc(16 * var(--px));`

## File Layout
- HTML: `_includes/scenes/<scene>.html`
- CSS: `assets/scenes/<scene>/scene.css`
- JS: `assets/scenes/<scene>/scene.js` (optional)

## Minimal HTML Skeleton
```html
<div class="scene scene-<scene>">
  <div class="ground"></div>
  <div class="clawd-actor">
    <img class="sprite clawd" src="{{ '/assets/sprites/clawd.svg' | relative_url }}" alt="Clawd" />
  </div>
</div>
```

## Palette (Suggested)
- Night sky: `#1b2335`
- Deep shadow: `#0b101b`
- Accent glow: `#9bd3c9`
- Clawd body: `#d26c5b` (from sprite)
