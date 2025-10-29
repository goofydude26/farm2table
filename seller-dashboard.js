// Seller Dashboard Functionality

let sellerProducts = JSON.parse(localStorage.getItem('sellerProducts')) || [];

// Initialize dashboard
document.addEventListener('DOMContentLoaded', function() {
    // Load seller info
    const sellerData = JSON.parse(localStorage.getItem('sellerData'));
    if (!sellerData) {
        window.location.href = 'seller-login.html';
        return;
    }

    // Display seller info
    document.getElementById('seller-name').textContent = sellerData.displayName + "'s Dashboard";
    document.getElementById('seller-email').textContent = sellerData.email;
    document.getElementById('seller-farm-type').textContent = sellerData.farmType || 'Farmer';
    
    // Set farm name in input
    const farmerInput = document.getElementById('product-farmer');
    if (farmerInput) {
        farmerInput.value = sellerData.displayName;
    }

    // Load products
    loadSellerProducts();

    // Add product form
    const addForm = document.getElementById('add-product-form');
    if (addForm) {
        addForm.addEventListener('submit', handleAddProduct);
    }

    // Logout button
    const logoutBtn = document.querySelector('.btn-logout');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', handleLogout);
    }

    // Check authentication
    auth.onAuthStateChanged((user) => {
        if (!user) {
            window.location.href = 'seller-login.html';
        }
    });
});

// Switch dashboard tabs
function switchDashboardTab(tab) {
    const tabs = ['products', 'add', 'stats'];
    tabs.forEach(t => {
        document.getElementById(t + '-tab').classList.remove('active');
        document.querySelector(`.dashboard-tabs button:nth-child(${tabs.indexOf(t) + 1})`).classList.remove('active');
    });
    
    document.getElementById(tab + '-tab').classList.add('active');
    const activeIndex = tabs.indexOf(tab);
    document.querySelector(`.dashboard-tabs button:nth-child(${activeIndex + 1})`).classList.add('active');

    // Update stats when switching to products tab
    if (tab === 'products' || tab === 'stats') {
        updateStats();
    }
}

// Load seller products
function loadSellerProducts() {
    const productsList = document.getElementById('seller-products-list');
    const noProducts = document.getElementById('no-products');
    
    const sellerData = JSON.parse(localStorage.getItem('sellerData'));
    const sellerFarmName = sellerData.displayName;

    // Filter products by this seller
    const myProducts = sellerProducts.filter(p => p.farmer === sellerFarmName);

    if (myProducts.length === 0) {
        productsList.style.display = 'none';
        noProducts.style.display = 'block';
    } else {
        productsList.style.display = 'grid';
        noProducts.style.display = 'none';
        productsList.innerHTML = myProducts.map((product, index) => `
            <div class="seller-product-card">
                <img src="${product.image || 'https://via.placeholder.com/400x300?text=Product'}" alt="${product.name}" class="seller-product-image" onerror="this.src='https://via.placeholder.com/400x300?text=Product'">
                <div class="seller-product-info">
                    <h3>${product.name}</h3>
                    <p class="seller-product-farmer">👨‍🌾 ${product.farmer}</p>
                    <p>${product.description}</p>
                    <div class="seller-product-price">$${product.price.toFixed(2)}</div>
                    <p style="margin-top: 0.5rem;">Stock: ${product.stock} units | Category: ${product.category}</p>
                </div>
                <div class="seller-product-actions">
                    <button class="btn-edit" onclick="editProduct(${index})">Edit</button>
                    <button class="btn-delete" onclick="deleteProduct(${index})">Delete</button>
                </div>
            </div>
        `).join('');
    }
}

// Handle add product
function handleAddProduct(e) {
    e.preventDefault();

    const name = document.getElementById('product-name').value;
    const category = document.getElementById('product-category').value;
    const price = parseFloat(document.getElementById('product-price').value);
    const stock = parseInt(document.getElementById('product-stock').value);
    const image = document.getElementById('product-image').value;
    const description = document.getElementById('product-description').value;
    const farmer = document.getElementById('product-farmer').value;

    // Add to products list
    const newProduct = {
        id: Date.now(),
        name: name,
        category: category,
        price: price,
        stock: stock,
        image: image || `https://images.unsplash.com/photo-1478146898589-1c58a36dbbfd?w=400&fit=crop`,
        description: description,
        farmer: farmer
    };

    sellerProducts.push(newProduct);
    localStorage.setItem('sellerProducts', JSON.stringify(sellerProducts));

    // Reset form
    document.getElementById('add-product-form').reset();
    document.getElementById('product-farmer').value = farmer;

    // Show success message
    alert('Product added successfully!');

    // Switch to products tab
    switchDashboardTab('products');
    loadSellerProducts();
}

// Delete product
function deleteProduct(index) {
    if (confirm('Are you sure you want to delete this product?')) {
        const sellerData = JSON.parse(localStorage.getItem('sellerData'));
        const sellerFarmName = sellerData.displayName;
        const myProducts = sellerProducts.filter(p => p.farmer === sellerFarmName);
        
        const productToDelete = myProducts[index];
        sellerProducts = sellerProducts.filter(p => p.id !== productToDelete.id);
        localStorage.setItem('sellerProducts', JSON.stringify(sellerProducts));
        
        loadSellerProducts();
        updateStats();
    }
}

// Edit product
function editProduct(index) {
    const sellerData = JSON.parse(localStorage.getItem('sellerData'));
    const sellerFarmName = sellerData.displayName;
    const myProducts = sellerProducts.filter(p => p.farmer === sellerFarmName);
    const product = myProducts[index];

    // Fill form with product data
    document.getElementById('product-name').value = product.name;
    document.getElementById('product-category').value = product.category;
    document.getElementById('product-price').value = product.price;
    document.getElementById('product-stock').value = product.stock;
    document.getElementById('product-image').value = product.image;
    document.getElementById('product-description').value = product.description;
    document.getElementById('product-farmer').value = product.farmer;

    // Switch to add tab
    switchDashboardTab('add');

    // Remove old product
    deleteProduct(index);
}

// Update statistics
function updateStats() {
    const sellerData = JSON.parse(localStorage.getItem('sellerData'));
    const sellerFarmName = sellerData.displayName;
    const myProducts = sellerProducts.filter(p => p.farmer === sellerFarmName);

    const total = myProducts.length;
    const inventory = myProducts.reduce((sum, p) => sum + p.stock, 0);
    const value = myProducts.reduce((sum, p) => sum + (p.price * p.stock), 0);
    const avgPrice = total > 0 ? myProducts.reduce((sum, p) => sum + p.price, 0) / total : 0;

    document.getElementById('total-products').textContent = total;
    document.getElementById('total-value').textContent = '$' + value.toFixed(2);
    document.getElementById('avg-price').textContent = '$' + (total > 0 ? (value / inventory).toFixed(2) : '0.00');

    document.getElementById('stat-total').textContent = total;
    document.getElementById('stat-inventory').textContent = inventory;
    document.getElementById('stat-value').textContent = '$' + value.toFixed(2);
    document.getElementById('stat-avg').textContent = '$' + (total > 0 ? (value / inventory).toFixed(2) : '0.00');
}

// Handle logout
function handleLogout() {
    if (confirm('Are you sure you want to logout?')) {
        signOut().then(() => {
            localStorage.removeItem('sellerData');
            localStorage.removeItem('sellerProducts');
            window.location.href = 'index.html';
        });
    }
}

