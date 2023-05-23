import React from "react";
import { Link } from "react-router-dom";

export default (): JSX.Element => {
  return(
    <div style={{display: "flex", justifyContent: "space-around"}}>
      <Link to={'Login'} style={{ fontSize: "30px"}} >
        login
      </Link>
      <Link to={'Main'} style={{ fontSize: "30px"}} >
        Main
      </Link>
    </div>
  )
}