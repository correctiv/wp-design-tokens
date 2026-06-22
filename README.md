# CORRECTIV Design Tokens

Shared design tokens for CORRECTIV web projects. Provides CSS custom properties and a [Tailwind v4](https://tailwindcss.com/) theme config as a single source of truth.

**Table of Contents**

- [Usage](#usage)
  - [Tailwind theme](#tailwind-theme)
  - [Typography classes](#typography-classes)
  - [Utility classes](#utility-classes)
- [Available Design Tokens](#available-design-tokens)
  - [Typography](#typography)
  - [Layout](#layout)
  - [Colors](#colors)
  - [Radius](#radius)
  - [Duration](#duration)
- [Updating Tokens](#updating-tokens)

## Usage

Add to `package.json` devDependencies (you can reference any [Git ref](https://git-scm.com/book/en/v2/Git-Internals-Git-References)):

```json
"wp-design-tokens": "correctiv/wp-design-tokens#<ref>"
```

Import whichever files you need in your CSS entry point after installing the package:

```css
/* CSS custom properties + Tailwind theme */
@import "wp-design-tokens/theme.css";

/* CSS custom properties + Tailwind theme, with a Tailwind prefix */
@import "wp-design-tokens/theme.css" prefix(tw);

/* Composite typography utilities */
@import "wp-design-tokens/typography.css";

/* Custom Tailwind utilities (baseline grid, duration) */
@import "wp-design-tokens/utility.css";
```

### Tailwind theme

`theme.css` wires all design tokens into Tailwind's utility system via `@theme inline`, replacing the entire default Tailwind theme. Every token becomes a utility class — colors, spacing, typography, radius, and duration — with no configuration needed in the consuming project.

```html
<p
  class="tw:font-serif tw:text-article tw:tracking-wider tw:leading-looser tw:text-grey-700"
>
  …
</p>
<div class="tw:bg-emphasis tw:p-m tw:rounded-md">…</div>
```

The full list of available tokens, class names, and values is in [Available Design Tokens](#available-design-tokens).

### Typography classes

`typography.css` provides ready-made composite Tailwind utilities that bundle font-family, size, weight, letter-spacing, and line-height:

- **Text:** `tw:ty-text-article`, `tw:ty-text-s`, `tw:ty-text-m`, `tw:ty-text-l`
- **Headlines:** `tw:ty-headline-xs` … `tw:ty-headline-xxl`
- **Button:** `tw:ty-button`

### Utility classes

`utility.css` registers two custom Tailwind utilities:

- **`baseline-{V}`** / **`baseline-{V}/{M}`** — snaps an element to the 24 px baseline grid. `V` is the target line height in grid lines; optional `M` overrides the push (e.g. `tw:baseline-2/1`).
- **`duration-fast`** / **`duration-slow`** — maps the theme duration tokens to `transition-duration` (Tailwind v4 does not expose these natively via `@theme`).
- **`word-spacing-normal`** — applies `--var-word-spacing-normal` to `word-spacing` (Tailwind v4 has no built-in word-spacing utility).

## Available Design Tokens

All tokens are defined in `css/theme.css`. `--var-*` properties can be used directly in any CSS; Tailwind utility classes are derived from the `@theme inline` block. Note that `--*: initial` resets all Tailwind defaults — only the tokens below are available as utilities.

> Tailwind class names below omit any project-level prefix (e.g. `tw:`). If a prefix is configured, prepend it: `tw:text-article`.

### Typography

#### Fonts

| Token | CSS Custom Property | Tailwind Class | Value                       |
| ----- | ------------------- | -------------- | --------------------------- |
| Serif | `--var-font-serif`  | `font-serif`   | "Merriweather", sans-serif  |
| Sans  | `--var-font-sans`   | `font-sans`    | "Source Sans 3", sans-serif |

#### Font Weights

| Token           | CSS Custom Property          | Tailwind Class  | Value |
| --------------- | ---------------------------- | --------------- | ----- |
| Normal          | `--var-font-weight-normal`   | `font-normal`   | 400   |
| <b>Semibold</b> | `--var-font-weight-semibold` | `font-semibold` | 600   |
| <b>Bold</b>     | `--var-font-weight-bold`     | `font-bold`     | 700   |

#### Font Sizes

Font sizes are responsive; values change at the `48rem` (768 px) breakpoint. A single value means no breakpoint change. `--text-*` tokens are Tailwind font-size utilities; `--headline-*` tokens are CSS variables used via the arbitrary-value shorthand.

| Token                                                    | CSS Custom Property            | Tailwind Class          | Value (mobile / tablet) |
| -------------------------------------------------------- | ------------------------------ | ----------------------- | ----------------------- |
| <span style="font-size:.875rem">Aa</span> Text S         | `--var-font-size-text-s`       | `text-s`                | 14 px / 15 px           |
| <span style="font-size:.9375rem">Aa</span> Text M        | `--var-font-size-text-m`       | `text-m`                | 15 px / 17 px           |
| <span style="font-size:.96875rem">Aa</span> Text Article | `--var-font-size-text-article` | `text-article`          | 15.5 px / 17.5 px       |
| <span style="font-size:1rem">Aa</span> Text Button       | `--var-font-size-text-button`  | `text-button`           | 16 px                   |
| <span style="font-size:1.15625rem">Aa</span> Text L      | `--var-font-size-text-l`       | `text-l`                | 18.5 px / 20 px         |
| <span style="font-size:1.0625rem">Aa</span> Headline XS  | `--var-font-size-headline-xs`  | `text-(--headline-xs)`  | 17 px                   |
| <span style="font-size:1.0625rem">Aa</span> Headline S   | `--var-font-size-headline-s`   | `text-(--headline-s)`   | 17 px / 20 px           |
| <span style="font-size:1.1875rem">Aa</span> Headline M   | `--var-font-size-headline-m`   | `text-(--headline-m)`   | 19 px / 23 px           |
| <span style="font-size:1.4375rem">Aa</span> Headline L   | `--var-font-size-headline-l`   | `text-(--headline-l)`   | 23 px / 30 px           |
| <span style="font-size:1.75rem">Aa</span> Headline XL    | `--var-font-size-headline-xl`  | `text-(--headline-xl)`  | 28 px / 40 px           |
| <span style="font-size:2rem">Aa</span> Headline XXL      | `--var-font-size-headline-xxl` | `text-(--headline-xxl)` | 32 px / 50 px           |

#### Letter Spacing

| Token                                                  | CSS Custom Property            | Tailwind Class     | Value   |
| ------------------------------------------------------ | ------------------------------ | ------------------ | ------- |
| <span style="letter-spacing:-.2px">AaBb</span> Tighter | `--var-letter-spacing-tighter` | `tracking-tighter` | −0.2 px |
| <span style="letter-spacing:-.1px">AaBb</span> Tight   | `--var-letter-spacing-tight`   | `tracking-tight`   | −0.1 px |
| <span style="letter-spacing:0">AaBb</span> Normal      | `--var-letter-spacing-normal`  | `tracking-normal`  | 0 px    |
| <span style="letter-spacing:.1px">AaBb</span> Wide     | `--var-letter-spacing-wide`    | `tracking-wide`    | 0.1 px  |
| <span style="letter-spacing:.2px">AaBb</span> Wider    | `--var-letter-spacing-wider`   | `tracking-wider`   | 0.2 px  |

#### Word Spacing

| Token  | CSS Custom Property         | Tailwind Class          | Value                  |
| ------ | --------------------------- | ----------------------- | ---------------------- |
| Normal | `--var-word-spacing-normal` | `word-spacing-normal`\* | 0.109375 rem (1.75 px) |

\* Requires `utility.css`.

#### Leading (line height)

| Token   | CSS Custom Property     | Tailwind Class    | Value |
| ------- | ----------------------- | ----------------- | ----- |
| Tighter | `--var-leading-tighter` | `leading-tighter` | 1.1   |
| Tight   | `--var-leading-tight`   | `leading-tight`   | 1.2   |
| Snug    | `--var-leading-snug`    | `leading-snug`    | 1.3   |
| Normal  | `--var-leading-normal`  | `leading-normal`  | 1.4   |
| Relaxed | `--var-leading-relaxed` | `leading-relaxed` | 1.45  |
| Loose   | `--var-leading-loose`   | `leading-loose`   | 1.5   |
| Looser  | `--var-leading-looser`  | `leading-looser`  | 1.8   |

---

### Layout

#### Container Widths

| Token             | CSS Custom Property       | Tailwind Class                | Value              |
| ----------------- | ------------------------- | ----------------------------- | ------------------ |
| Container         | `--var-container`         | `max-w-(--container)`         | 62.5 rem (1000 px) |
| Container content | `--var-container-content` | `max-w-(--container-content)` | 38.75 rem (620 px) |

#### Spacing Scale

Tokens are available for all spacing utilities: `p-{name}`, `m-{name}`, `gap-{name}`, `w-{name}`, `h-{name}`, etc. The base unit `--spacing` (`0.125 rem`) drives numeric utilities: `p-4` = 4 × 0.125 rem = 0.5 rem.

| Token                                                                                                                | CSS Custom Property | Tailwind Class | Value            |
| -------------------------------------------------------------------------------------------------------------------- | ------------------- | -------------- | ---------------- |
| <span style="display:inline-block;width:20px;height:2px;background:currentColor;vertical-align:middle"></span> 4XS   | `--var-spacing-4xs` | `p-4xs`        | 0.125 rem (2 px) |
| <span style="display:inline-block;width:20px;height:4px;background:currentColor;vertical-align:middle"></span> 3XS   | `--var-spacing-3xs` | `p-3xs`        | 0.25 rem (4 px)  |
| <span style="display:inline-block;width:20px;height:6px;background:currentColor;vertical-align:middle"></span> 2XS   | `--var-spacing-2xs` | `p-2xs`        | 0.375 rem (6 px) |
| <span style="display:inline-block;width:20px;height:8px;background:currentColor;vertical-align:middle"></span> XS    | `--var-spacing-xs`  | `p-xs`         | 0.5 rem (8 px)   |
| <span style="display:inline-block;width:20px;height:12px;background:currentColor;vertical-align:middle"></span> S    | `--var-spacing-s`   | `p-s`          | 0.75 rem (12 px) |
| <span style="display:inline-block;width:20px;height:16px;background:currentColor;vertical-align:middle"></span> SM   | `--var-spacing-sm`  | `p-sm`         | 1 rem (16 px)    |
| <span style="display:inline-block;width:20px;height:24px;background:currentColor;vertical-align:middle"></span> M    | `--var-spacing-m`   | `p-m`          | 1.5 rem (24 px)  |
| <span style="display:inline-block;width:20px;height:32px;background:currentColor;vertical-align:middle"></span> ML   | `--var-spacing-ml`  | `p-ml`         | 2 rem (32 px)    |
| <span style="display:inline-block;width:20px;height:36px;background:currentColor;vertical-align:middle"></span> L    | `--var-spacing-l`   | `p-l`          | 2.25 rem (36 px) |
| <span style="display:inline-block;width:20px;height:48px;background:currentColor;vertical-align:middle"></span> XL   | `--var-spacing-xl`  | `p-xl`         | 3 rem (48 px)    |
| <span style="display:inline-block;width:20px;height:64px;background:currentColor;vertical-align:middle"></span> 2XL  | `--var-spacing-2xl` | `p-2xl`        | 4 rem (64 px)    |
| <span style="display:inline-block;width:20px;height:96px;background:currentColor;vertical-align:middle"></span> 3XL  | `--var-spacing-3xl` | `p-3xl`        | 6 rem (96 px)    |
| <span style="display:inline-block;width:20px;height:128px;background:currentColor;vertical-align:middle"></span> 4XL | `--var-spacing-4xl` | `p-4xl`        | 8 rem (128 px)   |

---

### Colors

Color tokens are available with any Tailwind color utility prefix: `bg-{name}`, `text-{name}`, `border-{name}`, etc.

| Token                                                                                                                                                                     | CSS Custom Property       | Tailwind Class                        | Value     |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------- | ------------------------------------- | --------- |
| <span style="display:inline-block;width:14px;height:14px;border-radius:2px;background:#ff5064;vertical-align:middle;border:1px solid rgba(0,0,0,.15)"></span> Emphasis    | `--var-color-emphasis`    | `bg-emphasis` · `text-emphasis`       | `#ff5064` |
| <span style="display:inline-block;width:14px;height:14px;border-radius:2px;background:#fde162;vertical-align:middle;border:1px solid rgba(0,0,0,.15)"></span> Alternative | `--var-color-alternative` | `bg-alternative` · `text-alternative` | `#fde162` |
| <span style="display:inline-block;width:14px;height:14px;border-radius:2px;background:#ffffff;vertical-align:middle;border:1px solid rgba(0,0,0,.15)"></span> Grey 100    | `--var-color-grey-100`    | `bg-grey-100` · `text-grey-100`       | `#ffffff` |
| <span style="display:inline-block;width:14px;height:14px;border-radius:2px;background:#f8f8f8;vertical-align:middle;border:1px solid rgba(0,0,0,.15)"></span> Grey 200    | `--var-color-grey-200`    | `bg-grey-200` · `text-grey-200`       | `#f8f8f8` |
| <span style="display:inline-block;width:14px;height:14px;border-radius:2px;background:#f0f0f0;vertical-align:middle;border:1px solid rgba(0,0,0,.15)"></span> Grey 250    | `--var-color-grey-250`    | `bg-grey-250` · `text-grey-250`       | `#f0f0f0` |
| <span style="display:inline-block;width:14px;height:14px;border-radius:2px;background:#e6e6e6;vertical-align:middle;border:1px solid rgba(0,0,0,.15)"></span> Grey 300    | `--var-color-grey-300`    | `bg-grey-300` · `text-grey-300`       | `#e6e6e6` |
| <span style="display:inline-block;width:14px;height:14px;border-radius:2px;background:#cecece;vertical-align:middle;border:1px solid rgba(0,0,0,.15)"></span> Grey 400    | `--var-color-grey-400`    | `bg-grey-400` · `text-grey-400`       | `#cecece` |
| <span style="display:inline-block;width:14px;height:14px;border-radius:2px;background:#b3b3b3;vertical-align:middle;border:1px solid rgba(0,0,0,.15)"></span> Grey 500    | `--var-color-grey-500`    | `bg-grey-500` · `text-grey-500`       | `#b3b3b3` |
| <span style="display:inline-block;width:14px;height:14px;border-radius:2px;background:#707070;vertical-align:middle;border:1px solid rgba(0,0,0,.15)"></span> Grey 600    | `--var-color-grey-600`    | `bg-grey-600` · `text-grey-600`       | `#707070` |
| <span style="display:inline-block;width:14px;height:14px;border-radius:2px;background:#333333;vertical-align:middle;border:1px solid rgba(0,0,0,.15)"></span> Grey 700    | `--var-color-grey-700`    | `bg-grey-700` · `text-grey-700`       | `#333333` |

---

### Radius

| Token                                                                                                                                      | CSS Custom Property | Tailwind Class | Value             |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------- | -------------- | ----------------- |
| <span style="display:inline-block;width:24px;height:24px;border:1px solid currentColor;border-radius:1px;vertical-align:middle"></span> XS | `--var-radius-xs`   | `rounded-xs`   | 0.0625 rem (1 px) |
| <span style="display:inline-block;width:24px;height:24px;border:1px solid currentColor;border-radius:2px;vertical-align:middle"></span> S  | `--var-radius-s`    | `rounded-s`    | 0.125 rem (2 px)  |
| <span style="display:inline-block;width:24px;height:24px;border:1px solid currentColor;border-radius:5px;vertical-align:middle"></span> MD | `--var-radius-md`   | `rounded-md`   | 0.3125 rem (5 px) |

---

### Duration

| Token | CSS Custom Property   | Tailwind Class    | Value |
| ----- | --------------------- | ----------------- | ----- |
| Fast  | `--var-duration-fast` | `duration-fast`\* | 0.2 s |
| Slow  | `--var-duration-slow` | `duration-slow`\* | 0.4 s |

\* Requires `utility.css`.

## Updating Tokens

**Apply changes**

1. Edit the relevant file under `css/`.
2. Update the README to reflect current state.
3. Commit & push your changes (follow [conventional commit](https://www.conventionalcommits.org/en/v1.0.0/) format).

**Publish changes**

1. `git tag -a v0.4.0 -m "v0.4.0 – Summary of changes"` – instead of "v0.4.0" put the actual [semantic version](https://semver.org/) number.
2. Create a release via the [Github Release](https://docs.github.com/en/repositories/releasing-projects-on-github/managing-releases-in-a-repository) feature (using "v0.4.0 – Summary of changes" as the release title).

**Update consuming repos**

1. Pin the new version in `package.json`: `"wp-design-tokens": "correctiv/wp-design-tokens#v0.4.0"`
2. Run `npm install`.
