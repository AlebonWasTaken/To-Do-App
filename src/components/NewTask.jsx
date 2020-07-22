import React from 'react';

// Receives user input, then passes text up to the top level to be added to the total list of arrays
// Once the 'global' list of tasks is updated, AppHolder refilters them into current and upcoming
class NewTask extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('A task was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <div className="NewTask">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                </form>
                <input type="submit" value="Submit"></input>
            </div>
        )
    }
}

export default NewTask;