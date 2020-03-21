import React, { Component } from 'react';

import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle
  } from 'reactstrap';


class MyCard extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            title:this.props.title,
            subtitle:this.props.subtitle,
            text:this.props.subtitle,
            img:this.props.img,
            btn:this.props.btn
        }
    }
    render() {
        return (
            <div style={{width:"318px",margin:"10px",display:"block",float:"left"}}>
              <Card>
                <CardImg top width="318" height="200" src={this.props.img} alt="Card image cap" />
                <CardBody style={{background:"#333",padding:"10px"}}>
                  <CardTitle>{this.props.title}</CardTitle>
                  <CardSubtitle>{this.props.subtitle}</CardSubtitle>
                  <CardText>{this.props.text}</CardText>
                </CardBody>
              </Card>
            </div>
          );
       }
}

export default MyCard;
