import React from 'react';
import MostPopular from "./MostPopular"
import { Switch, Route } from "react-router-dom"
import SingleShow from './SingleShow';

class Main extends React.Component {

    render() {
        return (<main>
            <Switch>
                <Route exact path="/" component={MostPopular} />
                <Route path="/:id" component={SingleShow} />
            </Switch>
        </main>)
    }
}

export default Main