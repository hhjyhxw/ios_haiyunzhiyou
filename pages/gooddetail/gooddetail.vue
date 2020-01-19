<template>
	<view>
		<!-- 头部商品图片 -->
		<image class="goods-img maiwan" src="../../static/image/temp/goods-demo.jpg" ></image>
		
		<!-- 商品信息 -->
		<view class="goods-info">
			<view class="goods-title">{{goods.name}}</view>
			<view class="txt-fav-icon">海韵优选</view>
			<view class="goods-price">
				<view class="price">￥{{goods.marketPrice}}</view>
				<view class="ever">
					<text>原价</text>
					<text class="originprice">￥{{goods.originalPrice}}</text>
					<label class="saleledlabel">已售<text class="saleled">{{goods.freezeStore}}</text></label>
				</view>
			</view>
		</view>
		
		<view class="spileline"><text></text></view>
		
		<view class="goods-menu">
			<view class="goods-menu-item">
				<view class="text1">月销<text class="text2">{{goods.monthSalesCount}}</text></view>
				<view class="text1">库存<text class="text2">{{goods.store-goods.freezeStore}}</text></view>
				<view class="text1">商品产地<text class="text2">{{goods.producingArea}}</text></view>
			</view>
			<view class="goods-menu-item">
				<text class="text2">{{goods.promotionInfo}}</text>
			</view>
			<view class="goods-menu-item">
				<text class="textwarn">提示</text><text class="text2">{{goods.promoteMessage}}</text>
			</view>
			<view class="goods-menu-item">
				<text class="text1">运费</text><text>平台免运费</text>
			</view>
		</view>
		
		<view class="spileline"></view>
		<!--  -->
		<view class="goods-shop">
			<view class="shop">海韵之友-{{supplier.companyName}}</view>
			<view class="dizi">地址：{{supplier.address}}</view>
			<view class="tel">联系电话：<text>{{supplier.contactPhone}}</text></view>
			<view class="tel">营业时间：<text>{{supplier.businessHours}}</text></view>
			<view class="btns">
				<view class="btn-kefu"><text>联系客服</text></view>
				<view class="btn-shop" @click="toShopDetail(supplier.id)"><text>进入店铺</text></view>
			</view>
		</view>
		<view class="spileline"></view>
		
		<!-- 产品介绍 -->
		<view class="goods-detail">
			 <view class="goods-detail-title">产品介绍</view>
			 <rich-text :nodes="nodes"></rich-text>
		</view>
		
		<!-- 底部 -->
		<view class="footer">
			<view class="item total">
				<view class="iconcart"> 
					<label class="count">0</label>
				</view>
			</view>
			<view class="item cart">
				加入购物车
			</view>
			<view class="item buy">
				立即购买
			</view>
		</view>
	</view>
</template>

