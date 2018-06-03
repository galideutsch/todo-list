class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pending: [],
            completed: []
        }
        this.addTask = this.addTask.bind(this);
        this.moveTask = this.moveTask.bind(this);
    }
    addTask() {
        this.state.pending.push(<Task handleClick={this.moveTask} />); 
        this.setState({
            pending: this.state.pending
        });
    }
    moveTask(event) {
        var grandparent = event.target.parentNode.parentNode;
        if (event.target.checked && grandparent.className.includes("todo")){
            var content = event.target.value;
            this.state.completed.push(<Task handleClick={this.moveTask} val={content} />);
            event.target.parentElement.remove();
            this.setState({
                completed: this.state.completed
            });
        } else if (event.target.checked && grandparent.className.includes("done")){
            var content = event.target.placeholder;
            this.state.pending.push(<Task handleClick={this.moveTask} val={content} />);
            event.target.parentElement.remove();
            this.setState({
                pending: this.state.pending
            });
        }
    }
    // deleteTask(){

    // }
    render() {
        return (
            <div className="container">
                <Header>
                    <h1 className="col-lg-12 col-xs-12 title">You Got This.</h1>
                    <h4 className="col-lg-12 col-xs-12 subtitle">Decluttering your life just became that easy</h4>
                    <div className="col-lg-12 col-xs-12 btn">
                        <button className="button clickable" onClick={this.addTask}>+</button>
                    </div>
                </Header>
                <TaskList tasks={this.state.pending} taskType="todo" text="ToDo"/>
                <TaskList tasks={this.state.completed} taskType="done" text="Done"/>
            </div>
        );
    }
}

class TaskList extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className={`row ${this.props.taskType}`}>
                <h4 className={this.props.taskType}>{this.props.text}</h4>
                <ul className={`col-lg-12 col-xs-12 ${this.props.taskType}`}>
                    {this.props.tasks}
                </ul>
            </div>
        );
    }

}

class Task extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            task: "",
            isHidden: true
        }
        this.updateTask = this.updateTask.bind(this);
        this.enableTextEdit = this.enableTextEdit.bind(this);
        this.getValue = this.getValue.bind(this);
    }
    updateTask(event) {
        this.state.task = event.target.value;
        this.setState({
            task: this.state.task,
            isHidden: false
        });
    }
    enableTextEdit(event) {
        this.setState({
            isHidden: true
        });
        event.target.className += " hidden";
    }
    // getValue(event){
    //     this.setState = ({
    //         task: event.target.value
    //     });
    // }
    render() {
        return (
            <li className="task" value={this.props.val}>
                <input type="checkbox" onClick={this.props.handleClick} value={this.state.task}/>
                <input type="text" className={this.state.isHidden ?`input clickable`:`input clickable hidden`} onBlur={this.updateTask}  value={this.props.val}/>
                <span className={this.state.isHidden ? `task clickable hidden`:`task clickable`
                onClick={this.enableTextEdit}>{this.state.task}</span>
            </li>
        );
    }
}

class Header extends React.Component {
    render() {
        return (
            <div className="row header">
                {this.props.children}
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
);