/*
 task() 布置任务 
 三个参数 ：
 	第一个参数 ：任务名称
 	第二个参数　：数组　任务依赖的其它任务　　
 	第三个参数　：　回调函数
 
 src() 获取源文件的路径  
 用法 ： 
 	src( "路径" ) 或者  src( ["","","",...] )
 	
 dest()  设置文件的目标路径   自动创建目录
 pipe() 管道方法    表示 下一步     
 
 watch() 自动监听某个任务
 两个参数 ：
 	第一个参数 ： 文件路径 
 	第二个参数 ： 任务名称
 */
//引入gulp模块
const gulp = require( "gulp" );

//插件的引入
const concat = require( "gulp-concat" );//合并文件
const cssmin = require( "gulp-cssmin" );//压缩css文件
const imgmin = require( "gulp-imagemin" );//压缩图片
const uglify = require( "gulp-uglify" );//压缩js文件
const sass = require( "gulp-sass" );//将scss文件转成css文件
const rename = require( "gulp-rename" );//重命名文件


//压缩图片
gulp.task( "imgmin", function(){
	return gulp.src( "src/img/*.jpg" )
	           .pipe( imgmin() )
	           .pipe( gulp.dest( "dist/img" ) );
} )
//将src中js目录下的js文件压缩  并重命名
gulp.task( "uglify" , function(){
	return gulp.src( "src/js/sport5.js" )
	           .pipe( uglify() )
	           .pipe( rename("sport.min.js") )
	           .pipe( gulp.dest( "src/js" ) )
} )	

//将  src中css下的style.css压缩
gulp.task( "cssmin" , function(){
	return gulp.src( "src/css/style.css" )
	           .pipe( cssmin() )
	           .pipe( rename( "style.min.css" ) )
	           .pipe( gulp.dest( "src/css" ) )
} )		

//布置任务  将src中css下的scss文件转成css文件  放到当前的目录下  命名style.css  
gulp.task( "sass" , function(){
	return gulp.src( "src/css/index.scss" )
	           .pipe( sass() )
	           .pipe( rename("style.css") )
	           .pipe( gulp.dest( "src/css" ) )
} )	


//布置任务  监听src目录下的html目录中index.html内容的改变  如果发生变量  监听 copyHtml 任务 ， 重新将该html文件赋值到dist的html目录下
gulp.task( "watch" , function(){
	return gulp.watch( "src/html/index.html" , ["copyHtml"] );
} )

//将src下的all目录中的所有内容复制到dist目录下面的all目录中    除了 html文件
gulp.task( "copyAll" , function(){
	return gulp.src( [ "src/all/*" , "!src/all/*.html" ] )
		       .pipe( gulp.dest( "dist/all" ) );
} )

//布置任务  将src中css目录下的所有css文件  和 html下的所有css文件 复制到dist的css目录下
gulp.task( "copyCss" , function(){
	return gulp.src( ["src/css/*.css","src/html/*.css"] )
			   .pipe( gulp.dest( "dist/css" ) );
} )

//布置任务  将src中html目录下的index.html文件复制到 dist目录下的html目录中
gulp.task( "copyHtml" , function(){
	return gulp.src( "src/html/index.html" )
			   .pipe( gulp.dest( "dist/html" ) );
} )

//布置默认任务  .
gulp.task( "default" , function(){
	console.log( "执行default任务" );
} )

//布置say任务
gulp.task( "say",["dance","default"],function(){
	console.log( "执行say任务" );
} )

//布置dance任务
gulp.task( "dance",function(){
	console.log( "执行dance任务" );
} )


