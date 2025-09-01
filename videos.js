const modal = document.getElementById("videoModal");
const modalVideo = document.getElementById("modalVideo");
const closeModal = document.getElementById("closeModal");
const videoButtons = document.querySelectorAll(".video-btn");

// Open modal on button click
videoButtons.forEach(button => {
    button.addEventListener("click", () => {
        const videoSrc = button.getAttribute("data-video");
        modalVideo.src = videoSrc;
        modal.style.display = "block";
    });
});

// Close modal when X is clicked
closeModal.onclick = function() {
    modal.style.display = "none";
    modalVideo.src = "";
};

// Close modal when clicking outside content
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        modalVideo.src = "";
    }
};
