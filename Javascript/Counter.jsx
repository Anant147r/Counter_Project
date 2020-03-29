
import React , {Component} from'react'
import style1 from "../CSS/style.module.css"
class Counter extends Component{
    state={}
    render(){
        return(
        <div >
            <h1 className={style1.heading}>{this.props.value.value}</h1>
            <div className={style1.buttonsGroup}>
                <button onClick={this.props.incrementHandler}>+</button>
                <button onClick={this.props.decrementHandler}>-</button>
                <button onClick={this.props.deleteHandler}>Delete</button>
            </div>
        </div>
        )
    }
}

export default Counter;