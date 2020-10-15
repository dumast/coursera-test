function menuFunction(x) {
  x.classList.toggle("change");
}

function scrollFunction(x) {
  document.body.scrollTop = x;
  document.documentElement.scrollTop = x;
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

function SmoothHorizontalScrolling(e, time, amount, start) {
    var eAmt = amount / 100;
    var curTime = 0;
    var scrollCounter = 0;
    while (curTime <= time) {
        window.setTimeout(SHS_B, curTime, e, scrollCounter, eAmt, start);
        curTime += time / 100;
        scrollCounter++;
    }
}

function SHS_B(e, sc, eAmt, start) {
    e.scrollLeft = (eAmt * sc) + start;
}
