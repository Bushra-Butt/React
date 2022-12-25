import React from 'react'
export default function LoginPage() {
  return (
     <div style={{backgroundImage: "linear-gradient(to right,#ff8733 0%,#fa1100 100%)"}}>
        {/* <div className='p-200'> */}
           
            <div  className='container' id='loginForm'>
                <form className="bg-white rounded-5 shadow-5-strong p-5">
                    <div className="form-group">
                        <label className="form-label">Enter Email</label>
                        <input type="email" className="form-control" name="email" placeholder="Email" required/>
                    </div>
                    <div className="form-group">
                        <label className="form-label">Enter Password</label>
                        <input id="pass" type="password" className="form-control" name="pwd" placeholder="Password" required/>
                        <span><input type="checkbox"/> Show Password</span>
                    </div>
                        <span className='float-end'><a href='/'>Forget Password</a></span>
                    <br/>
                    <br/>
                    <div className="form-group">
                        <button type="submit" className="form-control btn btn-primary submit px-3" name='login' value="login">Login</button>
                    </div>
                    <p>Not yet account <b><a href='/'>Sign Up</a></b></p>
                </form>
            </div>
        </div>
    // </div>
  )
}
