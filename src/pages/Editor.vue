<template>
    <div id="note-editor">
      <h3>三级页面 Editor</h3>
      <div><span>输入的值:</span><span>{{editNote}}</span></div>
      <div>输入框:<textarea  v-model="editNote" style="border:1px solid red"></textarea></div>
    </div>
</template>
<script>
    export default{
        name:'editor',
        data(){
            return {
                editNote:'editNote Value'
            }
        }
    }
</script>
<style>
#note-editor textarea {
  height: 100%;
  border: 0;
  border-radius: 0;
}
</style>