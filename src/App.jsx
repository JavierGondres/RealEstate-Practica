
import Header from './Components/Header/Header'
import Hero from './Components/Hero/Hero'
import Companies from './Components/Companies/Companies';
import './App.css'
import Residencies from './Components/Residencies/Residencies';
import Value from './Components/Value/Value';
import Contact from './Components/Contact/Contact';
import GetStarted from './Components/GetStarted/GetStarted';
import Footer from './Components/Footer/Footer';
function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient"></div>
        <Header></Header>
        <Hero></Hero>
      </div>
      <Companies></Companies>
      <Residencies></Residencies>
      <Value></Value>
      <Contact></Contact>
      <GetStarted></GetStarted>
      <Footer></Footer>
    </div>
  );
}

export default App;
