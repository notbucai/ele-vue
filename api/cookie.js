const http = require('http');
http.createServer((request, response) => {
	
     response.setHeader("set-cookie",["USERID=273943435; Max-Age=31536000; Path=/; HttpOnly" ,"admin=11111; Max-Age=31536000; Path=/; HttpOnly" ]);
    response.writeHead(200, { 
    	"Content-Type": "application/json; charset=UTF-8", 
    	"Access-Control-Allow-Origin": "*" ,
    
    });
    console.log(request.url)
    response.write("111");
    response.end("111");
}).listen(8888);

//set-cookie: USERID=273943435; Domain=.ele.me; Max-Age=31536000; Path=/; HttpOnly
