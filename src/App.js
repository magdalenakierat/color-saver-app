import "./App.css";
import { ColorBox } from "./components/ColorBox";

const colors = [
  {
    id: 1,
    code: "#ff0000",
  },
  {
    id: 2,
    code: "#00ff00",
  },
  {
    id: 3,
    code: "#0000ff",
  },
];

function App() {
  return (
    <div className="App">
      <h1>My Color Saver App</h1>
      <div className="card-grid">
        {colors.map((color) => {
          return <ColorBox color={color.code} key={color.id} />;
        })}
      </div>
    </div>
  );
}

export default App;
