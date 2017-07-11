var  http  =  require('http');  
var  url =	require('url');
var	 router =	require("./router.js")
http.createServer(function  (request,  response)  {  
    response.writeHead(200,  {'Content-Type':  'text/html;  charset=utf-8'});  
    if(request.url!=="/favicon.ico"){  //清除第2此访问  
		var pathname = url.parse(request.url).pathname;
		pathname = pathname.replace(/\//,'');//替换路径掉前面/
		router[pathname](request,response)
    }  
}).listen(8000);  
console.log('Server  running  at  http://127.0.0.1:8000/');  
  
  
function fun1(res){
	 console.log('访问');  
     res.write('hello,world...');  
}
/*  
启动服务  
cmd下执行：  
node  n1_hello.js  
浏览器访问：http://localhost:8000  
*/      