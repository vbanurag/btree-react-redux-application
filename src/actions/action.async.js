import {
    INSERT_TREE_INIT,
    INSERT_TREE_DONE,
    INSERT_TREE_ONERROR,
    GET_COMMISSION_INIT,
    GET_COMMISSION_DONE,
    GET_COMMISSION_CLEAR,
    GET_SUBTREE_INIT,
    GET_SUBTREE_DONE,
    GET_SUBTREE_ONERROR
} from './action';
import {
    APIURLINSERT,
    GETTREE,
    TREECOMMISSION,
} from './../config/config.url.constant';


export function insertTree(product) {
    return (dispatch) => {
        dispatch(INSERT_TREE_INIT())
        fetch(APIURLINSERT, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({node:product})
        })
            .then(res => res.json())
            .then(products => {
                dispatch(INSERT_TREE_DONE(products))
            })
            .catch((err) => {
                dispatch(INSERT_TREE_ONERROR(err))
            })
    }
}

export function subTree(product) {
    return (dispatch) => {
        dispatch(GET_SUBTREE_INIT())
        fetch(GETTREE, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({node:product})
        })
            .then(res => res.json())
            .then(products => {
                dispatch(GET_SUBTREE_DONE(products))
            })
            .catch((err) => {
                dispatch(GET_SUBTREE_ONERROR(err))
            })
    }
}


