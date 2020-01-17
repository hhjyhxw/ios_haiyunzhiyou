<template>
	<view>
		<!-- 头部商品图片 -->
		<image class="goods-img maiwan" src="../../static/image/temp/goods-demo.jpg" ></image>
		
		<!-- 商品信息 -->
		<view class="goods-info">
			<view class="goods-title">年日常保洁24次卡</view>
			<view class="txt-fav-icon">海韵优选</view>
			<view class="goods-price">
				<view class="price">￥2860.00</view>
				<view class="ever">
					<text>原价</text>
					<text class="originprice">￥3500.00</text>
					<label class="saleledlabel">已售<text class="saleled">256</text></label>
				</view>
			</view>
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
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
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
