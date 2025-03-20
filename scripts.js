document.addEventListener("DOMContentLoaded", () => {
    /*** Custom Cursor Animation ***/
    const cursor = document.querySelector(".cursor");
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let cursorX = mouseX;
    let cursorY = mouseY;

    document.addEventListener("mousemove", (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    function moveCursor() {
        cursorX += (mouseX - cursorX) * 0.5;
        cursorY += (mouseY - cursorY) * 0.5;

        gsap.to(cursor, {
            x: cursorX,
            y: cursorY,
            duration: 0.3,
            ease: "power2.out"
        });

        requestAnimationFrame(moveCursor);
    }

    moveCursor();
});
