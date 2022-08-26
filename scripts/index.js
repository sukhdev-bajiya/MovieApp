pageLoad();

let moviesList = [
  "https://image-resizer-cloud-api.akamaized.net/image/FFD5F949-E501-4229-9B53-795C5B42178E/0-3x1.jpg?width=1920",
  "https://image-resizer-cloud-api.akamaized.net/image/C6DE0F89-3C79-4E94-9324-913D1BA65563/0-3x1.jpg?width=1920",
  "https://image-resizer-cloud-api.akamaized.net/image/29EC91CB-23FD-49F7-8094-608D216E0231/0-3x1.jpg?width=1920",
  "https://image-resizer-cloud-api.akamaized.net/image/A2D5FA05-208D-45CC-9394-7AA4BEA8ED8F/0-3x1.jpg?width=1920",
  "https://image-resizer-cloud-api.akamaized.net/image/AB4E98DA-CAA5-48C0-81A8-DB20084EE026/0-3x1.jpg?width=1920",
  "https://image-resizer-cloud-api.akamaized.net/image/58873AFE-D16F-4ADD-8EA7-658462587A83/0-3x1.jpg?width=1920",
];
function pageLoad() {
  document.querySelector("nav").innerHTML = "";
  if (localStorage.getItem("userLoginSuccessful") == "true") {
    let data = `<h2>${localStorage.getItem("userName")}</h2>
        <button onclick="logoutUser()">Logout</button>`;

    let div = document.createElement("div");
    div.innerHTML = data;

    document.querySelector("nav").append(div);
  } else {
    let data = `<a href="./index.html">Home</a>
    <a href="./signup.html">Signup</a>
    <a href="./login.html">Login</a>`;

    let div = document.createElement("div");
    div.innerHTML = data;

    document.querySelector("nav").append(div);
    document.getElementById("slideshow").innerHTML = "";
  }
}
let data = `<img src="${moviesList[0]}" alt="">`;
document.getElementById("slideshow").innerHTML = data;
let i = 0;
setInterval(() => {
  if (i == moviesList.length) {
    i = 0;
  }
  let data = `<img src="${moviesList[i]}" alt="">`;
  i++;
  document.getElementById("slideshow").innerHTML = data;
}, 3000);

function logoutUser() {
  localStorage.setItem("userLoginSuccessful", "false");
  document.getElementById("slideshow").innerHTML = "";
  pageLoad();
}

