
import React, { useState } from 'react';
import './App.css';
import Counter from './components/Counter';
import Form from './components/Form';
import { tache } from './components/List';
import TaskList from './components/TaskList';

function App() {
  const [data, setdata] = useState(tache);
 
  const handleDelte = (x)=> {
    setdata(data.filter(el => el.id !==x))
  }
  const handleAdd = (x) => {
    const UpdateData = [...data];
    UpdateData.push(x);
    setdata(UpdateData);
  }
  const handleComplete = (index) => {
    setdata(data.map(
      (el) => el.id===index?{...el,isDone:!el.isDone}: el
    ))
  }

  const newData =(id,newedit)=> {
    setdata(data.map(el=>el.id===id ? {...el,action:newedit}:el))
  }
  

  
  return (
    <div className="App">
    <Form  addd={handleAdd}/>
    <TaskList list={data} del={handleDelte} comp={handleComplete} newed={newData} />
    <Counter />
    
    </div>
  );
}

export default App;
