//引入核心模块 http 
const http = require("http");

//使用nodejs搭建服务器
const server = http.createServer((req,res)=>
{ //request   response
	//req :一个对象 表示客户端请求的参数  该参数会存储一些关于客户端的数据信息（属性  方法）
	//res ：一个对象  表示服务器相应参数  该参数会存储一些关系服务器的数据信息（属性 方法）
	//指定编码
	res.writeHead(200 , { "content-type":"text/html;charset=utf8" } );
	//服务器相应客户端的请求
	/*res.write( "hello nodejs 哈哈" );
	res.write( "一个优秀的 程序员" );*/
	//结束相应
	res.end( "一个优秀的 程序员就是走在单行线上都向两边看的人" );
})
//执行客户端请求时的端口号
server.listen(8000);

//如何启动node服务器 ：运行　node nodeServer.js
