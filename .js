
class FirstComponent extends React.Component {
    render() {
        return (
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
            </ul>
        );
    }
}

ReactDOM.render(
    <FirstComponent/>,
    document.getElementById("root")
);
