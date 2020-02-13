class Forecast {
  constructor(){
    this.key = 'D5unKCtOr9yZjcAEFkPOSnjEejISBxxg';
    this.weatherURI = 'http://dataservice.accuweather.com/currentconditions/v1/';
    this.cityURI = 'http://dataservice.accuweather.com/locations/v1/cities/search'
  }
  async updateCity(city){
    const cityInfo = await this.getCity(city)
    const weather = await this.getWeather(cityInfo.Key)
    return {cityInfo, weather}
  }
  async getCity(city){
    const query = `?apikey=${this.key}&q=${city}`
    const responce = await fetch(this.cityURI + query)
    const data = await responce.json()
    return data[0]
  }
  async getWeather(locationID){
    const query = `${locationID}?apikey=${this.key}`
    const responce = await fetch(this.weatherURI + query)
    const data = await responce.json()
    return data[0]
  }
}