let newMoviesListLoc = [
  {
    image_Url:
      "https://m.media-amazon.com/images/M/MV5BNzBkMTYwYjktMzFlZS00MmNhLTgxNjYtNGEwYjUxYTBlNjM5XkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_UX67_CR0,0,67,98_AL_.jpg",
    movieName: "Rocketry: The Nambi Effect",
    IMDb_Reting: 9.3,
    releaseDate: "1 July 2022",
  },
  {
    image_Url:
      "https://m.media-amazon.com/images/M/MV5BYzJkZDIwYTAtMGU4Mi00NzU3LWI1MWItODg0M2Q1NmIxYmNlXkEyXkFqcGdeQXVyMTIyNzY0NTMx._V1_UY98_CR5,0,67,98_AL_.jpg",
    movieName: "The Kashmir Files",
    IMDb_Reting: 8.3,
    releaseDate: "11 March 2022	",
  },
  {
    image_Url:
      "https://m.media-amazon.com/images/M/MV5BZDNlNzBjMGUtYTA0Yy00OTI2LWJmZjMtODliYmUyYTI0OGFmXkEyXkFqcGdeQXVyODIwMDI1NjM@._V1_UX67_CR0,0,67,98_AL_.jpg",
    movieName: "K.G.F: Chapter 1",
    IMDb_Reting: 8.2,
    releaseDate: "December 21, 2018",
  },
  {
    image_Url:
      "https://m.media-amazon.com/images/M/MV5BY2FiMTFmMzMtZDI2ZC00NDQyLWExYTUtOWNmZWM1ZDg5YjVjXkEyXkFqcGdeQXVyODIwMDI1NjM@._V1_UX140_CR0,0,140,209_AL_.jpg",
    movieName: "Vikram Vedha",
    IMDb_Reting: 8.2,
    releaseDate: "21 July 2017",
  },
  {
    image_Url:
      "https://m.media-amazon.com/images/M/MV5BYWVlMjVhZWYtNWViNC00ODFkLTk1MmItYjU1MDY5ZDdhMTU3XkEyXkFqcGdeQXVyODIwMDI1NjM@._V1_UY209_CR0,0,140,209_AL_.jpg",
    movieName: "Baahubali: The Beginning",
    IMDb_Reting: 8,
    releaseDate: "10 July 2015	",
  },
  {
    image_Url:
      "https://m.media-amazon.com/images/M/MV5BNDU2MzNkMjUtOTE1Ny00NWY5LWFkNTEtNTMxYTAwYTc5NjllXkEyXkFqcGdeQXVyMjkxNzQ1NDI@._V1_UY209_CR4,0,140,209_AL_.jpg",
    movieName: " Mumbai Police",
    IMDb_Reting: 7.9,
    releaseDate: "3 May 2013",
  },
  {
    image_Url:
      "https://m.media-amazon.com/images/M/MV5BY2EwMWQ3ZDktZWM1Yi00MzZjLTlmNWUtMTY1MWM2YWM5ZGViXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_UY209_CR0,0,140,209_AL_.jpg",
    movieName: "Arundhati",
    IMDb_Reting: 4.9,
    releaseDate: "30 May 2014",
  },
  {
    image_Url:
      "https://m.media-amazon.com/images/M/MV5BOGNlNmRkMjctNDgxMC00NzFhLWIzY2YtZDk3ZDE0NWZhZDBlXkEyXkFqcGdeQXVyODIwMDI1NjM@._V1_UX140_CR0,0,140,209_AL_.jpg",
    movieName: "Baahubali 2: The Conclusion ",
    IMDb_Reting: 8.2,
    releaseDate: "28 April 2017",
  },
  {
    image_Url:
      "https://m.media-amazon.com/images/M/MV5BZDFlYzMzZmMtMzIzMy00ZGEzLTg0ZTgtMDQzMmE4MGNlYmE0XkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_UY209_CR18,0,140,209_AL_.jpg",
    movieName: "Vedalam",
    IMDb_Reting: 6.2,
    releaseDate: "10 November 2015	",
  },
];
localStorage.setItem("movies", JSON.stringify(newMoviesListLoc));

let newMoviesList = JSON.parse(localStorage.getItem("movies"));

nineByNineMovieList(newMoviesList);
function nineByNineMovieList(newMoviesList) {
  document.getElementById("movies").innerHTML="";
  newMoviesList.map(function (ele) {
    let data = `<img src="${ele.image_Url}" alt="">
    <div>
        <h3>${ele.movieName}</h3>
        <p>${ele.releaseDate}</p> 
        <p>IMDb Reting : <img src="https://uxwing.com/wp-content/themes/uxwing/download/36-arts-graphic-shapes/star.png" alt=""> ${ele.IMDb_Reting}</p>
    </div>
    `;

    let div = document.createElement("div");
    div.className = "moviePoster";
    div.innerHTML = data;
    document.getElementById("movies").append(div);
  });
}

document.getElementById("sort-hl").addEventListener("click", sortByhl);

function sortByhl() {
  newMoviesList.sort(function (a, b) {
    return a.IMDb_Reting - b.IMDb_Reting;
  });
  nineByNineMovieList(newMoviesList);
}

document.getElementById("sort-lh").addEventListener("click", sortBylh);

function sortBylh() {
  newMoviesList.sort(function (a, b) {
    return b.IMDb_Reting - a.IMDb_Reting;
  });
  nineByNineMovieList(newMoviesList);
}

