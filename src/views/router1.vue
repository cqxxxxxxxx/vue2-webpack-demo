<template>
    <div>
        <h1>{{ msg }}</h1>
        <button @click="to_router2">to2</button>
    </div>
</template>

<script>
export default {
    data () {
        return {
            msg: 'router1 11111111111111'
        }
    },
    methods: {
        to_router2: function(){
            this.$router.push("/router2");
        }
    }
}
</script>
