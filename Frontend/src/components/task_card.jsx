import { useState } from "react";

import { updateTask, deleteTask } from '../services/task_service'

export default function TaskCard(props)
{
    const {id, date} = props.task;

    const [finished, setFinished] = useState(props.task.finished)
    const [message, setMessage] = useState(props.task.message)

    const [edit, setEdit] = useState(false);
    

    const deleteHander = async () =>
    {
        props.deleteTask(id);

        await deleteTask(id)  
    }

    const updateHandler = async (event) =>
    {
        if(!edit)
            event.target.innerText = 'SAVE'
        else
        {
            event.target.innerText = 'EDIT'
            
            await updateTask({ id, message, date,finished })
        }

        setEdit(!edit);
    }

    

    

    return (
        <div key={id} className="task_card">
            <div className="left">
                <p>{new Date(date).toLocaleDateString('en-us', { year: "numeric", month: "short", day: "numeric" })}</p>
                {edit ? 
                (
                    <div className="edit">
                        <input className="checkbox" type="checkbox" defaultChecked={finished} onChange={(event) => setFinished(event.target.checked)} />
                        <input className="message" type="text" name="" id="" defaultValue={message} onChange={(event) => setMessage(event.target.value)}/>
                    </div> 
                ) 
                :
                ( <h3>{message}</h3> )
            }
            </div>
            
            <div className="right">
                <div><button className="button" onClick={() => deleteHander()}>DELETE</button></div>
                <div><button className="button" onClick={(event) => updateHandler(event)}>EDIT</button></div>
            </div>
        </div>
    )
}