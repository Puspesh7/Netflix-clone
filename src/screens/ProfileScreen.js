import React from 'react'
import "./ProfileScreen.css";
import Nav from '../Nav';

function ProfileScreen({getProfileButton,userInfo}) {
    const reportStatus = (status) =>{
        if(status)
          getProfileButton(false);
      }

    return (
        <div className="profileScreen">
            <Nav reportStatus = {reportStatus}/>
            <div className="profileScreen_body">
                <h1>Edit Profile</h1>
                <div className="profileScreen_info">
                    <img src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png" alt="" />
                    <div className="profileScreen.details">
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileScreen;
