class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            tasksToDo: [],
            tasksDone: [], 
            count: 0
        }
        this.addTask = this.addTask.bind(this);
        this.addContent = this.addContent.bind(this);
        // this.updateList = this.updateList.bind(this);
    }
    addTask(){
        this.setState({
            count: this.state.count + 1
        });
    } 
    addContent(content){
        this.state.tasksToDo.push(content);
        this.setState({
            tasksToDo: this.state.tasksToDo
        });
    }
    // updateList(done, todo){
    //     this.setState({
    //         tasksDone: done,
    //         tasksToDo: todo
    //     });
    // }
    render(){
        return(
            <div className="container">
                <Header/>
                <TaskList handleBlur={this.addContent} amount={this.state.count} taskType="todo" text="ToDo"/>
                <TaskList completed={this.state.tasksDone} pending={this.state.tasksToDo} taskType="done" text="Done"/>
                <button onClick={this.addTask}>Add</button>
            </div>
        );
    }
}

class TaskList extends React.Component{
    constructor(props){
        super(props);
        this.moveTask = this.moveTask.bind(this);
    } 
    // moveTask(event){
    //     for (var i = 0; i < newTaskList.length; i++){
    //         if (event.target.checked && this.props.pending[i] === event.target.value){
    //             this.props.completed.push(<li>{event.target.value}</li>);
    //         }
    //         for (var j = 0; j < this.props.pending; j++){
    //             if(this.tasks.includes(event.target.value)){
    //                 this.tasks.splice(this.tasks[j], 1);
    //             }
    //         }
    //     }
    //     this.props.updateList(this.props.completed, this.props.pending);
    // }
    render(){
        var tasks = [];
        for (var i = 0; i < this.props.amount; i++){
            tasks.push(<Task handleBlur={this.props.handleBlur}/>);
        }
        return(
            <div className={`row ${this.props.taskType}`}>
                {this.props.text}
                <ul className={`col-lg-12 col-xs-12 ${this.props.taskType}`}>
                    {this.props.taskType === "todo" ? tasks: this.props.newTaskList}
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
        this.state.task = event.target.value
        this.setState({
            task: this.state.task
        });
       this.props.handleBlur(this.state.task);
    } 
    render(){
        return(
            <li class="checkbox task">
                <label>
                    <input type="checkbox" value={this.state.task}/>
                    <input type="text" onBlur={this.updateTask}/>
                </label>
            </li>
        );
    }
}

class Header extends React.Component{
    render(){
        return(
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