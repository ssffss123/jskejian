/*
 localhost:8000
 localhost:8000/login
 localhost:8000/register
 * */
const http = require("http");
http.createServer( (req,res)=>{
	//指定编码
	res.writeHead(200 , { "content-type":"text/html;charset=utf8" } );
	//根据不同的请求路径 获取不同的页面
	//获取用户输入的路径
	let urlStr = req.url;
	if( urlStr === "/" ){ //说明访问主页面
		res.end("您当前访问的是主页面");
	}else if( urlStr === "/login" ){
		res.end("您当前访问的是登录页面");
	}else if( urlStr === "/register" ){
		res.end("您当前访问的是注册页面");
	}else{
		res.end("404");
	}
} ).listen(8000)
