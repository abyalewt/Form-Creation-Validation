// Start with DOMContentLoaded Event: Wrap your entire script in a DOMContentLoaded event listener.
document.addEventListener("DOMContentLoaded", () => {
  // Form Selection: Select the form and store it in 'form'.
  const form = document.getElementById("registration-form");

  // Feedback Division Selection: Select the feedback division and store it in 'feedbackDiv'.
  const feedbackDiv = document.getElementById("form-feedback");

  // Form Submission Event Listener: Add an event listener for the 'submit' event.
  form.addEventListener("submit", (event) => {
    // Inside this function, call event.preventDefault() to prevent the form from submitting.
    event.preventDefault();

    // --- Input Retrieval and Trimming ---

    // Retrieve User Inputs & apply .trim()
    const usernameInput = document.getElementById("username");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");

    const username = usernameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    // --- Validation Logic ---

    // Initialize Validation Variables
    let isValid = true; // Tracks the overall validation status
    const messages = []; // Array to store validation error messages

    // Username Validation: Check if username.length is less than 3.
    if (username.length < 3) {
      isValid = false;
      messages.push("Username must be at least 3 characters long.");
    }

    // Email Validation: Check if email includes both ‘@’ and ‘.’ characters.
    if (!email.includes("@") || !email.includes(".")) {
      isValid = false;
      messages.push(
        "Email must be a valid format (e.g., must contain @ and .)."
      );
    }

    // Password Validation: Ensure password.length is at least 8.
    if (password.length < 8) {
      isValid = false;
      messages.push("Password must be at least 8 characters long.");
    }

    // --- Displaying Feedback ---

    // Make feedbackDiv visible
    feedbackDiv.style.display = "block";

    // Reset class list before applying new styles
    feedbackDiv.classList.remove("success");

    if (isValid) {
      // Success Logic
      feedbackDiv.textContent = "Registration successful!";
      feedbackDiv.classList.add("success"); // Use the .success class for styling
      // Optional: Reset form fields after successful submission
      form.reset();
    } else {
      // Failure Logic
      // Join messages with <br> and assign to innerHTML
      feedbackDiv.innerHTML = messages.join("<br>");
      // Set style.color explicitly (though CSS class handles most of the failure style)
      feedbackDiv.style.color = "#dc3545";
    }
  });
});
