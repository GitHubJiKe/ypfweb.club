const getReplacedContent = (id, config) =>
  `<canvas id="${id}"></canvas><script>new Chart(document.getElementById('${id}'), ${JSON.parse(
    config
  )});</script>`;
const myext = function () {
  var chartExt = {
    type: "lang",
    filter: (text, converter, options) => {
      let txt = text;
      const arr = text.match(/```chart([\s\S]*?)```/g);
      if (arr) {
        arr.forEach((v) => {
          const arr = v.split("```chart").filter((v) => !!v);
          const [content] = arr[0].split("```").filter((v) => !!v);
          const [idStr, ...rest] = content.split("\n").filter((v) => !!v);
          const res = getReplacedContent(
            idStr.trim(),
            JSON.stringify(rest.join(""))
          );
          txt = txt.replace(/```chart([\s\S]*?)```/, res);
        });
      }
      return txt;
    },
  };
  return [chartExt];
};

module.exports = myext;
