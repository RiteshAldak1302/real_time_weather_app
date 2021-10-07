

const submit_btn = document.getElementById('submit_btn');
const city_name = document.getElementById('city_name');
const temp = document.getElementById('temp');
const data_hide = document.querySelector('.data_hide');
const weather_status = document.getElementById('weather_status');
const temp_status = document.querySelector('.temp_status');

 

const current_date = new Date();
const days = ["Sunday", "Monday", "Teusday", "Wednesday", "Thrusday", "Friday", "Saturday"];
const daysname = document.querySelector('#day');
daysname.textContent= days[current_date.getDay()];

const dateElement = document.querySelector('#date');

const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
dateElement.textContent = new Date().getDate() + ", " + monthNames[new Date().getMonth()].substring(0, 3);


submit_btn.addEventListener('click', async(event) => {
    event.preventDefault();
    const cityName = document.getElementById('cityName');
    let city_value = cityName.value;
    if(city_value==""){
        city_name.innerText ='please enter your city name....';
    }else{
        const api ='c19f96902d18ed1e78c080988a81b541';
        url =   `https://api.openweathermap.org/data/2.5/weather?q=${city_value}&units=metric&appid=`+ api ;
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        city_name.innerText =`${city_value}  ` + "," + data.sys.country;
        data_hide.style.visibility = 'visible';
        temp.textContent = data.main.temp +"'C" ;
        const weather_status = document.querySelector('.weather_status');
        weather_status.style.visibility = 'visible';
        weather_status.innerText=  data.weather[0].main
    temp_cond = data.weather[0].main ;
    if(temp_cond=="Clear"){
        temp_status.innerHTML ="<i class='fas fa-sun' style='color: yellow;'></i>"
    }else if(temp_cond=="Clouds"){
        temp_status.innerHTML =" <i class='fas fa-cloud' style='color: #0e6ffc;'></i>"
    }else if(temp_cond=="Rain"){
        temp_status.innerHTML =" <i class='fas fa-cloud-rain' style='color: #0e6ffc;'></i>"
    }else{
        temp_status.innerHTML =" <i class='fas fa-cloud-rain' style='color: #0e6ffc;'></i>"
    }
    
 }
})


