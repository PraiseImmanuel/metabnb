import "../styles/App.css";
import Discover from "./Discover";
import Footer from "./Footer";
import Hero from "./Hero";
import Inspiration from "./Inspiration";
import Nav from "./Nav";
import NftLinks from "./NftLinks";

const App = () => {
    return (
        <div className="App">
            <Nav />
            <Hero />
            <NftLinks />
            <Inspiration />
            <Discover />
            <Footer />
        </div>
    );
};

export default App;
