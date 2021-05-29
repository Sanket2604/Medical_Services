import React, { Component } from 'react'
import { Switch, Route, Redirect, Link } from 'react-router-dom'
import page1 from './landingpage'
import page2 from './page2'

class Main extends Component {

    constructor(props){
        super(props);
        this.state = {

        };
    }

    render() {

        return (
            <div>
                <ul style={{display: "flex", justifyContent: "space-around"}}>
                    <li><Link to="page1">Page1</Link></li>
                    <li><Link to="page2">Page2</Link></li>
                    <li><Link to="page3">Page3</Link></li>
                    <li><Link to="page4">Page4</Link></li>
                    <li><Link to="page5">Page5</Link></li>
                    <li><Link to="page6">Page6</Link></li>
                    <li><Link to="page7">Page7</Link></li>
                    <li><Link to="page8">Page8</Link></li>
                    <li><Link to="page9">Page9</Link></li>
                    <li><Link to="page10">Page10</Link></li>
                </ul>
                <Switch>
                    <Route path="/page1" component={page1} />
                    <Route path="/page2" component={page2} />
                    <Redirect to="/home" />
                </Switch>
            </div>
        );
    }

}

export default Main;
