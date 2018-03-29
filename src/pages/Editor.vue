<template>
    <div id="note-editor">
      <h3>Editor.vue</h3>
      <div>textarea:<textarea  v-model="editNote"></textarea></div>
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