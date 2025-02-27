// Explore best seller video cards
document.querySelectorAll(".hover-video").forEach(video => {
    video.addEventListener("mouseenter", () => video.play());
    video.addEventListener("mouseleave", () => video.pause());
});

