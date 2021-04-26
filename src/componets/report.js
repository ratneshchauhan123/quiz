import React from "react";

class Reports extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            report:""
        }
    }
    componentDidMount() {
        if(this.props.report===5){
           this.setState({report:"Very Strong"})
        }
        else if(this.props.report===4){
            this.setState({report:"Strong"})
        }
        else if(this.props.report===3){
            this.setState({report:"Good"})
        }
        else if(this.props.report===2){
            this.setState({report:"Bad"})
        }
        else if(this.props.report===1){
            this.setState({report:"Poor"})
        }
    }
    render(){
        
        return(
            <div className="report container">
                   {this.state.report}
            </div>
        )
    }
}
export default Reports;