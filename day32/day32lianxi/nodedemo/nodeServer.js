//引入核心模块http
const http=require("http");
//使用node.js搭建服务器
const server=http.createServer((req,res)=>
{
   res.writeHead(200 , { "content-type":"text/html;charset=utf8" } );
   //服务器响应客户端的额请求
   res.end("11222我的第一个nowwwde.js");	
})

//执行客户端请求时的端口号
server.listen(8000);

//启动node服务器
