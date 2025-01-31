import express from 'express'
import {createTask, updateTask, getTasks, deleteTask} from './data/db_context.js'

const app = express();
app.use(express.json())

app.listen(3000, () => {console.log('Server is running...');
})

// Get All Todos
app.get('/todos', async (request, response) =>
{
    const result = await getTasks();    
    
    response.status(200).send(result)
});

// Create a Todo
app.post('/todos', async (request, response) =>
{
    const { message } = request.body;

    const result = await createTask(message)

    response.status(200).send(result)
});

// Change a Todo
app.put('/todos', async (request, response) =>
{
    const { task } = request.body;
    
    const result = await updateTask(task)

    response.status(200).send(result)
});

// Delete a Todo
app.delete('/todos/:id', async (request, response) =>
{
    const { id } = request.params;

    const result = await deleteTask(id)

    response.status(200).send(result)
});