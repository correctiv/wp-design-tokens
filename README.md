# CORRECTIV Design Tokens

Shared design tokens for CORRECTIV web projects. Provides CSS custom properties and a [Tailwind v4](https://tailwindcss.com/) theme config as a single source of truth.

## Usage

Add to `package.json`:

```json
"wp-design-tokens": "correctiv/wp-design-tokens#<commit-sha>"
```

Import in your CSS entry point:

```css
@import 'wp-design-tokens/theme.css';
```

With a Tailwind prefix:

```css
@import 'wp-design-tokens/theme.css' prefix(tw);
```

## Updating tokens

1. Edit `theme.css` in this repo and commit.
2. Pin the new commit SHA in each consuming repo's `package.json`.
3. Run `npm install` in the consuming repo.
