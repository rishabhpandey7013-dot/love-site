let timer;
const btn = document.getElementById("holdBtn");

// hold button
btn.addEventListener("mousedown", () => {
  timer = setTimeout(() => {
    document.getElementById("title").style.display = "none";
    document.getElementById("text").style.display = "none";
    btn.style.display = "none";
    document.getElementById("options").style.display = "block";
  }, 3000);
});

btn.addEventListener("mouseup", () => {
  clearTimeout(timer);
});

// next page
function nextPage() {
  document.getElementById("options").style.display = "none";
  document.getElementById("final").style.display = "block";
}

// hearts animation
setInterval(() => {
  let heart = document.createElement("div");
  heart.innerHTML = "💖";
  heart.classList.add("heart");
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 20 + 20 + "px";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);
}, 300);