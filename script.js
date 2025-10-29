// Products Database
const products = [
    {
        id: 1,
        name: "Organic Tomatoes",
        farmer: "Green Valley Farm",
        price: 4.99,
        category: "vegetables",
        image: "https://images.unsplash.com/photo-1582284540020-8acbe03f4924?w=400&fit=crop",
        description: "Fresh organic tomatoes, hand-picked daily",
        stock: 50
    },
    {
        id: 2,
        name: "Sweet Corn",
        farmer: "Sunny Acres Farm",
        price: 2.99,
        category: "vegetables",
        image: "https://images.unsplash.com/photo-1551754439-42460b6c3c5b?w=400&fit=crop",
        description: "Sweet and juicy corn, picked at peak freshness",
        stock: 30
    },
    {
        id: 3,
        name: "Fresh Lettuce",
        farmer: "Green Valley Farm",
        price: 3.49,
        category: "vegetables",
        image: "https://images.unsplash.com/photo-1550411291-d285362c0131?w=400&fit=crop",
        description: "Crisp and fresh lettuce from our hydroponic farm",
        stock: 40
    },
    {
        id: 4,
        name: "Red Bell Peppers",
        farmer: "Mountain View Organics",
        price: 5.99,
        category: "vegetables",
        image: "https://images.unsplash.com/photo-1599540030248-b9972551be8c?w=400&fit=crop",
        description: "Organic red bell peppers, sweet and crunchy",
        stock: 25
    },
    {
        id: 5,
        name: "Organic Strawberries",
        farmer: "Berry Hill Farm",
        price: 6.99,
        category: "fruits",
        image: "https://images.unsplash.com/photo-1588617501088-c67637803e36?w=400&fit=crop",
        description: "Sweet organic strawberries, perfect for desserts",
        stock: 20
    },
    {
        id: 6,
        name: "Fresh Apples",
        farmer: "Orchard Valley",
        price: 3.99,
        category: "fruits",
        image: "https://images.unsplash.com/photo-1560806887-1e4cd0b69665?w=400&fit=crop",
        description: "Crisp and delicious apples from our orchard",
        stock: 60
    },
    {
        id: 7,
        name: "Organic Blueberries",
        farmer: "Berry Hill Farm",
        price: 7.99,
        category: "fruits",
        image: "https://images.unsplash.com/photo-1589391886610-c6a053578794?w=400&fit=crop",
        description: "Premium organic blueberries, antioxidant-rich",
        stock: 15
    },
    {
        id: 8,
        name: "Fresh Oranges",
        farmer: "Citrus Grove Farm",
        price: 4.49,
        category: "fruits",
        image: "https://images.unsplash.com/photo-1557800636-894a64c1696f?w=400&fit=crop",
        description: "Juicy oranges, rich in vitamin C",
        stock: 45
    },
    {
        id: 9,
        name: "Farm Fresh Milk",
        farmer: "Dairy Delights",
        price: 5.99,
        category: "dairy",
        image: "https://images.unsplash.com/photo-1620189507195-68309c00c486?w=400&fit=crop",
        description: "Fresh milk from grass-fed cows",
        stock: 35
    },
    {
        id: 10,
        name: "Organic Cheese",
        farmer: "Dairy Delights",
        price: 8.99,
        category: "dairy",
        image: "https://images.unsplash.com/photo-1618164436241-d8a2135d513a?w=400&fit=crop",
        description: "Artisanal organic cheese, aged to perfection",
        stock: 25
    },
    {
        id: 11,
        name: "Organic Quinoa",
        farmer: "Grain Valley",
        price: 9.99,
        category: "grains",
        image: "https://images.unsplash.com/photo-1559200408-e2b31f7a4073?w=400&fit=crop",
        description: "Protein-rich organic quinoa",
        stock: 30
    },
    {
        id: 12,
        name: "Organic Brown Rice",
        farmer: "Grain Valley",
        price: 4.99,
        category: "grains",
        image: "https://images.unsplash.com/photo-1530610476181-d83430b64dcd?w=400&fit=crop",
        description: "Whole grain organic brown rice",
        stock: 40
    },
    {
        id: 13,
        name: "Grass-Fed Beef",
        farmer: "Meadow Ridge Ranch",
        price: 14.99,
        category: "meat",
        image: "https://images.unsplash.com/photo-1603048255566-13a8f273663c?w=400&fit=crop",
        description: "Premium grass-fed beef",
        stock: 20
    },
    {
        id: 14,
        name: "Free-Range Chicken",
        farmer: "Pasture Poultry",
        price: 12.99,
        category: "meat",
        image: "https://images.unsplash.com/photo-1611718422203-b1d7d088a3f8?w=400&fit=crop",
        description: "Organic free-range chicken",
        stock: 15
    },
    {
        id: 15,
        name: "Farm Fresh Eggs",
        farmer: "Happy Hen Farm",
        price: 5.99,
        category: "eggs",
        image: "https://images.unsplash.com/photo-1598965675069-4d06c1031d45?w=400&fit=crop",
        description: "Fresh eggs from free-range hens",
        stock: 50
    },
    {
        id: 16,
        name: "Organic Cucumbers",
        farmer: "Green Valley Farm",
        price: 3.49,
        category: "vegetables",
        image: "https://images.unsplash.com/photo-1449300079323-02e209d9d3a6?w=400&fit=crop",
        description: "Crisp organic cucumbers, perfect for salads",
        stock: 35
    },
    {
        id: 17,
        name: "Carrots",
        farmer: "Root Garden Farm",
        price: 2.99,
        category: "vegetables",
        image: "https://images.unsplash.com/photo-1582515073400-0528539da135?w=400&fit=crop",
        description: "Fresh sweet carrots, perfect for snacking",
        stock: 40
    },
    {
        id: 18,
        name: "Broccoli",
        farmer: "Green Valley Farm",
        price: 4.49,
        category: "vegetables",
        image: "https://images.unsplash.com/photo-1628773822503-63c9c43b006d?w=400&fit=crop",
        description: "Crisp organic broccoli heads",
        stock: 30
    },
    {
        id: 19,
        name: "Potatoes",
        farmer: "Root Garden Farm",
        price: 3.99,
        category: "vegetables",
        image: "https://images.unsplash.com/photo-1598136384073-3b7f6174b744?w=400&fit=crop",
        description: "Fresh russet potatoes",
        stock: 50
    },
    {
        id: 20,
        name: "Onions",
        farmer: "Sunny Acres Farm",
        price: 2.49,
        category: "vegetables",
        image: "https://images.unsplash.com/photo-1580252431227-4a4386906518?w=400&fit=crop",
        description: "Yellow cooking onions",
        stock: 45
    },
    {
        id: 21,
        name: "Spinach",
        farmer: "Leafy Greens Co",
        price: 3.99,
        category: "vegetables",
        image: "https://images.unsplash.com/photo-1584823233633-9b09939a24d2?w=400&fit=crop",
        description: "Fresh leafy spinach",
        stock: 35
    },
    {
        id: 22,
        name: "Avocados",
        farmer: "Citrus Grove Farm",
        price: 5.99,
        category: "fruits",
        image: "https://images.unsplash.com/photo-1601039641847-7857b994d704?w=400&fit=crop",
        description: "Ripe Hass avocados",
        stock: 25
    },
    {
        id: 23,
        name: "Bananas",
        farmer: "Tropical Farms",
        price: 2.49,
        category: "fruits",
        image: "https://images.unsplash.com/photo-1528825871115-3581a5387919?w=400&fit=crop",
        description: "Fresh organic bananas",
        stock: 55
    },
    {
        id: 24,
        name: "Grapes",
        farmer: "Vineyard Fresh",
        price: 6.99,
        category: "fruits",
        image: "https://images.unsplash.com/photo-1537640538966-79f369141f3f?w=400&fit=crop",
        description: "Sweet red seedless grapes",
        stock: 30
    },
    {
        id: 25,
        name: "Pineapple",
        farmer: "Tropical Farms",
        price: 5.49,
        category: "fruits",
        image: "https://images.unsplash.com/photo-1587883138340-e14f8c523b08?w=400&fit=crop",
        description: "Fresh sweet pineapple",
        stock: 20
    },
    {
        id: 26,
        name: "Watermelon",
        farmer: "Sunny Acres Farm",
        price: 8.99,
        category: "fruits",
        image: "https://images.unsplash.com/photo-1621414218889-c4971360010f?w=400&fit=crop",
        description: "Juicy sweet watermelon",
        stock: 15
    },
    {
        id: 27,
        name: "Mangoes",
        farmer: "Tropical Farms",
        price: 4.99,
        category: "fruits",
        image: "https://images.unsplash.com/photo-1605027806543-2c133b6d911a?w=400&fit=crop",
        description: "Ripe sweet mangoes",
        stock: 30
    },
    {
        id: 28,
        name: "Greek Yogurt",
        farmer: "Dairy Delights",
        price: 6.49,
        category: "dairy",
        image: "https://images.unsplash.com/photo-1562119426-80f23f913d09?w=400&fit=crop",
        description: "Creamy organic Greek yogurt",
        stock: 30
    },
    {
        id: 29,
        name: "Butter",
        farmer: "Dairy Delights",
        price: 7.99,
        category: "dairy",
        image: "https://images.unsplash.com/photo-1589923188902-c2c34c1c4f48?w=400&fit=crop",
        description: "Farm fresh creamy butter",
        stock: 25
    },
    {
        id: 30,
        name: "Organic Oats",
        farmer: "Grain Valley",
        price: 5.99,
        category: "grains",
        image: "https://images.unsplash.com/photo-1533013832391-6e3e506e8b23?w=400&fit=crop",
        description: "Whole grain organic oats",
        stock: 35
    },
    {
        id: 31,
        name: "Whole Wheat Flour",
        farmer: "Grain Valley",
        price: 4.49,
        category: "grains",
        image: "https://images.unsplash.com/photo-1627485895444-f25bbf32f058?w=400&fit=crop",
        description: "Stone-ground whole wheat flour",
        stock: 40
    },
    {
        id: 32,
        name: "Barley",
        farmer: "Grain Valley",
        price: 6.99,
        category: "grains",
        image: "https://images.unsplash.com/photo-1516365453673-f394f10c5a1a?w=400&fit=crop",
        description: "Organic hulled barley",
        stock: 30
    },
    {
        id: 33,
        name: "Pork Chops",
        farmer: "Meadow Ridge Ranch",
        price: 11.99,
        category: "meat",
        image: "https://images.unsplash.com/photo-1606843043444-c8b35fd0f5f0?w=400&fit=crop",
        description: "Thick-cut pork chops",
        stock: 20
    },
    {
        id: 34,
        name: "Ground Turkey",
        farmer: "Pasture Poultry",
        price: 8.99,
        category: "meat",
        image: "https://images.unsplash.com/photo-1543669527-1e5f80b06a58?w=400&fit=crop",
        description: "Lean ground turkey",
        stock: 25
    },
    {
        id: 35,
        name: "Lamb Chops",
        farmer: "Meadow Ridge Ranch",
        price: 16.99,
        category: "meat",
        image: "https://images.unsplash.com/photo-1598511757341-c71b5501c0c6?w=400&fit=crop",
        description: "Premium lamb chops",
        stock: 15
    },
    {
        id: 36,
        name: "Organic Eggs (Duck)",
        farmer: "Happy Hen Farm",
        price: 8.99,
        category: "eggs",
        image: "https://images.unsplash.com/photo-1627725911414-3d6118d09d3b?w=400&fit=crop",
        description: "Large duck eggs from free-range ducks",
        stock: 20
    },
    {
        id: 37,
        name: "Zucchini",
        farmer: "Green Valley Farm",
        price: 2.99,
        category: "vegetables",
        image: "https://images.unsplash.com/photo-1524383432336-c3f6115c3f38?w=400&fit=crop",
        description: "Fresh summer zucchini",
        stock: 40
    },
    {
        id: 38,
        name: "Green Beans",
        farmer: "Green Valley Farm",
        price: 4.49,
        category: "vegetables",
        image: "https://images.unsplash.com/photo-1589311022416-03f10660f782?w=400&fit=crop",
        description: "Crisp fresh green beans",
        stock: 35
    },
    {
        id: 39,
        name: "Pears",
        farmer: "Orchard Valley",
        price: 4.99,
        category: "fruits",
        image: "https://images.unsplash.com/photo-1616662496111-c3a5f86af165?w=400&fit=crop",
        description: "Juicy ripe pears",
        stock: 40
    },
    {
        id: 40,
        name: "Peaches",
        farmer: "Orchard Valley",
        price: 5.49,
        category: "fruits",
        image: "https://images.unsplash.com/photo-1600658706973-cabc3e5c9a75?w=400&fit=crop",
        description: "Sweet fresh peaches",
        stock: 30
    }
];

