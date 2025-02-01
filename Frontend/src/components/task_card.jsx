import { useState } from "react";

import { updateTask, deleteTask } from '../services/task_service'

export default function TaskCard(props)
{
    let {id, date, message, finished} = props.task;

    const update = props.update;

    const [edit, setEdit] = useState(false);
    

    const deleteHander = async () =>
    {
        await deleteTask(id)
        update();
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
        update();
        setEdit(!edit);
    }

    const inputMessageHandler = (event) =>
    {
        message = event.target.value;
    }

    const inputFinishedHandler = (event) =>
    {
        finished = event.target.checked;
    }

    

    return (
        <div className="task_card">
            <div className="left">
                <p>{new Date(date).toLocaleDateString('en-us', { year: "numeric", month: "short", day: "numeric" })}</p>
                {edit ? 
                (
                    <div className="edit">
                        <input className="checkbox" type="checkbox" defaultChecked={finished} onChange={inputFinishedHandler}/>
                        <input className="message" type="text" name="" id="" defaultValue={message} onChange={inputMessageHandler}/>
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