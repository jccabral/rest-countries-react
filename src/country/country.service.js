export default class CountryService {
    static #baseUrl = 'https://restcountries.com/v3.1/'
    
    static async getAllCountries() {
        const res = await fetch(`${this.#baseUrl}/all`)
        
        return await res.json()
    }

    static async getCountryByRegion(region) {
        const res = await fetch(`${this.#baseUrl}/region/${region.toLowerCase()}`)

        return await res.json()
    }

    static async getCountryByName(name) {
        const res = await fetch(`${this.#baseUrl}/name/${name}`)

        return await res.json()
    }
}