import classes from './ToDoItem.module.scss'

export default function ToDoItem({post, changeStatus}){

    function checkStatus(){
        changeStatus(post.value)
    }

    return(
        <div className={post.done ? classes.donePost : classes.post} >
            <div className={classes.postText}>
                <div className={classes.postIcon}>
                    <svg width="20px" height="20px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">
                        <title>note-text</title>
                        <desc>Created with Sketch Beta.</desc>
                        <defs>
                        </defs>
                        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">
                        <g id="Icon-Set-Filled" sketch:type="MSLayerGroup" transform="translate(-310.000000, -101.000000)" fill="#000000">
                        <path d="M334,111 L318,111 C317.447,111 317,110.553 317,110 C317,109.448 317.447,109 318,109 L334,109 C334.553,109 335,109.448 335,110 C335,110.553 334.553,111 334,111 L334,111 Z M334,117 L318,117 C317.447,117 317,116.553 317,116 C317,115.448 317.447,115 318,115 L334,115 C334.553,115 335,115.448 335,116 C335,116.553 334.553,117 334,117 L334,117 Z M334,123 L318,123 C317.447,123 317,122.553 317,122 C317,121.448 317.447,121 318,121 L334,121 C334.553,121 335,121.448 335,122 C335,122.553 334.553,123 334,123 L334,123 Z M338,101 L314,101 C311.806,101 310,102.969 310,105.165 L310,129.023 C310,131.22 311.779,133 313.974,133 L337.817,133 C340.012,133 342,131.196 342,129 L342,105 C342,102.804 340.194,101 338,101 L338,101 Z" id="note-text" sketch:type="MSShapeGroup">
                        </path>
                        </g>
                        </g>
                    </svg>
                </div>
                <div>{post.value}</div>
            </div>
            <div className={classes.controls}>
                <div className={classes.deleteIcon}>
                    <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 11V17" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M14 11V17" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M4 7H20" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M6 7H12H18V18C18 19.6569 16.6569 21 15 21H9C7.34315 21 6 19.6569 6 18V7Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div className={classes.doneIcon} onClick={checkStatus}>
                    <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M19.7071 6.29289C20.0976 6.68342 20.0976 7.31658 19.7071 7.70711L10.4142 17C9.63316 17.7811 8.36683 17.781 7.58579 17L3.29289 12.7071C2.90237 12.3166 2.90237 11.6834 3.29289 11.2929C3.68342 10.9024 4.31658 10.9024 4.70711 11.2929L9 15.5858L18.2929 6.29289C18.6834 5.90237 19.3166 5.90237 19.7071 6.29289Z" fill="#0F1729"/>
                    </svg>
                </div>
            </div>
            
        </div>
    )
}