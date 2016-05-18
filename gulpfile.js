var gulp = require('gulp'),
  livereload = require('gulp-livereload'), 
  webserver = require('gulp-webserver');;

gulp.task('webserver', function() {
  gulp.src( './' ) // 服务器目录（./代表根目录）
  .pipe(webserver({ // 运行gulp-webserver
  	port:8888,
    livereload: true, // 启用LiveReload
    open: true // 服务器启动时自动打开网页
  }));
});
  
gulp.task('watch', function () {	// 这里的watch，是自定义的，写成live或者别的也行
  // app/**/*.*的意思是 app文件夹下的 任何文件夹 的 任何文件
  gulp.watch('app/**/*.*');
  //gulp.watch( '*.html', ['html']);
  //gulp.watch( '*.css', ['css']);
  //gulp.watch( '*.js', ['js'])
});

gulp.task('default',['webserver','watch']);