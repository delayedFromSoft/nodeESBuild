import { esbuild } from 'esbuild';
import { process } from 'process';
import { builtins } from 'builtin-modules';


const banner =
`/*
THIS IS A GENERATED / BUNDLED FILE BY ESBUILD
to view the source, please visit the github repository containing the TypeScript file for 'oppa01 exercise'
*/
`;


const prod = (process.argv[2] === "production");


const context = await esbuild.context ({
    banner: {
        js: banner,
    },
    entryPoints: ["oppa01.ts"],
    bundle: true,
    external: [
        "electron",
        "@codemirror/autocomplete",
        "@codemirror/collab",
        "@codemirror/commands",
        "@codemirror/language",
        "@codemirror/lint",
        "@codemirror/search",
        "@codemirror/state",
        "@codemirror/view",
        "@lezer/common",
        "@lezer/highlight",
        "@lezer/lr",
        ...builtins],
    format: "cjs",
    target: "es2018",
    logLevel: "info",
    sourcemap: prod ? false : "inline",
    treeShaking: true,
    outfile: "oppa01.js",
    minify: false,
});


if (prod) {
  await context.rebuild ();
  process.exit (0);
} else {
	await context.watch ();
}

