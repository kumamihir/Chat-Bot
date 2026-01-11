const API_URL = "https://mihir007.app.n8n.cloud/webhook/ai-chat";

const chatBox = document.getElementById("chatBox");
const input = document.getElementById("userInput");
const sendBtn = document.getElementById("sendBtn");

function addMessage(text, type) {
  const msg = document.createElement("div");
  msg.className = `message ${type}`;
  msg.innerHTML = `<span>${text}</span>`;
  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
}

async function sendMessage() {
  const text = input.value.trim();
  if (!text) return;

  addMessage(text, "user");
  input.value = "";

  const thinkingMsg = document.createElement("div");
  thinkingMsg.className = "message ai";
  thinkingMsg.innerHTML = "<span>Thinking…</span>";
  chatBox.appendChild(thinkingMsg);
  chatBox.scrollTop = chatBox.scrollHeight;

  try {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ message: text })
    });

    if (!res.ok) {
      throw new Error(`HTTP error ${res.status}`);
    }

    const data = await res.json();
    console.log("AI RESPONSE:", data);

    thinkingMsg.remove();

    const reply =
      data.reply ||
      data.output ||
      data.text ||
      data.answer ||
      "No response from AI";

    addMessage(reply, "ai");

  } catch (err) {
    console.error(err);
    thinkingMsg.remove();
    addMessage("Error connecting to AI", "ai");
  }
}

sendBtn.onclick = sendMessage;
input.addEventListener("keydown", e => {
  if (e.key === "Enter") sendMessage();
});

/* -------- Sparkle background (unchanged) -------- */

const canvas = document.getElementById("sparkles");
const ctx = canvas.getContext("2d");

let w, h, particles = [];

function resize() {
  w = canvas.width = window.innerWidth;
  h = canvas.height = window.innerHeight;
}
window.onresize = resize;
resize();

for (let i = 0; i < 80; i++) {
  particles.push({
    x: Math.random() * w,
    y: Math.random() * h,
    r: Math.random() * 1.8 + 0.4,
    dx: Math.random() * 0.3,
    dy: Math.random() * 0.3
  });
}

function animate() {
  ctx.clearRect(0, 0, w, h);
  ctx.fillStyle = "rgba(255,255,255,0.6)";
  particles.forEach(p => {
    p.x += p.dx;
    p.y += p.dy;
    if (p.x > w) p.x = 0;
    if (p.y > h) p.y = 0;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fill();
  });
  requestAnimationFrame(animate);
}
animate();
