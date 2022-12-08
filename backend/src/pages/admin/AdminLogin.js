import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'

const AdminLogin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errMsg, setErrMsg] = useState("");

    const onChangeEmailHandler = (event) => {
        setEmail(event.target.value);
    };
    const onChangePasswordHandler = (event) => {
        setPassword(event.target.value);
    }
    const loginEventHandler = (event) => {
        axios
            .post("http://localhost:8080/auth/login", {
                email: email,
                password: password,
            })
            .then((result) => {
                if (result.status === 200) {
                    console.log(result.data);
                    alert("Login success!");
                    setErrMsg("");
                } else {
                    setErrMsg("email or password incorrect");
                }
            })
            .catch((error) => {
                setErrMsg("email or password incorrect");
                });
    };

    return (
        <section className="d-flex justify-content-center">
            <div className="admin-login">
                <p className="h3"> Admin Login </p>
                <form onSubmit={(e) => e.preventDefault()}>

                    <div className="form-outline mb-1">
                        <label className="form-label">Email</label>
                        <input
                            className="form-control form-control-md"
                            type="email"
                            value={email}
                            onChange={onChangeEmailHandler}
                            // required
                        />
                    </div>
                    <div className="form-outline mb-1">
                        <label className="form-label">Password</label>
                        <input
                            className="form-control form-control-md"
                            type="password"
                            value={password}
                            onChange={onChangePasswordHandler}
                            // required
                        />
                        <p style={{color: "red"}}>{errMsg}</p>
                    </div>
                    <div className="d-flex justify-content-center mt-3">
                        <button
                            type="submit"
                            className="btn btn-success center"
                            onClick={loginEventHandler}
                        >
                            Login
                        </button>
                        
                    </div>
                    <div className="form-outline mb-0 mt-2 text-center ">
                        Dont have an account?  <Link to = "/admin-register"> Register </Link>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default AdminLogin
