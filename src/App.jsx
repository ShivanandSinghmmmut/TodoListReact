import React, { useState } from "react";
import "./index.css"
import TodoList from "./TodoList";

const App = ()=>{

    const [inputList, setInputList] = useState("buy manog");
    const [Items, setItems] = useState([])
    const itemEvent = (event)=>{
        setInputList(event.target.value)
    }
    const listOfItems = ()=>{
        setItems((oldItems)=>{
            return[...oldItems, inputList]
        })
        setInputList("")
    }
    const deleteItems = (id)=>{
        console.log("delete")

        setItems((oldItems)=>{
            return oldItems.filter((arrElem,index)=>{
                return index!==id;
            })
        })
    }
    return(
        <>
            <div className="main_div">
                <div className="center_div">
                    <br/>
                    <h1>TODO LIST</h1>
                    <br/>
                    <input type="text" placeholder="add items" onChange={itemEvent} value={inputList}/>
                    <button onClick={listOfItems}>+</button>
                    <ol>
                        {Items.map((itemval,index)=>{
                            return <TodoList text = {itemval}
                                id = {index}
                                key = {index}
                                onSelect = {deleteItems}
                            />
                        })}
                    </ol>
                </div>
            </div>
        </>
    )
}


export default App;