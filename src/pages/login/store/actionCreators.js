import * as constants from './constants';
import axios from 'axios';

const changeLogin = (status) =>({
    type:constants.CHANGE_LOGIN,
    value:true
})

export const logout = () =>({
    type:constants.LOG_OUT,
    value:false
})

export const switchType = (actived) =>({
    type:constants.SWITCH_TYPE,
    actived
})

export const ifRemenberMe = (remenber) =>({
    type:constants.IF_REMENBER_ME,
    remenber
})

export const changeType = (loginType) =>({
    type:constants.CHANGE_TYPE,
    loginType
})

export const loginVer = (logInAccount, logInPassword) =>{
    return (dispatch) =>{
        axios.get('/api/Login.json?account=' + logInAccount + '&password=' + logInPassword)
        .then((res)=>{
            if(res.status === 200){
                const result = res.data.data;
                if(result){
                    dispatch(changeLogin());
                }
            }else{
                console.log("Please Check Your Internent Connection");
            }
        }).catch(err =>{
            console.log(err)
        })
    }
}






