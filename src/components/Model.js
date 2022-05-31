import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Model extends Component {
  render() {
      let modelStyle ={
          display: 'block',
          backgroundColor: 'rgba(0,0,0,0.8',
      }
      let imgStyle ={
          width: '100%',
          height: '100%',
      }
    return (
        <div className="modal show fade" style={modelStyle}>
        <div className="modal-dialog ">
          <div className="modal-content">
            <div className="modal-header">
              
              <h3 className="modal-title"><strong>{this.props.heading}</strong></h3>
              <button type="button" className="btn-close" onClick={this.props.hide}></button>
            </div>
           
            <div className="modal-body">
                
            <img alt="travel image" src={this.props.img} style={imgStyle}/>
              <h5>{this.props.desc}</h5>
             
            </div>
            
          </div>
        </div>
      </div>
    )
  }
}
