(function(){
  let form = document.querySelector('#contact-form');
  let emailInput = document.querySelector('#contact-email');
  let messageInput = document.querySelector('#contact-message');

  function showErrorMessage(input, message) {
    let container = input.parentElement;

    // Clears the error message if it exists before making new one 
    let error = container.querySelector('.error-message')
    if (error) {
      container.removeChild(error);
    }

    // Creates the error message if message string is not empty
    if (message) {
      let error = document.createElement('div');
      error.classList.add('error-message');
      error.innerText = message;
      container.appendChild(error);
    }
  }

  function validateEmail() {
    let value = emailInput.value;

    // Email is blank
    if (!value) {
      showErrorMessage(emailInput, 'Email is a required field.');
      return false;
    }

    // Email has no @
    if (value.indexOf('@') === -1) {
      showErrorMessage(emailInput, 'You must enter a valid email address.');
      return false;
    }

    // Email has no .
    if (value.indexOf('.') === -1) {
      showErrorMessage(emailInput, 'You must enter a valid email address.');
      return false;
    }

    // Clears the error message if no errors found
    showErrorMessage(emailInput, null);
    return true;
  }

  function validateMessage() {

    let value = messageInput.value;
    console.log('message');
    // Message is blank
    if (!value) {
      showErrorMessage(messageInput, 'Message is a required field.');
      return false;
    }

    showErrorMessage(messageInput, null);
    return true;
  }
  
  function validateForm() {
    let isValidEmail = validateEmail();
    let isValidMessage = validateMessage();

    return isValidEmail && isValidMessage;
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert('Success!');
    }
  })

  emailInput.addEventListener('input', validateEmail);
  messageInput.addEventListener('change', validateMessage);
})();
