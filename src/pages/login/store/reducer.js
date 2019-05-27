import { fromJS } from 'immutable';
import * as constants from './constants'

const defaultState = fromJS({
    actived:true,
    isLogin:false,
    remenber:false,
})

export default (state = defaultState, action) => {
    switch(action.type){
        case constants.SWITCH_TYPE:
            return state.set('actived',action.actived)
        case constants.IF_REMENBER_ME:
            return state.set('remenber',action.remenber)
        case constants.CHANGE_TYPE:
            return state.set('loginType',action.loginType) 
        case constants.CHANGE_LOGIN:
            return state.set('isLogin',action.value)
        case constants.LOG_OUT:
            return state.set('isLogin',action.value)
        default: return state;
    }
}