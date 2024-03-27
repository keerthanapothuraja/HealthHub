var http=require('http');
var server=http.createServer(function(req,res){
res.writeHead(200,{'Content-Type':'plain/text'});
res.end("hello world");
});server.listen(3000);
console.log("server is running...");