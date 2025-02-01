import { useEffect, useState } from 'react'

import TaskCard from '../components/task_card';
import { getTasks, createTask } from '../services/task_service'

export default function App() 
{
  const [tasks, setTasks] = useState([]);

  const [message, setMessage] = useState('');

  const [force, setForce] = useState(false)
  
  // Holt sich Tasks von der API wenn force verändert wurde, force dient als zwangs ReRender.
  useEffect(() => 
  {
    const fetchData = async () =>
    { 
      setTasks(await getTasks())
    }

    fetchData();

  },[force]);

  const createNewTask = async () =>
  {
    const newTask = await createTask(message)

    setForce(!force)

    setMessage('')
  }

  const update = async () =>
  {
    setForce(!force);
  }
  
  return (
    <div id='main'>
      <div className='task_card'>
        <input type="text" className='message' onChange={(event)=> setMessage(event.target.value)} value={message}/>
        <button className='button' onClick={() => createNewTask()}>Submit</button>
      </div>
      {tasks && 
        (
          tasks.map((task) => {return <TaskCard key={task.id} task={task} update={update}/>})
        )}
  </div>
  )
}