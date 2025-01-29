document.addEventListener("DOMContentLoaded", () => {
    const box = document.querySelector(".box");

    function updateRotation(x, y) {
        let xAxis = (window.innerWidth / 2 - x) / 25;
        let yAxis = (window.innerHeight / 2 - y) / 25;
        box.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    }

    // Mouse movement
    document.addEventListener("mousemove", (event) => {
        updateRotation(event.clientX, event.clientY);
    });

    // Touch movement (for mobile)
    document.addEventListener("touchmove", (event) => {
        if (event.touches.length > 0) {
            updateRotation(event.touches[0].clientX, event.touches[0].clientY);
        }
    });

    // Smooth return to center when not moving
    document.addEventListener("mouseleave", () => {
        box.style.transition = "transform 0.5s ease";
        box.style.transform = "rotateY(0deg) rotateX(0deg)";
    });

    document.addEventListener("touchend", () => {
        box.style.transition = "transform 0.5s ease";
        box.style.transform = "rotateY(0deg) rotateX(0deg)";
    });
});
