document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");
    const responseMsg = document.getElementById("formResponse");
    const loader = document.getElementById("loadingOverlay"); // Spinner overlay

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        // Show loader
        loader.style.display = "flex";

        // Send data to Google Apps Script Web App
        fetch("https://script.google.com/macros/s/AKfycbzJHuQxGmj95ncxvuYuDMqlFzUlJtN6WBVSAjbDd2j--Gvx4a7EOr1Few3_qTHHfs2Huw/exec", {
            method: "POST",
            mode: "no-cors",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: this.name.value.trim(),
                email: this.email.value.trim(),
                message: this.message.value.trim()
            })
        })
        .then(() => {
            // Hide loader
            loader.style.display = "none";

            // Show success message
            responseMsg.style.display = "block";
            responseMsg.style.color = "green";
            responseMsg.textContent = "Message sent successfully!";
            this.reset();

            setTimeout(() => {
                responseMsg.style.display = "none";
            }, 10000);
        })
        .catch(() => {
            // Hide loader
            loader.style.display = "none";

            responseMsg.style.display = "block";
            responseMsg.style.color = "red";
            responseMsg.textContent = "Error sending message!";

            setTimeout(() => {
                responseMsg.style.display = "none";
            }, 10000);
        });
    });
});

