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
          <img src="animated-logo.gif" alt="Gif" />
        </div>
      </div>

      <div className="content">
        <div className="sub-header">
          <div className="header-text">
            READY TO LEARN MORE ABOUT ME?
          </div>
        </div>
        <div className="boxes">
          <div className="box">
            <h2>Box 1</h2>
          </div>
          <div className="box">
            <h2>Box 2</h2>
          </div>
          <div className="box">
            <h2>Box 3</h2>
          </div>
        </div>
      </div>
    </div>
  );
}