
/* 
*----------------------
*[ Variables ]        |
*----------------------
*/
const form = document.querySelector('form[action="index.html"]')
const nameEntry = document.querySelector('#name')
const emailAddress = document.querySelector('#email')
const jobRole = document.querySelector('#title')
const otherJobRole = document.querySelector('#other-job-role')
const design = document.querySelector('#design')
const colors = document.querySelector('#color')
const checkboxes = document.querySelectorAll('input[type=checkbox]')
const registerForActivity = document.querySelector('#activities')
const totalCost = document.querySelector('#activities-cost')
const payType = document.querySelector('#payment')
const creditCard = document.querySelector('#credit-card')
const creditCardNumber = document.querySelector('#cc-num')
const zipCode = document.querySelector('#zip')
const cvv = document.querySelector('#cvv')
const payPal = document.querySelector('#paypal')
const bitCoin = document.querySelector('#bitcoin')


let costAmount = 0


// Default settings for the page when first loaded
nameEntry.focus()
otherJobRole.style.display = 'none'
colors.disabled = true
document.querySelector('option[value="credit-card"]').selected = true
paypal.style.display = 'none'
bitcoin.style.display = 'none'


/* 
*----------------------
*[ Functions ]        |
*----------------------
*/

// check name for validity when submitted
function validName () {
    const nameInput = nameEntry.value
    const regName = /^[A-Za-z]+ ?[A-Za-z]*?$/.test(nameInput)
    const nameAlert = document.querySelector('#name-hint')
  
    if (!regName) {
      nameAlert.parentElement.classList.remove('valid')
      nameAlert.parentElement.classList.add('not-valid')
      nameAlert.classList.remove('hint')
    } else if (regName) {
      nameAlert.classList.remove('not-valid')
      nameAlert.classList.add('valid')
      nameAlert.classList.add('hint')
    }
    return regName
  }
  
  // check email for validity, added conditional when submitted
  function validEmail () {
    const emailInput = emailAddress.value
    const regEmail = /[^@]+@[^@.]+\.[a-z]+$/i.test(emailInput)
    const emailAlert = document.querySelector('#email-hint')
  
    if (!regEmail) {
      if (emailInput === '') {
        emailAlert.textContent = 'Oops! Email address field was left blank.'
      } else {
        emailAlert.textContent = 'Oops! Email address is incomplete/must be formatted properly.'
      }
      emailAlert.parentElement.classList.remove('valid')
      emailAlert.parentElement.classList.add('not-valid')
      emailAlert.classList.remove('hint')
    } else if (regEmail) {
      emailAlert.parentElement.classList.remove('not-valid')
      emailAlert.parentElement.classList.add('valid')
      emailAlert.classList.add('hint')
    }
    return regEmail
  }
  
  // real time error listener for email entry
  emailAddress.addEventListener('keyup', () => {
    validEmail()
  })

  // check activities for validity when submitted
  function validActivities () {
    let checkedNum = 0
    let activitiesValid
    const activitiesAlert = document.querySelector('#activities-hint')
  
    for (let i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].checked) {
        checkedNum++
      }
    }
  
    if (checkedNum > 0) {
      activitiesValid = true
    } else {
      activitiesValid = false
    }
  
    if (!activitiesValid) {
      activitiesAlert.parentElement.classList.remove('valid')
      activitiesAlert.parentElement.classList.add('not-valid')
      activitiesAlert.classList.remove('hint')
    } else if (activitiesValid) {
      activitiesAlert.parentElement.classList.remove('not-valid')
      activitiesAlert.parentElement.classList.add('valid')
      activitiesAlert.classList.add('hint')
    }
    return activitiesValid
  }
  
  // check CC number for validity when submitted
  function validCCNumber () {
    const creditNumInput = creditCardNumber.value
    const regCreditNum = /^\d{13}\d?\d?\d?$/.test(creditNumInput)
    const cardNumAlert = document.querySelector('#cc-hint')
  
    if (!regCreditNum) {
      cardNumAlert.parentNode.classList.remove('valid')
      cardNumAlert.parentNode.classList.add('not-valid')
      cardNumAlert.classList.remove('hint')
    } else if (regCreditNum) {
      cardNumAlert.parentNode.classList.remove('not-valid')
      cardNumAlert.parentNode.classList.add('valid')
      cardNumAlert.classList.add('hint')
    }
    return regCreditNum
  }
  
  // check zip code for validity when submitted
  function validZipCode () {
    const zipCodeInput = zipCode.value
    const regZipCode = /^\d{5}$/.test(zipCodeInput)
    const zipCodeAlert = document.querySelector('#zip-hint')
  
    if (!regZipCode) {
      zipCodeAlert.parentNode.classList.remove('valid')
      zipCodeAlert.parentNode.classList.add('not-valid')
      zipCodeAlert.classList.remove('hint')
    } else if (regZipCode) {
      zipCodeAlert.parentNode.classList.remove('not-valid')
      zipCodeAlert.parentNode.classList.add('valid')
      zipCodeAlert.classList.add('hint')
    }
    return regZipCode
  }
  
  // check for validity of CVV number when submitted
  function validCVV () {
    const cvvInput = cvv.value
    const showCVV = /^\d{3}$/.test(cvvInput)
    const cvvAlert = document.querySelector('#cvv-hint')
  
    if (!showCVV) {
      cvvAlert.parentNode.classList.remove('valid')
      cvvAlert.parentNode.classList.add('not-valid')
      cvvAlert.classList.remove('hint')
    } else if (showCVV) {
      cvvAlert.parentNode.classList.remove('not-valid')
      cvvAlert.parentNode.classList.add('valid')
      cvvAlert.classList.add('hint')
    }
    return showCVV
  }



