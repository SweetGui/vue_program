<template>
	<el-container>
		<el-header>
			<div class="container">
				<ul>
					<li class='list'>
						<router-link class="mylink" to="firstpage">首页</router-link>
						<span>HOME PAGE</span>
					</li>
					<li class='list'>
						<router-link class="mylink" to="produce">品牌介绍</router-link>
						<span>BRAND INTRODUTION</span>
					</li>
					<li class='list'>
						<router-link class="mylink" to="">客照欣赏2</router-link>
						<span>GUEST APPRECIATION</span>
					</li>
					<li class='list'>
						<router-link class="mylink" to="movie">微电影</router-link>
						<span>MICROFILM</span>
					</li>
					<li class='list'>
						<router-link class="mylink" to="works">每周作品</router-link>
						<span>WEEKLY WORKS</span>
					</li>

					<li class='list'>
						<router-link class="mylink" to="sub">优惠活动</router-link>
						<span>BENEFIT ACTMTIES</span>
					</li>
				</ul>
			</div>

		</el-header>
		<el-main>
			<div class="l_pic">
				<div class="bo_fit">
					<div><img src="../assets/icon1.png"></div><span>全球旅拍作品</span>
				</div>
				<div class="bo_fit">
					<div><img src="../assets/icon2.png"></div><span>品牌简介</span>
				</div>
				<div class="bo_fit">
					<div><img src="../assets/icon3.png"></div><span>快速扫描二维码</span>
				</div>
				<div class="bo_img">
					<ul>
						<li>
							<img class="bo_w" src="../assets/ewwb.jpg">
							<div class="b_bog">
								<div><img src="../assets/weibo_icon.png"></div>
								<span>官方微博</span>
							</div>
						</li>
						<li class="bl_2">
							<img class="bo_w" src="../assets/ewwx.jpg">
							<div class="b_bog">
								<div><img src="../assets/web_icon.png"></div>
								<span>官方微信</span>
							</div>
						</li>
					</ul>
				</div>
			</div>
			<div class="r_infor">
        <div class="dtit">投诉电话</div>
        <div class="dtime">在线时间：09:00-22:00</div>
        <div class="dnum">18583679395</div>
        <div class="dweb" id="adres">时尚经典婚纱摄影有限公司</div>
       
        <div class="dstre">Copyright 2017-2018 VOGUE VLICS GLOBAL TRAVAL SHOT ALL RIGHTS RESERVED</div>
    </div>
		</el-main>
	</el-container>
</template>

<script>
	export default {
		name: "MyFooter"
	}
</script>

<style scoped>
	.el-container {
		margin: 0;
		padding: 0;
	}
	
	.el-header {
		margin-top: -4px;
		background-color: #444444;
		color: #333;
		height: 70px !important;
		line-height: 60px;
	}
	
	ul,
	li {
		margin: 0;
		padding: 0;
	}
	
	li {
		list-style: none;
		display: block;
	}
	
	.container {
		width: 100%;
		height: 70px;
		background-color: #444444;
		font-size: 17px;
	}
	
	.container .list {
		display: inline-block;
		height: 100%;
		padding: 0 25px;
		position: relative;
	}
	
	.container .list .mylink {
		color: #dddede;
		text-decoration: none;
	}
	
	.container .list:hover .mylink {
		color: #dddede;
	}
	
	.list>span {
		height: 20px;
		font-size: 12px;
		color: #5f5f5f;
		text-align: center;
		line-height: 20px;
		display: block;
		margin-top: -20px;
	}
	
	.el-main {
		height: 400px;
		width: 100%;
		background: #1a1a1a;
		overflow: hidden;
	}
	
	.l_pic {
		width: 244px;
		height: 270px;
		float: left;
		padding-top: 76px;
		margin-left: 60px;
	}
	
	.bo_fit {
		overflow: hidden;
		margin-bottom: 20px;
		width: 244px;
		height: 28px;
	}
	.bo_fit>span{
		margin-left: 5px;
		font-size: 16px;
    color: #fff
	}
	
	.bo_fit>div,
	.bo_img>ul>li,
	.b_bog>div {
		display: inline-block;
	}
	
	.bo_w {
		width: 97px;
		height: 97px;
	}
	
	.bl_2 {
		margin-left: 20px;
	}
	
	.l_pic .bo_img .b_bog div img {
		width: 20px;
		height: 16px;
		margin-top: 5px;
	}
	
	.l_pic .bo_img .b_bog span {
		font-size: 16px;
		color: #dddede;
		
	}
	 .r_infor {
    float: left;
    padding-top: 76px;
    margin-left: 80px;
    width: 499px;
    height: 315px;
}
.r_infor .dtit {
	width: 499px;
	height: 39px;
    font-size: 22px;
    color: #fff;
    text-align: left;
}
.r_infor .dtime {
	height: 32px;
    font-size: 18px;
    color: #a2a2a2;
    text-align: left;
}
.r_infor .dnum {
    font-size: 45px;
    color: #fff;
    text-align: left;
    margin-bottom: 10px;
    height: 81px;
}
 .r_infor .dweb {
    font-size: 20px;
    color: #fff;
    text-align: left;
    margin-bottom: 20px;
    height: 36px;
}
 .r_infor .dstre {
 	width: 499px;
 	height: 21px;
    font-size: 11px;
    color: #525252;
    text-align: left;
   
}
</style>