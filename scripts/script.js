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
}

function toggleMenuBar() {
  if (document.body.scrollTop < 20 || document.documentElement.scrollTop < 20) {
    let element = document.body;
    element.classList.toggle("menu-bar");
  }
}
