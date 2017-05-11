import React from 'react';
import './Header.css';

import arrowLogo from '../../../img/double-right-arrows.svg';
import youtubeLogo from '../../../img/youtube-logo-black.png';
import gitLogo from '../../../img/git-logo-black.png';

const Header = (props) => {
    return (
        <div className="header-container container-fluid">
            <div className="logo-container">
                <img src={youtubeLogo} className="header-logo youtube" alt="youtube" />
                <img src={arrowLogo} className="header-logo arrow" alt="to" />
                <img src={gitLogo} className="header-logo git" alt="git markdown" />
            </div>

            <h1 className="header-text">{props.text}</h1>
        </div>
    );
};
export default Header;