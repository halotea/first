document.addEventListener("mousemove", function(event) {
    let cursor = document.querySelector(".cursor");
    cursor.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
});
