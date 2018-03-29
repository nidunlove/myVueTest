<template>
    <div id="toolbar">
      <h2>toolbar Tittle</h2>
      <ul>
        <li>
          <router-link to="/">
            router-link to="/"
            跳转
          </router-link>
        </li>
        <li>
          <router-link to="/Toolbar">
            router-link to="/Toolbar"
            跳转
          </router-link>
        </li>
        <li>
          <router-link to="/Editor">
            router-link to="/Editor"
            跳转
          </router-link>
        </li>
        <li><router-link to="/List">
            router-link to="/List"
            跳转
          </router-link></li>
      </ul>
      
      <h3>click事件点击</h3>
      <ul>
        <li><i @click="addNote" class="glyphicon glyphicon-plus">addNote</i></li>
        <li><i @click="tooglefavorite" class="glyphicon glyphicon-star">tooglefavorite</i></li>
        <li><i @click="deleteNote" class="glyphicon glyphicon-remove">deleteNote</i></li>
      </ul>
      <hr />
      <h3>toolbar SUB - router-view/ </h3>
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
    addNote:function(){
      console.log('addNote');
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