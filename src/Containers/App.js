import React, {Component} from 'react';
import Cardlist from '../Components/Cardlist';
import Scroll from '../Components/Scroll';
import Searchbox from '../Components/Searchbox';
import '../Containers/App.css';
import ErrorBoundary from '../Components/ErrorBoundary';

class App extends Component {
    constructor () {
        super ()
        this.state = {
            Robots: [],
            searchField: ''
        }
        // console.log('constructor');
    }

componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users').then(Response=> Response.json()).then(users=>this.setState({Robots: users}));
    // console.log('componentDidMount');
}

    onSearchChange = (event) => {
        this.setState({searchField: event.target.value});
        console.log(event)
    } 
    
    render () {
        const {Robots, searchField} = this.state;
        const filteredRobot = Robots.filter(Robots =>{
            return Robots.name.toLowerCase().includes(searchField.toLowerCase());
        })
        // console.log('render');
        return !Robots.length ?
            <h1 className='pa6 tc'>Loading...</h1>:
        
       (
                <div className='tc'>
                    <h1 className='f1'>Robo Friends</h1>
                    <Searchbox searchChange ={this.onSearchChange} />
                    <ErrorBoundary>
                        <Cardlist Robot = {filteredRobot} />
                    </ErrorBoundary>
                </div>
            );
    }
}


export default App;
