import './App.css';
import React from 'react';
import Home from './componets/home';
import Question from './componets/questions';
import Reports from './componets/report';
import axios from 'axios'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
       check_page:"home",
       report:5,
       quiz: "",
          
       
    };
    
  }
  componentDidUpdate() {
    let _this =this;
    let answer=[]
    if(this.state.check_page=="question"){
      setTimeout(() => {
        _this.submitQuest(answer);
      }, 30000)
    }
  }
  selectLabel = (lavel) =>{
  
    axios.get(`http://127.0.0.1:4000/getQuiz?difficulty=${lavel}`)
    .then(res =>{
      console.log("res", res);
      if(res.data && res.data.quiz){
        this.setState({quiz:res.data.quiz});
         this.setState({check_page:'question'})
      }
    })
  }
  submitQuest = (answer) => {
    axios.post("http://127.0.0.1:4000/answers", {
      answers:answer
    })
    .then(res =>{
      console.log(res);
      if(res.data){
        this.setState({report:res.data.marks})
        this.setState({check_page:'report'})
      }
      
    })

  }

  render() {
    let page;
    console.log("efsfsdf", this.state)
    if (this.state.check_page==="home") {
      page = <Home selectLabel={this.selectLabel} />;
    } else if(this.state.check_page==="question") {
      page = <Question question={this.state.quiz} submitQuest={this.submitQuest} />;
    }
    else if(this.state.check_page==="report"){
      page = <Reports report={this.state.report} />;
    }
    return (
      <div className="App">
        {page}
      </div>
    );
  }
}

export default App;
