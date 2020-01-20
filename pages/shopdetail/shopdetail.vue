<template>
	<view>
		<!-- 头部 -->
		<form class="search fixed header">
			<input placeholder="搜索店内商品" class="search-input" placeholder-class="search_placeholder"/>
			<view class="shop-code"></view>
		</form>
		
		<!-- 广告列表-->
		<view class="adlist">
				<uni-swiper-dot :info="info" :current="current" field="content" :mode="mode" class="uni-swiper-dot_class">
				    <swiper class="swiper-box" @change="change">
				        <swiper-item v-for="(item ,index) in info" :key="index">
				            <view class="swiper-item">
								<image :src="item.imgurl"></image>
				            </view>
				        </swiper-item>
				    </swiper>
				</uni-swiper-dot>
		</view>
		
		<!-- 店铺信息 -->
		 <view class="shop-info">
		       <view class="shop-bd">
				   <image class="shop-icon" src="../../static/image/ic_sy_xxsg.png"></image>
					<view class="bd">
						<view class="shop_name">{{supplier.companyName}}</view>
						 <view>
								<view class="shop_busnesstime">{{supplier.businessHours}}</view>
								<view class="shop_tel">{{supplier.contactPhone}}</view>
						</view>
					 </view>
			   </view>
			    <view class="share">分享</view>
		 </view>
		
		<!-- 商品分类 和对应商品列表 -->
		<view class="content">
			<!-- 左边 -->
			<view class="wrapper wrapper-nav">
				<view class="scroller">
					<view class="typeItem" v-for="(item,index) in typeList" :key="index" :class="{'active': item.isAacitve}" @click="chooseType(index)">{{item.name}}
						</view>
				</view>
			</view>
			
			<!-- 右边 -->
			<view class="wrapper wrapper-cont scroll">
				<view class="good-list">
					<view class="norest goodItem" v-for="(item,index) in goodList" :key="index" >
						<image class="good_img" :src="item.defaultSourceImagePath"  @click="toGoodsDetail(item.id)"></image>
						<view class="txt"  @click="toGoodsDetail(item.id)">
							<view class="name">{{item.name}}</view>
							<view class="txt-fav-icon">海韵优选</view>
							<view class="price">
								￥{{item.marketPrice}}
								<text>￥{{item.originalPrice}}</text>
							</view>
						</view>
						<view class="addToCaret"  @click="addToCaret(item.id)">添加到购物车</view>
					</view>
				</view>
			</view>
			
		</view>
		
		<!-- 底部 -->
		<view class="settle show">
			<view class="left">
				<view class="caret-icon"><label >{{cartNum}}</label></view>
				<view class="total-money"></view>
			</view>
			<view class="right" @click="toCart">去结算</view>
		</view>
	</view>
</template>

