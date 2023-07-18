import React from "react";
import er1 from "../assets/iconos/error2.png" 

export default function Error({appStyle}){
    const errorStyle = {
        backgroundColor: "#fff",
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "24px",
        color: "#000",
      };
      return (
        <div style={errorStyle}>
            <img src={er1} />
        </div>
      );
}