document.addEventListener('DOMContentLoaded', () => {
    const popup = document.getElementById('popup');
    const popupImg = document.getElementById('popupImg');
    const popupTitle = document.getElementById('popupTitle');
    const popupDesc = document.getElementById('popupDesc');
    const closePopup = document.getElementById('closePopup');

    // Open popup
    document.querySelectorAll('.product-card').forEach(card => {
        card.addEventListener('click', () => {
            popupImg.src = card.dataset.img || card.querySelector('img').src;
            popupTitle.textContent = card.dataset.title || card.querySelector('h3').textContent;
            popupDesc.textContent = card.dataset.desc || "Detailed product information coming soon...";
            
            popup.style.display = 'flex';
            document.body.style.overflow = 'hidden'; // 🔹 Disable scrolling
        });
    });

    // Function to close popup
    function closePopupFunc() {
        popup.style.display = 'none';
        document.body.style.overflow = ''; // 🔹 Restore scrolling
    }

    // Close popup on button click
    if (closePopup) {
        closePopup.addEventListener('click', closePopupFunc);
    }

    // Close popup when clicking outside the popup content
    if (popup) {
        popup.addEventListener('click', (e) => {
            if (e.target === popup) {
                closePopupFunc();
            }
        });
    }

    // Close popup on ESC key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && popup.style.display === 'flex') {
            closePopupFunc();
        }
    });
});
