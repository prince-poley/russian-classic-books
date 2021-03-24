import { Header } from "./components";
import { AboutUs, Home } from "./pages";
import { Route } from "react-router-dom";
import { useEffect, useState } from "react";

import axios from "axios";

function App() {

  const [authors, setAuthors] = useState([]);
 
  async function getAuthors() {
    try {
      const response = await axios.get("db.json");
      const data = await response.data;
      setAuthors(data.authors);
    } catch(error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getAuthors()
  }, [])

  return (
    <div className="App">
      <Header />
      <Route exact path="/">
        <Home authors={authors} />
      </Route>
      <Route exact path="/about" component={AboutUs} />
    </div>
  );
}

export default App;