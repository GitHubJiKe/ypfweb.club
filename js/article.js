(() => {
  new Valine({
    el: "#vcomments",
    appId: "iYsqbsZ26zQeQBvytgFgR5bV-gzGzoHsz",
    appKey: "M9T21EKjPvtdxEvffOOMGsOK",
  });
  var view_width = document
    .getElementsByTagName("html")[0]
    .getBoundingClientRect().width;
  var _html = document.getElementsByTagName("html")[0];
  view_width > 375
    ? (_html.style.fontSize = 375 / 24 + "px")
    : (_html.style.fontSize = view_width / 24 + "px");
  const h1 = document.querySelector("h1");
  h1.setAttribute(
    "data-date",
    document.querySelector(`meta[name='date']`).getAttribute("content")
  );
  h1.classList.add("title");
  // google
  window.dataLayer = window.dataLayer || [];

  function gtag() {
    dataLayer.push(arguments);
  }
  gtag("js", new Date());

  gtag("config", "G-EHZ8V74593");

  hljs.highlightAll();

  const modalContainer = document.querySelector(".modal-mask");
  document.querySelector("#content").addEventListener(
    "click",
    (e) => {
      if (e.target.nodeName === "IMG") {
        const img = e.target.cloneNode(true);
        const modal = document.createElement("div");
        modal.addEventListener(
          "click",
          () => {
            document.body.removeChild(modal);
            document.body.style.overflow = "auto";
          },
          false
        );
        modal.classList.add("modal-mask");
        modal.append(img);
        document.body.append(modal);
        document.body.style.overflow = "hidden";
      }
    },
    false
  );

  document.querySelector(".shareicon").addEventListener(
    "click",
    () => {
      const qrcode = document.createElement("div");
      const button = document.createElement("button");
      button.innerText = "分享二维码";
      button.addEventListener(
        "click",
        (e) => {
          try {
            e.stopPropagation();
            const src = qrcode.querySelector("img").getAttribute("src");
            console.log("src:::", src);
            if (src) {
              const img = new Image();
              img.src = src;
              img.onload = function () {
                console.log("onload");
                const canvas = document.createElement("canvas");
                canvas.width = img.width;
                canvas.height = img.height;
                const ctx = canvas.getContext("2d");
                ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
                canvas.toBlob((blob) => {
                  console.log("blob:::", blob);
                  saveAs(blob, `${document.title}.png`);
                }, "img/png");
              };
            } else {
              const canvas = qrcode.querySelector("canvas");
              canvas.toBlob((blob) => {
                console.log("blob:::", blob);
                saveAs(blob, `${document.title}.png`);
              }, "img/png");
            }
          } catch (error) {
            console.error(error);
          }
        },
        false
      );
      qrcode.append(button);
      new QRCode(qrcode, location.href);
      const modal = document.createElement("div");
      modal.addEventListener(
        "click",
        () => {
          document.body.removeChild(modal);
          document.body.style.overflow = "auto";
        },
        false
      );
      modal.classList.add("modal-mask");
      modal.append(qrcode);
      document.body.append(modal);
      document.body.style.overflow = "hidden";
    },
    false
  );

  if (location.search.includes("vconsole=true")) {
    const vConsole = new window.VConsole();
  }
})();
