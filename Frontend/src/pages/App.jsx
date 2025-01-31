import { useState } from 'react'

import { getTasks, createTasks, updateTasks, deleteTasks } from '../services/task_service'


async function App() {

  const tasks = await getTasks()

  console.log(tasks);
  
  // await createTasks('HELLO WORLD')
  
  // await updateTasks({
  //   id: "6222dc5b-da78-44f4-9b6c-cd406d11348e",
  //   message: "222222222222222222222222222222222222222222222222222",
  //   date: "Fri Jan 31 2025 19:19:21 GMT+0100 (Central European Standard Time)",
  //   finished: 1 })

  // await deleteTasks('6222dc5b-da78-44f4-9b6c-cd406d11348e')


  return (
    <>
     
    </>
  )
}

export default App
