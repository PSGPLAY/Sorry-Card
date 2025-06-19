document.querySelector(".gift").addEventListener("click", () => {
   document.getElementById("first").style.display = "none";
   document.getElementById("second").style.display = "block";
   document.getElementById("click-me").style.display = "none";
});

function back(){
   setTimeout(() => {
      document.getElementById("first").style.display = "block";
      document.getElementById("second").style.display = "none";
      document.getElementById("click-me").style.display = "block";
   }, 200);
}

window.addEventListener("load", () => {
  document.body.addEventListener("click", () => {
    document.getElementById("bg-music").play();
  }, { once: true });
});