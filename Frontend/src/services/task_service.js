import axios from "axios";

const url = 'http://localhost:3000/todos';

//GET
export async function getTasks()
{
    return await axios.get(url).then(x => {return x.data})
}

//POST
export async function createTask(message)
{
    // await fetch(url,message)
    await axios.post(url, {message})
}

//PUT
export async function updateTask(task)
{
    return axios.put(url, {task});
}

//DELETE
export async function deleteTask(id)
{
    await axios.delete(`${url}/${id}`)
}