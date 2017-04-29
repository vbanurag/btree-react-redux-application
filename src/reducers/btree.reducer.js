import {
    INSERT_INTO_TREE_SUCCESS,
    INSERT_INTO_TREE_STARTED,
    INSERT_INTO_TREE_ERROR,
    GET_SUBTREE_STARTED,
    GET_SUBTREE_SUCCESS,
    GET_SUBTREE_ERROR,
    GET_COMMISION_STARTED,
    GET_COMMISION_SUCCESS,
    GET_COMMISION_CLEAR
} from '../config/config.constant';


const intialState = {
    tree:[],
    commisonArray:[],
    commission:undefined,
    subtree: '',
    loading:'',
    err:'',
    subtreeVal:false,
    treeVal:undefined
}

export const btreeReducer = (state = intialState, action) => {
    switch (action.type) {
        case INSERT_INTO_TREE_STARTED:
            {
                return {
                    ...state,
                    loading: true,
                    err:null
                }
            }
        case INSERT_INTO_TREE_SUCCESS:
            {
                let tree = action.tree.tree.tree;
                let comm = action.tree.tree.commission
                return {
                    ...state,
                    treeVal:true,
                    tree: tree,
                    commisonArray: comm,
                    loading: false,
                    err:null
                }
            }
        case INSERT_INTO_TREE_ERROR:
            {
                return {
                    ...state,
                    err: action.err
                }
            }
        case GET_COMMISION_SUCCESS:{

            let comm = action.idx;
            console.log(comm,'comm')
            return {
                ...state,
                commission: comm,
                loading: false,
                err:null
            }
        }
        case GET_COMMISION_CLEAR: {
            return {
                ...state,
                commission: undefined,
                loading: false,
                err:null
            }
        }
        case GET_SUBTREE_STARTED :{
            return {
                ...state,
                subtree:'',
                loading: true,
                err:null,
                subtreeVal:false
            }

        }
        case GET_SUBTREE_SUCCESS : {
            console.log('tree' , action.tree);
            const subtree = action.tree.subtree;
            state.subtreeVal = true;
            return{
                ...state,
                subtree:subtree,
                err: null
            }
        }
        case GET_SUBTREE_ERROR : {
            return{
                ...state,
                err: action.err
            }
        }

    }
    return state;
}
