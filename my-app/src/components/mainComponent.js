import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import page1 from './landingpage'
import page2 from './page2'
import page3 from './page3'
import page4 from './page4'
import page5 from './page5'
import page6 from './page6'
import page7 from './page7'
import page8 from './page8'
import page9 from './page9'
import page10 from './page10'
import Signup from './signup';

class Main extends Component {

    constructor(props){
        super(props);
        this.state = {

        };
    }

    render() {

        return (
            <div>
                <Switch>
                    <Route path="/page1" component={page1} />
                    <Route path="/page2" component={page2} />
                    <Route path="/page3" component={page3} />
                    <Route path="/page4" component={page4} />
                    <Route path="/page5" component={page5} />
                    <Route path="/page6" component={page6} />
                    <Route path="/page7" component={page7} />
                    <Route path="/page8" component={page8} />
                    <Route path="/page9" component={page9} />
                    <Route path="/page10" component={page10} />
                    <Route path="/signup" component={Signup} />
                    <Redirect to="/page1" />
                </Switch>
            </div>
        );
    }

}

export default Main;
