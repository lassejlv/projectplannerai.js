/// <reference types='bun-types' />
// Script made by @aquapi - https://github.com/bit-js/library/blob/main/build.ts
// Modified by @lassejlv for @ProjectPlannerAI.js
import { existsSync, rmSync } from "fs";
import { $ } from "bun";
import { parseArgs } from "util";

// Generating types
const dir = "./lib";
if (existsSync(dir)) rmSync(dir, { recursive: true });

const { values, positionals } = parseArgs({
  args: Bun.argv,
  options: {
    version: {
      type: "string",
    },
  },
  strict: true,
  allowPositionals: true,
});

// Build source files
Bun.build({
  format: "esm",
  target: "node",
  outdir: "./lib",
  entrypoints: ["./src/index.ts"],
  minify: {
    whitespace: true,
  },
});

await $`bun x tsc`;
