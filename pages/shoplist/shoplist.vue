<template>
	<view class="page">
		
			<!-- 头部 -->
			<view class="header1">
				<view class="lbs-btn" @click="getLocationInfo">
					<text>{{address}}</text>
				</view>
			</view>
			<!-- 店铺列表 -->
			<view class="allshop">
				<view class="shoplist" v-for="(item,index) in supplierList" :key="index" @click="toShopDetail(item.id)">
					
					<view class="shop_img"><image class="shop_img_in" :src="item.supplierImg"></image></view>
					<view class="shop_info">
						<view class="shop_name">{{item.storeName}}</view>
						<view class="shop_busnesstime">服务时间：{{item.businessHours}}</view>
						<view class="shop_address">地址:{{item.address}}</view>
						<view class="shop_tel">电话:{{item.contactPhone}}</view>
						<view class="shop_distance">{{item.disatance}}m</view>
					</view>
					<view class="shop_go">
						<!-- <label class="shop_go_i">箭头</label> -->
					</view>
				</view>
			</view>
			
			<!-- <view  class="footer">
				  		<view class="menus">
				    		<view  class="menu"  @click="firstPage">
				      			<view id="shouye">
									<span class="menu-icon menu-icon1"></span>
									<view>首页</view>
								</view>
				    		</view>
				    		<view class="menu active" @click="shoplist"> 
				      			<view id="fujin">
									<span class="menu-icon menu-icon2"></span>
									<view>附近小店</view>
								</view>
				    		</view>
				    		<view class="menu gwc"  @click="toCart" >
				      			<view id="gouwu">
				        			<span class="menu-icon menu-icon3"></span>
									<div>购物车</div>
									<span  id="headerCarItemQuantity" class="count"></span>
				      			</view>
				    		</view>
				     		
							<view class="menu"  @click="toMyCenter">
									<view  id="wode">
											<span class="menu-icon menu-icon4"></span>
											<view id="headerMemberCenter">我的</view></view>
									</view>
							</view>
			</view> -->
			<!-- <view class="container999">
				<tabBar :currentPage="currentPage"></tabBar>
			</view> -->
	</view>
</template>

<script>
	// import tabBar from '../../components/zwy-tabBar/tabBar.vue';
	export default {
		components: {
			// tabBar
		},
		data() {
			return {
				// currentPage:'shoplist',
				address:'西乡塘区',
				longitude:'',
				latitude:'',
				supplierList:[
					{
						id:1,
						storeName:'旗舰店',
						supplierImg:'../../static/image/ic_sy_jsyl.png',
						businessHours:'09:00-18:00',
						address:'南宁市西乡塘北湖路28号',
						contactPhone:'15077144027',
						disatance:230
					},
					{
						id:2,
						storeName:'家政服务',
						supplierImg:'../../static/image/ic_sy_jjry.png',
						businessHours:'09:00-18:00',
						address:'南宁市西乡塘北湖路50号',
						contactPhone:'15077144027',
						disatance:299
					},
					{
						id:3,
						storeName:'家政服务',
						supplierImg:'../../static/image/ic_sy_jjry.png',
						businessHours:'09:00-18:00',
						address:'南宁市西乡塘北湖路50号',
						contactPhone:'15077144027',
						distances:299
					},
					
				]
			}
		},
		onLoad(){
			this.getLocationInfo();
			// var data ={
			// 	lng:this.longitude,
			// 	lat:this.latitude
			// };
			///this.getshopList(data);
			uni.$on('LoginBack',()=> {
				let data ={
					lng:that.longitude,
					lat:that.latitude
				};
				this.getshopList(data);
			});
		},
		methods: {
			
			//定位到当前位置
			async getLocationInfo(){
				// uni.showLoading({
				//     title: '定位中...'
				// });
				var that = this;
				let result = await uni.getLocation({
				    type: 'wgs84',
					geocode:true,
				    success: function (res) {
							 console.log('当前位置的经度：' + JSON.stringify(res));
						that.longitude = res.longitude;
						that.latitude = res.latitude;
						//var address = res.address.street+res.address.streetNum;
						var address = res.address.street;
						that.address = address;
						uni.hideLoading()
						let data ={
							lng:that.longitude,
							lat:that.latitude
						};
						that.getshopList(data);
						
					},
					fail:function(){
						uni.hideLoading()
						
				    },complete:function(){
						uni.hideLoading()
					}
					
				});
				let data ={
					lng:that.longitude,
					lat:that.latitude
				};
				//that.getshopList(data);
			},
			//获取附近小店列表
			getshopList(data){
				 console.log("data==="+JSON.stringify(data));
				this.$api.shoplist(data).then(res =>
					{
						 console.log(JSON.stringify(res));
						 console.log("data==="+JSON.stringify(res.list));
						  console.log(this.$config.imghosturl);
						if(res.list!=null){
							var list = res.list;
							//list.forEach(p => p.supplierImg = this.$config.imghosturl+p.supplierImg);
							this.supplierList = list;
						}
						
					}); 
			},
			//跳转店铺详情页
			toShopDetail(shopId) {
				uni.navigateTo({
					 url: '/pages/shopdetail/shopdetail?shopId='+shopId
				})
			},
			
			firstPage() {
				uni.redirectTo({
				    url: '/pages/index/index'
				});
			},
			shoplist() {
				uni.redirectTo({
				    url: '/pages/shoplist/shoplist'
				});
				
			},
			toCart() {
				uni.redirectTo({
				    url: '/pages/carts/carts'
				});
			},
			toMyCenter() {
				uni.redirectTo({
				    url: '/pages/mycenter/mycenter'
				});
			},
		}
	}
