import "./app.scss";
import Home from './components/Home/Home';
import Navbar from "./components/Navbar/Navbar";
import Plans from "./components/Plans/Plans";
import Programs from "./components/Programs/Programs";
import WhyUs from "./components/WhyUs/WhyUs";

function App() {
  return (
    <div className="app">
      <div className="sections">
        <Navbar />
        <Home />
        <Programs />
        <WhyUs />
        <Plans />
      </div>
    </div>
  );
}

export default App;
