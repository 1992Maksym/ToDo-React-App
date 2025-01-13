import { useRef, useState } from 'react'
import classes from './ToDoForm.module.scss'

export default function ToDoForm({setInputValue}){
    const [text,setText] = useState('')
    const inputItem = useRef('')

    function setInput(e){
        e.preventDefault()
        setInputValue({value: inputItem.current.value, done: false})
        setText('')
    }

    return(
        <form className={classes.form}>
            <input type="text" ref={inputItem} onChange={e=>setText(e.target.value)} value={text} className={classes.formInput}/>
            <button onClick={setInput} className={classes.formBtn}>add</button>
        </form>
    )
}