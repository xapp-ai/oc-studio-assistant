import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import external from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import { terser } from "rollup-plugin-terser";
import typescript from "rollup-plugin-typescript2";
import sass from "sass";
import pkg from "./package.json";

const plugins = () => [
  resolve({ preferBuiltins: true, mainFields: ["browser"] }),
  commonjs(),
  typescript(),
  postcss({
    use: {
      sass,
    },
    modules: true,
  }),
  external(),
  terser(),
];

function cjs(fileName) {
  return {
    file: fileName,
    format: "cjs",
    exports: "named",
    sourcemap: true,
  };
}

function es(fileName) {
  return {
    file: fileName,
    format: "es",
    exports: "named",
    sourcemap: true,
  };
}

function iife(fileName) {
  return {
    file: fileName,
    format: "iife",
    exports: "named",
    sourcemap: true,
    name: "XAppChatPasswordMiddleware",
    globals: {
      "@xapp/chat-widget": "XAppChatWidget",
      react: "XAppChatWidget.React",
    },
  };
}

const config = [
  {
    input: "src/index.ts",
    output: [
      cjs(pkg.main),
      es(pkg.module),
      iife(`dist/xapp-assistant-custom-compontents.js`),
    ],
    plugins: plugins(),
  },
];

export default config;
