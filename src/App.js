import './App.css';
import Home from './Home/Home';
import Buy from './Buy/Buy';
import Rent from './Rent/Rent';
import Sell from './Sell/Sell';
import Items from './Items/Items';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/item/:id" element={<Items />} />
          <Route path="/buy" element={<Buy />} />
          <Route path="/rent" element={<Rent />} />
          <Route path="/sell" element={<Sell />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
