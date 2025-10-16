import { root } from "./common"
import { runWithCssModuleDeclare } from "./declare-css-modules"
await runWithCssModuleDeclare("next build --turbo", { cwd: root })
