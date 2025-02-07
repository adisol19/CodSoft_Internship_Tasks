document.querySelectorAll(".glass-box").forEach((box) => {
  const video = box.querySelector(".smoke-video");
  box.addEventListener("mouseenter", () => {
    video.play();
  });
  box.addEventListener("mouseleave", () => {
    video.pause();
    video.currentTime = 0;
  });
});
