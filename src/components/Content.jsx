import React from 'react';
import NewTask from './NewTask';

// Displays active list based on ContentFilter
// On user input, this component will instruct the top level component on specific tasks to remove or reschedule
function Content(props) {
    const header = (
        <div className="Content-header">
            <h1>
                Today
            </h1>
        </div>
    );

    const activeList = props.current;
    const ListItem = ({task}) => (
        <li className="List-item">
            {task.description}
        </li>
    );
    const activeTasks = (
        <ul>
            {activeList.map(task => (
                <ListItem key={task.id} task={task} />
            ))}
        </ul>
    );

    return (
        <div className="Content">
            <div className="Container">
                {header}
                {activeTasks}
                <NewTask />
            </div>
        </div>        
    )
}

export default Content;