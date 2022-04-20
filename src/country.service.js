export default class CountryService {
    static #baseUrl = 'https://restcountries.com/v2/'
    
    static async getAllCountries() {
        const res = await fetch(`${this.#baseUrl}/all`)
        
        return await res.json()
    }
}