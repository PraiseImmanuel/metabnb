import { useState } from "react";
import "../styles/Hero.css";

const Hero = () => {
    const [searchInput, setSearchInput] = useState("");
    return (
        <article>
            <div className="hero-wrapper">
                <section className="section-one">
                    <h1>
                        Rent a <span>Place</span> away from <span>Home</span> in
                        the
                        <span> Metaverse</span>
                    </h1>
                    <p>
                        we provide you access to luxury and affordable houses in
                        the metaverse, get a chance to turn your imagination to
                        reality at your comfort zone
                    </p>
                    <div className="search-container">
                        {/* <div className="input"> */}
                        <input
                            type="text"
                            placeholder="Search for location"
                            value={searchInput}
                            onChange={(event) =>
                                setSearchInput(event.target.value)
                            }
                        />
                        {/* </div> */}
                        <button>Search</button>
                    </div>
                </section>

                <section className="section-two">
                    <div className="image-card-container">
                        <div className=" image-card one">
                            <img src="./images/image 4.svg" alt="" />
                            <img src="./images/image 6.svg" alt="" />
                        </div>
                        <div className="image-card two">
                            <img src="./images/image 3.svg" alt="" />
                            <img src="./images/image 5.svg" alt="" />
                        </div>
                    </div>
                </section>
            </div>
        </article>
    );
};

export default Hero;
