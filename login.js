// document.getElementById('loginForm').addEventListener('submit', e => {
//     e.preventDefault();
//     const email = document.getElementById('email').value;
//     const password = document.getElementById('password').value;
//     if (email === 'admin@wsa.com' && password === 'admin123') {
//         window.location.href = 'dashboard.html';
//     } else {
//         alert('Invalid credentials');
//     }
// });
document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const errorMessage = document.getElementById('error-message');

    // Clear previous error message
    errorMessage.textContent = '';

    // Simple validation
    if (password !== confirmPassword) {
        errorMessage.textContent = 'Passwords do not match!';
        return;
    }

    // You can add more validation here (e.g., email format, password strength)
    
    // If everything is valid, you can submit the form or perform an action
    alert('Sign up successful!'); // Placeholder for actual sign-up logic
});