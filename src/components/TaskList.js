import React from 'react'
import TaskItem from './TaskItem'

const TaskList = ({del, list, comp, newed}) => {
    return (
        <div>
            {
                list.map(
                   (el, i)  => <TaskItem dell={del} key={i} list={el} comp={comp} newed={newed}/>
                )
            }
        </div>
    )
}

export default TaskList