// Cart Management
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Load seller products and merge with main products
function loadAllProducts() {
    const sellerProducts = JSON.parse(localStorage.getItem('sellerProducts')) || [];
    const allProducts = [...products, ...sellerProducts];
    return allProducts;
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    initNavigation();
    loadProducts();
    loadFeaturedProducts();
    setupFilters();
    loadCart();
    updateCartCount();
    
    // Show cart items if on cart page
    if (window.location.pathname.includes('cart.html')) {
        displayCart();
    }
});

// Navigation Mobile Menu
function initNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }
}

// Load Products on Products Page
function loadProducts() {
    const productsGrid = document.getElementById('products-grid');
    if (!productsGrid) return;
    
    const allProducts = loadAllProducts();
    displayProducts(allProducts);
}

// Display Products
function displayProducts(productsToDisplay) {
    const productsGrid = document.getElementById('products-grid');
    if (!productsGrid) return;
    
    if (productsToDisplay.length === 0) {
        document.getElementById('no-results').style.display = 'block';
        productsGrid.innerHTML = '';
    } else {
        document.getElementById('no-results').style.display = 'none';
        productsGrid.innerHTML = productsToDisplay.map(product => `
            <div class="product-card">
                <img src="${product.image}" alt="${product.name}" class="product-image" onerror="this.src='https://via.placeholder.com/400x300?text=Product'">
                <div class="product-info">
                    <span class="farmer-badge">👨‍🌾 ${product.farmer}</span>
                    <h3 class="product-name">${product.name}</h3>
                    <p class="product-farmer">${product.farmer}</p>
                    <div class="product-price">$${product.price.toFixed(2)}</div>
                    <div class="product-buttons">
                        <button class="btn-add-cart" onclick="addToCart(${product.id})">Add to Cart</button>
                    </div>
                </div>
            </div>
        `).join('');
    }
}

