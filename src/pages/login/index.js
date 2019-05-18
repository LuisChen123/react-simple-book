import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {
    LoginWrapper,
    LoginBox,
    TitleBox,
    InputBox,
    Remember,
} from './style';
import { actionCreators } from './store'

class Login extends PureComponent {

    render() {
        const { actived, handleSwitch ,remenber,handleRemenberMe} = this.props
        return (
            <LoginWrapper>
                <LoginBox>
                    <TitleBox>
                        <h2 className={actived ? 'active' : ''} onClick={() => { handleSwitch(actived)}}>登录</h2>
                        <b>.</b>
                        <h2 className={actived ? '' : 'active'} onClick={() => { handleSwitch(actived)}}>注册</h2>
                    </TitleBox>
                    <InputBox>
                        <input className={actived ? "phone" : "hidden"}  placeholder="手机号或者邮箱"></input>
                        <input className={actived ? "phone" : "hidden"} placeholder="密码"></input>

                        <input className={actived ? "hidden" : "phone"}  placeholder="你的昵称"></input>
                        <input className={actived ? "hidden" : "phone"} placeholder="你的手机号"></input>
                        <input className={actived ? "hidden" : "phone"} placeholder="设置密码"></input>
                    </InputBox>
                    <Remember>
                        <label className={actived ? "" : "hidden"}>
                        <input className={actived ? "" : "hidden"} 
                        type="checkbox" onChange={()=>handleRemenberMe(remenber)} name="check" />记住我</label>
                        <label className={actived ? "" : "hidden"}>登录遇到问题?</label>
                    </Remember>
                    <button className="loginButton" className={actived ? "hidden" : "loginButton"}>注册</button>
                    <button className="loginButton" className={actived ? "loginButton" : "hidden"}>登录</button>
                </LoginBox>
            </LoginWrapper>
        )
    }
}

const mapState = (state) => ({
    actived: state.getIn(['login', 'actived']),
    remenber:state.getIn(['login','remenber'])
})

const mapDispatch = (dispatch) => ({
    handleSwitch(actived) {
        if (actived === true) {
            const action = actionCreators.switchType(false);
            dispatch(action)
        } else {
            const action = actionCreators.switchType(true);
            dispatch(action)
        }
    },
    handleRemenberMe(remenber){
        console.log(remenber)  
        if(remenber === true){
        const action = actionCreators.ifRemenberMe(false);
        dispatch(action);
        }else{
        const action = actionCreators.ifRemenberMe(true);
        dispatch(action);
        }
    }

})

export default connect(mapState, mapDispatch)(Login)