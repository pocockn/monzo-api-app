import React, {Component} from "react";
import "./App.css";
import axios from "axios";
let monzoAuth = require('./config');

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            account: [{
                id: '',
                description: '',
                created: '',
                type: ''
            }]
        }
    }

    componentDidMount() {
        let config = {
            headers: {
                'Authorization': 'Bearer ' + monzoAuth.monzoAuthToken
            }
        };

        axios.get('https://api.monzo.com/accounts', config).then((response) => {
            this.setState({'account': response.data.accounts});
        });
    }

    render() {
        return (
            <div className="App">
                <div className="App-header">
                </div>
                <p className="App-intro">
                    Account name:
                    {this.state.account.map(account =>
                        account.description
                    )}
                </p>
            </div>
        );
    }
}

export default App;
