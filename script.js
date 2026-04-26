document.addEventListener("DOMContentLoaded", function () {

  const btn = document.getElementById("touchBtn");

  // Sirf click use kar (mobile me bhi kaam karega)
  btn.onclick = function () {
    document.getElementById("title").style.display = "none";
    document.getElementById("text").style.display = "none";
    btn.style.display = "none";
    document.getElementById("options").style.display = "block";
  };

});

// truth → marry
function nextPage() {
  document.getElementById("options").style.display = "none";
  document.getElementById("final").style.display = "block";
}

// final → I LOVE YOU
function showLove() {
  document.getElementById("final").style.display = "none";
  document.getElementById("loveMsg").style.display = "block";
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