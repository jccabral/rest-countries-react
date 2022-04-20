import styles from "./SearchBar.module.css";
import SearchIcon from "./SearchIcon";

export default function SearchBar() {
  const { root, input } = styles;

  return (
    <section className={root}>
      <div className={input}>
        <label>
          <SearchIcon />
          <input type="text" placeholder="Search for a country..." />
        </label>
      </div>

      <select name="regions">
        <option disabled value="">
          Filter by region...
        </option>
        <option value="Africa">Africa</option>
        <option value="America">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </section>
  );
}
