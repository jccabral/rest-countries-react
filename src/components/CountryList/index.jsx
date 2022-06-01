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
            const res = await CountryService.getAllCountries()
            setCountries(res)
        })()
    }, [])
    
    return (
        <div className={styles.root}>
            {
                countries.map(({ name, capital, population, region, flag }) => 
                    <CountryCard key={name} name={name} capital={capital} population={population} region={region} flag={flag} />)
            }
        </div>
    )
}