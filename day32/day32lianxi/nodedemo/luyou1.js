const http = require("http");
http.createServer( (req,res)=>{
	//指定编码
	res.writeHead(200 , { "content-type":"text/html;charset=utf8" } );
	//根据不同的请求路径 获取不同的页面
	//获取用户输入的路径
	let urlStr = req.url;
	console.log(urlStr);
	if(urlStr==="/")
	{
		res.end("您访问的是主界面")
	}
	else if( urlStr === "/login" )
	{
		res.end("您当前访问的是登录页面");
	}
	else
	{
		res.end("404");
	}	 
} ).listen(8000)
