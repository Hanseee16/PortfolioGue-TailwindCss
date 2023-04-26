// dark mode
if (localStorage.getItem("color-theme") === "dark" || (!("color-theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
  document.documentElement.classList.add("dark");
} else {
  document.documentElement.classList.remove("dark");
}

var themeToggleDarkIcon = document.getElementById("theme-toggle-dark-icon");
var themeToggleLightIcon = document.getElementById("theme-toggle-light-icon");

// Change the icons inside the button based on previous settings
if (localStorage.getItem("color-theme") === "dark" || (!("color-theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
  themeToggleLightIcon.classList.remove("hidden");
} else {
  themeToggleDarkIcon.classList.remove("hidden");
}

var themeToggleBtn = document.getElementById("theme-toggle");

themeToggleBtn.addEventListener("click", function () {
  // toggle icons inside button
  themeToggleDarkIcon.classList.toggle("hidden");
  themeToggleLightIcon.classList.toggle("hidden");

  // if set via local storage previously
  if (localStorage.getItem("color-theme")) {
    if (localStorage.getItem("color-theme") === "light") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
    }

    // if NOT set via local storage previously
  } else {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
    }
  }
});

// nav link active
// 1. tangkap element dengan class menu
const menu = document.querySelector(".menu");

// 2. jika element dengan class menu diklik
menu.addEventListener("click", function (e) {
  // 3. maka ambil element apa yang diklik oleh user
  const targetMenu = e.target;

  // 4. lalu cek, jika element itu adalah link dengan class menu__link
  if (targetMenu.classList.contains("menu_active")) {
    // 5. maka ambil menu link yang aktif
    const menuLinkActive = document.querySelector("ul li a.active");

    // 6. lalu cek, Jika menu link active ada dan menu yang di klik user adalah menu yang tidak sama dengan menu yang aktif, (cara cek-nya yaitu dengan membandingkan value attribute href-nya)
    if (menuLinkActive !== null && targetMenu.getAttribute("href") !== menuLinkActive.getAttribute("href")) {
      // 7. maka hapus class active pada menu yang sedang aktif
      menuLinkActive.classList.remove("active");
    }

    // 8. terakhir tambahkan class active pada menu yang di klik oleh user
    targetMenu.classList.add("active");
  }
});
