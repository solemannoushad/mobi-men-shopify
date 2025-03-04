// Explore best seller video cards
document.querySelectorAll(".hover-video").forEach(video => {
    video.addEventListener("mouseenter", () => video.play());
    video.addEventListener("mouseleave", () => video.pause());
});

const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
};

// Listen for URL changes
window.addEventListener("popstate", scrollToTop);
window.addEventListener("hashchange", scrollToTop);
