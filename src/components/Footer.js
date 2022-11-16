import "../styles/Footer.css";

const Footer = () => {
    return (
        <footer>
            <div className="footer-wrapper">
                <div className="footer-column footer-column-one">
                    <div className="footer-logo">
                        <img src="./images/logo-white.svg" alt="" />
                    </div>

                    <div className="social">
                        <img src="./images/facebook.svg" alt="" />
                        <img src="../images/instagram.svg" alt="" />
                        <img src="./images/twitter.svg" alt="" />
                    </div>

                    <p>&copy; 2022 Metabnb</p>
                </div>
                <div className="footer-column footer-column-two">
                    <ul>
                        <li className="first">Community</li>
                        <li>NFT</li>
                        <li>Tokens</li>
                        <li>Landlords</li>
                        <li>Discord</li>
                    </ul>
                </div>
                <div className="footer-column footer-column-three">
                    <ul>
                        <li className="first">Places</li>
                        <li>Caste</li>
                        <li>Farms</li>
                        <li>Beach</li>
                        <li>Learn more</li>
                    </ul>
                </div>
                <div className="footer-column footer-column-four">
                    <ul>
                        <li className="first">About us</li>
                        <li>Road map</li>
                        <li>Creators</li>
                        <li>Carreer</li>
                        <li>Contact us</li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