// Load Featured Products on Home Page
function loadFeaturedProducts() {
    const featuredGrid = document.getElementById('featured-products');
    if (!featuredGrid) return;
    
    // Get 6 random products from all products
    const allProducts = loadAllProducts();
    const featured = allProducts.sort(() => 0.5 - Math.random()).slice(0, 6);
    
    featuredGrid.innerHTML = featured.map(product => `
        <div class="product-card">
            <img src="${product.image}" alt="${product.name}" class="product-image" onerror="this.src='https://via.placeholder.com/400x300?text=Product'">
            <div class="product-info">
                <span class="farmer-badge">👨‍🌾 ${product.farmer}</span>
                <h3 class="product-name">${product.name}</h3>
                <p class="product-farmer">${product.farmer}</p>
                <div class="product-price">$${product.price.toFixed(2)}</div>
                <div class="product-buttons">
                    <button class="btn-add-cart" onclick="addToCart(${product.id})">Add to Cart</button>
                    <a href="products.html" class="btn-view">View All</a>
                </div>
            </div>
        </div>
    `).join('');
}

// Setup Filters
function setupFilters() {
    const categoryFilter = document.getElementById('category-filter');
    const sortFilter = document.getElementById('sort-filter');
    const searchInput = document.getElementById('search-input');
    
    if (categoryFilter) {
        categoryFilter.addEventListener('change', filterProducts);
    }
    
    if (sortFilter) {
        sortFilter.addEventListener('change', filterProducts);
    }
    
    if (searchInput) {
        searchInput.addEventListener('input', filterProducts);
    }
}

