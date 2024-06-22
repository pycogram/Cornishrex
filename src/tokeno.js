export default function Token( props ){
    const justImg3 = props.allImg3;
    return(
        <div className="tokenPage">
            <h2>TOKENOMICS</h2>
            <div className="AllP1Box">
                <img className="AllP AllP1" src={justImg3.pepeR3} alt="Pepe"/>
            </div>
            <div className="AllocatePic">
                <div>
                    <h4>5% --- Staking</h4>
                    <h4>10% --- Airdrop</h4>
                    <h4>10% --- Marketing</h4>
                    <h4>15% --- CEX Listing</h4>
                    <h4>20% --- Liquidity</h4>
                    <h4>40% --- Burn</h4> 
                </div>
                <img src={justImg3.rmCircle} alt="allocation of tokens"/>
            </div>
            <div className="AllP2Box">
                <img className="AllP AllP2" src={justImg3.pepeR4} alt="Pepe2"/>
            </div>
        </div>
    )
}