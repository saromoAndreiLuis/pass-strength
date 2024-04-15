function checkPasswordStrength() {
    const password = document.getElementById('password').value;
    const strengthBar = document.getElementById('strengthBar');
    const strengthText = document.getElementById('strengthText');

    let strength = 0;
    if (password.match(/[a-z]+/)) {
        strength += 20;
    }
    if (password.match(/[A-Z]+/)) {
        strength += 20;
    }
    if (password.match(/[0-9]+/)) {
        strength += 20;
    }
    if (password.match(/[!@#$%^&*()_+~`|}{[\]:;?><,./-=\\'"\\]/)) {
        strength += 20;
    }
    if (password.length >= 8) {
        strength += 20;
    }

    strengthBar.value = strength;
    updateStrengthText(strength);
}

function updateStrengthText(strength) {
    const strengthText = document.getElementById('strengthText');
    if (strength < 40) {
        strengthText.textContent = 'Weak';
        strengthText.style.color = 'red';
    } else if (strength < 80) {
        strengthText.textContent = 'Moderate';
        strengthText.style.color = 'orange';
    } else {
        strengthText.textContent = 'Strong';
        strengthText.style.color = 'green';
    }
}
