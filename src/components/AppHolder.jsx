import React, { Component } from 'react';
import ContentFilter from './ContentFilter';
import Content from './Content';
import { isEqual, isAfter } from 'date-fns';

// Controls view, queues task lists based on timestamp
class AppHolder extends Component {
    constructor (props) {
        super(props);
        this.currentTasks = this.queueCurrentTasks(props.tasks);
        this.upcomingTasks = this.queueUpcomingTasks(props.tasks);
    }

    queueCurrentTasks(tasks) {
        const numTasks = tasks.length;
        let newList = [];
        let index = 0;

        for (let step = 0; step < numTasks; ++step) {
            let date = Date.now();            
            if (isEqual(tasks[step].timestamp, date)) {
                newList[index] = tasks[step];
                ++index;
            }
        }

        return newList;
    }

    queueUpcomingTasks(tasks) {
        const numTasks = tasks.length;
        let newList = [];
        let index = 0;

        for (let step = 0; step < numTasks; ++step) {
            let date = Date.now();            
            if (isAfter(tasks[step].timestamp, date)) {
                newList[index] = tasks[step];
                ++index;
            }
        }

        return newList;
    }

    render () {
        const currentTasks = this.currentTasks;
        const upcomingTasks = this.upcomingTasks;

        return (
            <div className="App-holder">
                <ContentFilter />
                <Content current={currentTasks} upcoming={upcomingTasks}/>
            </div>
        );
    }
}

export default AppHolder;