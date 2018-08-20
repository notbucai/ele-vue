// 使用 Mock
import Mock from 'mockjs'
import V2 from './v2.json'
import cart_client from './cart_client.json'
Mock.mock(/\/api\/shopevaluate\/([0-9]+)/, (req, res) => {
    return {
        ...V2.rst
    }
})
Mock.mock(/\/api\/shopinfo\/([0-9]+)/, (req, res) => {
    return {
        ...V2.rst
    }
})
Mock.mock(/\/api\/shopFoodList\/([0-9]+)/, (req, res) => {
    return {
        ...V2.menu
    }
})
Mock.mock(/\/api\/shoppingCart\/([0-9]+)/, (req, res) => {
    return {
        ...cart_client
    }
})
Mock.mock(/\/api\/search/, (req, res) => {
    return Mock.mock({
        "code": 200,
        "remind|1-10": [
            {
                "name|1": [
                    "濂溪区一把铁煲仔饭店",
                    "一冒天下",
                    "绝味鸭脖",
                    "汉堡王",
                    "湘湖人家",
                    "巨饿便当",
                    "向辉蒸菜馆",
                    "鲜美味",
                    "周大虾",
                    "小马哥卤肉饭",
                    "川湘私房菜",
                    "湘鸽",
                    "万象黄黄焖鸡饭"
                ],
                "img_path|1": [
                    "//fuss10.elemecdn.com/4/b7/86d7219514993cc7a53ecbb317086png.png?imageMogr/format/webp/thumbnail/48x/",
                    "//fuss10.elemecdn.com/e/da/c4e5abab06dea4b64d041495a9381png.png?imageMogr/format/webp/thumbnail/48x/",
                    "//fuss10.elemecdn.com/1/23/ab4a56e572fdc9b3f2e664af83393jpeg.jpeg?imageMogr/format/webp/thumbnail/48x/",
                    "//fuss10.elemecdn.com/7/6b/79f591cfd69a6d2a3223c2a11fb93jpeg.jpeg?imageMogr/format/webp/thumbnail/48x/",
                    "//fuss10.elemecdn.com/e/09/be55889376e27551bf4d76acafe5cjpeg.jpeg?imageMogr/format/webp/thumbnail/48x/",
                    "//fuss10.elemecdn.com/7/6f/b09f8b511d85cc008104fe8bc01d3png.png?imageMogr/format/webp/thumbnail/48x/",
                    "//fuss10.elemecdn.com/3/fc/7162cfcfc2bfb32b3bad10041ffdajpeg.jpeg?imageMogr/format/webp/thumbnail/48x/",
                    "//fuss10.elemecdn.com/f/2a/f9b9588bcc11c561b2d269dbc5a6fpng.png?imageMogr/format/webp/thumbnail/48x/",
                    " "
                ],
                "evaluate|1-4.0-10": 0
            }
        ]
    })
})