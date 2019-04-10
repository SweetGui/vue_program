<template>
	<div class="container">
		<img class="logo" src="../assets/h_logo.png" />
			<div class="header-right">
				<img class="header-tell" src="../assets/tell.png" />
				<p class="tell">咨询热线:18349228901</p>
			</div>
	</div>
</template>

<script>
	export default {
		name: "MyHeader"
	}
</script>

<style scoped>
	* {
		margin: 0;
		padding: 0;
	}
	
	.container {
		width: 100%;
		height: 55px;
		padding: 25px 0;
		background-color: #000;
		/*border-top: 3px solid #cca46a;*/
	}
	
	
		.logo {
		width: 338px;
		height: 38px;
		margin-top: 8px;
    margin-left: -486px;
	}
	.header-right {
		float: right;
		margin-right: 79px;
		margin-top: -15px;
		margin-top: -15px;
	}
	
	.tell {
		display: inline-block;
		float: left;
		font-size: 20px;
		line-height: 110px;
		color: #dbdbdb;
		margin-top: 0;
	}
	
	.header-tell {
		float: left;
		width: 33px;
		height: 21px;
		margin-top: 42px;
		margin-right: 5px;
	}
		
</style>