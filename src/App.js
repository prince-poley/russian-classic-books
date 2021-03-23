import { Header } from "./components";
import { AboutUs, Home } from "./pages";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header menu={menu} />
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={AboutUs} />
    </div>
  );
}

export default App;