// Filter Products
function filterProducts() {
    const categoryFilter = document.getElementById('category-filter');
    const sortFilter = document.getElementById('sort-filter');
    const searchInput = document.getElementById('search-input');
    
    if (!categoryFilter) return;
    
    const allProducts = loadAllProducts();
    let filtered = [...allProducts];
    
    // Category filter
    const category = categoryFilter.value;
    if (category !== 'all') {
        filtered = filtered.filter(p => p.category === category);
    }
    
    // Search filter
    const searchTerm = searchInput ? searchInput.value.toLowerCase() : '';
    if (searchTerm) {
        filtered = filtered.filter(p => 
            p.name.toLowerCase().includes(searchTerm) || 
            p.farmer.toLowerCase().includes(searchTerm)
        );
    }
    
    // Sort filter
    const sort = sortFilter ? sortFilter.value : 'default';
    switch(sort) {
        case 'price-low':
            filtered.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            filtered.sort((a, b) => b.price - a.price);
            break;
        case 'name':
            filtered.sort((a, b) => a.name.localeCompare(b.name));
            break;
    }
    
    displayProducts(filtered);
}

// Add to Cart
function addToCart(productId) {
    const allProducts = loadAllProducts();
    const product = allProducts.find(p => p.id === productId);
    if (!product) return;
    
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        if (existingItem.quantity < product.stock) {
            existingItem.quantity++;
        } else {
            alert('Sorry, no more stock available for this item.');
            return;
        }
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }
    
    saveCart();
    updateCartCount();
    
    // Show feedback
    showNotification(`${product.name} added to cart!`);
}

