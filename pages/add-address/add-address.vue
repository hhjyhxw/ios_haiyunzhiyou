<template>
	<view>
		<view class="form-area">
			<view class="form-item">
				<view class="label">
					<label>收货人</label>
				</view>
				<view class="input">
					<input :value="name" />
				</view>
			</view>
			<view class="form-item">
				<view class="label">
					<label>联系号码</label>
				</view>
				<view class="input">
					<input :value="mobile" />
				</view>
			</view>
			<view class="form-item selectaddone">
				<view class="label">
					<label>选择区域</label>
				</view>
				<view class="input" @click="showcity">
					<input :value="concactAddress"  />
					<view class="selectaddr">
						<label >请选择</label>
					</view>
				</view>
			</view>
			<view class="form-item">
				<view class="label">
					<label>详细地址</label>
				</view>
				<view class="input">
					<input  :value="detailaddress"/>
				</view>
			</view>
			
			<view class="form-item setDefault">
				<view class="label">
					<label>设置为默认</label>
				</view>
				<view class="input switchs">
					<switch />
				</view>
			</view>
	</view>

			<!-- 保存按钮 -->
			<view class="submits" @click="toSaveAddress">
				<view class="save">
					<text>保存</text>
				</view>
			</view>
		
		<!-- <view class="city"  :class="showbox==false?'closecity':''">	
			<view class="city-box">
				<view @click="close" class="close">关闭</view>
				<semp-city @confirm="onCityClick" platform="jd"></semp-city>
			</view>
		</view> -->
		<view class="receiveAddressChoose">
			<scroll-view class="city"  :class="showbox==false?'closecity':''">	
					<semp-city @confirm="onCityClick" platform="jd"></semp-city>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	import sempCity from "@/components/semp-city/semp-city.vue"
	// import cityData from '../../common/city.data.js';
	export default {
		components: {
			sempCity
		},
		data() {
			return {
				showbox:false,
				type:'bottom',
				provinceName:'',
				cityName:'',
				countyName:'',
				townName:'',
				concactAddress:'',
				name:'',
				mobile:'',
				detailaddress:'',
			}
		},
		methods: {
			showcity(){
				this.showbox=true;
			
			},
			close(){
				this.showbox=false;
			},
			 onCityClick(e){
				this.provinceName=e.province.label;
				this.cityName=e.city.label;
				this.countyName=e.county.label;
				this.townName=e.town.label;
				this.concactAddress = this.provinceName+this.cityName+this.countyName+this.townName;
				this.togglePopup()
			},
			togglePopup(){
				this.close()
			}

		}
	}
</script>

<style>
.form-area {
    margin-bottom: 0.7rem;
    background-color: #fff;
}
 .form-item {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    padding: 0.3rem 1.5rem;
    border-bottom: 1px solid #EBEBEB;
	
}
 .form-item .label {
     padding-right: 1em;
	 font-size: 0.7rem;
 }
  .form-item .input {
     -webkit-box-flex: 1;
     -webkit-flex: 1;
     -ms-flex: 1;
     flex: 1;
	 height: 2rem;
	 line-height: 2rem;
	 font-size: 0.7rem;
 }
 .form-item .input input{
     -webkit-box-flex: 1;
     -webkit-flex: 1;
     -ms-flex: 1;
     flex: 1;
     height: 2rem;
     line-height: 2rem;
	 font-size: 0.7rem;
	 
 }
 .form-item .input uni-input {
     -webkit-box-flex: 1;
     -webkit-flex: 1;
     -ms-flex: 1;
     flex: 1;
     height: 2rem;
     line-height: 2rem;
	  font-size: 0.7rem;
}
.uni-input-input{
	height: 2rem;
	line-height: 2rem;
}
.form-item.selectaddone{
	position: relative;
}
.selectaddr{
	background: url(../../static/image/ic_fj_arrow.png) 100% 50% no-repeat;
    margin-right: 0.5rem;
    background-size: 5.5px auto;
    height: 2rem;
    width: 3.5rem;
    display: block;
    background-position: right;
    position: absolute;
    right: 0;
    top: 5px;
    bottom: 0;
    padding-right: 1re;
    color: #999;
}

.setDefault{
	display: flex;
	text-align: right;
}
.switchs{
	flex: 1;
}

.submits{
	padding: 1rem 2rem;
}
 .submits  .save{
		display: block;
		width: 100%;
		height: 2rem;
		line-height: 2rem;
		text-align: center;
		color: #666;
		border: 1px solid #5C5E68;
		background: #fff;
		font-size:0.7rem;
		border-radius: 22px;
		background: #fff;
		font-size: 0.7rem;
		background-color: orange;
		color: white;
}
.modal-comfirm {
    position: absolute;
    z-index: 9999;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
}
.modal-comfirm .content {
    -webkit-transform: translateX(-50%) translateY(-50%);
    width: 540px;
    height: auto;
    border-radius: 12px;
    position: relative;
    top: 46%;
    left: 50%;
    box-sizing: border-box;
    background: #fff;
    padding-bottom: 20px;
}

	.city{
		/* background:rgba(0,0,0,.5); */
		display: flex;
		flex-direction: column;
		overflow: hidden;
		font-size: 0.8rem;
		position: absolute;
		top: 30%;
		z-index: 999999999;
		background-color: lavender;
	}
	.closecity{
		display: none;
	}
	.city-box{
		padding:20upx;
		position:fixed;
		left:0;
		bottom:0;
		z-index:999;
		background:#fff;
	
	
	}
	.close{
		color:#666;
		height:80upx;
	}
</style>
