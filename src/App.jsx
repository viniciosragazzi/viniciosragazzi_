import "./styles/App.css";
import Rotas from "./assets/routes";
import AppProvider from "./assets/context/context";
function App() {
  return (
    <div className="w-full min-h-screen bg-[#ecf7f1]">
      <AppProvider>
        <Rotas />
      </AppProvider>
    </div>
  );
}

export default App;
