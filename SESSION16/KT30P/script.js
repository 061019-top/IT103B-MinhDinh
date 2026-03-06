let formElement = document.getElementsByClassName("form")[0];
let emailInput = document.getElementsByClassName("mail")[0];
let passwordInput = document.getElementsByClassName("pass")[0];
let rePasswordInput = document.getElementsByClassName("repass")[0];

const showData = (e) => {
  e.preventDefault();
  
  let emailValue = emailInput.value;
  let passwordValue = passwordInput.value;
  let rePasswordValue = rePasswordInput.value;

  const user = {
    email: emailValue,
    password: passwordValue,
    rePassword: rePasswordValue
  };

  console.log(user);
};

formElement.addEventListener("submit",showData);