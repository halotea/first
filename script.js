document.addEventListener("DOMContentLoaded", () => {
    const box = document.querySelector(".box");
    const text = document.querySelector(".box h1");
    let isDragging = false;
    let offsetX = 0, offsetY = 0;

    function updateRotation(x, y) {
        let xAxis = (window.innerWidth / 2 - x) / 25;
        let yAxis = (window.innerHeight / 2 - y) / 25;
        box.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    }

    // Mouse movement for 3D effect
    document.addEventListener("mousemove", (event) => {
        if (!isDragging) updateRotation(event.clientX, event.clientY);
    });

    // Touch movement for 3D effect
    document.addEventListener("touchmove", (event) => {
        if (event.touches.length > 0 && !isDragging) {
            updateRotation(event.touches[0].clientX, event.touches[0].clientY);
        }
    });

    // Dragging text
    text.addEventListener("mousedown", (event) => {
        isDragging = true;
        offsetX = event.clientX - text.getBoundingClientRect().left;
        offsetY = event.clientY - text.getBoundingClientRect().top;
        text.style.transition = "none";
    });

    document.addEventListener("mousemove", (event) => {
        if (isDragging) {
            text.style.position = "absolute";
            text.style.left = `${event.clientX - offsetX}px`;
            text.style.top = `${event.clientY - offsetY}px`;
        }
    });

    document.addEventListener("mouseup", () => {
        isDragging = false;
        text.style.transition = "top 0.3s ease, left 0.3s ease";
    });

    // Touch Dragging
    text.addEventListener("touchstart", (event) => {
        isDragging = true;
        let touch = event.touches[0];
        offsetX = touch.clientX - text.getBoundingClientRect().left;
        offsetY = touch.clientY - text.getBoundingClientRect().top;
        text.style.transition = "none";
    });

    document.addEventListener("touchmove", (event) => {
        if (isDragging && event.touches.length > 0) {
            let touch = event.touches[0];
            text.style.position = "absolute";
            text.style.left = `${touch.clientX - offsetX}px`;
            text.style.top = `${touch.clientY - offsetY}px`;
        }
    });

    document.addEventListener("touchend", () => {
        isDragging = false;
        text.style.transition = "top 0.3s ease, left 0.3s ease";
    });

    // Smooth return when leaving
    document.addEventListener("mouseleave", () => {
        box.style.transition = "transform 0.5s ease";
        box.style.transform = "rotateY(0deg) rotateX(0deg)";
    });

    document.addEventListener("touchend", () => {
        box.style.transition = "transform 0.5s ease";
        box.style.transform = "rotateY(0deg) rotateX(0deg)";
    });
});
