import React from 'react'
import Login from './Login'
import './Login.css'
import { useNavigate} from 'react-router-dom';
export default function Signup() {
    const navigate = useNavigate();
    const navigateToLogin = () => {
        // 👇️ navigate to /contacts
        navigate('/');
      };
  return (
    <div className="your-component img-fluid">
    <div className="row ">
            <div className="col-4 "></div>
            
            <div className="mt-3 col-4 pb-2 border border-2 border border-primary   ">
                
                <form>
                   <h4 className='mb-1 mt-2 pb-2 pt-2 bg-info text-white LoginStyle' >Signup</h4>
                    <div className="mb-1 mt-4">
                      <label for="exampleInputEmail1" className="form-label fs-5">USER NAME</label>
                      <input required name="field4" type="text" className="form-control bg-info" aria-describedby="emailHelp" />
                     
                    </div>
                    
                    <div className="mb-2 mt-1">
                      <label for="exampleInputEmail1" className="form-label fs-5">EMAIL ID</label>
                      <input required name="field4" type="text" className="form-control bg-info" aria-describedby="emailHelp" />
                     
                    </div>
                    <div className="mb-1 mt-1">
                      <label for="exampleInputEmail1" className="form-label fs-5">PASSWORD</label>
                      <input required name="field4" type="text" className="form-control bg-info" aria-describedby="emailHelp" />
                     
                    </div>
                    <div className="mb-3">
                      <label for="exampleInputPassword1" className="form-label fs-5">CONFIRM PASSWORD</label>
                      <input required type="password" name="field5" className=" bg-info form-control " />
                    </div>
                    <div className="mb-3">
                      <label for="exampleInputPassword1" className="form-label fs-5">SELECT PHOTO</label>
                      <input required type="file" name="field5" className=" bg-info form-control " />
                    </div>
                    
                    <button type="submit" className="  three btn btn-warning mb-4 mx-3 mt-3">Signup</button>
                    <button onClick={navigateToLogin} type="submit" className=" mb-4 mt-3 three btn btn-warning mb-2 ">Click Here To Login</button>
                  </form>
                
            </div>
           
        </div>
      </div>
        
    
  )
}
