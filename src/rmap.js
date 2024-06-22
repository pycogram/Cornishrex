export default function Roadmap( props ){
    return(
        <div className="rmPage">
            <h2>ROADMAP</h2>
            <div className="rmText">
                <span>
                    <h4>Stage 1: Massive Campaign on All Social Media.</h4>
                    <h4>Duration: 1-2 months</h4>
                    <h4>Goals:</h4>
                    <ul>
                        <li><h4>Build brand awareness and create buzz around COREX.</h4></li>
                        <l1><h4>Engage with the community through regular updates, interactive content, and influencer partnerships.</h4></l1>
                        <li><h4>Utilize platforms such as Twitter, Instagram, Facebook, TikTok, and YouTube.</h4></li>
                    </ul>
                    <h4>Activities:</h4>
                    <ul>
                        <li><h4>Launch an introductory video explaining COREX and its mission.</h4></li>
                        <l1><h4>Run targeted ad campaigns to reach potential investors and enthusiasts.</h4></l1>
                        <li><h4>Host AMA (Ask Me Anything) sessions with the COREX team.</h4></li>
                        <l1><h4>Create and share engaging content such as infographics, memes, and educational posts.</h4></l1>
                        <li><h4>Partner with crypto influencers to amplify the message.</h4></li>
                    </ul>
                </span>
                <span>
                    <h4>Stage 2: Creation of Custodian Wallet (COREX Wallet).</h4>
                    <h4>Duration: 1-2 months</h4>
                    <h4>Goals:</h4>
                    <ul>
                        <li><h4>Develop a secure and user-friendly wallet for storing COREX tokens.</h4></li>
                        <l1><h4>Ensure seamless integration with popular blockchain networks.</h4></l1>
                    </ul>
                    <h4>Activities:</h4>
                    <ul>
                        <li><h4>Design and develop the COREX wallet.</h4></li>
                        <l1><h4>Conduct rigorous security testing and audits.</h4></l1>
                        <li><h4>Launch beta testing with selected users to gather feedback.</h4></li>
                        <l1><h4>Release the wallet on major app stores (Google Play, App Store.</h4></l1>
                    </ul>
                </span>
                <span>
                    <h4>Stage 3: Airdropping.</h4>
                    <h4>Duration: 1 month</h4>
                    <h4>Goals:</h4>
                    <ul>
                        <li><h4>Distribute COREX tokens to a broad audience to increase circulation and community involvement.</h4></li>
                        <l1><h4>Ensure seamless integration with popular blockchain networks.</h4></l1>
                    </ul>
                    <h4>Activities:</h4>
                    <ul>
                        <li><h4>Announce the airdrop details and eligibility criteria.</h4></li>
                        <l1><h4>Conduct the airdrop distribution transparently and securely.</h4></l1>
                        <li><h4>Encourage recipients to hold and use COREX tokens.</h4></li>
                    </ul>
                </span>
                <span>
                    <h4>Stage 4: Fairlaunch, CMC and CG Listing.</h4>
                    <h4>Duration: 1-2 months</h4>
                    <h4>Goals:</h4>
                    <ul>
                        <li><h4>Conduct a fair launch of COREX to ensure equitable distribution.</h4></li>
                        <l1><h4>List COREX on CoinMarketCap (CMC) and CoinGecko (CG) to increase visibility.</h4></l1>
                    </ul>
                    <h4>Activities:</h4>
                    <ul>
                        <li><h4>Plan and execute the fair launch event.</h4></li>
                        <l1><h4>Submit the necessary documentation and listings to CMC and CG.</h4></l1>
                        <li><h4>Promote the listing announcements across all social media channels.</h4></li>
                    </ul>
                </span>
                <span>
                    <h4>Stage 5: Massive Marketing, Strategic Buyback, and Continuous Burning.</h4>
                    <h4>Duration: Ongoing</h4>
                    <h4>Goals:</h4>
                    <ul>
                        <li><h4>Sustain and grow the COREX ecosystem through strategic marketing efforts.</h4></li>
                        <l1><h4>Implement a buyback and burn strategy to maintain token value.</h4></l1>
                    </ul>
                    <h4>Activities:</h4>
                    <ul>
                        <li><h4>Run ongoing marketing campaigns to attract new users and investors.</h4></li>
                        <l1><h4>Conduct regular buybacks of COREX tokens from the market.</h4></l1>
                        <li><h4>Burn the bought-back tokens to reduce supply and increase scarcity.</h4></li>
                    </ul>
                </span>
                <span>
                    <h4>Stage 6: Staking Rewards for Diamond Holders.</h4>
                    <h4>Duration: Ongoing</h4>
                    <h4>Goals:</h4>
                    <ul>
                        <li><h4>Reward long-term holders and encourage staking.</h4></li>
                        <l1><h4>Implement a buyback and burn strategy to maintain token value.</h4></l1>
                    </ul>
                    <h4>Activities:</h4>
                    <ul>
                        <li><h4>Implement a staking mechanism where users can stake their COREX tokens.</h4></li>
                        <l1><h4>Distribute rewards to diamond holders in the form of additional COREX tokens or other benefits.</h4></l1>
                    </ul>
                </span>
                <span>
                    <h4>Stage 7: Free Crypto Tutorial Classes.</h4>
                    <h4>Duration: Ongoing</h4>
                    <ul>
                        <li><h4>Educate the community and potential investors about cryptocurrency and blockchain technology</h4></li>
                    </ul>
                    <h4>Activities:</h4>
                    <ul>
                        <li><h4>Organize regular online tutorial classes covering various crypto topics.</h4></li>
                        <l1><h4>Invite industry experts to share their knowledge and insight.</h4></l1>
                        <l1><h4>Provide resources such as guides, articles, and video tutorials.</h4></l1>
                    </ul>
                </span>
            </div>

            <span className="rmBox">
                <img src={props.rmPic} alt="Roadmap"/>
            </span>
        </div>
    )
}