<script>
	import uniSwiperDot from "@/components/uni-swiper-dot/uni-swiper-dot.vue"
	export default {
		components: {
			uniSwiperDot
		},
		data() {
			return {
				info: [{
					content: '内容 A',
					imgurl:'../../static/image/temp/banner_hyyx.png'
				}, {
					content: '内容 B',
					imgurl:'../../static/image/temp/banner1.png'
				}, {
					content: '内容 C',
					imgurl:'../../static/image/temp/banner_hyyx.png'
				}],
				current: 0,//广告列表属性
				mode: 'dot',//广告列表属性
				supplier:{
					companyName:'家政服务',
					businessHours:'09:00-18:00',
					contactPhone:'15077144027'
				},
				typeList:[
					{
						id:1,
						name:'热门促销',
						isAacitve:true,
					},
					{
						id:2,
						name:'酒水饮料',
						isAacitve:false,
					},
					{
						id:3,
						name:'生鲜肉类',
						isAacitve:false,
					},
				],//分类列表
				goodList:[//商品列表
					{
						defaultSourceImagePath:'../../static/image/temp/good-demo.png',
						name:'耐斯乐波轮洗衣机深度清洗养护（拆洗）',
						marketPrice:265.00,
						originalPrice:305.00
					},
					{
						defaultSourceImagePath:'../../static/image/temp/good-demo.jpg',
						name:'耐斯乐波轮洗衣机深度清洗养护（拆洗）',
						marketPrice:265.00,
						originalPrice:305.00
					},
					{
						defaultSourceImagePath:'../../static/image/temp/goods-demo.png',
						name:'耐斯乐波轮洗衣机深度清洗养护（拆洗）',
						marketPrice:265.00,
						originalPrice:305.00
					},
					{
						defaultSourceImagePath:'../../static/image/temp/goods-demo.png',
						name:'耐斯乐波轮洗衣机深度清洗养护（拆洗）',
						marketPrice:265.00,
						originalPrice:305.00
					},
					{
						defaultSourceImagePath:'../../static/image/temp/goods-demo.png',
						name:'耐斯乐波轮洗衣机深度清洗养护（拆洗）',
						marketPrice:265.00,
						originalPrice:305.00
					},
					{
						defaultSourceImagePath:'../../static/image/temp/goods-demo.png',
						name:'耐斯乐波轮洗衣机深度清洗养护（拆洗）',
						marketPrice:265.00,
						originalPrice:305.00
					},
					{
						defaultSourceImagePath:'../../static/image/temp/goods-demo.png',
						name:'耐斯乐波轮洗衣机深度清洗养护（拆洗）',
						marketPrice:265.00,
						originalPrice:305.00
					},
					{
						defaultSourceImagePath:'../../static/image/temp/goods-demo.png',
						name:'耐斯乐波轮洗衣机深度清洗养护（拆洗）',
						marketPrice:265.00,
						originalPrice:305.00
					},
				],
				cartNum:0,//购物车商品数量
			}
		},
		methods: {
			//滚动图改变
			 change(e) {
				this.current = e.detail.current;
			},
			//选择分类
			chooseType(index){
				this.typeList.forEach((item,i) => {
					if (i==index) {
						item.isAacitve = true;
					}else{
						item.isAacitve = false;
					}
				  })
			},
			//加入购物车
			addToCaret(goodId){
				uni.showLoading({
					 title: '处理中',
					 mask:true
				})
				var that = this;
				setTimeout(function () {
					that.cartNum = that.cartNum +1;
				    uni.hideLoading();
				}, 300);
				
			},
			//跳转商品详情情页
			toGoodsDetail(goodId) {
				uni.navigateTo({
					 url: '/pages/gooddetail/gooddetail?goodId='+goodId
				})
			},
			//跳转购物车
			toCart() {
				uni.redirectTo({
				    url: '/pages/carts/carts'
				});
			},
		}
	}
</script>

