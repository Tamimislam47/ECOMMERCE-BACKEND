import React from "react";

type Props = {};

const ProtectRoute = (props: Props) => {
  const accessToken = localStorage.getItem("accessToken");
  const refreshToken = localStorage.getItem("refreshToken");


  return <div>ProtectRoute</div>;
};

export default ProtectRoute;
