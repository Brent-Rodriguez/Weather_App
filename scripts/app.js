const cityForm = document.querySelector('form')

const UpdateCity = async (city) => {

  const cityInfo = await getCity(city)
  const weather = await getWeather(cityInfo.Key)

  return {
    cityInfo,
    weather
  }
}

cityForm.addEventListener('submit', e => {
  e.preventDefault()

  // Gets the City
  const city = cityForm.city.value.trim()
  cityForm.reset()

  // Update UI 
  UpdateCity(city)
    .then(data => console.log(data))
    .catch(err => console.log(err))
})