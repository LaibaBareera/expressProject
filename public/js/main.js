const submitButton = document.getElementById('submitted');
const cityName = document.getElementById('cityName');
const city_name = document.getElementById('city_name');
const temp = document.getElementById('temp');
const datahide = document.querySelector('.middle_layer');
const temp_status = document.getElementById('temp_status');



const getInfo = async (event) => {
    event.preventDefault();
    let cityVal = cityName.value;
    if (cityVal === "") {
        city_name.innerText = `Plz enter the name before search`;
    datahide.classList.add("data_hide");
    }
    else {
        try {
            let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=5e6160e96b98d365c322d2a358bb33ad`;
            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data];
            city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
            temp.innerText = arrData[0].main.temp;
            const tempMood = arrData[0].weather[0].main;
            if (tempMood === "Clear") {
                temp_status.innerHTML = "<i class='fas fa-sun' style='color: #occc68;'></i>";
            }
            else if (tempMood === "Clouds") {
                temp_status.innerHTML = "<i class='fas fa-cloud' style='color: #f1f2f6;'></i>";
            }
            else if (tempMood === "rain") {
                temp_status.innerHTML = "<i class='fas fa-cloud-rain' style='color: #aa4b0be;'></i>";
            }
            else {
                temp_status.innerHTML = "<i class='fas fa-cloud-rain' style='color: #f1f2f6;'></i>";
            }
            datahide.classList.remove("data_hide");
        } catch {
            city_name.innerText = `Plz enter the city name properly`;
            datahide.classList.add("data_hide");
        }
    }
}

submitButton.addEventListener('click', getInfo);