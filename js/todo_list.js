class App extends React.Component{
    render(){
        return(
            <div>
                {/* <Header/> */}
                <Content/>
            </div>
        );
    }
}

class Content extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            number: 0, 
            task: "",
            tasks: []
        }
        this.addTask = this.addTask.bind(this);
    }

    addTask(){
        this.newTaskList = [];
        var newTask = <Task idNum={this.props.taskId} handleBlur={this.updateTask}/>;
        for(var i = 0; i < this.state.tasks.length; i++){
            this.newTaskList.push(newTask);
        }
        this.setState({
            tasks: this.newTaskList, 
            number: this.state.number + 1
        });
    }
    updateTask(){

    }
    render(){
        return(
            <div className="container">
                <TaskList newTaskList={this.newTaskList} taskId={this.state.number} taskType="todo" text="ToDo"/>
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
    }
    render(){
        return(
            <li id={`task${this.props.idNum}`} class={`checkbox`}>
                <input type="checkbox"/>
                <input type="text" onBlur={this.props.handleBlur}/>
            </li>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
);