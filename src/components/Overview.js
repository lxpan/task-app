import React from 'react';
import './Overview.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'


/* Overview renders the tasks */
class Overview extends React.Component {
    constructor(props) {
        super(props);

        this.handleEdit = this.handleEdit.bind(this);

        this.state = {
            editStatus: false
        }
    }

    handleEdit(e) {
        this.setState({
            editStatus: !this.editStatus
        });
    }

    taskItem(t) {
        if(this.state.editStatus) {
            return <input value={t.text}></input>
        } else {
            return t.id + '. ' + t.text + ' ';
        }
    }

    render() {
        const { tasks, index, callback, toggleEdit } = this.props;
        let canEdit = true;

        
        return (
            <>
                <h3>Tasks</h3>
                <ul className='task-list'>
                    {tasks.map(task => {
                        return (
                            <li key={task.text + '-' + index}>
                                {this.taskItem(task)}
                                <span className='task-actions'>
                                    <FontAwesomeIcon icon={faCircleXmark} onClick={(e) => {
                                        callback(task.id);
                                    }}/>
                                    &nbsp;
                                    <FontAwesomeIcon icon={faPenToSquare} onClick={this.handleEdit}/>
                                </span>
                            </li>
                            
                        );
                    })}
                </ul>
            </>
        );
    }
}

export default Overview;
