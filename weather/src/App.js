import { BrowserRouter as Router , Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Week from './pages/Week'
import Hour from './pages/Hour'
import MainLayout from './Layouts/Main'

function App() {
  useEffect(() => {
    const fetProduct = async() => {
      const weatherApir = await weatherApi.getAll();
      console.log(weatherApir);
    }
    fetProduct();
  }, [])
  return (
    <Router>
      <div className="App">
         <Routes>
            <Route path="/" element={<MainLayout/>} />
            <Route path="/week" element={<Week/>} />
            <Route path="/hour" element={<Hour/>} />
         </Routes>
      </div>
    </Router>
  );
}

export default App;
