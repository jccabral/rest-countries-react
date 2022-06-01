import { useEffect, useState, useContext } from "react"
import { CountryContext } from "../../context/country"
import CountryService from "../../country.service"
import CountryCard from "../CountryCard"
import styles from './CountryList.module.css'

export default function CountryList() {
    const { region, currentSearch } = useContext(CountryContext)
    const [countries, setCountries] = useState([])

    useEffect(() => {
        (async () => {
            if(region) {
                const res = await CountryService.getCountryByRegion(region)
                setCountries(res)
            } else if(currentSearch) {
                const res = await CountryService.getCountryByName(currentSearch)
                setCountries(res)
            } else {
                const res = await CountryService.getAllCountries()
                setCountries(res)
            }
        })()
    }, [region, currentSearch])
    
    return (
        <div className={styles.root}>
            {
                countries.map(({ name, capital, population, region, flags }) =>
                    <CountryCard key={name.common} name={name.common} capital={capital} population={population} region={region} flag={flags.png} />)
            }
        </div>
    )
}