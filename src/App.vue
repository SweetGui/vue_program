<template>
	<div id="app">
		<my-header></my-header>
		
		<my-nav></my-nav>
		
		<!--用来显示路由导航匹配的组件：切换组件显示-->
		<router-view></router-view>
		<my-body></my-body>
		<my-artile></my-artile>
		<my-footer></my-footer>
	</div>
</template>

<script>
	import MyHeader from "./components/MyHeader";
	import MyNav from "./components/MyNav";
	
	import MyBody from "./components/MyBody";
	import MyArtile from "./components/MyArtile";
	import MyFooter from "./components/MyFooter";
	
	export default {
		name: 'App',
		components: {
			"my-header": MyHeader,
			"my-nav": MyNav,
			"my-body": MyBody,
			"my-artile": MyArtile,
			"my-footer": MyFooter
		}
	}
</script>

<style scoped>
	* {
		margin: 0;
		padding: 0;
	}
	
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
	}
</style>