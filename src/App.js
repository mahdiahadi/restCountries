import {React,useState} from "react";
import {Route,Routes,Navigate} from "react-router-dom"
import Countries from "./components/Countries";
import CountriesDetails from "./components/CountriesDetails";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
function App() {
  const [darkTheme, setDarkTheme] = useState(false)
  return (
    <div className={darkTheme ? 'dark' : ""}>
      <div className="dark:bg-gray-900 bg-gray-100 dark:text-gray-200 black min-h-screen">
      <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
        <Routes>
          <Route exact path="/" element={ <Home/> } />
          <Route exact path="/countries" element={ <Countries/> } />
          <Route exact path="/countries/:name" element={<CountriesDetails/>} />
        </Routes>
      <Footer/>
      </div>
    </div>
  );
}

export default App;
