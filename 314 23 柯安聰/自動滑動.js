   // 滑动方法
   function scroll(to, time) {
    $("#imgs").find("ul").stop().animate({left:  to +  "px"}, time)
}
// 初始化方法
$(function() {
    // 图片列表
    const imgList = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg']
    // 滑动速度
    const speed = 800
    // 获取div然后循环往里边插入ul、li、img
    let div = document.getElementById("imgs")
    let ul = document.createElement("ul")
    ul.style.left = div.offsetWidth + "px"
    ul.style.width = 260 * imgList.length + "px"
    div.appendChild(ul)
    let toLeft = div.offsetWidth - 260 * imgList.length
    for(i in imgList) {
        imgPath = imgList[i]
        let li = document.createElement("li")
        let img = document.createElement("img")
        img.src = imgPath
        li.appendChild(img)
        ul.appendChild(li)
    }
    let time = speed * imgList.length
    let time1 = parseInt( (20 - toLeft) / 260 * speed)
    scroll(toLeft, time)
    // 通过计时器控制循环左右滑动
    setTimeout("scroll(20, " + time1 + ")", time)
    setTimeout("scroll(" + toLeft + ", " + time1 + ")", time + time1)
    setTimeout("setInterval('scroll(" + 20 + ", " + time1 + ");', "+ time1 * 2 +")", time)
    setTimeout("setInterval('scroll(" + toLeft + ", " + time1 + ");', "+ time1 * 2 +")", time + time1)
});
