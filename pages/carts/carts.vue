<template>
	<view>
			<view class="main-container">
				<view class="header">
					<view class="btn-back" @click="backPage"></view>
					<view class="gwc">购物车</view>
					<view class="del-caret"></view>
				</view>
				
				<view class="caret-list" v-for="(item,index) in supplierList" :key="index">
					<view class="shop_header">
						<view class="selectshoplabl"><radio class="selectShop"></radio></view>
						<label class="shop_name">{{item.supplierName}}</label>
						<label class="arr" @click="toShopDetail(item.id)"></label>
					</view>
					<view class="goodsList" v-for="(item2,index2) in item.careItemList" :key="index2">
						<view class="col1">
							<radio class="selectOne"></radio>
						</view>
						<view class="col2">
							<image class="good_img" :src="item2.goodImg"></image>
						</view>
						<view class="col3">
							<view class="goodName">{{item2.pName}}</view>
							<view class="calc">
								<label class="minus">减一</label>
								<input class="goodsNum" value="1" />
								<label class="plus">加一</label>
							</view>
						</view>
						<view class="col4">
							<view class="p1"></view>
							<view class="p2">￥{{item2.price}}</view>
							<view class="del-list">删除</view>
						</view>
					</view>
					<!-- goodsList end -->
				</view>
				<!-- caret-list end -->
			</view>
			<!-- main-container end -->
			
			<!-- 底部 -->
			<view class="footer-count">
				<view class="total">
					<view class="flex">
						<view class="sp1">
							<radio class="selectAll">全选</radio>
						</view>
						<view class="sp2">
							合计:￥<label>0.88</label>
						</view>
					</view>
				</view>
				
				<view class="submit">去结算</view>
			</view>
			
			
	</view>
</template>

<script>
	export default {
		data() {
			return {
				supplierList:[
					{
						id:1,
						supplierName:'旗舰店',
						careItemList:[
							{
								goodsId:1,
								productId:1,
								isMarketable:false,
								pName:'荔枝',
								price:0.88,
								goodImg:'../../static/logo.png'//listImgPath
							},
							{
								goodsId:1,
								productId:1,
								isMarketable:false,
								pName:'第一干锅',
								price:0.89,
								goodImg:'../../static/image/temp/good-demo.jpg'//listImgPath
							},
							
						]
					},
					{
						id:1,
						supplierName:'家政服务',
						careItemList:[
							{
								goodsId:1,
								productId:1,
								isMarketable:false,
								pName:'月卡',
								price:0.88,
								goodImg:'../../static/logo.png'//listImgPath
							},
							{
								goodsId:1,
								productId:1,
								isMarketable:false,
								pName:'年卡',
								price:0.89,
								goodImg:'../../static/image/temp/good-demo.jpg'//listImgPath
							},
							
						]
					}
				],
			}
		},
		onLoad(){
			
		},
		methods: {
			//返回
			backPage() {
				uni.navigateBack({
				    delta: 1
				});
			},
			//跳转店铺详情页
			toShopDetail(shopId) {
				uni.navigateTo({
					 url: '/pages/shopdetail/shopdetail?shopId='+shopId
				})
			},
		}
	}
</script>

