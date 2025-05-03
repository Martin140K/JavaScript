const canvas = document.querySelector(".gameCanvas");
const ctx = canvas.getContext("2d");
canvas.width = 1200;
canvas.height = 725;

const overlay = document.querySelector(".overlay");
const startBtn = document.querySelector(".startBtn");
const controlsDiv = document.querySelector(".controls");

let shootSound = new Audio("shoot.wav");
let hitSound = new Audio("hit.wav");
let gameMusic = new Audio("game-music.mp3");
shootSound.volume = 0.4;
hitSound.volume = 0.3;
gameMusic.loop = true;    
gameMusic.volume = 0.5;  

let keys = {};
let bullets = [];
let enemies = [];
let player;
let score = 0;
let gameOver = false;
let gameStarted = false;
let enemyDirection = 1;
let stars = [];
let boss = null;
let bossActive = false;
let bossBullets = [];


document.addEventListener("keydown", (e) => (keys[e.code] = true));
document.addEventListener("keyup", (e) => (keys[e.code] = false));

class Player {
  constructor() {
    this.width = 40;
    this.height = 60;
    this.x = canvas.width / 2 - this.width / 2 ;
    this.y = canvas.height - this.height - 10;
    this.speed = 5;
    this.color = "white";
  }

  draw() {
    ctx.fillStyle = this.color;
  
    ctx.beginPath();

    ctx.moveTo(this.x + this.width / 2, this.y);

    ctx.lineTo(this.x, this.y + this.height * 0.7);

    ctx.lineTo(this.x - this.width * 0.3, this.y + this.height);
    
    ctx.lineTo(this.x + this.width * 0.2, this.y + this.height * 0.9);

    ctx.lineTo(this.x + this.width * 0.8, this.y + this.height * 0.9);

    ctx.lineTo(this.x + this.width + this.width * 0.3, this.y + this.height);

    ctx.lineTo(this.x + this.width, this.y + this.height * 0.7);
    
    ctx.closePath();
    ctx.fill();

    ctx.fillStyle = "red";
    ctx.beginPath();
    ctx.arc(this.x + this.width / 2, this.y + this.height * 0.5, this.width * 0.15, 0, Math.PI * 2);
    ctx.fill();
  }

  update() {
    if ((keys["KeyA"] || keys["ArrowLeft"]) && this.x > 0) this.x -= this.speed;
    if ((keys["KeyD"] || keys["ArrowRight"]) && this.x + this.width < canvas.width) this.x += this.speed;
    // if ((keys["KeyW"] || keys["ArrowUp"]) && this.y > 0) this.y -= this.speed;
    // if ((keys["KeyS"] || keys["ArrowDown"]) && this.y + this.width < canvas.width) this.y += this.speed;
  }
}

class Bullet {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.width = 4;
    this.height = 10;
    this.speed = 7;
    this.color = "red";
  }

  draw() {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }

  update() {
    this.y -= this.speed;
  }
}

class Enemy {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.width = 30;
    this.height = 35;
    this.color = "#dddddd";
    this.alive = true;
  }

  draw() {
    if (this.alive) {
      ctx.fillStyle = this.color;
  
      ctx.beginPath();
      ctx.moveTo(this.x + this.width / 2, this.y + this.height + 4);

      ctx.lineTo(this.x, this.y + this.height * 0.4);

      ctx.lineTo(this.x - this.width * 0.2, this.y);
  
      ctx.lineTo(this.x + this.width / 2, this.y + this.height * 0.15);

      ctx.lineTo(this.x + this.width + this.width * 0.2, this.y);

      ctx.lineTo(this.x + this.width, this.y + this.height * 0.4);
  
      ctx.closePath();
      ctx.fill();

      ctx.fillStyle = "lime";
      ctx.beginPath();
      ctx.arc(this.x + this.width / 2, this.y + this.height * 0.5, this.width * 0.15, 0, Math.PI * 2);
      ctx.fill();
    }
  }
  
}

