function hideBurgerMunuPagesIfNecessary() {
    if (window.innerWidth > 765) {
        document.getElementById("borgar-munu_pages").style.display = "none";
    }
    else if (document.getElementById("borgar-munu_pages").style.display == "none") {
        document.getElementById("borgar-munu_pages").style.display = "block";
    };
}

function getScrollbarWidth() {

  // Creating invisible container
  const outer = document.createElement("div");
  outer.style.visibility = "hidden";
  outer.style.overflow = "scroll"; // forcing scrollbar to appear
  outer.style.msOverflowStyle = "scrollbar"; // needed for WinJS apps
  document.body.appendChild(outer);

  // Creating inner element and placing it in the container
  const inner = document.createElement("div");
  outer.appendChild(inner);

  // Calculating difference between container"s full width and the child width
  const scrollbarWidth = (outer.offsetWidth - inner.offsetWidth);

  // Removing temporary elements from the DOM
  outer.parentNode.removeChild(outer);
  return scrollbarWidth;
}

function adjustBurgerMenuIfScrollBar() {
    const width = getScrollbarWidth();
    if (width > 0) {
        document.getElementById("borgar-munu_toggle").style.marginLeft = (50 - width).toString(10) + "px";
    };
}


window.onload = adjustBurgerMenuIfScrollBar();

window.onresize = hideBurgerMunuPagesIfNecessary();
