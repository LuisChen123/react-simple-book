import * as constants from './constants';
import { fromJS } from 'immutable';
import { stat } from 'fs';

const defaultState = fromJS({
    focused: false,
    list:[],
});

export default (state = defaultState , action) =>{
if(action.type === constants.SEARCH_FOUCUS){
    return state.set('focused',true);
}

if(action.type === constants.SEARCH_BLUR){
    return state.set('focused',false);
}

if(action.type === constants.CHANGE_LIST){
    return state.set('list', action.data);
}
return state;
}