class Star {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 2;
    this.speed = Math.random() * 0.5 + 0.2;
  }

  update() {
    this.y += this.speed * 4;
    if (this.y > canvas.height) {
      this.y = 0;
      this.x = Math.random() * canvas.width;
    }
  }

  draw() {
    ctx.fillStyle = "white";
    ctx.fillRect(this.x, this.y, this.size, this.size);
  }
}

class Boss {
  constructor() {
    this.width = 400;
    this.height = 200;
    this.x = canvas.width / 2 - this.width / 2;
    this.y = 50;
    this.speed = 2;
    this.health = 250;
    this.direction = 1;
    this.shootCooldown = 50; 
  }

  draw() {
    ctx.save();
    ctx.translate(this.x + this.width / 2, this.y + this.height / 2);
    ctx.rotate(Math.PI); 

    ctx.beginPath();
    ctx.moveTo(0, -180);  
    ctx.lineTo(160, 90);   
    ctx.lineTo(50, 50);   
    ctx.lineTo(-50, 50);  
    ctx.lineTo(-160, 90);  
    ctx.closePath();

    ctx.fillStyle = "#555555";
    ctx.fill();
    ctx.strokeStyle = "purple";
    ctx.lineWidth = 3;
    ctx.stroke();

    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.arc(0, 10, 16, 0, Math.PI * 2);
    ctx.fill();

    ctx.beginPath();
    ctx.arc(0, -46, 24, 0, Math.PI * 2);
    ctx.fill();

    ctx.beginPath();
    ctx.arc(0, -100, 16, 0, Math.PI * 2);  
    ctx.fill();

    ctx.fillStyle = "red";
    ctx.beginPath();
    ctx.arc(0, 10, 12, 0, Math.PI * 2);  
    ctx.fill();

    ctx.beginPath();
    ctx.arc(0, -46, 20, 0, Math.PI * 2);
    ctx.fill();

    ctx.beginPath();
    ctx.arc(0, -100, 12, 0, Math.PI * 2); 
    ctx.fill();

    ctx.restore();

    ctx.fillStyle = "white";
    ctx.fillRect(this.x, this.y - 20, this.width, 10);
    ctx.fillStyle = "red";
    ctx.fillRect(this.x, this.y - 20, (this.health / 250) * this.width, 10);
  }

  update() {
    this.x += this.speed * this.direction;

    if (this.x <= 0 || this.x + this.width >= canvas.width) {
      this.direction *= -1.02;
      this.y += 25;
    }
  
    if (this.y + this.height + 60 >= player.y) {  
      hitSound.currentTime = 0;
      hitSound.play();
      gameOver = true;
      controlsDiv.style.display = "none";
      endGame("Prohráli jste!");
    }
    this.shootCooldown--;
    if (this.shootCooldown <= 0) {
      this.shoot();
      this.shootCooldown = Math.floor(Math.random() * 60) + 120 - ((250 - this.health) / 8); 
      shootSound.currentTime = 0;
      shootSound.play();
    }
  }
  shoot() {
    bossBullets.push(new BossBullet(this.x + this.width / 2, this.y + this.height));
  }
  
}

class BossBullet {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.width = 4;
    this.height = 1000;
    this.speed = 8;
    this.color = "red";
  }

  draw() {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }

  update() {
    this.y += this.speed;
  }
}

function resetGame() {
  bullets = [];
  enemies = [];
  score = 0;
  gameOver = false;
  enemyDirection = 1;
  stars = [];
  for (let i = 0; i < 1000; i++) {
    stars.push(new Star());
  }
  boss = null;
  bossActive = false;

  player = new Player();

  for (let row = 0; row < 10; row++) {
    for (let col = 0; col < 20; col++) {
      enemies.push(new Enemy(60 + col * 48, 30 + row * 40));
    }
  }
}

