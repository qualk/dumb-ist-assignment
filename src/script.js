const cursor = document.querySelector(".cursorcircle");
const hoverlinks = document.querySelectorAll("a");

document.body.addEventListener("mousemove", onMouseMove);

hoverlinks.forEach(hoverlink => {
  hoverlink.addEventListener("mouseenter", onMouseHover);
  hoverlink.addEventListener("mouseleave", onMouseHoverOut);
});

function onMouseMove(e) {
  gsap.to(cursor, { duration: 0.4, x: e.pageX - 16, y: e.pageY - 16 });
}

function onMouseHover() {
  gsap.to(cursor, { duration: 0.4, scale: 3 });
}

function onMouseHoverOut() {
  gsap.to(cursor, { duration: 0.4, scale: 1 });
}
