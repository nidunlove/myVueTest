import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Toolbar from '@/pages/Toolbar'
import Editor from '@/pages/Editor'
import Home from '@/pages/Home'
import List from '@/pages/List'
import NoteList from '@/pages/NoteList'
import User from '@/pages/User'
import VuexTest from '@/pages/vuexTest'

Vue.use(Router)

export default new Router({
  routes: [
    { path: "*", component: HelloWorld },
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Toolbar',
      name: 'Toolbar',
      component: Toolbar,
      　　children: [　　　{　　　　
          path: '/Editor',
          name: 'Editor',
          component: Editor　　
        },
        {　　　　
          path: '/List',
          name: 'List',
          component: List　　
        },
        {　　　　
          path: '/NoteList',
          name: 'NoteList',
          component: NoteList　　
        },
        {　　　　
          path: '/User',
          name: 'User',
          component: User　　
        }　　
      ]
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
      path: '/VuexTest',
      name: 'VuexTest',
      component: VuexTest
    }
  ]
})
