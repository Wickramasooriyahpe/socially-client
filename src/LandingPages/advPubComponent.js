import "./advpub.css";


const AdvPubCompo = () => {
    return(
        <div className="adv-pub-main-container">
        <div className="adv-pub-main-wrapper">
            <div className="adv-pub-palette-1 circle-shape shape-1"></div>
            <div className="adv-pub-palette-2 circle-shape shape-2"></div>
            <img className="adv-pub-img-1" src="slideone.jpg"></img>
                <div className="adv-pub-heading">
                <h1 className="adv-pub-heading-1">Advertiser</h1>
                
                </div>
        </div>  
        <div className="adv-pub-repete-list">
            <div className="adv-pub-repeter">
            <div className="row">

                <div class="column">
                <div className="adv-pub-content-box adv-pub-palette-4">
                    <div className="adv-pub-text-container">
                    <p className="adv-pub-text"> Sign Up with the portal</p>
                    </div>
                </div></div>

                <div class="column">
                <div className="adv-pub-content-box adv-pub-palette-3">
                <div className="adv-pub-text-container">
                    <p className="adv-pub-text"> Create a campaing </p>
                    </div>
                </div></div>

                <div class="column">
                <div className="adv-pub-content-box adv-pub-palette-2">
                <div className="adv-pub-text-container">
                    <p className="adv-pub-text"> Make Creatives to your Campaign</p>
                    </div>
                </div></div>

                <div class="column">
                <div className="adv-pub-content-box adv-pub-palette-1">
                <div className="adv-pub-text-container">
                    <p className="adv-pub-text"> Promote your Goods and Services</p>
                    </div>
                </div></div>
            </div>
           </div>
        </div>    
        
         
        
        </div>
    );
}
export default AdvPubCompo;