<template>
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
</script>