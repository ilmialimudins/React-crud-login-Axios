import React, { useState } from 'react';
import ApiLogin from '../Api/apiLogin';
import { useNavigate } from 'react-router-dom';

const Login=()=> {
    const [username, setUsername]=useState('')
    const [password, setPassword]=useState('')
    const[hasil,setHasil]=useState([])

    const navigate= useNavigate()

    const Submit = async ()=>{
        const result =await ApiLogin.login(username, password)
        setHasil(result);
        if(result.message==='berhasil'){
            localStorage.setItem('token',result.token)
            navigate('/tabel')
        }

    }
    return (  
    <main id="main" class="main">
     <div class="container">
        <section class="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
        <div class="container">
            <div class="row justify-content-center">
            <div class="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">

                <div class="d-flex justify-content-center py-4">
                <a href="index.html" class="logo d-flex align-items-center w-auto">
                    <img src="assets/img/logo.png" alt=""/>
                    <span class="d-none d-lg-block">NiceAdmin</span>
                </a>
                </div>
                {/* <!-- End Logo --> */}

                <div class="card mb-3">

                <div class="card-body">

                    <div class="pt-4 pb-2">
                    <h5 class="card-title text-center pb-0 fs-4">Login OII</h5>
                    <p class="text-center small">Enter login</p>
                    <p class="text-center small"></p>
                    <h5>status={hasil.message}</h5>
                    </div>

                    <form class="row g-3 needs-validation" novalidate>

                    <div class="col-12">
                        <label for="yourUsername" class="form-label">Username</label>
                        <div class="input-group has-validation">
                        <span class="input-group-text" id="inputGroupPrepend">@</span>
                        <input type="text" name="username" class="form-control" id="yourUsername" required onChange={event=>setUsername(event.target.value)}/>
                        <div class="invalid-feedback">Please insert username</div>
                        </div>
                    </div>

                    <div class="col-12">
                        <label for="yourPassword" class="form-label">Password</label>
                        <input type="password" name="password" class="form-control" id="yourPassword" required onChange={event=>setPassword(event.target.value)}/>
                        <div class="invalid-feedback">Please insert password!</div>
                    </div>

                    <div class="col-12">
                        <div class="form-check">
                        <input class="form-check-input" type="checkbox" name="remember" value="true" id="rememberMe"/>
                        <label class="form-check-label" for="rememberMe">Remember me</label>
                        </div>
                    </div>
                    <div class="col-12">
                        <button class="btn btn-primary w-100" type="button" onClick={Submit}>Login</button>
                    </div>
                    <div class="col-12">
                        <p class="small mb-0">Don't have account? <a href="pages-register.html">Create an account</a></p>
                    </div>
                    </form>

                </div>
                </div>

                <div class="credits">
                    {/* <!-- All the links in the footer should remain intact. -->
                    <!-- You can delete the links only if you purchased the pro version. -->
                    <!-- Licensing information: https://bootstrapmade.com/license/ -->
                    <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/nice-admin-bootstrap-admin-html-template/ --> */}
                Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
                </div>

            </div>
            </div>
        </div>

        </section>
    </div>
  </main>);
}

export default Login;