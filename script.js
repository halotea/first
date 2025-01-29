document.addEventListener("mousemove", function(event) {
    let box = document.querySelector(".box");
    let xAxis = (window.innerWidth / 2 - event.clientX) / 25;
    let yAxis = (window.innerHeight / 2 - event.clientY) / 25;

    box.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});
