import React from "react";

class List extends React.Component {
    constructor(props) {
        super(props);
        
      }
    render(){
        let list = this.props.list.options.map((li, index) =>{
        //console.log("fsafsfff", number)
        return(
             <li key={this.props.list.id+index}>
                 <input type="radio" name={this.props.list.id} id={li} onChange={() =>this.props.checkoption(li, this.props.list.id)}></input><label for={li}>{li}</label>
             </li>
        )
        }
        );
        return(
            <div className="ans-option">
                   {list}
            </div>
        )
    }
}
export default List;