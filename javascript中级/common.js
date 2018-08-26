//时间格式化
function getDate(dt) {
    //获取年
    var year = dt.getFullYear();
    //获取月
    var month = dt.getMonth() + 1;
    //获取日
    var day = dt.getDate();
    //获取小时
    var hour = dt.getHours();
    //获取分钟
    var minute = dt.getMinutes();
    //获取秒
    var second = dt.getSeconds();

    month = month < 10 ? "0" + month : month;
    day = day < 10 ? "0" + day : day;
    hour = hour < 10 ? "0" + hour : hour;
    minute = minute < 10 ? "0" + minute : minute;
    second = second < 10 ? "0" + second : second;

    return year + "年" + month + "月" + day + "日 " + hour + ":" + minute + ":" + second;
}

//获取id
/**
 * 根据id属性的值，返回对应的标签的元素
 * @param id id属性的值，string类型
 * @returns {HTMLElement} 元素对象
 */
function my$(id) {
    return document.getElementById(id);
}

//兼容代码

//设置任意的标签中间的任意文本内容
function setInnerText(element, text) {
    //判断浏览器是否支持这个属性
    if (typeof element.textContent == "undefined") {//不支持
        element.innerText = text;
    } else {//支持这个属性
        element.textContent = text;
    }
}

//获取任意标签中间的文本内容
function getInnerText(element) {
    if (typeof element.textContent == "undefined") {
        return element.innerText;
    } else {
        return element.textContent;
    }
}