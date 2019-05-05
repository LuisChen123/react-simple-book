import React from 'react'
import { connect } from 'react-redux'
import {
    HeaderWrapper,
    Logo,
    InnerContainer,
    NavList,
    NavItem,
    SearhBar,
    SearchWrapper
} from './style.js'
import { GlobalStyled } from '../../static/inconfont/iconfont'
import { CSSTransition } from 'react-transition-group'

const Header = (props) => {
    return(
    <HeaderWrapper>
        <GlobalStyled />
        <Logo />
        <InnerContainer>
            <NavList>
                <NavItem className="left">首页</NavItem>
                <NavItem className="left">下载APP</NavItem>
                <NavItem className="left searchTop">
                    <SearchWrapper>
                        <CSSTransition
                            in={props.focused}
                            timeout={200}
                            classNames='slide'
                        >
                            <SearhBar
                                className={props.focused ? 'focused' : ''}
                                onFocus={props.handlefocus}
                                onBlur={props.handleblur}
                            />
                        </CSSTransition>
                        <i className={props.focused ? 'focused iconfont' : 'iconfont'}>&#xe637;
                    </i>
                    </SearchWrapper>
                </NavItem>
                <NavItem className="right writing">
                    <i className="iconfont">&#xe616;</i>
                    写文章
    </NavItem>
                <NavItem className="right register">注册</NavItem>
                <NavItem className="right loginGrey">登录</NavItem>
                <NavItem className="right">Beta</NavItem>
                <NavItem className="right">
                    <i className="iconfont">&#xe600;</i>
                </NavItem>
            </NavList>
        </InnerContainer>
    </HeaderWrapper>
    )
}

const mapStateToProps = (state) => {
    return {
        focused: state.focused,

    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        handlefocus() {
            const action = {
                type: 'search_focus'
            }
            dispatch(action)
        },
        handleblur() {
            const action = {
                type: 'search_blur'
            }
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)