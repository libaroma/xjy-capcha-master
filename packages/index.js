import captcha from "./captcha";
const components =[
    captcha
]


const install = function (Vue){
    if(install.installed) return
    install.installed =true
    components.map(component =>Vue.component(component.name,component))
}
if(typeof window !=='undefined' && window.Vue){
    install(window.Vue)
}
export default {
    version:'0.1.0',
    install,
    captcha
}
