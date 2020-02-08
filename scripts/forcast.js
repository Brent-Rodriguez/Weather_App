const key = 'PUT YOUR API KEY HERE'

//Get Weather Info

const getWeather = async (locationID) => {

  const base = 'http://dataservice.accuweather.com/currentconditions/v1/'
  const query = `${locationID}?apikey=${key}`

  const responce = await fetch(base + query)
  const data = await responce.json()

  return data[0]
}

//Get City
const getCity = async (city) => {
  const base = 'http://dataservice.accuweather.com/locations/v1/cities/search'
  const query = `?apikey=${key}&q=${city}`

  const responce = await fetch(base + query)
  const data = await responce.json()

  return data[0]
}

getCity('San Antonio').then(data => {
  return getWeather(data.Key)
  }).then(data => {
    console.log(data)
  })
  .catch(err => console.log(err))

