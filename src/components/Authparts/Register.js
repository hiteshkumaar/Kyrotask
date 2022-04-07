import React from 'react'

function Register() {
  return (
    <div className="base-container">
            <div className="header">Register</div>
            <div className="content">
            <div className="image">
            {/* <img src={loginImg}/> */}
            </div>
            <div className="form">
                <div className="form-group">
                    <label htmlfor="username">Username</label>
                    <input type="text"name="username" placeholder="username" />
                    </div>
                    <div className="form-group">
                    <label htmlfor="email">Email</label>
                    <input type="email"name="username" placeholder="Email" />
                    </div>
                    <div className="form-group">
                    <label htmlfor="password">Password</label>
                    <input type="password"name="password" placeholder="password" />
                </div>
            </div>
         </div>
         <div className="footer">
             <button type ="button" className="btn">Register</button>
         </div>
    </div>
  )
}

export default Register