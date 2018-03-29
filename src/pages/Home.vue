<template>
	<div><!--必须要有外层div-->
	    <div>home</div>
	    <div>
		    <router-link to="/">
		        router-link to="/"
		        跳转
		    </router-link>
		</div>
	</div>
</template>
<script>
export default {
  name: 'home',
  data () {
    return {
      msg: 'Welcome to My Vue.js App'
    }
  },
  methods:{
    
  }
}
</script>