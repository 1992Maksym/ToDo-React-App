import classes from './ToDoList.module.scss'
import ToDoItem from '../toDoItem/ToDoItem'

export default function ToDoList({posts,changeStatus}){

    return(
        <>
            {posts && <div className={classes.toDoItem}>
                {posts.map((post, index) => {
                    return <ToDoItem key={index} post={post} changeStatus={changeStatus}></ToDoItem>
                })}
            </div>}
        </>
        
    )
}