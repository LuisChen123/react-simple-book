import { fromJS } from 'immutable';
import * as constants from './constants'

const defaultState = fromJS({
    actived:true,
    remenber:false,
})

export default (state = defaultState, action) => {
    switch(action.type){
        case constants.SWITCH_TYPE:
            return state.set('actived',action.actived)
        case constants.IF_REMENBER_ME:
            return state.set('remenber',action.remenber)

        default: return state;
    }
}