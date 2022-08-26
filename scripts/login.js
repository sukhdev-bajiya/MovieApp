document.querySelector("form").addEventListener("submit", userSignupDatas);

let userLoginData = JSON.parse(localStorage.getItem("userDataMovies")) || [];

function userSignupDatas(event) {
  event.preventDefault();

  let email = document.getElementById("email");
  let password = document.getElementById("password");

  let flagArray = userLoginData.filter(function (ele) {
    return ele.email == email.value || ele.password == password.value;
  });

  if (flagArray.length == 1) {
    alert("User login successful");
    localStorage.setItem("userLoginSuccessful", "true");
    localStorage.setItem("userName", flagArray[0].name);
    setTimeout(function() {
      window.open("./index.html", "_self");
    }, 50);
    
  } else {
    
    alert("invalid Credentials");
    
  }
}