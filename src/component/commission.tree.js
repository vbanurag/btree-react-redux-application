/**
 * Created by anurag on 29/4/17.
 */
/**
 * Created by anurag on 29/4/17.
 */

import React, { Component } from 'react';
import {
    GET_COMMISSION_DONE,
    GET_COMMISSION_CLEAR
} from './../actions/action';

import {
    browserHistory
} from 'react-router';
require('./css/app.css');

class commissionTree extends Component {
    constructor(props) {
        super(props);
        this.state= {
            data: {
                commission: ''
            }
        }
    }
    changeHandler (e) {
        let {data}= this.state;
        data[e.target.name]=e.target.value;
        this.setState({data});
    }

    clickSubmitHandler (){
        this.props.props.dispatch(GET_COMMISSION_CLEAR());
        this.props.props.dispatch(GET_COMMISSION_DONE(this.state.data.commission));

    }


    render () {
        const { data } = this.state;
        return (
            <div className="commissionTree">
                <div className="form-group">
                    <div className="input-group">
				          <span className="input-group-addon">
						  <input type="text"
                                 value={data.commission}
                                 className="form-control"
                                 name="commission"
                                 placeholder="Enter index"
                                 onChange={this.changeHandler.bind(this)}

                          />
                          </span>

                        <span className="input-group-addon">
        				  <button className="add btn btn-primary"
                                  onClick={this.clickSubmitHandler.bind(this)}
                          >Get Commission</button>
                          </span>
                    </div>
                </div>
            </div>
        )
    }

}

export default commissionTree;