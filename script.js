const btn2 = document.querySelector(".btn2")


btn2.addEventListener("mouseover",()=> {
    const container = document.querySelector(".btn");
    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;

    // random position
    const x = Math.floor(Math.random() * containerWidth);
    const y = Math.floor(Math.random() * containerHeight);

    // position
    btn2.style.position = "absolute";
    btn2.style.top = `${y}px`;
    btn2.style.left = `${x}px`;
})
















