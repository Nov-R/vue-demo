import ajax from "./ajax";

/*
包含N个接口请求函数的模块
*/
// 1.获取XXX
export const reqAddress = (geohash) =>ajax(`/position/${geohash}`)
// 2.获取XXX
export const reqFoodTypes = () => ajax('/index_category')
// 3.获取XXX
export const reqShops = (longitude,latitude) => ajax('/index_category',{longitude,latitude})
// 4.根据哟用户名返回用户信息