import React from "react";
import List from "./ans-options"

class Questions extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            timer:30,
            answer:[]
        };
      }
      componentDidMount() {
        var intervalId = setInterval(this.countDown, 1000);
        
        //this.setState({intervalId: intervalId});
     }
     
    countDown=() => {
        if (this.state.timer === 0) {
            clearInterval(this.state.intervalId);
        }
        else{
            this.setState({ timer: this.state.timer -1 });
        }
        
     }
     checkoption =(ans, id) => {
         let check=false;
        this.setState(state => {
            if(state.answer.length>0){
             let a = state.answer.find(element => {
                  if(element.id===id){
                      element.answer=ans;
                      check=true;
                      return false;
                  }
              })
              if(check===false){
                let aa=state.answer.push({"id":id,"answer":ans})
                return aa;
              }
              else{
                 return a 
              }
            }
            else{
                let aa=state.answer.push({"id":id,"answer":ans})
                return aa;
            }
            
            
        });
        console.log(this.state.answer)
        
      }
    
    
    render(){
        let listItems = this.props.question.map((number, index) =>{
        
        return(
             <div key={index}>
                <div>{index+1}) {number.question}</div> 
                <ul>
                    <List list={number} checkoption = {this.checkoption} />
                </ul>
             </div>
        )
        }
        );
        return(
            <div className="question-page container">
                   <div className="title">
                        Your Questions
                   </div>
                   <div className="timer">
                      {this.state.timer}
                   </div>
                   <div className="quest">
                          {listItems}
                   </div>
                   <div className="submit-btn">
                      <button onClick={() =>this.props.submitQuest(this.state.answer)}>Submit</button>
                   </div>
            </div>
        )
    }
}
export default Questions;