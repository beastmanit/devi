function validateForm() {
    var password = document.getElementById("password").value;
    if (password.toLowerCase() !== "devi") {
        document.getElementById("error-message").style.display = "block";
        return false; // Prevent form submission
    }
    return true; // Allow form submission
}