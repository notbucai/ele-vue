import ajax from './ajax.js'

//根据经纬度获取地址
export const getAddress = (geohash) => ajax({ url: `http://localhost:8888/address/${geohash}` });

//获取首页导航
export const getNavigation = (geohash) => ajax({ url: `http://localhost:8888/navigation/${geohash}` });

//获取商家列表
