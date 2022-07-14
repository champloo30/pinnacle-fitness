import "./app.scss";
import Home from './components/Home/Home';
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="sections">
        <Home />
      </div>
      
    </div>
  );
}

export default App;
