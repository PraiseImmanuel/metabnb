import "../styles/App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";

import Discover from "./Discover";
import Footer from "./Footer";
import Hero from "./Hero";
import Inspiration from "./Inspiration";
import Nav from "./Nav";
import NftLinks from "./NftLinks";
import PlaceToStay from "./PlaceToStay";

const Home = () => {
    return (
        <React.Fragment>
            <Hero />
            <NftLinks />
            <Inspiration />
            <Discover />
        </React.Fragment>
    );
};

const PlaceToStayRoute = () => {
    return <PlaceToStay />;
};

const App = () => {
    return (
        <div className="App">
            <Nav />
            <Routes>
                <Route path="/" element={Home()} />
            </Routes>
            <Routes>
                <Route path="/placetostay" element={PlaceToStayRoute()} />
            </Routes>
            <Footer />
        </div>
    );
};

export default App;
