import sqlite3 from 'sqlite3';

const getDB = () =>
{
    return new sqlite3.Database('todo.db');
}

const createTableTask = async () =>
{
    const db = getDB();

    db.run(`
        create table if not exists task
        (
            id text primary key,
            message text,
            date Date,
            finished INTEGER
        );
        `)
}

createTableTask();

export const getTasks = async () =>
{
    const db = getDB();

    const result = await new Promise((resolve, reject) => 
    {
        db.all('select * from task order by date desc', (error, result) => 
        {
            if(error)
                reject(error)
            else
                resolve(result)  
        })
    }).catch(error => {console.log('ERROR:',error)})

    db.close();
    return result;
}

export const createTask = async (message) =>
{
    const db = getDB();
    const id = crypto.randomUUID();
    const date = new Date();
    

    console.log(message);
    


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

export const updateTask = async (task) =>
{
    const {id, message, finished} = task;

    const db = getDB();

    const result = await new Promise((resolve, reject) =>
    {
        db.run(`update task set message = "${message}", finished = ${finished} where id = "${id}"`, (error, result) =>
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

export const deleteTask = async (id) =>
{
    const db = getDB();

    const result = await new Promise((resolve, reject) =>
    {
        db.run(`delete from task where id = "${id}"`, (error, result) =>
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