</script>

<style lang="scss">
	.header1{
		     /* background-color: #E13F3F; */
			 background-color: #1195db;
		     height: 2.5rem;
		     line-height: 2.5rem;
		     padding: 0 1.6rem;
		     color: #fff;
		     font-size: 0.7rem;
		     position: relative;
	}
	.lbs-btn{
		    color: #fff;
		    display: inline-block;
		    height: 2.5rem;
		    line-height: 2.5rem;
		    width: 100%;
		    white-space: nowrap;
		    overflow: hidden;
		    text-overflow: ellipsis;
	}
	.lbs-btn:after {
	    content: '';
	    border-top: 5px solid #fff;
	    border-left: 6px solid transparent;
	    border-right: 6px solid transparent;
	    position: relative;
	    top: .8rem;
	    left: 4px;
	}
	.allshop{
		padding: 0rem 1rem;
		margin-bottom: 5rem;
	}
	.shoplist{
		display: flex;
		padding: 1rem 0rem;
		border-bottom: 1px solid lightgray;
	}
/* 	.shoplist .shop_img{
		flex: 1;
	} */
	.shop_img_in{
		width: 2.5rem;
		height: 2.5rem;
		margin-top:0.5rem;
		border-radius:50%;
	}
	.shoplist .shop_info{
		padding-left: 0.3rem;
		flex: 2;
	}
	.shoplist .shop_name{
		font-size: 0.7rem;
		font-weight: 5rem;
		font-weight: bold;
	}
	.shoplist .shop_info .shop_busnesstime{
		    color: #AAD122;
		    font-family: Arial, 'microsoft yahei';
		    padding-left: 16px;
		    background: url(../../static/image/ic_fj_time.png) 0 50% no-repeat;
		    background-size: 12px 12px;
			font-size: 0.7rem
	}
	.shoplist .shop_info .shop_address{
		color: #999999;
		font-family: Arial, 'microsoft yahei';
		font-size: 0.7rem
	}
   .shoplist .shop_info .shop_tel{
		color: #999999;
		font-family: Arial, 'microsoft yahei';
		font-size: 0.7rem
   }
   .shoplist .shop_info .shop_distance{
   	    color: #ED6B2C;
   	    float: right;
   	    padding-left: 15px;
   	    background: url(../../static/image/ic_fj_position.png) 0 40% no-repeat;
   	    background-size: 12px 12px;
		display: block;
		margin-top: -2.7rem;
		margin-right: -4.3rem;
   }
  .shop_go{
  	       width: 40px;
  	       /* border-bottom: 1px solid #EBEBEB; */
		   flex: 1;
  }
    .shop_go label{
		   background: url(../../static/image/ic_fj_arrow.png) 50% 50% no-repeat;
		   background-size: 5.5px 16.5px;
		   color: transparent;
		   display: block;
		   margin-top: 1.1rem;
		   /* margin-right: -3.2rem; */
		   margin-top: 1.1rem;
		   float: right;
   }
   
	.active {
	    background-color: #E13F3F;
	}
	.footer{
			position: fixed;
			z-index: 999;
			bottom: 0;
			left: 0;
			background: #3A424A;
			width: 100%;
			min-width: 320px;
			/* height: 4.5rem; */
			color: white;
			font-size: 25px;
			line-height: 25px;
		}
		.footer .menus {
		    padding: 0;
		    margin: 0 auto;
		    list-style: none;
		    width: 100%;
		}
	
		.menus .menu {
		    font-size: 0.6rem;
		    float: left;
		    width: 25%;
		   /* height: 4.5rem; */
		    text-align: center;
		    padding: 0.2rem  0 0 0;
		    box-sizing: border-box;
		    margin: 0 auto;
		    -webkit-tap-highlight-color: transparent;
		}
		
		.menus .menu  .menu-icon {
		    display: block;
		    width: 100%;
		    height: 1.3rem;
		    background-size: 20px 20px;
			color: #ffffff;
			
		}
		.menus .menu .menu-icon1{
			background:url(../../static/image/ic_dh_sy.png) center center no-repeat scroll;
			background-size: 23px;
			
		}
		.menus .menu .menu-icon2{
			background:url(../../static/image/ic_dh_xd.png) center center no-repeat scroll;
			background-size: 23px;
		}
		.menus .menu .menu-icon3{
			background:url(../../static/image/ic_dh_shop.png) center center no-repeat scroll;
			background-size: 23px;
		}
		.menus .menu .menu-icon4{
			background:url(../../static/image/ic_dh_me.png) center center no-repeat scroll;
			background-size: 23px;
		}
</style>
