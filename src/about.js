export default function About( props ){
    let justImg2 = props.allImg2;
    return(
        <div className="aboutPage">
            <h2>about $COREX</h2>
            <div className="aboutPic">
                <span>
                    <img src={justImg2.pepeR2} alt="pepe on a rock 2"/>
                </span>
                <h4>
                    Cornish Rex (CORNISHREX) is the first-ever meme token on the Solana 
                    blockchain network, inspired by the charming and playful Cornish Rex cat 
                    breed. This innovative token merges the light-hearted spirit of meme 
                    culture with the robust technology of blockchain, creating a unique 
                    opportunity for both seasoned crypto enthusiasts and curious newcomers.
                </h4>
            </div>
            <h3>KEY FEATURES .....</h3>
            <div className="keyFet">  
                <h4>
                    1. Free Crypto Tutorials for Newbies: At CORNISHREX, we are committed to educating our community. That's why we offer free crypto tutorials tailored for beginners. These tutorials cover the basics of cryptocurrency, blockchain technology, and how to get started with CORNISHREX, empowering you with the knowledge to navigate the crypto world confidently.
                </h4>
                <h4>
                    2. CORNISHREX NFT Market: We're excited to announce the launch of the CORNISHREX NFT Market! This platform allows you to create, buy, sell, and trade unique digital assets securely and efficiently. Whether you're an artist looking to tokenize your work or a collector searching for one-of-a-kind digital treasures, our NFT Market offers endless opportunities to explore and engage with the world of NFTs.
                </h4>
                <h4>
                    3. Attractive Investment Opportunities: CORNISHREX is more than just a fun meme token; it's a compelling investment opportunity. As the first meme token on the Solana blockchain network, CORNISHREX holds significant growth potential. Join our vibrant community and take part in a token that combines entertainment with the promise of financial rewards.
                </h4>
            </div>
            <h3>Why Choose CORNISHREX?</h3>
            <div className="keyFet">
                    <h4>
                        1. Innovative: Be a part of the first meme token on the Solana network.
                    </h4>
                    <h4>
                        2. Educational: Access free tutorials and learn the essentials of cryptocurrency.
                    </h4>
                    <h4>
                        3. User-Friendly: Use our dedicated wallet for seamless transactions.
                    </h4>
                    <h4>
                        4. Profitable: Invest in a token with strong growth potential.
                    </h4>
            </div>
            <h3>HOW TO BUY</h3>
            <span className="blobAll">
                <img src={justImg2.blob} alt="steps on how to buy"/>
            </span>
        </div>
    )
}