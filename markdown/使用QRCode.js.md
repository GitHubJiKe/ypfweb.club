---
title: QRCode.js
subtitle: JS生成二维码的妙招
intro: 使用开源库QRCode.js生成二维码
date: 2022/12/30 20:00
---

# QRCode.js

今天介绍一个开源库[QRCode.js](https://davidshimjs.github.io/qrcodejs/)，该库可以让你非常方便快捷的生成二维码

## 使用

这里推荐使用[CDNJS](https://cdnjs.com/libraries/qrcodejs)源引入，如下代码

```html
<script src="https://cdnjs.com/libraries/qrcodejs"></script>
```

### 基础用法

QRCode 是挂在 window 下的一个全局构造函数，可以直接像下面代码那样使用

```html
<div id="qrcode"></div>
<script type="text/javascript">
  new QRCode(
    document.getElementById("qrcode"),
    "http://jindo.dev.naver.com/collie"
  );
</script>
```

当然你还可以添加一些配置项

```html
<div id="qrcode"></div>
<script type="text/javascript">
  var qrcode = new QRCode(document.getElementById("qrcode"), {
    text: "http://jindo.dev.naver.com/collie",
    width: 128,
    height: 128,
    colorDark: "#000000",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H,
  });
</script>
```

当然也可以调用 qrcode 下的方法

```js
qrcode.clear(); // clear the code.
qrcode.makeCode("http://naver.com"); // make another code.
```

### Demo

<p class="codepen" data-height="300" data-default-tab="html,result" data-slug-hash="yLqOjjz" data-user="PeterYuan" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/PeterYuan/pen/yLqOjjz">
  Cross-browser QRCode</a> by Peter (<a href="https://codepen.io/PeterYuan">@PeterYuan</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>
