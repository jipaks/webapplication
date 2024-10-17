document.getElementById("contact-btn").addEventListener("click", function() {
    var contactInfo = document.getElementById("contact-info");
    if (contactInfo.style.display === "none") {
        contactInfo.style.display = "block";
        this.textContent = "Hide Contact Info";
    } else {
        contactInfo.style.display = "none";
        this.textContent = "Show Contact Info";
    }
});
