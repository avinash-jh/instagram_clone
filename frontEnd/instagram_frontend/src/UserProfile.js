import React from 'react'
import myImage from './img10.jpg';
export default function () {
  return (
    <div>
        <div className='container-fluid'>
            <div className='row mt-3'>
                <div className='col-md-4'>
                   
                </div>
                <div className='col-md-4'>
                <div style={{ display: "flex" }}>
      <input type="text" placeholder="Search items..."
        style={{ marginRight: "15px",marginLeft:"30px" }}
      />
      <button >Search</button>
    </div>
     
                </div>
                <div className='col-md-4'>
                
                </div>
            </div>
        </div>
   <div className='container-fluid mt-3'>
    <div className='row'>
        <div className='col-md-3'></div>
        <div className='col-md-6 text-center'><p className='fs-1'><img src={myImage} width="150" className=" mb-3 mt-3 p-1 img-fluid rounded-circle border border-warning" alt="Cinque Terre" />      Avinash kumar </p><hr></hr></div>
        
        <div className='col-md-3'></div>
    </div>
   </div>
    </div>
  )
}
