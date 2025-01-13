import classes from './ToDoItem.module.scss'

export default function ToDoItem({post}){
    return(
        <div className={classes.post}>{post}</div>
    )
}