// Declare as module.
export {}

declare module "react" {
  // Allow custom css variables in React CSS in TSX.
  interface CSSProperties {
    [key: `--${string}`]: string | number
  }
}
