# SCSS Guidelines

When coding SCSS styles:

## You must follow those rules:

1. Use scss and scss-module for styling, don't use original css.
2. Import with `@/xxx` aliases, don't use relative path or any other aliases.
3. Use named import, don't use default import.
4. Do add the `.module.scss` extension when `import`.
5. Use SCSS variables (`$variable`) only for reusable values within same file.
6. Use CSS custom properties (`--variable`) for theme compatibility.
7. Define fallback values directly in `var()` functions.
8. Use SCSS interpolation (`#{$variable}`) for CSS fallback values.
9. Keep CSS custom properties minimal for external control.
10. Don't create SCSS variables for values used only once.
11. Remove empty rules and comments that serve no purpose.
12. Keep code clean and concise without redundant declarations.
13. Use meaningful class names that describe the component's purpose.
14. Follow BEM methodology for complex component styling when appropriate.
15. **MANDATORY**: Always use `@` alias for SCSS module imports to ensure TypeScript type declarations are properly generated and applied.

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

## Code style examples as guidelines:

```scss
// Good: Clear, purposeful styling
.container {
  display: flex;
  height: 100vh;
  width: 100%;
  overflow: hidden;
}

// Good: Meaningful hover states
.button {
  background-color: var(--primary-color, #007bff);

  &:hover {
    background-color: var(--primary-color-hover, #0056b3);
  }
}

// Bad: Empty rule (should be removed)
.emptyRule {
  /* This serves no purpose */
}

// Bad: Redundant comment (should be removed if obvious)
.container {
  display: flex; /* flex layout */
}
```

## When to use each:

- **SCSS variables (`$variable`)**:
  Internal calculations, repeated values within same file.
- **CSS custom properties (`--variable`)**:
  Theme values, external control, dynamic changes.
- **Fallback values**:
  Directly in `var(--variable, fallback)` syntax.

## File organization:

1. One component per SCSS module file.
2. Group related styles together.
3. Use variables for colors, spacing, and other reusable values.
4. Keep selectors shallow and specific.
5. Avoid deep nesting unless necessary for specificity.
