// Custom JavaScript for additional functionality
document.addEventListener('DOMContentLoaded', () => {
    console.log("BeyondGrade Loaded Successfully!");

    const registerForm = document.getElementById("registerForm");
    const registerMessage = document.getElementById("registerMessage");

    // Handle Register Form Submission
    if (registerForm) {
        registerForm.addEventListener("submit", function (event) {
            event.preventDefault(); // Prevent page refresh

            // Basic Validation (Optional, can be removed if not needed)
            const username = document.getElementById("username").value.trim();
            const email = document.getElementById("email").value.trim();
            const password = document.getElementById("password").value.trim();
            const confirmPassword = document.getElementById("confirmPassword").value.trim();

            if (password !== confirmPassword) {
                registerMessage.innerText = "Passwords do not match!";
                registerMessage.classList.add("text-danger");
                return;
            }

            // Display success message or redirect to a new page
            registerMessage.innerText = "Registration Successful!";
            registerMessage.classList.remove("text-danger");
            registerMessage.classList.add("text-success");

            // Redirect to login page after a delay (optional)
            setTimeout(() => {
                window.location.href = "login.html"; // Redirect to login page
            }, 2000); // 2 seconds delay before redirection

            // Reset the form
            registerForm.reset();
        });
    }
});
