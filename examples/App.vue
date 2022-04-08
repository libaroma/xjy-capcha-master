<template>
    <captcha @close="close" @fail="fail" @success="success" :img-list="['https://files.hyz.cool/files/photos/3298760b6d63211941cf6760539beb56.jpg']"/>
</template>

<script>
    import xjyCaptchaMaster1  from "xjy-captcha-master1"
    export default {
        components:{
          "captcha":xjyCaptchaMaster1.captcha
        },
        methods: {
            close() {
                console.log("close")
            },
            fail() {
                console.log("fail")
            },
            success() {
                console.log("success")
            }
        }
    }
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
