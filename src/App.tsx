import "./App.css";
import MainContent from "./pages/MainContent";
import SideBar from "./pages/SideBar";
import "antd/dist/antd.css";

function App() {
  return (
    <div className="app">
      <SideBar />
      <MainContent />
    </div>
  );
}

export default App;
