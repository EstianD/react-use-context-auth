import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { UserContext } from "./UserContext";
import Home from "./Home";
import About from "./About";

function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="App">
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <UserContext.Provider value={{ user, setUser }}>
            <Switch>
              <Route path="/about">
                <About />
              </Route>

              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </UserContext.Provider>
        </div>
      </Router>
    </div>
  );
}

export default App;
