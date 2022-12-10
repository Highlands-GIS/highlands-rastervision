import Navbar from './components/navbar.js';
import Map from './components/map.js';
import Legend from './components/legend'

import MapLibreContextProvider from "./context/MapLibreContext.js";

import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <MapLibreContextProvider>
        <Legend />
        <Map />
      </MapLibreContextProvider>
    </div>
  );
}

export default App;
