import React from 'react'
import Edit from './Edit'

const TaskItem = ({list, dell, comp, newed }) => {
    return (
        <div className="amin">
            <h1 id={list.isDone ? "comp" : null}>{list.action}</h1>
            <button className="del" onClick={()=> dell(list.id)}>Delete</button>
            <button className="comp" onClick={()=> comp(list.id) }>{list.isDone ? "Undo" : "Complete"}</button>
            <Edit task={list} newed={newed} />
        </div>
    )
}

export default TaskItem
