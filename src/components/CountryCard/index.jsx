import { useRef, useEffect } from 'react'
import styles from './CountryCard.module.css'

export default function CountryCard({ name, population, region, capital, flag }) {
    const imgRef = useRef(null)

    useEffect(() => {
        imgRef.current.style.backgroundImage = `url('${flag}')`
    })

    return(
        <>
            <div className={styles.root}>
                <div ref={imgRef} className={styles.flag}>
                </div>
                <div>
                    <p>{name}</p>
                </div>
                <ul>
                    <li>Population: {population}</li>
                    <li>Region: {region}</li>
                    <li>Capital: {capital}</li>
                </ul>
            </div>
        </>
    )
}