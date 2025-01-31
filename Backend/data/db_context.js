import sqlite3 from 'sqlite3';


const getDB = () =>
{
    return new sqlite3.Database('todo.db');
}

const getTasks = async () =>
{
    const db = getDB();

    const result = await new Promise((resolve, reject) => 
    {
        db.all('select * from tasks', (result, error) => {

            if(error)
                reject(result)
            else
                resolve(result)  
        })
    })

    db.close();
    return result;
}

const createTask = async (task) =>
{
    const db = getDB();
    const id = crypto.randomUUID();
    
    const {message, finished} = task;

    const date = new Date();
    

    const result = await new Promise((resolve, reject) =>
    {
        db.run(`insert into task(id, message, finished, date) values ("${id}","${message}", 0, "${date}")`, (result, error) =>
        {
            if(error)
                reject(error)
            else
                resolve(result)
        })
    })

    db.close();
    return result;
}

const updateTask = async (task) =>
{
    const {id, message, finished} = task;

    const db = getDB();

    const result = await new Promise((resolve, reject) =>
    {
        db.run(`update task set message = "${message}", finished = ${finished} where id = ${id}`, (result, error) =>
        {
            if(error)
                reject(error)
            else
                resolve(result)
        })
    })

    db.close();
    return result;
}

const deleteTask = async (id) =>
{
    const db = getDB();

    const result = await new Promise((resolve, reject) =>
    {
        db.run(`delete task where id = ${id}`, (result, error) =>
        {
            if(error)
                reject(error)
            else
                resolve(result)
        })
    })

    db.close();
    return result;
}