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

function SmoothVerticalScrolling(e, time, where) {
    var eTop = e.getBoundingClientRect().top;
    var eAmt = eTop / 100;
    var curTime = 0;
    while (curTime <= time) {
        window.setTimeout(SVS_B, curTime, eAmt, where);
        curTime += time / 100;
    }
}

function SVS_B(eAmt, where) {
    if(where == "center" || where == "")
        window.scrollBy(0, eAmt / 2);
    if (where == "top")
        window.scrollBy(0, eAmt);
}
