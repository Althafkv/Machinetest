import React, { useState } from "react";
import "./Login.css"

function Login() {

    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")
    const [errorMsg,seterrorMsg] = useState("")

    const handleSubmit = (e)=> {
        e.preventDefault()

        if(username.length === 0) {
            seterrorMsg('Please enter a username and password')
            return
        }

        if(password.length === 0) {
            seterrorMsg('Please enter a password')
            return
        }

        if(username === "918086808680" && password === "123456"){
            window.location.href = '/products'
            return
        }

        seterrorMsg('Invalid username or password')
    }
    
  return (
    <section className="vh-100">
        
      <div className="container py-5 h-100">
        <div className="row d-flex align-items-center justify-content-center h-100">
          <div className="col-md-8 col-lg-7 col-xl-6">
            <img
              src="https://png.pngtree.com/png-vector/20220723/ourmid/pngtree-login-access-denied-vector-illustration-png-image_6041366.png"
              className="img-fluid"
              alt="Phone image"
            />
          </div>
          <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
            <form onSubmit={handleSubmit}>
            <h4 className="mb-3 fw-bold text-success">Welcome</h4>
              <div className="form-outline mb-4">
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="form-control form-control-lg"
                />
                <label className="form-label" for="form1Example13">
                  Username
                </label>
              </div>

              <div className="form-outline mb-4">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="form-control form-control-lg"
                />
                <label className="form-label" for="form1Example23">
                  Password
                </label>
              </div>

              <button type="submit" className="btn btn-primary btn-block">
                Login
              </button>
                {errorMsg && <p className="text-danger mt-3">{errorMsg}</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
