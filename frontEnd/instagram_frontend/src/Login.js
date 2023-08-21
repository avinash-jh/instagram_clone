import React from 'react'
import './Login.css'

import { Link } from 'react-router-dom'
import { useNavigate} from 'react-router-dom';
export default function Login() {
  const navigate = useNavigate();
  
  const navigateTosignup = () => {
    // 👇️ navigate to /contacts
    navigate('/Signup');
  };
  return (
    <div className="your-component img-fluid">
    <div className="row two">
            <div className="col-4 "></div>
            
            <div className="custom-margin col-4 pb-2 border border-2 border border-primary   ">
                
                <form>
                   <h4 className='mb-3 mt-2 pb-2 pt-2 bg-info text-white LoginStyle' >Login</h4>
                    <div className="mb-3 mt-4">
                      <label for="exampleInputEmail1" className="form-label fs-5">USER NAME</label>
                      <input required name="field4" type="text" className="form-control bg-info" aria-describedby="emailHelp" />
                      <div id="emailHelp" className="form-text"></div>
                    </div>
                    <div className="mb-3">
                      <label for="exampleInputPassword1" className="form-label fs-5">PASSWORD</label>
                      <input required type="password" name="field5" className=" bg-info form-control " />
                    </div>
                    
                    <button type="submit" className="  three btn btn-warning mb-2 mx-3">Login</button>
                    <button onClick={navigateTosignup} type="submit" className="  three btn btn-warning mb-2 ">Click Here To Signup</button>
                  </form>
                
            </div>
           
        </div>
      </div>
        
    
  )
}
