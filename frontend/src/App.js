import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { HomeScreen, ProductScreen } from "./screens";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <main className="my-3">
          <Container>
            <Route path="/" component={HomeScreen} exact />
            <Route path="/product/:id" component={ProductScreen} />
          </Container>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
