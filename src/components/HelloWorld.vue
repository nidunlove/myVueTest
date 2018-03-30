<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <h2>作者：{{author}}</h2>
    <h2>{{content}}</h2>
    <ul>
      <li>
        <!-- <a
          href="https://vuejs.org"
          target="_blank"
        >
          Core Docs
        </a> -->
        <router-link to="/Toolbar">
        二级路由Toolbar
        </router-link>
      </li>
      <li>
        <!-- <a
          href="https://forum.vuejs.org"
          target="_blank"
        >
          Forum
        </a> -->
        <button @click="goHome">
          平级路由 Home
        </button>
      </li>
      <li>
        <router-link to="/VuexTest">
        二级路由 VuexTest
        </router-link>
      </li>
      <!-- <li>
        <a
          href="https://chat.vuejs.org"
          target="_blank"
        >
          Community Chat
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/vuejs"
          target="_blank"
        >
          Twitter
        </a>
      </li>
      <br>
      <li>
        <a
          href="http://vuejs-templates.github.io/webpack/"
          target="_blank"
        >
          Docs for This Template
        </a>
      </li> -->
    </ul>
    <!-- <h2>Ecosystem</h2>
    <ul>
      <li>
        <a
          href="http://router.vuejs.org/"
          target="_blank"
        >
          vue-router
        </a>
      </li>
      <li>
        <a
          href="http://vuex.vuejs.org/"
          target="_blank"
        >
          vuex
        </a>
      </li>
      <li>
        <a
          href="http://vue-loader.vuejs.org/"
          target="_blank"
        >
          vue-loader
        </a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/awesome-vue"
          target="_blank"
        >
          awesome-vue
        </a>
      </li>
    </ul> -->
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
                goHome:function(){
                    // if(num!=''){this.a+=num}
                    // else{this.a++}
                    // 字符串
                    this.$router.push('/Home')

                    // 对象
                    // this.$router.push({ path: '/home/first' })

                    // 命名的路由
                    // this.$router.push({ name: 'home', params: { userId: wise }})
                }
            },
    computed: {//将状态映射到组件
      author () {
        // console.log(this.$store);
        // return this.$store.state.author
         return this.$store.state.userName;
      },
      content(){
        return this.$store.state.content;
      }
    }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
