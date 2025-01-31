import { useEffect, useState } from 'react'

import TaskCard from '../components/task_card';
import { getTasks, createTask } from '../services/task_service'

function App() 
{
  const [tasks, setTasks] = useState([]);
  const [message, setMessage] = useState('');
  
  useEffect(() => 
  {
    const fetchData = async () =>
    { 
      setTasks(await getTasks())
    }

    fetchData();

  },[]);

  const deleteTask = (id) =>
  {
    // Irgendwie wird nicht das richtige element mit entfernt, immer das letzte, aber kein rerender...
    const newTasks = tasks.filter(x => x.id !== id);
    setTasks([...newTasks])
  }

  const createNewTask = async () =>
  {
    await createTask(message)

    setMessage('')
  }
  
  return (
    <div id='main'>
      <div className='task_card'>
        <input type="text" className='message' onChange={(event)=> setMessage(event.target.value)} defaultValue={message}/>
        <button className='button' onClick={() => createNewTask()}>Submit</button>
      </div>
     {tasks && (
       tasks.map((task) => {return <TaskCard task={task} deleteTask={deleteTask}/>})
      )}
  </div>
  )
}

export default App
