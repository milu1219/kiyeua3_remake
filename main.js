const messages = [
  "Ngô Thị Trang Anh", "Phạm Hoàng Anh", "Lê Nguyễn Hoàng Bảo Ân", "Huỳnh Tuấn Bảo", "Lê Duy Cường",
  "Lê Phan Hoàng Diệu", "Nguyễn Nhật Duy", "Trần Thanh Duy", "Nguyễn Ngô Lý Kim Dương", "Trần Hà Giang",
  "Nguyễn Ngọc Như Hà", "Nguyễn Thanh Ngọc Hân", "Lê Thị Yến Khoa", "Lê Trần Anh Khoa", "Nguyễn Cao Phúc Lộc",
  "Triệu Lộc", "Bùi Minh Luân", "Phạm Võ Ngọc Mai", "Huỳnh Bảo Ngân", "Phan Thị Tuyết Ngân",
  "Nguyễn Thị Diễm Ngọc", "Đặng Mai Phong Nhã", "Võ Trọng Nhân", "Lê Mai Tuyết Nhi", "Võ Thị Cẩm Nhung",
  "Nguyễn Thị Thu Oanh", "Dương Quang Phúc", "Huỳnh Thị Hồng Phượng", "Cao Yến Quyên", "Đặng Ngọc Như Quỳnh",
  "Lưu Thúy Quỳnh", "Phan Lê Như Quỳnh", "Lê Thị Ngân Tâm", "Đoàn Minh Tân", "Lê Trương Minh Thắng",
  "Trần Huỳnh Anh Thư", "Hữu Đức Tín", "Đoàn Ngọc Huyền Trân", "Lê Thị Huyền Trân", "Nguyễn Hồng Bảo Vy",
  "Nguyễn Tường Vy", "Phạm Kim Vy"
];

const wishes = [
  "Cảm ơn thầy cô vì tất cả!",
  "Biết ơn từng bài giảng, từng lời dạy!",
  "Em sẽ không quên những giờ học của thầy cô!",
  "Thầy cô – người hùng thầm lặng!",
  "Một đời nhớ ơn, một đời trân trọng.",
  "Tạm biệt, nhưng không quên!",
  "Mái trường còn đó, tụi em đã lớn rồi!",
  "Chia xa – nhưng tình cảm còn mãi!",
  "Thanh xuân gói gọn trong ba chữ: thầy – cô – lớp!",
  "Sẽ nhớ nhiều lắm…",
  "Cô giảng, em hiểu… nhưng bài kiểm tra thì không!",
  "Thầy ơi, lần sau cho đề dễ hơn nha!",
  "Cảm ơn cô đã 'gồng mình' vì tụi em!",
  "Lớp quậy… nhưng thương thầy cô thiệt!",
  "Đi học vì thầy cô, chứ không phải vì điểm!"
];

const icons = [
  "❤️", "⭐", "🌟", "✨", "🎉", "🎈", "💖", "🪐", "🚀", "🌠", "💫", "🧡", "💙", "💚", "💛", "💜",
  "🎵", "🎶", "🎓", "📚", "📝", "🌸", "🌻", "🌼", "🍀", "🍎", "🍉", "🦋", "🕊️", "🧸", "🎂", "🥇", "🏆"
];

const colorBase = ["#ff69b4", "#fff", "#2196f3"];
let currentColorIndex = 0;
let animationFrameId = null;
let lastSpawnTime = 0;
let spawnAccumulator = 0;

setInterval(() => {
  currentColorIndex = (currentColorIndex + 1) % colorBase.length;
}, 3000);

function getCurrentColorVariant() {
  return [
    colorBase[currentColorIndex],
    colorBase[(currentColorIndex + 1) % colorBase.length],
    colorBase[(currentColorIndex + 2) % colorBase.length]
  ];
}

function randomZ() {
  return Math.floor(Math.random() * 1000) * (Math.random() > 0.5 ? 1 : -1);
}

function depthCue(z) {
  const absZ = Math.abs(z);
  const scale = 1 - absZ / 1600;
  const opacity = 0.95 - absZ / 1800;
  return { scale: Math.max(0.4, scale), opacity: Math.max(0.3, opacity) };
}

