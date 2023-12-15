import "./App.css";
import Header from "./Components/Header";
import Card from "./Components/Card";

function App() {
  return (
    <div className="container-fluid text-center p-2">
      <Header />
      <div className="row justify-content-center">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default App;
