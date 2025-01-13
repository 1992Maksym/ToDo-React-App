import classes from './ToDoList.module.scss'
import ToDoItem from '../toDoItem/ToDoItem'
import ToDoActions from '../toDoActions/ToDoActions'

export default function ToDoList({posts,changeStatus,removePost}){

    return(
        <>
            {posts && <div className={classes.posts}>
                <ToDoActions />
                {posts.map((post, index) => {
                    return <ToDoItem 
                                key={index} 
                                post={post} 
                                changeStatus={changeStatus} 
                                removePost={removePost}>
                            </ToDoItem>
                })}
            </div>}
        </>
        
    )
}