import React from 'react';
import './App.css';

export default function Page() {
  return (
    <div className="page">
      <div className="header">
        <div className="name-text">
          NATHAN JARGON
        </div>
        <div className="logo">
          <img src="animated-logo-trans.gif" alt="Gif" />
        </div>
      </div>

      <div className="content">
        <div className="sub-header">
          <div className="header-text">
            FULL-STACK DEVELOPER
          </div>
        </div>
        <div className="boxes">
          <div className="box">
            <img className="arrow-image" src="/right-arrow.png" alt="Right arrow" />
            <img className="arrow-image-white" src="/right-arrow-white.png" alt="White right arrow" />
            <h2>About</h2>
          </div>
          <div className="box">
            <img className="arrow-image" src="/right-arrow.png" alt="Right arrow" />
            <img className="arrow-image-white" src="/right-arrow-white.png" alt="White right arrow" />
            <h2>Projects</h2>
          </div>
          <div className="box">
            <img className="arrow-image" src="/right-arrow.png" alt="Right arrow" />
            <img className="arrow-image-white" src="/right-arrow-white.png" alt="White right arrow" />
            <h2>Contact</h2>
          </div>
        </div>
      </div>
    </div>
  );
}