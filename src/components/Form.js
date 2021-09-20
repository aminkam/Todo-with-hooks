import React, { useState } from 'react'

const Form = ({addd}) => {
    const [add, setadd] = useState("")

    const handleChange = event => {
        setadd(event.target.value);
    };
    // const handleSubmit = event => {
    //     event.preventDefault();
    //     const id = new Date().getTime();
    //     const action = add;
    //     addd({id, action})
    //     setadd("")
    // }
    const handleSubmit = event => {
        event.preventDefault();
        const action = add;
        const id = Math.random();
        add.trim()===""? alert ('Give us a Name'):
        addd({id, action})
       
    }
    return (
        <div className="box">
            <form onSubmit={handleSubmit }>
                <input type="text" value={add} onChange={handleChange} placeholder="Add Name pls !!"/>
                <button className="add">Add</button>

            </form>
        </div>
    )
}

export default Form
