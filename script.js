/* script.js */
document.addEventListener("DOMContentLoaded", () => {
  const roseRain = document.querySelector(".rose-rain");
  const holiColors = document.querySelector(".holi-colors");
  const holiPalette = [
    "#FF6633",
    "#FFB399",
    "#FFFF99",
    "#80FF80",
    "#CCFFFF",
    "#9999FF",
    "#FF99CC",
  ];
  const giftBox = document.getElementById("giftBox");

  function createPetal() {
    const petal = document.createElement("img");
    petal.src = "rose-petal.png";
    petal.className = "petal";

    const randomSize = Math.random() * 20 + 15;
    petal.style.width = randomSize + "px";
    petal.style.left = Math.random() * window.innerWidth + "px";

    roseRain.appendChild(petal);

    gsap.to(petal, {
      y: window.innerHeight,
      rotation: 360,
      scale: 0.8,
      duration: 10,
      ease: "linear",
      onComplete: () => petal.remove(),
    });
  }

  function createHoliColor() {
    const color = document.createElement("div");
    color.className = "holi-color";
    color.style.backgroundColor =
      holiPalette[Math.floor(Math.random() * holiPalette.length)];
    color.style.left = Math.random() * 100 + "vw";
    color.style.top = Math.random() * 100 + "vh";
    holiColors.appendChild(color);
  }

  giftBox.addEventListener("click", () => {
    window.location.href = "animation.html"; // Redirect to puzzle page
  });

  setInterval(createPetal, 150);
  setInterval(createHoliColor, 300);
});
