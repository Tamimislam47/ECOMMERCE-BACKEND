import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { successAlert, errorAlert } from "@/SweetAlert";

type Props = {};

type formdataType = {
  email: string;
  password: string;
};

const LogBody = (props: Props) => {
  const navigate = useNavigate();
  const [formdata, setformdata] = useState<formdataType>({
    email: "",
    password: "",
  });

  const formHanlder = async () => {
    if (!formdata.email || !formdata.password) {
      successAlert();
      return;
    }

    if (formdata.password.length < 8) {
      alert("Password must be at least 8 characters long");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:3000/api/signin",
        formdata,
        { withCredentials: true },
      );

      if (response.data.allow) {
        successAlert();
        navigate("/");
      } else {
        errorAlert();
      }
    } catch (error) {
      errorAlert();
    }
  };

  return (
    <div className="hero min-h-screen">
      <div className="hero-content grid grid-cols-2">
        <div className="card w-full max-w-sm shrink-0 shadow-2xl">
          <form className="card-body" onSubmit={(e) => e.preventDefault()}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered bg-transparent"
                value={formdata.email}
                onChange={(e) =>
                  setformdata((prev) => {
                    return { ...prev, email: e.target.value.trim() };
                  })
                }
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered bg-transparent"
                value={formdata.password}
                onChange={(e) =>
                  setformdata((prev) => {
                    return { ...prev, password: e.target.value.trim() };
                  })
                }
                required
              />
              <div className="justify-centeri flex justify-between">
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <input
                      type="checkbox"
                      defaultChecked
                      className="checkbox-success"
                    />
                    <span className="label-text ml-3">Remember me</span>
                  </label>
                </div>

                <label className="label">
                  <a href="#" className="link-hover link label-text-alt">
                    Forgot password?
                  </a>
                </label>
              </div>
            </div>
            <div className="form-control mt-6">
              <button
                onClick={formHanlder}
                className="btn w-[100px] text-white"
              >
                Login
              </button>
            </div>
          </form>
        </div>

        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <div className="wrapper">
            <Link className="a" to={"/register"}>
              Register
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogBody;
