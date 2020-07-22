import React from 'react';
import Navbar from './components/Navbar.js';
import AppHolder from './components/AppHolder.js';
import './App.css';
import { add } from 'date-fns';

// Here is where I would update the total list
// Then, AppHolder would update the UI based on the total list
// This would also have a push function and a function to remove a specified task, etc
// Class is defined here. If App is redefined as a class componenet, task's class definition can no longer live here
function App() {
    class task {
        constructor(formData) {
            this.id = String(Date.now());
            this.description = formData;
            this.timestamp = Date.now();
        }
    }

     // create array of tasks for testing
    const tasks = [
        new task("Task 1 is Current"),
        new task("Task 2 is Current"),
        new task("Task 3 is Upcoming"),
        new task("Task 4 is Current"),
        new task("Task 5 is Upcoming")
    ];

    // set two tasks in the future for testing
    tasks[2].timestamp = add(tasks[3].timestamp, {days: 1});
    tasks[4].timestamp = add(tasks[4].timestamp, {days: 1});

    return (
        <div className="App">
            <Navbar />
            <AppHolder tasks={tasks}/>
        </div>
    );
}

export default App;
