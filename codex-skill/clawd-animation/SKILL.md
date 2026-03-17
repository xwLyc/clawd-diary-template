---
name: clawd-animation
description: Generate and update pixel-art Clawd diary scenes for the GitHub Pages template. Use when asked to create or modify daily animation scenes (HTML/CSS/JS), enforce pixel-grid constraints, reuse the Clawd sprite, or wire a post to a scene in this repo.
---

# Clawd Animation

## Overview
Create a daily pixel-art scene that matches the diary text, while keeping the template’s layout and Clawd character consistent.

## Workflow
1. Read the request and identify the **scene slug** (e.g. `rain-umbrella`) and target date.
2. Ensure these files exist (create if missing):
   - `_includes/scenes/<scene>.html`
   - `assets/scenes/<scene>/scene.css`
   - `assets/scenes/<scene>/scene.js` (optional if CSS-only)
3. Update or create the diary post in `_posts/` and set `scene: <scene>` in front matter.
4. Implement the scene using the pixel-grid constraints and Clawd rules (see `references/spec.md`).
5. Keep all new visuals inside the `.scene-stage` container; do **not** change base layout or diary mask styling.

## Hard Constraints
- **Pixel grid**: Every size and position must be an integer multiple of `--px`.
- **Clawd shape**: Always use `assets/sprites/clawd.svg` as the base sprite. You may add accessories (e.g. umbrella) but do not recolor or redraw the body.
- **Stage alignment**: Main animation anchored to the bottom center of `.scene-stage`.
- **Isolation**: Scene-specific styles must live in `assets/scenes/<scene>/scene.css`. Avoid editing `assets/css/base.css` unless explicitly requested.

## Implementation Notes
- Use the template scene as a starting point: `_includes/scenes/template.html` and `assets/scenes/template/scene.css`.
- Prefer CSS animations; add JS only when needed (randomization, timing, physics).
- Use `image-rendering: pixelated` and `shape-rendering: crispEdges` for all pixel elements.
- Keep the diary text readable; never reduce the diary mask opacity below the template defaults.

## Example Requests
- “文案：今天的心情很糟糕。动画：下雨了，Clawd 造型打伞慢慢走过。”
- “文案：考试结束很轻松。动画：Clawd 在草地上转圈。”

## References
- `references/spec.md` (pixel grid, palette, file layout)
