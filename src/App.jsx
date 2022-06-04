import CountryList from "./country/components/CountryList";
import Header from "./components/header";
import SearchMenu from "./components/search-menu";
import CountryProvider from "./country/country";

function App() {
  return (
    <CountryProvider>
      <main className="app">
        <Header />
        <SearchMenu />
        <CountryList />
      </main>
    </CountryProvider>
  );
}

export default App;
