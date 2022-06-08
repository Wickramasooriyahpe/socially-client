const AdvPubComponent = (props) =>{
    const ADdata = props.ADdata;
    console.log(props,ADdata);
    return(
        <div>
        {ADdata.map((ADdata) =>(
           <div>
           <div className="adv-pub-main-container-img" >
           <img className="adv-pub-img-1" src={ADdata.image}></img>
                    <div className="adv-pub-heading">
                    <h1 className="adv-pub-heading-1">{ADdata.heading}</h1>
                    </div>
           </div>
            <div className="adv-pub-main-container" >
             <div class="row" id="adv-pub-row">
              <div className="column" id="adv-pub-col">
                    <div className="adv-pub-content-box adv-pub-palette-4">
                    <div className="adv-pub-text-container">
                    <p className="adv-pub-text">{ADdata.step1}</p>
                    </div></div>
              </div>
              <div className="column" id="adv-pub-col">
                    <div className="adv-pub-content-box adv-pub-palette-3">
                    <div className="adv-pub-text-container">
                    <p className="adv-pub-text">{ADdata.step2}</p>
                    </div>
                    </div>
              </div>
              <div className="column" id="adv-pub-col">
                    <div className="adv-pub-content-box adv-pub-palette-2">
                    <div className="adv-pub-text-container">
                    <p className="adv-pub-text">{ADdata.step3}</p>
                    </div>
                    </div>
              </div>
              <div className="column" id="adv-pub-col">
                    <div className="adv-pub-content-box adv-pub-palette-1">
                    <div className="adv-pub-text-container">
                    <p className="adv-pub-text">{ADdata.step4}</p>
                    </div>
                    </div>
              </div>
             </div>
            </div>
            </div>
        ))}

        </div>

       
       

    );
}
export default AdvPubComponent;