window.onload = function() {
  if (localStorage.getItem("theme") == "dark") {
    let element = document.body;
    element.classList.toggle("dark-mode");
  } 
}

function menuFunction(x) {
  x.classList.toggle("change");
}

function scrollFunction(x) {
  document.body.scrollTop = x;
  document.documentElement.scrollTop = x;
  SmoothVerticalScrolling(myelement, 275, "center");
}

function toggleDarkMode() {
  let element = document.body;
  element.classList.toggle("dark-mode");
  localStorage.setItem("theme", "dark");
}

function toggleMenuBar() {
  if (document.body.scrollTop < 20 || document.documentElement.scrollTop < 20) {
    let element = document.body;
    element.classList.toggle("menu-bar");
  }
}
