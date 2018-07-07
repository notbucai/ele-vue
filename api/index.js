const http = require('http');
const fs = require('fs');

http.createServer((request, response) => {
    response.writeHead(200, { "Content-Type": "application/json; charset=UTF-8", "Access-Control-Allow-Origin": "*" });
    console.log(request.url)
    if (/address/.test(request.url)) {
        response.write(`{
            "code": 0,
            "data": {
                "address": "广东省深圳市福田区民田路92号",
                "name": "购物公园,新洲,福华新村",
                "addressComponent": {
                    "city": "深圳市",
                    "direction": "near",
                    "distance": "42",
                    "district": "福田区",
                    "province": "广东省",
                    "street": "民田路",
                    "street_number": "92号"
                }
            }
        }`);
    }

    response.end("");

}).listen(8888);