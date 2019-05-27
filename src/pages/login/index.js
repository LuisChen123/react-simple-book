import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {
    LoginWrapper,
    LoginBox,
    TitleBox,
    InputBox,
    Remember,
} from './style';
import { actionCreators } from './store';
import {Redirect} from 'react-router-dom';

class Login extends PureComponent {
    componentDidMount(){
        if(this.props.match.params.type === "1"){
            this.props.handleLoginTypeSwitch(1);
            console.log(1)
        }else if(this.props.match.params.type === "2"){
            this.props.handleLoginTypeSwitch(2);
            console.log(2)
        }
    }

    render() {
        // console.log(this.props);
        const { actived, handleSwitch ,remenber,handleRemenberMe,isLogin} = this.props
        console.log(isLogin)
        if(!isLogin){
            return (
                <LoginWrapper>
                    <LoginBox>
                        <TitleBox>
                            <h2 className={actived ? 'active' : ''} onClick={() => { handleSwitch(actived)}}>登录</h2>
                            <b>.</b>
                            <h2 className={actived ? '' : 'active'} onClick={() => { handleSwitch(actived)}}>注册</h2>
                        </TitleBox>
                        <InputBox>
                            <input className={actived ? "phone" : "hidden"}  placeholder="手机号或者邮箱" ref={(input)=>{this.logInAccount = input}}></input>
                            <input className={actived ? "phone" : "hidden"} type="password" placeholder="密码" ref={(input)=>{this.logInPassword = input}}></input>
      {/* innerRef是style-component提供的用于取代ref的方法，因为使用了style-component这个第三方模块后，是无法取到DOM节点上的元素的，所以style-component提供了innerRef来替代ref */}
                            <input className={actived ? "hidden" : "phone"}  placeholder="你的昵称" ref={(input)=>{this.nickName = input}}></input>
                            <input className={actived ? "hidden" : "phone"} placeholder="你的手机号" ref={(input)=>{this.phoneName = input}}></input>
                            <input className={actived ? "hidden" : "phone"} type="password" placeholder="设置密码" ref={(input)=>{this.password = input}}></input>
                        </InputBox>
                        <Remember>
                            <label className={actived ? "" : "hidden"}>
                            <input className={actived ? "" : "hidden"} 
                            type="checkbox" onChange={()=>handleRemenberMe(remenber)} name="check"/>记住我</label>
                            <label className={actived ? "" : "hidden"}>登录遇到问题?</label>
                        </Remember>
                        <button className={actived ? "hidden" : "loginButton"}>注册</button>
                        <button className={actived ? "loginButton" : "hidden"} onClick={()=>this.props.logIn(this.logInAccount, this.logInPassword)}>登录</button>
                    </LoginBox>
                </LoginWrapper>
            )
        }else{
            return <Redirect to={'/'} />
        }
    }
}

const mapState = (state) => ({
    actived: state.getIn(['login', 'actived']),
    remenber:state.getIn(['login','remenber']),
    loginType:state.getIn(['login','loginType']),
    isLogin:state.getIn(['login','isLogin'])
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
    },
    handleLoginTypeSwitch(type){
        if(type === 1){
            const action = actionCreators.switchType(false);
            dispatch(action)
        }else{
            const action = actionCreators.switchType(true);
            dispatch(action)
        }
    },
    logIn(account,password){
        console.log(account.value,password.value)
        const action =actionCreators.loginVer(account.value,password.value)
        dispatch(action)
    },
})

export default connect(mapState, mapDispatch)(Login)