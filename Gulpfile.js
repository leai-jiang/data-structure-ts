const gulp = require("gulp");
const ts = require("gulp-typescript");
const clean = require("gulp-clean");
const exec = require("child_process").exec;

const tsPro = ts.createProject("./tsconfig.json");

gulp.task("clean", () => {
  return gulp.src(tsPro.config.compilerOptions.outDir)
    .pipe(clean());
});

gulp.task("compile", () => {
  return gulp.src(tsPro.config.include)
    .pipe(tsPro())
    .pipe(gulp.dest(tsPro.config.compilerOptions.outDir));
});

gulp.task("test", () => {
  return exec("mocha -r ts-node/register */*.test.ts", (err, stdout, stderr) => {
    if (err) console.error(err);
    if (stdout) console.log(stdout);
    if (stderr) console.error(stderr);
  })
})

gulp.task("default", gulp.series("clean", "compile", "test", done => done()));
