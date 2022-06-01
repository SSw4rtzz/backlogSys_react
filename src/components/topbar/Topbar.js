import React from "react";
import "./topbar.css";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas);

export default function Topbar(){
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo">BacklogSys</span>    {/* Logotipo BacklogSys na parte superior esquerda */}
                </div>
                <div className="topRight">
                    <div className="topbarIcons">
                        <FontAwesomeIcon icon={["fas","bell"]} />   {/* Icon notificações */}
                        <span className="topNotifications">1</span> {/* Numero de notificações, TENTAR AUTOMATIZAR */}
                    </div>
                    <img src={process.env.PUBLIC_URL + "avatars/admin.jpg"} alt="Profile photo" className="profilePhoto"/> {/* Foto perfil, TENTAR AUTOMATIZAR */}
                </div>
            </div>
        </div>
    )
}