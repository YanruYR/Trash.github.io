// 模組化載入 nav 並初始化 dropdown hover
async function loadNav() {
  const navContainer = document.getElementById("nav");
  const nav = await fetch("./nav.html");
  const navhtml = await nav.text();
  navContainer.innerHTML = navhtml;

  const footerContainer = document.getElementById("footer");
  const footer = await fetch("./footer.html");
  const footerhtml = await footer.text();
  footerContainer.innerHTML = footerhtml;

  // 初始化 dropdown hover
  initDropdownHover();
}

function initDropdownHover() {
  const dropdowns = document.querySelectorAll(".has-dropdown");

  dropdowns.forEach(li => {
    li.addEventListener("mouseenter", () => {
      const menu = li.querySelector(".dropdown");
      if (menu) {
        menu.style.visibility = "visible";
        menu.style.opacity = "1";
      }
    });
    li.addEventListener("mouseleave", () => {
      const menu = li.querySelector(".dropdown");
      if (menu) {
        menu.style.visibility = "hidden";
        menu.style.opacity = "0";
      }
    });
  });
}

// 啟動載入
loadNav();
