import { Button } from "@/components/ui/button";
import React from "react";
import { Link } from "react-router-dom";

type Props = {};

const LogBody = (props: Props) => {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content grid grid-cols-2">
        <div className="card w-full max-w-sm shrink-0 shadow-2xl">
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered bg-transparent"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered bg-transparent"
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
              <button className="btn w-[100px] text-white">Login</button>
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
