import React from 'react';
import PopupLoad from './PopupLoad';
class CreateEvent extends React.Component {

    state = { showForm: false }

    showForm = () => {
        return (
            <div className="form-style-6">
                <form id="add-app">

                    <label>Event Name: </label>
                    <input type="text"></input>

                    <label>Semester: </label>
                    <input type="text" ></input>

                    <label>Year: </label>
                    <input type="number"></input>

                    <label>Description (Optional): </label>
                    <textarea placeholder="Type your Message.."></textarea>

                    <label>Start Date: </label>
                    <input type="date"></input>

                    <label>End Date: </label>
                    <input type="date"></input>

                    <label>Semester: </label>
                    <input type="text" ></input>

                    <label>Start Time: </label>
                    <input type="time" ></input>

                    <label>End Time: </label>
                    <input type="time" ></input>

                </form>
                <PopupLoad />
            </div>
        );
    }
    render() { 
        return (
            <div className='create-event'>
<<<<<<< HEAD
                <h1>Create Event</h1>
=======
                <h1>GSU Events</h1>
>>>>>>> 2cf6e037aaab9a3211fa5424b6c8d0e36e20012f
                <button onClick={() => this.setState({ showForm: true })}>Create Event</button>
                {this.state.showForm ? this.showForm() : null}

            </div>
        );
    }
}

export default CreateEvent;
