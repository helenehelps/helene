import { root } from "./common"
import { runWithCssModuleDeclare } from "./declare-css-modules"
await runWithCssModuleDeclare("tsc --noEmit", { cwd: root })
