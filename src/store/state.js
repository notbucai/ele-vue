export default {
    //经度
    longitude: "",
    //维度
    latitude: "",
    //地址
    address: {},
    //导航列表
    navigation: [],
    //商家列表
    shoplists: [],
    //用户数据
    userData: {},

    //商家食物列表
    shopFoodList: [
        { id: 123 }
    ],
    //商家信息/资料
    shopInfo: {
        activities: [{
            icon_color: "f07373",
            icon_name: "满减",
            name: "自营销复杂满减活动"
        }]
    },
    //商家评价列表
    shopEvaluate: {},
    //购物车
    shoppingCart: {
        shop_promotion_cell: [{
            add_on_pop_up_tip: "出错"
        }],
        cart: {
            total: 100,
            original_total: 500,
            agent_fee_tip: "出错",
            extra: [

                {
                    name: "出错",
                    id: 0,
                    price: 0
                }


            ],
            group: [
                [
                    {
                        activities: [
                            {
                                max_quantity: 1,
                                price: 1.1,
                                quantity: 1,

                            }
                        ],
                        quantity: 0,
                        name: "菜名",
                        price: 0,
                        id: '1',
                        total_price: 1,
                        sku_id: '1',
                        group_id: '1',
                    }
                ]
            ]
        },
        checkout_button_v2: {
            text: "错误"
        }
    },
    search: [
        // {
        //     name: "test",    //名字
        //     img_path: "",    //图片路径
        //     evaluate: 0.1    //评分
        // }
    ],
}