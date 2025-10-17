# React Guidelines

When coding React:

## You must follow those rules:

1. Use functional components, don't use class components.
2. Don't add name for default exported components.
3. Don't use global `React` namespace, import from `"react"` package.
4. React compiler is enabled, don't use `memo` unless you have to.
5. Use scss-module for styling, don't use any other css frameworks.
6. Don't write non-ui export functions in `tsx` files.

## You must follow those scss module-rules:

1. Import with `@/xxx` aliases, don't use relative path or any other aliases.
2. Use named import, don't use default import.
3. Do add the `.module.scss` extension when `import`.
4. Use the `classes` function to add multiple classes.

## Code style examples as guidelines:

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
