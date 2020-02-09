const cityForm = document.querySelector('form')

const card = document.querySelector('.card')
const details = document.querySelector('.details')

const time = document.querySelector('img.time')
const icon = document.querySelector('.icon img')


const updateUI = (data) => {
  //Destructured Properties
  const { cityInfo, weather} = data
  console.log(cityInfo, weather)

  
  // Update Details
  details.innerHTML = `
    <h5 class="my-3">${cityInfo.EnglishName}</h5>
    <div class="my-3">${weather.WeatherText}</div>
    <div class="display-4 my-4">
      <span>${weather.Temperature.Imperial.Value}</span>
      <span>&deg;F</span>
    </div>
`;

// Update Time/ Icons
const iconSrc = `img/icons/${weather.WeatherIcon}.svg`;
icon.setAttribute('src', iconSrc);

let timeSrc = weather.IsDayTime ? 'img/day.svg' : 'img/night.svg';
time.setAttribute('src', timeSrc);

  // Remove d-none Class
  if(card.classList.contains('d-none')){
    card.classList.remove('d-none');
  }
}

// Update City Info
const UpdateCity = async (city) => {

  const cityInfo = await getCity(city)
  const weather = await getWeather(cityInfo.Key)


  return {
    cityInfo,
    weather 
  }
}


// Submit Input
cityForm.addEventListener('submit', e => {
  e.preventDefault()

  // Gets the City
  const city = cityForm.city.value.trim()
  cityForm.reset()

  // Update UI 
  UpdateCity(city)
    .then(data => updateUI(data))
    .catch(err => console.log(err))
})