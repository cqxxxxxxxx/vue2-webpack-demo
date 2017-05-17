<template>
    <div>
        <h1 id="lalala">{{ msg }}</h1>
        <button @click="to_router1">to2</button>
    </div>
</template>

<script>
export default {
    data () {
        return {
            msg: 'router22222222222222222'
        }
    },
    methods: {
        to_router1: function(){
            this.$router.push("/router1");
        }
    }
}
</script>
<style scoped>
#lalala {
    background: yellow;
    height:50px;
    border-radius: 100px
}
</style>