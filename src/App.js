import "./App.css";
import { ColorBox } from "./components/ColorBox";

function App() {
  return (
    <div className="App">
      <h1>My Color Saver App</h1>
      <div className="card-grid">
        <ColorBox color="#f00" />
        <ColorBox color="#0f0" />
        <ColorBox color="#00f" />
      </div>
    </div>
  );
}

export default App;
