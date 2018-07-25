import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Login } from './components';
import { IndexContainer } from './containers';

import 'bootstrap/dist/css/bootstrap.css';
import './style.css';

class App extends React.Component {
    Public render() {
        return (
            <Router>
                <div>
                    <Switch>
                        <Route exact={true} path="/" component={IndexContainer} />
                        <Route path="/login/" component={Login} />
                    </Switch>
                </div>
            </Router>
        );
    }
}
export default App;
