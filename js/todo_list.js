class App extends React.Component{
    render(){
        return(
            <div className="container">
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
              
        }
    }
    render(){
        return(
            <div className="container">
                <TaskList taskType="todo" text="ToDo"/>
                <TaskList taskType="done" text="Done"/>
                <button>Add</button>
            </div>
        );
    }
}

class TaskList extends React.Component{
    render(){
        return(
            <div className={`row ${this.props.taskType}`}>
                {this.props.text}
                <ul className={`column ${this.props.taskType}`}>
                    <Task/>
                </ul>
            </div>
        );
    }
}

class Task extends React.Component{
    render(){
        return(
            <li>
                <input type="checkbox"/>
                <input type="text"/>
            </li>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
);