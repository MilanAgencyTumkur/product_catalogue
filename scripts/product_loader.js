document.addEventListener('DOMContentLoaded', async () => {
    const params = new URLSearchParams(window.location.search);
    const productId = params.get('id');

    const productInfoContainer = document.getElementById('product-info');

    if (!productId) {
        productInfoContainer.innerHTML = '<p>Product not found.</p>';
        return;
    }

    try {
        const response = await fetch('/../data/motor_variants.json');
        const products = await response.json();
        const product = products.find(p => p.id === productId);

        if (product) {
            document.title = `Milan Flow - ${product.name}`;
            renderProduct(product, productInfoContainer);
        } else {
            productInfoContainer.innerHTML = '<p>Product not found.</p>';
        }
    } catch (error) {
        console.error('Error fetching product data:', error);
        productInfoContainer.innerHTML = '<p>An error occurred while loading product details.</p>';
    }
});

function renderProduct(product, container) {
    container.innerHTML = `
        <div class="product-container">
            <div class="product-image-section">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="product-details-content">
                <h1 class="product-title">${product.name}</h1>
                <div class="price-section">
                    <span class="current-price">${product.price}</span>
                </div>
                <div class="info-section">
                    <h2 class="section-title"><i class="fas fa-info-circle icon"></i> Overview</h2>
                    <p>${product.details.overview}</p>
                </div>
                <div class="info-section">
                    <h2 class="section-title"><i class="fas fa-cogs icon"></i> Technical Specifications</h2>
                    <ul class="info-list">
                        ${product.details.specs.map(spec => `<li><span class="list-label">${spec.label}:</span> ${spec.value}</li>`).join('')}
                    </ul>
                </div>
                <div class="info-section">
                    <h2 class="section-title"><i class="fas fa-wrench icon"></i> Features</h2>
                    <ul class="info-list">
                        ${product.details.features.map(feature => `<li>${feature}</li>`).join('')}
                    </ul>
                </div>
                <div class="info-section">
                    <h2 class="section-title"><i class="fas fa-home icon"></i> Common Applications</h2>
                    <ul class="info-list">
                        ${product.details.applications.map(app => `<li>${app}</li>`).join('')}
                    </ul>
                </div>
            </div>
        </div>
    `;
}