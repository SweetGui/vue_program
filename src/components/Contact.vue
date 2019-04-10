<template>

	<el-container>
		<el-aside>
			<ul class="show-box">
				<li>
					<a href="#">三亚</a>
					<i>SANYA</i>
				</li>
				<li>
					<a href="#">丽江</a>
					<i>LIJIANG</i>
				</li>
				<li>
					<a href="#">大理</a>
					<i>DALI</i>
				</li>
				<li>
					<a href="#">厦门</a>
					<i>XIAMEN</i>
				</li>
				<li>
					<a href="#">北京</a>
					<i>BEIJING</i>
				</li>
				<li>
					<a href="#">重庆</a>
					<i>CHONGQING</i>
				</li>
				<li>
					<a href="#">哈尔滨</a>
					<i>HAERBIN</i>
				</li>
				<li>
					<a href="#">普吉岛</a>
					<i>PUJIDAO</i>
				</li>
				<li>
					<a href="#">巴厘岛</a>
					<i>BAOLIDAO</i>
				</li>
				<li>
					<a href="#">日本</a>
					<i>RIBEN</i>
				</li>
				<li>
					<a href="#">青岛</a>
					<i>QINGDAO</i>
				</li>
				<li>
					<a href="#">沈阳</a>
					<i>SHENYANG</i>
				</li>
				<li>
					<a href="#">马尔代夫</a>
					<i>MAERDAIFU</i>
				</li>
				<li>
					<a href="#">苏梅岛</a>
					<i>SUMEIDAO</i>
				</li>
				<li>
					<img src="../assets/nav_logo.png" alt="" />
				</li>
			</ul>
		</el-aside>
		<el-main>
			
			<!--<img src="../assets/1810071830256535.jpg"/>-->
			<div class="image"></div>
			
		</el-main>
		
	</el-container>
   
</template>

<script>
	export default {
		name: "Contact"
		
	}
</script>

<style scoped>
	il,li{
		list-style: none;
	}
	.el-aside {
		position: absolute;
		left: -108px;
		top: 165px;
		z-index: 100000000;
		padding-right: 30px;
		height: 856px;
		background: rgba(0, 0, 0, 0.8);
		text-align: right;
	}
	
	.el-main {
		margin: 0;
		padding: 0;
		height: 856px;
		
	}
	
	.container {
		width: 100%;
		height: 400px;
		/*background-color: lightcoral;*/
	}
	
	.show-box li {
		width: 100%;
		margin-top: 10px;
		height: 45px;
	}
	
	.show-box a {
		color: #eaeaea;
		font-size: 16px;
		text-decoration: none;
	}
	
	.show-box i {
		display: block;
		font-style: normal;
		font-size: 13px;
		color: #6f6c6c;
	}
	
	.show-box li:hover {
		background-color: #97791f;
	}
	.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }
  .image{
  	width: 1349px;
    height: 856px;
  	background-image: url(../assets/1810071830256535.jpg);
  	background-size: cover;
  	background-repeat: no-repeat;
  }
 
 
</style>