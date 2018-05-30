// class ListItem extends React.Componenet {
//     constructor() {
//         super();
//     }
//     render() {
//         return (
//         );
//     }
// }

// class Done extends React.Componenet {
//     constructor() {
//         super();
//     }
//     render() {
//         return (
//             <div className="done-container">
//                 {itemsDone}
//             </div>
//         );
//     }
// }

// class Todo extends React.Componenet {
//     constructor() {
//         super();
//         this.state = {
//             tasksDone: []
//         }
//     }
//     render() {
//         return (
//             <div className="todo-container">
//                 {itemsTodo}
//                 <Done />
//             </div>
//         );
//     }
// }

// class TaskType extends React.Componenet {
//     constructor() {
//         super();
//         this.state = {
//             tasksDone: []
//         }
//     }
//     render() {
//         return (
//             <div className={this.props.tasktype}>
//                 {tasks}
//             </div>
//         );
//     }
// }

class App extends React.Componenet {
    constructor(props) {
        super(props);
        // this.state = {
        //     tasksTodo: []
        // }
        // this.addTask = this.addTask.bind(this)
        // this.showPopup = this.showPopup.bind(this)
    }

    // addTask() {
    //     var newTask;
    //     newTask = this.showPopup(); // TO DO will return the input text
    //     setState({
    //         tasksTodo: this.state.tasks.push(newTask)
    //     })
    // }
    render() {
        return (
            <div className="app-container">
                {/* <TaskType tasktype="todo" />
                <TaskType tasktype="done" /> */}
                <button type="submit" /*onClick={this.addTask}*/>Submit</button>
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