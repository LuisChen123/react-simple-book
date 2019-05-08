import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    HeaderWrapper,
    Logo,
    InnerContainer,
    NavList,
    NavItem,
    SearhBar,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoList,
    SearchInfoTitleSwitch,
    SearchInfoItem,
    SearchWrapper
} from './style.js';
import { GlobalStyled } from '../../static/inconfont/iconfont';
import { CSSTransition } from 'react-transition-group';
import { actionCreators } from './store';

class Header extends Component {
    getListArea(){
        if (this.props.focused) {
            return (
                <SearchInfo>
                    <SearchInfoTitle>
                        热门搜索
                    <SearchInfoTitleSwitch>
                            换一批
                    </SearchInfoTitleSwitch>
                    </SearchInfoTitle>
                    <SearchInfoList>
                    {
                        this.props.list.map((item) =>{
                            return <SearchInfoItem key={item}>{item}</SearchInfoItem>
                        })
                    }
                    </SearchInfoList>
                </SearchInfo>
            )
        } else {
            return null
        }
    }
    render() {
        return (
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
                                    in={this.props.focused}
                                    timeout={200}
                                    classNames='slide'
                                >
                                    <SearhBar
                                        className={this.props.focused ? 'focused' : ''}
                                        onFocus={this.props.handlefocus}
                                        onBlur={this.props.handleblur}
                                    />
                                </CSSTransition>
                                <i className={this.props.focused ? 'focused iconfont' : 'iconfont'}>&#xe637;
                            </i>
                                {this.getListArea()}
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
}

const mapStateToProps = (state) => {
    return {
        focused: state.getIn(['header', 'focused']),
        // state.get('header').get('focused'),
        list:state.getIn(['header','list']),
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        handlefocus() {
            dispatch(actionCreators.searchFocus());
            dispatch(actionCreators.getList());
        },
        handleblur() {
            const action = actionCreators.searchBlur();
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)