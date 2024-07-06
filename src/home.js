const Home = ( props ) => {
    const justImg = props.ObjImg;
    
    return(
        <div className="homePage">
            <div className="homeTextPic">
                <div className="homeText">
                    <h1>CORNISHREX </h1>
                    <h1>$COREX</h1>
                    <h4>
                        CORNISHREX (COREX) is a meme token inspired by the playful Cornish Rex cat. 
                        It aims to make cryptocurrency accessible and enjoyable for everyone, 
                        leveraging community power and the appeal of cats to spread crypto knowledge.  
                    </h4>
                    <p>
                        CA:
                        0000000000000000000000000000000000000000000122
                    </p>
                    <div className="allSC-Btn">
                        <button>Buy $COREX</button>
                        <div className="allSocHandle">
                            <span><a href="https://x.com/CORNISHREXs" target="_blank"><img src={justImg.tw} alt="twitter logo" /></a></span>
                            <span><a href="https://t.me/CORNISHREXCOREX" target="_blank"><img src={justImg.tg} alt="telegram logo" /></a></span>
                            <span><img src={justImg.dc} alt="discord logo" /></span>
                            <span><img src={justImg.rd} alt="reddit logo" /></span>
                        </div>
                    </div>
                </div>
                <div className="homePic">
                    <img src={justImg.pepeR1} alt="COREX pic" />
                </div>
            </div>
        </div>
    )
}

export default Home;