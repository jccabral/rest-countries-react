import SearchInput from "../search-input";
import RegionDropdown from "../region-dropdown";

import "./index.module.css";

export default function SearchMenu() {
  return (
    <section className='flex justify-between'>
      <SearchInput />
      <RegionDropdown />
    </section>
  );
}