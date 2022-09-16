//////////////////// Usefull functions ////////////////
// Preview function on card:

function preview(source, target) {
    source.addEventListener('keyup', (e) => {
        target.innerText = e.target.value;
    })
}

// maxlength and max value input function :

function maxInputLength(digits, target) {
    target.addEventListener('input', (e) => {
        if (e.target.value.length > digits) {
            e.target.value = e.target.value.slice(0, digits);
        }
        if (e.target.max && e.target.value > e.target.max) {
            e.target.value = e.target.max;
        }
        if (e.target.min && e.target.value < e.target.min) {
            e.target.value = e.target.min;
        }
    })
}

//targeting inputs :

////////////////   cardholder name /////////////////
let holderName = document.getElementById('name');
let holderNameTarget = document.getElementById('card-name');

preview(holderName, holderNameTarget);

/////////////////////////////////////////////////////


/////////////// card number //////////////////////
let cardNumber = document.getElementById('card-number');
let cardNumberTarget = document.getElementById('number');

// defining pattern and restrictions on Card number:

// pattern for user experience
cardNumber.addEventListener('input', (e) => {
    if(e.target.value.length == 0){
        cardNumberTarget.innerText = '0000 0000 0000 0000'
    }
    cardNumberTarget.innerText = e.target.value.match(/.{1,4}/g).join(' ');
}
)

//////////////////////////////////////////////////


/////////////// expiration date ///////////////////
let expMonth = document.getElementById('expiration-month');
let expYear = document.getElementById('expiration-year');


let expMonthTarget = document.getElementById('card-month');
let expYearTarget = document.getElementById('card-year');

// restricting the user from typing more than 2 digits in months and 4 digits in years :
maxInputLength(2, expMonth)
maxInputLength(4, expYear)


preview(expMonth, expMonthTarget);
preview(expYear, expYearTarget);

///////////////////////////////////////////////////

//////////////// card cvc //////////////////////////

let cvcNumber = document.getElementById('cvc-number');
let cvcNumberTarget = document.getElementById('card-cvc');

// cvc must be 3 digits :
maxInputLength(3, cvcNumber)

preview(cvcNumber, cvcNumberTarget);


////////////// Form Validation ////////////////

//helper functions:


function checkMaxLength(element) {
    if (element.value.length < element.maxLength) {
        return true;
    }
}

// card number must contain numbers only function :
function checkNumbers(element) {
    let joinedInput = element.value.replace(/\s+/g, ''); // remove all white spaces
    if (joinedInput.length == 0) { // no whitespaces allowed
        return true;
    }
    let onlydigits = /^[0-9]*$/; //only digits regex
    if (onlydigits.test(joinedInput) == false) {
        return true;
    }
}

//show error message
function showError(element, elementSpan, message) {
    element.style.border = '1px solid red';
    elementSpan.innerHTML = message;
}

// Hide error messages if the input is valid :

function hideError(element, elementSpan) {
    element.style.border = '';
    elementSpan.innerHTML = '';
}


/// applying form validation :
let form = document.getElementById('form')

function formValidation(e) {
    e.preventDefault();

    const inputFields = [holderName, cardNumber, expMonth, expYear, cvcNumber];

    // Input fields error spans :

    let holderNameSpan = document.getElementById(holderName.id + '-msg');
    let cardNumberSpan = document.getElementById(cardNumber.id + '-msg');
    let expMonthSpan = document.getElementById(expMonth.id + '-msg');
    let expYearSpan = document.getElementById(expYear.id + '-msg');
    let cvcNumberSpan = document.getElementById(cvcNumber.id + '-msg');

    // Number of valid submitted input fields

    let validFields = 0;
    
    // holder name form validation : empty field 

    if (holderName.value.length == 0) {
        showError(holderName, holderNameSpan, 'Can\'t be blank');
    } else {
        hideError(holderName, holderNameSpan);
        validFields += 1;
    }

    // card number validations : empty field, must be numbers only , and must be 16 digits

    if (cardNumber.value.length == 0) {
        showError(cardNumber, cardNumberSpan, 'Can\'t be blank');

    }
    else if (checkMaxLength(cardNumber)) {
        showError(cardNumber, cardNumberSpan, 'Must be 16 digits');
    }
    else if (checkNumbers(cardNumber)) {
        showError(cardNumber, cardNumberSpan, 'Wrong Format, numbers only');
    }
    else {
        hideError(cardNumber, cardNumberSpan);
        validFields += 1;
    }

    // expiration month validation: no empty space
    if (expMonth.value.length == 0) {
        showError(expMonth, expMonthSpan, 'Can\'t be blank');
    }
    else {
        hideError(expMonth, expMonthSpan);
        validFields += 1;
    }

    // expiration year validation: no empty space
    if (expYear.value.length == 0) {
        showError(expYear, expYearSpan, 'Can\'t be blank');
    }
    else if (checkMaxLength(expYear)) {
        showError(expYear, expYearSpan, 'Thats too old buddy!');
    }
    else {
        hideError(expYear, expYearSpan);
        validFields += 1;
    }

    // CVC validation: no empty space
    if (cvcNumber.value.length == 0) {
        showError(cvcNumber, cvcNumberSpan, 'Can\'t be blank');
    }
    else {
        hideError(cvcNumber ,cvcNumberSpan);
        validFields += 1;
    }


    if (validFields != inputFields.length) { // one field at least is not valid : no validation.
        return false;
    }
    else{ // all fields all valid: succes validation
        document.getElementById('form').style.display = 'none'
        document.getElementsByClassName('thanks')[0].style.display = 'grid';
        document.getElementById('continue-btn').onclick = () => {location.reload()};
    }
}

form.addEventListener('submit', formValidation);