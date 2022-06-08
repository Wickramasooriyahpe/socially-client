const AdvPubComponent = (props) =>{
    const ADdata = props.ADdata;
    console.log(props,ADdata);
    return(
        <div>
        {ADdata.map((ADdata) =>(
            <div className="adv-pub-main-container" >
            <div className="adv-pub-main-wrapper">
                <div className="adv-pub-palette-1 circle-shape shape-1"></div>
                <div className="adv-pub-palette-2 circle-shape shape-2"></div>
                
                <img className="adv-pub-img-1" src={ADdata.image}></img>
                    <div className="adv-pub-heading">
                    <h1 className="adv-pub-heading-1">{ADdata.heading}</h1>
                    
                    </div>
            </div>  
            <div className="adv-pub-repete-list">
                <div className="adv-pub-repeter">
                <div className="row">
    
                    <div class="column" id="adv-pub-component">
                    <div className="adv-pub-content-box adv-pub-palette-4">
                        <div className="adv-pub-text-container">
                        <p className="adv-pub-text">{ADdata.step1}</p>
                        </div>
                    </div></div>
    
                    <div class="column" id="adv-pub-component">
                    <div className="adv-pub-content-box adv-pub-palette-3">
                    <div className="adv-pub-text-container">
                        <p className="adv-pub-text">{ADdata.step2}</p>
                        </div>
                    </div></div>
    
                    <div class="column" id="adv-pub-component">
                    <div className="adv-pub-content-box adv-pub-palette-2">
                    <div className="adv-pub-text-container">
                        <p className="adv-pub-text">{ADdata.step3}</p>
                        </div>
                    </div></div>
    
                    <div class="column" id="adv-pub-component">
                    <div className="adv-pub-content-box adv-pub-palette-1">
                    <div className="adv-pub-text-container">
                        <p className="adv-pub-text">{ADdata.step4}</p>
                        </div>
                    </div></div>
                </div>
               </div>
            </div>    
            
             
            
            </div>
            ))}
        </div>

       
       

    );
}
export default AdvPubComponent;