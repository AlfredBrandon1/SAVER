import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

const AdminRegister = () => {
    const adminTypes = [
        {
            name: "ambulance",
        },
        {
            name: "police",
        },
        {
            name: "fireman",
        },
        {
            name: "rescue",
        },
    ];

    // const dispatch = useDispatch();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [type, setType] = useState("");

    const onSubmitFormHandler = (event) => {
        // event.preventDefault();
        // dispatch({
        //     type: "REGISTER",
        //     payload: {
        //         name: name,
        //         email: email,
        //         password: password,
        //         type: type,
        //     },
        // });
        // setName("");
        // setEmail("");
        // setPassword("");
        // setType("");
    };

    return (
        <section className="d-flex justify-content-center">
            <div className="admin-register">
                <p className="h3"> Admin Register </p>
                <form onSubmit={onSubmitFormHandler}>
                    <div className="form-outline mb-1">
                        <label className="form-label">Name</label>
                        <input
                            className="form-control"
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            // required
                        />
                    </div>
                    <div className="form-outline mb-1">
                        <label className="form-label">Email</label>
                        <input
                            className="form-control"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            // required
                        />
                    </div>
                    <div className="form-outline mb-1">
                        <label className="form-label">Password</label>
                        <input
                            className="form-control"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            // required
                        />
                    </div>
                    <div className="form-outline mb-1">
                        <label className="form-label">Select pet type</label>
                        <select
                            className="form-control"
                            value={type}
                            onChange={(e) => setType(e.target.value)}
                            required
                        >
                            <option>-- Admin types --</option>
                            {adminTypes.map((item) => {
                                return <option>{item.name}</option>;
                            })}
                        </select>
                    </div>
                    <div className="d-flex justify-content-center mt-3">
                        <button
                            type="submit"
                            className="btn btn-success center"
                        >
                            Register
                        </button>
                    </div>
                    <div className="form-outline mb-0 mt-2 text-center ">
                        Already have an account?{" "}
                        <Link to="/admin-login"> Login </Link>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default AdminRegister;