function createFallingMessage(text) {
  const container = document.getElementById('messages-container');
  if (!container) return;

  const msg = document.createElement('div');
  msg.className = 'falling-message';
  msg.textContent = text;
  msg.style.fontSize = `${1.8 + Math.random() * 1.6}em`;
  msg.style.left = `${10 + Math.random() * 70}vw`;

  const z = randomZ();
  const { scale, opacity } = depthCue(z);
  msg.style.setProperty('--z', `${z}px`);
  msg.style.setProperty('--scale', scale.toFixed(3));
  msg.style.opacity = opacity.toFixed(3);

  const palette = getCurrentColorVariant();
  msg.style.setProperty('--color1', palette[0]);
  msg.style.setProperty('--color2', palette[1]);
  msg.style.setProperty('--color3', palette[2]);

  container.appendChild(msg);
  msg.addEventListener('animationend', () => msg.remove(), { once: true });
}

function createFallingIcon() {
  const container = document.getElementById('icons-container');
  if (!container) return;

  const icon = document.createElement('div');
  icon.className = 'falling-icon';
  icon.textContent = icons[Math.floor(Math.random() * icons.length)];
  icon.style.left = `${Math.random() * 95}vw`;
  icon.style.fontSize = `${1.2 + Math.random() * 2.2}em`;
  icon.style.animationDuration = `${2 + Math.random() * 3}s`;

  const z = randomZ();
  const { scale, opacity } = depthCue(z);
  icon.style.transform = `translateZ(${z}px) scale(${scale})`;
  icon.style.opacity = opacity.toFixed(3);

  container.appendChild(icon);
  icon.addEventListener('animationend', () => icon.remove(), { once: true });
}

function spawnEntities(timestamp) {
  if (!lastSpawnTime) {
    lastSpawnTime = timestamp;
  }

  const elapsed = timestamp - lastSpawnTime;
  lastSpawnTime = timestamp;
  spawnAccumulator += elapsed;

  while (spawnAccumulator >= 90) {
    spawnAccumulator -= 90;
    const rand = Math.random();
    if (rand < 0.12) {
      createFallingIcon();
    } else if (rand < 0.7) {
      createFallingMessage(messages[Math.floor(Math.random() * messages.length)]);
    } else {
      createFallingMessage(wishes[Math.floor(Math.random() * wishes.length)]);
    }
  }

  animationFrameId = window.requestAnimationFrame(spawnEntities);
}

const canvas = document.getElementById('star-bg');
const ctx = canvas ? canvas.getContext('2d') : null;
let stars = [];

function resizeCanvas() {
  if (!canvas || !ctx) return;
  const dpr = window.devicePixelRatio || 1;
  canvas.width = Math.round(window.innerWidth * dpr);
  canvas.height = Math.round(window.innerHeight * dpr);
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  createStars();
}

function createStars() {
  if (!canvas || !ctx) return;
  stars = [];
  const width = window.innerWidth;
  const height = window.innerHeight;
  for (let i = 0; i < 100; i++) {
    stars.push({
      x: Math.random() * width,
      y: Math.random() * height,
      z: Math.random() * 800 + 200,
      o: Math.random() * 0.7 + 0.3,
      r: Math.random() * 1.2 + 0.3
    });
  }
}

function drawStars() {
  if (!canvas || !ctx) return;
  const width = window.innerWidth;
  const height = window.innerHeight;
  ctx.clearRect(0, 0, width, height);

  for (const star of stars) {
    ctx.save();
    ctx.globalAlpha = star.o;
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.r, 0, 2 * Math.PI);
    ctx.fillStyle = '#fff';
    ctx.shadowColor = '#fff';
    ctx.shadowBlur = 8;
    ctx.fill();
    ctx.restore();

    star.y += 2.4 - star.z / 500;
    star.x += 0.2 - star.z / 2000;

    if (star.y - star.r > height || star.x > width + 5 || star.x < -5) {
      star.x = Math.random() * width;
      star.y = -star.r;
      star.z = Math.random() * 800 + 200;
    }
  }

  window.requestAnimationFrame(drawStars);
}

window.addEventListener('resize', resizeCanvas);
resizeCanvas();
drawStars();
window.requestAnimationFrame(spawnEntities);