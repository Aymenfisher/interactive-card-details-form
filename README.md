# Frontend Mentor - Interactive card details form solution

This is a solution to the [Interactive card details form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-card-details-form-XpS8cKZDWw). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- Fill in the form and see the card details update in real-time
- Receive error messages when the form is submitted if:
  - Any input field is empty
  - The card number, expiry date, or CVC fields are in the wrong format
- View the optimal layout depending on their device's screen size
- See hover, active, and focus states for interactive elements on the page

### Screenshot
### Dektop View
![](./screenshots/web-1.png)
![](./screenshots/web-2.png)
![](./screenshots/web-3.png)
![](./screenshots/web-4.png)

### Mobile View
![](./screenshots/mobile-1.png)
![](./screenshots/mobile-2.png)

![](./screenshots/mobile-3.png)

### Links

- Solution URL: 
- Live Site URL: [live site URL here](https://aymenfisher.github.io/interactive-card-details-form)

## My process

### Built with

- HTML5
- CSS custom properties
- Flexbox
- CSS Grid
- Responsive Design
- Media queries
- JavaScript DOM


### What I learned

It was a good practice for my HTML,CSS, Responsive Design, Element Positioning ,JS DOM, Form Validation.
- i implemented multiple helper functions for the user experience and form validation like: 

  -Automatically add white space for each 4 charachter inputs on the card number using a regex (found the regex [here](https://stackoverflow.com/questions/53427046/how-to-add-space-between-every-4-characters-in-javascript))
    ```js
  cardNumber.addEventListener('input', (e) => {
      if(e.target.value.length == 0){
          cardNumberTarget.innerText = '0000 0000 0000 0000'
      }
      cardNumberTarget.innerText = e.target.value.match(/.{1,4}/g).join(' ');
  }
  )
    ```
  -Check if the input contains only numbers using a regex :
  ```js
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
  ```
  -

## Author

- Github - [Aymen boudabia](https://github.com/Aymenfisher)
- Frontend Mentor - [@aymenfisher](https://www.frontendmentor.io/profile/Aymenfisher)
