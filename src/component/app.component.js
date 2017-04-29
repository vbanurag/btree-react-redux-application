import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    browserHistory
} from 'react-router';
require('./css/app.css');
import TreeContainer from './treeContainer';
import DisplayConatiner from './display.container';
import SubtreeDisplay from './subtree.display';
import TreeDisplay from './tree.display';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <div className="Container">
                <div className="treeInsert">
                    <TreeContainer
                        props = {this.props} />
                </div>
                <div className="treeDisplay">
                    {this.props.treeVal !== undefined ?
                        <TreeDisplay props = {this.props} />
                        : <h1></h1>
                    }
                    {this.props.commission !== undefined?<DisplayConatiner
                            props = {this.props} />:<h1></h1> }
                    {this.props.subtreeVal == true ?<SubtreeDisplay
                            props = {this.props} />:<h1></h1>}

                </div>

            </div>
        )
    }

}
const mapStateToProps = state => state;

const AppContainer = connect(mapStateToProps)(App);
export default AppContainer;