import { useState } from "react";
import styles from "./SearchMenu.module.css";
import SearchIcon from "./SearchIcon";

export default function SearchMenu() {
  const { root, input } = styles;

  return (
    <section className={root}>
      <div className={input}>
        <label>
          <SearchIcon />
          <input type="text" placeholder="Search for a country..." />
        </label>
      </div>

      <RegionDropdown />
    </section>
  );
}

function RegionDropdown() {
  const [open, setOpen] = useState(false)
  const { dropdown, show } = styles
  const regions = [
    'Africa',
    'America',
    'Asia',
    'Europe',
    'Oceania'
  ]
  const dropdownClassNames = `${styles['dropdown-list']} ${open ? show : null}`
  const handleOpenDropdown = () => setOpen(!open)
  const ChevronIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="ionicon" viewBox="0 0 512 512">
      <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="48" d="m112 184 144 144 144-144"/>
    </svg>
  )

  return (
  <div className={dropdown}>
    <div className={styles["dropdown-toggle"]} onClick={handleOpenDropdown}>
      <button aria-expanded="false">Filter by region</button>
      <ChevronIcon />
    </div>

    <ul className={dropdownClassNames}>
      {
        regions.map(region => (
          <li key={region}>
            <a className={styles["dropdown-item"]} href="#" onClick={handleOpenDropdown}>{region}</a>
          </li>
        ))
      }
    </ul>
  </div>
  )
}