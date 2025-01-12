const canvas = document.getElementById("cw");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const cursor = {
  x: innerWidth / 2,
  y: innerHeight / 2,
  targetX: innerWidth / 2,
  targetY: innerHeight / 2,
  smoothness: 0.1, 
  trail: []
};

const circleSize = 6;
function drawCursorCircle() {
  context.beginPath();
  context.arc(cursor.x, cursor.y, circleSize, 0, Math.PI * 2);
  context.fillStyle = "rgba(255, 255, 255, 0.45)"; 
  context.fill();
}

function drawCursorTrail() {
  cursor.x += (cursor.targetX - cursor.x) * cursor.smoothness;
  cursor.y += (cursor.targetY - cursor.y) * cursor.smoothness;
  cursor.trail.push({ x: cursor.x, y: cursor.y });
  if (cursor.trail.length > 6) {
    cursor.trail.shift();
  }

  context.beginPath();
  for (let i = 0; i < cursor.trail.length - 1; i++) {
    const opacity = 1 - (i / cursor.trail.length); 
    context.moveTo(cursor.trail[i].x, cursor.trail[i].y);
    context.lineTo(cursor.trail[i + 1].x, cursor.trail[i + 1].y);
    context.strokeStyle = `rgba(255, 255, 255, ${opacity})`; 
    context.lineWidth = 4;
    context.stroke();
  }
}

addEventListener("mousemove", (e) => {
  cursor.targetX = e.clientX;
  cursor.targetY = e.clientY;
});

addEventListener("resize", () => {
  canvas.width = innerWidth;
  canvas.height = window.innerHeight;
});

function anim() {
  requestAnimationFrame(anim);
  context.clearRect(0, 0, canvas.width, canvas.height);
  drawCursorTrail();
  drawCursorCircle();
}

anim(); 
