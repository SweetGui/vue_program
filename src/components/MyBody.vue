<template>
	<div class="outbox">
		<div class="container">
			<img src="../assets/lv_tit3.png" />
		</div>
		<div class="flex-box">
			<div class="flex">
				<img src="../assets/1-1PI11549220-L.jpg" />
				<p>七月第五周客照</p>
				<span>VOGUE CLASSICS GLOBAL TRAVEL</span>
			</div>
			<div class="flex">
				<img src="../assets/1-1PH41509180-L.jpg" />
				<p>七月第三周客照</p>
				<span>VOGUE CLASSICS GLOBAL TRAVEL</span>
			</div>
			<div class="flex">
				<img src="../assets/1-1PGQ526290-L.jpg" />
				<p>七月第一周客照</p>
				<span>VOGUE CLASSICS GLOBAL TRAVEL</span></div>
			<div class="flex">
				<img src="../assets/1-1PG01401590-L.jpg" alt="" />
				<p>七月第二周客照</p>
				<span>VOGUE CLASSICS GLOBAL TRAVEL</span>
			</div>
		</div>
		<div class="flex-box">
			<div class="flex">
				<img src="../assets/1-1PPQ64H20-L.jpg" alt="" />
				<p>六月第四周客照</p>
				<span>VOGUE CLASSICS GLOBAL TRAVEL</span></div>
			<div class="flex">
				<img src="../assets/1-1PPQ643570-L.jpg" alt="" />
				<p>六月第三周客照</p>
				<span>VOGUE CLASSICS GLOBAL TRAVEL</span></div>
			<div class="flex">
				<img src="../assets/1-1PF41039560-L.jpg" alt="" />
				<p>七月第一周客照</p>
				<span>VOGUE CLASSICS GLOBAL TRAVEL</span></div>
			<div class="flex">
				<img src="../assets/1-1PPQ640410-L.jpg" alt="" />
				<p>六月第二周客照</p>
				<span>VOGUE CLASSICS GLOBAL TRAVEL</span>
			</div>
		</div>
		<div class="flex-box">
			<div class="flex">
				<img src="../assets/1-1PPQ636160-L.jpg" alt="" />
				<p>六月第一周客照</p>
				<span>VOGUE CLASSICS GLOBAL TRAVEL</span>
			</div>
			<div class="flex">
				<img src="../assets/1-1PPQ631580-L.jpg" alt="" />
				<p>五月第四周客照</p>
				<span>VOGUE CLASSICS GLOBAL TRAVEL</span>
			</div>
			<div class="flex">
				<img src="../assets/1-1PPQ626050-L.jpg" alt="" />
				<p>五月第三周客照</p>
				<span>VOGUE CLASSICS GLOBAL TRAVEL</span>
			</div>
			<div class="flex">
				<img src="../assets/1-1PPQ621520-L.jpg" alt="" />
				<p>月第二周客照</p>
				<span>VOGUE CLASSICS GLOBAL TRAVEL</span>
			</div>
		</div>
	</div>
	</div>
	
	</div>



</template>
<script>
	export default {
		name: "MyBody"
	}
</script>

<style scoped>
	.outbox {
		height: 1107px;
		width: 100%;

	}
	
	.container {
		width: 80%;
		margin: 0 auto;
		height: 283px;
		margin-top: 80px;
	}
	
	.container>img {
		width: 558px;
		height: 233px;
		/*position: relative;*/
		/*margin-top: 37px;*/
		
	}
	
	.flex-box {
		margin-top: 30px;
		width: 90%;
		height: 269px;

		margin: 0 auto;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		flex-wrap: wrap;
	}
	
	.flex {
		width: 292px;
		height: 269px;
	}
	
	.flex>img {
		width: 292px;
		height: 198px;
	}
	
	.flex p {
		margin-top: 10px;
		height: 20px;
		font-size: 17px;
		line-height: 20px;
		color: #000;
		text-align: left;
	}
	
	.flex span {
		font-size: 12px;
		color: #818181;
		text-align: left;
	}
</style>