/**
 * Created by anurag on 29/4/17.
 */
import React, { Component } from 'react';

const subtreeDisplay = (props) => {
    const subtree = props.props.subtree;

    return(
        <div className= "subtree">
            <div className="panel panel-default">
                <div className="panel-heading">Subtree of tree</div>
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
                            subtree.map( (value, index) => (
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
export default subtreeDisplay