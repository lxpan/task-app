import React from 'react';

/* Overview renders the tasks */
class Overview extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { tasks } = this.props;
        return (
            <>
            <h3>Tasks</h3>
            <ul>
                {tasks.map(task => {
                    return <li key={task + '-task'}>{task}</li>;
                })}
            </ul>
            </>
        );
    }
}

export default Overview;
