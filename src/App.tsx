import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Login, Header, Message, Timeline, Writer } from './components';

import { IndexContainer } from './containers';

import 'bootstrap/dist/css/bootstrap.css';
import './style.css';

class App extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Switch>
                        <Route exact={true} path="/" component={IndexContainer} />
                        <Route path="/login/" component={Login} />
                        <Route path="/header/" component={Header} />
                        <Route path="/message/" component={Message} />
                        <Route path="/timeline/" component={Timeline} />
                        <Route path="/writer/" component={Writer} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
