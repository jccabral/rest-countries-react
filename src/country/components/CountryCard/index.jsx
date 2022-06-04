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
                <div ref={imgRef} className={styles.flag} />
                <div className={styles.body}>
                    <div className={styles.title}><p>{name}</p></div>
                    <ul>
                        <li><p>Population: {population}</p></li>
                        <li><p>Region: {region}</p></li>
                        <li><p>Capital: {capital}</p></li>
                    </ul>
                </div>
            </div>
        </>
    )
}