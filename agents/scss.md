# SCSS Guidelines

When coding SCSS:

## You must follow those rules:

1. Use scss and scss-module for styling, don't use original css.
2. Import with `@/xxx` aliases, don't use relative path or any other aliases.
3. Use named import, don't use default import.
4. Do add the `.module.scss` extension when `import`.
5. Remove empty rules and comments that serve no purpose.
6. Keep code clean and concise without redundant declarations.
7. Use meaningful class names that describe the component's purpose.
8. Follow BEM methodology for complex component styling when appropriate.

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

## File organization:

1. One component per SCSS module file.
2. Group related styles together.
3. Use variables for colors, spacing, and other reusable values.
4. Keep selectors shallow and specific.
5. Avoid deep nesting unless necessary for specificity.
