---
title: 新语法编写 Chart.js
subtitle: 使用自定义的markdown语法插入Chart.js实例
intro: 通过编写showdown的扩展解析自定义语法，插入chart.js实例
date: 2023/01/01 14:04
chart: true
---

# 新语法编写 Chart.js

## 这是一个 Bar Chart

代码如下图：

![code](/assets/images/code.jpg)

```chart demo
{
    type: 'bar',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
}
```

## 这是一个 Pie Chart

```chart demo2
{
  type: 'pie',
  data: {
  labels: [
    'Red',
    'Blue',
    'Yellow'
  ],
  datasets: [{
    label: 'My First Dataset',
    data: [300, 50, 100],
    backgroundColor: [
      'rgb(255, 99, 132)',
      'rgb(54, 162, 235)',
      'rgb(255, 205, 86)'
    ],
    hoverOffset: 4
  }]
},
}
```

## 总结

通过 showdown 提供的 api,调用自己编写的扩展插件，解析自定义的 markdown 语法。代码如下：
![carbon](/assets/images/carbon.jpg)
