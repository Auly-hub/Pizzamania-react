// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import AboutPizza from './components/AboutPizza';
import PizzaTypes from './components/PizzaTypes';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Carousel/>
      <AboutPizza/>
      <PizzaTypes/>
      <Footer/>
    </div>
  );
}

export default App;
