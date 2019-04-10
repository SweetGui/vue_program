<template>
	<div class="container">
		<ul class="box">
			<li class='list'>
				<router-link class="mylink" to="news">首页</router-link>
			</li>
			<li class='list'>
				<router-link class="mylink" to="product">品牌介绍</router-link>
				
			</li>
			<li class='list'>
				<router-link class="mylink" to="find">旅拍目的地</router-link>
				<ul class="show-box">
							<li>
								<a href="/All.vue">三亚</a>
							</li>
							<li>
								<a href="/Contact.vue">丽江</a>
							</li>
							<li>
								<a href="/Find.vue">大理</a>
							</li>
							<li>
								<a href="./Find.vue">厦门</a>
							</li>
							<li>
								<a href="./News.vue">北京</a>
							</li>
							<li>
								<a href="./Relation.vue">重庆</a>
							</li>
							<li>
								<a href="./Product.vue">哈尔滨</a>
							</li>
							<li>
								<a href="./All.vue">普吉岛</a>
							</li>
							<li>
								<a href="./News">巴厘岛</a>
							</li>
							<li>
								<a href="#">日本</a>
							</li>
							<li>
								<a href="#">青岛</a>
							</li>
							<li>
								<a href="#">沈阳</a>
							</li>
							<li>
								<a href="#">马尔代夫</a>
							</li>
							<li>
								<a href="#">苏梅岛</a>
							</li>
						</ul>
			</li>
			<li class='list'>
				<router-link class="mylink" to="news">微电影</router-link>
			</li>
			<li class='list'>
				<router-link class="mylink" to="all">每周作品</router-link>
			</li>
			<li class='list'>
				<router-link class="mylink" to="index">金夫人</router-link>
			</li>
			<li class='list'>
				<router-link class="mylink" to="contact">唯映像</router-link>
			</li>
			<li class='list'>
				<router-link class="mylink" to="relation">新闻中心</router-link>
			</li>
			<li class='list'>
				<router-link class="mylink" to="price">优惠活动</router-link>
			</li>
		</ul>
	</div>
</template>

<script >
	export default {
		name: "MyNav"
	}
</script>

<style scoped>
	ul,
	li {
		margin: 0;
		padding: 0;
	}
	
	li {
		list-style: none;
	}
	
	.container {
		width: 100%;
		height: 60px;
		color: #dddede;
		line-height: 63px;
		background: #202020;
		font-size: 17px;
	}
	
	.box {
		width: 90%;
		margin: 0 auto;
		height: 60px;
		background: #202020;
	}
	
	.container .list {
		display: inline-block;
		height: 100%;
		margin-left: 40px;
	}
	
	.container .list .mylink {
		color: #dddede;
		text-decoration: none;
	}
	
	.container .list:hover {
		background-color: #97791f;
	}
	
	.container .list:hover .mylink {
		color: #dddede;
	}
	
	.container .show-box {
		width: 120px;
		background-color: #202020;
		padding: 5px 10px;
		position: absolute;
		top: 160px;
		left: 280px;
		display: none;
		z-index: 20000000000;
	}
	
	.container .list:hover .show-box {
		display: block;
	}
	
	.container .show-box li {
		height: 30px;
		line-height: 30px;
	}
	
	.container .show-box a {
		color: #dddede;
	   font-size: 17px;
		text-decoration: none;
         
	}
	
	.container .show-box a:hover {
		 color: #97791f;
		background-color: #ffd04b;
	}
</style>