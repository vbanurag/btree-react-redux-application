/**
 * Created by anurag on 29/4/17.
 */
import React, { Component } from 'react';
import {
   subTree
} from './../actions/';

import {
    browserHistory
} from 'react-router';
require('./css/app.css');

class SubTree extends Component {
    constructor(props) {
        super(props);
        this.state= {
            data: {
                index: ''
            }
        }
    }
    changeHandler (e) {
        let {data}= this.state;
        data[e.target.name]=e.target.value;
        this.setState({data});
    }

    clickSubmitHandler (){
        this.props.props.dispatch(subTree(this.state))
        console.log('data in subtree', this.state)

    }


    render () {
        const { data } = this.state;
        return (
            <div className="subTree">
                <div className="form-group">
                    <div className="input-group">
				          <span className="input-group-addon">
						  <input type="text"
                                 value={data.index}
                                 className="form-control"
                                 name="index"
                                 placeholder="Enter index for subtree"
                                 onChange={this.changeHandler.bind(this)}
                          />
                          </span>

                        <span className="input-group-addon">
        				  <button className="add btn btn-primary"
                                  onClick={this.clickSubmitHandler.bind(this)}
                          >Get SubTree</button>
                          </span>
                    </div>
                </div>
            </div>
        )
    }

}

export default SubTree;