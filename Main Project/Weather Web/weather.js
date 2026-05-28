//ASSECCING THE ELEMENTS FROM HTML
let searchbtn = document.querySelector("#search-icon");
console.log(searchbtn);
let area = document.querySelector("#location");
console.log(area);
let temp = document.querySelector(".temperature");
console.log(temp);
let humid = document.querySelectorAll(".humidity-count p")[0];
console.log(humid);
let wind = document.querySelectorAll(".wind-count p")[0];
console.log(wind);
let searchbar = document.querySelector("#search-bar input");
let imagee = document.querySelector(".image img");
let weather = document.querySelector(".indicator-text");

//ADDING THE FUNCTIONALITY OF ACCESSING THE CITY NAME FROM SEARCH
searchbtn.addEventListener("click", () => {
  const city = searchbar.value;

  if (city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=30a916292d02f2f6817a7e3732ea2236&units=metric`;

    let image = () => {
      // console.log(data.weather[0].main);
      aa = data.weather[0].main;
      console.log(aa);
      if (aa === "Clouds") {
        weather.textContent = aa;
        imagee.src = "cloudy.png";
      } 
      else if (aa === "Clear") {
        weather.textContent = aa;
        imagee.src = "clear.png";
      } 
      else if (aa === "Rain") {
        weather.textContent = aa;
        imagee.src = "rain.png";
      }
      else if (aa === "Drizzel") {
        weather.textContent = aa;
        imagee.src = "drizzel.png";
      }
      else if (aa === "Thunder") {
        weather.textContent = aa;
        imagee.src = "thunder.png";
      }
      else if (aa === "Snow") {
        weather.textContent = aa;
        imagee.src = "snow.png";
      }

    };
    //IF USER DO NOT ENTERS THE CITY

    fetch(url)
      .then((rawdata) => {
        //here we are storing the data we got from the fetch in the *rawdata*
        return rawdata.json();
      })
      .then((realdata) => {
        //here the data of then is getting stored in the *realdata* and then getting logged in the console.
        data = realdata;
        console.log(data);

        //HERE ASSIGNING ALL THE DATA TO THE ELEMENTS
        temp.textContent = Math.round(data.main.temp) + "°C";
        area.textContent = data.name;
        humid.textContent = data.main.humidity;
        wind.textContent = data.wind.speed;
        image();
      });

    // if()
    setTimeout(() => {
      searchbar.value = "";
    }, 500);
  } else {
    alert("Please enter the city name..!");
  }
});

// document.querySelector(".image img").src = "clear.png";
