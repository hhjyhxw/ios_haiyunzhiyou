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

//附近小店
export const shoplist = (data) => {return http.get('/supplier!storelist.action', data)};

//点击首页分类 获取店铺及对应店铺商品
export const goodtypelist = (data) => {return http.get('/supplier!goodslist.action', data)};

//店铺主信息/店铺广告/店铺商品分类
export const shopdetail = (data) => {return http.get('/supplier!shopdetail.action', data)};

//点击分类 获取对应分类商品
export const goodslistBySidAndCatoid = (data) => {return http.get('/supplier!goodslistBySidAndCatoid.action', data)};


//###################首页广告列表######
export const getAdsList = () => { return http.post('/ads!getAdvertisementList.action')};


//###################购物车#####
//购物车列表
export const cartItemList = () => { return http.get('/cartitem!cartItemList.action')};
//校验库存
export const checkStore = (data) => { return http.get('/cartitem!checkStore.action',data)};
//清空构成车
export const deleteCarItems = (data) => { return http.get('/cartitem!deleteCarItems.action',data)};
//减少构成车
export const ajaxMinuses = (data) => { return http.get('/cartitem!ajaxMinuses.action',data)};
//添加购物车
export const ajaxAdd = (data) => { return http.get('/cartitem!ajaxAdd.action',data)};
//修改购物车文本框
export const updatecarItem = (data) => { return http.get('/cartitem!updatecarItem.action',data)};

//########################### 小程序支付接口 ##################################
// 支付
export const toPay = (data) => { return http.post('/pay/pay', data)};


export default {
	login,
	register,
	getAdsList,
	perfectgoods,
	gooddetail,
	shoplist,
	goodtypelist,
	shopdetail,
	goodslistBySidAndCatoid,
	cartItemList,
	checkStore,
	deleteCarItems,
	ajaxMinuses,
	ajaxAdd,
	updatecarItem,
	toPay,
	getUserIno

}
