import Header from "./components/Header";
import Events from "./components/Events";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App flex flex-col justify-between h-screen">
      <div>
        <Header />
        <Events />
      </div>
      <Footer />
    </div>
  );
}

export default App;
