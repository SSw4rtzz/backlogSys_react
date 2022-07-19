import React from "react";
import "./topbar.css";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from "react-router-dom"

library.add(fas);

class Topbar extends React.Component {

render() {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                </div>
                <div className="items">
                    <div className="topbarIcons">
                        <FontAwesomeIcon icon={["fas","bell"]} />   {/* Icon notificações */}
                        <span className="topNotifications">1</span> {/* Numero de notificações, TENTAR AUTOMATIZAR */}
                    </div>
                    <NavLink to={"/user/1"} style={{textDecoration:"none"}}>
                    <img src={'../Fotos/2ff9f473-4914-4c4f-b6b9-eabd0de38f4d.jpg'} alt="Profile" className="profilePhoto"/>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}
}
export default Topbar;