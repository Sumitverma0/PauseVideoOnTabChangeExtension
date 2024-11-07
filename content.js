document.addEventListener("visibilitychange", () => {
  const video = document.querySelector("video");
  console.log("Video element found:", video); // Log to verify the video element is found
  if (video) {
    if (document.hidden) {
      video.pause();
      console.log("Video paused due to tab change");
    } else {
      video.play();
      console.log("Video resumed due to tab change");
    }
  }
});
