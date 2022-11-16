import "../styles/Inspiration.css";
import "../styles/PlaceToStay.css";

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

const PlaceToStay = () => {
    return (
        <section id="nfts">
            <div className="inspiration-wrapper place-to-stay">
                <div className="list">
                    <ul>
                        <li>Resturant</li>
                        <li>Cottage</li>
                        <li>Castle</li>
                        <li>Fantas city</li>
                        <li>Beach</li>
                        <li>Carbins</li>
                        <li>Off-grid</li>
                        <li>Farm</li>
                    </ul>
                    <div className="location">
                        <span>Location</span>
                        <img src="./images/setting.svg" alt="" />
                    </div>
                </div>
                <div className="inspiration-cards-container">
                    {renderInspirationCard("./images/Frame 151.svg")}
                    {renderInspirationCard("./images/Frame 151-1.svg")}
                    {renderInspirationCard("./images/Frame 151-2.svg")}
                    {renderInspirationCard("./images/Frame 151-3.svg")}
                    {renderInspirationCard("./images/Frame 151-4.svg")}
                    {renderInspirationCard("./images/Frame 151-5.svg")}
                    {renderInspirationCard("./images/Frame 151-6.svg")}
                    {renderInspirationCard("./images/Frame 151-7.svg")}
                    {renderInspirationCard("./images/Frame 151-8.svg")}
                    {renderInspirationCard("./images/Frame 151-9.svg")}
                    {renderInspirationCard("./images/Frame 151-10.svg")}
                    {renderInspirationCard("./images/Frame 151-11.svg")}
                    {renderInspirationCard("./images/Frame 151-12.svg")}
                    {renderInspirationCard("./images/Frame 151-13.svg")}
                    {renderInspirationCard("./images/Frame 151-14.svg")}
                    {renderInspirationCard("./images/Frame 151-15.svg")}
                </div>
            </div>
        </section>
    );
};

export default PlaceToStay;
