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
       quiz: [
        {
            "question": "Virgin Trains, Virgin Atlantic and Virgin Racing, are all companies owned by which famous entrepreneur?   ",
            "options": [
                "Alan Sugar",
                "Richard Branson",
                "Bill Gates",
                "Donald Trump"
            ],
            "id": "6086e07d48deb56948e86b29",
            "difficulty": "easy"
        },
        {
            "question": "What is the most common surname Wales?",
            "options": [
                "Williams",
                "Jones",
                "Evans",
                "Davies"
            ],
            "id": "6086e1bc145aad6b0d572ab4",
            "difficulty": "easy"
        },
        {
            "question": "Which one of the following rhythm games was made by Harmonix?",
            "options": [
                "Meat Beat Mania",
                "Rock Band",
                "Dance Dance Revolution",
                "Guitar Hero Live"
            ],
            "id": "6086e22b99e0ab6b6deaf713",
            "difficulty": "easy"
        },
        {
            "question": "How many colors are there in a rainbow?",
            "options": [
                "7",
                "9",
                "10",
                "8"
            ],
            "id": "6086e291f190466bc5d0d90a",
            "difficulty": "easy"
        },
        {
            "question": "According to the nursery rhyme, what fruit did Little Jack Horner pull out of his Christmas pie?",
            "options": [
                "Apple",
                "Peach",
                "Plum",
                "Pear"
            ],
            "id": "6086e2e42414d36c08d371d7",
            "difficulty": "easy"
        }
    ],
          
       
    };
    
  }
  componentDidMount() {
    if(this.state.check_page==="question"){
      setTimeout(() => {
       // this.submitQuestion();
      }, 30000)
    }
  }
  selectLabel = (lavel) =>{
    this.setState({check_page:'question'})
    axios.get(`http://127.0.0.1:4000/getQuiz?difficulty=${lavel}`)
    .then(res =>{
      console.log(res)
    })
  }
  submitQuest = (answer) => {
    axios.post("http://127.0.0.1:4000/answers", {
      answer:answer
    })
    .then(res =>{
      console.log(res)
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
