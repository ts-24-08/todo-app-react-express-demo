import { useEffect, useState } from 'react'
import TaskCard from '../components/task_card';

import { getTasks, createTasks, updateTasks, deleteTasks } from '../services/task_service'




function App() 
{
  const [tasks, setTasks] = useState([]);
  
  useEffect(() => 
  {
    const fetchData = async () =>
    { 
      setTasks(await getTasks())
    }

    fetchData();

  },[]);
  
  // await createTasks('HELLO WORLD')
  
  // await updateTasks({
  //   id: "6222dc5b-da78-44f4-9b6c-cd406d11348e",
  //   message: "222222222222222222222222222222222222222222222222222",
  //   date: "Fri Jan 31 2025 19:19:21 GMT+0100 (Central European Standard Time)",
  //   finished: 1 })

  // await deleteTasks('6222dc5b-da78-44f4-9b6c-cd406d11348e')  

  return (
    <>
    <p>HALLO</p>
     {tasks && (
      tasks.map((task) => {return <TaskCard task={task}/>})
     )}
     <p>HALLO</p>
    </>
  )
}

export default App
