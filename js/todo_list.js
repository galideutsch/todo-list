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
        this.state.pending.push(<Task val="" handleClick={this.moveTask} pending={this.state.pending} />);
        this.setState({
            pending: this.state.pending
        });
    }
    moveTask(event) {
        var grandparent = event.target.parentNode.parentNode;
        var content = event.target.value;
        if (event.target.checked && grandparent.className.includes("todo")) {
            this.state.completed.push(<Task handleClick={this.moveTask} val={content} />);
            event.target.parentElement.remove();
            this.setState({
                completed: this.state.completed
            });
        } else if (event.target.checked && grandparent.className.includes("done")) {
            this.state.pending.push(<Task handleClick={this.moveTask} val={content} />);
            event.target.parentElement.remove();
            this.setState({
                pending: this.state.pending
            });
        }
    }
    render() {
        return (
            <div className="container">
                <Header>
                    <h1 className="col-lg-12 col-xs-12 title">You Got This.</h1>
                    <h4 className="col-lg-12 col-xs-12 subtitle">Decluttering your life just became that easy</h4>
                    <div className="col-lg-12 col-xs-12 button">
                        <button className="btn clickable" onClick={this.addTask}>+</button>
                    </div>
                </Header>
                <TaskList tasks={this.state.pending} taskType="todo" text="ToDo" />
                <TaskList tasks={this.state.completed} taskType="done" text="Done" />
            </div>
        );
    }
}

class TaskList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isShowing: true
            
        }
        this.showList = this.showList.bind(this);
    }
    showList(){
        this.setState({
            isShowing: !this.state.isShowing
        });
    }
    render() {
        return (
            <div className={`row ${this.props.taskType}`}>
                <h4 className={`${this.props.taskType} clickable`} onClick={this.showList}>{this.props.text}</h4>
                <ul className={`col-lg-12 col-xs-12 ${this.props.taskType} ${this.state.isShowing? null : "hidden"}`}>
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
            task: this.props.val,
            isHidden: true,
            isStarred: false
        }
        this.updateTask = this.updateTask.bind(this);
        this.enableTextEdit = this.enableTextEdit.bind(this);
        this.starTask = this.starTask.bind(this);
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

    deleteTask(event) {
        event.target.parentElement.remove();
    }

   starTask(event) {
        this.setState({
            isStarred: !this.state.isStarred
        });
        this.state.isStarred ? event.target.src = "../images/star-16.png" : event.target.src = "../images/goldstar-16.png" ;
        this.state.isStarred ? null: event.target.parentElement.parentElement.prepend(event.target.parentElement);
    }
    render() {
        return (
            <li className="task">
                <img src="../images/bluetrash.png" className="delete clickable" onClick={this.deleteTask} />
                <img src="../images/star-16.png" className={this.state.isStarred ? `starred` : `unstarred`} onClick={this.starTask}></img>
                <input type="checkbox" onClick={this.props.handleClick} value={this.state.task} />
                <input type="text" className={this.state.isHidden ? `input clickable` : `input clickable hidden`} onBlur={this.updateTask} placeholder={this.state.task} />
                <span className={this.state.isHidden ? `task clickable hidden` : `task clickable`} onClick={this.enableTextEdit}>{this.state.task}</span>
            </li >
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

function render(){
    ReactDOM.render(
        <App />,
        document.getElementById("root")
    );
}
render();