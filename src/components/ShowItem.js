import React, { Component } from 'react'
import { Button } from 'reactstrap'

class ShowItem extends Component {
    myStyle =()=> {
        return {
        background:"#333",
        width:"20%",
        marginLeft:"40%",
        marginTop:(this.props.item.id==="water")?"-180px":"1px",
        borderRadius:"3px",
        paddingBottom:"1px",
        height:"30px"
            }
    }
    render() {
        return (
            <div style={this.myStyle()}>
                <p style={{color:"#fff",marginLeft:"5%",width:"80%"}}>{this.props.item.title}</p>
                <Button style={{
                    float:"right",
                    margin:"10px",
                    padding:"0.3px 7px",
                    background:"#ff0000",
                    color:"#fff",
                    borderRadius:"5px",
                    border:"none",
                    marginTop:"-38px"
                }}
                onClick={this.props.delTask.bind(this,this.props.item.id)}
                >x</Button>
            </div>
        )
    }
}


export default ShowItem;