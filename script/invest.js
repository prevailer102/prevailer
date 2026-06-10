const minusButton = document.querySelector('.js-minus');
const numberButton = document.querySelector('.js-number');
const addButton = document.querySelector('.js-add');

const investmentSpan = document.querySelector('.js-investment');
const investmentRol = document.querySelector('.js-investment-rol');

const baseInvestment = 20000;
const baseInvestmentRol = 24000;

let count = 1;

function updateDisplay() {
  numberButton.innerHTML = count;

  const newInvestment = count * baseInvestment;

  const newInvestmentRol = count * baseInvestmentRol;
// we group the calculations here so that when we are replacing it with innerHTML it will be redable ... we can make it   investmentSpan.innerHTML = (count * baseInvestment).toLocaleString(); .. (it looks too long this way.)

  investmentSpan.innerHTML = newInvestment.toLocaleString(); 
  investmentRol.innerHTML = newInvestmentRol.toLocaleString();
}

// used arrow function on add
addButton.addEventListener( 'click', () => {count = count + 1;
updateDisplay();
});

//used normal function on the minus
minusButton.addEventListener( 'click', function(){
  if (count > 1){
    count = count - 1;
  updateDisplay();
  } 
  });

  let containHTML = '';
  containHTML += `
  <div class="container">
        <div class="information-phase">
          <h1>INFORMATION</h1>
          <p class="information-para">Carefully fill in the form with the following instructions.</p>
          <p>
            1. Fill all inputs filled in Block format.
          </p>
          <p>
            2. Applicants outside nigeria should kindly include their country code.
          </p>
          <p>
            3. Your email must be a functional and active mail.
          </p>
          <p>
            4. We ask for your bank details for easy desemination of funds after the ROI date.
          </p>
          <p>
            5. Your Private information is safe with us.
          </p>
    
        </div>
    
        <div class="register-phase">
          <h1>REGISTER FORM</h1>
    
        <div class="details-phase">
          <div>
              <p>First Name</p>
              <input type="text"  class= "js-text" required>
          </div>
          <div>
            <p>Last Name</p>
            <input type="text"  class= "js-text" required>
          </div>
          <div>
            <p>Your Email</p>
            <input type="email"  class= "js-text" required>
          </div>
          <div>
            <p>Phone Number</p>
            <input type="number"  class= "js-text" required>
          </div>
          <div>
            <p>Address</p>
            <input type="text"  class= "js-text" required>
          </div>
          <div>
            <p>Bank Name</p>
            <input type="text"  class= "js-text" required>
          </div>
          <div>
            <p>Account Number</p>
            <input type="number"  class= "js-text" required>
          </div>
          <div>
            <p>Account Name</p>
            <input type="text" class= "js-text" required>
          </div>
          <div>
            <p>Amount to invest</p>
            <input type="number" class="number">
          </div>
            </div>
          
          <div class="agreement-phase">
            <input class="agree js-agree" type="checkbox">
            <p class="i-agree">I agree to the <span>Terms and Conditions</span></p>
          </div>
         
          <button class="submit-button js-submit" type="submit" disabled>
            Submit
          </button>
         

         
        </div>
        
      </div>
  `

  document.querySelector('.js-container')
  .innerHTML = containHTML

  const submitBtn = document.querySelector('.js-submit');
  const textInput = document.querySelectorAll('.js-text', '.number');
  const agreeCheckbox = document.querySelector('.js-agree');


  function checkInputs() {
    let allFilled = true;

    textInput.forEach(input => {
      if (input.value.trim() === '') {
        allFilled = false;
      }
    });

    submitBtn.disabled = !(allFilled && agreeCheckbox.checked);
  }

  textInput.forEach(input => input.addEventListener('input', checkInputs));
  agreeCheckbox.addEventListener('change', checkInputs);

  checkInputs();

  submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = './thankyou.html';
  })

