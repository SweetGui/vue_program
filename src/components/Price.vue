<template>
	<div>
		<img  class="logo" src="../assets/logo2.png" alt="" />
		<h2>海岛之心</h2>
		<a href="#">商品相关</a>
		<span> > </span>
		<a href="#">门市服务</a>
		<span> > </span>
		<a href="#">其他问题</a>
		
		<ul>
			<li>
				<router-link to="login">请登录/请注册</router-link>
			</li>
			<li>
				<router-link to="we">联系我们</router-link>
			</li>
			
		</ul>
		<router-view></router-view>
		<img class="image" src="../assets/81df0c9ddb6b02d5d6754b07ac624f21-1524176.jpg"/>
		
	</div>
</template>

<script>
	export default {
		name: "Price"
	}
</script>

<style scoped="">
	
	li,
	ul{
		/*float: right;*/
		list-style: none;
		display: inline;
	}
	li{
		margin-left: 20px;
	}
	
	a{
	text-decoration: none;
	color: #121212;
	}
	.logo,
	.image{
		margin-top: 40px;
	}
	
</style>