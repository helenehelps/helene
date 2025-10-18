import { prepareAgents } from "./gen-rules.js"

prepareAgents({
  sourcePattern: "agents/**/*.md",
  targetDirs: [".roo/rules"],
  outputFiles: ["CLAUDE.md", "QWEN.md"],
  showBox: true,
})
