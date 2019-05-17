import React, { PureComponent } from 'react';
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
import {Link} from 'react-router-dom';

class Header extends PureComponent {
    getListArea() {
        const { focused ,mouseIn, list ,page,totalPage, handleMouseEnter, handleMouseLeave,handleChangePage} = this.props;
        const newList = list.toJS();
        const pageList = []

        if(newList.length){
            for(let i = (page-1) * 10; i < page * 10; i++){
                pageList.push(
                    <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
                )
            }
        } 
       
        if (focused || mouseIn) {
            return (
                <SearchInfo onMouseEnter = {handleMouseEnter}
                            onMouseLeave = {handleMouseLeave}
                >
                    <SearchInfoTitle>
                        热门搜索
                    <SearchInfoTitleSwitch onClick={()=>handleChangePage(page, totalPage,this.spinIcon)}>
                    <i ref={(icon) => {this.spinIcon = icon}} className="iconfont spin">&#xe851;</i>
                    换一批
                    </SearchInfoTitleSwitch>
                    </SearchInfoTitle>
                    <SearchInfoList> 
                           {pageList}            
                    </SearchInfoList>
                </SearchInfo>
            )
        } else {
            return null
        }
    }
    render() {
        const { focused ,handlefocus,handleblur,list } = this.props;
        return (
            <HeaderWrapper>
                <GlobalStyled />
                <Link to="/">
                <Logo />
                </Link>
                <InnerContainer>
                    <NavList>
                        <NavItem className="left">首页</NavItem>
                        <NavItem className="left">下载APP</NavItem>
                        <NavItem className="left searchTop">
                            <SearchWrapper>
                                <CSSTransition
                                    in={focused}
                                    timeout={200}
                                    classNames='slide'
                                >
                                    <SearhBar
                                        className={focused ? 'focused' : ''}
                                        onFocus={()=>handlefocus(list)}
                                        onBlur={handleblur}
                                    />
                                </CSSTransition>
                                <i className={focused ? 'focused iconfont zoom' : 'iconfont zoom'}>&#xe637;
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
        list: state.getIn(['header', 'list']),
        page:state.getIn(['header','page']),
        totalPage: state.getIn(['header','totalPage']),
        mouseIn:state.getIn(['header','mouseIn']),
    }
} 
const mapDispatchToProps = (dispatch) => {
    return {
        handlefocus(list) {
            if(list.size === 0){
                dispatch(actionCreators.getList());
            }
            dispatch(actionCreators.searchFocus());
        },
        handleblur() {
            dispatch(actionCreators.searchBlur())
        },
        handleMouseEnter(){
            dispatch(actionCreators.mouseEnter())
        },
        handleMouseLeave(){
            dispatch(actionCreators.mouseLeave())
        },
        handleChangePage(page, totalPage,spin){
            let orginAngle = spin.style.transform.replace(/[^0-9]/ig, '');   
            if(orginAngle){
                orginAngle = parseInt(orginAngle,10)
            }else{
                orginAngle=0
            }
            spin.style.transform ='rotate(' + (orginAngle + 360) + 'deg)';

            if(page < totalPage){
                dispatch(actionCreators.changePage(page + 1))
            }
            else{
                dispatch(actionCreators.changePage(1))
            }
        }      
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)