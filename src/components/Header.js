import React, { Component } from 'react'
import {Link} from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <div style={header}>
                <h1>Task Manager</h1>
                <Link to="/" style={linkstyle}>Home</Link>|
                <a href="https://github.com/balwantsinghmnit" style={linkstyle}>GitHub</a>|
                <Link to="/about" style={linkstyle}>About</Link>
            </div>
        )
    }
}

const header = {
    background: "#333",
    textAlign: "center",
    padding: "10px",
  };

  const linkstyle={
      color:"#fff",
      marginLeft:"5px",
      paddingLeft:"5px",
      paddingRight:"10px"
  };

export default Header;