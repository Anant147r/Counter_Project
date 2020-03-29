import React ,{Component} from 'react'
import Counter from "./Counter"
import style from "../CSS/style.module.css"
class Counters extends Component
{
    state={
        counters:[  {id:1,value:0},
                    {id:2,value:0},
                    {id:3,value:0},
                    {id:4,value:0}
                ],
        max_id:4
    }
    increment=(counter)=>{
        const count=this.state.counters.map((ele)=>{
            if(ele.id===counter.id)
                ele.value++;
            return ele;
        })
        this.setState({counters:count});    
    }
    decrement=(counter)=>{
        const count=this.state.counters.map((ele)=>{
            if(ele.id===counter.id)
                ele.value--;
            return ele;
        })
        this.setState({counters:count})
    }
    del=(counter)=>{
        const count=this.state.counters.filter((ele)=>ele.id!==counter.id)
        this.setState({counters:count})
    }
    resetHandler=()=>{
        const counters=[    {id:1,value:0},
                            {id:2,value:0},
                            {id:3,value:0},
                            {id:4,value:0}
                        ]
        this.setState({counters});
    }
    
    render(){
        return(
            <div className={style.Counter}> 
                <button onClick={this.resetHandler} className={style.buttons}>Reset</button>
                {this.state.counters.map((counter)=>{
                    return(
                        <Counter value={counter} 
                        incrementHandler=   {()=>this.increment(counter)}
                        decrementHandler=   {()=>this.decrement(counter)}
                        deleteHandler=      {()=>this.del(counter)}  
                        />
                    )
                })}           
            </div>
        )
    }
}
export default Counters;