<style>
		.header {
		    background-color: #E13F3F;
		    padding: 0 1.6rem;
		    color: #fff;
		    position: relative;
			height: 1.7rem;
			line-height: 1.7rem;
			color: #fff;
			font-size: 0.8rem;
		}
		
		.search {
		    padding: 0.5rem 1.6rem 0.5rem 1.6rem;
		    background-color: #EBEBEB;
		    position: relative;
		    display: -webkit-box;
		    display: -webkit-flex;
		    display: -ms-flexbox;
		    display: flex;
		}
		.search.fixed {
			background-color: #EBEBEB;
			border-bottom: 1px solid #ccc;
			position: relative;
			z-index: 2;
			padding: 0.3rem 3.8rem 0.3rem 1.2rem;
		}
		.search_placeholder{
			font-size: 0.7rem;
		}

		.search .search-input {
		    display: block;
		    width: 100%;
		    /* box-sizing: border-box; */
		    -webkit-box-flex: 1;
		    -webkit-flex: 1;
		    -ms-flex: 1;
		    flex: 1;
		   height: 1.7rem;
		   line-height: 1.7rem;
			padding: 0 1.3rem 0 25px;
		    background: url(../../static/image/ic_sy_search.png) 8px center no-repeat scroll #fff;
		    background-size: 15px 15px;
		    border: 1px solid #CCCCCC;
		    outline: none;
		    border-radius: 5px;
		    font-size: 0.7rem;
			color:#666666
		}
		.search.fixed .shop-code {
			position: absolute;
			right: 0.3rem;
			 top: 0.35rem;
			display: block;
			height: 1.7rem;
			 width: 3rem;
			background: url(../../static/image/ic_dpsy_ewm.png) center center no-repeat;
			background-size: 2rem 2rem;
			   
			   
		}
		/* 广告列表 */
		.adlist{
			height: 100%;
		}
		.adlist image{
			height: 150px;
			width: 100%;
		}
		.uni-swiper-dot_class{
			
		}
		/* 店铺信息 */
		.shop-info {
			display: flex;
		    padding: 0.8rem 0.8rem 0rem 0.8rem;
			position: relative;
			border-bottom: 1px solid lightgray;
		}
		.shop-info .shop-bd {
		    display: -webkit-box;
		    display: -webkit-flex;
		    display: -ms-flexbox;
		    display: flex;
		    padding-bottom: 1rem;
		}
		.shop-icon{
			display: block;
			width: 2.5rem;
			height: 2.5rem;
			border-radius: 100%;
		}
		.bd {
			  -webkit-box-flex: 1;
			  -webkit-flex: 1;
				  -ms-flex: 1;
					  flex: 1;
			  position: relative;
			  padding-left: 1rem;
		   }
		 .bd .shop_name{
			 font-size: 0.8rem;
			 font-weight: 5rem;
			 font-weight: bold;
			    color: #666;
				font-size: 0.8rem;
		 }
		 .shop_busnesstime{
		 	   color: #666;
		 	    font-family: Arial, 'microsoft yahei';
		 	    padding-left: 16px;
		 	    background: url(../../static/image/ic_gg_sj.png) 0 50% no-repeat;
		 	    background-size: 12px 12px;
		 		font-size: 0.7rem
		 }
		 .shop_tel{
		 		color: #666;
		 		font-family: Arial, 'microsoft yahei';
		 		font-size: 0.7rem;
				padding-left: 16px;
				background: url(../../static/image/ic_gg_dh.png) 0 50% no-repeat;
				background-size: 12px 12px;
				margin-left: 1rem;
		 }
		 .shop-info .share {
			 position: absolute;
			 display: block;
			 width: 4rem;
			 height: 4rem;
			 right: 1rem;
			 top: 1rem;
			 color: transparent;
			 background: url(../../static/image/ic_gg_fx.png) 100% 0 no-repeat;
			 background-size: 1.5rem auto;
		}
		
		.content{
			height: 583px;
			margin-bottom: 5rem;
		}
		.content .wrapper-nav {
		      position: static;
		      float: left;
		      width: 28.125%;
		      height: 100%;
		      background-color: #f8f8f8;
		      overflow: auto;
		      -webkit-overflow-scrolling: touch; }
		      .content .wrapper-nav .scroller {
		        height: 100%;
		        padding-bottom: 4rem;
		        box-sizing: border-box; }
		      
		      .content .wrapper-nav .typeItem {
			   font-size: 0.7rem;
			   height: 2.1rem;
			   line-height: 2.1rem;
			   text-align: center;
			   border-bottom: 1px solid lightgray;
			   border-left: 2px solid #F8F8F8;
			   box-sizing: border-box;
		        border-left: 2px solid #F8F8F8;
		        box-sizing: border-box; }
				
		      .content .wrapper-nav .active {
		        color: #FB9217;
		        border-left: 2px solid #FB9217;
		        border-right: none; 
				background: white;
				}
				
				
		   .content .wrapper-cont {
		      position: static;
		      float: left;
		      width: 71.875%;
		      height: 100%;
		      box-sizing: border-box;
		      border-left: 1px solid #E5E5E5;
		      overflow: auto;
		      -webkit-overflow-scrolling: touch; }
			  
		  .norest{
			  display: flex;
			  -webkit-box-align: center;
			  -webkit-align-items: center;
			  -ms-flex-align: center;
			  align-items: center;
			  padding: 0.5rem 1rem;
			  border-bottom: 1px solid lightgray;
			  position: relative;
			}
		  
		  .content .wrapper-cont:after {
			content: '';
			display: none;
			height: 4rem;
			text-align: center;
			font-size: 1.1rem;
			color: #333;
			width: 100%;
			background: url(../../static/image/logo_loading_line.gif) 50% 50% no-repeat, url(../../static/image/logo_loading_bg.png) 50% 50% no-repeat;
			background-color: #FFF;
			background-size: 3.2rem 3.2rem, 3.2rem 3.2rem;
			-webkit-transition: .3s;
					transition: .3s; }
		 .content .wrapper-cont .good-list {
			box-sizing: border-box; }
		.content .wrapper-cont.more:after {
		  display: block; }
			
			
			.good_img {
					text-align: center;
					/* margin: auto auto auto auto; */
				   height: 3.5rem;
				   width: 3.5rem;
					display: -webkit-box;
					display: -webkit-flex;
					display: -ms-flexbox;
					display: flex;
					-webkit-box-align: center;
					-webkit-align-items: center;
					-ms-flex-align: center;
					align-items: center;
					overflow: hidden;
					
			}
			
			.norest .good_img:after {
			    position: absolute;
			    bottom: 0;
			    left: 0.7rem;
			    right: 0.7rem;
			    content: "暂无货";
			    font-size: 0.7rem;
			    color: #fff;
			    background-color: rgba(0, 0, 0, 0.5);
			}
			
			.wrapper-cont .good-list  .txt {
			    -webkit-box-flex: 1;
			    -webkit-flex: 1;
			    -ms-flex: 1;
			    flex: 1;
			    padding: 0 0 0 0.2rem;
			    position: relative;
			}
			.txt .name{
					overflow: hidden;
					text-overflow: ellipsis;
					display: -webkit-box;
					-webkit-line-clamp: 2;
					-webkit-box-orient: vertical;
					font-size: 0.7rem;
					color: #555555;
			}
			.wrapper-cont .good-list .txt .txt-fav-icon {
			    display: block;
			    width: 100%;
			    color: transparent;
			    background: url(../../static/image/ic_gg_hyjx.png) 0 center no-repeat scroll;
			    background-size: auto 13px;
			}
				
			.wrapper-cont .good-list .txt .price {
				font-size: 0.8rem;
				font-family: Arial;
				color: #F24335;
			}
			.price text {
			    font-size: 0.7rem;
			    color: #999;
			    padding-left: 0.2rem;
				text-decoration: line-through;
			}
		.addToCaret {
			display: block;
			width: 30px;
			height: 30px;
			text-indent: -9999px;
			position: absolute;
			right: 0.6rem;
			bottom: 0;
			background: url(../../static/image/btn_gg_tj_normal.png) 100% 100% no-repeat scroll;
			background-size: 23px 23px; 
			
			
			margin: 0 0.5rem 0.5rem;
			}
			
		.settle {
			position: fixed;
			z-index: 11;
			bottom: 0;
			left: 0;
			right: 0;
			height: 2.8rem;
			line-height: 2.8rem;
			font-size: 0;
			-webkit-transition: -webkit-transform .3s ease;
			transition: transform .3s ease;
			-webkit-transform: translateY(120%);
			-ms-transform: translateY(120%);
			transform: translateY(120%);
			 background-color: rgba(0,0,0,0.8);
		}
		 .show {
				-webkit-transform: translateY(0);
				-ms-transform: translateY(0);
				/* transform: translateY(0); */
		}
		.settle .left{
			    display: inline-block;
			    width: 74%;
			    padding-left: 7rem;
			    box-sizing: border-box;
			    color: #fff;
			    font-size: 1rem;
			    background-color: rgba(0,0,0,0.8);
			    position: relative;
		}
		.settle .right{
			    display: inline-block;
			    width: 26%;
			    color: #fff;
			    font-size: 0.8rem;
			    text-align: center;
			    background-color: #E13F3F;
		}
		
		.settle .left .caret-icon{
				position: absolute;
			    left: 1.6rem;
			    bottom: -.4rem;
			    display: block;
			    width: 2.7rem;
			    height: 2.7rem;
			    text-align: center;
			    text-indent: 1em;
			    background: url(../../static/image/ic_gg_shop.png) 100% 0 no-repeat;
			    background-size: contain;
		}
		.caret-icon label  {
		    font-size: 0.8rem;
		    font-style: normal;
		    font-family: Arial;
		    padding: 0 0.4em;
		    background-color: #E13F3F;
		    border-radius: 65%/100%;
		}
		.settle .left .total-money{
			
		}
</style>
