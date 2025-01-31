import express from 'express'

const app = express();
app.use(express.json())

app.listen(3000, () => {console.log('Server is running...');
})

// Get All Todos
app.get('/todos', (request, response) =>
{

});

// Create a Todo
app.post('/todos', (request, response) =>
{

});

// Change a Todo
app.put('/todos', (request, response) =>
{

});

// Delete a Todo
app.delete('/todos', (request, response) =>
{

});