import React, { Component } from 'react'

class Footer extends Component {
    render() {
        return (
            <div style={{
                textAlign:"center",
                background:"#333",
                color:"#fff",
                height:"80px",
                width:"100%",
                bottom:"0px",
                marginBottom:"0px",
                overflow:"hidden",
                lineHeight:"80px",
                position:"absolute"}}>
                <p>Copyright@2020</p>
            </div>
        )
    }
}

export default Footer;