import React from "react";

class Home extends React.Component {
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <div className="home">
                   <div className="quiz-level container">
                       <div className="title">
                           Welcome to Quizz
                       </div>
                       <div className="sub-title">
                          Please choose quizz level
                       </div>
                        <div className="level 1">
                             <button className="easy" onClick={() =>this.props.selectLabel("easy")}>Easy</button>
                        </div>
                        <div className="level 2">
                             <button className="medium" onClick={() =>this.props.selectLabel('medium')}>Medium</button>
                        </div>
                        <div className="level 3">
                             <button className="hard" onClick={() =>this.props.selectLabel('hard')}>Hard</button>
                        </div>
                   </div>
            </div>
        )
    }
}
export default Home;