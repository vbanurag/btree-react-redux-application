/**
 * Created by anurag on 29/4/17.
 */

import React, { Component } from 'react';

const treeDisplay = (props) => {
    const tree = props.props.tree;

    return(
        <div className= "tree">
            <div className="panel panel-default">
                <div className="panel-heading">Tree</div>
                <div className="panel-body">
                    <table className="table">
                        <thead>
                        <tr>
                            <th>Index</th>
                            <th>Value</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            tree.map( (value, index) => (
                                <tr>
                                    <td>
                                        {index}
                                    </td>
                                    <td>
                                        {value}
                                    </td>
                                </tr>
                            ))
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    )
}
export default treeDisplay