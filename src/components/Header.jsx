import MoonIcon from "./MoonIcon"

const APP_TITLE = 'Where in the world?'
const THEME_LABEL = 'Dark Mode'

export default function Header() {
    return(
        <header className="header">
            <h1>{APP_TITLE}</h1>
            <button className="theme-btn">
                <MoonIcon />
                {THEME_LABEL}
            </button>
        </header>
    )
}