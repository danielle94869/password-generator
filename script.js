// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");


  let upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
  let lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  let numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
  let special = ['+', '-', '&', '!', '(', ')', '{', '}', '[', ']', '^', '~', '*', '?', ':']


  const generatePassword = () => {

    let possibleCharacter = []
    let guaranteedCharacter = []
    let passwords = []

    let length = parseInt(prompt('How long is the password: (Minimum: 8, Maximum: 128)'))

    if (length < 8 || length > 128) {
      alert('Please choose a valid length')
      return
    }

    if (confirm('Do you want to include upper-case character')) {
      possiblePassword = possiblePassword.concat(upperCase)
      guaranteedPassword.push(upperCase[Math.floor(Math.random() * upperCase.length)])
    }

    if (confirm('Do you want to include lower-case character')) {
      possiblePassword = possiblePassword.concat(lowerCase)
      guaranteedPassword.push(upperCase[Math.floor(Math.random() * lowerCase.length)])
    }

    if (confirm('Do you want to include numeric character')) {
      possiblePassword = possiblePassword.concat(numbers)
      guaranteedPassword.push(numbers[Math.floor(Math.random() * numbers.length)])
    }

    if (confirm('Do you want to include special character')) {
      possiblePassword = possiblePassword.concat(special)
      guaranteedPassword.push(upperCase[Math.floor(Math.random() * special.length)])
    }

    for (let i = 0; i < length; i++) {
      passwords.push(possiblePassword[Math.floor(Math.random() * possiblePassword.length)])
    }

    for (let i = 0; i < guaranteedPassword.length; i++) {
      passwords[i] = guaranteedPassword[i]
    }

    return passwords.join(', ')
  }

  document.getElementById('generate').addEventListener('click', () => {
    let password = generatePassword()

    document.getElementById('password').textContent = password
  })


}

passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
