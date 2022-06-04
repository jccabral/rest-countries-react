import { useState, useContext } from "react";
import { CountryContext } from "../../country/country";
import { REGIONS, DEFAULT_LABEL, TOGGLE_CLASSNAMES } from "./constants";

import styles from "./index.module.css";

const ChevronIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="ionicon"
    viewBox="0 0 512 512"
  >
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="48"
      d="m112 184 144 144 144-144"
    />
  </svg>
);

export default function RegionDropdown() {
  const { filterByRegion, region } = useContext(CountryContext);
  const [open, setOpen] = useState(false);
  const { dropdown, show } = styles;
  const dropdownClassNames = ` bg-white elevation ${styles["dropdown-list"]} ${
    open && show
  }`;
  const handleOpenDropdown = () => setOpen(!open);
  const handleSelectRegion = ({ target }) => {
    handleOpenDropdown();
    filterByRegion(target.text);
  };

  return (
    <div className={dropdown}>
      <div
        className={`${TOGGLE_CLASSNAMES} ${styles["dropdown-toggle"]}`}
        onClick={handleOpenDropdown}
      >
        <button className="family-default regular">
          {region ?? DEFAULT_LABEL}
        </button>
        <ChevronIcon />
      </div>

      <ul className={dropdownClassNames}>
        {REGIONS.map((region) => (
          <li key={region}>
            <a
              className={`${styles["dropdown-item"]} regular`}
              href="#"
              onClick={handleSelectRegion}
            >
              {region}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
