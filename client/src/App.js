import React from "react";
import Tasks from "./Tasks";
import {Paper, TextField, Checkbox, Button} from "@material-ui/core";
import './App.css';

class App extends Tasks{
    state = { tasks: [], currentTask: ""}
    render() {
        const tasks = this.state;
        return (
            <div className="App flex-ctr-ctr">
                <Paper elevation={3} className="container">
                    <div className="heading">
                        ToDo
                    </div>
                    <form onSubmit={this.handleSubmit} className="flex-ctr-ctr my-15px">
                        <TextField
                            variant="outlined"
                            size="small"
                            className="w-80pct"
                            value={this.state.currentTask}
                            required={true}
                            onChange={this.handleChange}
                            placeholder="Add New ToDo"
                            autoComplete={false}
                        >
                        </TextField>
                        <Button
                            className="btn"
                            color="primary"
                            variant="outlined"
                            type="submit"
                        >
                            Add Task
                        </Button>
                    </form>
                    <div className="">
                        {
                            tasks.map((task) => (
                                <Paper key={task._id} className="flex-ctr-ctr task-containers">
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
