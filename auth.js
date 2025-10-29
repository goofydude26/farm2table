// Authentication Functions

// Sign up with email and password
async function signUp(email, password, name) {
    try {
        const userCredential = await auth.createUserWithEmailAndPassword(email, password);
        const user = userCredential.user;
        
        // Update user profile with display name
        if (name) {
            await user.updateProfile({
                displayName: name
            });
        }
        
        return { success: true, user: user };
    } catch (error) {
        return { success: false, error: error.message };
    }
}

// Sign in with email and password
async function signIn(email, password) {
    try {
        const userCredential = await auth.signInWithEmailAndPassword(email, password);
        return { success: true, user: userCredential.user };
    } catch (error) {
        return { success: false, error: error.message };
    }
}

// Sign out
function signOut() {
    return auth.signOut();
}

// Get current user
function getCurrentUser() {
    return auth.currentUser;
}

// Check authentication state
auth.onAuthStateChanged((user) => {
    if (user) {
        // User is signed in
        updateUIForAuthenticatedUser(user);
        saveUserToLocalStorage(user);
    } else {
        // User is signed out
        updateUIForUnauthenticatedUser();
        clearUserFromLocalStorage();
    }
});

// Update UI for authenticated user
function updateUIForAuthenticatedUser(user) {
    // Update navigation
    const userLinks = document.querySelectorAll('.user-links');
    const loginLinks = document.querySelectorAll('.login-links');
    
    userLinks.forEach(link => {
        link.style.display = 'inline';
    });
    
    loginLinks.forEach(link => {
        link.style.display = 'none';
    });
    
    // Update user name in navigation
    const userNameElements = document.querySelectorAll('.user-name');
    const displayName = user.displayName || user.email.split('@')[0];
    userNameElements.forEach(element => {
        element.textContent = displayName;
    });
    
    // Add logout functionality
    const logoutButtons = document.querySelectorAll('.btn-logout');
    logoutButtons.forEach(button => {
        button.onclick = () => {
            signOut().then(() => {
                window.location.href = 'index.html';
            });
        };
    });
}

// Update UI for unauthenticated user
function updateUIForUnauthenticatedUser() {
    const userLinks = document.querySelectorAll('.user-links');
    const loginLinks = document.querySelectorAll('.login-links');
    
    userLinks.forEach(link => {
        link.style.display = 'none';
    });
    
    loginLinks.forEach(link => {
        link.style.display = 'inline';
    });
}

// Save user to localStorage
function saveUserToLocalStorage(user) {
    const userData = {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName
    };
    localStorage.setItem('firebaseUser', JSON.stringify(userData));
}

// Clear user from localStorage
function clearUserFromLocalStorage() {
    localStorage.removeItem('firebaseUser');
}

// Get user from localStorage
function getUserFromLocalStorage() {
    const userData = localStorage.getItem('firebaseUser');
    return userData ? JSON.parse(userData) : null;
}

// Redirect to login if not authenticated
function requireAuth() {
    auth.onAuthStateChanged((user) => {
        if (!user) {
            window.location.href = 'login.html';
        }
    });
}

