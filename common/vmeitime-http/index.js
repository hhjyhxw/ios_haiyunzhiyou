import http from './interface'
import config from '@/common/utils/config';

/**
 * 将业务所有接口统一起来便于维护
 * 如果项目很大可以将 url 独立成文件，接口分成不同的模块
 *
 */

//########################### 用户登陆接口 ##################################

// 获取用户信息
export const getUserIno = () => {
	return http.get('/user/user/get', {'accessToken': uni.getStorageSync('accessToken')})
};


//########################### 小程序登录接口 ##################################



//登陆
export const login = (data) => {return http.get('/appLogin!login.action', data)};

//注册
export const register = (data) => {return http.get('/appLogin!register.action', data)};

//优选商品
export const perfectgoods = (data) => {return http.get('/goods!getPerfectGoodsList.action', data)};

//商品详情
export const gooddetail = (data) => {return http.get('/goods!goodDetail.action', data)};



//###################广告列表######
export const getAdsList = () => { return http.post('/ads!getAdvertisementList.action')};

//########################### 小程序支付接口 ##################################
// 支付
export const toPay = (data) => { return http.post('/pay/pay', data)};


export default {
	login,
	register,
	getAdsList,
	perfectgoods,
	gooddetail,
	toPay,
	getUserIno

}
