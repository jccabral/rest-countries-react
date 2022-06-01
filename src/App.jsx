import CountryList from "./components/CountryList";
import Header from "./components/Header";
import SearchMenu from "./components/SearchMenu";
import CountryProvider from "./context/country";

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
