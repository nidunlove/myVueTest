<template>
    <div>
        <h3>二级页面 VUEtest</h3>
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
</script>