// Remove from Cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateCartCount();
    displayCart();
}

// Update Quantity
function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (!item) return;
    
    const newQuantity = item.quantity + change;
    
    if (newQuantity <= 0) {
        removeFromCart(productId);
    } else if (newQuantity <= item.stock) {
        item.quantity = newQuantity;
        saveCart();
        updateCartCount();
        displayCart();
    } else {
        alert('Sorry, no more stock available for this item.');
    }
}

// Save Cart to LocalStorage
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Load Cart from LocalStorage
function loadCart() {
    cart = JSON.parse(localStorage.getItem('cart')) || [];
}

// Update Cart Count in Navigation
function updateCartCount() {
    const cartCountElements = document.querySelectorAll('.cart-count');
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    
    cartCountElements.forEach(element => {
        element.textContent = totalItems;
    });
}

// Display Cart
function displayCart() {
    const cartItems = document.getElementById('cart-items');
    const cartEmpty = document.getElementById('cart-empty');
    const cartContent = document.getElementById('cart-content');
    
    if (cart.length === 0) {
        cartEmpty.style.display = 'block';
        cartContent.style.display = 'none';
    } else {
        cartEmpty.style.display = 'none';
        cartContent.style.display = 'block';
        
        if (cartItems) {
            cartItems.innerHTML = cart.map(item => `
                <div class="cart-item">
                    <img src="${item.image}" alt="${item.name}" class="cart-item-image" onerror="this.src='https://via.placeholder.com/100x100?text=Product'">
                    <div class="cart-item-details">
                        <h3 class="cart-item-name">${item.name}</h3>
                        <p class="cart-item-farmer">👨‍🌾 ${item.farmer}</p>
                        <div class="cart-item-price">$${item.price.toFixed(2)}</div>
                        <div class="quantity-control">
                            <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">−</button>
                            <span class="quantity-display">${item.quantity}</span>
                            <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                        </div>
                    </div>
                    <button class="remove-btn" onclick="removeFromCart(${item.id})">Remove</button>
                </div>
            `).join('');
            
            // Update totals
            updateTotals();
        }
    }
}

// Update Totals
function updateTotals() {
    const subtotal = document.getElementById('subtotal');
    const total = document.getElementById('total');
    
    if (subtotal && total) {
        const subtotalValue = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        const shipping = 5.99;
        const totalValue = subtotalValue + shipping;
        
        subtotal.textContent = `$${subtotalValue.toFixed(2)}`;
        total.textContent = `$${totalValue.toFixed(2)}`;
    }
    
    // Setup checkout button
    const checkoutBtn = document.querySelector('.btn-checkout');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', function() {
            alert('Thank you for your order! In a real application, you would be redirected to a payment gateway.\n\nTotal: ' + total.textContent);
        });
    }
}

// Show Notification
function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: #2d5016;
        color: white;
        padding: 1rem 2rem;
        border-radius: 10px;
        box-shadow: 0 5px 20px rgba(0,0,0,0.3);
        z-index: 10000;
        animation: slideIn 0.3s ease;
    `;
    notification.textContent = message;
    
    // Add animation style if not exists
    if (!document.getElementById('notification-style')) {
        const style = document.createElement('style');
        style.id = 'notification-style';
        style.textContent = `
            @keyframes slideIn {
                from { transform: translateX(400px); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
        `;
        document.head.appendChild(style);
    }
    
    document.body.appendChild(notification);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideIn 0.3s ease reverse';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}
