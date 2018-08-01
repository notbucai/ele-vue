import ajax from './ajax.js'

//根据经纬度获取地址
export const getAddress = (geohash) => ajax({ url: `http://ele.ncgame.cc:8888/address/${geohash}` });

//获取首页导航
export const getNavigation = (geohash) => ajax({ url: `http://ele.ncgame.cc:8888/navigation/${geohash}` });

//获取商家列表
export const getShoplists = (geohash) => ajax({ url: `http://ele.ncgame.cc:8888/shoplists/${geohash}` });

//登陆 获取cookie

export const login = (data) => ajax({
    url: `http://ele.ncgame.cc:8888/login/`,
    data,
    type:"POST"
});

//获取个人数据
export const getUserData = () => ajax({
    url: `http://ele.ncgame.cc:8888/user_data/`,
});

//获取商家食物列表
export const getShopFoodList = (id) => ajax({
    url: `/api/shopFoodList/${id}`,
});

//获取商家信息/资料
export const getShopInfo = (id) => ajax({
    url: `/api/shopinfo/${id}`,
});

//获取商家评价列表
export const getShopEvaluate = (id) => ajax({
    url: `/api/shopevaluate/${id}`,
});

//获取购物车
export const getShoppingCart = (id) => ajax({
    url: `/api/shoppingCart/${id}`,
});
//购物车


/**
 * 
    //商家食物列表
    shopFoodList: {},
    //商家信息/资料
    shopInfo: {},
    //商家评价列表
    shopEvaluate: {},
    //购物车
    shoppingCart: {},
 */