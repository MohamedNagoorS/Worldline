
 const validateFullName = (name) => /^[a-zA-Z\s]{3,}$/.test(name);
 const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
 const validatePassword = (password) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);
 const validatePhone = (phone) => /^\d{10}$/.test(phone);


 const form = document.getElementById('registrationForm');
 const fullNameInput = document.getElementById('fullName');
 const emailInput = document.getElementById('email');
 const passwordInput = document.getElementById('password');
 const phoneInput = document.getElementById('phone');
 const submitBtn = document.getElementById('submitBtn');


 const fullNameError = document.getElementById('fullNameError');
 const emailError = document.getElementById('emailError');
 const passwordError = document.getElementById('passwordError');
 const phoneError = document.getElementById('phoneError');


 const emailValidation = document.getElementById('emailValidation');
 const passwordStrength = document.getElementById('passwordStrength');
 const passwordTooltip = document.getElementById('passwordTooltip');
 const submitBtnTooltip = document.getElementById('submitBtnTooltip');

 // Validation Functions with Error Handling
 function validateField(input, validationFunc, errorElement) {
     const value = input.value.trim();
     const isValid = validationFunc(value);
     errorElement.style.display = isValid ? 'none' : 'block';
     return isValid;
 }

 // Real-time Email Validation
 emailInput.addEventListener('keyup', () => {
     const email = emailInput.value.trim();
     const isValid = validateEmail(email);
     emailValidation.textContent = isValid ? 'Valid email' : 'Invalid email';
     emailValidation.style.color = isValid ? '#4caf50' : '#ff4d4d';
 });

 // Password Strength Indicator
 passwordInput.addEventListener('keyup', () => {
     const password = passwordInput.value;
     let strength = 'Weak';
     let strengthClass = 'password-strength-weak';

     if (password.length >= 8) {
         if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password)) {
             strength = 'Strong';
             strengthClass = 'password-strength-strong';
         } else if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password)) {
             strength = 'Moderate';
             strengthClass = 'password-strength-moderate';
         }
     }

     passwordStrength.textContent = `Strength: ${strength}`;
     passwordStrength.className = `password-strength ${strengthClass}`;
 });

 // Password Tooltip
 passwordInput.addEventListener('mouseover', () => {
     passwordTooltip.style.display = 'block';
 });

 passwordInput.addEventListener('mouseout', () => {
     passwordTooltip.style.display = 'none';
 });

 // Submit Button Hover Effects
 submitBtn.addEventListener('mouseover', () => {
     const isFormValid = 
         validateFullName(fullNameInput.value) &&
         validateEmail(emailInput.value) &&
         validatePassword(passwordInput.value) &&
         validatePhone(phoneInput.value);

     if (!isFormValid) {
         submitBtnTooltip.style.display = 'block';
     }
 });

 submitBtn.addEventListener('mouseout', () => {
     submitBtnTooltip.style.display = 'none';
 });

 // Form Submission
 form.addEventListener('submit', (e) => {
     e.preventDefault();

     const isFullNameValid = validateField(fullNameInput, validateFullName, fullNameError);
     const isEmailValid = validateField(emailInput, validateEmail, emailError);
     const isPasswordValid = validateField(passwordInput, validatePassword, passwordError);
     const isPhoneValid = validateField(phoneInput, validatePhone, phoneError);

     if (isFullNameValid && isEmailValid && isPasswordValid && isPhoneValid) {
         alert('Registration Successful!');
         form.reset();
     }
 });