const totalAmountInput = document.getElementById('totalAmount');
const userPayText = document.getElementById('userPay');
const govPayText = document.getElementById('govPay');

totalAmountInput.addEventListener('input', function() {
    let total = parseFloat(this.value);
    
    if (isNaN(total) || total < 0) {
        userPayText.textContent = "0.00";
        govPayText.textContent = "0.00";
        return;
    }

    let userPay = total * 0.40;
    let govPay = total * 0.60;

    userPayText.textContent = userPay.toLocaleString('th-TH', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    govPayText.textContent = govPay.toLocaleString('th-TH', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
});

const themeToggleBtn = document.getElementById('themeToggle');
let isDarkMode = false;

themeToggleBtn.addEventListener('click', () => {
    isDarkMode = !isDarkMode;
    if (isDarkMode) {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeToggleBtn.textContent = '☀️';
    } else {
        document.documentElement.removeAttribute('data-theme');
        themeToggleBtn.textContent = '🌙';
    }
});