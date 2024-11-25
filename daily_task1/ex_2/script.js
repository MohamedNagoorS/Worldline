const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');
const goSignup = document.getElementById('go-signup');
const goLogin = document.getElementById('go-login');

goSignup.addEventListener('click', () => {
  loginForm.classList.add('hidden');
  signupForm.classList.remove('hidden');
});

goLogin.addEventListener('click', () => {
  signupForm.classList.add('hidden');
  loginForm.classList.remove('hidden');
});
function togglePassword(fieldId, toggleIcon) {
    const passwordField = document.getElementById(fieldId);
    const icon = toggleIcon.querySelector('i');
  
    if (passwordField.type === 'password') {
      passwordField.type = 'text';
      icon.classList.remove('fa-eye');
      icon.classList.add('fa-eye-slash');
    } else {
      passwordField.type = 'password';
      icon.classList.remove('fa-eye-slash');
      icon.classList.add('fa-eye');
    }
  }
  