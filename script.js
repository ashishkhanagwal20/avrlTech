const search = document.getElementById("search-btn");
const city = document.getElementById("city-dropdown");
const getWeather = document.getElementById("get-btn");
let rightSide = document.getElementById("right-side");
let inputCity = document.getElementById("input-city");

let url = "";

const checkValue = city.options[city.selectedIndex].value;
const checkText = city.options[city.selectedIndex].text;

city.addEventListener("change", (e) => {
  const value = e.target.value;
  const text = city.options[city.selectedIndex].text;

  if (value == "London") {
    url = "https://python3-dot-parul-arena-2.appspot.com/test?cityname=London";
  } else if (value == "New York") {
    url =
      "https://python3-dot-parul-arena-2.appspot.com/test?cityname=New York";
  } else if (value == "Los Angeles") {
    url =
      "https://python3-dot-parul-arena-2.appspot.com/test?cityname=Los Angeles";
  } else if (value == "Las Vegas") {
    url =
      "https://python3-dot-parul-arena-2.appspot.com/test?cityname=Las Vegas";
  }
});

getWeather.addEventListener("click", (e) => {
  fetch(url)
    .then((response) => response.json())

    .then((data) => {
      rightSide.innerHTML += `<div class = "cards">
      <div>
      <p>Description:<input type = "text" value = "${
        data.description
      }"></input></p></div>
    <div><p>Temperature: ${data.temp_in_celsius}</p></div>
      <div> <p>Pressure: ${data.pressure_in_hPa}</p></div>
      <div> <p>Data age: ${new Date() - data.date_and_time}</p></div>
    </div>`;
    });
  //     <p>Temperature:</p>
  //     <p>${data.temp_in_celsius}</p>
  //     <p>Pressure:</p>
  //     <p>${data.pressure_in_hPa}</p>
  //     <p>Data age:</p>
  //     <p>${new Date() - data.date_and_time}</p>
  //     </nav>
  // </div>`;
});

// async function get() {
//   const response = await fetch(url);
//   const dataObj = await response.json();
// }

search.addEventListener("click", function () {});
