const API_KEY = `553d9d489b5558d30c2c0a94be32c704`

const tempShow = () =>{
    const inputArea = document.getElementById('input-area');
    const inputVlaue = inputArea.value;
    inputArea.value = '';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVlaue}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then(res => res.json())
    .then(data => tempDetails(data))
}

const tempDetails = temprature =>{
    console.log(temprature);
    // for city name
    const cityArea = document.getElementById('city-area');
    cityArea.innerText = `${temprature.name}`

    // for temp
    const tempNum = document.getElementById('temp-num');
    tempNum.innerText = `${temprature.main.temp}`;

    // temp condition
    const tempCondtion = document.getElementById('temp-count');
    tempCondtion.innerText = `${temprature.weather[0].main}`

    // img icon
    const url = `http://openweathermap.org/img/wn/${temprature.weather[0].icon}@2x.png`;
    const imgIcon = document.getElementById('img-icon');
    imgIcon.setAttribute ('src',url);
}