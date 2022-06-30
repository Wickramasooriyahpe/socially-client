import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class AdminModel extends Component {
  render() {
      let modelStyle ={
          display: 'block',
          backgroundColor: 'rgba(0,0,0,0.8',
      }
    //   let imgStyle ={
    //       width: '100%',
    //       height: '100%',
    //   }
    return (
        <div className="modal show fade" style={modelStyle}>
        <div className="modal-dialog ">
          <div className="modal-content">
            <div className="modal-header">
              
              <h3 className="modal-title"><strong>{this.props.campaignName}</strong></h3>
              <button type="button" className="btn-close" onClick={this.props.hide}></button>
            </div>
           
            <div className="modal-body">
                
            
              <h5>{this.props.budget}</h5>
              <h4>{this.props.adCategory}</h4>
             
            </div>
            
          </div>
        </div>
      </div>
    )
  }
}
