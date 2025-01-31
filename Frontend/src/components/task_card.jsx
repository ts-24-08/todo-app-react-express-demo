export default function TaskCard(props)
{
    const {id, message, finished, date} = props.task;
    
    

    return (
        <div key={id}>
            <p>{message}</p>
            <input type="checkbox" checked={finished} />
            <p>{date}</p>
        </div>
    )
}