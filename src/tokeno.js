export default function Token( props ){
    const justImg3 = props.allImg3;
    return(
        <div className="tokenPage">
            <h2>TOKENOMICS</h2>
            <div className="AllocateBD">
                <h4>
                    1. Initial Burn: 40% (48,000,000 COREX) of the total supply will 
                    be burned after launch to reduce the circulating 
                    supply and potentially increase the token's value.
                </h4>
                <h4>
                    2. Staking Rewards: 5% (6,000,000 COREX) of the tokens will be 
                    allocated as rewards for staking, encouraging holders to stake 
                    their COREX tokens, securing the network, and earning additional 
                    tokens as incentives.
                </h4>
                <h4>
                    3. Marketing: 10% (12,000,000 COREX) of the tokens will be reserved 
                    for marketing efforts, including partnerships, promotions, and 
                    campaigns to attract new users and investors to the COREX ecosystem.
                </h4>
                <h4>
                    4. Airdrop: 10% (12,000,000 COREX) of the tokens will be distributed 
                    as airdrops to early supporters, community members, and strategic 
                    partners to foster community engagement and awareness.
                </h4>
                <h4>
                    5. CEX Listing: 15% (18,000,000 COREX) of the tokens will be set 
                    aside for listing on centralized exchanges, enhancing the token's 
                    accessibility and liquidity across various trading platforms.
                </h4>
                <h4>
                    6. Liquidity Pool (LP): 20% (24,000,000 COREX) of the tokens will be 
                    allocated to liquidity pools to ensure sufficient liquidity on 
                    decentralized exchanges (DEXs), facilitating smooth trading and 
                    price stability.
                </h4>
                <h4 style={{textAlign: "start"}}>
                    - Remaining tokens: 48,000,000(burn) + 6,000,000(staking) + 12,000,000(marketing)
                    + 12,000,000(airdrops) + 18,000,000(CEX listing) + 24,000,000(liquidity) = 120,000,000 tokens
                </h4>

            </div>
            <div className="AllocatePic">
                <div>
                    <h4>5% --- Staking</h4>
                    <h4>10% --- Airdrop</h4>
                    <h4>10% --- Marketing</h4>
                    <h4>15% --- CEX Listing</h4>
                    <h4>20% --- Liquidity</h4>
                    <h4>40% --- Burn</h4> 
                    <h4>100% --- Total</h4>
                </div>
                <img src={justImg3.rmCircle} alt="allocation of tokens"/>
            </div>

            <div className="AllP2Box">
                <img className="AllP AllP2" src={justImg3.pepeR4} alt="Pepe2"/>
            </div>
        </div>
    )
}