const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const popSound = document.getElementById("popSound");

// Moving No button
noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * window.innerWidth * 0.6;
    const y = Math.random() * window.innerHeight * 0.6;
    noBtn.style.position = "absolute";
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});

// Heart explosion on Yes
yesBtn.addEventListener("click", () => {
    popSound.play();
    for (let i = 0; i < 10; i++) {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "❤️";
        document.body.appendChild(heart);

        heart.style.left = `${yesBtn.offsetLeft + Math.random() * 100}px`;
        heart.style.top = `${yesBtn.offsetTop + Math.random() * 100}px`;

        setTimeout(() => heart.remove(), 2000);
    }
});
