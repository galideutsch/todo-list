// class ListItem extends React.Componenet {
//     constructor() {
//         super();
//     }
//     render() {
//         return (
//         );
//     }
// }

class Done extends React.Componenet {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="done-container">
                {/* {itemsDone} */}
            </div>
        );
    }
}

class Todo extends React.Componenet {
    constructor(props) {
        super(props);
        this.state = {
            pending: []
        }
    }

    setBeforeRender(pending) {
        for (var taskIndex in pending) {
            this.state.pending.push(<li>{pending[taskIndex]}</li>)
        }

    }
    ComponenetWillMount(){
        this.setBeforeRender(this.props.pending);
    }
    render() {
        return (
            <div className="todo-container">
                <ul>
                    {this.state.pending}
                </ul>
            </div>
        );
    }
}

class App extends React.Componenet {
    constructor() {
        super();
        this.state = {
            pending: [],
            complete: [],
            content: ""
        }
        this.addTask = this.addTask.bind(this)
        this.taskContent = this.taskContent.bind(this);
    }

    addTask() {
        setState({
            pending: this.state.content
        })
    }

    taskContent() {
        setState({
            content: event.target.value
        })

    }
    render() {
        return (
            <div className="app-container">
                <Todo pending={this.state.pendeing} />
                <Done complete={this.state.complete} />
                <input type="text" onBlur={this.taskContent} />
                <button type="submit" onClick={this.addTask} >Submit</button>
            </div>

        );
    }
}


function render() {
    ReactDOM.render(
        <App />,
        document.getElementById("root")
    );
}
render();
        // var newTask = new Array(this.state.tasksTodo).fill(0);
        // newTask = boxes.map(x => <Box size={this.state.boxSize}/>)