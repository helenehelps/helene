# SCSS Guidelines

When coding SCSS styles:

## You must follow those rules:

1. Use SCSS variables (`$variable`) only for reusable values within same file.
2. Use CSS custom properties (`--variable`) for theme compatibility.
3. Define fallback values directly in `var()` functions.
4. Use SCSS interpolation (`#{$variable}`) for CSS fallback values.
5. Keep CSS custom properties minimal for external control.
6. Don't create SCSS variables for values used only once.

## SCSS variable and CSS custom property examples:

```scss
// SCSS variables for internal reuse
$animation-duration: 3s;
$animation-steps: 30;
$animation-delay: 0s;

// CSS custom properties with fallback values
.component {
  // Good: fallback values defined directly in var()
  animation: typing var(--typewriter-duration, #{$animation-duration})
    steps(var(--typewriter-steps, #{$animation-steps}))
    var(--typewriter-delay, #{$animation-delay});

  // Bad: defining CSS variables just for fallback
  // --typewriter-duration: 3s;
  // animation: typing var(--typewriter-duration);
}

// For theme compatibility
.component {
  color: var(--foreground, #2c2f30);
  background-color: var(--background, white);
}
```

## When to use each:

- **SCSS variables (`$variable`)**:
  Internal calculations, repeated values within same file.
- **CSS custom properties (`--variable`)**:
  Theme values, external control, dynamic changes.
- **Fallback values**:
  Directly in `var(--variable, fallback)` syntax.
