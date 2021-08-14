import Container from "react-bootstrap/Container";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./components/Header";
import About from "./pages/About";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Container>
          <Switch>
            <Route path="/" exact={true}>
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
          </Switch>
        </Container>
      </Router>
    </>
  );
}

export default App;
