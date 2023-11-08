// @ts-check
import { defineConfig } from "agrippa";

export default defineConfig({
  options: {
    baseDir: "src/components",
    styling: "scss",
    styleFileOptions: {
      module: true,
    },
  },
});
