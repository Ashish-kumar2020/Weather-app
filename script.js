console.log('Weather app');

const API_KEY = `3265874a2c77ae4a04bb96236a642d2f`;

const form = document.querySelector("form")
const weather = document.querySelector("#weather");
const search = document.querySelector('#search');

const getWeather = async (city)=>{
    weather.innerHTML = `Loading...`
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    const response =await fetch(url);
    console.log(response);
    const data = await response.json();
    console.log(data);
    return showWeather(data);
}

const showWeather = (data)=>{
    if(data.cod == '404'){
        weather.innerHTML = `
            <h2>City Not found</h2>
        `
        return;
    }
    weather.innerHTML = `
    <div>
        <img src="https://openweathermap.org/img/win/${data.weather[0].icon}" alt="">
    </div>  
        <div>
            <h2>${data.name}</h2>
            <h4>${data.main.temp}℃</h4>
            <h4>${data.weather[0].main}</h4>
        </div>
    `
}

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    // console.log(search.value);
    getWeather(search.value)
})
