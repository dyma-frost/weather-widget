let btn = document.querySelector("#button");

btn.addEventListener("click", getC);
let arr = [];

// let getCity = document.querySelector("#search").value;

function getC(e) {
    let getCity = document.querySelector("#search").value;
    arr.unshift(getCity);
    e.preventDefault();
    
    fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" +
            String(arr[0]) +
            "&units=metric&APPID=5d066958a60d315387d9492393935c19"
    )
        .then((res) => res.json())
        .then((data) => {
            
            let city = document.querySelector(".city");
            city.innerHTML = data.name;

            let tempNow = document.querySelector(".temperature-now");
            tempNow.innerHTML = "now " + Math.round(data.main.temp) + "°";

            let tempFL = document.querySelector(".temperature-feels-like");
            tempFL.innerHTML =
                "feels like " + Math.round(data.main.feels_like) + "°";

            let tempMax = document.querySelector(".temperature-max");
            tempMax.innerHTML =
                Math.round(data.main.temp_max) + "°" + "max";

            document.querySelector(".temperature-min").innerHTML =
                Math.round(data.main.temp_min) + "°" + "min";

            let wind = document.querySelector(".wind");
            wind.innerHTML = "wind <br>" + (data.wind.speed + " m/s");

            let humidity = document.querySelector(".humidity");
            humidity.innerHTML = "humidity <br>" + data.main.humidity + " %";

            let visibility = document.querySelector(".visibility");
            visibility.innerHTML = "visibility <br>" + data.visibility + " m";

            let src = document.querySelector(".weather-image");
            src.innerHTML = "";
            let img = new Image();
            img.src =
                "https://openweathermap.org/img/w/" +
                data.weather[0].icon +
                ".png";
            src.appendChild(img);
        });
}
