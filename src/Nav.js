import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import "./Nav.css";

function Nav(props) {

    const [show,handleshow] = useState(false);
    useEffect(() =>{
        window.addEventListener("scroll", ()=>{
            if(window.scrollY > 100)
                handleshow(true);
            else    handleshow(false);
        })
    })
    const enableProfileScreen = () =>{
        props.getButtonStatus(true);
    }
    const disableProfileScreen = () =>{
        props.reportStatus(true);
    }
    return (
        <div className={`nav ${show && "nav_black"}`}>
            <img  onClick = {disableProfileScreen} className="nav_logo" src = "https://upload.wikimedia.org/wikipedia/commons/1/15/Logonfx.png" alt="Netflix Logo" />
            <img onClick={enableProfileScreen} className="nav_avatar" src = "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="Netflix logo" />
        </div>
    )
}

export default Nav
