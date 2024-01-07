import React from "react";
import cl from "./Loader.module.scss";

const Loader = () => {
    return (
        <div className={cl.loader__holder}>
            <div className={cl.loader}></div>
        </div>
    )
}

export default Loader;