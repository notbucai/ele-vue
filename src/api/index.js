import ajax from './ajax.js'

//根据经纬度获取地址
export const getAddress = (geohash) => ajax({ url: `http://localhost:8888/address/${geohash}` });