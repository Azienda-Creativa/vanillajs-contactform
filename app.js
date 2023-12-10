const nameError = document.getElementById("name-error")
const phoneError = document.getElementById("phone-error")
const emailError = document.getElementById("email-error")
const messageError = document.getElementById("message-error")
const submitError = document.getElementById("submit-error")

const validateName = () => {
  const name = document.getElementById("contact-name").value

  if (name.length === 0) {
    nameError.innerHTML = "Name is required"
    return false
  } else if (!name.match(/^[A-Za-z]+\s[A-Za-z]+$/)) {
    nameError.innerHTML = "Write full name"
    return false
  } else {
    nameError.innerHTML = "<span>&#9745;</span>"
    return true
  }
}

const validatePhone = () => {
  const phone = document.getElementById("contact-phone").value

  if (phone.length === 0) {
    phoneError.innerHTML = "Phone nr is required"
    return false
  }
  if (!phone.match(/^[0-9]{10}$/)) {
    phoneError.innerHTML = "Write full phone nr."
    return false
  }
  phoneError.innerHTML = "<span>&#9745;</span>"
  return true
}

const validateEmail = () => {
  const email = document.getElementById("contact-email").value

  if (email.length === 0) {
    emailError.innerHTML = "Email is required"
    return false
  }
  if (!email.match(/^[A-Za-z]+[._-]*[0-9]*@[A-Za-z]+\.[a-z]{2,4}$/)) {
    emailError.innerHTML = "Email not valid"
    return false
  }
  emailError.innerHTML = "<span>&#9745;</span>"
  return true
}

const validateMessage = () => {
  const message = document.getElementById("contact-message").value
  const required = 30
  const leftover = required - message.length

  if (leftover > 0) {
    messageError.innerHTML = leftover + " More chatacters requried"
    return false
  } else {
    messageError.innerHTML = "<span>&#9745;</span>"
    return true
  }
}

const validateForm = () => {
  if (!validateName() || !validateEmail() || !validatePhone() || !validateMessage()) {
    submitError.style.display = "block"
    submitError.innerHTML = "Please fix error to submit"
    setTimeout(() => {
      submitError.style.display = "none"
    }, 2000)
    return false
  }
}
