<template>
    <div id="notes-list">
        <h3>三级页面 notelist</h3>
        <div id="list-header">
            <h2>{{name}}|username</h2>
            <div class="btn-group">
                <button type="button" class="btn btn-primary" @click="myshow('all')">所有笔记</button>
                <button type="button" class="btn btn-primary" @click="myshow('favor')">喜欢的</button>
            </div>
        </div>
        <div class="container">
            <ul class="list-group">
               <li class="list-group-item" v-for="item in items">{{item.content}}</li class="list-group-item" >
            </ul>
        </div>
    </div>
</template>
<script>
    export default{
        name:'notelist',
        data(){
            return {
                name:"NoteList",
                items:[{
                    id:1,
                    content:"第一条消息"
                },{
                    id:2,
                    content:"第二条消息"
                }]
            }
        },
        methods:{
            myshow:function(type){
                console.log(type);
                alert(type);
            }
        }
        
    }
</script>
<style>
    #notes-list .container {
      height: calc(100% - 137px);
      max-height: calc(100% - 137px);
      overflow: auto;
     width: 100%;
     padding: 0;
}

#notes-list .container .list-group-item {
  border: 0;
  border-radius: 0;
}
</style>