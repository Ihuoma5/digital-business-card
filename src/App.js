import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Interest from './components/Interest';
import Fotter from './components/Fotter';

function App() {
  return (
    <div className="container">
      <Header />
      <About />
      < Interest />
      <Fotter />
    </div>
  );
}

export default App;
