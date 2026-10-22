# wp-design-tokens — Agent Instructions

## README sync

Whenever `css/theme.css`, `css/typography.css`, or `css/utility.css` is changed — tokens added, removed, or renamed — update `README.md` to match:

- New token → add a row to the relevant table in the **Design Tokens** section.
- Removed token → remove its row.
- Renamed token → update the row in place.
- New utility class → add it to the **Utility classes** list under **Usage**.
- New composite typography class → add it to the **Typography classes** list under **Usage**.

Exception: font-size primitives (`--var-font-size-sans-*`, `--var-font-size-serif-*`) get no table rows. They only back the semantic font-size tokens and are covered by one sentence in the **Font Sizes** section.

## Integrity rules

After any change to `css/*.css`, verify:

1. `:root` ↔ `@theme inline` parity — every `--var-*` that belongs in the Tailwind theme has a corresponding `@theme inline` entry, and every `var(--var-*)` reference in `@theme inline` resolves to a property that exists in `:root`. Exceptions that are intentional: `--var-baseline-size` (utility-only), `--spacing-0`/`--spacing-px` (convenience constants with no `--var-` backing), `--default-transition-*` (Tailwind defaults, hardcoded), `--var-font-size-sans-*`/`--var-font-size-serif-*` (internal primitives, consumed only by semantic font-size tokens).
2. Tailwind v4 syntax — all directives (`@theme inline`, `@utility`, `--value()`, `--modifier()`) must be valid for the version declared in `peerDependencies`.
3. README file – is up-to-date with `css/*.css`.
