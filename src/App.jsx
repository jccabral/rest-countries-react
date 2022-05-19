import CountryList from './components/CountryList'
import Header from './components/Header'
import SearchMenu from './components/SearchMenu'

/* TODO LIST */

// * Finish Searchbar components
// TODO Create Country context
// TODO Finish components folder scaffold
// TODO create country folder
// TODO create router logic
// TODO convert to responsive layout
// TODO create unit tests
// TODO create e2e tests 

function App() {
  return (
    <main className='app'>
      <Header />
      <SearchMenu />
      <CountryList />
    </main>
  )
}

export default App
