import ajax from './ajax.js'

//根据经纬度获取地址
export const getAddress = (geohash) => ajax({ url: `http://192.168.1.3:8888/address/${geohash}` });

//获取首页导航
export const getNavigation = (geohash) => ajax({ url: `http://192.168.1.3:8888/navigation/${geohash}` });

//获取商家列表
export const getShoplists = (geohash) => ajax({ url: `http://192.168.1.3:8888/shoplists/${geohash}` });

//登陆 获取cookie

export const login = (data) => ajax({
    url: `http://192.168.1.3:8888/login/`,
    data,
    type:"POST"
});

//获取个人数据
export const getUserData = () => ajax({
    url: `http://192.168.1.3:8888/user_data/`,
});