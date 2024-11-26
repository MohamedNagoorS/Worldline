const fullName = document.getElementById('fullName');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');
const submitBtn = document.getElementById('submitBtn');
const registrationForm = document.getElementById('registrationForm');

const fullNameError = document.getElementById('fullNameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const confirmError = document.getElementById('confirm-error');


const strengthIndicator = document.getElementById('strength-indicator');
const strengthText = document.getElementById('strength-text');
const passwordRequirements = document.querySelectorAll('.requirement');

const patterns = {
    name: /^[A-Za-z\s]{3,50}$/,
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    length: /.{8,}/,
    uppercase: /[A-Z]/,
    lowercase: /[a-z]/,
    number: /[0-9]/,
    special: /[!@#$%^&*]/,
};

function validateFullName() {
    const isValid = patterns.name.test(fullName.value.trim());
    fullNameError.style.display = isValid ? 'none' : 'block';
    return isValid;
}

function validateEmail() {
    const isValid = patterns.email.test(email.value.trim());
    emailError.style.display = isValid ? 'none' : 'block';
    return isValid;
}

function calculatePasswordStrength() {
    let validCount = 0;
    const strengthLevels = ['Weak', 'Moderate', 'Strong'];
    const strengthColors = ['red', '#FCD667', 'green'];
    const widthPercentages = ['33%', '66%', '100%'];

    
    Object.entries(patterns).forEach(([key, pattern]) => {
        if (['length', 'uppercase', 'lowercase', 'number', 'special'].includes(key)) {
            const requirement = document.getElementById(key);
            if (pattern.test(password.value)) {
                validCount++;
                requirement.style.color = 'green';
            } else {
                requirement.style.color = 'red';
            }
        }
    });

    let strengthIndex = 0;
    if (validCount >= 3) strengthIndex = 1;
    if (validCount === 5) strengthIndex = 2;

    strengthIndicator.style.width = widthPercentages[strengthIndex];
    strengthIndicator.style.backgroundColor = strengthColors[strengthIndex];
    strengthText.textContent = strengthLevels[strengthIndex];
    strengthText.style.color = strengthColors[strengthIndex];

    return validCount === 5;
}

function validatePassword() {
    const isValid = calculatePasswordStrength();
    passwordError.style.display = isValid ? 'none' : 'block';
    return isValid;
}

function validatePasswordMatch() {
    if (password.value === '' || confirmPassword.value === '') {
        
        confirmError.textContent = '';
        confirmPassword.style.borderColor = '#e1e1e1';
        return false;
    }

    if (password.value !== confirmPassword.value) {
        confirmError.textContent = 'Passwords do not match!';
        confirmError.style.color = '#ff4d4d';
        confirmPassword.style.borderColor = '#ff4d4d';
        return false;
    } else {
        confirmError.textContent = 'Passwords match ✓';
        confirmError.style.color = '#4caf50';
        confirmPassword.style.borderColor = '#4caf50';
        return true;
    }
}


fullName.addEventListener('input', validateFullName);
email.addEventListener('input', validateEmail);
password.addEventListener('input', () => {
    validatePassword();
    validatePasswordMatch();
});
confirmPassword.addEventListener('input', validatePasswordMatch);


registrationForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const isFullNameValid = validateFullName();
    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();
    const isPasswordMatchValid = validatePasswordMatch();

    if (isFullNameValid && isEmailValid && isPasswordValid && isPasswordMatchValid) {
        alert('Registration successful!');
       
        registrationForm.reset();
       
        confirmError.textContent = '';
        confirmPassword.style.borderColor = '#e1e1e1';
    } else {
      
        if (!isFullNameValid) fullNameError.style.display = 'block';
        if (!isEmailValid) emailError.style.display = 'block';
        if (!isPasswordValid) passwordError.style.display = 'block';
        if (!isPasswordMatchValid) {
            confirmError.textContent = 'Passwords do not match!';
            confirmError.style.color = '#ff4d4d';
            confirmPassword.style.borderColor = '#ff4d4d';
        }
    }
});