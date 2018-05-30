class App extends React.Component{
    render(){
        return(
            <div>
                {/* Header */}
                <Content/>
            </div>
        );
    }
}

class Content extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            numOfTasks: 0, 
            tasks: []
        }
        this.addTask = this.addTask.bind(this);
    }
    addTask(){
        this.state.tasks.push(<Task numOfTasks={this.state.numOfTasks+1}/>);
        this.setState({
            numOfTasks: this.state.numOfTasks + 1,
            tasks: this.state.tasks
        });
    } 
    render(){
        return(
            <div className="container">
                <TaskList newTaskList={this.state.tasks} taskType="todo" text="ToDo"/>
                <TaskList taskType="done" text="Done"/>
                <button onClick={this.addTask}>Add</button>
            </div>
        );
    }
}

class TaskList extends React.Component{
    constructor(props){
        super(props);
    } 
    render(){
        return(
            <div className={`row ${this.props.taskType}`}>
                {this.props.text}
                <ul className={`col-lg-12 col-xs-12 ${this.props.taskType}`}>
                    {this.props.newTaskList}
                </ul>
            </div>
        );
    }
}

class Task extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            task: ""
        }
        this.updateTask = this.updateTask.bind(this);
    }
    updateTask(){
        this.setState({
            task: event.target.value
        })
    } 
    render(){
        return(
            <li id={`task${this.props.numOfTasks}`} class="checkbox task" value={this.state.task}>
                <label>
                    <input type="checkbox"/>
                    <input type="text" onBlur={this.updateTask}/>
                </label>
            </li>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
);