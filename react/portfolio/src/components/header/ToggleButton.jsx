import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function ToggleButton({icon}) {
    return (
        <button id="menu_toggle" className="header__toggle" aria-label="navigation menu toggle">
            {/* <i className="fa-solid fa-bars"></i> */}
            {icon === 'html' && <FontAwesomeIcon icon={faBars} />}
        </button>
    );
}

