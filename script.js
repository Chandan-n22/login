document.getElementById('next').addEventListener('click', function(event) {
    event.preventDefault(); // Prevents page from crashing or reloading prematurely

    const emailInput = document.getElementById('email');
    const emailValue = emailInput.value.trim();

    // Basic Validation Check
    if (emailValue === "") {
        alert("Please enter an email or phone number.");
        return;
    }

    // 1. Link to Local Database Storage (Perfect for testing offline/local files on mobile)
    localStorage.setItem('savedUserEmail', emailValue);

    // 2. Action: Redirect smoothly to the separate password page
    window.location.href = "Google2.html";
});