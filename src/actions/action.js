import {
    INSERT_INTO_TREE_ERROR,
    INSERT_INTO_TREE_STARTED,
    INSERT_INTO_TREE_SUCCESS,
    GET_COMMISION_CLEAR,
    GET_COMMISION_STARTED,
    GET_COMMISION_SUCCESS,
    GET_SUBTREE_ERROR,
    GET_SUBTREE_STARTED,
    GET_SUBTREE_SUCCESS
} from '../config/config.constant';

export function INSERT_TREE_INIT() {
    return { type: INSERT_INTO_TREE_STARTED };
}

export function INSERT_TREE_DONE(tree) {
    return { type: INSERT_INTO_TREE_SUCCESS, tree };
}

export function INSERT_TREE_ONERROR(err) {
    return { type: INSERT_INTO_TREE_ERROR, err };
}
export function GET_COMMISSION_INIT() {
    return {type: GET_COMMISION_STARTED}
}
export function GET_COMMISSION_DONE(idx) {
    return {type:GET_COMMISION_SUCCESS, idx}
}
export function GET_COMMISSION_CLEAR( ) {
    return { type: GET_COMMISION_CLEAR }
}

export function GET_SUBTREE_INIT(){
    return { type: GET_SUBTREE_STARTED}
}
export function GET_SUBTREE_DONE(tree){
    return { type: GET_SUBTREE_SUCCESS,tree}
}
export function GET_SUBTREE_ONERROR(err){
    return { type: GET_SUBTREE_ERROR ,err}
}