// valves_loader.js
document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get("id");

  if (productId) {
    fetch("https://milanagencytumkur.github.io/product_catalogue/data/solvents.json")
      .then((response) => response.json())
      .then((solvents) => {
        const product = solvents.find((item) => item.id === productId);
        if (product) {
          displaySolventProduct(product);
        } else {
          document.querySelector(".single-product-page").innerHTML =
            "<p>Product not found.</p>";
        }
      })
      .catch((error) => {
        console.error("Error loading valves:", error);
        document.querySelector(".single-product-page").innerHTML =
          "<p>Failed to load product data.</p>";
      });
  } 
});

function displaySolventProduct(product) {
  const productContainer = document.querySelector(".single-product-page");

  productContainer.innerHTML = `
    <a href="solvents.html" class="back-btn">← Solvents</a>
    <div class="product-container">
      <!-- Image Section -->
      <div class="product-image-section">
        <img src="${product.image}" alt="${product.name}">
      </div>

      <!-- Details Section -->
      <div class="product-details-content">
        <h1 class="product-title">${product.name}</h1>
        <div class="price-section">
          <span class="current-price">${product.price}</span>
        </div>

        <!-- Overview -->
        <div class="info-section">
          <h3 class="section-title"><i class="fas fa-info-circle icon"></i>Overview</h3>
          <p>${product.details.overview}</p>
        </div>

        <!-- Features -->
        <div class="info-section">
          <h3 class="section-title"><i class="fas fa-wrench icon"></i>Features</h3>
          <ul class="info-list">
            ${product.details.features.map((f) => `<li>${f}</li>`).join("")}
          </ul>
        </div>

        <!-- Applications -->
        <div class="info-section">
          <h3 class="section-title"><i class="fas fa-home icon"></i>Common Applications</h3>
          <ul class="info-list">
            ${product.details.applications.map((a) => `<li>${a}</li>`).join("")}
          </ul>
        </div>
      </div>
    </div>
  `;
}

