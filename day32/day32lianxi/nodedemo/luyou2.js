const http=require("http");//用于搭建服务器
const fs=require("fs")//文件操作模板，文件读取
let result="";
http.createServer((req,res)=>
{
	res.writeHead(200 , { "content-type":"text/html;charset=utf8" } );
	//根据不同的请求路径 获取不同的页面
	//获取用户输入的路径
	let urlStr=req.url;
	if(urlStr=="/")
	{    
		//将文件index.html中数据通过fs模块中的readFileSync()方法读取出来
		result = fs.readFileSync( "html/index.html","utf-8" );
		//console.log( result );
		//将读取的文件数据 响应 到客户端上
		console.log(result);
		res.end( result );
	}
	else if( urlStr === "/login" ){
		//将文件index.html中的数据通过fs模块中的readFileSync()方法读出来
		result = fs.readFileSync( "html/login.html","utf-8" );
		res.end( result );
	}else if( urlStr === "/register" ){
		res.end("您当前访问的是注册页面");
	}else{
		res.end("404");
	}
	
}).listen(8000)
