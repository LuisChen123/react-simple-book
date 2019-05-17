import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Topic from './components/Topic'
import List from './components/List'
import Recommend from './components/Recommend'
import Writer from './components/Writer'

import {
    HomeWrapper,
    HomeLeft,
    HomeRight,
    BackTop,
} from './style';
import { actionsCreators } from './store';

class Home extends PureComponent {

    render() {
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img
                        className="banner-image"
                        alt=""
                        src="//upload.jianshu.io/admin_banners/web_images/4658/ef2cf6b3478da3cb7482f228212ecb59603fd408.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" />
                    <Topic />
                    <List />
                </HomeLeft>
                <HomeRight>
                    <Recommend />
                    <Writer />
                </HomeRight>
                {this.props.showScroll ? <BackTop onClick={this.handleScrollTop}>返回顶部</BackTop> : null}
            </HomeWrapper>
        )
    }
    handleScrollTop() {
        window.scrollTo(0, 0)
    }
    bindEvents() {
        window.addEventListener('scroll', this.props.changeScrollTopShow)
    }
    componentDidMount() {
        this.props.changeHomeData();
        this.bindEvents();
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.props.changeScrollTopShow)
    }

}

const mapState = (state) => ({
    showScroll: state.getIn(['home', 'showScroll'])
})

const mapDispatch = (dispatch) => ({
    changeHomeData() {
        const action = actionsCreators.getHomeInfo();
        dispatch(action)
    },
    changeScrollTopShow() {
        if (document.documentElement.scrollTop > 100) {
            dispatch(actionsCreators.toggleTopShow(true))
        } else {
            dispatch(actionsCreators.toggleTopShow(false))
        }

    }
})

export default connect(mapState, mapDispatch)(Home)