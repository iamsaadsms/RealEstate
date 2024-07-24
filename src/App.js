import './App.css';
import Home from './Home/Home';
import Buy from './Buy/Buy';
// import Rent from './Rent/Rent';
// import Sell from './Sell/Sell';
// import Agents from './Agents/Agents';
// import TheAxWay from './TheAxWay/TheAxWay';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/buy" element={<Buy />} />
          {/* <Route path="/rent" element={<Rent />} />
          <Route path="/sell" element={<Sell />} />
          <Route path="/agents" element={<Agents />} />
          <Route path="/ax-way" element={<TheAxWay />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
