<template>
    <div id="toolbar">
      <h2>二级路由头部</h2>
      <ul>
        <li>
          <router-link to="/">
            回首页
          </router-link>
        </li>
        <li>
          <router-link to="/Toolbar">
            本页
          </router-link>
        </li>
        <li>
          <router-link to="/Editor">
            三级页面 Editor
          </router-link>
        </li>
        <li><router-link to="/List">
            三级页面 List
          </router-link></li>
        <li><router-link to="/NoteList">
            三级页面 NoteList
          </router-link></li>
        <li><router-link to="/User">
            三级页面 User
          </router-link></li>
      </ul>
      
      <ul>
        <li><i @click="addNote('aa')" class="glyphicon glyphicon-plus">click事件点击</i></li>
      </ul>
      <hr />
      <h3>以下 三级路由  </h3>
      <transition name="slide">
        <router-view ></router-view>
      </transition>
    </div>
</template>
<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to My Vue.js App'
    }
  },
  methods:{
    addNote:function(parm){
      console.log('addNote');
      alert("click事件点击"+parm);
    }, 
    tooglefavorite:function(){
      console.log('tooglefavorite');
    },
     deleteNote:function(){
      console.log('deleteNote');
    }
  }
}
</script>
<style>
ul li {
  display: inline-block;
  margin-right: 10px;
}
  #toolbar i {
  font-size: 30px;
  margin-bottom: 35px;
  cursor: pointer;
  opacity: 0.8;
  transition: opacity 0.5s ease;
}

#toolbar i:hover {
  opacity: 1;
}
</style>
<!-- <template>
    <div>
        <h3>{{myName}}</h3>
    </div>
</template>
<script>
    export default {
        name : "Main",
        computed : {
            myName (){
                return this.$store.state.userName;
            }
        }
    }
</script> -->