/// CURSOR DESIGN JS

document.addEventListener("DOMContentLoaded", () => {
    /* ---- Custom Cursor ---- */
    const cursor = document.querySelector(".cursor");

    document.addEventListener("mousemove", (e) => {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
    });


//// SLIDER TRANSITION JS
    /* ---- Hero Slider ---- */
    const slides = document.querySelectorAll(".hero-slide");
    const prevButton = document.querySelector(".hero-prev");
    const nextButton = document.querySelector(".hero-next");
    const title = document.getElementById("hero-title");

    let currentIndex = 0;
    let slideInterval;

    // Slide Titles (Update Based on Images)
    const slideTitles = [
        "3 Strategies to Optimize Telehealth Adoption & Utilization",
        "Innovative Approaches to Healthcare Data Management",
        "The Future of Digital Learning in Higher Education",
        "How AI is Transforming Workforce Training",
        "Scaling Volunteer Impact Through Technology"
    ];

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove("active");
            slide.style.opacity = "0";
        });

        slides[index].classList.add("active");
        slides[index].style.opacity = "1";

        // Update Title
        title.textContent = slideTitles[index];

        currentIndex = index;
    }

    function nextSlide() {
        let newIndex = (currentIndex + 1) % slides.length;
        showSlide(newIndex);
    }

    function prevSlide() {
        let newIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(newIndex);
    }

    // Auto Slide Function
    function startSlideShow() {
        slideInterval = setInterval(nextSlide, 5000); // Change every 5 seconds
    }

    // Event Listeners
    nextButton.addEventListener("click", () => {
        nextSlide();
        resetAutoSlide();
    });

    prevButton.addEventListener("click", () => {
        prevSlide();
        resetAutoSlide();
    });

    function resetAutoSlide() {
        clearInterval(slideInterval);
        startSlideShow();
    }

    // Start Slideshow Initially
    showSlide(currentIndex);
    startSlideShow();

})

///// AUTO TYPING JS

document.addEventListener("DOMContentLoaded", () => {
    const textElement = document.getElementById("auto-typing");
    const textArray = ["Connecting Your Interests with Our Thinking"]; // You can add more phrases if needed
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    
    function typeEffect() {
        const currentText = textArray[textIndex];
        const speed = isDeleting ? 50 : 100; // Typing speed (slower for typing, faster for deleting)

        if (!isDeleting && charIndex < currentText.length) {
            // Typing characters
            textElement.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
        } else if (isDeleting && charIndex > 0) {
            // Deleting characters
            textElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
        }

        if (!isDeleting && charIndex === currentText.length) {
            // Pause after typing
            setTimeout(() => isDeleting = true, 2000); // Pause before deleting
        } else if (isDeleting && charIndex === 0) {
            // Start typing again after deleting
            isDeleting = false;
            setTimeout(() => typeEffect(), 500); // Pause before retyping
            return;
        }

        setTimeout(typeEffect, speed);
    }

    // Start Typing Effect
    typeEffect();
})

/////FINDER SECTION TRANSITION WHEN BUTTON IS CLICKED 

document.addEventListener("DOMContentLoaded", () => {
    const step1 = document.getElementById("step-1");
    const step2 = document.getElementById("step-2");
    const step1Image = document.getElementById("step-1-image");
    const step2Image = document.getElementById("step-2-image");
    const industryInputs = document.querySelectorAll('input[name="sector"]');

    industryInputs.forEach(input => {
        input.addEventListener("change", () => {
            // Hide Step 1
            step1.classList.add("hidden");
            step1Image.classList.add("hidden");

            // Show Step 2
            setTimeout(() => {
                step2.classList.remove("hidden");
                step2Image.classList.remove("hidden");
            }, 500); // Delayed transition
        });
    });
});



