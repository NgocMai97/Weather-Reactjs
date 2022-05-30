import { BrowserRouter as Router , Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Week from './pages/Week'
import Hour from './pages/Hour'

function App() {
  return (
    <Router>
      <div className="App">
         <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/week" element={<Week/>} />
            <Route path="/hour" element={<Hour/>} />
         </Routes>
      </div>
    </Router>
  );
}

export default App;
