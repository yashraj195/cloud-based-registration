const form = document.getElementById("membershipForm");
const submitBtn = document.getElementById("submitBtn");

// Local Azure Function URL
const API_URL =
"https://contactform-api-yash01-grgkd5d9buhac4ck.centralindia-01.azurewebsites.net/api/MembershipRegister";

form.addEventListener("submit", async (e) => {

    e.preventDefault();

    submitBtn.disabled = true;
    submitBtn.innerHTML = "Submitting...";

    const data = {

        name: document.getElementById("name").value.trim(),

        registration: document.getElementById("registration").value.trim(),

        email: document.getElementById("email").value.trim(),

        phone: document.getElementById("phone").value.trim(),

        department: document.getElementById("department").value.trim(),

        year: document.getElementById("year").value,

        skills: document.getElementById("skills").value.trim(),

        reason: document.getElementById("reason").value.trim()

    };

    // Basic Validation

    if (
        !data.name ||
        !data.registration ||
        !data.email ||
        !data.phone ||
        !data.department
    ) {

        alert("Please fill all required fields.");

        submitBtn.disabled = false;
        submitBtn.innerHTML = "Join Study Group";

        return;

    }

    try {

        const response = await fetch(API_URL, {

            method: "POST",

            headers: {

                "Content-Type": "application/json"

            },

            body: JSON.stringify(data)

        });

        const result = await response.json();

        if (response.ok) {

            alert("🎉 Registration Successful!");

            form.reset();

        }

        else {

            alert(result.error || "Registration failed.");

        }

    }

    catch (error) {

        console.error(error);

        alert("Unable to connect to the server.");

    }

    submitBtn.disabled = false;
    submitBtn.innerHTML = "Join Study Group";

});


/* ============================================
   UI ENHANCEMENTS (additive only — does not
   touch the form submission logic above)
   ============================================ */

// Mobile nav toggle
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
        const isOpen = navLinks.classList.toggle("open");
        navToggle.setAttribute("aria-expanded", isOpen);
    });

    // Close mobile menu after tapping a link
    navLinks.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("open");
            navToggle.setAttribute("aria-expanded", "false");
        });
    });
}

// FAQ accordion
document.querySelectorAll(".faq-item").forEach((item) => {
    const question = item.querySelector(".faq-question");
    if (!question) return;

    question.addEventListener("click", () => {
        const isOpen = item.classList.contains("open");

        document.querySelectorAll(".faq-item.open").forEach((openItem) => {
            openItem.classList.remove("open");
        });

        if (!isOpen) item.classList.add("open");
    });
});

// Scroll reveal for sections
const revealTargets = document.querySelectorAll(
    ".pillar, .schedule-card, .sticky-note, .faq-item"
);

revealTargets.forEach((el) => el.classList.add("reveal"));

if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.15 }
    );

    revealTargets.forEach((el) => observer.observe(el));
} else {
    revealTargets.forEach((el) => el.classList.add("is-visible"));
}
