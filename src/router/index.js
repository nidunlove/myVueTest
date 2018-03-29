import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Toolbar from '@/pages/Toolbar'
import Editor from '@/pages/Editor'
import Home from '@/pages/Home'
import List from '@/pages/List'

Vue.use(Router)

export default new Router({
  routes: [
  	{ path: "*", component:HelloWorld },
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Toolbar',
      name: 'Toolbar',
      component: Toolbar,
	　　 children: [ 
	　　　{ 
	　　　　path: '/Editor', 
			   name: 'Editor',
	 　　　 component: Editor 
	　　  },
        { 
  　　　　path: '/List', 
         name: 'List',
   　　　 component: List 
  　　  }
	　　]
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
  ]
})
