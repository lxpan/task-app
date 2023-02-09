import React from 'react';
import './Overview.css';

/* Overview renders the tasks */
class Overview extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { tasks, index } = this.props;
        return (
            <>
                <h3>Tasks</h3>
                <ul className='task-list'>
                    {tasks.map(task => {
                        return <li key={task.text + '-' + index}>{task.id + '. ' + task.text}</li>;
                    })}
                </ul>
            </>
        );
    }
}

export default Overview;
