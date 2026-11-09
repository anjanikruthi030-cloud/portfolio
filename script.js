(function () {
  var root = document.documentElement;
  var btn = document.getElementById("themeToggle");
  var icon = document.getElementById("themeIcon");

  function apply(theme) {
    root.setAttribute("data-theme", theme);
    var dark = theme === "dark";
    icon.textContent = dark ? "☀" : "☾";
    btn.setAttribute("aria-label", dark ? "Switch to light theme" : "Switch to dark theme");
  }

  var saved = null;
  try { saved = localStorage.getItem("theme"); } catch (e) {}
  apply(saved || "dark");

  btn.addEventListener("click", function () {
    var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    apply(next);
    try { localStorage.setItem("theme", next); } catch (e) {}
  });

  document.getElementById("year").textContent = new Date().getFullYear();

  // Show a simple placeholder if profile.jpg is missing
  var photo = document.getElementById("photo");
  photo.addEventListener("error", function () {
    photo.removeAttribute("src");
    photo.alt = "Add your photo as profile.jpg";
  });
})();