function updateEnemies() {
let shouldReverse = false;
for (let enemy of enemies) {
    if (!enemy.alive) continue;
    enemy.x += enemyDirection * 2;

    if (enemy.x <= 0 || enemy.x + enemy.width >= canvas.width) {
    shouldReverse = true;
    }

    if (enemy.y + enemy.height >= player.y) {
      hitSound.currentTime = 0;
      hitSound.play();
      gameOver = true;
      controlsDiv.style.display = "none";
      endGame("Prohráli jste!");
    }
  }

  if (shouldReverse) {
      enemyDirection *= -1;
      for (let enemy of enemies) {
      enemy.y += 10;
      }
  }
}

function checkCollisions() {
  for (let bullet of bullets) {
    for (let enemy of enemies) {
      if (
        enemy.alive &&
        bullet.x < enemy.x + enemy.width &&
        bullet.x + bullet.width > enemy.x &&
        bullet.y < enemy.y + enemy.height &&
        bullet.y + bullet.height > enemy.y
      ) {
        enemy.alive = false;
        bullet.y = -100;
        score += 10;
        hitSound.currentTime = 0;
        hitSound.play();
      }
    }
  }
}

function drawHUD() {
  ctx.fillStyle = "white";
  ctx.font = "16px Arial";
  ctx.fillText(`Skóre: ${score}`, 10, 20);
}

function gameLoop() {
  if (!gameStarted) return;

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  stars.forEach((star) => {
    star.update();
    star.draw();
    star.speed *= 1.0001;
  });

  player.update();
  player.draw();

  bullets.forEach((bullet, index) => {
    bullet.update();
    bullet.draw();
    if (bullet.y < 0) bullets.splice(index, 1);
  });

  if (!bossActive) {
    updateEnemies();
    enemies.forEach((enemy) => enemy.draw());

    checkCollisions();

    if (enemies.every((e) => !e.alive)) {
      boss = new Boss();
      bossActive = true;
    }
  } else {
    boss.update();
    boss.draw();

    for (let bullet of bullets) {
      if (
        bullet.x < boss.x + boss.width &&
        bullet.x + bullet.width > boss.x &&
        bullet.y < boss.y + boss.height &&
        bullet.y + bullet.height > boss.y
      ) {
        boss.health--;
        bullet.y = -100; 
        hitSound.currentTime = 0;
        hitSound.play();

        if (boss.health <= 0) {
          bullet.y = 1000;
          score += 500
          endGame("Vyhráli jste!");
          controlsDiv.style.display = "none";
          return; 
          
        }
      }
    }
    bossBullets.forEach((bullet, index) => {
      bullet.update();
      bullet.draw();
      
      if (
        bullet.x < player.x + player.width &&
        bullet.x + bullet.width > player.x &&
        bullet.y < player.y + player.height &&
        bullet.y + bullet.height > player.y
      ) {
        hitSound.currentTime = 0;
        hitSound.play();
        bullet.y += 1000;
        gameOver = true;
        controlsDiv.style.display = "none";
        endGame("Prohráli jste!");
      }
    
      if (bullet.y > canvas.height) {
        bossBullets.splice(index, 1);
      }
    });
  }

  drawHUD();

  if (gameOver) return;

  requestAnimationFrame(gameLoop);
}

function endGame(message) {
  gameMusic.pause();          
  gameMusic.currentTime = 0;    
  overlay.style.display = "flex";
  overlay.querySelector("h1").innerText = `${message}\nSkóre: ${score}`;
  startBtn.innerText = "Hrát znovu";
  gameStarted = false;
}

document.addEventListener("keydown", (e) => {
  if (e.code === "Space" || e.code === "Enter" && gameStarted) {
    bullets.push(new Bullet(player.x + player.width / 2 - 2, player.y));
    shootSound.currentTime = 0;
    shootSound.play();
  }
});

startBtn.addEventListener("click", () => {         
  resetGame();
  overlay.style.display = "none";
  gameStarted = true;
  gameMusic.currentTime = 0;   
  gameMusic.play();  
  gameLoop(); 
});