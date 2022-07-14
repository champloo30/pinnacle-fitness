import "./app.scss";
import Home from './components/Home/Home';
import Navbar from "./components/Navbar/Navbar";
import Programs from "./components/Programs/Programs";

function App() {
  return (
    <div className="app">
      <div className="sections">
        <Navbar />
        <Home />
        <Programs />
      </div>
      
    </div>
  );
}

export default App;
