import { useState, useContext } from "react";
import { CountryContext } from "../../context/country";
import styles from "./SearchMenu.module.css";
import SearchIcon from "./SearchIcon";

export default function SearchMenu() {
  const { filterSearch } = useContext(CountryContext)
  const { root, input } = styles;

  const handleSearch = ({ target }) => filterSearch(target.value) 

  return (
    <section className={root}>
      <div className={input}>
        <label>
          <SearchIcon />
          <input type="text" placeholder="Search for a country..." onInput={handleSearch} />
        </label>
      </div>

      <RegionDropdown />
    </section>
  );
}

function RegionDropdown() {
  const { filterByRegion, region } = useContext(CountryContext)
  const [open, setOpen] = useState(false)
  const { dropdown, show } = styles
  const regions = [
    'Africa',
    'Americas',
    'Asia',
    'Europe',
    'Oceania'
  ]
  const dropdownClassNames = `${styles['dropdown-list']} ${open ? show : null}`
  const handleOpenDropdown = () => setOpen(!open)
  const handleSelectRegion = ({ target }) => {
    handleOpenDropdown()
    filterByRegion(target.text)
  }
  const ChevronIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="ionicon" viewBox="0 0 512 512">
      <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="48" d="m112 184 144 144 144-144"/>
    </svg>
  )

  return (
  <div className={dropdown}>
    <div className={styles["dropdown-toggle"]} onClick={handleOpenDropdown}>
      <button aria-expanded="false">{ region ?? 'Filter by region' }</button>
      <ChevronIcon />
    </div>

    <ul className={dropdownClassNames}>
      {
        regions.map(region => (
          <li key={region}>
            <a className={styles["dropdown-item"]} href="#" onClick={handleSelectRegion}>{region}</a>
          </li>
        ))
      }
    </ul>
  </div>
  )
}