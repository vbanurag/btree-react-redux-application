/**
 * Created by anurag on 29/4/17.
 */
import React, { Component } from 'react';
import InsertTree from './insert.tree';
import CommissionTree from './commission.tree';
import SubTree from './tree.subtree';

const treeConatiner = (props) => {
    return(
        <div>
            <InsertTree props={props.props} />
            <CommissionTree props = {props.props} />
            <SubTree props = {props.props} />
        </div>
    )
}
export default treeConatiner;