import "../styles/Inspiration.css";

const renderInspirationCard = (img) => {
    return (
        <div className="inspiration-card">
            <div className="image">
                <img src={img} alt="" />
            </div>
            <div className="description">
                <div className="column-one">
                    <p>Desert king</p>
                    <p>1MBT per night</p>
                </div>
                <div className="column-two">
                    <p>2345km away</p>
                    <p>available for 2weeks stay</p>
                </div>
                <div className="column-three">
                    <img src="./images/stars.svg" alt="" />
                </div>
            </div>
        </div>
    );
};

const Inspiration = () => {
    return (
        <section id="nfts">
            <div className="inspiration-wrapper">
                <h2>Inspiration for your next adventure</h2>
                <div className="inspiration-cards-container">
                    {renderInspirationCard("./images/001.svg")}
                    {renderInspirationCard("./images/002.svg")}
                    {renderInspirationCard("./images/003.svg")}
                    {renderInspirationCard("./images/004.svg")}
                    {renderInspirationCard("./images/005.svg")}
                    {renderInspirationCard("./images/006.svg")}
                    {renderInspirationCard("./images/007.svg")}
                    {renderInspirationCard("./images/008.svg")}
                </div>
            </div>
        </section>
    );
};

export default Inspiration;
