// timer + redirect
let time = 60;
let el = document.getElementById("timer");

let interval = setInterval(()=>{
time--;
let m = Math.floor(time/60);
let s = time % 60;
el.innerHTML = `${m}:${String(s).padStart(2,'0')}`;

if(time <= 0){
clearInterval(interval);
window.location.href="https://t.me/+Es_zpinelHpjYTI1";
}
},1000);

// button click sound
document.getElementById("btn").addEventListener("click", ()=>{
let audio = new Audio("https://www.soundjay.com/buttons/sounds/button-16.mp3");
audio.play();
});

// particles
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

for(let i=0;i<60;i++){
particles.push({
x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
r:Math.random()*2+1,
dx:Math.random()*1-0.5,
dy:Math.random()*1-0.5
});
}

function draw(){
ctx.clearRect(0,0,canvas.width,canvas.height);

particles.forEach(p=>{
ctx.beginPath();
ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
ctx.fillStyle="#00ffcc";
ctx.fill();

p.x+=p.dx;
p.y+=p.dy;

if(p.x<0||p.x>canvas.width) p.dx*=-1;
if(p.y<0||p.y>canvas.height) p.dy*=-1;
});

requestAnimationFrame(draw);
}

draw();
