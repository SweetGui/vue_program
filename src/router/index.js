//路由配置文件

import Vue from 'vue'
import Router from 'vue-router' //导入路由vue-router库

//导入相关的组件
import Index from '@/components/Index'
import News from '@/components/News'
import Product from '@/components/Product'
import Contact from '@/components/Contact'
import Find from '@/components/Find'
import Relation from '@/components/Relation'
import All from '@/components/All'
import MyBody from '@/components/MyBody'
import Price from '@/components/Price'
import Login from '@/components/Login'
import We from '@/components/We'
//声明使用路由
Vue.use(Router)

//创建路由对象并配置,最后导出
export default new Router({
	routes: [
		//	path: 导航路径,/可以用来表示首页
		//  name: 组件名称，可用来指定跳转路径，在push函数中使用
		//  component: 需要切换的组件
		{
			path: '/',
			name: 'Index',
			component: Index
		},
		{
			path: "/news",
			name: "News",
			component: News
		},
		{
			path: "/product",
			name: "Product",
			component: Product
		},
		{
			path: "/find",
			name: "Find",
			component: Find
		
		},
		{
			path: "/contact",
			name: "Contact",
			component: Contact,
		},
		{
			path: "/relation",
			name: "Relation",
			component: Relation,
		},
		{
			path: "/all",
			name: "All",
			component: All,
		},
		{
			path: "/index",
			name: "Index",
			component: Index,
		},
		{
			path: "/price",
			name: "Price",
			component: Price,
			children: [
				{
					path: "/login",
					name: "Login",
					component: Login
				},
				{
					path: "/we",
					name: "We",
					component: We
				}

			]
		}
	]
});