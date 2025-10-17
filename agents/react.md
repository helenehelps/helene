# React Rules

## Rules:

1. Use functional components, not class components.
2. No names for default exported components.
3. Import from `"react"`, not global `React`.
4. React compiler enabled, avoid `memo`.
5. Use scss-module, no other css frameworks.
6. No non-ui exports in `tsx` files.

## SCSS Module Rules:

1. Import with `@/xxx` aliases only.
2. Use named import, not default.
3. Include `.module.scss` extension.
4. Use `classes` function for multiple classes.

## Example:

```tsx
import { ReactNode } from "react"
import classes from "@/classes"
import { container, center } from "@/styles/layout.module.scss"

export function Example() {
  return <div className={classes(container, center)}>xxx</div>
}

export default function ({ children }: { children: ReactNode }) {
  return <div className={classes(container)}>{children}</div>
}
```
