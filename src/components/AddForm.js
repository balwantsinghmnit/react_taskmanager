import React, { Component } from 'react';
import { Button, Form, Label, Input } from 'reactstrap';

class AddForm extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            task:""
        }
      
    }
    onSubmit=(e)=>
    {
        e.preventDefault();
        const newtask = {task:this.state.task};
        this.props.addTask(newtask);
    }
    onChange=(e)=>
    {
        this.setState({[e.target.name]:[e.target.value]});
    }
    render() {
        return (
            <Form
                style={{
                    border:"2px solid blue",
                    width:"400px",
                    margin:"400px 10px 10px 80px",
                    height:"150px",
                    textAlign:"center",
                    paddingTop:"10px",
                    borderRadius:"2px",
                    background:"purple"
                }}
                onSubmit={this.onSubmit}
            >
                <Label>Add Task Form</Label>
                <Input type="text" name="task" value={this.state.task} style={{width:"360px",marginLeft:"20px"}} placeholder="Enter a task.." onChange={this.onChange} /><br/>
                <Button type="submit" color="primary">Submit</Button>
          </Form>
        )
    }
}

export default AddForm;
