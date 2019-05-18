import { fromJS } from 'immutable';
import * as constants from './constants'

const defaultState = fromJS({
    actived:true,
})

export default (state = defaultState, action) => {
    switch(action.type){
        case constants.SWITCH_TYPE:
            return state.set('actived',action.actived)
        default: return state;
    }
}