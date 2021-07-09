import logo from './logo.svg';
import './App.css';

const App = () => {
  
  const APP_ID = 'c99d7666'  // https://developer.edamam.com/admin/applications/1409621997281
  const APP_KEY = 'ab32bd1e0d9ea5b9cc3f31ff8ea52331'  // https://developer.edamam.com/admin/applications/1409621997281
  const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`

  return(
    <div className="App">
      <from className="search-form">
        <input className="search-bar" type="text"></input>
        <button className="search-button" type="submit"></button>
      </from>
    </div>
  )
}

export default App;
