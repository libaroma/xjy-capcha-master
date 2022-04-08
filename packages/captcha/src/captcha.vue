<template>
    <div class="xjy-captcha">
        <div class="xjy-captcha-box">
            <div class="xjy-captcha-header">
                <span>请<span style="text-decoration: underline;color:rgb(15 158 201);">依次</span>点击:<span
                        style="font-size: 20px;font-weight: bolder" v-if="charactersList">{{charactersList?charactersList.join("、"):''}}</span></span>
                <i class="icon-close xjy-captcha-icon" @click="close" alt="关闭"/>
            </div>
            <div class="xjy-captcha-main" id="xjy-captcha-main" v-if="charactersList">
                <img class="xjy-captcha-img" id="xjy-captcha-img" :src="imgUrl" @click="addTag">
                <span @click="addTag" v-for="(item,index) in charactersList?charactersList:[]"
                      :style="
                      'text-shadow: 0px 0px 10px red;' +
                      'color:white;' +
                      'position:fixed;' +
                      'font-size:35px;' +
                      'margin-top: '+positionInfo[index].y+'px;' +
                      'margin-left:'+positionInfo[index].x+'px;' +
                      'transform: rotateZ('+positionInfo[index].r+'deg);'"
                ><span>{{item}}</span></span>
            </div>
            <div class="xjy-captcha-footer">
                <i class="icon-refresh xjy-captcha-icon" @click="refresh"/>
                <span v-if="result.isVerified">验证{{result.flag?"成功":"失败"}}</span>
                <button class="xjy-button" @click="verify">确定</button>
            </div>
        </div>
    </div>
</template>

