class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            completed: [], 
            count: 0
        }
        this.addTask = this.addTask.bind(this);
        this.updateList = this.updateList.bind(this);
    }
    addTask(){
        this.setState({
            count: this.state.count + 1
        });
    }
    updateList(content){
        this.state.completed.push(<Task val={content}/>);
        this.setState({
            completed: this.state.completed
        });
    } 
    render(){
        return(
            <div className="container">
                <Header>
                    <h1 className="col-lg-12 col-xs-12 title">You Got This.</h1>
                    <h4 className="col-lg-12 col-xs-12 subtitle">Decluttering your life just became that easy</h4>
                    <div className="col-lg-12 col-xs-12 btn">
                        <button className="button clickable" onClick={this.addTask}>+</button>
                    </div>
                </Header>
                <TaskList handleCheck={this.updateList} completed={this.state.completed} amount={this.state.count} taskType="todo" text="ToDo"/>
                <TaskList completed={this.state.completed} taskType="done" text="Done"/>
            </div>
        );
    }
}

class TaskList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isChecked: false
        }
        this.moveTask = this.moveTask.bind(this);
    } 
    moveTask(event){
        var content = event.target.value;
        this.setState ({
            isChecked: !this.state.isChecked
        });
        this.state.isChecked ? null : this.props.handleCheck(content);
        //     index = this.tasks.indexOf(event.target.value);
        //     this.tasks.splice(index,1);
        // }
        // } else {
        //     this.tasks.push(event.target.value);
        // }
    }
    render(){
        if (this.props.taskType === "todo"){
            this.tasks = [];
            for (var i = 0; i < this.props.amount; i++){
                this.tasks.push(<Task handleClick={this.moveTask}/>);
            }
        } else {
            this.tasks = this.props.completed;
        }
        return(
            <div className={`row ${this.props.taskType}`}>
                <h4 className={this.props.taskType}>{this.props.text}</h4>
                <ul className={`col-lg-12 col-xs-12 ${this.props.taskType}`}>
                    {this.tasks}
                </ul>
            </div>
        );
    }

}

class Task extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            task: "",
            isHidden: true
        }
        this.updateTask = this.updateTask.bind(this);
        this.enableTextEdit = this.enableTextEdit.bind(this);
    } 
    updateTask(event){
        this.state.task = event.target.value;
        this.setState({
            task: this.state.task,
            isHidden: false
        });
    } 
    enableTextEdit(event){
        this.setState({
            isHidden: true
        });
        event.target.className += " hidden";
    }
    render(){
        return( 
            <li className="task">
                <input type="checkbox" onClick={this.props.handleClick} value={this.state.task}/>
                <input type="text" className={this.state.isHidden ?`input clickable`:`input clickable hidden`} onBlur={this.updateTask} placeholder={this.props.val}/>
                <span className={this.state.isHidden ?`task clickable hidden`:`task clickable`} onClick={this.enableTextEdit}>{this.state.task}</span>
            </li>
        );
    }
}

class Header extends React.Component{
    render(){
        return(
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