/*
 localhost:8000
 localhost:8000/login
 localhost:8000/register
 * */
const http = require("http"); //用于搭建服务器
const fs = require("fs");//文件操作模块  文件读取
const url = require("url");//解析路由信息
let result = "";
http.createServer( (req,res)=>{
	//指定编码
	res.writeHead(200 , { "content-type":"text/html;charset=utf8" } );
	//根据不同的请求路径 获取不同的页面
	//获取用户输入的路径
	let urlStr = req.url;
	
	let queryStr = url.parse(urlStr,true);//获取网址信息 并解析该网址
	
	let pathname = queryStr.pathname;//取出路径数据
	console.log( queryStr );
	if( queryStr.pathname != "/favicon.ico" ){
		if( pathname === "/" ){ //说明访问主页面
			//将文件index.html中的数据通过fs模块中的readFileSync()方法读出来
			result = fs.readFileSync( "html/index.html","utf-8" );
			//console.log( result );
			//将读取的文件数据 响应 到客户端上
			res.end( result );
		}else if( pathname === "/login" ){
			//将文件index.html中的数据通过fs模块中的readFileSync()方法读出来
			result = fs.readFileSync( "html/login.html","utf-8" );
			result = result.replace( /--name--/  , queryStr.query.name || "who are you?"  );
			console.log( result );
			res.end( result );
		}else if( pathname === "/register" ){
			res.end("您当前访问的是注册页面");
		}else{
			res.end("404");
		}
	}
} ).listen(8000)