<script>
    import "./css/iconfont.css"
    import {Constance} from "./js/Constance";
    import {randomlyGeneratedChineseCharacters, randomlyPosition} from "./js/utils";
    import {ref} from "vue"

    export default {
        name: "captcha",
        props: {
            imgList: {
                type: Array,
                default: () => Constance.imgList
            }
        },
        data: function () {
            return {
                num: 3,
                imgUrl: "",
                charactersList: [],
                positionInfo: [],
                tagList: [],
                result: {}
            }
        },
        // setup(props, context) {
        //     var {emit} = context
        //     var imgUrl = ref(props.imgList[(Math.random() * (props.imgList.length - 1)).toFixed(0)])
        //     var num = ref(parseInt((Math.random() * 2).toFixed(0)) + 2)
        //     var charactersList = ref(randomlyGeneratedChineseCharacters(num.value))
        //     var positionInfo = ref(randomlyPosition(num.value))
        //     var tagList = ref([]), result = ref({})
        //     // var timer =ref(setTimeout(()=>{},30000))
        //
        //     function init() {
        //         imgUrl.value = props.imgList[(Math.random() * (props.imgList.length - 1)).toFixed(0)]
        //         num .value= parseInt((Math.random() * 2).toFixed(0)) + 2
        //         charactersList.value = randomlyGeneratedChineseCharacters(num.value)
        //         positionInfo .value= randomlyPosition(num.value)
        //     }
        //     console.log(imgUrl)
        //     console.log(num)
        //     console.log(charactersList)
        //     console.log(positionInfo)
        //     function close() {
        //         emit("close")
        //     }
        //
        //     function refresh() {
        //         init()
        //         onremove({target: {id: "xjy-tag-0"}})
        //         result.value = {}
        //     }
        //
        //     function addTag(e) {
        //         var main = document.getElementById("xjy-captcha-main")
        //
        //         var img = document.getElementById("xjy-captcha-img")
        //         var top = e.clientY - img.offsetTop - 12.5
        //         var left = e.clientX - img.offsetLeft - 12.5
        //         var id = "xjy-tag-" + (tagList.value.length)
        //         var span
        //         if (tagList.value.length < num.value) {
        //             tagList.value.push({id, e, value: e.target.innerText})
        //             span = document.createElement("span")
        //         } else {
        //             id = "xjy-tag-" + (tagList.value.length - 1)
        //             tagList.value[num.value - 1] = {id, e, value: e.target.innerText}
        //             span = document.getElementById(id)
        //         }
        //         span.style =
        //             'box-shadow: 0 0 1px 1px;' +
        //             'color:white;' +
        //             'background:#00AAAA;' +
        //             'position:fixed;font-size:20px;' +
        //             'margin-top: ' + top + 'px;' +
        //             'margin-left:' + left + 'px;' +
        //             'border-radius: 100%; ' +
        //             'width: 25px; ' +
        //             'height: 25px; ' +
        //             'line-height: 25px;'
        //         span.onclick = (e) => onremove(e)
        //         span.id = id
        //         span.innerText = tagList.value.length
        //         main.appendChild(span)
        //     }
        //
        //     function onremove(e) {
        //         if (tagList.value.length <= 0) return
        //         var id = parseInt(e.target.id.split("-")[2])
        //         var main = document.getElementById("xjy-captcha-main")
        //         var len = tagList.value.length
        //         if (len - 1 > id) {
        //             for (id; id < len; id++) {
        //                 var span = document.getElementById("xjy-tag-" + id)
        //                 main.removeChild(span)
        //                 tagList.value.pop()
        //             }
        //         } else {
        //             var span = document.getElementById("xjy-tag-" + id)
        //             main.removeChild(span)
        //             tagList.value.splice(id - 1, 1)
        //         }
        //     }
        //
        //     function verify() {
        //
        //         if (tagList.value.length !== charactersList.value.length) {
        //             return
        //         }
        //         result.value = doVerify()
        //         if (result.value.isVerified && result.value.flag) {
        //             emit("success")
        //         } else {
        //             emit("fail")
        //         }
        //
        //         function doVerify() {
        //             var flag = true
        //             charactersList.value.forEach((item, index) => {
        //                 if (tagList.value[index].value !== item) {
        //                     flag = false
        //                     return
        //                 }
        //             })
        //             return {
        //                 isVerified: true,
        //                 flag
        //             }
        //         }
        //     }
        //
        //     return {
        //         imgUrl,
        //         num,
        //         charactersList,
        //         positionInfo,
        //         result: {},
        //         tagList: [],
        //         init,
        //         close,
        //         refresh,
        //         addTag,
        //         onremove,
        //         verify
        //     }
        // },
        mounted() {
            // console.log(this)
            this.init()
        },
        methods: {

            init() {
                this.imgUrl = this.imgList[(Math.random() * (this.imgList.length - 1)).toFixed(0)]
                this.num = parseInt((Math.random() * 2).toFixed(0)) + 2
                this.charactersList = randomlyGeneratedChineseCharacters(this.num)
                this.positionInfo = randomlyPosition(this.num)
            },
            close() {
                this.$emit("close")
            },
            refresh() {
                this.init()
                this.onremove({target: {id: "xjy-tag-0"}})
                this.result = {}
            },
            addTag(e) {
                var main = document.getElementById("xjy-captcha-main")

                var img = document.getElementById("xjy-captcha-img")
                var top = e.clientY - img.offsetTop - 12.5
                var left = e.clientX - img.offsetLeft - 12.5
                var id = "xjy-tag-" + (this.tagList.length)
                var span
                if (this.tagList.length < this.num) {
                    this.tagList.push({id, e, value: e.target.innerText})
                    span = document.createElement("span")
                } else {
                    id = "xjy-tag-" + (this.tagList.length - 1)
                    this.tagList[this.num - 1] = {id, e, value: e.target.innerText}
                    span = document.getElementById(id)
                }
                span.style =
                    'box-shadow: 0 0 1px 1px;' +
                    'color:white;' +
                    'background:#00AAAA;' +
                    'position:fixed;font-size:20px;' +
                    'margin-top: ' + top + 'px;' +
                    'margin-left:' + left + 'px;' +
                    'border-radius: 100%; ' +
                    'width: 25px; ' +
                    'height: 25px; ' +
                    'line-height: 25px;' +
                    'text-align: center;'
                span.onclick = (e) => this.onremove(e)
                span.id = id
                span.innerText = this.tagList.length
                main.appendChild(span)
            },
            onremove(e) {
                if (this.tagList.length <= 0) return
                var id = parseInt(e.target.id.split("-")[2])
                var main = document.getElementById("xjy-captcha-main")
                var len = this.tagList.length
                if (len - 1 > id) {
                    for (id; id < len; id++) {
                        var span = document.getElementById("xjy-tag-" + id)
                        main.removeChild(span)
                        this.tagList.pop()
                    }
                } else {
                    var span = document.getElementById("xjy-tag-" + id)
                    main.removeChild(span)
                    this.tagList.splice(id - 1, 1)
                }
            },
            verify() {
                var that = this

                if (that.tagList.length !== that.charactersList.length) {
                    return
                }
                that.result = doVerify()
                if (that.result.isVerified && that.result.flag) {
                    that.$emit("success")
                } else {
                    that.$emit("fail")
                }

                function doVerify() {
                    var flag = true
                    that.charactersList.forEach((item, index) => {
                        if (that.tagList[index].value !== item) {
                            flag = false
                            return
                        }
                    })
                    return {
                        isVerified: true,
                        flag
                    }
                }
            }

        }
    }
</script>

<style scoped>
    .xjy-captcha {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        display: flex;
        background: #00000087;
    }

    .xjy-captcha-box {
        width: 280px;
        height: 360px;
        background: white;
        border-radius: 3px;
        box-shadow: 0 0 13px 0px gainsboro;
        margin: auto;
        transition: all .8s ease-in-out;
    }

    .xjy-captcha-header {
        height: 40px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 0 10px;
    }

    .xjy-captcha-main {
        width: 260px;
        height: 270px;
        margin: 0 10px;
        display: flex;
        cursor: pointer;
    }

    .xjy-captcha-main .xjy-captcha-img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .xjy-captcha-footer {
        height: 50px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 0 10px;
    }

    .xjy-button {
        outline: none;
        border: none;
        padding: 5px 15px;
        font-size: 18px;
        color: #ffffff;
        background: #2ea0ff;
        border-radius: 2px;

    }

    .xjy-button:active {
        opacity: 0.6;
    }

    .xjy-captcha-icon {
        font-size: 22px;
        color: #105aa3;
        cursor: pointer;
    }

    .xjy-captcha-icon:active {
        opacity: 0.6;
    }
</style>
