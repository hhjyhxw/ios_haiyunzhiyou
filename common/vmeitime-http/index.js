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


// 模拟登录
//export const testLogin = (data) => {return http.post('/user/test/login', data)};


//########################### 小程序登录接口 ##################################




export const login = (data) => {return http.get('/appLogin!login.action', data)};

export const register = (data) => {return http.get('/appLogin!register.action', data)};

//########################### 小程序支付接口 ##################################

// 支付
export const toPay = (data) => { return http.post('/pay/pay', data)};


//###################广告列表######
export const getAdsList = () => { return http.post('/ads!getAdvertisementList.action')};


export default {
	login,
	register,
	getAdsList,
	toPay,
	getUserIno

}
