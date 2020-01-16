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
	return http.post('/user/user/get', {'accessToken': uni.getStorageSync('accessToken')})
};


// 模拟登录
//export const testLogin = (data) => {return http.post('/user/test/login', data)};


//########################### 小程序登录接口 ##################################

export const login = (data) => {
	http.config.baseUrl = config.loginUrl;
	var result = http.post('/login/loginDo', data);
	http.config.baseUrl = config.apiUrl;
	return result;
};

//########################### 小程序支付接口 ##################################

// 支付
export const toPay = (data) => { return http.post('/pay/pay', data)};




export default {
	
	toPay,
	getUserIno

}
