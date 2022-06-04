import MoonIcon from "./MoonIcon";
import {
  APP_TITLE,
  THEME_LABEL,
  BUTTON_CLASSNAMES,
  HEADER_CLASSNAMES,
} from "./constants";

import "./index.module.css";

export default function Header() {
  return (
    <header className={HEADER_CLASSNAMES}>
      <h1>{APP_TITLE}</h1>
      <button className={BUTTON_CLASSNAMES}>
        <MoonIcon />
        {THEME_LABEL}
      </button>
    </header>
  );
}
