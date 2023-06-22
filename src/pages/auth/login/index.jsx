import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { AuthLayout } from "../../../components";
import { BaseApiUrl } from "../../../utils/BaseApiUrl";
import { useQuery } from "@tanstack/react-query";

function Login() {
  const { role } = useParams();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validation, setValidation] = useState([]);
  const [btnColor, setBtnColor] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (role == "master") {
      setBtnColor("btn btn-primary");
    } else {
      setBtnColor("btn btn-success");
    }

    if (localStorage.getItem("token")) {
      if (localStorage.getItem("role") == "master") {
        navigate("/dashboard-master");
      } else {
        navigate("/dashboard-admin");
      }
    }
  }, []);

  const loginHandler = async (e) => {
    e.preventDefault();

    const formData = new URLSearchParams();
    formData.append("email", email);
    formData.append("password", password);
    await axios
      .post(`${BaseApiUrl}/auth/login`, formData)
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("nama", response.data.user.nama);
        localStorage.setItem("userId", response.data.user.id);
        if (response.data.user.role == "master") {
          localStorage.setItem("role", response.data.user.role);
          navigate("/dashboard-master");
        } else {
          localStorage.setItem("role", response.data.user.role);
          navigate("/dashboard-admin");
        }
      })
      .catch((error) => {
        setValidation(error.response.data);
      });
  };

  return (
    <div>
      <AuthLayout>
        <div className="card-header">
          <h3 className="text-center font-weight-light my-4">
            LOGIN {role.toUpperCase()}
          </h3>
        </div>
        <div className="card-body">
          {validation.message && (
            <div className="alert alert-danger">{validation.message}</div>
          )}
          <form onSubmit={loginHandler}>
            <div className="form-floating mb-3">
              <input
                className="form-control"
                type="email"
                placeholder="admin@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label>Email address</label>
            </div>
            <div className="form-floating mb-3">
              <input
                className="form-control"
                type="password"
                placeholder="admin"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <label>Password</label>
            </div>

            <div className="d-grid gap-2 mt-4 mb-0">
              <button type="submit" className={btnColor}>
                Login
              </button>
            </div>
          </form>
        </div>
      </AuthLayout>
    </div>
  );
}

export default Login;
