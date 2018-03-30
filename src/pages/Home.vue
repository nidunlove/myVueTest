<template>
	<div><!--必须要有外层div-->
	    <div>home</div>
	   
	    <div>
		    <router-link to="/">
		        router-link to="/"
		        跳转
		    </router-link>
		</div>
		 <div>
	    	<h3>天气：</h3>
	    	<div>{{weather}}</div>
	    </div>
	</div>
</template>
<script>
export default {
  name: 'home',
  data () {
    return {
      msg: 'Welcome to My Vue.js App',
      weather: ''
    }
  },
  methods:{
    getWeatherData(){
    	console.log(this);
    	// console.log(this.axios.myaxios);
    	// axios.get("https://api.nytimes.com/svc/topstories/v2/home.json?api-key=your_api_key")
     //    .then(response => {

     //        this.results = response.data.resultes

     //    })
        // console.log(this.$ajax);
        // 免费开放接口 API 网址
        // https://blog.csdn.net/c__chao/article/details/78573737
        
        // Vue.axios.get("https://www.apiopen.top/weatherApi?city=上海")//无效（不知为何
        this.axios.get("https://www.apiopen.top/weatherApi?city=南京")
        // this.$http.get("https://www.apiopen.top/weatherApi?city=上海")

        //Vue.prototype.$ajax = axios;
     	// this.$ajax.get("https://www.apiopen.top/weatherApi?city=上海")
     	
     	//定义了Axios,不知为何无效
     	// this.axios.Axios.get("https://www.apiopen.top/weatherApi?city=上海",{})
        .then(response => {
        	console.log(response);
        	console.log(this);
            this.weather = JSON.stringify(response.data.data);

        })
  		
    }
  },
  mounted() {
  	console.log("mounted");
  	this.getWeatherData();
  }
        
}
</script>