import './App.css';
import React from 'react';
import Home from './componets/home';
import Question from './componets/questions';
import Reports from './componets/report'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
       check_page:"question",
       question:[
          {
            question: "The drug cartel run by Pablo Escobar originated in which South American city?",
            options:["Bogot&aacute;","Quito","Cali", "Medell&iacute;n"]
          }
       ]
          
       
    };
    
  }
  componentDidMount() {
    if(this.state.check_page==="question"){
      setTimeout(() => {
        this.submitQuestion();
      }, 30000)
    }
  }
  submitQuestion = () => {
    console.log("question submitted")
  }
  render() {
    let page;
    console.log("efsfsdf", this.state)
    if (this.state.check_page==="home") {
      page = <Home  />;
    } else if(this.state.check_page==="question") {
      page = <Question question={this.state.question} />;
    }
    else if(this.state.check_page==="report"){
      page = <Reports />;
    }
    return (
      <div className="App">
        {page}
      </div>
    );
  }
}

export default App;
