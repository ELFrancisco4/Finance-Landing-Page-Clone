import Benefits from "./components/Benefits/molecules/Benefits";
import Home from "./components/Home/molecules/Home";
import Nav from "./components/Nav/molecules/Nav";
import OfferingsSection from "./components/Offerings/molecules/OfferingsSection";
import "./scss/Globals.scss";

const App = () => {
  return (
    <div className="App">
      <Nav />
      <Home/>
      <OfferingsSection/>
      <Benefits/>
    </div>
  );
};

export default App;
