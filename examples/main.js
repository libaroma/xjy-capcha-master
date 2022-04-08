
import captcha from "../packages/captcha";
import Vue from 'vue'
import App from './App.vue'
import xjyCaptchaMaster1 from "xjy-captcha-master1"
Vue.config.productionTip = false
Vue.use(xjyCaptchaMaster1)
new Vue({
    render: h => h(App),
}).$mount('#app')
