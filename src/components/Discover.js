import "../styles/Discover.css";

const Discover = () => {
    return (
        <section id="Community">
            <div className="discover-wrapper">
                <div className="text">
                    <h2>Metabnb NFTs</h2>
                    <p>
                        Discover our NFT gift cards collection. Loyal customers
                        gets amazing gift cards which are traded as NFTs. These
                        NFTs gives our cutomer access to loads of our exclusive
                        services.
                    </p>

                    <button>Learn more</button>
                </div>

                <div className="image">
                    <img src="./images/nfts.svg" alt="" />
                </div>
            </div>
        </section>
    );
};
export default Discover;
