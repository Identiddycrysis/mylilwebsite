const container = document.getElementById("orbitContainer");
const items = Array.from(document.querySelectorAll(".orbit-item"));

let centerX = window.innerWidth / 2;
let centerY = window.innerHeight / 2;
let radius = window.outerWidth / 3;
let rotation = 0;
const speed = 0.01;

window.addEventListener("resize", () => {
  centerX = window.innerWidth / 2;
  centerY = window.innerHeight / 2;
  radius = window.outerWidth / 3
});

function animate() {
  const angleStep = (2 * Math.PI) / items.length;

  items.forEach((el, i) => {
    const angle = rotation + i * angleStep;
    const x = centerX + radius * Math.cos(angle);
    const y = centerY + radius * Math.sin(angle);
    el.style.left = `${x}px`;
    el.style.top = `${y}px`;
  });

  rotation += speed;
  requestAnimationFrame(animate);
}

animate();