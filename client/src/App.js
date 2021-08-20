import React from "react";
import Tasks from "./Tasks";
import {Paper, TextField, Checkbox, Button} from "@material-ui/core";
import './App.css';

class App extends Tasks{
    state = { tasks: [], currentTask: ""};
    render() {
        const {tasks} = this.state;
        return (
            <div className="App flex-ctr-ctr">
                <Paper elevation={3} className="container">
                    <div className="heading">
                        ToDo List
                    </div>
                    <form onSubmit={this.handleSubmit} className="flex-ctr-ctr my-15px px-2">
                        <TextField
                            variant="outlined"
                            size="small"
                            className="w-100pct input-text"
                            value={this.state.currentTask}
                            required={true}
                            onChange={this.handleChange}
                            placeholder="Add New ToDo"
                        >
                        </TextField>
                        <Button
                            className="btn"
                            color="primary"
                            variant="outlined"
                            type="submit"
                        >
                            Add
                        </Button>
                    </form>
                    <div className="task-list-container mx-2">
                        {
                            tasks.map((task) => (
                                <Paper 
                                    key={task._id}
                                    className="flex-ctr-ctr task-containers"
                                >
                                    <Checkbox
                                        checked={task.completed}
                                        onClick={() => this.handleUpdate(task._id)}
                                        color="primary"
                                    >
                                    </Checkbox>
                                    <div
                                        className={task.completed ? "task line-through" : "task"}
                                    >
                                        {task.task}
                                    </div>
                                    <Button
                                        onClick={() => this.handleDelete(task._id)}
                                        color="secondary"
                                    >
                                        Delete
                                    </Button>
                                </Paper>
                            ))
                        }
                    </div>
                </Paper>
            </div>
        );
    }
}

export default App;
