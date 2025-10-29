// Login page specific functionality

let currentUser = null;

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
    const errorMessage = document.getElementById('error-message');
    
    // Show loading
    loading.classList.add('show');
    
    // Try to sign in
    const result = await signIn(email, password);
    
    // Hide loading
    loading.classList.remove('show');
    
    if (result.success) {
        // Success - redirect to home
        showSuccess('Login successful! Redirecting...');
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 1000);
    } else {
        // Show error
        showError(result.error);
    }
});

// Handle register form submission
document.getElementById('register-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const name = document.getElementById('register-name').value;
    const email = document.getElementById('register-email').value;
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
    
    // Try to sign up
    const result = await signUp(email, password, name);
    
    // Hide loading
    loading.classList.remove('show');
    
    if (result.success) {
        // Success - redirect to home
        showSuccess('Account created successfully! Redirecting...');
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 1000);
    } else {
        // Show error
        showError(result.error);
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

