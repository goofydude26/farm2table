# Farm2Table - Direct from Farm to Your Table

A modern HTML-based e-commerce marketplace platform connecting farmers directly with consumers for fresh, local produce.

## 🌾 Features

- **Modern UI/UX**: Beautiful, responsive design that works on all devices
- **Dual Authentication**: Separate login for consumers and sellers
- **Seller Dashboard**: Farmers can manage their products and inventory
- **Product Management**: Sellers can add, edit, and delete products
- **Product Marketplace**: Browse products from multiple local farmers (40+ products)
- **Shopping Cart**: Add items to cart with quantity management
- **Category Filtering**: Filter products by category (vegetables, fruits, dairy, etc.)
- **Search Functionality**: Search products by name or farmer
- **Sort Options**: Sort by price or name
- **Local Storage**: Cart persists across page refreshes
- **Farmer Information**: See which farmer each product comes from
- **Statistics Dashboard**: Track inventory and sales for sellers

## 📁 Project Structure

```
judah-html/
├── index.html              # Home page with hero, features, and featured products
├── products.html           # Products marketplace page
├── cart.html              # Shopping cart page
├── login.html             # Consumer login and registration page
├── seller-login.html      # Seller login and registration page
├── seller-dashboard.html  # Seller dashboard for product management
├── styles.css             # Complete styling for all pages
├── script.js              # All JavaScript functionality (consumer side)
├── firebase-config.js     # Firebase configuration
├── auth.js                # Consumer authentication functions
├── login.js               # Consumer login page functionality
├── seller-auth.js         # Seller authentication functions
├── seller-dashboard.js    # Seller dashboard functionality
└── README.md              # This file
```

## 🔐 Firebase Setup

Before running the application, you need to set up Firebase Authentication:

1. **Create a Firebase Project**:
   - Go to [Firebase Console](https://console.firebase.google.com/)
   - Click "Add project" and follow the setup wizard

2. **Enable Authentication**:
   - In your Firebase project, go to "Authentication"
   - Click "Get Started"
   - Enable "Email/Password" sign-in method

3. **Get Your Firebase Config**:
   - Go to Project Settings (gear icon)
   - Scroll down to "Your apps" section
   - Click the web icon (</>) to add a web app
   - Copy the Firebase configuration

4. **Update firebase-config.js**:
   - Open `firebase-config.js`
   - Replace the placeholder values with your actual Firebase config:
   ```javascript
   const firebaseConfig = {
       apiKey: "YOUR_ACTUAL_API_KEY",
       authDomain: "your-project-id.firebaseapp.com",
       projectId: "your-project-id",
       storageBucket: "your-project-id.appspot.com",
       messagingSenderId: "YOUR_SENDER_ID",
       appId: "YOUR_APP_ID"
   };
   ```

## 🚀 How to Run

1. **Setup Firebase First**: Complete the Firebase setup above

2. **Using a Local Server** (Required for Firebase):
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Node.js (http-server package)
   npx http-server
   
   # Then open http://localhost:8000 in your browser
   ```

   ⚠️ **Important**: Firebase requires HTTPS or localhost, so you cannot just double-click the HTML file.

## 📄 Pages

### Home Page (index.html)
- Hero section highlighting the platform benefits
- Features section explaining why to use Farm2Table
- Category grid showing different product types
- Featured products preview
- "How it Works" section

### Marketplace (products.html)
- Complete product catalog
- Search and filter functionality
- Sort options
- Direct "Add to Cart" functionality

### Shopping Cart (cart.html)
- View all cart items
- Adjust quantities
- Remove items
- View order summary with totals
- Checkout button

### Consumer Login/Register (login.html)
- User registration with email and password
- Login with email and password
- Password reset functionality
- Session management
- User profile display in navigation

### Seller Portal (seller-login.html & seller-dashboard.html)
- **Seller Registration**: Create farm accounts with farm details
- **Seller Dashboard**: Manage products and inventory
- **Add Products**: Create new product listings
- **Edit/Delete Products**: Manage existing products
- **Statistics**: View inventory stats and total value
- **Product Management**: Track stock levels and pricing

## 🛒 Features Explained

### Products
- **40 products** across 6 categories (Vegetables, Fruits, Dairy, Grains, Meat, Eggs)
- Each product includes:
  - Name and farmer information
  - Price
  - Category
  - Stock availability
  - Product-specific images

### Shopping Cart
- Local storage persistence
- Quantity management (+/- buttons)
- Remove items
- Automatic total calculation including shipping
- Cart counter in navigation

### Filters & Search
- Category dropdown filter
- Search by product name or farmer name
- Sort by price (low to high / high to low) or name

## 🎨 Design Features

- **Color Scheme**: Green theme representing agriculture and freshness
- **Responsive Design**: Works on desktop, tablet, and mobile
- **Smooth Animations**: Hover effects and transitions
- **Modern Cards**: Product cards with hover effects
- **Sticky Navigation**: Always accessible menu
- **Mobile Menu**: Hamburger menu for mobile devices

## 🔧 Customization

You can easily customize:

1. **Products**: Edit the `products` array in `script.js`
2. **Colors**: Modify CSS variables in `:root` selector in `styles.css`
3. **Shipping Cost**: Change the shipping amount in `script.js` (updateTotals function)
4. **Images**: Replace placeholder Unsplash URLs with your own images

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🔐 Authentication Features

### Consumer Authentication
- **User Registration**: Create new accounts with email and password
- **Login**: Sign in with existing credentials
- **Session Management**: Automatic login state persistence
- **Password Reset**: Forgot password functionality
- **User Display**: Show logged-in user name in navigation
- **Logout**: Sign out from any page

### Seller/Farmer Authentication
- **Seller Registration**: Register as a farmer with farm details
- **Farm Information**: Capture farm name, type, and owner details
- **Seller Dashboard**: Dedicated portal for managing products
- **Product Management**: Add, edit, and delete products
- **Inventory Tracking**: Monitor stock levels and inventory value
- **Separate Login**: Independent authentication for sellers

## 🚀 Future Enhancements (Optional)

- Payment gateway integration
- Order tracking
- Farmer profiles
- Product reviews and ratings
- Email notifications
- Backend API integration
- User profile page
- Order history

## 📝 Notes

- **Front-end implementation**: HTML, CSS, and JavaScript
- **Firebase Auth**: User authentication handled by Firebase
- **Local Storage**: Cart data persists in browser's localStorage
- **Product Images**: High-quality Unsplash images for all 40 products
- **No Payment Processing**: Checkout button is for demo purposes only

## 👨‍🌾 Theme

Farm2Table focuses on creating a direct connection between farmers and consumers, emphasizing:
- Freshness and quality
- Supporting local agriculture
- Sustainable practices
- Transparency (showing farmer information)
- Fair prices by eliminating middlemen

Enjoy shopping for fresh, farm-to-table produce! 🌾

