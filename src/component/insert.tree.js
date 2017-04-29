/**
 * Created by anurag on 29/4/17.
 */

import React, { Component } from 'react';
import {
    insertTree
} from './../actions/';

import {
    browserHistory
} from 'react-router';
require('./css/app.css');

class insertIntoTree extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data:{
                node:''
            }
        }
    }
    changeHandler (e) {
        let {data}= this.state;
        data[e.target.name]=e.target.value;
        this.setState({data});
    }

    clickSubmitHandler (){
        this.props.props.dispatch(insertTree(this.state));
        this.setState ({
            data:{
                node:''
            }
        })
        console.log(this.state,'---tree node',this.props);

    }


    render () {
        console.log(this.props,'after value')
        const { data } = this.state;
        return (
            <div className="inserTree">
                <div className="form-group">
                    <div className="input-group">
				          <span className="input-group-addon">
						  <input type="text"
                                 value={ data.node }
                                 className="form-control"
                                 name="node"
                                 placeholder="insert node"
                                 onChange={this.changeHandler.bind(this)}
                          />
                          </span>

                        <span className="input-group-addon">
        				  <button className="add btn btn-primary"
                                  onClick={ this.clickSubmitHandler.bind(this) }
                          >Add</button>
                          </span>
                    </div>
                </div>
            </div>
        )
    }

}

export default insertIntoTree;