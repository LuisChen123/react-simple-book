import React, { Component } from 'react'
import {
    HeaderWrapper,
    Logo,
    InnerContainer,
    NavList,
    NavItem,
    SearhBar,
    SearchWrapper
} from './style.js'
import  { GlobalStyled } from '../../static/inconfont/iconfont'
import { CSSTransition } from 'react-transition-group'

class Header extends Component {
    constructor(props) {
        super(props)
        this.state={
            focused:false,
        }
        this.handlefocus= this.handlefocus.bind(this)
        this.handleblur =this.handleblur.bind(this)
    }

    handlefocus(){
        this.setState({
            focused:true,
        })
    }

    handleblur(){
        this.setState({
            focused:false,
        })
    }


    render() {
        return (
            
            <HeaderWrapper>  
                <GlobalStyled/>
            <Logo/>
            <InnerContainer>
                <NavList>
                <NavItem className="left">首页</NavItem>
                <NavItem className="left">下载APP</NavItem>
                <NavItem className="left searchTop">
                <SearchWrapper>
                <CSSTransition
                in={this.state.focused}
                timeout={200}
                classNames='slide'
                >
                <SearhBar
                className ={this.state.focused ? 'focused':''}
                onFocus={this.handlefocus}
                onBlur={this.handleblur}
                />
                </CSSTransition>
                <i className ={this.state.focused ? 'focused iconfont':'iconfont'}>&#xe637;
                </i>
                </SearchWrapper>
                </NavItem>
                <NavItem className="right writing">
                <i className ="iconfont">&#xe616;</i>
                写文章
                </NavItem>
                <NavItem className="right register">注册</NavItem>
                <NavItem className="right loginGrey">登录</NavItem>
                <NavItem className="right">Beta</NavItem>
                <NavItem className="right">
                <i className ="iconfont">&#xe600;</i>
                </NavItem>
                </NavList>
            </InnerContainer>    
            </HeaderWrapper>
        )
    }
}

export default Header