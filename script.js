(function () {
  var header = document.querySelector(".header");
  var btn = document.querySelector(".menu-btn");
  var menu = document.getElementById("menu");
  var label = btn.querySelector(".menu-label");
  var waFloat = document.querySelector(".wa-float");
  var hero = document.querySelector(".hero");

  // menú mobile
  function setMenu(open) {
    btn.setAttribute("aria-expanded", String(open));
    label.textContent = open ? "Cerrar" : "Menú";
    menu.hidden = !open;
    menu.classList.toggle("open", open);
    document.body.classList.toggle("menu-open", open);
    if (open) menu.querySelector("a").focus();
  }
  btn.addEventListener("click", function () {
    setMenu(btn.getAttribute("aria-expanded") !== "true");
  });
  menu.addEventListener("click", function (e) {
    if (e.target.closest("a")) setMenu(false);
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !menu.hidden) { setMenu(false); btn.focus(); }
  });
  window.matchMedia("(min-width: 900px)").addEventListener("change", function (mq) {
    if (mq.matches && !menu.hidden) setMenu(false);
  });

  // borde del header y botón flotante
  function onScroll() {
    var y = window.scrollY;
    header.classList.toggle("scrolled", y > 8);
    waFloat.classList.toggle("show", y > hero.offsetHeight * 0.8);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // aparición suave al entrar en pantalla
  var items = document.querySelectorAll(".rv");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    items.forEach(function (el) { io.observe(el); });
  } else {
    items.forEach(function (el) { el.classList.add("in"); });
  }

  document.getElementById("year").textContent = new Date().getFullYear();
})();
