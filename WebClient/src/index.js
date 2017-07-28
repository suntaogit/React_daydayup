var React = require('react');
var ReactDOM = require('react-dom');

class App extends React.Component{
    render(){
        return(
            <div>hello, world</div>
        );
    }
}

ReactDOM.render(<APP />,document.getElementById('app'));