<script>
	import htmlParser from '@/common/utils/html-parser'
	import imgrouter from '@/common/utils/imgrouter'
	export default {
		data() {
			return {
				nodes:[],
				goods:{
					name:'日常保洁月卡（4次每次3小时）',
					defaultSourceImagePath:'',//商品图片
					marketPrice:2568.00,//市场价
					originalPrice:3000.00,//原价
					monthSalesCount:3,//月销
					store:50,//总库存
					freezeStore:20,//冻结库存
					producingArea:'青藏高原',//产地
					promoteMessage:'每次派1名家政人员工作3小时（100平米内）。办卡仅限同一地址使用',
					promotionInfo:'一张月卡可以使用四次'
					
				},
				supplier:{
					id:1,
					companyName:'’家政服务',
					address:'南宁市西乡塘区北湖南路28号',
					businessHours:'08:00-18:00',
					contactPhone:'15077144027',
					
				}
			}
		},
		onLoad(){
			this.getData();
		},
		methods: {
			//跳转店铺详情页
			toShopDetail(shopId) {
				uni.navigateTo({
					 url: '/pages/shopdetail/shopdetail?shopId='+shopId
				})
			},
			getData(){
				var content='<p><img alt="" src="/upload/image/201609/1d14e75de6834c13a38c8e8ca9e8e0cb.jpg"/></p><p class="MsoNormal" style="text-align: left; text-indent: 28pt;"><strong style="line-height: 1.5; text-indent: 28.1pt;"><span style="color: rgb(238, 51, 238); font-family: 宋体; font-size: 14pt;">★</span></strong><strong style="line-height: 1.5; text-indent: 28.1pt;"><span style="color: rgb(238, 51, 238); font-family: 宋体; font-size: 14pt;">温馨提示：</span></strong></p><p class="MsoNormal" style="text-indent: 28pt; mso-char-indent-count: 2.0;"><span style="font-size: 10px;">1</span><span style="font-family: 宋体; font-size: 10px;">、家政保洁</span><span style="font-size: 10px;">3</span><span style="font-family: 宋体; font-size: 10px;">小时起服务</span><span style="font-size: 10px;"> </span><span style="font-family: 宋体; font-size: 10px;">，服务时间</span><span style="font-size: 10px;">8</span><span style="font-family: 宋体; font-size: 10px;">：</span><span style="font-size: 10px;">00-18</span><span style="font-family: 宋体; font-size: 10px;">：</span><span style="font-size: 10px;">00<!--?xml:namespace prefix="o"--><!--?xml:namespace--></span></p><p class="MsoNormal" style="text-indent: 28pt; mso-char-indent-count: 2.0;"><span style="font-size: 10px;">2</span><span style="font-family: 宋体; font-size: 10px;">、周一至周五建议提前</span><span style="font-size: 10px;">24</span><span style="font-family: 宋体; font-size: 10px;">小时预约，周末建议提前</span><span style="font-size: 10px;">2-3</span><span style="font-family: 宋体; font-size: 10px;">天预约，如需更改服务时间，请提前</span><span style="font-size: 10px;">24</span><span style="font-family: 宋体; font-size: 10px;">小时联系客服进行修改（服务热线</span><span style="font-family: 宋体; font-size: 10px;">：13768806667</span><span style="font-family: 宋体; font-size: 10px;">小何）</span><span style="font-size: 14pt;"></span></p><p class="MsoNormal" style="text-indent: 28pt; mso-char-indent-count: 2.0;"><span style="font-size: 10px;">3</span><span style="font-family: 宋体; font-size: 10px;">、目前东边最远只能到埌东客运站（仙葫经济开发区还不能接受预约，敬请期待）</span><span style="font-size: 14pt;"></span></p><p class="MsoNormal" style="text-indent: 28pt; mso-char-indent-count: 2.0;"><br/></p><p class="MsoNormal" style="text-indent: 28pt; mso-char-indent-count: 2.0;"><span style="font-family: 宋体; font-size: 10px;">4</span><span style="font-family: 宋体; font-size: 10px;">、为保护保洁员的人身安全，高层无保护的外墙玻璃一般不给予保洁，在得到安全保障下尽量保洁</span></p><p class="MsoNormal" style="text-indent: 28pt; mso-char-indent-count: 2.0;"><span style="line-height: 28px; text-indent: 37px; font-family: 宋体; font-size: 10px;">5、办卡仅限同一地址使用</span></p><p><span style="line-height: 1.5;"><span style="color: rgb(238, 51, 238);">&nbsp; &nbsp; &nbsp; &nbsp;</span><span style="color: rgb(238, 51, 238); font-family: 宋体; font-size: 14pt; font-weight: bold;">日常保洁范围</span></span></p><p class="MsoNormal" style="text-indent: 28pt;"><span style="font-family: 宋体; font-size: 10px;">客厅：物品整理、家具表面除尘、沙发表面除尘、地面除尘无死角、垃圾桶清理</span><span style="font-size: 14pt;"></span></p><p class="MsoNormal" style="text-indent: 28pt;"><span style="font-family: 宋体; font-size: 10px;">卧室：家具和房门表面除尘、地面除尘、垃圾桶清理</span><span style="font-size: 14pt;"></span></p><p class="MsoNormal" style="text-indent: 28pt;"><span style="font-family: 宋体; font-size: 10px;">书房：物品整理、书柜和书桌等家具表面除尘、房门和地面除尘</span><span style="font-size: 14pt;"></span></p><p class="MsoNormal" style="text-indent: 28pt;"><span style="font-family: 宋体; font-size: 10px;">卫生间：水龙头和洗手台表面清洁、玻璃镜面去水渍水印、坐便器表面清洁、门和墙面清洁、地面除尘</span><span style="font-size: 14pt;"></span></p><p class="MsoNormal" style="text-indent: 28pt;"><span style="font-family: 宋体; font-size: 10px;">厨房：油烟机、灶台表面清洁、厨房家电家具表面除尘、水池清洗、门、地面除尘</span><span style="font-size: 14pt;"></span></p><p class="MsoNormal" style="text-indent: 28pt;"><span style="font-family: 宋体; font-size: 10px;">内门窗：窗槽和窗框除尘</span><span style="font-size: 14pt;"></span></p><p class="MsoNormal" style="text-indent: 28pt;"><span style="font-family: 宋体; font-size: 10px;">阳台：防盗网表面除尘、地面除尘</span></p><p class="MsoNormal" style="text-indent: 28pt;"><span style="color: rgb(238, 51, 238); text-indent: 0px; font-size: 18px;"><strong>六区清洁</strong></span></p><p class="MsoNormal" style="text-indent: 28pt;"><span style="color: rgb(238, 51, 238); text-indent: 0px; font-size: 18px;"><strong><img alt="" src="/upload/image/201609/b535b61f531b47de9f423ef48ac939f8.jpg"/><br/></strong></span></p><p class="MsoNormal" style="text-indent: 28pt;"><span style="color: rgb(238, 51, 238); text-indent: 0px;"><span style="font-family: 宋体;"><span style="line-height: 28px; font-size: 18px;"><strong>九项服务</strong></span></span></span></p><p class="MsoNormal" style="text-indent: 28pt;"><span style="color: rgb(238, 51, 238); text-indent: 0px;"><span style="font-family: 宋体;"><span style="line-height: 28px; font-size: 18px;"><strong><img alt="" src="/upload/image/201609/05dab74e8579410d88b2ab7561adb167.jpg"/><br/></strong></span></span></span></p><p class="MsoNormal" style="text-indent: 28pt;"><span style="color: rgb(238, 51, 238); text-indent: 0px;"><span style="font-family: 宋体;"><span style="line-height: 28px; font-size: 18px;"><strong>服务标准</strong></span></span></span></p><p class="MsoNormal" style="text-indent: 28pt;"><span style="color: rgb(238, 51, 238); text-indent: 0px;"><span style="font-family: 宋体;"><span style="line-height: 28px; font-size: 18px;"><strong><img alt="" src="/upload/image/201609/d201eef9352e44048302d7f4ed58f225.jpg"/><br/></strong></span></span></span></p><p class="MsoNormal" style="text-indent: 28pt;"><span style="color: rgb(238, 51, 238); text-indent: 0px;"><span style="font-family: 宋体;"><span style="line-height: 28px; font-size: 18px;"><strong>工具装备</strong></span></span></span></p><p class="MsoNormal" style="text-indent: 28pt;"><span style="color: rgb(238, 51, 238); text-indent: 0px;"><span style="font-family: 宋体;"><span style="line-height: 28px; font-size: 18px;"><strong><img alt="" src="/upload/image/201609/4652c1e7056c4182889dbc948876401b.jpg"/><br/></strong></span></span></span></p><p class="MsoNormal" style="text-indent: 28pt;"><span style="color: rgb(238, 51, 238); text-indent: 0px;"><span style="font-family: 宋体;"><span style="line-height: 28px; font-size: 18px;"><strong><img alt="" src="/upload/image/201609/48838ac78ffa4d2ba6b4372045967251.jpg"/><br/></strong></span></span></span></p><p class="MsoNormal" style="text-align: left; text-indent: 0px;"><span style="color: rgb(238, 51, 238); font-family: 宋体;"><span style="line-height: 28px; font-size: 18px;"><strong>&nbsp;服务热线</strong></span></span></p><p class="MsoNormal" style="text-align: left; text-indent: 0px;"><span style="color: rgb(229, 51, 51); font-size: 18px; background-color: rgb(255, 229, 0);">客服电话：</span><span style="color: rgb(229, 51, 51); line-height: 27px; font-family: Tahoma, sans-serif; font-size: 18px; background-color: rgb(255, 229, 0);">13768806667（小何）</span></p><p><span style="color: rgb(229, 51, 51); font-size: 18px; background-color: rgb(255, 229, 0);"> </span></p><p class="1" style="margin: 0cm 0cm 0pt 21pt; text-indent: -21pt;"><br/></p><p><br/></p>';
				// var htmlString = content.replace(/\\/g, "").replace(/<img/g, "<img style=\"display:none;\"");
				//content = content.replace(/(<img [^>]*src=['"]?)(?!https?)(\/[^ '">]+)/g,"http://www.haiyunzy.com");
				content=content.replace(new RegExp(/src=\"/g), `style="display: block;margin: 0 auto;max-width: 100%" src="http://www.haiyunzy.com`)
				this.nodes = htmlParser(content);
				//this.nodes =htmlNodes;
			},
			
			//
	
		}
	}
</script>

<style>
.goods-img {
    position: relative;
	width: 100%;
	height: 18rem;
	 margin: 0 auto;
}
.goods-info{
	background-color: #fff;
	padding: .6rem 1rem 1.6rem 1rem;
	border-top: 1px solid #E2E2E2;
	border-bottom: 1px solid #E2E2E2
}

.goods-info .goods-title{
	    font-size: 0.8rem;
	    color: #333;
	    font-weight: normal;
	    line-height: 0.8rem;
		padding: 7px 0;
}
  .txt-fav-icon{
  	    display: block;
  	    width: 100%;
  	    color: transparent;
  	    background: url(../../static/image/ic_gg_hyjx.png) 0 center no-repeat scroll;
  	    background-size: auto 13px;
  }
  
 .goods-info .goods-price{
	      position: relative;
	      font-family: Arial, 'microsoft yahei';
		  display: flex;
  }
  .goods-price .price {
      color: #E35450;
      font-size: 0.9rem;
  }
  
  .goods-price .ever {
      color: #999;
      font-size: 0.7rem;
      padding-left: 0.5em;
  }
  .goods-price .ever .originprice {
    text-decoration: line-through;
	margin-left: 0.1rem;
  }
  .goods-price .ever .saleledlabel{
	   margin-left: 1rem;
	   font-family: Arial, 'microsoft yahei';
	   color: #333333;
  }
.goods-price .ever  .saleled{
	  margin-left: 0.1rem;
	  font-family: Arial, 'microsoft yahei';
	  color: #333333;
  }
  
  
.maiwan:after {
    content: "商品已经卖光了~";
    position: absolute;
    bottom: 0;
    left: 0;
    display: block;
    width: 100%;
	height: 2rem;
	line-height: 2rem;
	color: #fff;
	font-size: 1rem;
    text-align: center;
    background-color: rgba(0,0,0,0.8);
}
.spileline{
	display: block;
	border-bottom: 8px solid rgb(204, 204, 204);
	width: 1rem;
	width: 100%;
}

.goods-menu{
	/* margin: .7rem 0; */
	padding: 0 1rem;
	background-color: #fff;
	border-top: 1px solid #E2E2E2;
	border-bottom: 1px solid #E2E2E2;
	font-family: Arial, 'microsoft yahei'
}

.goods-menu .goods-menu-item{
	    color: #000;
	    font-size: 0.7rem;
	    border-bottom: 1px solid #E3E3E3;
		display: flex;
		padding: 0.5rem 0.5rem 0.5rem 0.3rem;
}

.goods-menu-item .text1{
	display: inline-block;
	padding-right: 1.3rem;
	color: #85868A;
}
.goods-menu-item .textwarn{
	display: inline-block;
	padding-right: 0.1rem;
	width: 2.1rem;
	color: #85868A;
}
.goods-menu-item .text2{
	display: inline-block;
	padding-left: 0.3rem;
	color: red;
}

 .goods-shop{
	    /* margin: .7rem 0; */
	     padding: 0 1rem;
	     background-color: #fff;
	     border-top: 1px solid #E2E2E2;
	     border-bottom: 1px solid #E2E2E2;
	     font-family: Arial, "microsoft yahei";
		
 }
 .goods-shop .shop{
		 padding: 1.1rem 0 1.1rem 2rem;
		 border-bottom: 1px dashed #E4E4E4;
		 font-size: 0.8rem;
		 color: #333;
		 background: url(../../static/image/btn_dianming.png) 4px 50% no-repeat;
		 background-size: 1.3rem auto;
 }
 .goods-shop .dizi {
     color: #85868A;
     font-size:0.7rem;
     line-height: 1.6;
     padding: 5px 0;
 }
 .goods-shop .tel {
     color: #85868A;
     font-size: 0.7rem;
     line-height: 1.6;
     padding: 5px 0;
 }
.goods-shop .time {
    color: #85868A;
    font-size: 0.7rem;
    line-height: 1.6;
    padding: 5px 0;
}
.goods-shop .btns {
       padding: 1rem 0;
       font-size: 0;
}
	
.goods-shop .btns .btn-kefu{
	    box-sizing: border-box;
	    display: inline-block;
	    width: 48%;
	    text-align: center;
	    padding: 10px;
	    border: 1px solid #E3E3E3;
	    border-radius: 4px;
	    font-size: 0.7rem;
	    color: #717171;
}
.goods-shop .btns .btn-kefu text{
		padding-left: 20px;
		background: url(../../static/image/btn_kefu.png) 0 50% no-repeat;
		background-size: auto 14px;
}
.goods-shop .btns .btn-shop{
		box-sizing: border-box;
		display: inline-block;
		width: 48%;
		text-align: center;
		padding: 10px;
		border: 1px solid #E3E3E3;
		border-radius: 4px;
		font-size: 0.7rem;
		color: #717171;
}

.goods-shop .btns .btn-shop text{
	    padding-left: 20px;
	    background: url(../../static/image/btn_dianpu.png) 0 50% no-repeat;
	    background-size: auto 14px;
}


.goods-detail {
    border-bottom: 1px solid #E2E2E2;
    background-color: #fff;
    padding: 0 1rem;
    color: #666;
	 margin-bottom: 6rem;
}
.goods-detail .goods-detail-title{
	font-size: 0.8rem;
	padding: 1rem 1rem 1rem 0.1rem;
}
.goods-detail img{
	width: 100%;
	height: auto;
	overflow: hidden;
}


.panel{
	    position: fixed;
	    top: 0;
	    left: 0;
	    right: 0;
	    width: 100%;
	    height: 100%;
}


.panel-buy{
	        -webkit-transition: background .25s;
	        transition: background .25s;
	        background-color: transparent;
	        z-index: 0;
	        -webkit-user-select: none;
}
.panel-buy{
	        -webkit-transition: background .25s;
	        transition: background .25s;
	        background-color: transparent;
	        z-index: 0;
	        -webkit-user-select: none;
}
.opened {
    z-index: 20;
    background-color: rgba(0,0,0,0.5);
}

.panel-buy .wrap {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #fff;
    -webkit-transition: -webkit-transform .3s ease;
    transition: transform .3s ease;
    -webkit-transform: translateY(110%);
    -ms-transform: translateY(110%);
    transform: translateY(110%);
}
.panel-buy .wrap .nth {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    margin: 0 1rem;
    padding: 1rem 0;
    border-bottom: 1px solid #DBDBDB;
}
.panel-buy .wrap .btm {
    margin: 0 1rem;
    padding: 1rem 0;
    position: relative;
}
.panel-buy .wrap .btm label {
    display: inline-block;
    width: 50%;
    font-weight: normal;
    font-size: 1.3rem;
    color: #858688;
    line-height: 3rem;
}
.panel-buy .wrap .btm .minus {
    background: url(../../static/image/but_1_minus_light.png) 50% 50% no-repeat;
    background-size: auto 2.8rem;
}
.panel-buy .wrap .btm .goodsNum {
    width: 46px;
    height: 2.6rem;
    border: 1px solid #DBDBDB;
    border-radius: 0;
    padding: 0 6px;
    font-size: 1.3rem;
    vertical-align: bottom;
    text-align: center;
    outline: none;
    -webkit-appearance: none;
}
.panel-buy .wrap .btm .plus {
    display: inline-block;
    height: 2.8rem;
    width: 3rem;
    color: transparent;
    font-size: 1.2rem;
	background: url(../../static/image/but_1_add_light.png) 50% 50% no-repeat;
	background-size: auto 2.8rem;
}
.panel-buy .wrap .btn-buy {
    display: block;
    border: none;
    -webkit-appearance: none;
    height: 4rem;
    line-height: 4rem;
    width: 100%;
    color: #fff;
    font-size: 1.4rem;
    background-color: #E35151;
}
.footer {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 10;
    width: 100%;
    height: 2.8rem;
    line-height: 2.8rem;
    font-size: 0;
}
.footer .item{
	    display: inline-block;
	    width: 33%;
	    font-size: 1rem;
	    color: #fff;
	    text-align: center;
	    float: left;
}
.footer .total{
	background-color: #262626;
	font-family: Arial, 'microsoft yahei';
	font-size: 0;
}

.footer .item .iconcart{
	    vertical-align: top;
	    display: inline-block;
	    font-size: 0.7rem;
	    width: 30%;
	    background: url(../../static/image/title_but_3_gray.png) 70% 50% no-repeat;
	    background-size: 23px auto;
	    position: relative;
}

.footer .iconcart .count{
	    display: block;
	    min-width: 16px;
	    text-align: center;
		margin-left: 1.5rem;
		margin-top: -0.5rem;

}

.footer .cart{
	   background-color: rgb(204, 204, 204);
}

.footer  .buy{
	background-color: rgb(170, 170, 170);
}


</style>
