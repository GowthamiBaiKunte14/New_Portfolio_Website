const hireBtn = document.getElementById("hireBtn");
const hireModal = document.getElementById("hireModal");
const closeModal = document.getElementById("closeModal");

// Open modal
hireBtn.addEventListener("click", () => {
    hireModal.style.display = "flex";
});

// Close modal when clicking X
closeModal.addEventListener("click", () => {
    hireModal.style.display = "none";
});

// Close modal when clicking outside content
window.addEventListener("click", (e) => {
    if (e.target === hireModal) {
        hireModal.style.display = "none";
    }
});

// Handle Hire Me Form Submit (Frontend Test)

const hireForm = document.getElementById("hireForm");

hireForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const data = {
        name: document.getElementById("hm-name").value,
        company: document.getElementById("hm-company").value,
        email: document.getElementById("hm-email").value,
        job_link: document.getElementById("hm-joblink").value,
        message: document.getElementById("hm-message").value
    };

    fetch("http://127.0.0.1:5000/hire-me", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error("Server error");
        }
        return response.json();
    })
    .then(result => {

        alert("Thank you! Your hiring request was sent successfully.");

        hireForm.reset();
        hireModal.style.display = "none";
    })
    .catch(error => {
        console.error("Fetch error:", error);

        alert("Server is busy. Please try again later.");
    });
});


// Mobile Menu Toggle

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Scroll Reveal Animation

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show-section");
        }

    });

}, {
    threshold: 0.15
});

sections.forEach(section => {
    observer.observe(section);
});


// Close mobile menu after clicking a link

const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach(item => {
    item.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});

