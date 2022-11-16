import "../styles/Nav.css";
import { useState } from "react";
import { Sling as Hamburger } from "hamburger-react";
const Nav = () => {
    const [isOpen, setOpen] = useState(false);

    return (
        <nav>
            <div className="nav-fixed">
                <div className="nav-wrapper">
                    {/* Logo */}
                    <div className="logo">
                        <img src="./images/metabnb-logo.svg" alt="logo" />
                    </div>

                    {/* wrapper for black transperent background on small screens */}
                    <div
                        className={`links-and-button-wrapper ${
                            isOpen || "display-none"
                        }`}
                    >
                        {/* main container for links and button */}
                        <div className="links-and-button">
                            <div className="links">
                                <ul>
                                    <li>
                                        <a href="www.p.com">Home</a>
                                    </li>
                                    <li>
                                        <a href="www.p.com">Place to stay</a>
                                    </li>
                                    <li>
                                        <a href="www.p.com">NFTs</a>
                                    </li>
                                    <li>
                                        <a href="www.p.com">Community</a>
                                    </li>
                                </ul>
                            </div>

                            {/* display only on mobile */}
                            <div className="connect-button mobile">
                                Connect wallet
                            </div>
                        </div>
                    </div>
                    {/* display only on desktop */}
                    <div className="connect-button desktop">Connect wallet</div>
                    <Hamburger
                        toggled={isOpen}
                        toggle={setOpen}
                        duration={1}
                        size={30}
                    />

                    <div className="connect-wallet-form">
                        <h3>Connect Wallet</h3>
                        <div className="wallet">
                            <p>Choose your preferred wallet</p>
                            <div className="wallet">
                                <img src="./images/" alt="" />
                                <span>Metamask</span>
                            </div>

                            <div className="wallet">
                                <img src="./images/" alt="" />
                                <span>WalletConnect</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Nav;
