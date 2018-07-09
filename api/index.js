const http = require('http');
const https = require('https');
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
        response.end("");
    }else if(/navigation/.test(request.url)){

        response.write(`[
    {
        "nav_id":0,
        "title":"美食",
        "img_path":"//fuss10.elemecdn.com/7/d8/a867c870b22bc74c87c348b75528djpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/",
        "to":"/"
    },
    {
        "nav_id":1,
        "title":"商店便利",
        "img_path":"//fuss10.elemecdn.com/c/3c/0184f5b3fa72f295fc01864734218jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/",
        "to":"/"
    },
    {
        "nav_id":2,
        "title":"果蔬生鲜",
        "img_path":"//fuss10.elemecdn.com/c/db/d20d49e5029281b9b73db1c5ec6f9jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/",
        "to":"/"
    },
    {
        "nav_id":3,
        "title":"下午茶",
        "img_path":"//fuss10.elemecdn.com/7/a9/77ff360f7d3fde2d459727ad09fcfjpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/",
        "to":"/"
    },
    {
        "nav_id":4,
        "title":"医疗保险",
        "img_path":"//fuss10.elemecdn.com/7/0a/af108e256ebc9f02db599592ae655jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/",
        "to":"/"
    },
    {
        "nav_id":5,
        "title":"大牌5折",
        "img_path":"//fuss10.elemecdn.com/a/7b/b02bd836411c016935d258b300cfejpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/",
        "to":"/"
    },
    {
        "nav_id":6,
        "title":"浪漫鲜花",
        "img_path":"//fuss10.elemecdn.com/3/01/c888acb2c8ba9e0c813f36ec9e90ajpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/",
        "to":"/"
    },
    {
        "nav_id":7,
        "title":"麻辣烫",
        "img_path":"//fuss10.elemecdn.com/e/c7/b7ba9547aa700bd20d0420e1794a8jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/",
        "to":"/"
    },
    {
        "nav_id":8,
        "title":"地方美食",
        "img_path":"//fuss10.elemecdn.com/a/8a/ec21096d528b7cfd23cdd894f01c6jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/",
        "to":"/"
    },
    {
        "nav_id":9,
        "title":"披萨意面",
        "img_path":"//fuss10.elemecdn.com/7/b6/235761e50d391445f021922b71789jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/",
        "to":"/"
    },
    {
        "nav_id":10,
        "title":"地方小吃",
        "img_path":"//fuss10.elemecdn.com/7/d6/6f2631288a44ec177204e05cbcb93jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/",
        "to":"/"
    }
]`);
        setTimeout(()=>{
            response.end("");
        },0);
        
    }else if (/shoplists/.test(request.url)){
        let jsonStr = '';
        https.get('https://h5.ele.me/restapi/shopping/v3/restaurants?latitude=29.712034&longitude=115.992811&offset=0&limit=8&extras[]=activities&extras[]=tags&extra_filters=home&terminal=h5', (res) => {

          res.on('data', (d) => {
            jsonStr+=d;
          });
          res.on('end',()=>{
            // console.log(jsonStr);
            response.write(jsonStr);
            response.end("");
          });
        }).on('error', (e) => {
          console.error(e);
        });
    }

    

}).listen(8888);

/*

[
    {
        "nav_id":0,
        "title":"美食",
        "img_path":"//fuss10.elemecdn.com/7/d8/a867c870b22bc74c87c348b75528djpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/",
        "to":"/"
    },
    {
        "nav_id":1,
        "title":"商店便利",
        "img_path":"//fuss10.elemecdn.com/c/3c/0184f5b3fa72f295fc01864734218jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/",
        "to":"/"
    },
    {
        "nav_id":2,
        "title":"果蔬生鲜",
        "img_path":"//fuss10.elemecdn.com/c/db/d20d49e5029281b9b73db1c5ec6f9jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/",
        "to":"/"
    },
    {
        "nav_id":3,
        "title":"下午茶",
        "img_path":"//fuss10.elemecdn.com/7/a9/77ff360f7d3fde2d459727ad09fcfjpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/",
        "to":"/"
    },
    {
        "nav_id":4,
        "title":"医疗保险",
        "img_path":"//fuss10.elemecdn.com/7/0a/af108e256ebc9f02db599592ae655jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/",
        "to":"/"
    },
    {
        "nav_id":5,
        "title":"大牌5折",
        "img_path":"//fuss10.elemecdn.com/a/7b/b02bd836411c016935d258b300cfejpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/",
        "to":"/"
    },
    {
        "nav_id":6,
        "title":"浪漫鲜花",
        "img_path":"//fuss10.elemecdn.com/3/01/c888acb2c8ba9e0c813f36ec9e90ajpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/",
        "to":"/"
    },
    {
        "nav_id":7,
        "title":"麻辣烫",
        "img_path":"//fuss10.elemecdn.com/e/c7/b7ba9547aa700bd20d0420e1794a8jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/",
        "to":"/"
    },
    {
        "nav_id":8,
        "title":"地方美食",
        "img_path":"//fuss10.elemecdn.com/a/8a/ec21096d528b7cfd23cdd894f01c6jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/",
        "to":"/"
    },
    {
        "nav_id":9,
        "title":"披萨意面",
        "img_path":"//fuss10.elemecdn.com/7/b6/235761e50d391445f021922b71789jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/",
        "to":"/"
    }
]

*/