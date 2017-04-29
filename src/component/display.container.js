/**
 * Created by anurag on 29/4/17.
 */
import React, { Component } from 'react';

const CommissionDisplay = (props) => {

    return(
        <div className= "commission">
            <div className="panel panel-default">
                <div className="panel-heading">Commission of index {props.props.commission}</div>
                <div className="panel-body">{props.props.commisonArray[props.props.commission]}</div>
            </div>
        </div>

    )
}
export default CommissionDisplay;