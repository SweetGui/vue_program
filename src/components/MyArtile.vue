<template>
	<el-container>
		<el-header>
			<el-pagination small layout="prev, pager, next" :total="20" :page-count="5">
			</el-pagination>
		</el-header>
		<el-main>
			<img src="../assets/fit_bg3.jpg" alt="" />
		</el-main>
	</el-container>

</template>

<script>
	export default {
		name: "MyArtile"
	}
</script>

<style scoped>
	.el-header {
		text-align: center;
		line-height: 60px;
	}
	
	.el-main {
		width: 1349px;
		height: 645px;
		margin: 0;
        padding: 0;
	}
	
	.el-pagination {
		padding: 18px 5px;
		margin: 0 auto;
	}
	
	img {
		height: 641px;
		width: 100%;
	}
</style>