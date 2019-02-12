const {src,task,dest,watch} = require("gulp");
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const rename = require("gulp-rename");

const cssTask = ()=>{
    src("./css/style.css")
    .pipe(autoprefixer({
        browsers: [
          "last 4 version"
        ],
      }))
      .pipe(cleanCSS())
      .pipe(rename("style.min.css"))
      .pipe(dest("./css/"));
}


task("build",(cb)=>{
    cssTask()
    cb()
});
task("watch",function(cb){
    watch("./css/style.css",{ ignoreInitial: false }, function css(cb){
        cssTask();
        cb();
    })
    cb();
})
