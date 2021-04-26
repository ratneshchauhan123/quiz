import React from "react";

class Questions extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            timer:30
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
    
    render(){
        console.log("jdkdd", this.props)
        let listItems = this.props.question.map((number) =>{
        //console.log("fsafsfff", number)
        return(
             <div>
                <div>{number.question}</div> 
                {
                    number.options.map((options) =>{
                      <li key={options}>{options}</li>
                    })
                }
             </div>
        )
        }
        );
        return(
            <div className="question-page">
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

                   </div>
            </div>
        )
    }
}
export default Questions;