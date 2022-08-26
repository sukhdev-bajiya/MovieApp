document.querySelector("form").addEventListener("submit", userSignupDatas);

let userSignupData = JSON.parse(localStorage.getItem("userDataMovies")) || [];

function userSignupDatas(event) {
  event.preventDefault();

  let name = document.getElementById("name");
  let number = document.getElementById("contactNumber");
  let email = document.getElementById("email");
  let password = document.getElementById("password");

  let flagArray = userSignupData.filter(function (ele) {
    return ele.email == email.value || ele.number == number.value;
  });

  if (flagArray.length == 1) {
    alert("User signup data has already used");
  } else {
    let obj = {
      name: name.value,
      number: number.value,
      email: email.value,
      password: password.value,
    };
    userSignupData.push(obj);
    localStorage.setItem("userDataMovies", JSON.stringify(userSignupData));
    console.log(obj);
    name.value = "";
    number.value = "";
    email.value = "";
    password.value = "";

    alert("User signup successful");
    setTimeout(function() {
      window.open("./login.html", "_self");
    }, 2000);
  }
}