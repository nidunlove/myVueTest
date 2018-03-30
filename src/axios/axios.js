import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios);
// Vue.prototype.$ajax = axios;

//参考：https://github.com/axios/axios
// 参考：https://www.cnblogs.com/zhouyangla/p/6753673.html

// axios.defaults.baseURL = 'https://api.example.com';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
//添加请求拦截器
axios.interceptors.request.use(function(config){
     //在发送请求之前做某事
     console.log("在发送请求之前做某事");
     return config;
   },function(error){
     //请求错误时做些事
     console.log("请求错误时做些事");
     return Promise.reject(error);
   });
 
//添加响应拦截器
axios.interceptors.response.use(function(response){
     //对响应数据做些事
     console.log("对响应数据做些事");
      return response;
   },function(error){
     //请求错误时做些事
     console.log("请求错误时做些事");
     return Promise.reject(error);
   });

//处理错误
// axios.get('/ user / 12345')
//    .catch(function(error){
//      if(error.response){
//        //请求已发出,但服务器使用状态代码进行响应
//        //落在2xx的范围之外
//        console.log(error.response.data);
//        console.log(error.response.status);
//        console.log(error.response.headers);
//      } else {
//        //在设置触发错误的请求时发生了错误
//        console.log('Error',error.message);
//      }}
//      console.log(error.config);
//    });

const Axios = axios.create({
	baseURL: 'https://some-domain.com/api/',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
});

export default Axios