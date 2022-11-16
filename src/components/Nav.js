import "../styles/Nav.css";
import { useState } from "react";
import { Sling as Hamburger } from "hamburger-react";
const Nav = () => {
    const [isOpen, setOpen] = useState(false);
    const [connectOpen, setConnectOpen] = useState(false);

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
                                        <a href="/">Home</a>
                                    </li>
                                    <li>
                                        <a href="/placetostay">Place to stay</a>
                                    </li>
                                    <li>
                                        <a href="#nfts">NFTs</a>
                                    </li>
                                    <li>
                                        <a href="#community">Community</a>
                                    </li>
                                </ul>
                            </div>

                            {/* display only on mobile */}
                            <div
                                onClick={() => setConnectOpen(!connectOpen)}
                                className="connect-button mobile"
                            >
                                Connect wallet
                            </div>
                        </div>
                    </div>
                    {/* display only on desktop */}
                    <div
                        onClick={() => setConnectOpen(!connectOpen)}
                        className="connect-button desktop"
                    >
                        Connect wallet
                    </div>
                    <Hamburger
                        toggled={isOpen}
                        toggle={setOpen}
                        duration={1}
                        size={30}
                    />

                    <div
                        className={`connect-wallet-form ${
                            connectOpen || "display-wallet-none"
                        }`}
                    >
                        <div className="connect-wallet-wrapper">
                            <div className="heading">
                                <h3>Connect Wallet</h3>
                                <img
                                    src="./images/cancel.svg"
                                    alt=""
                                    onClick={() => setConnectOpen(!connectOpen)}
                                />
                            </div>
                            <div className="wallets">
                                <p>Choose your preferred wallet</p>
                                <div className="wallet">
                                    <div className="wallet-name">
                                        <img
                                            src="./images/metamask-2.svg"
                                            alt=""
                                        />
                                        <span>Metamask</span>
                                    </div>

                                    <img
                                        src="./images/right-bracket.svg"
                                        alt=""
                                    />
                                </div>

                                <div className="wallet">
                                    <div className="wallet-name">
                                        <img
                                            src="./images/wallet-connect.svg"
                                            alt=""
                                        />
                                        <span>Walletconnect</span>
                                    </div>

                                    <img
                                        src="./images/right-bracket.svg"
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Nav;
