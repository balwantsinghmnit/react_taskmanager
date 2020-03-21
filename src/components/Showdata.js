import React, { Component } from 'react';
import ShowItem from "./ShowItem";

class Showdata extends Component {

    render() {
      
        return this.props.todos.map((todo)=>(
            <ShowItem key={todo.id} style={{display:"inline-block",float:"left"}} delTask={this.props.delTask} item={todo}/>
        ))
    }
}
export default Showdata;