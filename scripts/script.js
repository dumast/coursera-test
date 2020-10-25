var scrolling = false;

function menuFunction(x) {
    x.classList.toggle("change");
}

function scrollFunction(x) {
    document.body.scrollTop = x;
    document.documentElement.scrollTop = x;
    SmoothVerticalScrolling(myelement, 275, "center");
}

function toggleMenuBar() {
    let element = document.body;
    element.classList.toggle("menu-bar");
}