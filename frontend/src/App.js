import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import {
  HomeScreen,
  ProductScreen,
  CartScreen,
  LoginScreen,
  RegisterScreen,
  ProfileScreen,
  ShippingScreen,
} from "./screens";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <main className="my-3">
          <Container>
            <Route path="/login" component={LoginScreen} />
            <Route path="/shipping" component={ShippingScreen} />
            <Route path="/register" component={RegisterScreen} />
            <Route path="/profile" component={ProfileScreen} />
            <Route path="/product/:id" component={ProductScreen} />
            <Route path="/cart/:id?" component={CartScreen} />
            <Route path="/" component={HomeScreen} exact />
          </Container>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
