
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import WeatherApp from './Components/WeatherApp/WeatherApp';

function App() {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WeatherApp/>}></Route>
      </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;
