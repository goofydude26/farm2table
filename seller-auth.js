// Seller Authentication Functions

let currentSeller = null;

// Switch between login and register tabs
function switchTab(tab) {
    const loginTab = document.getElementById('login-tab');
    const registerTab = document.getElementById('register-tab');
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    const errorMessage = document.getElementById('error-message');
    const successMessage = document.getElementById('success-message');
    
    // Clear error message
    errorMessage.className = 'error-message';
    successMessage.className = 'success-message';
    
    if (tab === 'login') {
        loginTab.classList.add('active');
        registerTab.classList.remove('active');
        loginForm.classList.add('active');
        registerForm.classList.remove('active');
    } else {
        registerTab.classList.add('active');
        loginTab.classList.remove('active');
        registerForm.classList.add('active');
        loginForm.classList.remove('active');
    }
}

// Handle login form submission
document.getElementById('login-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    const loading = document.getElementById('login-loading');
    
    // Show loading
    loading.classList.add('show');
    
    // Try to sign in
    try {
        const result = await signIn(email, password);
        loading.classList.remove('show');
        
        if (result.success) {
            // Store seller info in localStorage
            const sellerData = {
                email: result.user.email,
                displayName: result.user.displayName,
                isSeller: true
            };
            localStorage.setItem('sellerData', JSON.stringify(sellerData));
            
            showSuccess('Login successful! Redirecting to dashboard...');
            setTimeout(() => {
                window.location.href = 'seller-dashboard.html';
            }, 1000);
        } else {
            showError(result.error);
        }
    } catch (error) {
        loading.classList.remove('show');
        showError(error.message);
    }
});

// Handle register form submission
document.getElementById('register-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const farmName = document.getElementById('register-name').value;
    const ownerName = document.getElementById('register-owner').value;
    const email = document.getElementById('register-email').value;
    const farmType = document.getElementById('register-type').value;
    const password = document.getElementById('register-password').value;
    const confirmPassword = document.getElementById('register-confirm-password').value;
    const loading = document.getElementById('register-loading');
    
    // Validate passwords match
    if (password !== confirmPassword) {
        showError('Passwords do not match!');
        return;
    }
    
    if (password.length < 6) {
        showError('Password must be at least 6 characters long!');
        return;
    }
    
    // Show loading
    loading.classList.add('show');
    
    try {
        // Try to sign up
        const result = await signUp(email, password, farmName);
        loading.classList.remove('show');
        
        if (result.success) {
            // Store additional seller info
            const sellerData = {
                email: email,
                displayName: farmName,
                ownerName: ownerName,
                farmType: farmType,
                isSeller: true
            };
            localStorage.setItem('sellerData', JSON.stringify(sellerData));
            
            showSuccess('Seller account created! Redirecting to dashboard...');
            setTimeout(() => {
                window.location.href = 'seller-dashboard.html';
            }, 1000);
        } else {
            showError(result.error);
        }
    } catch (error) {
        loading.classList.remove('show');
        showError(error.message);
    }
});

// Password reset
async function resetPassword() {
    const email = document.getElementById('login-email').value || document.getElementById('register-email').value;
    
    if (!email) {
        showError('Please enter your email address first');
        return;
    }
    
    try {
        await auth.sendPasswordResetEmail(email);
        showSuccess('Password reset email sent! Check your inbox.');
    } catch (error) {
        showError(error.message);
    }
}

// Show error message
function showError(message) {
    const errorMessage = document.getElementById('error-message');
    errorMessage.textContent = message;
    errorMessage.classList.add('show');
    
    // Hide error after 5 seconds
    setTimeout(() => {
        errorMessage.classList.remove('show');
    }, 5000);
}

// Show success message
function showSuccess(message) {
    const successMessage = document.getElementById('success-message');
    successMessage.textContent = message;
    successMessage.classList.add('show');
    
    // Clear any error message
    document.getElementById('error-message').classList.remove('show');
}

// Check if user is seller
function isSeller() {
    const sellerData = localStorage.getItem('sellerData');
    return sellerData !== null;
}

// Get seller data
function getSellerData() {
    const sellerData = localStorage.getItem('sellerData');
    return sellerData ? JSON.parse(sellerData) : null;
}

