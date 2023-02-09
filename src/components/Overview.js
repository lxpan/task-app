import React from 'react';
import './Overview.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'


/* Overview renders the tasks */
class Overview extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { tasks, index, callback } = this.props;
        console.log(callback);

        return (
            <>
                <h3>Tasks</h3>
                <ul className='task-list'>
                    {tasks.map(task => {
                        return (
                            <li key={task.text + '-' + index}>
                                {task.id + '. ' + task.text + ' '}
                                <FontAwesomeIcon icon={faCircleXmark} onClick={(e) => {
                                    callback(task.id);
                                }}/>
                            </li>
                            
                        );
                    })}
                </ul>
            </>
        );
    }
}

export default Overview;
