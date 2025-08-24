document.addEventListener('DOMContentLoaded', () => {
    const productCards = document.querySelectorAll('.product-card');

    productCards.forEach(card => {
        card.addEventListener('click', () => {
            const pageUrl = card.dataset.page;
            if (pageUrl) {
                window.location.href = pageUrl;
            }
        });
    });

    const motorVariantCards = document.querySelectorAll('.variant-card');

    motorVariantCards.forEach(card => {
        card.addEventListener('click', () => {
            const productId = card.dataset.productId;
            if (productId) {
                window.location.href = `pages/electric_motors/description.html?id=${productId}`;
            }
        });
    });

    const pumpVariantCards = document.querySelectorAll('.variant-card-pump');

    pumpVariantCards.forEach(card => {
        card.addEventListener('click', () => {
            const productId = card.dataset.productId;
            if (productId) {
                window.location.href = `pages/submersible_pumps/description.html?id=${productId}`;
            }
        });
    });

    const BallValvesVariantCards = document.querySelectorAll('.variant-card-valves');

    BallValvesVariantCards.forEach(card => {
        card.addEventListener('click', () => {
            const productId = card.dataset.productId;
            if (productId) {
                window.location.href = `pages/ball_valves/description.html?id=${productId}`;
            }
        });
    });

    const SolventsVariantCards = document.querySelectorAll('.variant-card-solvent');

    SolventsVariantCards.forEach(card => {
        card.addEventListener('click', () => {
            const productId = card.dataset.productId;
            if (productId) {
                window.location.href = `pages/solvents/description.html?id=${productId}`;
            }
        });
    });

});




