const path = require("path")


function resolve(dir) {
    return path.join(__dirname, "..", dir)
}

module.exports = {
    runtimeCompiler:true,
    pages: {
        index: {
            entry: "examples/main.js",
            template: "public/index.html",
            filename: "index.html"
        }
    },
    chainWebpack: config => {
        config.module
            .rule("js")
            .include
            .add(resolve("packages"))
            .end()
            .use("babel")
            .loader("babel-loader")
            .tap(options => {
                return options
            })
    },
    css:{//css强制内联
        extract:false
    }

}