<style lang="scss">
	
	.main-container {
	    padding-bottom: 4rem;
	    background-color: #EBEBEB;
	    position: relative;
	    z-index: 1;
	    opacity: 1;
	    -webkit-transition: -webkit-transform .3s ease;
	    transition: transform .3s ease;
	}
	.main-container .header {
	    position: relative;
	    height: 2.5rem;
	    line-height: 2.5rem;
	    background: #ffffff;
	    box-shadow: 0 1px 1px #E2E2E2;
		display: flex;
	}
	
	.btn-back {
	    position: absolute;
	    top: 0;
	    left: 0;
	    width: 2.5rem;
	    height: 2.5rem;
	    background: url(../../static/image/top_but_black.png) 50% 50% no-repeat;
	    background-size: 20px auto;
	    text-indent: -9999px;
	}
	.gwc{
		flex: 1;
		text-align: center;
	}
	.del-caret {
	    position: absolute;
	    top: 0;
	    right: 0;
	    width: 2.5rem;
	    height: 2.5rem;
	    background: url(../../static/image/but_delete.png) 50% 50% no-repeat;
	    background-size: 12px auto;
	    text-indent: -9999px;
	}
	.caret-list {
	    margin: 0.7rem 0;
	    background-color: #fff;
	    border-top: 1px solid #E2E2E2;
	    border-bottom: 1px solid #E2E2E2;
	}
	.shop_header{
		position: relative;
		display: flex;
		border-bottom: 1px solid #E3E3E3;
	}
	.selectshoplabl{
		margin: 0.3rem auto;
		margin-left: 1rem;
	}
	.selectShop{
		
	}
	.col1{
		  display: flex;
		  margin: 0.3rem auto;
		  align-items: center;
		  flex: 1;
		 padding-left: 1rem;
	}
	.col1 .selectOne{
		align-self: left;
	}
	.col2{
		    padding: 1rem 1rem 1rem 0;
		    width: 70px;
			border-bottom: 1px solid #E3E3E3;
			 flex: 1;
	}
	.col3{
		    padding: 20px 10px 20px 0;
		    vertical-align: top;
		    position: relative;
		    width: 110px;
			border-bottom: 1px solid #E3E3E3;
			 flex: 2;
	}
	.col3 .goodName{
		    font-size: 0.7rem;
		    overflow: hidden;
		    text-overflow: ellipsis;
		    display: -webkit-box;
		    -webkit-line-clamp: 2;
		    -webkit-box-orient: vertical;
	}
	.col3 .calc {
	    position: absolute;
	    left: -2px;
	    font-size: 0.7rem;
		bottom: 0.5rem;
	}
	.col3 .calc .minus {
	    background: url(../../static/image/but_1_minus_light.png) 50% 50% no-repeat;
	    background-size: auto 22px;
		display: inline-block;
		height: 1.2rem;
		width: 28px;
		text-indent: -9999px;
	}
	 .col3 .calc .plus {
	   background: url(../../static/image/but_1_add_light.png) 50% 50% no-repeat;
	   background-size: auto 22px;
	   display: inline-block;
	   height: 1.2rem;
	   width: 28px;
	   text-indent: -9999px;
	}
	 .col3 .calc .goodsNum {
	    display: inline-block;
	    vertical-align: top;
	    width: 3rem;
	    height: 1.2rem;
	    font-size: 1.2.7rem;
	    box-sizing: border-box;
	    border-radius: 0;
	    text-align: center;
	    border: 1px solid #DADADA;
	    -webkit-appearance: none;
	}
	.col4 {
	    position: relative;
	    vertical-align: top;
	    padding: 1rem 1rem 1rem 0;
	    text-align: right;
		border-bottom: 1px solid #E3E3E3;
		 flex: 2;
	}
	.col4 .p1 {
	    font-size: 0.6rem;
	    line-height: 1.2rem;
	}
	.col4 .p2 {
	    font-size: 0.6rem;
	    line-height: 1.2rem;
		color: red;
	}
	.col4 .del-list {
	    position: absolute;
	    bottom: -1px;
	    right: 1rem;
	    width: 100%;
	    height: 35px;
	    background: url(../../static/image/but_delete.png) 100% 50% no-repeat;
	    background-size: auto 15px;
	    border-bottom: 1px solid #E3E3E3;
	    color: transparent;
	}
	.shop_name{
		    padding: 10px 10px 10px 0;
		    text-align: left;
		    font-weight: normal;
			flex: 1;
			font-size: 0.8rem;
	}
	.caret-list .arr {
	    background: url(../../static/image/ic_fj_arrow.png) 100% 50% no-repeat;
	    background-size: 5.5px auto;
	    height: 2rem;
	    width: 2rem;
	    display: block;
	    position: absolute;
	    right: 1.6rem;
	    top: 0;
	}
	.goodsList{
		display: flex;
		justify-content: center;
	}
	.good_img{
		width: 2.5rem;
		height: 2.5rem;
	}
	
	.footer-count {
		    position: fixed;
		    bottom: 0;
		    left: 0;
		    right: 0;
		    z-index: 10;
		    height: 2.5rem;
		    line-height: 2.5rem;
		    font-size: 0.7rem;
		    display: flex;
	}
	.footer-count .total {
	    float: left;
	   padding: 0;
	   width: 76%;
	   background-color: rgba(0,0,0,0.8);
	    color: #fff;
	    box-sizing: border-box;
	    background-color: #262626;
	}
	
	 .flex {
	    display: -webkit-box;
	    display: -webkit-flex;
	    display: -ms-flexbox;
	    display: flex;
	    -webkit-box-align: center;
	    -webkit-align-items: center;
	    -ms-flex-align: center;
	    align-items: center;
	}
	.flex .sp1 {
	  /*  position: relative; */
	    display: block;
	    padding: 0 0 0 40px;
	    font-size: 0.7rem;
	    color: #D2D2D2;
	    white-space: nowrap;
		}
		
	.sp1 .checked {
		    background: url(../../static/image/but_gou_light.png) 13px 50% no-repeat transparent;
		    background-size: 18px 18px;
		}
	.flex .sp1 .selectAll {
		position: absolute;
		top: 0;
		left: 1rem;
		right: 0;
		bottom: 0;
		display: block;
		width: 100%;
		height: 100%;
		-webkit-appearance: none;
		/* background: url(../../static/image/but_gou_gray.png) 13px 50% no-repeat transparent; */
		/* background-size: 18px 18px; */
		border: none;
		border-radius: 0;
		outline: none;
	}
	
	.total .flex .sp2 {
	    display: block;
	    font-size: 0.7rem;
	    -webkit-box-flex: 1;
	    -webkit-flex: 1;
	    -ms-flex: 1;
	    flex: 1;
	    text-align: center;
		}
	.footer-count .submit {
		float: left;
		width: 30%;
		color: #fff;
		display: block;
		text-align: center;
		background-color: #E35151;
	}
</style>
