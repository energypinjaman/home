const amount = document.getElementById('amount');
const tenure = document.getElementById('tenure');
const amountLabel = document.getElementById('amountLabel');
const tenureLabel = document.getElementById('tenureLabel');
const monthly = document.getElementById('monthly');
const annualRate = 0.0696;

function money(value) {
  return new Intl.NumberFormat('en-MY', { style: 'currency', currency: 'MYR', maximumFractionDigits: 2 }).format(value).replace('MYR', 'RM');
}

function updateCalculator() {
  const principal = Number(amount.value);
  const years = Number(tenure.value);
  const totalInterest = principal * annualRate * years;
  const monthlyPayment = (principal + totalInterest) / (years * 12);
  amountLabel.textContent = money(principal).replace('.00', '');
  tenureLabel.textContent = years === 1 ? '1 Year' : `${years} Years`;
  monthly.textContent = money(monthlyPayment);
}

function handleSubmit(event) {
  event.preventDefault();
  document.getElementById('formNote').textContent = 'Thank you. Your request has been prepared. Connect this form to WhatsApp, email, or your backend before publishing.';
  event.target.reset();
  return false;
}

document.querySelector('.menu-toggle').addEventListener('click', () => {
  document.querySelector('.nav-links').classList.toggle('open');
});

amount.addEventListener('input', updateCalculator);
tenure.addEventListener('input', updateCalculator);
updateCalculator();
