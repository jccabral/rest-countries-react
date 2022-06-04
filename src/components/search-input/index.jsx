import { useContext } from "react";
import { CountryContext } from "../../country/country";
import SearchIcon from "./SearchIcon";
import {
  INPUT_CLASSNAMES,
  INPUT_PLACEHOLDER,
  LABEL_CLASSNAMES,
} from "./constants";

import "./index.module.css";

export default function SearchInput() {
  
  const { filterSearch } = useContext(CountryContext);
  const handleSearch = ({ target }) => filterSearch(target.value);

  return (
    <>
      <label className={LABEL_CLASSNAMES}>
        <SearchIcon />
        <input
          type="text"
          placeholder={INPUT_PLACEHOLDER}
          className={INPUT_CLASSNAMES}
          onInput={handleSearch}
        />
      </label>
    </>
  );
}
