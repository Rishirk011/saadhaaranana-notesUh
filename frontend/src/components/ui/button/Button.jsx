import { useState } from "react";
import styles from "../button/button.module.css";

const Button = ({children, onclick ,variant = "primary"}) => {

  

    return <>
        
        <button className={`${styles.button} ${styles[variant]}`}
        onClick={()=>{onclick()}}>
            {children}
        </button>

    </>

}

export default Button;