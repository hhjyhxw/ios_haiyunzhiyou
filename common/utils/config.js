/**
 * 签名参数与后台参数一致
 */
const client = 'mini-program';
const version = '1.0';
const key = '512162086@561kiojdsy';

/**
 *  控制台打印请求和响应日志 debug=true
 */
const debug = false;

/**
 * dev 开发
 * pro 正式
 */
const active = 'pro';

/**
 * 开发服务器地址
 */
const webUrl_dev = 'http://www.haiyunzy.com/newapp';
const apiUrl_dev = 'http://www.haiyunzy.com/newapp';
const loginUrl_dev = 'http://www.haiyunzy.com/newapp';
const hosturl_dev = 'http://www.haiyunzy.com/';
const imghosturl_dev =  'http://res.haiyunzy.com/mall/';

/**
 * 正式服务器地址
 */
const webUrl_pro = 'http://www.haiyunzy.com/newapp';
const apiUrl_pro = 'http://www.haiyunzy.com/newapp';
const loginUrl_pro = 'http://www.haiyunzy.com/newapp';
const hosturl_pro = 'http://www.haiyunzy.com/';
const imghosturl_pro =  'http://res.haiyunzy.com/mall/';


export default {
    client,
    version,
    key,
    debug,
    webUrl: active === 'dev' ? webUrl_dev : webUrl_pro,
    apiUrl: active === 'dev' ? apiUrl_dev : apiUrl_pro,
    loginUrl: active === 'dev' ? loginUrl_dev : loginUrl_pro,
	hosturl: active === 'dev' ? hosturl_dev : hosturl_pro,
	imghosturl: active === 'dev' ? imghosturl_dev : imghosturl_pro,
}
