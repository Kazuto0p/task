document.addEventListener("DOMContentLoaded", () => {
    let currentIndex = 0;

    const showSlides = () => {
        const slides = document.getElementsByClassName("slide");
        
        // Hide all slides
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        // Increment index
        currentIndex++;
        if (currentIndex > slides.length) {
            currentIndex = 1; // Reset to first slide
        }

        // Show current slide
        slides[currentIndex - 1].style.display = "block";
    };

    // Start the slideshow
    setInterval(showSlides, 3000); // Change slide every 3 seconds
    showSlides(); // Show the first slide
});
