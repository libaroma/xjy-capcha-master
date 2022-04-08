export const randomlyGeneratedChineseCharacters = (num) => {
    let arr = []
    for (let i = 0; i < num; i++) {
        let str
        //汉字对应的unicode编码为u4e00-u9fa5转为10进制为19968-40869，先取随机数，再转为16进制
        str = '\\u' + (Math.floor(Math.random() * (40869 - 19968)) + 19968).toString(16)
        //在用正则操作数据后进行解码。注意：unescape() 函数在 JavaScript 1.5 版中已弃用。请使用 decodeURI() 或 decodeURIComponent() 代替。
        str = unescape(str.replace(/\\u/g, "%u"));
        arr.push(str)
    }
    return arr
}
const img = {
    width: 260,
    height: 270
}

const font = {
    width: 47,
    height: 54
}
export const randomlyPosition = (num) => {
    let arr = []
    for (let i = 0; i < num; i++) {
        var x = (parseInt((Math.random() * (img.width / num -  font.width)).toFixed(0)))+img.width* i / num
        var y = (parseInt((Math.random() * (img.height -  font.height)).toFixed(0)) )
        var r = 45 - parseInt((Math.random() * 90).toFixed(0))
        let position = {
            x, y, r,
            // range: {
            //     t: [
            //          x + Math.sin(r) * font.height - Math.cos(r) * font.width,
            //          y - Math.cos(r) * font.height - Math.sin(r) * font.width
            //     ],
            //     b: [
            //         x, y
            //     ],
            //     l: [
            //         x - Math.cos(r) * font.width,
            //         y - Math.sin(r) * font.width
            //     ],
            //     r: [
            //         x + Math.sin(r) * font.height ,
            //         y - Math.cos(r) * font.height
            //     ]
            // }
        }
        arr.push(position)
    }
    return arr.sort(function() {
        return .5 - Math.random();
    });
}

export const isInside = (point, vs) => {

    var x = point[0], y = point[1];

    var inside = false;
    for (var i = 0, j = vs.length - 1; i < vs.length; j = i++) {
        var xi = vs[i][0], yi = vs[i][1];
        var xj = vs[j][0], yj = vs[j][1];

        var intersect = ((yi > y) != (yj > y))
            && (x < (xj - xi) * (y - yi) / (yj - yi) + xi);
        if (intersect) inside = !inside;
    }

    return inside;
};