/* 
*----------------------
*[ Event Listeners ]  |
*----------------------
*/

//Other job role field will display when called
jobRole.addEventListener('change', (e) => {
    if (e.target.value === 'other') {
      otherJobRole.style.display = ''
    } else {
      otherJobRole.style.display = 'none'
    }
  })

  //Color drop down screen will enable when criteria met, calling color options
  design.addEventListener('change', (e) => {
    colors.disabled = false
  
    if (e.target.value === 'js puns') {
      for (let i = 0; i < colors.length; i++) {
        const theme = colors[i].getAttribute('data-theme')
  
        if (theme === e.target.value) {
          colors[i].style.display = ''
          colors[i].selected = true
        } else {
          colors[i].style.display = 'none'
          colors[i].selected = false
        }
      }
    } else if (e.target.value === 'heart js') {
      for (let i = 0; i < colors.length; i++) {
        const theme = colors[i].getAttribute('data-theme')
  
        if (theme === e.target.value) {
          colors[i].style.display = ''
          colors[i].selected = true
        } else {
          colors[i].style.display = 'none'
          colors[i].selected = false
        }
      }
    }
  })

  //activity check boxes and total costs running tally
  registerForActivity.addEventListener('change', (e) => {
    const checkedActivity = e.target
    const activityCost = +checkedActivity.getAttribute('data-cost')
    const activityTime = checkedActivity.getAttribute('data-day-and-time')
  
    for (let i = 0; i < checkboxes.length; i++) {
      const conflictingTime = checkboxes[i].getAttribute('data-day-and-time')
  
      if (checkedActivity !== checkboxes[i] && activityTime === conflictingTime) {
        checkboxes[i].disabled = true
  
        if (checkedActivity.checked) {
          checkboxes[i].disabled = true
          checkboxes[i].parentElement.classList.add('disabled')
        } else {
          checkboxes[i].disabled = false
          checkboxes[i].parentElement.classList.remove('disabled')
        }
      }
    }
  
    if (checkedActivity.checked) {
        costAmount += activityCost
    } else {
        costAmount -= activityCost
    }
    totalCost.innerHTML = `Total: $${costAmount}`
  })

//event listener to remove pay methods based on selected type 
payType.addEventListener('change', (e) => {
    const paymentInput = e.target.value
  
    if (paymentInput === creditCard.id) {
      creditCard.style.display = 'block'
      paypal.style.display = 'none'
      bitcoin.style.display = 'none'
    } else if (paymentInput === paypal.id) {
      paypal.style.input = 'block'
      creditCard.style.display = 'none'
      bitcoin.style.display = 'none'
    } else if (paymentInput === bitcoin.id) {
      bitcoin.style.display = 'block'
      creditCard.style.display = 'none'
      paypal.style.display = 'none'
    }
  })

  //set focus to chosen activity and remove from non selected activity
checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('focus', (e) => {
      const parentFocused = e.target.parentNode
      parentFocused.classList.add('focus')
    })
  })
  
  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('blur', (e) => {
      const parentBlurred = e.target.parentNode
      parentBlurred.classList.remove('focus')
    })
  })
  
  //event listener to prevent submit if any entries are invalid or incomplete
  form.addEventListener('submit', (e) => {
    const validChecker = []
  
    validChecker.push(validName())
    validChecker.push(validEmail())
    validChecker.push(validActivities())
  
    if (payType.value === 'credit-card') {
      validChecker.push(validCCNumber())
      validChecker.push(validZipCode())
      validChecker.push(validCVV())
    }
  
    if (validChecker.includes(false)) {
      e.preventDefault()
    }
  })
  
