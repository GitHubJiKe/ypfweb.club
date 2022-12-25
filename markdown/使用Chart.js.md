---
title: 使用Chart.js
subtitle: 如果想要在markdown内使用Chart.js该怎么实现呢？那就来探索一下吧
intro: 这是一个探索Chart.js在markdown中使用的案例
date: 2022/12/25 11:40
chart: true
---

# 使用 Chart.js

## What is Chart.js

> [Chart.js](https://www.chartjs.org/) Simple yet flexible JavaScript charting library for the modern web

## Use Chart.js in markdown

<canvas id="myChart"></canvas>

<script>
  const ctx = document.getElementById('myChart');

  new Chart(ctx, {
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
  });
</script>

### First Step

```javascript
// in markdown file, add chart flag
---
title: xxx,
subtitle: xxx,
intro: xxx,
chart: true // this line
---
```

### Second Step

```javascript
// modify convert code
const content = await ejs.renderFile(
  Path.resolve(__dirname, "./template.ejs"),
  {
    content: htmlContent,
    title: metaData["title"],
    date: metaData["date"],
    chart: metaData["chart"], // this line
  }
);
```

### Third Step

```javascript
// use ejs to insert chart.js resource
<% if (chart) { %>
<script src="//bucket2023.oss-cn-hangzhou.aliyuncs.com/javascript/chart.js"></script>
<% } %>
```

### Finally

```html
// write down chart.js code in markdown
<canvas id="myChart"></canvas>

<script>
  const ctx = document.getElementById("myChart");

  new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
      datasets: [
        {
          label: "# of Votes",
          data: [12, 19, 3, 5, 2, 3],
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
</script>
```

## Demo Show

> Pie Chart Demo

<canvas id="pieChart"></canvas>

<script>
const ctx2 = document.getElementById("pieChart");
new Chart(ctx2, {
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
})
</script>

### Code

```html
<canvas id="pieChart"></canvas>

<script>
  const ctx2 = document.getElementById("pieChart");
  new Chart(ctx2, {
    type: "pie",
    data: {
      labels: ["Red", "Blue", "Yellow"],
      datasets: [
        {
          label: "My First Dataset",
          data: [300, 50, 100],
          backgroundColor: [
            "rgb(255, 99, 132)",
            "rgb(54, 162, 235)",
            "rgb(255, 205, 86)",
          ],
          hoverOffset: 4,
        },
      ],
    },
  });
</script>
```

感谢阅读
