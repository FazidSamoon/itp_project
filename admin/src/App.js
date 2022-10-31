import "./App.css";
import Navbar from "./components/common/Navbar";
import { Views } from "./views/index";

function App() {
  return (
    <div className="App font-Nunito">
      <Navbar />
      <Views />
    </div>
  );
}

export default App;
