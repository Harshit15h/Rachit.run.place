window.onload = function () {
  const btn = document.getElementById("toggleBtn");

  // Initial theme set
  if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("light");
    btn.textContent = "🌙";
  } else {
    btn.textContent = "☀️";
  }
};

// Yeh tere button ke onclick="toggle()" ke liye hai
function toggle() {
  const btn = document.getElementById("toggleBtn");

  document.body.classList.toggle("light");

  if (document.body.classList.contains("light")) {
    localStorage.setItem("theme", "light");
    btn.textContent = "🌙";
  } else {
    localStorage.setItem("theme", "dark");
    btn.textContent = "☀️";
  }
}
