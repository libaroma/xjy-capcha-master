import captcha from "./src/captcha";

captcha.install = function (Vue) {
 Vue.component(captcha.name,captcha)
}
export default captcha
