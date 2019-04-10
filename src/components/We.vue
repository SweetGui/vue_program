<template>
	<div class="container">
		<img class="logo" src="../assets/golden-ladies.png" alt="" />
		<img class="active" src="../assets/beauty-title.png" alt="" />
		<div class="common filter switch">
			<a id="fashion_link" href="/beauty" class="filter-item active">礼服</a>
			<a id="face_link" href="/beauty?type=0" class="filter-item ">造型</a>
		</div>
	</div>
</template>

<script>
</script>

<style scoped="scoped">
    .container{
    	height: 280px;
    }
   
   
    .logo{
    	margin: 63px auto 36px;
    	display: block;
    }
    .filter {
    width: 394px;
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    margin: 0 auto;
}
.filter .filter-item.active {
    background: #c6b388;
}
.filter .filter-item {
    width: 187px;
    height: 34px;
    cursor: pointer;
    background: #ececec;
    font-size: 17px;
    text-align: center;
    line-height: 34px;
    color: #121212;
}
.filter .filter-item {
    width: 187px;
    height: 34px;
    cursor: pointer;
    background: #ececec;
    font-size: 17px;
    text-align: center;
    line-height: 34px;
    color: #121212;
}
a{
	text-decoration: none;
}
.common{
	margin-top: 30px;
}
</style>