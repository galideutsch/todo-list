class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tasksToDo: [],
            tasksDone: [],
            count: 0
        }
        this.addTask = this.addTask.bind(this);
        this.addContent = this.addContent.bind(this);
        this.updateList = this.updateList.bind(this);
    }
    addTask() {
        this.setState({
            count: this.state.count + 1
        });
    }
    addContent(content) {
        // this.state.tasksToDo.push(content);
        this.state.tasksToDo[this.state.tasksToDo.length-1] = content;
        this.setState({
            tasksToDo: this.state.tasksToDo
        });
    }
    updateList(done, todo) {
        this.setState({
            tasksDone: done,
            tasksToDo: todo
        });
    }
    render() {
        return (
            <div className="container">
                <Header />
                {/* for (index in this.state.done){ */}
                 <TaskList handleBlur={this.addContent} amount={this.state.count} taskType="todo"
                 text="ToDo"  completed={this.state.tasksDone} pending={this.state.tasksToDo} updateList ={this.updateList}/>
                {/* } */}
                <TaskList  handleBlur={this.addContent} amount={this.state.count} taskType="done" 
                 text="Done" completed={this.state.tasksDone} pending={this.state.tasksToDo} updateList ={this.updateList} />
                <button onClick={this.addTask}>Add</button>
            </div>
        );
    }
}

class TaskList extends React.Component {
    constructor(props) {
        super(props);
        this.moveTask = this.moveTask.bind(this);
        this.convertTask = this.convertTask.bind(this);
    }
    moveTask(event) {
        // var newTaskList=[];
        var pending = this.props.pending;
        var completed = this.props.completed;
        var index;
                // for (var i = 0; i < newTaskList.length; i++){
        // for (var i = 0; i < pending.length; i++) {
            if(event.target.checked){
                completed.push(event.target.value);/////////////
                index = pending.indexOf(event.target.value);
                pending.splice(index,1);
            } else{
                pending.push(event.target.value);
            }
        //     if (event.target.checked && pending[i] === event.target.value) {
        //         completed.push(<li>{event.target.value}</li>);
        //     }
        //     for (var j = 0; j < this.props.pending; j++) {
        //         if (this.tasks.includes(event.target.value)) {
        //             this.tasks.splice(this.tasks[j], 1);
        //         }
        //     }
        // }
        this.props.updateList(completed, pending);
    }
    convertTask(arr, status){
        var newArr = []
        for( var taskIndex in arr){
                newArr.push(<Task status={status} handleBlur={this.props.handleBlur} moveTask={this.moveTask} value={arr[taskIndex]} />);
        }
        return newArr;;
    }
    render() {
        var pending = this.convertTask(this.props.pending, "pending");
        var completed = this.convertTask(this.props.completed, "completed");
        var tasks = [];
        for (var i = 0; i < this.props.amount - completed.length; i++) {
            debugger;
            // tasks.push(<Task handleBlur={this.props.handleBlur} moveTask={this.moveTask} />);
            // if(this.props.status == "pending"){}
            pending.push(<Task handleBlur={this.props.handleBlur} moveTask={this.moveTask} />);
        }

        return (
            <div className={`row ${this.props.taskType}`}>
                {this.props.text}
                <ul className={`col-lg-12 col-xs-12 ${this.props.taskType}`}>
                    {/* {this.props.taskType === "todo" ? tasks : this.props.newTaskList} */}
                    {this.props.taskType === "todo" ? pending : completed}
                </ul>
            </div>
        );
    }
}

class Task extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            task: ""
        }
        this.updateTask = this.updateTask.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    updateTask(event) {
        // this.state.task = event.target.value
        this.setState({
            // task: this.state.task
            task : event.target.value
        });
        this.props.handleBlur(this.state.task);
    }
    handleChange(event) {
        this.props.moveTask(event);
        
    }
    render() {
        return (
            <li class="checkbox task">
                <label>
                    <input type="checkbox" value={this.state.task} onChange={this.handleChange} />
                    <input type="text" onBlur={this.updateTask} value={this.props.value} />
                </label>
            </li>
        );
    }
}

class Header extends React.Component {
    render() {
        return (
            <div className="row header">
                <h1 className="col-lg-12 col-xs-12 title">You Got This.</h1>
                <h4 className="col-lg-12 col-xs-12 subtitle">Decluttering your life just became that easy</h4>
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
);