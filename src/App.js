import React, { Component } from 'react';
import {BrowserRouter as Router,Route} from "react-router-dom";
import Header from "./components/Header";
import Gap from "./components/Gap";
import About from "./components/About";
import MyCard from "./components/MyCard";
import Footer from "./components/Footer";
import AddForm from "./components/AddForm";
import Showdata from "./components/Showdata";
import 'bootstrap/dist/css/bootstrap.min.css';
import {v4 as uuid} from "uuid";
import "./App.css";

class App extends Component {

  state = {
    tasks:[
      {
        id:"water",
        title:"water"
      }
    ]
  }

  addTask=(task)=>{
    const newtask={
      id:uuid(),
      title:task.task
    }
    this.setState({
      tasks:[...this.state.tasks,newtask]
    })
  }

  delTask=(id)=>{
    this.setState({
      tasks:this.state.tasks.filter(task=>task.id!==id)
    })
  }

  render() {
    return (
      <Router>
        <div className="App">
        <Header/>
        <Gap/>
        <Route exact path="/" render={props=>(
          <React.Fragment>
            <center style={{marginLeft:"4%"}}>
              <MyCard style={cards}  title="Lee Iacocca"  text="Management is nothing more than motivating other people" img="https://sdtimes.com/wp-content/uploads/2018/03/530x300-1-318x180.jpg"/>
              <MyCard  style={cards} title="Maxime Lagacé" text="Those who truly want something will keep trying until they die" img="https://www.nextcolumn.com/wp-content/uploads/2019/05/Study-318x180.jpg"/>
              <MyCard title="Conan O’Brien" text="Work hard, be kind, and amazing things will happen" img="https://29jedk1t4b4k3o7vu2867f4z-wpengine.netdna-ssl.com/wp-content/uploads/2016/08/Appreciation_Street_Sign-318x180.jpg"/>
              <MyCard title="Mahatma Gandhi" text="Love is the strongest force the world possesses" img="https://csf-southsudan.org/wp-content/uploads/sites/50/2018/02/World-Agroforestry-Centre-logo-318x180.jpg"/>
              <MyCard title="Abraham Lincoln" text="do I not destroy my enemies when I make them my friends?" img="https://lovebytesreviews.com/wp-content/uploads/2019/07/OMeidhirBraginskyCrossingNuwaEscapeCover-318x180.jpg"/>
            </center>
            <Gap/>
            <AddForm addTask={this.addTask} style={{width:"400px",display:"inline-block",float:"left"}} />
            <Showdata delTask={this.delTask} todos={this.state.tasks}  />
          </React.Fragment>
        )} />
        <Route path="/about" component={About}/>
          <Footer />
        </div>
        </Router>
    )
  }
}

const cards = {
  width:"318px"
}
export default App;

