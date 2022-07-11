import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

// İmport components
import ShowProducts from './components/ShowProducts';

function App() {
  return (
    <div className="App">
      <button className='btn btn-primary'>Create Product</button>
    </div>
  );
}

export default App;
