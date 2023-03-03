const button = document.getElementById('get_weather');
const div2 = document.getElementById('div2');
const p = document.createElement('p');
button.addEventListener('click', ()=>{
    const latitude = document.getElementById('latitude').value;
    const longitude = document.getElementById('longitude').value;
    console.log(latitude, longitude)
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m`;
    fetch(url)
    .then(res => res.json())
    .then(data =>{
        const temp = data.current_weather.temperature;
        console.log(temp);
        p.innerHTML = `Current temperature of the location: ${temp}°C`
    })
    .catch(error => {
        console.log('Error while fetching the data')
        p.innerHTML = 'Please use the current coordinates.'
    })
    div2.appendChild(p);
})

