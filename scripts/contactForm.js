document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");
    const responseMsg = document.getElementById("formResponse");
    const loader = document.getElementById("loadingOverlay");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        // Check if the user is offline
        if (!navigator.onLine) {
            responseMsg.style.display = "block";
            responseMsg.style.color = "red";
            responseMsg.textContent = "Please check your internet connection.";

            setTimeout(() => {
                responseMsg.style.display = "none";
            }, 10000);
            return; // Stop the function from running further
        }

        loader.style.display = "flex";

        fetch("https://script.google.com/macros/s/AKfycbzJHuQxGmj95ncxvuYuDMqlFzUlJtN6WBVSAjbDd2j--Gvx4a7EOr1Few3_qTHHfs2Huw/exec", {
            method: "POST",
            headers: {
                "Content-Type": "text/plain;charset=utf-8"
            },
            body: JSON.stringify({
                name: this.name.value.trim(),
                email: this.email.value.trim(),
                message: this.message.value.trim()
            })
        })
        .then(response => response.text())
        .then(data => {
            loader.style.display = "none";

            if (data === "success") {
                responseMsg.style.display = "block";
                responseMsg.style.color = "green";
                responseMsg.textContent = "Message sent!";
                this.reset();
            } else {
                responseMsg.style.display = "block";
                responseMsg.style.color = "red";
                responseMsg.textContent = "Error sending message!";
            }

            setTimeout(() => {
                responseMsg.style.display = "none";
            }, 10000);
        })
        .catch(error => {
            console.error("Network error:", error);
            loader.style.display = "none";
            responseMsg.style.display = "block";
            responseMsg.style.color = "red";
            responseMsg.textContent = "Network error. Check internet.";

            setTimeout(() => {
                responseMsg.style.display = "none";
            }, 10000);
        });
    });
});

